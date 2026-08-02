"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WeatherCanvas from "@/components/ui/WeatherCanvas";
import { playClickSound } from "@/utils/audio";

const devProjects = [
  {
    title: "Ollama VS Code Extension",
    tech: "TypeScript / VS Code API",
    description: "A custom editor extension that connects workspace files directly to local Ollama models.",
    link: "https://github.com/DR-WEEK/ollama-vscode",
    bullets: [
      "Runs fully offline inside the editor.",
      "Injects context from active files.",
      "Custom routing for coding prompts."
    ]
  },
  {
    title: "Vue.js SaaS Dashboard",
    tech: "Vue.js / Vite / Tailwind",
    description: "A responsive admin panel built to manage client tasks and track visual production metrics.",
    link: "https://github.com/DR-WEEK/vue-saas-dashboard",
    bullets: [
      "Uses reactive Pinia stores.",
      "Loads in under 1 second on mobile.",
      "Pixel-perfect matching of Figma layout."
    ]
  },
  {
    title: "Bash CLI Setup Assistant",
    tech: "Bash / Shell Scripting",
    description: "A custom command-line assistant script that automates system diagnostics and developer setups.",
    link: "https://github.com/DR-WEEK/bash-setup-assistant",
    bullets: [
      "Zero-dependency automation utility.",
      "Auto-verifies package dependency lists.",
      "Interactive shell choices and tags."
    ]
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
      className={`relative w-full min-h-[110vh] border-t border-border bg-bg overflow-hidden py-24 px-6 md:px-12 lg:px-24 transition-colors duration-200 select-none ${
        lightningFlash ? "bg-surface/90" : "bg-bg"
      }`}
    >
      {/* Dynamic Rain Atmosphere */}
      <WeatherCanvas mode="rain" />

      {/* Scroll-Driven Glowing Light Trail */}
      <motion.div
        style={{ top: glowY }}
        className="absolute left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none z-0"
      />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-mono text-accent rounded-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              WEBSITE & APP DEVELOPMENT
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-text-primary">
              Custom Software & Web Engineering
            </h2>
            <p className="font-mono text-sm text-text-secondary">
              * Fast, modern, custom websites and mobile web applications built for business growth.
            </p>
          </div>

          <div className="font-mono text-xs text-text-secondary border border-border bg-surface px-3 py-1 mt-4 md:mt-0 rounded-md">
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
              className="border-2 border-border bg-surface p-6 flex flex-col justify-between hover:border-accent transition-all shadow-2xl backdrop-blur-md group rounded-md"
              data-cursor-hover
            >
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 uppercase tracking-widest inline-block rounded-md font-bold">
                  {project.tech}
                </span>
                <h3 className="text-xl font-bold font-mono text-zinc-900 dark:text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-zinc-800 dark:text-zinc-200 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Monospace Bullet Points for Quick Scanning */}
                <ul className="space-y-1.5 font-mono text-[10px] text-text-secondary border-t border-border/50 pt-3">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-1.5">
                      <span className="text-accent font-bold select-none">-</span>
                      <span className="text-zinc-800 dark:text-zinc-200">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-border flex justify-end items-center font-mono text-xs">
                <span className="text-accent font-black uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  View Code →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
