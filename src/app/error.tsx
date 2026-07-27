"use client";

import { useEffect } from "react";

export default function GlobalErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the caught error details to browser console
    console.error(" [DANGER DESIGN SYSTEM ERROR]:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center font-mono">
      <div className="max-w-xl border-2 border-red-600 bg-zinc-950 p-8 shadow-2xl relative">
        <div className="absolute -top-3 left-6 bg-red-600 text-black px-2 py-0.5 text-xs font-bold uppercase tracking-widest">
          // SYSTEM_EXCEPTION
        </div>

        <h1 className="text-3xl font-bold text-red-500 mb-4 tracking-tight">
          RUNTIME_ERROR
        </h1>

        <p className="text-sm text-zinc-400 mb-6 text-left bg-zinc-900/80 p-4 border border-zinc-800 rounded font-mono overflow-x-auto max-h-48">
          {error.message || "An unexpected rendering error occurred in the component tree."}
        </p>

        {error.digest && (
          <p className="text-[10px] text-zinc-600 mb-6 text-left">
            Digest Code: {error.digest}
          </p>
        )}

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-white text-black font-bold px-6 py-2 hover:bg-zinc-200 transition-colors cursor-pointer text-xs uppercase tracking-widest"
          >
            Reset State & Retry
          </button>
          <a
            href="/"
            className="border border-zinc-800 text-zinc-400 font-bold px-6 py-2 hover:text-white hover:border-zinc-600 transition-colors text-xs uppercase tracking-widest"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}

