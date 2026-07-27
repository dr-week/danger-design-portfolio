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

  const handleCardClick = (item: PortfolioItem) => {
    playClickSound();
    setSelectedItem(item);
  };

  return (
    <section id="work" className="relative w-full bg-black text-white py-20 px-4 md:px-8 border-t border-zinc-800 overflow-hidden">
      <WeatherCanvas mode="sunbeam" />
      <div className="max-w-[1600px] mx-auto space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">
              // ARCHIVAL_OUTPUT // BENTO_BOX_MATRIX
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-1">
              SELECTED_WORKS
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 max-w-md mt-4 md:mt-0">
            [ COMPACT DOM BENTO GRID. BRAND NAMES STRIPPED FOR PURE GRAPHIC AND KINEMATIC FOCUS. ]
          </p>
        </div>

        {/* Dense Bento Box Grid (6 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {ANONYMIZED_WORK.map((item: PortfolioItem, idx: number) => (
            <motion.div
              key={item.id}
              onClick={() => handleCardClick(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative border border-zinc-800 bg-zinc-950 p-3.5 flex flex-col justify-between hover:border-amber-500/60 transition-all duration-300 cursor-pointer select-none ${
                item.gridSpan || "col-span-1 md:col-span-2 lg:col-span-3"
              }`}
              data-cursor-hover
            >
              {/* Absolute Brutalist UI Sticker Tag */}
              <div className="absolute top-2 right-2 z-20 font-mono text-[9px] bg-black/80 text-amber-400 border border-zinc-800 px-2 py-0.5 uppercase tracking-widest pointer-events-none">
                [ #{String(idx + 1).padStart(2, "0")} // ACTIVE ]
              </div>

              {/* Image Container */}
              <div className={`relative w-full ${item.aspectRatio} overflow-hidden bg-zinc-900 border border-zinc-900 mb-3`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                />
                
                {/* Tech Badge Overlay */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-zinc-700 font-mono text-[10px] text-amber-400 uppercase tracking-wider">
                  {item.tag}
                </div>

                <div className="absolute bottom-3 right-3 bg-amber-400 text-black font-mono text-[9px] font-bold px-2 py-0.5 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  [ DEEP DIVE ]
                </div>
              </div>

              {/* Metadata */}
              <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-zinc-500 tracking-widest block uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[11px] text-zinc-400 leading-relaxed mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Tech Stack Tags & Simple Icons Vector CDN Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-zinc-900 font-mono text-[9px] text-zinc-400">
                  {item.techStack.map((tech) => (
                    <span key={tech} className="bg-zinc-900 px-2 py-0.5 border border-zinc-800/80">
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive System Breakdown Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-zinc-950 border-2 border-amber-500/80 p-6 md:p-8 space-y-6 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start border-b border-zinc-800 pb-4">
                <div>
                  <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-white mt-1">
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

              {/* Modal Media Preview */}
              <div className="relative w-full h-64 md:h-96 bg-zinc-900 border border-zinc-800 overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Technical Specifications */}
              {selectedItem.specs && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-zinc-900 border border-zinc-800 p-4 font-mono text-xs">
                  <div>
                    <span className="text-amber-400 font-bold block">// CAMERA_NODE:</span>
                    <p className="text-zinc-300 mt-0.5">{selectedItem.specs.camera}</p>
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold block">// LIGHTING_MODEL:</span>
                    <p className="text-zinc-300 mt-0.5">{selectedItem.specs.lighting}</p>
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold block">// KINEMATICS:</span>
                    <p className="text-zinc-300 mt-0.5">{selectedItem.specs.kinematics}</p>
                  </div>
                </div>
              )}

              {/* Technical Description & Breakdown */}
              <div className="space-y-4 font-mono text-xs text-zinc-300">
                <p className="text-sm leading-relaxed text-zinc-200">
                  {selectedItem.description}
                </p>
              </div>

              {/* Actions Footer */}
              <div className="flex flex-wrap justify-between items-center gap-4 pt-4 border-t border-zinc-900">
                <div className="flex flex-wrap gap-2">
                  {selectedItem.techStack.map((tech) => (
                    <span key={tech} className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 font-mono text-xs uppercase">
                      #{tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${selectedItem.slug}`}
                  onClick={playClickSound}
                  className="px-4 py-2 bg-amber-400 text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
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
