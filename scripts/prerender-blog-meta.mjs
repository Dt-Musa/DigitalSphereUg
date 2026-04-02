import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://digitalsphereug.tech";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function upsertMetaTag(html, attrName, attrValue, contentValue) {
  const pattern = new RegExp(`<meta\\s+${attrName}=[\"']${attrValue}[\"'][^>]*>`, "i");
  const tag = `<meta ${attrName}="${attrValue}" content="${escapeHtml(contentValue)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `  ${tag}\n  </head>`);
}

function upsertCanonical(html, href) {
  const pattern = /<link\s+rel=["']canonical["'][^>]*>/i;
  const tag = `<link rel="canonical" href="${escapeHtml(href)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `  ${tag}\n  </head>`);
}

function extractPostsMeta(appSource) {
  const startIndex = appSource.indexOf("const POSTS = [");
  if (startIndex < 0) {
    return [];
  }

  const endIndex = appSource.indexOf("\n];", startIndex);
  if (endIndex < 0) {
    return [];
  }

  const block = appSource.slice(startIndex, endIndex);
  const lines = block.split(/\r?\n/);
  const posts = [];

  for (const line of lines) {
    if (!line.includes("slug:") || !line.includes("title:") || !line.includes("excerpt:")) {
      continue;
    }

    const slugMatch = line.match(/slug:\"([^\"]+)\"/);
    const titleMatch = line.match(/title:\"([^\"]+)\"/);
    const excerptMatch = line.match(/excerpt:\"([^\"]+)\"/);

    if (!slugMatch || !titleMatch || !excerptMatch) {
      continue;
    }

    posts.push({
      slug: slugMatch[1],
      title: titleMatch[1],
      description: excerptMatch[1],
    });
  }

  return posts;
}

function main() {
  const projectRoot = process.cwd();
  const appPath = path.join(projectRoot, "src", "App.jsx");
  const distIndexPath = path.join(projectRoot, "dist", "index.html");

  if (!fs.existsSync(appPath) || !fs.existsSync(distIndexPath)) {
    return;
  }

  const appSource = fs.readFileSync(appPath, "utf8");
  const posts = extractPostsMeta(appSource);
  if (posts.length === 0) {
    return;
  }

  const baseHtml = fs.readFileSync(distIndexPath, "utf8");

  for (const post of posts) {
    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    let html = baseHtml;

    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(post.title)} | DigitalSphereUg Blog</title>`);
    html = upsertMetaTag(html, "name", "description", post.description);
    html = upsertMetaTag(html, "property", "og:type", "article");
    html = upsertMetaTag(html, "property", "og:site_name", "DigitalSphereUg");
    html = upsertMetaTag(html, "property", "og:title", `${post.title} | DigitalSphereUg Blog`);
    html = upsertMetaTag(html, "property", "og:description", post.description);
    html = upsertMetaTag(html, "property", "og:url", postUrl);
    html = upsertMetaTag(html, "property", "og:image", DEFAULT_OG_IMAGE);
    html = upsertMetaTag(html, "name", "twitter:card", "summary_large_image");
    html = upsertMetaTag(html, "name", "twitter:title", `${post.title} | DigitalSphereUg Blog`);
    html = upsertMetaTag(html, "name", "twitter:description", post.description);
    html = upsertMetaTag(html, "name", "twitter:image", DEFAULT_OG_IMAGE);
    html = upsertCanonical(html, postUrl);

    const outputPath = path.join(projectRoot, "dist", "blog", post.slug, "index.html");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, "utf8");
  }
}

main();
