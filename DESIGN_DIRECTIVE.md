# SYSTEM_DIRECTIVE // DESIGN LANGUAGE & NARRATIVE ARCHITECTURE

## 1. CORE PHILOSOPHY & AESTHETIC FEEL
* **Engineering Over Decoration:** Every visual element must serve a structural or informational purpose. Zero superficial graphics.
* **The Brutalist Grid:** High-contrast, unpolished but mathematically precise. Exposed borders (`border-zinc-800`), visible wireframes, and raw data outputs. 
* **Anti-Gimmick Copy:** No agency buzzwords. No fluff. Use clinical, domain-first terminology (e.g., "Spatial Architecture" instead of "Beautiful Houses").
* **Color Palette:** Absolute black (`#000000`), stark white (`#FFFFFF`), with pure warning amber (`#F59E0B`) or terminal green for active states.

## 2. HUMAN KINEMATICS & MOTION PROCESS
* **Physics Over Time:** Abandon standard `ease-in-out` transitions. All motion must be calculated by mass, tension, and friction.
* **The Standard Spring:** Snappy, tactile, critically damped. Fast start, heavy deceleration, zero bouncy overshoot.
    * `type: "spring", mass: 1.2, stiffness: 350, damping: 40`
* **Tactile Cursor Kinematics (`CursorFollower.tsx`):** Dual-ring spring follower tracking mouse coordinates (`stiffness: 450, damping: 28, mass: 0.5`) expanding over `data-cursor-hover` targets into warning amber (`#F59E0B`).
* **Web Audio SFX Feedback (`src/utils/audio.ts`):** Synthesized 1200Hz high-frequency tactile clicks on button hovers/clicks and 120Hz sub-bass hums on reel/room switches with `[ SFX: ON / OFF ]` HUD toggle.
* **Spatial Depth (Z-Axis):** Scrolling is not moving down a page; it is moving a camera through a 3D environment. Foreground objects move faster and skew based on scroll velocity. Backgrounds drag heavily behind.

## 3. THE DIRECTOR'S LENS (NARRATIVE THINKING)
* **Cinematic Framing:** Treat WebGL scenes and media grids like a camera operator. Use simulated focal lengths (85mm for portraits, macro for details, wide-angle for architecture).
* **Volumetric Lighting:** Do not use flat ambient light in 3D scenes. Use harsh directional spotlights, volumetric god rays, and high-contrast shadows to build atmosphere.
* **Focus & Blur:** Guide the user's eye using intense Depth of Field (DoF). When a modal opens or the camera pushes in, the background must blur heavily.
* **Imperfection:** Inject subtle human touch into the digital grid—subtle camera breathing (sine-wave camera shake), film grain, chromatic aberration, and handwritten UI annotations over sterile code blocks.

## 4. COMPONENT LIFECYCLE RULES
1. **Raw State:** Display the unstyled data or wireframe first.
2. **Kinematic Entry:** Snap the component into its final position using the Standard Spring.
3. **Active State:** Engage hover physics (magnetic cursors, velocity skew, grayscale to color transition).
4. **Exit State:** Instant removal or reverse kinematic pull.
