# 🛡️ ERROR CONTROL & LATENT ARCHITECTURE AUDIT

> **Purpose:** This document is the single source of truth for diagnosing, preventing, and resolving all known production failures across the Danger Design portfolio. It covers 4 architectural layers: DOM/Viewport, React State/Lifecycle, WebGL/GPU Pipeline, and Build/Asset/Network.

### 🧪 VERIFIED SUITE AUDIT LOG (TIMESTAMP: 2026-07-28 20:32 IST)
- **TypeScript Static Analysis (`npx tsc --noEmit`)**: ✅ **0 Errors**. All component props, types, and imports verified.
- **Production Build Compilation (`npm run build`)**: ✅ **Pass**. 23 static routes compiled cleanly.
- **Hydration Safety Audit**: ✅ **Pass**. WebGL components isolated with `ssr: false`.
- **Live Deployment**: ✅ **Pass**. Live at `https://dr-week.github.io/danger-design-portfolio/`.

---

## 🔴 EMERGENCY: "Can't See UI / Internal Server Error / ENOENT Manifest"

### Symptoms
- Blank white page or 500 Internal Server Error on `localhost:3000`
- Terminal shows `ENOENT: no such file or directory, open '.next/server/pages/_app/build-manifest.json'`
- Terminal shows `ENOENT: no such file or directory, open '.next/static/development/_buildManifest.js.tmp.*'`
- Page loads but shows React hydration error or "Application error: a client-side exception has occurred"

### Root Cause
Next.js's `.next/` build cache directory becomes corrupted when:
1. `npm run build` runs while `next dev` is still active in another terminal tab
2. A previous build was interrupted or crashed mid-write
3. `next start` is executed without a completed `next build`
4. Git operations or file system tools modify `.next/` contents

### Resolution Protocol (Copy-Paste Ready)
```powershell
# 1. Kill ALL node processes holding file locks
taskkill /f /im node.exe

# 2. Nuke the corrupt build cache
Remove-Item -Recurse -Force .next

# 3. For DEVELOPMENT (live editing with HMR):
npm run dev

# 4. For PRODUCTION (static build + serve):
npm run build
npm run start
```

### Prevention Rules
- **NEVER** run `npm run build` while `next dev` is running in another terminal
- **NEVER** run `next start` without first completing `next build`
- After any git pull/merge, always wipe `.next` before starting the dev server
- If you see ANY `ENOENT` error referencing `.next/`, immediately run the Resolution Protocol above

---

## LEVEL 1: DOM & VIEWPORT LAYER (Layout & Viewport Stability)

### 1.1 — Mobile Address Bar Layout Jumps

| Field | Detail |
|-------|--------|
| **Vector** | Full-height containers clip or reflow when mobile browser toolbars collapse/expand on scroll |
| **Root Cause** | Using CSS `h-screen` (= `100vh`) which on iOS Safari/Chrome Android counts the address bar as part of the viewport, causing a 56–72px jump |
| **Affected Files** | `src/components/Hero.tsx:7` (`h-screen`), `src/components/ui/HorizontalScrollSection.tsx:35` (`h-screen`) |
| **Safe Files** | `layout.tsx` (`min-h-screen` ✅), `page.tsx` (`min-h-screen` ✅), `lab/page.tsx` (`h-[100svh]` ✅), `Hero3D.tsx` (`min-h-[100svh]` ✅) |
| **Fix** | Replace all `h-screen` → `h-[100svh]` and all `min-h-screen` → `min-h-[100svh]` in layout-critical containers |
| **Priority** | ⚠️ MEDIUM |

### 1.2 — Horizontal Viewport Bleed

| Field | Detail |
|-------|--------|
| **Vector** | Absolute-positioned WebGL canvases or oversized grid items breaking container bounds on sub-400px viewports |
| **Root Cause** | Missing overflow clipping on root layout or section containers |
| **Current Status** | ✅ `layout.tsx` already has `overflow-x-hidden w-full` on `<body>`. `WorkSection.tsx` Bento cards have `contain: layout style paint;` |
| **Remaining Risk** | WebGL `<Canvas>` in `/lab` route renders at full viewport — test on 360px mobile widths |
| **Priority** | 🟡 LOW |

