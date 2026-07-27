# 01_ARCHITECTURE // DOMAIN TAXONOMY & ANTIGRAVITY ADVANCED ENGINEERING PROTOCOL

> Memory core architecture file. Mirrored at root-level `ARCHITECTURE_PLAN.md`.
> For error diagnostics and latent bug tracking, see `ERROR_CONTROL.md`.

Master reference guide for WebGL camera angles, lighting models, Framer Motion kinematics, reference inspiration architecture, 10 award-winning creative techniques, and the Antigravity Advanced Engineering Protocol.

---

## ⚡ THE ANTIGRAVITY ADVANCED ENGINEERING PROTOCOL

### 1. Advanced WebGL & GPU Pipeline Tricks
* **CPU-to-GPU Offloading (Uniforms):** Never calculate heavy math or object positions inside JavaScript `useFrame` loops. Instead, pass time and scroll progress into **Custom GLSL Vertex Shaders** via uniforms (`u_time`, `u_scroll`) and let the GPU handle vertex displacement natively at 120fps.
* **Frustum Culling & Disposal:** Dynamically unmount and dispose of Three.js geometry, textures, and material buffers when a user scrolls out of a spatial room. This eliminates memory leaks in heavy WebGL canvas states.
* **Dynamic LOD (Level of Detail):** Automatically reduce particle counts (rain, dust, stars) and disable post-processing passes (DoF, Chromatic Aberration) if the client hardware reports low frame rates or a mobile viewport.

### 2. High-Performance DOM & Bento Architecture
* **CSS Grid Structural Containment:** Use `contain: layout style paint;` on complex Bento grid boxes to isolate DOM reflows and prevent layout shifts when hover animations trigger.
* **Hardware-Accelerated Transforms:** Restrict all Framer Motion and layout animations strictly to `transform` (`translate3d`, `scale3d`) and `opacity`. Never animate layout-triggering properties like `width`, `height`, or `top`.
* **In-Memory State Sync:** Keep all active UI toggles, modal states, and portfolio filters synced directly to URL hash parameters or sessionStorage so page reloads don't wipe user context.

### 3. State & Memory Persistence (The Local Core)
* Synchronize every variable, component spec, and kinematic rule in `.project_state/` before writing code to prevent context drift.

## 🧠 4 PSYCHOLOGICAL NARRATIVE MUTATORS
These mechanisms enforce information asymmetry and Skinner-box anticipation.

1. **The Hook (Act I):** The Terminal (`/`) boots as a restricted UNIX environment. Scroll velocity drives a custom GLSL shader that "decrypts" the 3 gateways, forcing the user to earn access.
2. **The Decoder Lens (Act II):** Domain grids use Redacted Information Architecture. Text is obfuscated (`[██████]`). The magnetic cursor acts as a decoder, revealing high-res images and un-redacting text on hover.
3. **The Variable Reward (Act III):** The "Next Project" loop trigger is not a DOM button. It is a massive WebGL displacement portal that offers a distorted, animated glimpse of the next case study, physically pulling the user in.
4. **The Evolving Loop (Global):** Returning to the Terminal after completing a domain alters the Terminal's state. Lighting shifts from Blue to Amber, and `// ARCHIVE_SYNCED` UI stickers persist. The loop mutates; it does not reset.

---

## 🔄 3-ACT LOOPABLE ARCHITECTURE & ATMOSPHERIC LOCATIONS

We have abandoned the single-page monolith in favor of a modular App Router narrative. Each route has a distinct physical location feel and WebGL atmosphere.

### Level 1: The Terminal (`/`)
* **Location Feel:** The Data Void.
* **Atmosphere:** Pitch black, wireframe intersections.
* **Mechanic:** Scroll-scrubbed camera drop plunging the user into the 3 domain portals.

