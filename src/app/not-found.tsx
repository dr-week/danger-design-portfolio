import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
      <div className="text-center space-y-6 max-w-md px-4">
        <h1 className="text-4xl font-['Space_Grotesk'] font-bold text-[var(--color-text)]">
          404
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] font-['Caveat']">
          This page wandered off...
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] 
                     hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] 
                     transition-all duration-300"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

