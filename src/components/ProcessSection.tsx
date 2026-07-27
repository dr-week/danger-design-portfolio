"use client";

import { motion } from "framer-motion";
import ProcessSideBySide from "./ProcessComparison";

const comparisons = [
  {
    note: "* 47 iterations from blueprint to final 3D render",
    raw: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    polished: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    note: "* Client chose V2, but V1 was bolder",
    raw: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    polished: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    note: "* Rendered overnight in Blender & WebGL",
    raw: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    polished: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400 mb-3">
            // PROCESS_DECONSTRUCTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Raw Sketch to Polish
          </h2>
          <p className="font-caveat text-xl text-zinc-400 mt-2">
            * Unfiltered side-by-side progression from initial concept to commercial finish
          </p>
        </motion.div>

        {/* Comparisons */}
        <div className="space-y-20">
          {comparisons.map((item, idx) => (
            <ProcessSideBySide
              key={idx}
              note={item.note}
              raw={item.raw}
              polished={item.polished}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
