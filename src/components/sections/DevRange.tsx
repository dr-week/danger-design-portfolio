"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WeatherCanvas from "@/components/ui/WeatherCanvas";
import { playClickSound } from "@/utils/audio";

const devProjects = [
  {
    title: "blackbox-Agent-Orchestrator",
    tech: "Rust / Systems Architecture",
    description: "A custom LLM agent orchestrator. Built to force flaky AI models into strict, versioned execution paths.",
    link: "https://github.com/DR-WEEK/blackbox-Agent-Orchestrator",
    note: "* Built core engine logic in a weekend."
  },
  {
    title: "GAME_OF_DATE",
    tech: "React / State Management",
    description: "A full-stack dating-sim training tool with complex state management and branching narrative logic.",
    link: "https://github.com/DR-WEEK/GAME_OF_DATE",
    note: "* Scrappy, but state logic is bulletproof."
  },
  {
    title: "REP-COUNTER-BRO",
    tech: "JavaScript / Browser Vision API",
    description: "A lightweight, browser-based computer vision tool to track reps in real-time without server latency.",
    link: "https://github.com/DR-WEEK/REP-COUNTER-BRO",
    note: "* Real-time camera tracking in DOM."
  }
];

export default function DevRange() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightningFlash, setLightningFlash] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Glowing trail position following scroll
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Stochastic Lightning Flashes
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setLightningFlash(true);
        setTimeout(() => setLightningFlash(false), 120);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="dev" 
      className={`relative w-full min-h-[110vh] border-t border-zinc-900 bg-black overflow-hidden py-24 px-6 md:px-12 lg:px-24 transition-colors duration-200 select-none ${
        lightningFlash ? "bg-zinc-900/90" : "bg-black"
      }`}
    >
      {/* Dynamic Rain Atmosphere */}
      <WeatherCanvas mode="rain" />

      {/* Scroll-Driven Glowing Light Trail */}
      <motion.div
        style={{ top: glowY }}
        className="absolute left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none z-0"
      />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              WEBSITE & APP DEVELOPMENT
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Custom Software & Web Engineering
            </h2>
            <p className="font-caveat text-xl text-zinc-300">
              * Fast, modern, custom websites and mobile web applications built for business growth.
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-500 border border-zinc-800 px-3 py-1 mt-4 md:mt-0">
            [ TECH STACK: REACT / RUST / NEXT.JS ]
          </div>
        </div>

        {/* GitHub Project Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {devProjects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="border-2 border-zinc-800 bg-zinc-950/90 p-6 flex flex-col justify-between hover:border-sky-400 transition-all shadow-2xl backdrop-blur-md group"
              data-cursor-hover
            >
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2 py-0.5 uppercase tracking-widest inline-block">
                  {project.tech}
                </span>
                <h3 className="text-xl font-bold font-mono text-white group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900 flex justify-between items-center font-mono text-xs">
                <span className="font-caveat text-lg text-zinc-300">
                  {project.note}
                </span>
                <span className="text-sky-400 font-bold uppercase group-hover:translate-x-1 transition-transform">
                  GitHub →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
