export interface ProjectSpec {
  camera: string;
  lighting: string;
  kinematics: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  aspectRatio: string;
  gridSpan: string;
  techStack: string[];
  specs: ProjectSpec;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "cgi-motion-01",
    slug: "cgi-motion-01",
    category: "SYSTEM_01 // MOTION & VFX",
    tag: "3D_DYNAMIC_RENDER",
    title: "High-Speed VFX & Compositing",
    description: "Multi-layer node compositing, real-time motion tracking, and high-speed video cut synchronization.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-4",
    techStack: ["Blender", "After Effects", "Unreal Engine"],
    specs: {
      camera: "Low-angle tracking shot",
      lighting: "Directional specular highlights",
      kinematics: "Exponential ease-out",
    },
  },
  {
    id: "spatial-arch-02",
    slug: "spatial-arch-02",
    category: "SYSTEM_02 // COGNITIVE ENGINE",
    tag: "LOCAL_LLM_INTEGRATION",
    title: "Code Assistant Architecture",
    description: "Design an offline local LLM code assistant panel. Outcome: 100% privacy-compliant, zero latency AI suggestions.",
    image: "/textures/hero-fallback.jpg",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
    techStack: ["Ollama", "VS Code API", "TypeScript"],
    specs: {
      camera: "Orthographic workspace grid",
      lighting: "Dynamic editor highlight",
      kinematics: "Linear workspace transition",
    },
  },
  {
    id: "brand-identity-03",
    slug: "brand-identity-03",
    category: "SYSTEM_03 // BRAND SYSTEMS",
    tag: "VECTOR_GRAPHICS_IDENTITY",
    title: "Boutique Brand Identity",
    description: "Hand-drawn vector logos, high-contrast visual design systems, and responsive brand guideline templates.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    techStack: ["Illustrator", "Figma", "Next.js"],
    specs: {
      camera: "Flat orthographic grid",
      lighting: "Studio softbox ambient",
      kinematics: "Staggered grid snap",
    },
  },
  {
    id: "saas-uiux-04",
    slug: "saas-uiux-04",
    category: "SYSTEM_04 // UI/UX ENGINEERING",
    tag: "WEB3_SAAS_INTERFACE",
    title: "Fintech App Dashboard UI",
    description: "Responsive bento-grid UI for real-time payment tracking. Outcome: Improved sub-second chart rendering speed.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    specs: {
      camera: "Orthographic 2D plane",
      lighting: "Cool rim lighting (#4fc3f7)",
      kinematics: "Critically damped spring",
    },
  },
  {
    id: "automotive-05",
    slug: "automotive-05",
    category: "SYSTEM_05 // AUTOMOTIVE KINEMATICS",
    tag: "HIGH_VELOCITY_RENDER",
    title: "Automotive Motion Reel",
    description: "High-velocity tracking edits, sound effect synchronization, and cinematic vehicle promo video edits.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-3",
    techStack: ["Unreal Engine 5", "Octane", "Nuke"],
    specs: {
      camera: "Low-angle high-FOV tracking",
      lighting: "Directional specular highlights",
      kinematics: "Exponential ease-out",
    },
  },
  {
    id: "gastronomy-06",
    slug: "gastronomy-06",
    category: "SYSTEM_06 // GASTRONOMY & HOSPITALITY",
    tag: "ORGANIC_MACRO_Persp",
    title: "Luxury Resort Visuals",
    description: "Macro close-up culinary detail shots, drone aerials, and warm ambient promotional video renders.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-3",
    techStack: ["Houdini", "Redshift", "Photoshop"],
    specs: {
      camera: "Macro perspective extreme DoF",
      lighting: "Warm ambient point lights (#ffb74d)",
      kinematics: "Slow sine-wave drift",
    },
  },
  {
    id: "interface-dynamics-07",
    slug: "interface-dynamics-07",
    category: "SYSTEM_07 // INTERFACE DYNAMICS",
    tag: "RIGID_SNAP_COMPONENTS",
    title: "Interface Physics & Design Systems",
    description: "High-stiffness spring mechanics, zero-latency micro-interactions, and component library architecture.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    techStack: ["TypeScript", "Framer Motion", "Tailwind"],
    specs: {
      camera: "Orthographic 2D plane",
      lighting: "Cool rim lighting (#4fc3f7)",
      kinematics: "Damped spring (stiffness: 400)",
    },
  },
  {
    id: "volumetric-arch-08",
    slug: "volumetric-arch-08",
    category: "SYSTEM_08 // VOLUMETRIC ARCHITECTURE",
    tag: "SCALE_GEOMETRY_RENDER",
    title: "Spatial Architectural Renders",
    description: "Photorealistic sky dome lighting, concrete texture mapping, and 3D architectural walkthroughs.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-4",
    techStack: ["V-Ray", "Rhino 3D", "After Effects"],
    specs: {
      camera: "Wide-angle bottom-up scale",
      lighting: "Volumetric god rays",
      kinematics: "Continuous linear tracking",
    },
  },
  {
    id: "global-topography-09",
    slug: "global-topography-09",
    category: "SYSTEM_09 // GLOBAL TOPOGRAPHY",
    tag: "DRONE_AERIAL_MAPPING",
    title: "Drone & Aerial Mapping Engine",
    description: "4K aerial topography, photogrammetry elevation matrices, and automated daylight cycles.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-3",
    techStack: ["CesiumJS", "WebGL", "Python GIS"],
    specs: {
      camera: "Aerial top-down drone node",
      lighting: "Shifting daylight hemisphere",
      kinematics: "Scroll velocity mapped scrub",
    },
  },
  {
    id: "theatrical-animatronics-10",
    slug: "theatrical-animatronics-10",
    category: "SYSTEM_10 // THEATRICAL ANIMATRONICS",
    tag: "VOID_PUPPETRY_PHYSICS",
    title: "Interactive Physics Mechanics",
    description: "Real-time collision dynamics, intersecting void spotlights, and stage animatronic motion.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-3",
    techStack: ["Three.js", "Cannon.js", "C++"],
    specs: {
      camera: "Static dead-center stage node",
      lighting: "Intersecting volumetric spotlights",
      kinematics: "Pendulum string physics",
    },
  },
  {
    id: "editorial-apparel-11",
    slug: "editorial-apparel-11",
    category: "SYSTEM_11 // EDITORIAL APPAREL",
    tag: "STUDIO_STROBE_GRID",
    title: "Editorial Apparel & Fashion Visuals",
    description: "High-contrast studio strobe illumination, 85mm lens portraits, and fabric texture simulations.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    techStack: ["Capture One", "Blender Cloth", "Figma"],
    specs: {
      camera: "Studio portrait 85mm lens",
      lighting: "High-contrast strobe intervals",
      kinematics: "Staggered reveal snaps",
    },
  },
  {
    id: "episodic-cinematography-12",
    slug: "episodic-cinematography-12",
    category: "SYSTEM_12 // EPISODIC CINEMATOGRAPHY",
    tag: "ANAMORPHIC_DOLLY_ZOOM",
    title: "Cinematic Color Pipelines",
    description: "ACES color space workflows, custom LUT generation, and anamorphic 2.35:1 video grading.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-4",
    techStack: ["DaVinci Resolve Studio", "RED RAW", "AE"],
    specs: {
      camera: "Anamorphic 2.35:1 dolly zoom",
      lighting: "Low-key teal/orange split",
      kinematics: "Cubic-bezier(0.65, 0, 0.35, 1)",
    },
  },
  {
    id: "additive-manufacturing-13",
    slug: "additive-manufacturing-13",
    category: "SYSTEM_13 // ADDITIVE MANUFACTURING",
    tag: "ISOMETRIC_UV_PRINT",
    title: "3D Additive Print & Prototyping",
    description: "Layer-by-layer 3D printer stepped reveals, isometric perspectives, and UV grid emission lighting.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-3",
    techStack: ["Fusion 360", "Three.js", "Cura"],
    specs: {
      camera: "Isometric 45° angle",
      lighting: "UV grid emission light",
      kinematics: "Layer staircase stepped reveal",
    },
  },
  {
    id: "interactive-engine-14",
    slug: "interactive-engine-14",
    category: "SYSTEM_14 // INTERACTIVE ENGINE",
    tag: "UNBOUND_RGB_COLLISION",
    title: "Custom CLI & Media Tools",
    description: "FFmpeg batch scripting, automated export pipelines, and high-performance Rust utilities.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-3",
    techStack: ["Rust", "FFmpeg", "Node.js"],
    specs: {
      camera: "First-person free-look node",
      lighting: "Chaotic RGB collision light",
      kinematics: "Unbound mass & gravity calculations",
    },
  },
];

export const ANONYMIZED_WORK = portfolioItems;
