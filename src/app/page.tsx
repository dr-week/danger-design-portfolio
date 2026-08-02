"use client";

import { useEffect } from "react";
import Hero3D from "@/components/sections/Hero3D";
import WorkSection from "@/components/WorkSection";
import DevRange from "@/components/sections/DevRange";
import ContactSection from "@/components/sections/ContactSection";
import KineticSkewWrapper from "@/components/ui/KineticSkewWrapper";
import { useAppStore } from "@/store/useAppStore";

export default function Home() {
  const setAtmosphere = useAppStore((state) => state.setAtmosphere);

  useEffect(() => {
    // Set atmosphere to void on home root
    setAtmosphere("void");
  }, [setAtmosphere]);

  return (
    <main className="relative w-full min-h-screen bg-bg text-text-primary selection:bg-accent/30 selection:text-text-primary">
      {/* ACT I: THE TRANSMISSION // 3D REEL CAROUSEL */}
      <Hero3D />

      {/* ACT II: THE ARCHIVE MATRIX */}
      <KineticSkewWrapper id="archive">
        <WorkSection />
      </KineticSkewWrapper>

      {/* ACT IV: THE ENGINE ROOM (SYSTEMS & RUST ENGINE) */}
      <KineticSkewWrapper>
        <DevRange />
      </KineticSkewWrapper>

      {/* ACT V: DIRECT SERVERLESS DISPATCH */}
      <KineticSkewWrapper>
        <ContactSection />
      </KineticSkewWrapper>
    </main>
  );
}
