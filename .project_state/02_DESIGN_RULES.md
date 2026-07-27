# 02_DESIGN_RULES // DESIGN LANGUAGE & NARRATIVE ARCHITECTURE

> Memory core design rules. Mirrored at root-level `DESIGN_DIRECTIVE.md`.

## 1. CORE PHILOSOPHY & AESTHETIC FEEL
* **Cinematic Studio Aesthetic:** High-end, premium visual authority. The goal is to sell services instantly.
* **Minimal UI:** If an effect distracts from the portfolio media, delete it. Let the actual video and photography assets take absolute priority.
* **Clean & Professional:** High contrast, legible typography, and no gimmicky "cybersecurity" or "hacker" obfuscation.
* **Color Palette:** Absolute black (`#000000`), stark white (`#FFFFFF`), with minimal, deliberate accents for active states (e.g., `#F59E0B`).
## 2. SCRIPT & SANS FONT PAIRING + ANIMATED HIGHLIGHTING
* **Font Contrast Pairing:** Pair rigid geometric sans-serif headlines (`Space Grotesk`) with energetic handwritten script annotations (`font-caveat` Caveat font) inline within headers, sub-badges, and code notes.
* **Animated SVG Marker Highlighting (`MarkerHighlight.tsx`):**
  - Use dynamic SVG hand-drawn underlines and highlighter blocks (`pathLength` animated from `0` to `1` via Framer Motion on scroll into view).
  - Amber/Yellow marker highlight backgrounds (`bg-amber-400/20` or `bg-amber-400 text-black`) expanding on hover.
* **Kinetic Typography Animations:** Weight morphing from `font-light (300)` to `font-black (900)` and letter-spacing expansion on cursor hover.

## 3. UNIFORM SQUARE MEDIA & ENVIRONMENTAL FILTERS
* **Uniform Square Aspect Ratio:** All portfolio media cards enforce a clean 1:1 brutalist square aspect ratio (`aspect-square`).
* **Section Filter Ramping:**
  - **Hero Section (`Hero3D.tsx`):** `filter: contrast(125%) grayscale(100%)`
  - **Archive Matrix (`WorkSection.tsx`):** `filter: contrast(120%) sepia(30%) hue-rotate(330deg)`
  - **Automotive Section (`AutomotiveSection.tsx`):** `filter: contrast(130%) brightness(90%) saturate(110%)`
  - **Architecture Section (`ArchitectureSection.tsx`):** `filter: contrast(120%) hue-rotate(180deg) brightness(95%)`
  - **Dev Range Section (`DevRange.tsx`):** `filter: contrast(135%) brightness(85%) saturate(80%)`
  - **Horizontal Parallax (`HorizontalScrollSection.tsx`):** `backdrop-filter: invert(100%) hue-rotate(90deg)`

## 4. HUMAN KINEMATICS & MOTION PROCESS
* **Physics Over Time:** Mass, tension, and friction over standard `ease-in-out`.
* **The Standard Spring:** Snappy, tactile, critically damped (`type: "spring", mass: 1.2, stiffness: 350, damping: 40`).
* **Tactile Cursor Kinematics (`CursorFollower.tsx`):** Dual-ring spring follower (`stiffness: 450, damping: 28, mass: 0.5`) expanding on `data-cursor-hover` targets into amber (`#F59E0B`). 60px magnetic attraction snapping.
* **Web Audio SFX Engine (`src/utils/audio.ts`):** Synthesized 1200Hz tactile clicks, 120Hz sub-bass hums, and dynamic scroll filter frequency scrubbing (300Hz→2400Hz).
* **Spatial Depth (Z-Axis):** Camera moves through 3D environment ($Z = 0$ to $Z = -85$). Foreground moves faster and skews on scroll velocity. Background drags behind.

