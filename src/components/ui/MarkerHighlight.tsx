"use client";

import { motion } from "framer-motion";

interface MarkerHighlightProps {
  children: React.ReactNode;
}

export default function MarkerHighlight({ children }: MarkerHighlightProps) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <motion.svg
        viewBox="0 0 200 16"
        className="absolute -bottom-1.5 left-0 w-full h-3"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M4,12 Q50,0 100,12 Q150,24 196,12"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-amber-400/80"
        />
      </motion.svg>
    </span>
  );
}

