import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://digitalsphereug.tech";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;
const POST_IMAGE_SOURCE_BY_SLUG = {
  "rwa-tokenization-africas-on-chain-moment-uganda-2026": "src/assets/Blog/article7.jpg",
  "celo-proof-of-ship-season-2-is-live": "src/assets/Blog/article6.jpeg",
  "chainlink-digital-sphere-kyambogo": "src/assets/Blog/kyambongo-lecture -room.jpg.jpg",
  "the-room-laughed-i-stayed-now-were-building": "src/assets/Blog/article4.jpeg",
  "what-is-blockchain-and-why-every-ugandan-should-care-right-now": "src/assets/Blog/article1.jpg",
  "top-free-resources-web3-2026": "src/assets/Blog/article2.jpg",
  "blockchain-opportunities-uganda": "src/assets/Blog/article3.jpg",
};
const EVENT_META_BY_SLUG = {
  "blockchain-devfest-kampala-2026": {
    title: "Blockchain DevFest Kampala 2026",
    description: "Africa's premier Web3 developer conference in Kampala. Theme: Responsible Decentralized AI.",
    imageSource: "src/assets/events/devfest-2026-flyer.jpeg",
  },
  "defi-with-chainlink-oracles": {
    title: "DeFi with Chainlink Oracles",
    description: "Chainlink East Africa joined students for DeFi, oracles, and Web3 careers at Kyambogo.",
    imageSource: "src/assets/events/chainlink-flyer.jpg.jpg",
  },
  "kampala-blockchain-summit-2026": {
    title: "Kampala Blockchain Summit 2025",
    description: "Summit session highlights and replay from Kampala.",
    imageSource: "https://img.youtube.com/vi/U3uLtixzAYE/hqdefault.jpg",
  },
  "gdg-kampala-web3-meetup": {
    title: "GDG Kampala Web3 Meetup",
    description: "Beginner-friendly talks, networking, and practical Web3 demos.",
    imageSource: "src/assets/community/chainlink.jpg.jpg",
  },
  "bau-youth-blockchain-innovation": {
    title: "BAU Youth Blockchain Innovation",
    description: "BAU youth innovation programme on blockchain foundations and growth pathways.",
    imageSource: "src/assets/gallery/buildl-session group.jpg",
  },
};

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

function extractImageImportMap(appSource, projectRoot) {
  const map = new Map();
  const importPattern = /import\s+(\w+)\s+from\s+"(.+?)";/g;
  let match = importPattern.exec(appSource);

  while (match) {
    const symbol = match[1];
    const importPath = match[2];

    if (importPath.startsWith("./assets/")) {
      const absolutePath = path.join(projectRoot, "src", importPath.replace("./", ""));
      map.set(symbol, absolutePath);
    }

    match = importPattern.exec(appSource);
  }

  return map;
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
    const imageSymbolMatch = line.match(/image:([^,]+)/);

    if (!slugMatch || !titleMatch || !excerptMatch) {
      continue;
    }

    posts.push({
      slug: slugMatch[1],
      title: titleMatch[1],
      description: excerptMatch[1],
      imageRef: imageSymbolMatch ? imageSymbolMatch[1].trim() : "",
    });
  }

  return posts;
}

function resolvePostImageUrl(post, imageImportMap, distDir) {
  const rawRef = String(post.imageRef || "").trim();
  const mappedRelativeSource = POST_IMAGE_SOURCE_BY_SLUG[post.slug];
  const mappedAbsoluteSource = mappedRelativeSource
    ? path.join(process.cwd(), mappedRelativeSource)
    : null;

  if (mappedAbsoluteSource && fs.existsSync(mappedAbsoluteSource)) {
    const ext = path.extname(mappedAbsoluteSource) || ".jpg";
    const outputRelativePath = path.posix.join("og", "blog", `${post.slug}${ext.toLowerCase()}`);
    const outputAbsolutePath = path.join(distDir, "og", "blog", `${post.slug}${ext.toLowerCase()}`);

    fs.mkdirSync(path.dirname(outputAbsolutePath), { recursive: true });
    fs.copyFileSync(mappedAbsoluteSource, outputAbsolutePath);

    return `${SITE_URL}/${outputRelativePath}`;
  }

  if (!rawRef) {
    return DEFAULT_OG_IMAGE;
  }

  if (/^https?:\/\//i.test(rawRef.replaceAll("\"", ""))) {
    return rawRef.replaceAll("\"", "");
  }

  const sourcePath = imageImportMap.get(rawRef);
  if (!sourcePath || !fs.existsSync(sourcePath)) {
    return DEFAULT_OG_IMAGE;
  }

  const ext = path.extname(sourcePath) || ".jpg";
  const outputRelativePath = path.posix.join("og", "blog", `${post.slug}${ext.toLowerCase()}`);
  const outputAbsolutePath = path.join(distDir, "og", "blog", `${post.slug}${ext.toLowerCase()}`);

  fs.mkdirSync(path.dirname(outputAbsolutePath), { recursive: true });
  fs.copyFileSync(sourcePath, outputAbsolutePath);

  return `${SITE_URL}/${outputRelativePath}`;
}

