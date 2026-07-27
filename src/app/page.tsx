import Navbar from "@/components/ui/Navbar";
import WorkSection from "@/components/WorkSection";
import DevRange from "@/components/sections/DevRange";
import ContactSection from "@/components/sections/ContactSection";
import Hero3D from "@/components/sections/Hero3D";
import TornDivider from "@/components/ui/TornDivider";
import MarkerHighlight from "@/components/ui/MarkerHighlight";
import BrandLogos from "@/components/ui/BrandLogos";
import FrameScaleScroll from "@/components/ui/FrameScaleScroll";
import HorizontalScrollSection from "@/components/ui/HorizontalScrollSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-zinc-800 selection:text-white pt-16">
      <Navbar />
      
      <Hero3D />
      <TornDivider />
      
      <BrandLogos />

      <section className="py-12 bg-black text-center">
        <h2 className="text-xl text-zinc-400 font-mono">
          [ ARCHITECTURE &nbsp;//&nbsp; <MarkerHighlight>CREATIVE ENGINEERING</MarkerHighlight> ]
        </h2>
      </section>

      <WorkSection />
      
      {/* Signature Kinematic Interactions (Phase 1.5) */}
      <TornDivider />
      <FrameScaleScroll />
      <HorizontalScrollSection />

      <TornDivider />
      <DevRange />
      <TornDivider />
      <ContactSection />
    </main>
  );
}
