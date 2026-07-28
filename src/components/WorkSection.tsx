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

  const domainConfig = {
    systems: {
      title: "SYSTEMS_&_LOGIC",
      subtitle: "[ SAAS, INTERACTIVE ENGINES, ADDITIVE MANUFACTURING ]",
      color: "text-sky-400",
      borderHover: "hover:border-sky-500/60",
      systems: ["SYSTEM_03", "SYSTEM_04", "SYSTEM_07", "SYSTEM_13", "SYSTEM_14"]
    },
    spatial: {
      title: "SPATIAL_&_KINEMATICS",
      subtitle: "[ ARCHITECTURE, TOPOGRAPHY, AUTOMOTIVE ]",
      color: "text-amber-400",
      borderHover: "hover:border-amber-500/60",
      systems: ["SYSTEM_01", "SYSTEM_02", "SYSTEM_05", "SYSTEM_08", "SYSTEM_09"]
    },
    culture: {
      title: "CULTURE_&_CINEMA",
      subtitle: "[ GASTRONOMY, APPAREL, EPISODIC, ANIMATRONICS ]",
      color: "text-purple-400",
      borderHover: "hover:border-purple-500/60",
      systems: ["SYSTEM_06", "SYSTEM_10", "SYSTEM_11", "SYSTEM_12"]
    }
  };

  const config = domainId ? domainConfig[domainId] : {
    title: "OUR_SERVICES_&_SELECTED_WORK",
    subtitle: "[ FEATURED PORTFOLIO & CLIENT CASE STUDIES ]",
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
    <section className="relative w-full bg-black text-white py-24 px-4 md:px-8 overflow-hidden select-none min-h-screen">
      <GPGPUWeather />
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-screen pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-6">
          <div>
            <Link href="/" className="font-mono text-xs text-zinc-500 hover:text-white transition-colors mb-4 inline-block uppercase tracking-widest border border-zinc-800 px-3 py-1">
              ← RETURN TO TERMINAL
            </Link>
            <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tight mt-4 ${config.color}`}>
              {config.title}
            </h2>
          </div>
          <p className="font-mono text-[11px] text-zinc-500 max-w-md mt-4 md:mt-0 uppercase tracking-widest text-right">
            {config.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredItems.map((item: PortfolioItem, idx: number) => (
            <motion.div
              key={item.id}
              onClick={() => handleCardClick(item)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative border border-zinc-800 bg-zinc-950 p-3 flex flex-col justify-between transition-all duration-300 cursor-pointer select-none [contain:layout_style_paint] ${config.borderHover}`}
              data-cursor-hover
            >
              {/* Sticker Tag */}
              <div className={`absolute top-2 right-2 z-20 font-mono text-[9px] bg-black/80 border border-zinc-800 px-1.5 py-0.5 uppercase pointer-events-none ${config.color}`}>
                [ #{String(idx + 1).padStart(2, "0")} ]
              </div>

              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/50 border-b border-zinc-800">
                <GLSLImageReveal imageUrl={item.image} />
                <div className={`absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2 py-0.5 font-mono text-[9px] border border-zinc-700 uppercase ${config.color} z-20`}>
                  <span className="block group-hover:hidden">[████]</span>
                  <span className="hidden group-hover:block">{item.tag}</span>
                </div>
              </div>

              {/* Metadata */}
              <div className="mt-4 flex-1 flex flex-col justify-end">
                <span className="font-mono text-[9px] text-zinc-500 tracking-widest block uppercase">
                  <span className="block group-hover:hidden">[██████]</span>
                  <span className="hidden group-hover:block">{item.category}</span>
                </span>
                <h3 className={`text-base font-bold uppercase tracking-tight text-white transition-colors truncate ${config.color.replace('text-', 'group-hover:text-')}`}>
                  <span className="block group-hover:hidden">[████████████]</span>
                  <span className="hidden group-hover:block">{item.title}</span>
                </h3>
              </div>

              <div className="flex flex-wrap gap-1 pt-2.5 mt-2 border-t border-zinc-900 font-mono text-[9px] text-zinc-400">
                {item.techStack.map((tech) => (
                  <span key={tech} className="bg-zinc-900 px-1.5 py-0.5 border border-zinc-800/80">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-zinc-950 border-2 border-amber-500/80 p-6 space-y-5 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-start border-b border-zinc-800 pb-3">
                <div>
                  <span className={`font-mono text-xs uppercase tracking-widest ${config.color}`}>
                    {selectedItem.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black uppercase text-white mt-0.5">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    playClickSound();
                    setSelectedItem(null);
                  }}
                  className="font-mono text-xs text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-900 px-3 py-1 uppercase"
                >
                  [ CLOSE ]
                </button>
              </div>

              <div className="relative w-full h-56 md:h-72 bg-zinc-900 border border-zinc-800 overflow-hidden">
                <Image src={selectedItem.image} alt={selectedItem.title} fill className="object-cover" />
              </div>

              {selectedItem.specs && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-zinc-900 border border-zinc-800 p-3 font-mono text-[11px] group">
                  <div>
                    <span className={`font-bold block ${config.color}`}>// CAMERA:</span>
                    <p className="text-zinc-300">
                      <span className="block group-hover:hidden">[████████]</span>
                      <span className="hidden group-hover:block">{selectedItem.specs.camera}</span>
                    </p>
                  </div>
                  <div>
                    <span className={`font-bold block ${config.color}`}>// LIGHTING:</span>
                    <p className="text-zinc-300">
                      <span className="block group-hover:hidden">[██████]</span>
                      <span className="hidden group-hover:block">{selectedItem.specs.lighting}</span>
                    </p>
                  </div>
                  <div>
                    <span className={`font-bold block ${config.color}`}>// KINEMATICS:</span>
                    <p className="text-zinc-300">
                      <span className="block group-hover:hidden">[██████████]</span>
                      <span className="hidden group-hover:block">{selectedItem.specs.kinematics}</span>
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center pt-3 border-t border-zinc-900">
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {selectedItem.techStack.map((tech) => (
                    <span key={tech} className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 uppercase">
                      #{tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${selectedItem.slug}`}
                  onClick={playClickSound}
                  className="px-3 py-1.5 bg-amber-400 text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
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
