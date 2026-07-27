"use client";

import { motion } from "framer-motion";

interface MarkerHighlightProps {
  children: React.ReactNode;
  color?: string;
}

export default function MarkerHighlight({ children, color = "amber" }: MarkerHighlightProps) {
  const strokeColor = color === "sky" ? "text-sky-400" : "text-amber-400/90";
  const bgHighlight = color === "sky" ? "bg-sky-400/15" : "bg-amber-400/20";

  return (
    <span className="relative inline-block group cursor-pointer select-none">
      {/* Animated Marker Highlight Background Fill */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute inset-0 origin-left ${bgHighlight} rounded-sm -z-0 group-hover:bg-amber-400 group-hover:text-black transition-colors duration-300`}
      />

      <span className="relative z-10 font-bold px-1 group-hover:text-black transition-colors duration-300">
        {children}
      </span>

      {/* Hand-Drawn SVG Underline Path */}
      <motion.svg
        viewBox="0 0 200 16"
        className="absolute -bottom-1.5 left-0 w-full h-3 pointer-events-none z-10"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M4,12 Q50,0 100,12 Q150,24 196,12"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={strokeColor}
        />
      </motion.svg>
    </span>
  );
}
