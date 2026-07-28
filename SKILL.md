---
name: brutalist-portfolio-design-system
description: Guidelines, component patterns, error control protocols, and workflow standards for the Danger Design brutalist creative portfolio built in Next.js 15, React 19, Three.js, Tailwind CSS 4, and Framer Motion.
---

# ⚡ Brutalist Creative Portfolio Design System & Workflow

## Overview
This skill provides workflow patterns, architectural guidelines, aesthetic rules, error diagnostics, and process management instructions for the Danger Design portfolio — a brutalist, physics-driven, WebGL-enhanced creative engineering showcase.

## ⚡ MASTER SYNCHRONIZATION PROTOCOL // DANGER DESIGN ARCHITECTURE

### 1. PERSISTENT STATE CHECK (READ-BEFORE-WRITE)
Before generating any code or responding to a request, you must verify the system state stored in the root `.project_state/` directory:
- `.project_state/01_ARCHITECTURE.md` (Domain taxonomy & sector specs)
- `.project_state/02_DESIGN_RULES.md` (Brutalist grid, kinematic spring physics, Director's lens)
- `.project_state/03_ACTIVE_SPRINT.md` (Active bugs, pending tasks, completion status)

### 2. ENGINEERING CONSTRAINTS (ZERO-FAILURE RULES)
- **Viewport Stability:** Never use `h-screen`. Always use `h-[100svh]` to prevent mobile address bar layout jumps. Enforce `overflow-x-hidden w-full` globally.
- **WebGL SSR Isolation:** All Three.js / React Three Fiber components must be dynamically imported with `ssr: false` to prevent server-side Node.js rendering crashes.
- **Render Loop Integrity:** Never instantiate new objects (`new THREE.Vector3()`, etc.) inside `useFrame` loops. Pre-allocate and mutate properties in-place to prevent V8 GC stutters.
- **Asset Compliance:** All videos must pull locally from `/public/videos/` (compressed via local FFmpeg pipeline with `+faststart`). Zero external YouTube CORS video textures.

### 3. DESIGN & LAYOUT LAWS
- **Small Incremental Steps Only (NO WHOLE-SITE WIPES):** Never overwrite or delete entire pages/sections. Execute small, modular, non-destructive steps. Keep backups and preserve modular components so sections can be toggled or rearranged easily.
- **Indian Market Focus & Simple English:** Target Audience is Indian businesses, D2C brands, real estate developers, and startups. Use simple, direct, easy-to-understand English. Zero complex or pretentious agency jargon. Include Indian Rupee (₹) budget ranges and direct WhatsApp inquiry options.
- **Bento Grid Architecture:** DOM portfolio sections must use dense, high-contrast Bento box layouts (`grid-cols-4`/`grid-cols-6`) with variable aspect-ratio spans. No bloated uniform rows.
- **Cinematic Atmosphere:** Integrate volumetric lighting, GPU rain particle systems, randomized thunderstorm point-light flashes, and parallax Z-axis scrolling.

### 4. STATE UPDATE PROTOCOL
Upon completing any assigned coding task or UI patch, you must automatically update `.project_state/03_ACTIVE_SPRINT.md` to mark items complete and keep the execution queue synchronized.


## Tech Stack (Verified Versions)
- **Framework:** Next.js 15.5.22 (App Router, Turbopack dev server)
- **UI:** React 19, TypeScript 5.7+
- **Styling:** Tailwind CSS 4.1 (PostCSS plugin mode)
- **Motion:** Framer Motion 12
- **3D/WebGL:** Three.js 0.174, @react-three/fiber 9, @react-three/drei 10, @react-three/postprocessing 3
- **Content:** Hardcoded MDX (no CMS)
- **Email:** Resend SDK 6.18 (contact form dispatch to `dishant.inbox@gmail.com`)
- **Audio:** Zero-dependency Web Audio API engine (`src/utils/audio.ts`)
- **Smooth Scroll:** Lenis 1.3

## Required Software & CLI Dependencies
- **Node.js (v18.0+)**: JavaScript/TypeScript runtime for Next.js & Turbopack.
- **`yt-dlp`**: Download video streams via CLI (`winget install yt-dlp` or `pip install yt-dlp`).
- **`ffmpeg`**: Transcode WebGL video textures with `-movflags +faststart` (`winget install ffmpeg`).
- **`git`**: Version control for syncing `.project_state/` memory core to GitHub.
- **NPM Package Suite**: `lucide-react`, `clsx`, `tailwind-merge`, `canvas-confetti`, `three-stdlib`.

## Dev Server & Process Management
- **DO NOT** run `npm run dev` or `next dev` automatically during task execution.
- A single dev server runs persistently in the user's background terminal.
- Before suggesting or running any server command, check if port 3000 is already active:
  `Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue`
- Do not run `start http://localhost:3000` multiple times.
- **NEVER** run `npm run build` while `next dev` is running — this corrupts `.next/` manifests.
- See `ERROR_CONTROL.md` for the full ENOENT/manifest resolution protocol.

## Core Design Principles
1. **Typography First**: Pair rigid geometric sans-serif headlines (`Space Grotesk`) with energetic handwritten script annotations (`Caveat`). Use animated SVG marker highlights (`MarkerHighlight.tsx`) for script callouts.
2. **High-Contrast Color Palette**: Absolute black (`#000000`), stark white (`#FFFFFF`), warning amber (`#F59E0B`), terminal green (`#22c55e`).
3. **Tactile UI Elements**:
   - **Torn Tape Dividers** (`TornDivider.tsx`): Irregular paper border dividers.
   - **Marker Highlights** (`MarkerHighlight.tsx`): Dynamic SVG hand-drawn underlines animated via Framer Motion.
   - **Interactive Canvas Overlays** (`WeatherCanvas.tsx`): Multi-atmosphere 2D Canvas overlays (`night`, `sunbeam`, `rain`).
   - **Adaptive Phone Frame** (`Hero3D.tsx`): Scaled interactive phone canvas with physical scroll/swipe buttons.
   - **Tactile Custom Cursor** (`CursorFollower.tsx`): Spring-tracking dual-ring follower with 60px magnetic attraction.
   - **Web Audio SFX Engine** (`src/utils/audio.ts`): Synthesized 1200Hz clicks, 120Hz sub-bass hums, and scroll-driven filter frequency scrubbing (300Hz→2400Hz).
   - **ASCII Matrix Background** (`AsciiMatrixBackground.tsx`): HTML5 Canvas ASCII text streams reacting to mouse ripples.
   - **GLSL Brush Texture Reveal** (`BrushTextureRevealPlane.tsx`): Custom Monogrid-style GLSL fragment shader with simplex noise erosion, mounted in `/lab` Room 01.
4. **Uniform 1:1 Square Aspect Ratio**: All portfolio media cards enforce `aspect-square` with per-section environmental filter presets.
5. **5-Act Cinematic Narrative Story Arc**: Portfolio structured as Transmission → Archive Matrix → Kinetic Crucible → Dev Engine Room → Spatial Lens.
6. **Zero-CORS WebGL Video Pipeline**: `scripts/sync-videos.js` (yt-dlp + ffmpeg) and `scripts/sync-assets.js` for asset verification.
7. **5-Room WebGL Spatial Void** (`/lab`): R3F spatial timeline ($Z=5$ to $Z=-85$) with Shader Studio Preset Switcher.

## Antigravity Advanced Engineering Protocol
See `ARCHITECTURE_PLAN.md` and `.project_state/01_ARCHITECTURE.md` for the full protocol covering:
- CPU-to-GPU Offloading via GLSL Uniforms
- Frustum Culling & Three.js Buffer Disposal
- Dynamic LOD (Level of Detail) for mobile
- CSS Grid Structural Containment (`contain: layout style paint;`)
- Hardware-Accelerated Transform Restrictions

## CSS Viewport Architecture Standards
- **Global Bounds** (`layout.tsx`): `<body>` has `w-full overflow-x-hidden min-h-screen bg-black text-white antialiased`.
- **Hero Bounds** (`Hero3D.tsx`): Uses `min-h-[100svh]` (NOT `h-screen`).
- **WebGL Canvas** (`lab/page.tsx`): Uses `h-[100svh]` (NOT `h-screen`).
- **Hydration Safety**: `suppressHydrationWarning` on `<html>` and `<body>`.
- **CRITICAL**: Always use `h-[100svh]` instead of `h-screen` for full-height containers.

## File & Component Structure
```
src/
├── app/
│   ├── api/contact/route.ts    # Serverless Resend endpoint → dishant.inbox@gmail.com
│   ├── globals.css              # Tailwind 4 + design tokens
│   ├── lab/page.tsx             # 5-Room WebGL spatial void sandbox
│   ├── layout.tsx               # Fonts, Lenis, CursorFollower, hydration suppression
│   ├── page.tsx                 # Main portfolio assembly (5-Act narrative)
│   └── work/[slug]/page.tsx     # Dynamic MDX case study routes
├── config/
│   └── portfolio.ts             # 14-Domain anonymized taxonomy (SYSTEM_01–SYSTEM_14)
├── utils/
│   ├── audio.ts                 # Web Audio API SFX engine + filter scrubbing
│   └── cn.ts                    # Tailwind class merge utility (clsx + tailwind-merge)
├── components/
│   ├── ContactForm.tsx          # 4-state budget selector + confetti
│   ├── WorkSection.tsx          # 6-column Bento grid with CSS containment
│   ├── sections/                # Hero3D, AutomotiveSection, ArchitectureSection, DevRange, ContactSection
│   └── ui/                      # Navbar, CursorFollower, AsciiMatrixBackground, BrushTextureRevealPlane,
│                                  FrameScaleScroll, HorizontalScrollSection, KineticSkewWrapper,
│                                  MarkerHighlight, WeatherCanvas, etc.
└── scripts/
    ├── sync-videos.js           # yt-dlp + ffmpeg pipeline
    └── sync-assets.js           # Asset directory verification
```

## Error Diagnostics & Resolution
See `ERROR_CONTROL.md` for the complete 4-level diagnostic matrix covering:
- **ENOENT Manifest Errors**: Resolution protocol (kill node → wipe .next → restart)
- **SSR Crashes (Internal Server Errors)**: WebGL Canvas elements will crash on server hydrate. Use `const WebGLComponent = dynamic(() => import('./WebGL'), { ssr: false })` inside Client Components. *Note: `ssr: false` is not permitted in Server Components.*
- **ESLint Circular JSON**: `FlatCompat` bridge issue in `eslint.config.mjs`
- **Memory Leaks**: WeatherCanvas GC churn, AsciiMatrix listener leak
- **Mobile Viewport**: `h-screen` vs `h-[100svh]` audit results

## Quality Control Checklist
1. Run `npx tsc --noEmit` before committing code (must return 0 errors).
2. Run `npx next build --no-lint` to verify production bundle.
3. Consult `ERROR_CONTROL.md` fix priority matrix before deploying.
4. Commit all verified changes to Git main branch.
5. Keep `.project_state/` memory core files synchronized after every code change.
