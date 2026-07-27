'use client';

import { useEffect } from 'react';

export default function ErrorBoundaryMine({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('💣 [CLIENT UI MINE] Render crash caught:', error);
  }, [error]);

  return (
    <div className="p-6 bg-red-950/40 border border-red-500/50 rounded-lg text-red-200">
      <h2 className="font-mono text-sm uppercase tracking-widest text-red-400">
        // EXECUTION_FAILURE: {error.digest || 'RENDER_CRASH'}
      </h2>
      <p className="mt-2 text-xs font-mono">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-3 py-1 bg-red-500/20 hover:bg-red-500/40 border border-red-500 text-xs font-mono"
      >
        RE-INITIALIZE SEGMENT
      </button>
    </div>
  );
}
