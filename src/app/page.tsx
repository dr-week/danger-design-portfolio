import Navbar from "@/components/ui/Navbar";
import WorkSection from "@/components/WorkSection";
import DevRange from "@/components/sections/DevRange";
import ContactSection from "@/components/sections/ContactSection";
import Hero3D from "@/components/sections/Hero3D";
import TornDivider from "@/components/ui/TornDivider";
import MarkerHighlight from "@/components/ui/MarkerHighlight";
import BrandLogos from "@/components/ui/BrandLogos";
import AutomotiveSection from "@/components/sections/AutomotiveSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import HorizontalScrollSection from "@/components/ui/HorizontalScrollSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-zinc-800 selection:text-white pt-16">
      <Navbar />
      
      {/* Hero 3D Interactive Phone */}
      <Hero3D />
      <TornDivider />
      
      {/* Brand Logos Matrix */}
      <BrandLogos />

      <section className="py-10 bg-black text-center">
        <h2 className="text-xl text-zinc-400 font-mono">
          [ ARCHITECTURE &nbsp;//&nbsp; <MarkerHighlight>CREATIVE ENGINEERING</MarkerHighlight> ]
        </h2>
      </section>

      {/* 1. Compact Work Archive */}
      <WorkSection />
      <TornDivider />

      {/* 2. Environment 01: Automotive Kinematics */}
      <AutomotiveSection />

      {/* 3. Environment 02: Spatial Architecture & Blueprints */}
      <TornDivider />
      <ArchitectureSection />

      {/* 4. Environment 03: Gloomy Dev Engine Room & Stochastic Rain */}
      <TornDivider />
      <DevRange />

      {/* 5. Environment 04: Pinned Horizontal Parallax with Cursor Lens Reveal Box */}
      <TornDivider />
      <HorizontalScrollSection />

      {/* Contact Section */}
      <TornDivider />
      <ContactSection />
    </main>
  );
}
