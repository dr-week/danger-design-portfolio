"use client";

const HYBRID_STACK = [
  // Engineering & Architecture
  { name: "React.js", url: "https://cdn.simpleicons.org/react/white" },
  { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Vue.js", url: "https://cdn.simpleicons.org/vuedotjs/white" },
  { name: "Python", url: "https://cdn.simpleicons.org/python/white" },
  { name: "AWS", url: "https://cdn.simpleicons.org/amazonwebservices/white" },
  { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/white" },
  { name: "MySQL", url: "https://cdn.simpleicons.org/mysql/white" },
  // CGI & Motion Direction
  { name: "Blender", url: "https://cdn.simpleicons.org/blender/white" },
  { name: "Unreal Engine", url: "https://cdn.simpleicons.org/unrealengine/white" },
  { name: "After Effects", url: "https://cdn.simpleicons.org/adobeaftereffects/white" },
  { name: "Photoshop", url: "https://cdn.simpleicons.org/adobephotoshop/white" },
  { name: "Illustrator", url: "https://cdn.simpleicons.org/adobeillustrator/white" },
];

export default function BrandLogos() {
  return (
    <div className="py-16 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 text-center mb-10">
          // Hybrid Arsenal — Creative Engineering & CGI Stack
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          {HYBRID_STACK.map((tech) => (
            <img
              key={tech.name}
              src={tech.url}
              alt={tech.name}
              title={tech.name}
              className="w-6 md:w-7 h-6 md:h-7 opacity-40 hover:opacity-100 transition-opacity duration-300 select-none"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
