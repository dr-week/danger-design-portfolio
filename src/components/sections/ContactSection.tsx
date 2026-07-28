"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const BUDGET_OPTIONS = [
  "Under ₹50,000",
  "₹50K - ₹2 Lakhs",
  "₹2 Lakhs - ₹5 Lakhs",
  "₹5 Lakhs+"
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [selectedBudget, setSelectedBudget] = useState<string>("₹50K - ₹2 Lakhs");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      budget: selectedBudget,
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
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            START A PROJECT // LET'S WORK TOGETHER
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase"
          >
            Have a project in mind?
          </motion.h2>
          <p className="font-caveat text-xl text-zinc-400 mt-2">
            * Direct response within 24 hours. Serving Indian & international clients.
          </p>
        </div>

        {status === "sent" ? (
          <div className="p-6 border border-amber-500/40 bg-amber-500/10 font-mono text-amber-400 space-y-2">
            <p className="font-bold text-lg">// MESSAGE RECEIVED!</p>
            <p className="text-xs text-zinc-300">Thank you for reaching out. We will review your project specs and contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                required
                placeholder="Your Name / Company"
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-400 outline-none p-3.5 font-mono text-sm text-white transition-colors"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-400 outline-none p-3.5 font-mono text-sm text-white transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="phone"
                placeholder="Phone Number (WhatsApp optional)"
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-400 outline-none p-3.5 font-mono text-sm text-white transition-colors"
              />
              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase tracking-widest mb-2">
                  Project Budget Range (INR ₹)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedBudget(opt)}
                      className={`px-2.5 py-1.5 font-mono text-[11px] border transition-colors ${
                        selectedBudget === opt
                          ? "border-amber-400 bg-amber-400 text-black font-bold"
                          : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-600"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us about your project requirements (Video Editing, 3D Architecture, Brand Design, Website)..."
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-400 outline-none p-3.5 font-mono text-sm text-white resize-none transition-colors"
            />

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                data-cursor-hover
                className="w-full sm:w-auto font-mono bg-amber-400 text-black px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 cursor-pointer shadow-xl"
              >
                {status === "sending" ? "Sending Request..." : "Submit Project Inquiry →"}
              </button>

              <a
                href="https://wa.me/?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto font-mono border border-zinc-800 bg-zinc-950 text-zinc-300 px-6 py-3.5 text-xs uppercase tracking-widest hover:border-amber-400 hover:text-amber-400 text-center transition-colors"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {status === "error" && (
              <p className="font-mono text-red-400 text-xs">Error sending message — please try again or chat via WhatsApp directly.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
