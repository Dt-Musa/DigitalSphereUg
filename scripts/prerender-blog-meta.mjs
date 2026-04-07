import fs from "node:fs";
import path from "node:path";
import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const SITE_URL = "https://www.digitalsphereug.tech";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;
const DEPLOY_VERSION = (
  process.env.VERCEL_GIT_COMMIT_SHA
  || process.env.VERCEL_GIT_COMMIT_REF
  || process.env.VERCEL_URL
  || process.env.npm_package_version
  || new Date().toISOString().slice(0, 10)
).toString();
const BUILD_TIMESTAMP = new Date().toISOString();
const SANITY_PROJECT_ID = "vzjsmuxp";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2026-04-06";

const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true,
  perspective: "published",
});

const sanityImageBuilder = createImageUrlBuilder(sanityClient);

const CMS_META_QUERY = `{
  "posts": *[_type == "blogPost" && defined(slug.current)] | order(publishedDate desc){
    title,
    "slug": slug.current,
    "description": coalesce(excerpt, ""),
    image,
    coverImage
  },
  "events": *[_type == "event"] | order(_updatedAt desc){
    title,
    "description": coalesce(description, ""),
    image
  },
  "opportunities": *[_type == "opportunity" && coalesce(active, true) == true] | order(_updatedAt desc){
    title,
    "description": coalesce(description, ""),
    logo
  }
}`;
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
const OPPORTUNITY_META_BY_SLUG = {
  "binance-learn-and-earn": {
    title: "Binance Learn & Earn",
    description: "Complete short blockchain courses and earn rewards as you learn.",
    imageSource: "src/assets/opportunities/binance academy.jpg",
  },
  "coinbase-learn": {
    title: "Coinbase Learn",
    description: "Learn key crypto concepts and earn as you build confidence.",
    imageSource: "src/assets/opportunities/coinbase.png",
  },
  "alchemy-university": {
    title: "Alchemy University",
    description: "Free blockchain bootcamp and learning pathways for all levels.",
    imageSource: "src/assets/opportunities/alchemy.png",
  },
  "celo-proof-of-ship-season-2": {
    title: "Celo Proof of Ship Season 2",
    description: "Ship real projects publicly and compete for monthly ecosystem funding.",
    imageSource: "src/assets/opportunities/celo-proof-of-ship.jpg",
  },
  "ethereum-foundation-esp": {
    title: "Ethereum Foundation - ESP",
    description: "Funding support for builders and public goods in the Ethereum ecosystem.",
    imageSource: "src/assets/opportunities/ethereum-foundation.jpg",
  },
  "gitcoin-grants": {
    title: "Gitcoin Grants",
    description: "Community-funded support for open source and mission-driven Web3 projects.",
    imageSource: "src/assets/opportunities/gitcoin.jpg",
  },
  "devfest-kampala-hackathon": {
    title: "DevFest Kampala Hackathon",
    description: "Build and showcase solutions at Kampala's flagship blockchain hackathon.",
    imageSource: "src/assets/events/devfest-2026-flyer.jpeg",
  },
  "ethglobal-hackathons": {
    title: "ETHGlobal Hackathons",
    description: "Global Ethereum hackathons with prizes, mentorship, and collaboration.",
    imageSource: "src/assets/opportunities/ethnile-global.jpg",
  },
  "chainlink-hackathon": {
    title: "Chainlink Hackathon",
    description: "Compete in Chainlink hackathons and build production-ready Web3 tools.",
    imageSource: "src/assets/opportunities/chainlink.jpg",
  },
  "web3-career-jobs": {
    title: "Web3.career",
    description: "Explore remote and global Web3 roles curated for builders.",
    imageSource: "src/assets/opportunities/web3 careers.jpg",
  },
  "crypto-jobs-list": {
    title: "Crypto Jobs List",
    description: "Find curated blockchain and crypto job opportunities worldwide.",
    imageSource: "src/assets/opportunities/crypto-job-list.jpg",
  },
  "gitcoin-bounties": {
    title: "Gitcoin Bounties",
    description: "Earn by contributing to open source blockchain projects.",
    imageSource: "src/assets/opportunities/gitcoin.jpg",
  },
};

