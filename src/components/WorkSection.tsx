"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const projectItems = [
  {
    title: "The Feni Project",
    client: "Feni House",
    category: "Motion & CGI",
    image: "/projects/GRAPHICS DESIGNS/nvtsmall_1751609106_3669084490535756964_5799768191.mp4",
    slug: "the-feni-project",
  },
  {
    title: "Growth Gravy — CGI Spot",
    client: "Growth Gravy",
    category: "Motion & CGI",
    image: "/projects/GRAPHICS DESIGNS/cpplusworld_1751197990_3665636666347649951_2253388577.mp4",
    slug: "growth-gravy-cgi-spot",
  },
  {
    title: "SaaS Dashboard Redesign",
    client: "TechFlow",
    category: "UI/UX",
    image: "/projects/UI UX/poss0001-0250.avi",
    slug: "saas-dashboard-redesign",
  },
  {
    title: "Crypto Wallet Interface",
    client: "DeFi Labs",
    category: "UI/UX",
    image: "/projects/UI UX/app demo design animation.avi",
    slug: "crypto-wallet-interface",
  },
  {
    title: "Brand Identity System",
    client: "StartupX",
    category: "Brand",
    image: "/projects/BRAND IDENTITY DESIGN/dd (1).jpeg",
    slug: "brand-identity-system",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
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
            Work
          </h2>
          <p className="hand mt-2 text-lg text-[var(--color-accent)]">
            * Selected projects across disciplines
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

