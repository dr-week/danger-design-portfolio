"use client";

import { motion } from "framer-motion";
import ProcessSideBySide from "./ProcessComparison";

const notes = [
  "Took 47 iterations to get here",
  "Client chose V2, but V1 was better",
  "Rendered this overnight",
];

export default function ProcessSection() {
  return (
    <section id="process" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Process
          </h2>
          <p className="hand mt-2 text-lg text-[var(--color-accent)]">
            * Side-by-side, raw to final
          </p>
        </motion.div>

{/* Comparisons */}
        <div className="space-y-20">
          {notes.map((note, idx) => (
            <ProcessSideBySide key={idx} note={note} />
          ))}
        </div>
      </div>
    </section>
  );
}