---

## LEVEL 2: REACT STATE & LIFECYCLE LAYER (SSR & Memory Leaks)

### 2.1 — 🚨 CRITICAL: `/lab` Page SSR Crash

| Field | Detail |
|-------|--------|
| **Vector** | `src/app/lab/page.tsx` directly imports `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`, and `three` at the top level. Even with `"use client"`, Next.js still server-side renders client components on the first pass. |
| **Root Cause** | Three.js and R3F depend on `window`, `document`, and WebGL contexts that don't exist on Node.js servers. `"use client"` does NOT prevent SSR — it only marks the component as a client boundary. |
| **Symptom** | `ReferenceError: window is not defined` during build/SSR, or blank page with hydration mismatch |
| **Current Status** | 🔴 NOT FIXED — lab page has zero dynamic imports |
| **Fix** | Extract the entire Canvas scene to `src/components/LabScene.tsx` and import via: |
| | `const LabScene = dynamic(() => import('@/components/LabScene'), { ssr: false });` |
| **Priority** | 🚨 CRITICAL |

### 2.2 — Hero3D: 7 Simultaneous YouTube iFrames + Videos

| Field | Detail |
|-------|--------|
| **Vector** | `src/components/sections/Hero3D.tsx` renders ALL 7 reels simultaneously (hidden with `opacity-0`), meaning 7 YouTube iframes load at once consuming massive memory and network bandwidth, plus 7 `<video>` fallback elements autoplay simultaneously |
| **Root Cause** | No lazy rendering — all reels mount immediately regardless of which is active |
| **Fix** | Render only the active reel (and optionally ±1 for smooth transitions). Add `useEffect` cleanup to `pause()` and `remove()` inactive `<video>` elements on unmount |
| **Priority** | ⚠️ HIGH |

### 2.3 — WeatherCanvas: scrollProgress GC Churn

| Field | Detail |
|-------|--------|
| **Vector** | `src/components/ui/WeatherCanvas.tsx` uses `scrollProgress` as a React state variable in the `useEffect` dependency array of the animation loop. Every scroll event triggers `setScrollProgress`, which tears down and reconstructs the **entire particle system + animation loop** |
| **Root Cause** | State-driven effect dependency causes full teardown/rebuild on every scroll tick — allocating a new particles array each time triggers V8 garbage collection spikes |
| **Fix** | Move `scrollProgress` to a `useRef` and read it inside the `render()` callback instead of using it as a `useEffect` dependency |
| **Priority** | 🚨 CRITICAL (causes visible frame drops on scroll) |

### 2.4 — AsciiMatrixBackground: Stale Closure Event Listener Leak

| Field | Detail |
|-------|--------|
| **Vector** | `src/components/ui/AsciiMatrixBackground.tsx` — when `interactive` prop changes from `true` → `false`, the cleanup function reads the *new* value of `interactive` (which is `false`), so it skips removing the `mousemove` listener that was added when `interactive` was `true` |
| **Root Cause** | Stale closure in `useEffect` cleanup — the cleanup reads the current prop value, not the value at the time of subscription |
| **Fix** | Always attempt `window.removeEventListener("mousemove", handleMouseMove)` in cleanup regardless of `interactive` value |
| **Secondary Issue** | `opacity` is in the deps array but is never used inside the effect — causes unnecessary animation teardown. Remove `opacity` from deps |
| **Priority** | ⚠️ MEDIUM |

### 2.5 — Video & Texture Memory Leaks (General Rule)

| Field | Detail |
|-------|--------|
| **Vector** | Unmounted components leaving HTML5 video instances playing in background memory and retaining Three.js VideoTexture buffers |
| **Rule** | Every component that creates `<video>`, `THREE.VideoTexture`, or `THREE.WebGLRenderTarget` MUST implement cleanup in `useEffect` return: `video.pause(); video.removeAttribute('src'); video.load(); texture.dispose();` |
| **Current Status** | ⚠️ `WebGLVideoPhone` in `lab/page.tsx` creates video elements but has `useEffect` cleanup with `video.pause(); video.src = ""; video.load();` ✅ |
| **Priority** | 🟡 ONGOING RULE |

