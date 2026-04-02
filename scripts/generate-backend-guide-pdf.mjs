import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";

const outPath = path.join(process.cwd(), "DigitalSphereUg-Backend-Guide.pdf");
const doc = new PDFDocument({ size: "A4", margin: 50 });

const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

const addHeading = (text) => {
  doc.moveDown(0.8);
  doc.font("Helvetica-Bold").fontSize(16).fillColor("#0f172a").text(text);
  doc.moveDown(0.2);
};

const addSectionTitle = (text) => {
  doc.moveDown(0.6);
  doc.font("Helvetica-Bold").fontSize(12).fillColor("#1e293b").text(text);
  doc.moveDown(0.2);
};

const addBullet = (text) => {
  doc.font("Helvetica").fontSize(10.5).fillColor("#111827").text(`- ${text}`, {
    lineGap: 2,
    indent: 10,
  });
};

const addNumbered = (idx, text) => {
  doc.font("Helvetica").fontSize(10.5).fillColor("#111827").text(`${idx}. ${text}`, {
    lineGap: 2,
    indent: 10,
  });
};

doc.font("Helvetica-Bold").fontSize(22).fillColor("#0b3b8f").text("DigitalSphereUg Platform Backend Guide", {
  align: "left",
});
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(11).fillColor("#334155").text("Version: April 2026");
doc.text("Purpose: Backend architecture and implementation outline for a production-ready DigitalSphereUg platform.");

addHeading("1. Core Backend Modules");
[
  "Authentication and authorization",
  "Learning engine (tracks, lessons, progress)",
  "Quiz and practical submission engine",
  "CMS for blog/events/resources/opportunities",
  "Community, newsletter, and notifications",
  "Analytics and reporting",
  "Admin backoffice and moderation",
].forEach(addBullet);

addHeading("2. Recommended Technical Stack");
addSectionTitle("API and Application Layer");
[
  "Node.js + TypeScript",
  "NestJS (preferred for structure) or Express (lean approach)",
  "REST first, GraphQL optional for advanced dashboards",
].forEach(addBullet);

addSectionTitle("Data and Infrastructure");
[
  "PostgreSQL as primary database",
  "Prisma ORM",
  "Redis for cache, sessions, and rate limiting",
  "S3-compatible storage or Cloudinary for media",
  "BullMQ (Redis-backed) for background jobs",
  "Resend for transactional emails",
].forEach(addBullet);

addHeading("3. Data Model (Minimum)");
[
  "users, roles, user_roles",
  "tracks, lessons, resources",
  "questions, question_options",
  "quiz_attempts, quiz_answers",
  "practical_submissions, lesson_progress",
  "blog_posts, blog_categories",
  "events, event_registrations",
  "opportunities",
  "subscribers, notifications, audit_logs",
].forEach(addBullet);

addHeading("4. API Surface (Phase 1)");
addSectionTitle("Auth");
[
  "POST /auth/signup",
  "POST /auth/login",
  "POST /auth/refresh",
  "POST /auth/logout",
  "POST /auth/forgot-password",
  "POST /auth/reset-password",
].forEach(addBullet);

addSectionTitle("Learning and Assessment");
[
  "GET /tracks",
  "GET /tracks/:trackId/lessons/:lessonNumber",
  "GET /lessons/:lessonId/questions?resourceId=... (strict scoped retrieval)",
  "POST /lessons/:lessonId/answers",
  "POST /lessons/:lessonId/practical-submissions",
  "GET /users/me/progress",
].forEach(addBullet);

addSectionTitle("Content and Public Endpoints");
[
  "GET /blog and GET /blog/:slug",
  "GET /events and GET /events/:slug",
  "GET /resources",
  "GET /opportunities",
  "POST /subscribers",
].forEach(addBullet);

addHeading("5. Critical Product Rules");
[
  "Questions must always be scoped by lessonId/resourceId.",
  "Do not carry practical submission text from one lesson to another.",
  "Quiz reveal/highlight states must remain hidden until user interaction.",
  "No dead route links in nav/content (for example /admin if route does not exist).",
].forEach(addBullet);

addHeading("6. Blog and Social Metadata Requirements");
[
  "Store and expose absolute URLs for og:url and og:image.",
  "Each blog post should have unique og:title, og:description, and og:image.",
  "Provide fallback OG image: /og-default.jpg.",
  "Pre-render or serve static HTML for crawlers; do not rely on client-side-only metadata.",
].forEach(addBullet);

addHeading("7. Security and Reliability Checklist");
[
  "JWT access + refresh tokens (short-lived access tokens).",
  "Role-based access control (Admin, Editor, Learner).",
  "Input validation and sanitization on all request bodies.",
  "Rate limiting and bot protection on forms.",
  "Structured logging + error monitoring (for example Sentry).",
  "Daily backups and point-in-time recovery for database.",
  "Audit log for all admin content changes.",
].forEach(addBullet);

addHeading("8. Suggested Delivery Roadmap");
[
  "Week 1-2: Auth, roles, base schema, migrations.",
  "Week 3-4: Learn module + question bank + progress APIs.",
  "Week 5: Practical submissions, reset behavior, and tests.",
  "Week 6: Blog CMS + OG metadata pipeline + prerender automation.",
  "Week 7: Admin panel essentials.",
  "Week 8: Analytics, notifications, and hardening.",
].forEach((item, i) => addNumbered(i + 1, item));

addHeading("9. Operational Notes");
[
  "Environment separation: development, staging, production.",
  "Automate migrations in CI/CD with rollback strategy.",
  "Use feature flags for high-impact releases.",
  "Track API versioning from first public release.",
].forEach(addBullet);

addHeading("10. Immediate Next Steps");
[
  "Finalize the canonical database schema.",
  "Define API request/response contracts.",
  "Implement auth and learning endpoints first.",
  "Integrate frontend to backend with strict lesson/resource scoping.",
].forEach((item, i) => addNumbered(i + 1, item));

doc.moveDown(1);
doc.font("Helvetica-Oblique").fontSize(9).fillColor("#475569").text("Prepared for DigitalSphereUg platform planning and implementation.");

doc.end();

stream.on("finish", () => {
  console.log(outPath);
});
