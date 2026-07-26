"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const codeSnippets = {
  react: `// React Component — Draggable Slider
const Slider = () => {
  const [value, setValue] = useState(50);
  
  return (
    <div className="slider">
      <input
        type="range"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span>{value}%</span>
    </div>
  );
};`,
  next: `// Next.js API Route — Contact Handler
export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  
  await resend.emails.send({
    from: 'portfolio@dishantnaik.com',
    to: 'hello@dishantnaik.com',
    subject: \`New inquiry from \${name}\`,
    text: message,
  });

  return Response.json({ success: true });
}`,
  python: `# Python — Design Token Parser
def parse_tokens(tokens: dict) -> dict:
    resolved = {}
    for key, value in tokens.items():
        if isinstance(value, str) and value.startswith("{"):
            ref = value.strip("{}")
            resolved[key] = resolved.get(ref, value)
        else:
            resolved[key] = value
    return resolved`,
};

type Lang = "react" | "next" | "python";

export default function RangeSection() {
  const [activeLang, setActiveLang] = useState<Lang>("react");
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <section id="range" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
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
            Range
          </h2>
          <p className="hand mt-2 text-lg text-[var(--color-accent)]">
            * Front-end dev proof — live, interactive
          </p>
        </motion.div>

        {/* Interactive demo area */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 p-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-6">
              Live Demo
            </h3>

            {/* Interactive slider */}
            <div className="space-y-6">
              <p className="text-sm text-[var(--color-text-secondary)]">
                Drag me →
              </p>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="w-full h-1.5 appearance-none bg-[var(--color-border)] rounded-full outline-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 
                    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--color-accent)] 
                    [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                />
                {/* Filled track */}
                <div
                  className="absolute top-0 left-0 h-1.5 rounded-full bg-[var(--color-accent)] pointer-events-none"
                  style={{ width: `${sliderValue}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-[var(--color-text-secondary)]">
                <span>0%</span>
                <span className="text-lg font-bold text-[var(--color-accent)]">
                  {sliderValue}%
                </span>
                <span>100%</span>
              </div>
            </div>

            {/* Lang selector */}
            <div className="mt-8 flex gap-2">
              {(["react", "next", "python"] as Lang[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                    activeLang === lang
                      ? "border-[var(--color-accent)] bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
                      : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-secondary)]"
                  }`}
                >
                  {lang === "react"
                    ? "React"
                    : lang === "next"
                    ? "Next.js"
                    : "Python"}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Code */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] overflow-x-auto"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-2 text-xs text-[var(--color-text-secondary)]">
                {activeLang}.tsx
              </span>
            </div>
            <pre className="text-xs md:text-sm leading-relaxed text-[var(--color-text-secondary)] font-mono">
              <code>{codeSnippets[activeLang]}</code>
            </pre>
          </motion.div>
        </div>

        {/* Handwritten footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="hand text-sm text-[var(--color-accent)] mt-8 text-center opacity-60"
        >
          * Hover the code panel to see syntax highlighting in future builds
        </motion.p>
      </div>
    </section>
  );
}

