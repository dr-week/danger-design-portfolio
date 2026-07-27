---
name: brutalist-portfolio-design-system
description: Guidelines and component pattern standards for building high-impact brutalist creative portfolio web applications in Next.js, React, Three.js, and Tailwind CSS.
---

# ⚡ Brutalist Creative Portfolio Design System & Workflow

## Overview
This skill provides workflow patterns, architectural guidelines, aesthetic rules, and process management instructions for building modern, high-impact brutalist web applications and portfolios.

## Required Software & CLI Dependencies
- **Node.js (v18.0+)**: JavaScript/TypeScript runtime for Next.js 15 & Turbopack.
- **`yt-dlp`**: Download video streams directly via CLI (`winget install yt-dlp` or `pip install yt-dlp`).
- **`ffmpeg`**: Transcode WebGL video textures with `-movflags +faststart` for zero-CORS Three.js streaming (`winget install ffmpeg`).
- **`git`**: Version control for syncing `.project_state/` memory core to GitHub.
- **NPM Package Suite**: `lucide-react`, `clsx`, `tailwind-merge`, `canvas-confetti`, `three-stdlib`.

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
   - **Tactile Custom Cursor Tracker** (`CursorFollower.tsx`): Spring-tracking dual-ring follower expanding on `data-cursor-hover` targets (`stiffness: 450, damping: 28`).
   - **Synthesized Web Audio SFX Engine** (`src/utils/audio.ts`): Synthesized 1200Hz clicks & 120Hz sub-bass hums with `[ SFX: ON/OFF ]` HUD toggle in `Navbar.tsx`.
   - **Dynamic ASCII Art & Video Matrix Background Engine** (`AsciiMatrixBackground.tsx`): HTML5 Canvas ASCII text streams (`. : * = + # @`) reacting to mouse ripples and scroll velocity.
4. **Uniform 1:1 Square Aspect Ratio & Section Filter Presets**:
   - All portfolio media cards enforce a clean 1:1 brutalist square ratio (`aspect-square`).
   - Environmental filter presets applied per section (`grayscale`, `sepia`, `hue-rotate`, `invert`).
5. **5-Act Cinematic Narrative Story Arc**:
   - Portfolio structured as a 5-act narrative story arc (Transmission $\to$ Archive Matrix $\to$ Kinetic Crucible $\to$ Dev Engine Room $\to$ Spatial Lens).
6. **Zero-CORS WebGL Video & Asset Pipeline** (`scripts/sync-videos.js` & `scripts/sync-assets.js`):
   - Downloads YouTube Shorts via `yt-dlp` and compresses via `ffmpeg` into `public/videos/reel_X.mp4`.
   - Verifies free animations and textures in `public/animations/` and `public/textures/`.
7. **5-Room WebGL Spatial Void** (`/lab`):
   - Spatial R3F timeline using `@react-three/drei` `<ScrollControls pages={5}>` driving camera from $Z = 5$ to $Z = -85$ across 5 separated rooms with Shader Studio Preset Switcher (`[ THUNDERSTORM ]`, `[ CYBERPUNK ]`, `[ MONOCHROME ]`).

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
│   ├── layout.tsx          # Font loaders, Lenis smooth scroll, CursorFollower, hydration suppression
│   ├── page.tsx            # Main portfolio layout assembly
│   └── work/[slug]/        # Dynamic case study detail pages
├── config/
│   └── portfolio.ts        # 14-Domain anonymized portfolio data taxonomy (1:1 square ratio)
├── utils/
│   ├── audio.ts            # Zero-dependency Web Audio API SFX engine
│   └── cn.ts               # Tailwind class merge utility
├── components/
│   ├── ContactForm.tsx     # 4-state budget selector contact form
│   ├── ProcessSection.tsx  # Raw blueprint vs final 3D polish comparison
│   ├── WorkSection.tsx     # Compact 4-column Bento grid with system breakdown modal
│   ├── sections/           # Large page sections (Hero3D, AutomotiveSection, ArchitectureSection, DevRange, ContactSection)
│   └── ui/                 # Reusable micro-components (Navbar, CursorFollower, AsciiMatrixBackground, FrameScaleScroll, HorizontalScrollSection)
└── scripts/
    ├── sync-videos.js      # yt-dlp + ffmpeg raw stream download & WebGL faststart compression
    └── sync-assets.js      # Free animations & asset directory verification
```

## Quality Control Checklist
- Run `npx tsc --noEmit` before committing code.
- Commit all verified changes to Git main branch.
