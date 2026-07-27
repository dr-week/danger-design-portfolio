export default function TornDivider() {
  return (
    <div aria-hidden="true" className="relative w-full h-10 overflow-hidden bg-black">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,20 L40,0 L80,20 L120,0 L160,20 L200,0 L240,20 L280,0 L320,20 L360,0 L400,20 L440,0 L480,20 L520,0 L560,20 L600,0 L640,20 L680,0 L720,20 L760,0 L800,20 L840,0 L880,20 L920,0 L960,20 L1000,0 L1040,20 L1080,0 L1120,20 L1160,0 L1200,20 L1200,40 L0,40 Z"
          className="fill-zinc-900"
        />
        {/* Subtle highlight edge */}
        <path
          d="M0,20 L40,0 L80,20 L120,0 L160,20 L200,0 L240,20 L280,0 L320,20 L360,0 L400,20 L440,0 L480,20 L520,0 L560,20 L600,0 L640,20 L680,0 L720,20 L760,0 L800,20 L840,0 L880,20 L920,0 L960,20 L1000,0 L1040,20 L1080,0 L1120,20 L1160,0 L1200,20"
          stroke="#1a1a1a"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}

