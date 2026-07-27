"use client";

import WorkSection from "@/components/WorkSection";
import { useAppStore } from "@/store/useAppStore";
import { useEffect } from "react";

export default function SystemsDomain() {
  const setAtmosphere = useAppStore((state) => state.setAtmosphere);

  useEffect(() => {
    setAtmosphere("brutalist-lab");
  }, [setAtmosphere]);

  return (
    <main className="min-h-screen bg-transparent">
      <WorkSection domainId="systems" />
    </main>
  );
}
