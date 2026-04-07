# DigitalSphereUg

DigitalSphereUg is a React + Vite website focused on free blockchain and Web3 education for Ugandan learners.

## Tech Stack

- React 18
- Vite 5
- react-icons

## Prerequisites

- Node.js 18+ (recommended)
- npm 9+

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`, or the next available port).

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production assets into `dist/`
- `npm run preview` - Preview production build locally

## Build for Production

```bash
npm run build
```

Generated files are output to `dist/`.

## Deployment

This project includes `vercel.json` and can be deployed to Vercel.

Typical flow:

1. Push to GitHub
2. Import repository in Vercel
3. Use default build command: `npm run build`
4. Use default output directory: `dist`

## Troubleshooting

### Dev server port

The app is pinned to `http://localhost:5174` (`strictPort: true`) to match Sanity CORS for local CMS updates.
If startup fails because port 5174 is in use, stop the process using that port, then run `npm run dev` again.

### Local changes not showing

Try hard refresh and make sure old service workers are unregistered in the browser.

## License

This project is private unless you choose to add a license file.
