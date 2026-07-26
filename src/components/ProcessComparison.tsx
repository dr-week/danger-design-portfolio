"use client";

export default function ProcessSideBySide({ note }: { note: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 relative">
      <div className="border border-zinc-800 p-2">
        <div className="h-64 bg-zinc-900 w-full flex items-center justify-center text-zinc-600">
          Raw Sketch
        </div>
      </div>

      {/* Handwritten Annotation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <p className="font-caveat text-2xl text-white -rotate-6 bg-black/50 px-2">
          {note}
        </p>
        <svg
          className="w-12 h-12 mx-auto mt-2 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>

      <div className="border border-zinc-800 p-2">
        <div className="h-64 bg-zinc-800 w-full flex items-center justify-center text-zinc-400">
          Final Polish
        </div>
      </div>
    </div>
  );
}

