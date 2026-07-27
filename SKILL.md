---
name: brutalist-portfolio-design-system
description: Guidelines and component pattern standards for building high-impact brutalist creative portfolio web applications in Next.js, React, and Tailwind CSS.
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
1. **Typography First**: Combine bold geometric sans-serif fonts (e.g. `Space Grotesk`) with energetic handwritten accents (`Caveat`).
2. **High-Contrast Color Palette**: Deep dark backgrounds (`#0a0a0a`, `#121212`) contrasted with crisp white, subtle zinc borders (`border-zinc-800`), and neon indicator accents (`#22c55e`, `#ef4444`).
3. **Tactile UI Elements**:
   - **Torn Tape Dividers** (`TornDivider.tsx`): Irregular paper border dividers with subtle SVG mask effects.
   - **Marker Highlights** (`MarkerHighlight.tsx`): Dynamic SVG hand-drawn underlines animated via Framer Motion.
   - **Interactive Canvas Overlays** (`WeatherCanvas.tsx`): Multi-atmosphere 2D Canvas overlays (`night`, `sunbeam`, `rain`).
   - **Lamp Focus / Selective Tilt** (`LampFocus.tsx`): Mouse-tracking card tilt with glowing spotlight gradients.
4. **No Heavy 3D Overkill**: Prefer lightweight CSS + Framer Motion components over large WebGL bundles unless complex 3D scenes are required.

## File & Component Structure
```
src/
├── app/
│   ├── globals.css         # Font variable mappings & base utility overrides
│   ├── layout.tsx          # Font loaders, Lenis smooth scroll, metadata
│   └── page.tsx            # Main portfolio layout assembly
└── components/
    ├── sections/           # Large page sections (Hero3D, DevRange, WorkSection)
    └── ui/                 # Reusable micro-components (Navbar, LampFocus, WeatherCanvas, MarkerHighlight, ParallaxLayer)
```

## Quality Control Checklist
- Run `npx tsc --noEmit` before committing code.
- Ensure all interactive buttons and cards have visible focus ring & hover transitions (`transition-all duration-300`).
- Ensure all images/illustrations use responsive containers and semantic standard `alt` tags.
