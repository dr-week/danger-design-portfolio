"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ANONYMIZED_WORK } from "@/config/portfolio";
import { playClickSound } from "@/utils/audio";

export default function HorizontalScrollSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const horizontalItems = ANONYMIZED_WORK.slice(4, 10);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black select-none">
      {/* Sticky Fullscreen Container */}
      <div 
        onMouseMove={handleMouseMove}
        className="sticky top-0 flex h-screen items-center overflow-hidden border-t border-b border-zinc-900 relative"
      >
        {/* Interactive Cursor Lens Reveal Box Follower */}
        <motion.div
          animate={{
            x: mousePos.x - 90,
            y: mousePos.y - 90,
          }}
          transition={{ type: "spring", mass: 0.2, stiffness: 350, damping: 25 }}
          className="pointer-events-none absolute z-20 w-44 h-44 border-2 border-amber-400 bg-amber-500/10 rounded-lg shadow-2xl backdrop-invert backdrop-hue-rotate-90 hidden md:block"
        >
          <div className="absolute top-1 left-1 font-mono text-[8px] text-amber-400 bg-black/90 px-1 uppercase font-bold">
            [ LENS_REVEAL_BOX ]
          </div>
        </motion.div>

        {/* Track Label Badge */}
        <div className="absolute top-8 left-8 z-30 pointer-events-none flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span className="font-mono text-xs text-amber-400 bg-black/90 px-3 py-1 border border-zinc-800 uppercase tracking-widest font-bold">
            // ENVIRONMENT_04 // HORIZONTAL_PARALLAX (CURSOR_LENS_REVEAL)
          </span>
        </div>

        {/* Translating Horizontal Cards Track */}
        <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24 pt-16">
          {horizontalItems.map((item, idx) => (
            <div
              key={item.id}
              className="relative w-[340px] sm:w-[420px] md:w-[480px] h-[520px] sm:h-[580px] bg-zinc-950 border-2 border-zinc-800 p-5 flex flex-col justify-between shrink-0 hover:border-amber-500/80 transition-colors group"
            >
              {/* Image Box */}
              <div className="relative w-full h-64 bg-zinc-900 border border-zinc-900 overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="480px"
                  className="object-cover filter contrast-110 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 font-mono text-[10px] text-amber-400 border border-zinc-700 uppercase">
                  {item.tag}
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[10px] text-zinc-400 bg-black/80 px-2 py-0.5 border border-zinc-800 uppercase">
                  [ TRACK #{String(idx + 5).padStart(2, "0")} ]
                </div>
              </div>

              {/* Text Specs */}
              <div className="space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 leading-relaxed mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-zinc-900">
                  <div className="flex gap-1.5 font-mono text-[9px] text-zinc-400">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="bg-zinc-900 px-2 py-0.5 border border-zinc-800">
                        #{tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${item.slug}`}
                    onClick={playClickSound}
                    className="font-mono text-[10px] text-black bg-amber-400 hover:bg-white px-2.5 py-1 font-bold uppercase tracking-widest transition-colors"
                  >
                    SPECS →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
