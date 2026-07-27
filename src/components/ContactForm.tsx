"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [budget, setBudget] = useState<string>("$3k - $5k");
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const isEmailValid = (email: string) => email.includes("@") && email.includes(".");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!formData.name.trim() || !isEmailValid(formData.email) || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields correctly.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          budget,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTouched({});

        // Fire Confetti Explosion
        try {
          const confetti = (await import("canvas-confetti")).default;
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#f59e0b", "#38bdf8", "#ffffff"],
          });
        } catch (e) {
          // Fallback if confetti fails
        }
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
          // Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onBlur={() => setTouched({ ...touched, name: true })}
          className={`w-full px-4 py-3 bg-zinc-950 border text-sm text-white focus:outline-none transition-colors ${
            touched.name && !formData.name.trim()
              ? "border-red-500 bg-red-950/20"
              : "border-zinc-800 focus:border-amber-400"
          }`}
          placeholder="John Doe"
        />
        {touched.name && !formData.name.trim() && (
          <p className="text-[11px] font-mono text-red-400 mt-1">Name is required.</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
          // Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onBlur={() => setTouched({ ...touched, email: true })}
          className={`w-full px-4 py-3 bg-zinc-950 border text-sm text-white focus:outline-none transition-colors ${
            touched.email && !isEmailValid(formData.email)
              ? "border-red-500 bg-red-950/20"
              : "border-zinc-800 focus:border-amber-400"
          }`}
          placeholder="john@company.com"
        />
        {touched.email && !isEmailValid(formData.email) && (
          <p className="text-[11px] font-mono text-red-400 mt-1">Valid email address required.</p>
        )}
      </div>

      {/* Estimated Budget Selector */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
          // Estimated Budget
        </label>
        <div className="grid grid-cols-3 gap-2">
          {["$1k - $3k", "$3k - $5k", "$5k+"].map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              className={`py-2 px-3 text-xs font-mono border transition-all ${
                budget === b
                  ? "border-amber-400 bg-amber-500/10 text-amber-400 font-bold"
                  : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
          // Project Overview *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onBlur={() => setTouched({ ...touched, message: true })}
          className={`w-full px-4 py-3 bg-zinc-950 border text-sm text-white focus:outline-none transition-colors resize-none ${
            touched.message && !formData.message.trim()
              ? "border-red-500 bg-red-950/20"
              : "border-zinc-800 focus:border-amber-400"
          }`}
          placeholder="Briefly describe your project, timeline, and goals..."
        />
        {touched.message && !formData.message.trim() && (
          <p className="text-[11px] font-mono text-red-400 mt-1">Message cannot be empty.</p>
        )}
      </div>

      {/* Error Message Display */}
      {status === "error" && errorMessage && (
        <div className="p-3 border border-red-500/50 bg-red-950/30 text-red-400 font-mono text-xs">
          ⚠ {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-widest border border-white hover:bg-amber-400 hover:border-amber-400 transition-colors disabled:opacity-50"
      >
        {status === "sending"
          ? "[ SENDING INQUIRY... ]"
          : status === "sent"
          ? "[ MESSAGE DISPATCHED ✓ ]"
          : "[ SEND TRANSMISSION ]"}
      </motion.button>
    </form>
  );
}
