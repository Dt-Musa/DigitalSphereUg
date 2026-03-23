# DigitalSphereUg 🌐

**Uganda's Home for Blockchain & Web3**

Student-led. Uganda-built. Web3-ready.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
digitalsphereug/
├── index.html              # HTML entry point (SEO meta tags included)
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies
├── vercel.json             # Vercel deployment config
├── public/
│   └── favicon.svg         # Globe favicon matching brand
├── src/
│   ├── main.jsx            # React entry point
│   └── App.jsx             # Main app — all pages in one file
└── dist/                   # Production build output (generated)
```

---

## 🌍 Deploy to Vercel (Free)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repo
5. Vercel auto-detects Vite — click **Deploy**
6. Your site is live in ~60 seconds ✅

---

## 🔧 How to Update Content

All content is in `src/App.jsx`. Find these arrays at the top:

| Variable | What it controls |
|---|---|
| `TRACKS` | Learning tracks and resources |
| `EVENTS` | Upcoming events |
| `OPPS` | Opportunities (jobs, grants, hackathons) |
| `POSTS` | Blog posts |

### Add a new blog post:
```js
{
  id: 4,
  tag: "Community",
  tagColor: "#818cf8",
  title: "Your Post Title Here",
  excerpt: "Short description shown on the blog listing page.",
  date: "April 2026",
  read: "4 min read",
  body: "First paragraph.\n\nSecond paragraph.\n\nThird paragraph."
}
```

### Add a new event:
```js
{
  title: "Event Name",
  date: "May 10, 2026",
  location: "Kampala, Uganda",
  tag: "Meetup",
  color: "#34d399",
  featured: false,
  desc: "Event description here.",
  link: "https://eventlink.com"
}
```

---

## 📖 Quick Reading Guides

If you want to understand the code fast, read in this order:

1. `src/main.jsx`
What to read: app bootstrap and React mount.

2. `src/App.jsx`
What to read: theme logic, navigation, sections, and all page data arrays.

3. `src/assets/images/`
What to read: brand/team images used by header, footer, and About team cards.

4. `vite.config.js` and `vercel.json`
What to read: dev/build behavior and deployment caching rules.

Tips while reading:

1. Start from constants first (`THEMES`, `TRACKS`, `EVENTS`, `OPPS`, `TEAM`).
2. Then scan shared components (`Pill`, `SectionLabel`, `PageHero`, `SocialBtn`).
3. Finally review page sections (`Home`, `Learn`, `Events`, `Community`, `About`) and `App` routing state.

---

## 📱 Community Links to Update

Search for these in `src/App.jsx` and update with your real links:

- WhatsApp: `https://whatsapp.com/channel/0029VbAqlOlHFxP25IPcQw0l`
- Telegram: `https://t.me/digitalsphereug` — update if handle changes
- X/Twitter: `https://x.com/digitalsphereug` — update if handle changes

---

## 🧰 If Browser Shows Old Code

Use this sequence:

1. Stop all running dev servers.
2. Start fresh with `npm run dev` and open only the shown Vite URL (usually `http://localhost:5173`).
3. Hard refresh the page (`Ctrl + F5`).
4. Open DevTools and check the **Application > Service Workers** section.
5. If any workers exist, unregister them (this project now auto-unregisters old workers on load).
6. If still stale, clear site data and restart the browser tab.

For deployments, `index.html` is now served with `Cache-Control: no-store` in `vercel.json` to reduce stale shell caching.

---

## 🎨 Brand Colors

```js
blue:    "#2847D4"   // Primary brand navy blue
blueLt:  "#4d6ff0"   // Lighter blue for gradients
green:   "#34d399"   // Success / Track 1
amber:   "#fbbf24"   // Events / Track 3
purple:  "#818cf8"   // Track 4 / Blog
```

---

## 📦 Phase 2 — What to Add Next

When ready to grow beyond the MVP:

- [ ] **Supabase** — user accounts, saved progress, event submissions
- [ ] **Blog CMS** — manage posts without editing code (Sanity.io or Contentful)
- [ ] **Newsletter** — email signup via Resend or Mailchimp
- [ ] **University Chapters page** — activate the coming soon section
- [ ] **PWA support** — offline-ready for low-bandwidth users

---

## 🇺🇬 Built by DigitalSphereUg

Founded by Musa. Built for Uganda. Open to Africa.

- Telegram: [@digitalsphereug](https://t.me/digitalsphereug)
- X: [@DigitalSphereUg](https://x.com/digitalsphereug)
