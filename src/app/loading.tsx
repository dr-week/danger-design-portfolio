export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 mx-auto rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)] animate-spin" />
        <p className="text-sm text-[var(--color-text-secondary)]">Loading...</p>
      </div>
    </div>
  );
}

