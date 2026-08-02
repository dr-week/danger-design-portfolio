"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ANONYMIZED_WORK, PortfolioItem } from "@/config/portfolio";
import { playClickSound } from "@/utils/audio";
import dynamic from "next/dynamic";

const GPGPUWeather = dynamic(() => import('@/components/ui/GPGPUWeather'), { ssr: false });
const GLSLImageReveal = dynamic(() => import('@/components/ui/GLSLImageReveal'), { ssr: false });

export default function WorkSection({ domainId }: { domainId?: "systems" | "spatial" | "culture" }) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const domainConfig: Record<string, { title: string; subtitle: string; color: string; borderHover: string; systems: string[] }> = {
    spatial: {
      title: "SPATIAL ARCHITECTURE & CGI PIPELINES",
      subtitle: "[ PHOTOGRAMMETRY & VOLUMETRIC RENDER ENGINE ]",
      color: "text-amber-400",
      borderHover: "hover:border-amber-500/60",
      systems: ["SYSTEM_02", "SYSTEM_08", "SYSTEM_09", "SYSTEM_13"]
    },
    systems: {
      title: "SYSTEMS & BRAND ENGINEERING",
      subtitle: "[ INTERFACE DYNAMICS & RUST EXECUTIVES ]",
      color: "text-amber-400",
      borderHover: "hover:border-amber-500/60",
      systems: ["SYSTEM_03", "SYSTEM_04", "SYSTEM_07", "SYSTEM_14"]
    },
    culture: {
      title: "DIGITAL CULTURE & CINEMATOGRAPHY",
      subtitle: "[ MOTION PATTERNS & THEATRICAL PHYSICS ]",
      color: "text-amber-400",
      borderHover: "hover:border-amber-500/60",
      systems: ["SYSTEM_06", "SYSTEM_10", "SYSTEM_11", "SYSTEM_12"]
    }
  };

  const config = domainId ? domainConfig[domainId] : {
    title: "ENGINEERING & TECHNICAL MEDIA PIPELINES",
    subtitle: "[ SELECTED CUSTOM WORK & CODE REPOSITORIES ]",
    color: "text-amber-400",
    borderHover: "hover:border-amber-500/60",
    systems: []
  };

  const featuredItems = domainId 
    ? ANONYMIZED_WORK.filter(w => config.systems.some(sys => w.category.includes(sys)))
    : ANONYMIZED_WORK;

  const handleCardClick = (item: PortfolioItem) => {
    playClickSound();
    setSelectedItem(item);
  };

  return (
    <section className="relative w-full bg-bg text-text-primary py-28 md:py-36 px-4 md:px-8 overflow-hidden select-none min-h-screen">
      <GPGPUWeather />
      <div 
        suppressHydrationWarning
        className="absolute inset-0 z-0 opacity-10 mix-blend-screen pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6">
          <div>
            <Link href="/" className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors mb-4 inline-block uppercase tracking-widest border border-border bg-surface px-3 py-1 rounded-md">
              ← RETURN TO TERMINAL
            </Link>
            <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tight mt-4 ${config.color}`}>
              {config.title}
            </h2>
          </div>
          <p className="font-mono text-xs md:text-sm text-zinc-300 max-w-md mt-4 md:mt-0 uppercase tracking-widest text-left md:text-right">
            {config.subtitle}
          </p>
        </div>

        {/* Bento Grid (Masonry Layout) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {featuredItems.map((item: PortfolioItem, idx: number) => (
            <motion.div
              key={item.id}
              onClick={() => handleCardClick(item)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`break-inside-avoid mb-4 group relative border border-border bg-surface p-4 flex flex-col justify-between transition-all duration-300 cursor-pointer select-none [contain:layout_style_paint] hover:-translate-y-1 hover:shadow-lg ${config.borderHover}`}
              data-cursor-hover
            >
              {/* Sticker Tag */}
              <div className={`absolute top-2 right-2 z-20 font-mono text-[11px] bg-surface/90 border border-border px-1.5 py-0.5 uppercase pointer-events-none ${config.color}`}>
                [ #{String(idx + 1).padStart(2, "0")} ]
              </div>

              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface border-b border-border">
                <GLSLImageReveal imageUrl={item.image} />
                <div className={`absolute top-2 left-2 bg-black dark:bg-white text-white dark:text-black px-2.5 py-1 font-mono text-[11px] border border-border uppercase font-black z-20`}>
                  {item.tag}
                </div>
              </div>

              {/* Metadata */}
              <div className="mt-4 flex-1 flex flex-col justify-end space-y-1">
                <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300 tracking-widest block uppercase font-bold">
                  {item.category}
                </span>
                <h3 className={`text-base font-bold uppercase tracking-tight text-text-primary transition-colors ${config.color.replace('text-', 'group-hover:text-')}`}>
                  {item.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1 pt-2.5 mt-2 border-t border-border font-mono text-[11px] text-zinc-700 dark:text-zinc-300">
                {item.techStack.map((tech) => (
                  <span key={tech} className="bg-surface px-1.5 py-0.5 border border-border/80 rounded font-bold">
                    #{tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* System Breakdown Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-surface border-2 border-accent p-6 space-y-5 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-start border-b border-border pb-3">
                <div>
                  <span className={`font-mono text-xs uppercase tracking-widest ${config.color}`}>
                    {selectedItem.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black uppercase text-text-primary mt-0.5">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    playClickSound();
                    setSelectedItem(null);
                  }}
                  className="font-mono text-xs text-text-secondary hover:text-text-primary border border-border bg-surface px-3 py-1 uppercase"
                >
                  [ CLOSE ]
                </button>
              </div>

              <div className="relative w-full h-56 md:h-72 bg-bg border border-border overflow-hidden">
                <Image src={selectedItem.image} alt={selectedItem.title} fill className="object-cover" />
              </div>

              {selectedItem.specs && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-bg border border-border p-3 font-mono text-[11px]">
                  <div>
                    <span className={`font-bold block ${config.color}`}>// CAMERA:</span>
                    <p className="text-text-primary">
                      {selectedItem.specs.camera}
                    </p>
                  </div>
                  <div>
                    <span className={`font-bold block ${config.color}`}>// LIGHTING:</span>
                    <p className="text-text-primary">
                      {selectedItem.specs.lighting}
                    </p>
                  </div>
                  <div>
                    <span className={`font-bold block ${config.color}`}>// KINEMATICS:</span>
                    <p className="text-text-primary">
                      {selectedItem.specs.kinematics}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center pt-3 border-t border-border">
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {selectedItem.techStack.map((tech) => (
                    <span key={tech} className="bg-accent/10 text-accent border border-accent/30 px-2 py-0.5 uppercase">
                      #{tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${selectedItem.slug}`}
                  onClick={playClickSound}
                  className="px-3 py-1.5 bg-accent text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-surface border border-accent transition-colors"
                >
                  Full Case Study →
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
