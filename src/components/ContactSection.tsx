"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
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
            Contact
          </h2>
          <p className="hand mt-2 text-lg text-[var(--color-accent)]">
            * No fluff, just reach out
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Got a project, a brief, or just want to talk shop? Drop a line.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@dishantnaik.com"
                className="block text-xl font-medium hover:text-[var(--color-accent)] transition-colors"
              >
                hello@dishantnaik.com
              </a>
              <a
                href="https://github.com/dr-week"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                github.com/dr-week
              </a>
            </div>
            <p className="hand text-sm text-[var(--color-accent)] opacity-60">
              * Usually reply within 24h
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

