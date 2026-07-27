"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { playClickSound } from "@/utils/audio";

export default function AutomotiveSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.5], ["32px", "0px"]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[110vh] bg-black py-20 px-4 md:px-8 border-t border-zinc-900 overflow-hidden flex items-center justify-center select-none">
      {/* Metallic Specular Track Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black opacity-80 pointer-events-none" />

      <motion.div
        style={{ scale, borderRadius }}
        className="relative w-full max-w-7xl h-[78vh] bg-zinc-950 overflow-hidden shadow-2xl border-2 border-zinc-800 group"
      >
        <Image
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=80"
          alt="Automotive Motion Dynamics"
          fill
          className="object-cover object-center filter contrast-125 group-hover:scale-105 transition-transform duration-700"
          priority
        />

        {/* Metallic Dark Vignette & Motion Flare Lines */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px)] bg-[size:4rem_100%] opacity-15 pointer-events-none z-10" />

        {/* HUD Overlay Content */}
        <div className="absolute bottom-10 left-8 right-8 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-black/90 backdrop-blur-md px-3 py-1 border border-amber-500/40 font-mono text-xs text-amber-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              ACT_III // STAGE_A // AUTOMOTIVE_KINEMATICS
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              High-Velocity Motion & Specular Drag
            </h2>
            <p className="font-mono text-xs md:text-sm text-zinc-300 max-w-2xl leading-relaxed">
              Low-angle tracking cameras, exponential ease-out entries, and metallic specular highlights engineered for high-speed reveals.
            </p>
          </div>

          <Link
            href="/work/automotive-05"
            onClick={playClickSound}
            className="pointer-events-auto self-start md:self-auto px-5 py-2.5 bg-amber-400 text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-2xl"
          >
            Explore Automotive System →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