## 5. SIGNATURE SPATIAL INTERACTION PATTERNS
* **Brush / Texture Canvas Reveal (Monogrid Pattern):** Organic ink/brush texture eroding mask on scroll velocity spikes. Implemented as `BrushTextureRevealPlane.tsx` with custom GLSL simplex noise fragment shader.
* **Frame Scaling on Scroll (Artem Artem Pattern):** `useScroll` scale progression from nested `scale: 0.75` to full-bleed `scale: 1.0`.
* **Vertical-to-Horizontal Scroll Shift (Normal is Boring Pattern):** Pinned `h-[300vh]` section translating X-axis progress (`x: [0, -2000]`).
* **Dynamic Interactive Background (Dragonfly Pattern):** HTML5 Canvas ASCII character matrix reacting to mouse coordinates and scroll velocity.

## 6. THE DIRECTOR'S LENS (NARRATIVE THINKING)
* **Cinematic Framing:** Simulated focal lengths (85mm, macro, wide-angle, orthographic).
* **Volumetric Lighting:** Directional spotlights, volumetric god rays, high-contrast shadows.
* **Focus & Blur:** Intense Depth of Field (DoF) and background blur (`backdrop-blur-md`).
* **Imperfection:** Sine-wave camera breathing, film grain, chromatic aberration, and handwritten `Caveat` annotations over sterile code.

## 7. COMPONENT LIFECYCLE RULES
1. **Raw State:** Display unstyled data/wireframe.
2. **Kinematic Entry:** Snap component with Standard Spring.
3. **Active State:** Engage hover physics (magnetic cursors, velocity skew, grayscale-to-color transition).
4. **Exit State:** Instant removal or reverse kinematic pull.

## 8. ERROR PREVENTION RULES
* Always use `h-[100svh]` instead of `h-screen` for full-height containers.
* Wrap all Three.js/R3F Canvas components with `dynamic(() => import(...), { ssr: false })`.
* Never allocate `new THREE.Vector3()` or similar inside `useFrame` loops.
* Always implement `useEffect` cleanup for videos, event listeners, and animation frames.
* See `ERROR_CONTROL.md` for the full 4-level diagnostic matrix.
## 3. SPATIAL PACING & PSYCHOLOGICAL HIERARCHY

### 1. THE HERO (Root /) // THE HOOK
* **Psychological Value:** Instant Authority & Trust.
* **Selling Point:** "I execute high-end video and photography."
* **Technical Execution:**
  * **Core Element:** Hero3D.tsx (3D Mobile Phones) must be front and center.
  * **Atmosphere:** Clean cinematic studio lighting (directional spotlights, deep shadows).
  * **Rule:** ZERO particle effects here. No rain, no noise. Pure focus on the media playing inside the 3D screens.

### 2. DOMAIN A: SPATIAL & ARCHITECTURE (/spatial) // THE IMMERSION
* **Psychological Value:** Scale & Environmental Control.
* **Selling Point:** Real estate, physical locations, and structural aesthetics.
* **Technical Execution:**
  * **Core Element:** Wide-aspect ratio Bento Box grids.
  * **Atmosphere (RESTORED):** **The Weather Engine.** GPU particle rain and random thunderstorm point-lights belong here. It overlays architectural grids to create a moody, physical environment.

### 3. DOMAIN B: CULTURE & BRANDS (/culture) // THE CRAFT
* **Psychological Value:** Precision & High Fashion.
* **Selling Point:** Brand identity, boutique fashion, and fast-paced commercial cuts.
* **Technical Execution:**
  * **Core Element:** Dense, tightly packed CSS Bento Grids.
  * **Atmosphere:** **GLSL Ink/Brush Reveals.** Hovering over grid items uses organic WebGL displacement shaders (Monogrid style) to reveal high-res imagery. High contrast, sterile, sharp.

### 4. DEEP DIVES (/work/[id]) // THE NARRATIVE
* **Psychological Value:** Deep focus and technical breakdown.
* **Selling Point:** The process, the context, and the final deliverable.
* **Technical Execution:**
  * **Core Element:** Massive edge-to-edge media players and strict brutalist typography.
  * **Atmosphere:** **Virtual Momentum Scrolling (Lenis).** Parallax Z-axis depth where foreground text moves faster than the background imagery.
