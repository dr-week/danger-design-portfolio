"use client";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  client,
  category,
}: {
  title: string;
  client: string;
  category: string;
}) {
  return (
    <motion.div
      initial={{ rotate: -1.5 }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative p-6 border-2 border-zinc-800 bg-zinc-950 cursor-pointer"
    >
      <div className="h-48 w-full bg-zinc-900 mb-4" />{" "}
      {/* Thumbnail Placeholder */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs text-zinc-500 mb-1">{category}</p>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        {/* Subtle Client Tag */}
        <span className="text-xs text-zinc-400 bg-zinc-900 px-2 py-1">
          {client}
        </span>
      </div>
    </motion.div>
  );
}

