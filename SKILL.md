---
name: brutalist-portfolio-design-system
description: Guidelines and component pattern standards for building high-impact brutalist creative portfolio web applications in Next.js, React, Three.js, and Tailwind CSS.
---

# ⚡ Brutalist Creative Portfolio Design System & Workflow

## Overview
This skill provides workflow patterns, architectural guidelines, aesthetic rules, and process management instructions for building modern, high-impact brutalist web applications and portfolios.

## Dev Server & Process Management
- **DO NOT** run `npm run dev` or `next dev` automatically during task execution.
- A single dev server runs persistently in the user's background terminal.
- Before suggesting or running any server command, check if port 3000 is already active:
  `Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue`
- Do not run `start http://localhost:3000` multiple times.

## Core Design Principles
1. **Typography First**: Combine bold geometric sans-serif fonts (`Space Grotesk`) with energetic handwritten annotations (`Caveat`).
2. **High-Contrast Color Palette**: Deep dark backgrounds (`#000000`, `#09090b`) contrasted with crisp white, subtle zinc borders (`border-zinc-800`), and amber accents (`#f59e0b`).
3. **Tactile UI Elements**:
   - **Torn Tape Dividers** (`TornDivider.tsx`): Irregular paper border dividers with subtle SVG mask effects.
   - **Marker Highlights** (`MarkerHighlight.tsx`): Dynamic SVG hand-drawn underlines animated via Framer Motion.
   - **Interactive Canvas Overlays** (`WeatherCanvas.tsx`): Multi-atmosphere 2D Canvas overlays (`night`, `sunbeam`, `rain`).
   - **Adaptive 1920x1080 Phone Frame** (`Hero3D.tsx`): Scaled interactive phone canvas with physical scroll/swipe buttons (`▲ / ▼`) and script HUD overlay text.
4. **Domain-First Portfolio Taxonomy** (`src/config/portfolio.ts`):
   - All brand/client names are stripped for pure technical discipline focus (`SYSTEM_01 // MOTION & CGI`, `SYSTEM_02 // SPATIAL CGI`, `SYSTEM_03 // BRAND SYSTEMS`, `SYSTEM_04 // UI/UX ENGINEERING`).
5. **Zero-CORS WebGL Video Pipeline** (`scripts/sync-videos.js`):
   - Downloads YouTube Shorts via `yt-dlp` and compresses via `ffmpeg` with `-movflags +faststart` to `public/videos/reel_X.mp4` for instant WebGL `THREE.VideoTexture` streaming.
6. **5-Room WebGL Spatial Void** (`/lab`):
   - Spatial R3F timeline using `@react-three/drei` `<ScrollControls pages={5}>` driving camera from $Z = 5$ to $Z = -85$ across 5 separated rooms.

## CSS Viewport Architecture Standards
- **Global Bounds** (`src/app/layout.tsx`): `<body>` must have `w-full overflow-x-hidden min-h-screen bg-black text-white antialiased`.
- **Hero Bounds** (`Hero3D.tsx`): Section container uses `min-h-[100svh] w-full relative overflow-hidden flex items-center px-6 md:px-12 lg:px-20 py-16`.
- **WebGL Canvas Bounds** (`src/app/lab/page.tsx`): Canvas wrapper locked to `w-full h-[100svh] relative overflow-hidden`.
- **Hydration Safety**: `<html lang="en" suppressHydrationWarning>` and `<body suppressHydrationWarning>` to prevent browser extension attribute mismatch warnings.

## File & Component Structure
```
src/
├── app/
│   ├── api/contact/        # Serverless contact form endpoint (Resend SDK)
│   ├── globals.css         # Font variable mappings & base utility overrides
│   ├── lab/page.tsx        # 5-Room WebGL spatial void sandbox route
│   ├── layout.tsx          # Font loaders, Lenis smooth scroll, hydration suppression
│   └── page.tsx            # Main portfolio layout assembly
├── config/
│   └── portfolio.ts        # Domain-first anonymized portfolio data taxonomy
├── components/
│   ├── ContactForm.tsx     # 4-state budget selector contact form
│   ├── ProcessSection.tsx  # Raw blueprint vs final 3D polish comparison
│   ├── WorkSection.tsx     # High-density brutalist graphic grid with system breakdown modal
│   ├── sections/           # Large page sections (Hero3D, DevRange, ContactSection)
│   └── ui/                 # Reusable micro-components (Navbar, BrandLogos, WeatherCanvas, ParallaxLayer)
└── scripts/
    └── sync-videos.js      # yt-dlp + ffmpeg raw stream download & WebGL faststart compression
```

## Quality Control Checklist
- Run `npx tsc --noEmit` before committing code.
- Commit all verified changes to Git main branch.