---

## LEVEL 3: WEBGL & GPU PIPELINE LAYER (Performance & Frame Rates)

### 3.1 — Garbage Collection Frame Drops (General Rule)

| Field | Detail |
|-------|--------|
| **Vector** | Instantiating `new THREE.Vector3()`, `new THREE.Color()`, `new THREE.Matrix4()` inside `useFrame` render loops triggers constant V8 GC spikes |
| **Current Status** | ✅ CLEAN — All audited components (`BrushTextureRevealPlane.tsx`, `PhoneScene.tsx`, `CameraRig` in lab) properly mutate existing objects via `.set()` or `.lerp()`. Uniforms are `useMemo`'d. |
| **Rule** | Pre-allocate all matrices, vectors, and color objects OUTSIDE the render loop. Inside `useFrame`, only use `.set()`, `.lerp()`, `.copy()`, `.multiplyScalar()` etc. |
| **Priority** | ✅ VERIFIED CLEAN |

### 3.2 — Mobile GPU Thermal Throttling

| Field | Detail |
|-------|--------|
| **Vector** | Heavy post-processing stacks (`DepthOfField`, `ChromaticAberration`, high-count GPU particles) overwhelming low-end mobile GPUs |
| **Affected File** | `src/app/lab/page.tsx` — uses `EffectComposer` with `ChromaticAberration`, `Noise`, `Vignette` |
| **Fix** | Implement hardware tier detection. Conditionally disable expensive post-processing passes and throttle particle density on touch/low-end devices: |
| | `const isMobile = typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);` |
| | Then conditionally render `<EffectComposer>` only when `!isMobile` |
| **Priority** | ⚠️ MEDIUM |

### 3.3 — Frustum Culling & Disposal

| Field | Detail |
|-------|--------|
| **Vector** | Off-screen 3D rooms in `/lab` still consume GPU memory even when the camera is 50+ units away |
| **Rule** | Dynamically unmount rooms when camera Z-position is more than 30 units away. Dispose geometry, textures, and material buffers on unmount |
| **Priority** | ⚠️ MEDIUM (performance optimization, not a crash) |

---

## LEVEL 4: BUILD, ASSET & NETWORK LAYER (Pipeline & Deployment)

### 4.1 — 🚨 CRITICAL: ESLint Circular JSON Error

| Field | Detail |
|-------|--------|
| **Vector** | `npm run build` emits: `⨯ ESLint: Converting circular structure to JSON --> starting at object with constructor 'Object' ... property 'react' closes the circle` |
| **Root Cause** | `eslint.config.mjs` uses `FlatCompat` to bridge legacy `next/core-web-vitals` and `next/typescript` configs into ESLint 9 flat config format. The `FlatCompat` wrapper creates circular references when converting Next.js ESLint plugin configs that reference each other. |
| **Current Impact** | Build completes but with a lint warning. Could become a hard failure on future Next.js/ESLint updates. |
| **Fix Option A (Quick)** | Add `eslint: { ignoreDuringBuilds: true }` to `next.config.ts` — skip ESLint during build, run it separately via `npx eslint .` |
| **Fix Option B (Proper)** | Replace FlatCompat with native ESLint 9 flat config using `@next/eslint-plugin-next` and `@typescript-eslint/eslint-plugin` directly |
| **Priority** | 🚨 CRITICAL |

### 4.2 — Missing `transpilePackages` in next.config.ts

| Field | Detail |
|-------|--------|
| **Vector** | `three`, `three-stdlib`, `@react-three/fiber`, `@react-three/drei` sometimes need explicit transpilation in Next.js to avoid "unexpected token export" errors |
| **Fix** | Add to `next.config.ts`: `transpilePackages: ['three', 'three-stdlib']` |
| **Priority** | 🟡 LOW (not currently breaking, but can surface on certain import patterns) |

