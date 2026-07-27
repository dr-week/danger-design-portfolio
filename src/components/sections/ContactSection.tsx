"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-zinc-900 bg-black">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white"
        >
          Say something
        </motion.h2>
        <p className="font-caveat text-xl text-zinc-400 mb-10">* usually reply within a day</p>

        {status === "sent" ? (
          <p className="font-mono text-zinc-300">// message received. talk soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              required
              placeholder="Name"
              className="w-full bg-transparent border-b border-zinc-700 focus:border-white outline-none py-2 font-mono text-white"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full bg-transparent border-b border-zinc-700 focus:border-white outline-none py-2 font-mono text-white"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="What are we building?"
              className="w-full bg-transparent border-b border-zinc-700 focus:border-white outline-none py-2 font-mono text-white resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              data-cursor-hover
              className="font-mono border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors disabled:opacity-50 text-white cursor-pointer"
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>
            {status === "error" && (
              <p className="font-mono text-red-400 text-sm">Something broke — try again or email directly.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
