"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ANONYMIZED_WORK, PortfolioItem } from "@/config/portfolio";
import WeatherCanvas from "@/components/ui/WeatherCanvas";
import { playClickSound } from "@/utils/audio";

export default function WorkSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const featuredItems = ANONYMIZED_WORK.slice(0, 4);

  const handleCardClick = (item: PortfolioItem) => {
    playClickSound();
    setSelectedItem(item);
  };

  return (
    <section id="work" className="relative w-full bg-black text-white py-12 px-4 md:px-8 border-t border-zinc-800 overflow-hidden select-none">
      <WeatherCanvas mode="sunbeam" />
      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-4">
          <div>
            <span className="font-mono text-[10px] text-amber-400 tracking-widest uppercase">
              ACT_II // DOMAIN_DISCIPLINE_RECORDS
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-0.5">
              THE_ARCHIVE_MATRIX
            </h2>
          </div>
          <p className="font-mono text-[11px] text-zinc-500 max-w-md mt-2 md:mt-0">
            [ ENTER THE VAULT. BRAND IDENTITIES ARE STRIPPED TO ISOLATE RAW CRAFT & KINEMATICS ACROSS 14 DOMAINS. ]
          </p>
        </div>

        {/* Compact 4-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredItems.map((item: PortfolioItem, idx: number) => (
            <motion.div
              key={item.id}
              onClick={() => handleCardClick(item)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-zinc-800 bg-zinc-950 p-3 flex flex-col justify-between hover:border-amber-500/60 transition-all duration-300 cursor-pointer select-none [contain:layout_style_paint]"
              data-cursor-hover
            >
              {/* Sticker Tag */}
              <div className="absolute top-2 right-2 z-20 font-mono text-[9px] bg-black/80 text-amber-400 border border-zinc-800 px-1.5 py-0.5 uppercase pointer-events-none">
                [ #{String(idx + 1).padStart(2, "0")} ]
              </div>

              {/* Image Container */}
              <div className="relative w-full h-44 bg-zinc-900 border border-zinc-900 overflow-hidden mb-2.5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-center grayscale filter contrast-125 sepia-[0.2] group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2 py-0.5 font-mono text-[9px] text-amber-400 border border-zinc-700 uppercase">
                  {item.tag}
                </div>
              </div>

              {/* Metadata */}
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-zinc-500 tracking-widest block uppercase">
                  {item.category}
                </span>
                <h3 className="text-base font-bold uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors truncate">
                  {item.title}
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
                  <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-zinc-900 border border-zinc-800 p-3 font-mono text-[11px]">
                  <div>
                    <span className="text-amber-400 font-bold block">// CAMERA:</span>
                    <p className="text-zinc-300">{selectedItem.specs.camera}</p>
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold block">// LIGHTING:</span>
                    <p className="text-zinc-300">{selectedItem.specs.lighting}</p>
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold block">// KINEMATICS:</span>
                    <p className="text-zinc-300">{selectedItem.specs.kinematics}</p>
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
