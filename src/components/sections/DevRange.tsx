"use client";
import { motion } from "framer-motion";

const devProjects = [
  {
    title: "blackbox-Agent-Orchestrator",
    tech: "Rust / Systems",
    description: "A custom LLM agent orchestrator. Built to force flaky AI models into strict, versioned execution paths.",
    link: "https://github.com/dr-week/blackbox-Agent-Orchestrator",
    note: "Built the core logic in a weekend."
  },
  {
    title: "GAME_OF_DATE",
    tech: "React / Vite / Backend",
    description: "A full-stack dating-sim training tool with complex state management and branching narrative logic.",
    link: "https://github.com/dr-week/GAME_OF_DATE",
    note: "Scrappy, but the logic is bulletproof."
  },
  {
    title: "REP-COUNTER-BRO",
    tech: "JavaScript / Browser API",
    description: "A lightweight, browser-based computer vision tool to track reps in real-time without heavy server processing.",
    link: "https://github.com/dr-week/REP-COUNTER-BRO",
    note: "Camera tracking right in the DOM."
  }
];

export default function DevRange() {
  return (
    <section id="dev" className="px-6 md:px-12 lg:px-24 py-24 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">The Engine Room</h2>
          <p className="font-mono text-sm text-zinc-500 mt-4 uppercase tracking-widest">
            // Systems_ Logic_ Architecture_
          </p>
          
          {/* Human Annotation */}
          <div className="absolute top-0 right-0 hidden md:block">
            <p className="font-caveat text-2xl text-zinc-400 rotate-3">
              * Not just a designer.
            </p>
            <svg className="w-10 h-10 ml-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {devProjects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group block relative p-6 border-2 border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 bg-black px-2 py-1 border border-zinc-800">
                  {project.tech}
                </span>
                <svg className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-sm text-zinc-400 mb-8">{project.description}</p>
              
              {/* Handwritten Note at the bottom */}
              <div className="mt-auto border-t border-zinc-800/50 pt-4">
                <p className="font-caveat text-xl text-zinc-300 -rotate-2">
                  {project.note}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}

