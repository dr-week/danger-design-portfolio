import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import DevRange from "@/components/sections/DevRange";
import ProcessSection from "@/components/ProcessSection";
import RangeSection from "@/components/RangeSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-zinc-800 selection:text-white">
      <Hero />
      <WorkSection />
      <DevRange />
      <ProcessSection />
      <RangeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

