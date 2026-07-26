import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import RangeSection from "@/components/RangeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WorkSection />
      <ProcessSection />
      <RangeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

