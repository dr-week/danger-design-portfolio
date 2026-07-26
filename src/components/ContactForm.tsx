"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-text-primary)]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-text-primary)]"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-text-primary)] resize-none"
          placeholder="What's on your mind?"
        />
      </div>
      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 rounded-lg bg-[var(--color-accent)] text-white text-sm font-medium disabled:opacity-50 transition-opacity"
      >
        {status === "sending"
          ? "Sending..."
          : status === "sent"
          ? "Sent! ✓"
          : status === "error"
          ? "Error — try again"
          : "Send Message"}
      </motion.button>
    </form>
  );
}

