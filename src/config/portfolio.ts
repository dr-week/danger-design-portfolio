export interface PortfolioItem {
  id: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  image: string; // Resolves directly from /public
  aspectRatio: "aspect-square" | "aspect-[16/9]" | "aspect-[9/16]";
  techStack: string[];
}

export const ANONYMIZED_WORK: PortfolioItem[] = [
  {
    id: "cgi-motion-01",
    category: "SYSTEM_01 // MOTION & CGI",
    tag: "3D_DYNAMIC_RENDER",
    title: "Spatial Motion & Visual Direction",
    description: "High-frequency CGI promotional assets and volumetric motion choreography.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-[16/9]",
    techStack: ["Blender", "After Effects", "Unreal Engine"]
  },
  {
    id: "spatial-arch-02",
    category: "SYSTEM_02 // SPATIAL CGI",
    tag: "ARCHITECTURAL_VISUALIZATION",
    title: "Coastal Spatial Architecture",
    description: "Photorealistic lighting simulations, drone integration, and 3D architectural renders.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-[9/16]",
    techStack: ["3DS Max", "DaVinci Resolve", "CGI Pipeline"]
  },
  {
    id: "brand-identity-03",
    category: "SYSTEM_03 // BRAND SYSTEMS",
    tag: "VECTOR_GRAPHICS_IDENTITY",
    title: "E-Commerce & Craft Brand Systems",
    description: "Modular visual identity grids, packaging design, and digital storefront systems.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-square",
    techStack: ["Illustrator", "Figma", "Next.js"]
  },
  {
    id: "saas-uiux-04",
    category: "SYSTEM_04 // UI/UX ENGINEERING",
    tag: "WEB3_SAAS_INTERFACE",
    title: "Fintech & SaaS Application Suites",
    description: "Zero-weight brutalist dashboard UI, component libraries, and spatial interactions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-[16/9]",
    techStack: ["React", "TypeScript", "Tailwind CSS"]
  }
];
