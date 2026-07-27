"use client";

import WorkSection from "@/components/WorkSection";
import { useAppStore } from "@/store/useAppStore";
import { useEffect } from "react";

import FrameScaleScroll from "@/components/ui/FrameScaleScroll";
import HorizontalScrollSection from "@/components/ui/HorizontalScrollSection";

export default function SpatialDomain() {
  const setAtmosphere = useAppStore((state) => state.setAtmosphere);

  useEffect(() => {
    setAtmosphere("coastal-concrete");
  }, [setAtmosphere]);

  return (
    <main className="min-h-screen bg-transparent">
      <WorkSection domainId="spatial" />
      <FrameScaleScroll 
        title="SYSTEM_08 // VOLUMETRIC ARCHITECTURE" 
        subtitle="Wide-angle bottom-up scale. Volumetric sun rays."
      />
      <HorizontalScrollSection />
    </main>
  );
}
