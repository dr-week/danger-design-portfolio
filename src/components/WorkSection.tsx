"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import WeatherCanvas from "@/components/ui/WeatherCanvas";

interface ProjectItem {
  title: string;
  client: string;
  category: string;
  slug: string;
  image: string;
}

const projectItems: ProjectItem[] = [
  {
    title: "The Feni Project & Sobit Sui",
    client: "XOXO Social (Agency Team)",
    category: "CGI & Motion Direction",
    slug: "the-feni-project",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sunburn & IFFI CGI Campaigns",
    client: "Growth Gravy × Taj × JW Marriott",
    category: "Festival & Hospitality CGI",
    slug: "sunburn-iffi-cgi",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "International SaaS & Web3 Platforms",
    client: "Spark Plus Technologies (UK)",
    category: "Full-Stack UI/UX Engineering",
    slug: "saas-web3-platforms",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Boutique Coastal & Spatial Visualization",
    client: "Architectural & Real Estate CGI",
    category: "Spatial & Architectural CGI",
    slug: "boutique-coastal-spatial-cgi",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "TukTuk Craft & Fashion Boutique",
    client: "TukTuk Fashion",
    category: "Brand Identity & E-Commerce",
    slug: "tuktuk-boutique",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 overflow-hidden">
      <WeatherCanvas mode="sunbeam" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400 mb-3">
            // COMMERCIAL_ARCHIVE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Commercial Work
          </h2>
          <p className="font-caveat text-xl text-zinc-400 mt-2">
            * Selected agency projects across Motion, CGI & Engineering
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectItems.map((project) => (
            <Link
              key={project.title}
              href={`/work/${project.slug}`}
            >
              <ProjectCard
                title={project.title}
                client={project.client}
                category={project.category}
                image={project.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