function resolveMappedImageUrl(slug, mappedSource, distDir, folder) {
  if (!mappedSource) {
    return DEFAULT_OG_IMAGE;
  }

  if (/^https?:\/\//i.test(mappedSource)) {
    return mappedSource;
  }

  const mappedAbsoluteSource = path.join(process.cwd(), mappedSource);
  if (!fs.existsSync(mappedAbsoluteSource)) {
    return DEFAULT_OG_IMAGE;
  }

  const ext = path.extname(mappedAbsoluteSource) || ".jpg";
  const outputRelativePath = path.posix.join("og", folder, `${slug}${ext.toLowerCase()}`);
  const outputAbsolutePath = path.join(distDir, "og", folder, `${slug}${ext.toLowerCase()}`);

  fs.mkdirSync(path.dirname(outputAbsolutePath), { recursive: true });
  fs.copyFileSync(mappedAbsoluteSource, outputAbsolutePath);

  return `${SITE_URL}/${outputRelativePath}`;
}

function main() {
  const projectRoot = process.cwd();
  const appPath = path.join(projectRoot, "src", "App.jsx");
  const distDir = path.join(projectRoot, "dist");
  const distIndexPath = path.join(projectRoot, "dist", "index.html");

  if (!fs.existsSync(appPath) || !fs.existsSync(distIndexPath)) {
    return;
  }

  const appSource = fs.readFileSync(appPath, "utf8");
  const posts = extractPostsMeta(appSource);
  const imageImportMap = extractImageImportMap(appSource, projectRoot);
  if (posts.length === 0) {
    return;
  }

  const baseHtml = fs.readFileSync(distIndexPath, "utf8");

  for (const post of posts) {
    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    const postImageUrl = resolvePostImageUrl(post, imageImportMap, distDir);
    let html = baseHtml;

    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(post.title)} | DigitalSphereUg Blog</title>`);
    html = upsertMetaTag(html, "name", "description", post.description);
    html = upsertMetaTag(html, "property", "og:type", "article");
    html = upsertMetaTag(html, "property", "og:site_name", "DigitalSphereUg");
    html = upsertMetaTag(html, "property", "og:title", `${post.title} | DigitalSphereUg Blog`);
    html = upsertMetaTag(html, "property", "og:description", post.description);
    html = upsertMetaTag(html, "property", "og:url", postUrl);
    html = upsertMetaTag(html, "property", "og:image", postImageUrl);
    html = upsertMetaTag(html, "name", "twitter:card", "summary_large_image");
    html = upsertMetaTag(html, "name", "twitter:title", `${post.title} | DigitalSphereUg Blog`);
    html = upsertMetaTag(html, "name", "twitter:description", post.description);
    html = upsertMetaTag(html, "name", "twitter:image", postImageUrl);
    html = upsertCanonical(html, postUrl);

    const outputPath = path.join(projectRoot, "dist", "blog", post.slug, "index.html");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, "utf8");
  }

  const eventEntries = Object.entries(EVENT_META_BY_SLUG);
  for (const [eventSlug, eventMeta] of eventEntries) {
    const eventUrl = `${SITE_URL}/events/${eventSlug}`;
    const eventImageUrl = resolveMappedImageUrl(eventSlug, eventMeta.imageSource, distDir, "events");
    let html = baseHtml;

    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(eventMeta.title)} | DigitalSphereUg Events</title>`);
    html = upsertMetaTag(html, "name", "description", eventMeta.description);
    html = upsertMetaTag(html, "property", "og:type", "website");
    html = upsertMetaTag(html, "property", "og:site_name", "DigitalSphereUg");
    html = upsertMetaTag(html, "property", "og:title", `${eventMeta.title} | DigitalSphereUg Events`);
    html = upsertMetaTag(html, "property", "og:description", eventMeta.description);
    html = upsertMetaTag(html, "property", "og:url", eventUrl);
    html = upsertMetaTag(html, "property", "og:image", eventImageUrl);
    html = upsertMetaTag(html, "name", "twitter:card", "summary_large_image");
    html = upsertMetaTag(html, "name", "twitter:title", `${eventMeta.title} | DigitalSphereUg Events`);
    html = upsertMetaTag(html, "name", "twitter:description", eventMeta.description);
    html = upsertMetaTag(html, "name", "twitter:image", eventImageUrl);
    html = upsertCanonical(html, eventUrl);

    const outputPath = path.join(projectRoot, "dist", "events", eventSlug, "index.html");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, "utf8");
  }
}

main();
