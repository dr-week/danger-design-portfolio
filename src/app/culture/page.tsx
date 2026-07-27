"use client";

import WorkSection from "@/components/WorkSection";
import Hero3D from "@/components/sections/Hero3D";
import { useAppStore } from "@/store/useAppStore";
import { useEffect } from "react";

export default function CultureDomain() {
  const setAtmosphere = useAppStore((state) => state.setAtmosphere);

  useEffect(() => {
    setAtmosphere("darkroom");
  }, [setAtmosphere]);

  return (
    <main className="min-h-screen bg-transparent">
      <Hero3D />
      <WorkSection domainId="culture" />
    </main>
  );
}
