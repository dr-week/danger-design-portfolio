# 02_DESIGN_RULES // DESIGN LANGUAGE & NARRATIVE ARCHITECTURE

## 1. CORE PHILOSOPHY & AESTHETIC FEEL
* **Engineering Over Decoration:** Every visual element must serve a structural or informational purpose. Zero superficial graphics.
* **The Brutalist Grid:** High-contrast, unpolished but mathematically precise. Exposed borders (`border-zinc-800`), visible wireframes, and raw data outputs.
* **Anti-Gimmick Copy:** No agency buzzwords. Clinical domain-first terminology (`SYSTEM_01` to `SYSTEM_14`).
* **Color Palette:** Absolute black (`#000000`), stark white (`#FFFFFF`), with warning amber (`#F59E0B`) or terminal green (`#22c55e`) for active states.

## 2. HUMAN KINEMATICS & MOTION PROCESS
* **Physics Over Time:** Mass, tension, and friction over standard `ease-in-out`.
* **The Standard Spring:** Snappy, tactile, critically damped (`type: "spring", mass: 1.2, stiffness: 350, damping: 40`).
* **Tactile Cursor Kinematics (`CursorFollower.tsx`):** Dual-ring spring follower (`stiffness: 450, damping: 28, mass: 0.5`) expanding on `data-cursor-hover` targets into amber (`#F59E0B`).
* **Web Audio SFX Engine (`src/utils/audio.ts`):** Synthesized 1200Hz tactile clicks & 120Hz sub-bass hums with `[ SFX: ON / OFF ]` HUD toggle.
* **Spatial Depth (Z-Axis):** Camera moves through 3D environment ($Z = 0$ to $Z = -85$). Foreground moves faster and skews on scroll velocity. Background drags behind.

## 3. SIGNATURE SPATIAL INTERACTION PATTERNS
* **Brush / Texture Canvas Reveal (Monogrid Pattern):** Organic ink/brush texture eroding mask on scroll velocity spikes.
* **Frame Scaling on Scroll (Artem Artem Pattern):** `useScroll` scale progression from nested `scale: 0.75` to full-bleed `scale: 1.0`.
* **Vertical-to-Horizontal Scroll Shift (Normal is Boring Pattern):** Pinned `h-[300vh]` section translating X-axis progress (`x: [0, -2000]`).
* **Dynamic Interactive Background (Dragonfly Pattern):** GLSL simplex noise background field reacting to mouse coordinates and scroll velocity.

## 4. THE DIRECTOR'S LENS (NARRATIVE THINKING)
* **Cinematic Framing:** Simulated focal lengths (85mm, macro, wide-angle, orthographic).
* **Volumetric Lighting:** Directional spotlights, volumetric god rays, high-contrast shadows.
* **Focus & Blur:** Intense Depth of Field (DoF) and background blur (`backdrop-blur-md`).
* **Imperfection:** Sine-wave camera breathing, film grain, chromatic aberration, and handwritten `Caveat` annotations over sterile code.

## 5. COMPONENT LIFECYCLE RULES
1. **Raw State:** Display unstyled data/wireframe.
2. **Kinematic Entry:** Snap component with Standard Spring.
3. **Active State:** Engage hover physics (magnetic cursors, velocity skew, grayscale-to-color transition).
4. **Exit State:** Instant removal or reverse kinematic pull.