### Level 2: The Domains
* **Domain A (`/systems`): SYSTEMS & LOGIC**
  - **Location Feel:** The Brutalist Lab.
  - **Atmosphere:** Orthographic camera, cold blue/cyan rim lighting (#4fc3f7), zero shadows.
  - **Mechanic:** Rigid CSS Bento Grid (grid-cols-6) with sharp, instant hover snaps.

* **Domain B (`/spatial`): SPATIAL & KINEMATICS**
  - **Location Feel:** The Coastal Concrete (High Noon).
  - **Atmosphere:** Sweeping wide-angle FOV, warm volumetric god rays intersecting architectural geometry.
  - **Mechanic:** Vertical-to-Horizontal scroll transition (axis shift) for large spatial drone/interior imagery.

* **Domain C (`/culture`): CULTURE & CINEMA**
  - **Location Feel:** The Darkroom / Studio Set.
  - **Atmosphere:** Macro depth of field (DoF), anamorphic lens distortion, high-contrast strobe flashes.
  - **Mechanic:** Kinetic typography masks revealing video loops.

### Level 3: Loopable Deep Dives (`/work/[id]`)
* **Mechanic:** At the bottom of every page lies a kinematic "Next Project" link pulling the user into the next case study, creating an infinite loop. No dead ends.

---

## 🏆 10 MASTER AWARD-WINNING CREATIVE TECHNIQUES MATRIX (AWWWARDS / FWA STANDARDS)

### 1. Velocity-Based Kinetic Skew & Inertia
* **Mechanic:** Scroll velocity $v = \frac{\Delta y}{\Delta t}$ drives dynamic element skewing (`skewY: velocity * 0.15deg`) and inertia drag.

### 2. Magnetic Attraction & Inversion Lens Cursor
* **Mechanic:** Custom dual-ring cursor magnetically snaps to nearby interactive nodes within a 60px radius. Over images, the lens flips color values via `backdrop-filter: invert(100%)`.

### 3. GLSL Liquid Displacement Hover Shader (Monogrid Pattern)
* **Mechanic:** Mouse hover triggers a GLSL fragment shader ripple displacement pass on canvas texture planes.

### 4. Dual-Axis Split Timeline (Opposing Column Pin)
* **Mechanic:** Viewport pins while left and right columns move in opposing Y-axis directions or transition into horizontal parallax tracks.

### 5. Adaptive Spatial Audio Engine
* **Mechanic:** Synthesized Web Audio API soundscape with dynamic low-pass filter cutoff ($\text{frequency} = 300\text{Hz} \to 2400\text{Hz}$) opening with scroll velocity.

### 6. Diagonal Blueprint / Render Wipe Lens
* **Mechanic:** Real-time diagonal scanline slider revealing raw wireframe blueprint beneath photorealistic 3D renders.

### 7. Stochastic Chromatic Aberration & Lens Glitch
* **Mechanic:** RGB channel splitting (`Vector2(r, g)`) expands dynamically on scroll velocity spikes, returning to crisp alignment when idle.

### 8. Variable Kinetic Typography Weight Morphing
* **Mechanic:** Typographic headlines (`Space Grotesk`) morph font-weight from `300 (Light)` to `900 (Black)` based on cursor proximity.

### 9. Volumetric God Ray Spotlight Tracking
* **Mechanic:** 3D directional spotlights in WebGL scenes (`@react-three/drei`) continuously focus and track cursor coordinates in 3D world space.

### 10. Zero-Latency Audio Synthesizer Frequency Scrubbing
* **Mechanic:** Web Audio API oscillator pitch and filter cutoff increase dynamically as the user scrolls through distinct environment sections.

---

## 🎨 SIGNATURE REFERENCE INSPIRATION ARCHITECTURE

### 1. The Brush / Texture Reveal (Monogrid Pattern)
* Organic brush stroke / ink-bleed texture mask eroding on scroll velocity.

### 2. Frame Scaling on Scroll (Artem Artem Pattern)
* Media frame expanding from `scale: 0.78` nested box to `scale: 1.0` full-bleed frame.

### 3. Vertical-to-Horizontal Scroll Shift (Normal is Boring Pattern)
* Pinned `h-[300vh]` section translating X-axis progress (`x: [0, -75%]`).

### 4. Dynamic Interactive ASCII Background (Dragonfly Pattern)
* Full-screen HTML5 Canvas ASCII character matrix (`. : * = + # @`) reacting to mouse ripples and scroll velocity.

---

## 📐 14-DOMAIN TAXONOMY & KINEMATIC SPECIFICATIONS

### SYSTEM_01 // MOTION & CGI
* **Camera:** Low-angle tracking shot.
* **Lighting:** Directional specular highlights.
* **Kinematics:** Exponential ease-out.

### SYSTEM_02 // SPATIAL CGI
* **Camera:** Wide-angle bottom-up perspective.
* **Lighting:** Volumetric god rays.
* **Kinematics:** Linear Z-axis push.

### SYSTEM_03 // BRAND SYSTEMS
* **Camera:** Flat orthographic grid.
* **Lighting:** Studio softbox ambient.
* **Kinematics:** Staggered grid snap.

### SYSTEM_04 // UI/UX ENGINEERING
* **Camera:** Orthographic 2D plane.
* **Lighting:** Cool rim lighting (`#4fc3f7`).
* **Kinematics:** Critically damped spring (`mass: 1.2, stiffness: 350, damping: 40`).

### SYSTEM_05 // AUTOMOTIVE KINEMATICS
* **Camera:** Low-angle tracking, high Field of View (FOV).
* **Lighting:** Harsh directional specular highlights.
* **Kinematics:** High-velocity exponential ease-out.

### SYSTEM_06 // GASTRONOMY & HOSPITALITY
* **Camera:** Macro perspective, extreme Depth of Field (DoF).
* **Lighting:** Warm ambient point lights (`#ffb74d`).
* **Kinematics:** Slow sine-wave drift.

### SYSTEM_07 // INTERFACE DYNAMICS
* **Camera:** Orthographic projection.
* **Lighting:** Cool rim lighting (`#4fc3f7`).
* **Kinematics:** Critically damped springs (stiffness: 400).

### SYSTEM_08 // VOLUMETRIC ARCHITECTURE
* **Camera:** Wide-angle bottom-up scale.
* **Lighting:** Volumetric sun rays (God rays).
* **Kinematics:** Continuous linear tracking.

### SYSTEM_09 // GLOBAL TOPOGRAPHY
* **Camera:** Aerial/Drone top-down perspective.
* **Lighting:** Dynamic daylight cycle.
* **Kinematics:** Scroll velocity mapped scrub.

### SYSTEM_10 // THEATRICAL ANIMATRONICS
* **Camera:** Static stage perspective.
* **Lighting:** Intersecting volumetric spotlights.
* **Kinematics:** Pendulum string physics.

### SYSTEM_11 // EDITORIAL APPAREL
* **Camera:** Studio portrait 85mm lens.
* **Lighting:** High-contrast strobe intervals.
* **Kinematics:** Staggered reveal snaps.

### SYSTEM_12 // EPISODIC CINEMATOGRAPHY
* **Camera:** Anamorphic 2.35:1 dolly zoom.
* **Lighting:** Low-key teal/orange split.
* **Kinematics:** Cubic-bezier(0.65, 0, 0.35, 1).

### SYSTEM_13 // ADDITIVE MANUFACTURING
* **Camera:** Isometric 45-degree angle.
* **Lighting:** UV grid emission lighting.
* **Kinematics:** Layer staircase stepped reveal.

### SYSTEM_14 // INTERACTIVE ENGINE
* **Camera:** First-person free-look node.
* **Lighting:** Chaotic RGB collision light.
* **Kinematics:** Unbound mass & gravity calculations.

---

## 🛡️ ERROR PREVENTION RULES
* Always use `h-[100svh]` instead of `h-screen` for full-height containers.
* Wrap all Three.js/R3F Canvas components with `dynamic(() => import(...), { ssr: false })`.
* Never allocate `new THREE.Vector3()` or similar inside `useFrame` render loops.
* Always implement `useEffect` cleanup for videos, event listeners, and animation frames.
* See `ERROR_CONTROL.md` for the full 4-level diagnostic matrix with verified fix protocols.