const STATIC_PAGE_META = {
  "/": {
    title: "DigitalSphere | Africa's Home for Blockchain & Web3",
    description: "Master the fundamentals of Blockchain and Web3, discover local events, and access real opportunities for individuals and communities ready to grow in Web3 across Africa.",
    imageSource: "public/og-default.jpg",
  },
  "/learn": {
    title: "Learn Blockchain | DigitalSphere",
    description: "Master the fundamentals of Blockchain and Web3 with structured tracks for learners across Africa.",
    imageSource: "src/assets/community/chainlink-rooftop.jpg.jpg",
  },
  "/events": {
    title: "Events | DigitalSphere",
    description: "Upcoming blockchain events and community sessions across Africa.",
    imageSource: "src/assets/gallery/ethnile-sponserbanner.jpg.jpg",
  },
  "/opportunities": {
    title: "Opportunities | DigitalSphere",
    description: "Web3 jobs, grants, hackathons, and growth opportunities across Africa.",
    imageSource: "src/assets/gallery/outdoor-laptop session.jpg",
  },
  "/resources": {
    title: "Resources | DigitalSphere",
    description: "Curated free blockchain tools and learning resources.",
    imageSource: "src/assets/gallery/kyambongo-lecture -room.jpg.jpg",
  },
  "/blog": {
    title: "Blog | DigitalSphere",
    description: "Africa-first blockchain insights, guides, and stories.",
    imageSource: "src/assets/hero/ethnile-group.jpg.jpg",
  },
  "/community": {
    title: "Community | DigitalSphere",
    description: "Join DigitalSphere's growing blockchain and Web3 community across Africa.",
    imageSource: "src/assets/community/chainlink.jpg.jpg",
  },
  "/about": {
    title: "About | DigitalSphere",
    description: "Built by students and builders, for Africa's blockchain future.",
    imageSource: "src/assets/about/stellar-group.jpg.jpg",
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

function upsertOgImageSupportTags(html, imageUrl) {
  let next = html;
  next = upsertMetaTag(next, "property", "og:image", imageUrl);
  next = upsertMetaTag(next, "property", "og:image:secure_url", imageUrl);
  next = upsertMetaTag(next, "property", "og:image:width", "1200");
  next = upsertMetaTag(next, "property", "og:image:height", "630");
  return next;
}

function toSlug(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function resolveSanityImageUrl(imageSource) {
  if (!imageSource) {
    return "";
  }

  try {
    return sanityImageBuilder.image(imageSource).width(1200).height(630).fit("crop").auto("format").url();
  } catch {
    return "";
  }
}

function withVersionQuery(rawUrl) {
  const url = String(rawUrl || "").trim();
  if (!url) {
    return DEFAULT_OG_IMAGE;
  }

  try {
    const parsed = new URL(url);
    parsed.searchParams.set("v", DEPLOY_VERSION);
    return parsed.toString();
  } catch {
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}v=${encodeURIComponent(DEPLOY_VERSION)}`;
  }
}

async function fetchCmsMeta() {
  try {
    const data = await sanityClient.fetch(CMS_META_QUERY);

    const posts = (data?.posts || [])
      .filter((post) => post?.slug && post?.title)
      .map((post) => ({
        slug: String(post.slug).trim(),
        title: String(post.title).trim(),
        description: String(post.description || "").trim(),
        imageUrl: resolveSanityImageUrl(post.image) || resolveSanityImageUrl(post.coverImage),
      }));

    const events = (data?.events || [])
      .filter((event) => event?.title)
      .map((event) => ({
        slug: toSlug(event.title),
        title: String(event.title).trim(),
        description: String(event.description || "").trim(),
        imageUrl: resolveSanityImageUrl(event.image),
      }))
      .filter((event) => Boolean(event.slug));

    const opportunities = (data?.opportunities || [])
      .filter((opportunity) => opportunity?.title)
      .map((opportunity) => ({
        slug: toSlug(opportunity.title),
        title: String(opportunity.title).trim(),
        description: String(opportunity.description || "").trim(),
        imageUrl: resolveSanityImageUrl(opportunity.logo),
      }))
      .filter((opportunity) => Boolean(opportunity.slug));

    return { posts, events, opportunities };
  } catch (error) {
    console.warn("SEO prerender: failed to fetch CMS metadata, using static metadata only.", error?.message || error);
    return { posts: [], events: [], opportunities: [] };
  }
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
  const postsDeclarationMatch = appSource.match(/\b(?:const|let)\s+POSTS\s*=\s*\[/);
  const startIndex = postsDeclarationMatch ? postsDeclarationMatch.index : -1;
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

async function main() {
  const projectRoot = process.cwd();
  const appPath = path.join(projectRoot, "src", "App.jsx");
  const distDir = path.join(projectRoot, "dist");
  const distIndexPath = path.join(projectRoot, "dist", "index.html");

  if (!fs.existsSync(appPath) || !fs.existsSync(distIndexPath)) {
    return;
  }

  const appSource = fs.readFileSync(appPath, "utf8");
  const staticPosts = extractPostsMeta(appSource);
  const imageImportMap = extractImageImportMap(appSource, projectRoot);
  const cmsMeta = await fetchCmsMeta();

  const postsBySlug = new Map(staticPosts.map((post) => [post.slug, post]));
  for (const post of cmsMeta.posts) {
    const previous = postsBySlug.get(post.slug) || {};
    postsBySlug.set(post.slug, {
      ...previous,
      ...post,
      imageUrl: post.imageUrl || previous.imageUrl || "",
    });
  }

  const baseHtml = fs.readFileSync(distIndexPath, "utf8");
  const generatedRoutes = {
    blog: [],
    events: [],
    opportunities: [],
    pages: [],
  };

  for (const post of postsBySlug.values()) {
    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    const postImageUrl = withVersionQuery(post.imageUrl || resolvePostImageUrl(post, imageImportMap, distDir));
    const postDescription = post.description || "Latest update from DigitalSphereUg.";
    let html = baseHtml;

    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(post.title)} | DigitalSphereUg Blog</title>`);
    html = upsertMetaTag(html, "name", "description", postDescription);
    html = upsertMetaTag(html, "property", "og:type", "article");
    html = upsertMetaTag(html, "property", "og:site_name", "DigitalSphereUg");
    html = upsertMetaTag(html, "property", "og:title", `${post.title} | DigitalSphereUg Blog`);
    html = upsertMetaTag(html, "property", "og:description", postDescription);
    html = upsertMetaTag(html, "property", "og:url", postUrl);
    html = upsertMetaTag(html, "property", "og:updated_time", BUILD_TIMESTAMP);
    html = upsertMetaTag(html, "property", "article:modified_time", BUILD_TIMESTAMP);
    html = upsertOgImageSupportTags(html, postImageUrl);
    html = upsertMetaTag(html, "name", "twitter:card", "summary_large_image");
    html = upsertMetaTag(html, "name", "twitter:title", `${post.title} | DigitalSphereUg Blog`);
    html = upsertMetaTag(html, "name", "twitter:description", postDescription);
    html = upsertMetaTag(html, "name", "twitter:image", postImageUrl);
    html = upsertCanonical(html, postUrl);

    const outputPath = path.join(projectRoot, "dist", "blog", post.slug, "index.html");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, "utf8");
    generatedRoutes.blog.push(`/blog/${post.slug}`);
  }

  const eventMetaBySlug = new Map(
    Object.entries(EVENT_META_BY_SLUG).map(([slug, meta]) => [slug, { slug, ...meta }]),
  );
  for (const event of cmsMeta.events) {
    const previous = eventMetaBySlug.get(event.slug) || {};
    eventMetaBySlug.set(event.slug, {
      ...previous,
      slug: event.slug,
      title: event.title,
      description: event.description || previous.description || "Event update from DigitalSphere.",
      imageSource: event.imageUrl || previous.imageSource,
    });
  }

  for (const [eventSlug, eventMeta] of eventMetaBySlug.entries()) {
    const eventUrl = `${SITE_URL}/events/${eventSlug}`;
    const eventImageUrl = withVersionQuery(resolveMappedImageUrl(eventSlug, eventMeta.imageSource, distDir, "events"));
    const eventDescription = eventMeta.description || "Event update from DigitalSphere.";
    let html = baseHtml;

    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(eventMeta.title)} | DigitalSphereUg Events</title>`);
    html = upsertMetaTag(html, "name", "description", eventDescription);
    html = upsertMetaTag(html, "property", "og:type", "website");
    html = upsertMetaTag(html, "property", "og:site_name", "DigitalSphereUg");
    html = upsertMetaTag(html, "property", "og:title", `${eventMeta.title} | DigitalSphereUg Events`);
    html = upsertMetaTag(html, "property", "og:description", eventDescription);
    html = upsertMetaTag(html, "property", "og:url", eventUrl);
    html = upsertMetaTag(html, "property", "og:updated_time", BUILD_TIMESTAMP);
    html = upsertOgImageSupportTags(html, eventImageUrl);
    html = upsertMetaTag(html, "name", "twitter:card", "summary_large_image");
    html = upsertMetaTag(html, "name", "twitter:title", `${eventMeta.title} | DigitalSphereUg Events`);
    html = upsertMetaTag(html, "name", "twitter:description", eventDescription);
    html = upsertMetaTag(html, "name", "twitter:image", eventImageUrl);
    html = upsertCanonical(html, eventUrl);

    const outputPath = path.join(projectRoot, "dist", "events", eventSlug, "index.html");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, "utf8");
    generatedRoutes.events.push(`/events/${eventSlug}`);
  }

  const opportunityMetaBySlug = new Map(
    Object.entries(OPPORTUNITY_META_BY_SLUG).map(([slug, meta]) => [slug, { slug, ...meta }]),
  );
  for (const opportunity of cmsMeta.opportunities) {
    const previous = opportunityMetaBySlug.get(opportunity.slug) || {};
    opportunityMetaBySlug.set(opportunity.slug, {
      ...previous,
      slug: opportunity.slug,
      title: opportunity.title,
      description: opportunity.description || previous.description || "Opportunity update from DigitalSphere.",
      imageSource: opportunity.imageUrl || previous.imageSource,
    });
  }

  for (const [opportunitySlug, opportunityMeta] of opportunityMetaBySlug.entries()) {
    const opportunityUrl = `${SITE_URL}/opportunities/${opportunitySlug}`;
    const opportunityImageUrl = withVersionQuery(resolveMappedImageUrl(opportunitySlug, opportunityMeta.imageSource, distDir, "opportunities"));
    const opportunityDescription = opportunityMeta.description || "Opportunity update from DigitalSphere.";
    let html = baseHtml;

    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(opportunityMeta.title)} | DigitalSphere Opportunities</title>`);
    html = upsertMetaTag(html, "name", "description", opportunityDescription);
    html = upsertMetaTag(html, "property", "og:type", "website");
    html = upsertMetaTag(html, "property", "og:site_name", "DigitalSphereUg");
    html = upsertMetaTag(html, "property", "og:title", `${opportunityMeta.title} | DigitalSphere Opportunities`);
    html = upsertMetaTag(html, "property", "og:description", opportunityDescription);
    html = upsertMetaTag(html, "property", "og:url", opportunityUrl);
    html = upsertMetaTag(html, "property", "og:updated_time", BUILD_TIMESTAMP);
    html = upsertOgImageSupportTags(html, opportunityImageUrl);
    html = upsertMetaTag(html, "name", "twitter:card", "summary_large_image");
    html = upsertMetaTag(html, "name", "twitter:title", `${opportunityMeta.title} | DigitalSphere Opportunities`);
    html = upsertMetaTag(html, "name", "twitter:description", opportunityDescription);
    html = upsertMetaTag(html, "name", "twitter:image", opportunityImageUrl);
    html = upsertCanonical(html, opportunityUrl);

    const outputPath = path.join(projectRoot, "dist", "opportunities", opportunitySlug, "index.html");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, "utf8");
    generatedRoutes.opportunities.push(`/opportunities/${opportunitySlug}`);
  }

  const staticEntries = Object.entries(STATIC_PAGE_META);
  for (const [pagePath, pageMeta] of staticEntries) {
    const pageUrl = pagePath === "/" ? SITE_URL : `${SITE_URL}${pagePath}`;
    const pageImageUrl = withVersionQuery(resolveMappedImageUrl(
      pagePath === "/" ? "home" : pagePath.replaceAll("/", "-").replace(/^-/, ""),
      pageMeta.imageSource,
      distDir,
      "pages",
    ));
    let html = baseHtml;

    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(pageMeta.title)}</title>`);
    html = upsertMetaTag(html, "name", "description", pageMeta.description);
    html = upsertMetaTag(html, "property", "og:type", "website");
    html = upsertMetaTag(html, "property", "og:site_name", "DigitalSphereUg");
    html = upsertMetaTag(html, "property", "og:title", pageMeta.title);
    html = upsertMetaTag(html, "property", "og:description", pageMeta.description);
    html = upsertMetaTag(html, "property", "og:url", pageUrl);
    html = upsertMetaTag(html, "property", "og:updated_time", BUILD_TIMESTAMP);
    html = upsertOgImageSupportTags(html, pageImageUrl);
    html = upsertMetaTag(html, "name", "twitter:card", "summary_large_image");
    html = upsertMetaTag(html, "name", "twitter:title", pageMeta.title);
    html = upsertMetaTag(html, "name", "twitter:description", pageMeta.description);
    html = upsertMetaTag(html, "name", "twitter:image", pageImageUrl);
    html = upsertCanonical(html, pageUrl);

    const outputPath = pagePath === "/"
      ? path.join(projectRoot, "dist", "index.html")
      : path.join(projectRoot, "dist", pagePath.replace(/^\//, ""), "index.html");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, "utf8");
    generatedRoutes.pages.push(pagePath);
  }

  generatedRoutes.blog.sort((a, b) => a.localeCompare(b));
  generatedRoutes.events.sort((a, b) => a.localeCompare(b));
  generatedRoutes.opportunities.sort((a, b) => a.localeCompare(b));
  generatedRoutes.pages.sort((a, b) => a.localeCompare(b));

  const report = {
    generatedAt: BUILD_TIMESTAMP,
    deployVersion: DEPLOY_VERSION,
    counts: {
      blog: generatedRoutes.blog.length,
      events: generatedRoutes.events.length,
      opportunities: generatedRoutes.opportunities.length,
      pages: generatedRoutes.pages.length,
    },
    routes: generatedRoutes,
  };

  const reportPath = path.join(distDir, "seo-routes.json");
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

  console.log(
    `SEO prerender summary: blog=${report.counts.blog}, events=${report.counts.events}, opportunities=${report.counts.opportunities}, pages=${report.counts.pages}`,
  );
  console.log(`SEO prerender report: ${reportPath}`);
}

main().catch((error) => {
  console.error("SEO prerender failed:", error);
  process.exitCode = 1;
});