### 4.3 — Vercel Serverless Bundle Bloat

| Field | Detail |
|-------|--------|
| **Vector** | `/lab` route First Load JS is **479 kB** — approaching the 500 kB warning threshold. Storing raw uncompressed media or heavy runtime bundles can exceed Vercel serverless size/timeout limits. |
| **Current Route Sizes** | `/ → 174 kB`, `/lab → 479 kB`, `/work/[slug] → 112 kB`, `/_not-found → 103 kB` |
| **Fix** | Lazy-load heavy Three.js components. Code-split post-processing effects. Pre-compress assets locally via `scripts/sync-assets.js` |
| **Priority** | ⚠️ MEDIUM |

### 4.4 — Mid-File Import in lab/page.tsx

| Field | Detail |
|-------|--------|
| **Vector** | Line 87 of `src/app/lab/page.tsx` has `import BrushTextureRevealPlane from "@/components/ui/BrushTextureRevealPlane"` placed after function declarations instead of at the top of the file |
| **Impact** | Technically valid JavaScript (imports are hoisted), but violates code organization standards and can confuse bundlers in edge cases |
| **Fix** | Move all imports to the top of the file |
| **Priority** | 🟡 LOW |

---

## 📋 FIX PRIORITY MATRIX

| # | Issue | Level | Priority | Status |
|---|-------|-------|----------|--------|
| 1 | `/lab` page SSR crash — no `ssr: false` dynamic import | L2 | 🚨 CRITICAL | 🔴 NOT FIXED |
| 2 | ESLint circular JSON error in `eslint.config.mjs` | L4 | 🚨 CRITICAL | 🔴 NOT FIXED |
| 3 | WeatherCanvas `scrollProgress` GC churn | L2 | 🚨 CRITICAL | 🔴 NOT FIXED |
| 4 | Hero3D 7 simultaneous iframes/videos | L2 | ⚠️ HIGH | 🔴 NOT FIXED |
| 5 | `h-screen` → `h-[100svh]` in Hero.tsx & HorizontalScrollSection | L1 | ⚠️ MEDIUM | 🔴 NOT FIXED |
| 6 | AsciiMatrixBackground stale closure listener leak | L2 | ⚠️ MEDIUM | 🔴 NOT FIXED |
| 7 | Mobile GPU thermal throttling (post-processing) | L3 | ⚠️ MEDIUM | 🔴 NOT FIXED |
| 8 | `/lab` bundle size approaching 500 kB limit | L4 | ⚠️ MEDIUM | 🟡 MONITORING |
| 9 | Missing `transpilePackages` in next.config.ts | L4 | 🟡 LOW | 🔴 NOT FIXED |
| 10 | Mid-file import in lab/page.tsx | L4 | 🟡 LOW | 🔴 NOT FIXED |
| 11 | GC allocations in useFrame loops | L3 | ✅ VERIFIED | ✅ CLEAN |
| 12 | Video/texture disposal in WebGLVideoPhone | L2 | ✅ VERIFIED | ✅ CLEAN |
| 13 | Layout overflow-x clipping | L1 | ✅ VERIFIED | ✅ CLEAN |

---

## 🔧 QUICK REFERENCE: RESOLUTION COMMANDS

```powershell
# ENOENT / Manifest Error / Can't See UI
taskkill /f /im node.exe
Remove-Item -Recurse -Force .next
npm run dev

# Type Check (should return 0 errors)
npx tsc --noEmit

# Build Test (production bundle)
npm run build

# Build Test (skip ESLint circular error)
npx next build --no-lint

# Full Audit
npx tsc --noEmit && npx next build --no-lint
```

---

*Last Updated: 2026-07-27 | Audited by: 3 parallel architecture audit agents*
*Covers: Hero3D.tsx, WeatherCanvas.tsx, AsciiMatrixBackground.tsx, BrushTextureRevealPlane.tsx, PhoneScene.tsx, page.tsx, lab/page.tsx, layout.tsx, next.config.ts, eslint.config.mjs, globals.css*
