import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ANONYMIZED_WORK, PortfolioItem } from "@/config/portfolio";
import ProcessSideBySide from "@/components/ProcessComparison";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ANONYMIZED_WORK.map((item) => ({
    slug: item.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project: PortfolioItem | undefined = ANONYMIZED_WORK.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 py-24 border-t border-zinc-900 select-none">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Navigation Back Header */}
        <div className="flex justify-between items-center border-b border-zinc-800 pb-6">
          <Link
            href="/#work"
            className="font-mono text-xs text-amber-400 hover:text-white border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 uppercase tracking-widest transition-colors"
          >
            ← Return to Commercial Archive
          </Link>
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        {/* Hero Title & Description */}
        <div className="space-y-4">
          <div className="inline-block border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400">
            {project.tag}
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            {project.title}
          </h1>
          <p className="font-mono text-base md:text-lg text-zinc-400 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Main Media Spotlight */}
        <div className="relative w-full h-80 md:h-[480px] bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Technical Kinematics & Specifications Grid */}
        {project.specs && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-zinc-950 border border-zinc-800 p-6 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-amber-400 font-bold block">// CAMERA_NODE</span>
              <p className="text-zinc-300">{project.specs.camera}</p>
            </div>
            <div className="space-y-1">
              <span className="text-amber-400 font-bold block">// LIGHTING_MODEL</span>
              <p className="text-zinc-300">{project.specs.lighting}</p>
            </div>
            <div className="space-y-1">
              <span className="text-amber-400 font-bold block">// KINEMATIC_PHYSICS</span>
              <p className="text-zinc-300">{project.specs.kinematics}</p>
            </div>
          </div>
        )}

        {/* Side-by-Side Blueprint vs Render Comparison */}
        <div className="space-y-6 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-white font-mono">
            // PROCESS_EVOLUTION (RAW SKETCH TO POLISH)
          </h2>
          <ProcessSideBySide
            note="* Blueprint geometry iteration refined for low-latency WebGL rendering"
            raw="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80"
            polished={project.image}
          />
        </div>

        {/* Tech Stack Footer Badges */}
        <div className="flex flex-wrap items-center gap-3 pt-8 border-t border-zinc-900 font-mono text-xs">
          <span className="text-zinc-500 uppercase tracking-widest mr-2">// TECH_STACK:</span>
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-zinc-900 border border-zinc-800 text-amber-400 px-3 py-1 uppercase">
              #{tech}
            </span>
          ))}
        </div>

      </div>
    </main>
  );
}
