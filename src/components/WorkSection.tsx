"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ANONYMIZED_WORK, PortfolioItem } from "@/config/portfolio";
import WeatherCanvas from "@/components/ui/WeatherCanvas";

export default function WorkSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="work" className="relative w-full bg-black text-white py-24 px-6 md:px-12 border-t border-zinc-800 overflow-hidden">
      <WeatherCanvas mode="sunbeam" />
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">
              // ARCHIVAL_OUTPUT
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-1">
              SELECTED_WORKS
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 max-w-sm mt-4 md:mt-0">
            [ CLASSIFIED BY TECHNICAL DISCIPLINE. CLICK CARDS FOR SYSTEM ARCHITECTURE BREAKDOWN. ]
          </p>
        </div>

        {/* Dynamic Graphic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ANONYMIZED_WORK.map((item: PortfolioItem) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-zinc-800 bg-zinc-950 p-4 space-y-4 flex flex-col justify-between hover:border-amber-500/50 transition-colors cursor-pointer select-none"
              data-cursor-hover
            >
              {/* Image Container with Native Aspect Ratio */}
              <div className={`relative w-full ${item.aspectRatio} overflow-hidden bg-zinc-900 border border-zinc-800/80`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                />
                
                {/* Tech Badge Overlay */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-zinc-700 font-mono text-[10px] text-amber-400 uppercase tracking-wider">
                  {item.tag}
                </div>

                <div className="absolute bottom-3 right-3 bg-amber-400 text-black font-mono text-[9px] font-bold px-2 py-0.5 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  [ VIEW SYSTEM ]
                </div>
              </div>

              {/* Metadata */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[11px] text-zinc-500 tracking-widest block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-900 font-mono text-[10px] text-zinc-500">
                {item.techStack.map((tech) => (
                  <span key={tech} className="bg-zinc-900 px-2 py-0.5 border border-zinc-800">
                    #{tech}
                  </span>
                ))}
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
              className="relative w-full max-w-3xl bg-zinc-950 border-2 border-amber-500/80 p-6 md:p-8 space-y-6 shadow-2xl overflow-y-auto max-h-[90vh]"
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
                  onClick={() => setSelectedItem(null)}
                  className="font-mono text-xs text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-900 px-3 py-1 uppercase"
                >
                  [ CLOSE ]
                </button>
              </div>

              {/* Modal Media Preview */}
              <div className="relative w-full h-64 md:h-80 bg-zinc-900 border border-zinc-800 overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Technical Description & Breakdown */}
              <div className="space-y-4 font-mono text-xs text-zinc-300">
                <p className="text-sm leading-relaxed text-zinc-200">
                  {selectedItem.description}
                </p>
                <div className="bg-zinc-900 border border-zinc-800 p-4 space-y-2">
                  <p className="text-amber-400 font-bold">// DISCIPLINE_SPECIFICATIONS:</p>
                  <ul className="list-disc list-inside text-zinc-400 space-y-1">
                    <li>Production-ready pipeline with zero layout shift</li>
                    <li>High-contrast brutalist UI grid architecture</li>
                    <li>Modular asset structure optimized for low latency rendering</li>
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900">
                {selectedItem.techStack.map((tech) => (
                  <span key={tech} className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 font-mono text-xs uppercase">
                    #{tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
