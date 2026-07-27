"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ANONYMIZED_WORK, PortfolioItem } from "@/config/portfolio";
import WeatherCanvas from "@/components/ui/WeatherCanvas";

export default function WorkSection() {
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
            [ CLASSIFIED BY TECHNICAL DISCIPLINE. BRAND NAMES STRIPPED FOR PURE GRAPHIC FOCUS. ]
          </p>
        </div>

        {/* Dynamic Graphic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ANONYMIZED_WORK.map((item: PortfolioItem) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-zinc-800 bg-zinc-950 p-4 space-y-4 flex flex-col justify-between hover:border-amber-500/50 transition-colors"
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
    </section>
  );
}
