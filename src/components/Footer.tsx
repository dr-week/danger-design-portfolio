export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-secondary)]">
          © {new Date().getFullYear()} Dishant Naik
        </p>
        <p className="hand text-sm text-[var(--color-accent)] opacity-60">
          * Built with Next.js, Framer Motion & Tailwind
        </p>
      </div>
    </footer>
  );
}

