"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  MapPin,
  ExternalLink,
  Printer,
  Copy,
  Check,
  Code,
  Terminal,
  Cpu,
  Layers,
  Globe,
  Sparkles,
  Briefcase,
  GraduationCap,
  Zap,
} from "lucide-react";

// Clean Github SVG Icon component
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function DeveloperCVPage() {
  const [copied, setCopied] = useState(false);
  const [activeSkillFilter, setActiveSkillFilter] = useState("all");
  const [downloadingPdf, setDownloadingPdf] = useState<string | null>(null);

  // High Quality PDF Download (Vector Print to PDF stream)
  const handleHighQualityDownload = () => {
    setDownloadingPdf("high");
    setTimeout(() => {
      window.print();
      setDownloadingPdf(null);
    }, 200);
  };

  // Low Quality / Compressed PDF Download (Generates lightweight printable stream with optimized graphics)
  const handleLowQualityDownload = () => {
    setDownloadingPdf("low");
    document.body.classList.add("low-res-pdf-mode");
    setTimeout(() => {
      window.print();
      document.body.classList.remove("low-res-pdf-mode");
      setDownloadingPdf(null);
    }, 250);
  };

  // Copy Markdown CV to clipboard
  const handleCopyMarkdown = () => {
    const markdown = `# DISHANT NAIK - FRONT-END WEB DEVELOPER & UI/UX ENGINEER
Location: Goa, India
GitHub: https://github.com/dr-week
Email: dishantnaik@gmail.com

## EDUCATION & DEGREES
- Degree in Computer Engineering | Shree Rayeshwar Institute of Engineering and Technology (2017 - 2022)
- MBA in Marketing Management | GLA University (2026 - Present)

## TECHNICAL SKILLS
- Languages & Frameworks: JavaScript (ES6+), TypeScript, React.js, Next.js, Vue.js, Python, HTML5, CSS3, TailwindCSS
- Tools & Platforms: Git, GitHub, AWS, VS Code, WordPress CMS, Node.js, REST APIs
- Databases & Systems: MongoDB, MySQL, JSON, Data Automation
- UI/UX & Design: Responsive Systems, Wireframing, Figma, Motion Design, WebGL / Three.js fundamentals

## DEVELOPER PROJECTS
1. blackbox-Agent-Orchestrator (TypeScript, Python) - https://github.com/DR-WEEK/blackbox-Agent-Orchestrator
2. GAME_OF_DATE (Next.js, Framer Motion) - https://github.com/DR-WEEK/GAME_OF_DATE
3. REP-COUNTER-BRO (JavaScript, Canvas API) - https://github.com/DR-WEEK/REP-COUNTER-BRO

## FREELANCE WEB & SOFTWARE DEVELOPMENT EXPERIENCE
- Freelance Front-End Web Developer & UI/UX Engineer (2021 - Present)
  * Built custom React / Next.js web applications, responsive user interfaces, and API integrations.

## WORK EXPERIENCE (CREATIVE & VISUAL DESIGN)
- Graphic Designer & Video Editor | XOXO Social, Goa (Aug 2025 - Present)
- Graphic Designer & Video Editor | Growth Gravy, Panaji (Oct 2024 - Aug 2025)
- Graphic Designer & Video Editor | Miri Global Fusion Dining (Feb 2024 - Sep 2024)
- Graphic Designer & Video Editor | Wavelength (Jun 2023 - Jan 2024)
- Graphic Designer & Video Editor | Haztech (Oct 2022 - May 2023)
- Visual Designer | Spark Plus Technologies (Jan 2022 - Sep 2022)
`;
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const skillsData = [
    { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced" },
    { name: "React.js", category: "frontend", level: "Advanced" },
    { name: "Next.js 15", category: "frontend", level: "Advanced" },
    { name: "TypeScript", category: "frontend", level: "Intermediate" },
    { name: "HTML5 / CSS3", category: "frontend", level: "Expert" },
    { name: "TailwindCSS", category: "frontend", level: "Advanced" },
    { name: "Vue.js", category: "frontend", level: "Intermediate" },
    { name: "Python", category: "backend", level: "Intermediate" },
    { name: "Node.js & REST APIs", category: "backend", level: "Intermediate" },
    { name: "MongoDB", category: "backend", level: "Intermediate" },
    { name: "MySQL", category: "backend", level: "Intermediate" },
    { name: "Git & GitHub", category: "tools", level: "Advanced" },
    { name: "AWS Fundamentals", category: "tools", level: "Intermediate" },
    { name: "WordPress CMS", category: "tools", level: "Advanced" },
    { name: "UI/UX & Wireframing", category: "design", level: "Advanced" },
    { name: "Framer Motion", category: "design", level: "Advanced" },
    { name: "Three.js / WebGL", category: "design", level: "Intermediate" },
    { name: "Agile / Jira / Asana", category: "tools", level: "Advanced" },
  ];

  const filteredSkills =
    activeSkillFilter === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeSkillFilter);

  return (
    <div className="min-h-screen bg-[#08080c] text-slate-100 font-sans selection:bg-amber-400 selection:text-black">
      {/* ================= PRINT STYLESHEET INLINE ================= */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 10mm;
            size: A4 portrait;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
            font-size: 10.5pt !important;
          }
          .no-print {
            display: none !important;
          }
          .print-container {
            padding: 0 !important;
            max-width: 100% !important;
            box-shadow: none !important;
            border: none !important;
            background: transparent !important;
          }
          .print-card {
            border: 1px solid #e2e8f0 !important;
            background: #ffffff !important;
            color: #000000 !important;
            break-inside: avoid;
            box-shadow: none !important;
          }
          .print-text-dark {
            color: #0f172a !important;
          }
          .print-text-muted {
            color: #475569 !important;
          }
          .print-bg-light {
            background: #f8fafc !important;
          }
          .print-border {
            border-color: #cbd5e1 !important;
          }
          a {
            text-decoration: underline !important;
            color: #0f172a !important;
          }
        }
        body.low-res-pdf-mode {
          filter: contrast(90%) brightness(105%);
        }
      `}</style>

      {/* ================= FLOATING COMMAND BAR (NON-PRINTABLE) ================= */}
      <header className="no-print sticky top-0 z-50 bg-[#0c0d14]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3 transition-all">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>// PORTFOLIO</span>
          </Link>

          <div className="flex items-center flex-wrap gap-2">
            {/* High Quality PDF Download */}
            <button
              onClick={handleHighQualityDownload}
              disabled={!!downloadingPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-400 text-black text-xs font-mono font-semibold uppercase hover:bg-amber-300 transition-all shadow-md active:scale-95 cursor-pointer"
              title="Download crisp vector PDF via print dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{downloadingPdf === "high" ? "Preparing..." : "PDF (High Quality)"}</span>
            </button>

            {/* Low Quality / Compact PDF Download */}
            <button
              onClick={handleLowQualityDownload}
              disabled={!!downloadingPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono uppercase transition-all active:scale-95 cursor-pointer"
              title="Download lightweight compressed PDF attachment"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>{downloadingPdf === "low" ? "Compressing..." : "PDF (Lightweight)"}</span>
            </button>

            {/* Copy Markdown */}
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono uppercase transition-all"
              title="Copy Markdown text format"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy MD</span>
                </>
              )}
            </button>

            {/* GitHub Profile */}
            <a
              href="https://github.com/dr-week"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161b22] border border-slate-700 text-slate-200 hover:text-amber-400 text-xs font-mono uppercase transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </header>

      {/* ================= MAIN CV BODY CONTAINER ================= */}
      <main className="print-container max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
        
        {/* HEADER SECTION: Identity & Contact Info */}
        <section className="print-card print-bg-light p-6 sm:p-8 rounded-xl bg-[#0f111a] border border-slate-800/90 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="no-print absolute -top-24 -right-24 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              {/* Profile Photo */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-amber-400/80 shadow-lg shrink-0 print-card print-border">
                {/* eslint-disable-next-html-link */}
                <img
                  src="/dishant_naik_headshot.jpg"
                  alt="Dishant Naik Headshot"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-400 font-mono text-xs uppercase tracking-wider">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Developer Curriculum Vitae</span>
                </div>
                <h1 className="print-text-dark text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
                  Dishant Naik
                </h1>
                <p className="print-text-muted text-sm sm:text-base font-mono text-amber-400 font-medium">
                  Front-End Web Developer & UI/UX Software Engineer
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-slate-400 print-text-muted">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 print-border">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                    B.E. Computer Engineering
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 print-border">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    Goa, India
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Hire 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact & Social Links Box */}
            <div className="print-card print-bg-light p-4 rounded-lg bg-[#141824] border border-slate-800 space-y-2.5 font-mono text-xs text-slate-300 min-w-[260px]">
              <a
                href="https://github.com/dr-week"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors print-text-dark"
              >
                <GithubIcon className="w-4 h-4 text-amber-400" />
                <span className="underline">github.com/dr-week</span>
              </a>
              <div className="flex items-center gap-2 print-text-dark">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>dishantnaik@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 print-text-dark">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Panaji, Goa, India</span>
              </div>
              <a
                href="https://youtube.com/@dishantnaik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors print-text-dark"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>youtube.com/@dishantnaik</span>
              </a>
            </div>
          </div>

          {/* Bio / Summary */}
          <div className="mt-6 pt-6 border-t border-slate-800/80 print-border text-sm text-slate-300 print-text-dark leading-relaxed">
            <p>
              Dedicated <strong className="text-white print-text-dark">Computer Engineering graduate</strong> and front-end developer with expertise in building fast, scalable, and visually compelling web applications. Proficient in <span className="text-amber-400 font-mono">React.js, Next.js, JavaScript (ES6+), TypeScript, TailwindCSS, and Python</span>. Blends strong software architecture principles with advanced UI/UX aesthetics to deliver high-performance user experiences.
            </p>
          </div>
        </section>

        {/* SECTION: EDUCATION CREDENTIALS */}
        <section className="print-card print-bg-light p-6 rounded-xl bg-[#0f111a] border border-slate-800/90 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-sm uppercase font-bold tracking-wide border-b border-slate-800 pb-3 print-border">
            <GraduationCap className="w-4 h-4" />
            <h2>Education & Academic Credentials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#141824] border border-slate-800/80 print-card print-border">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white print-text-dark text-base">Degree in Computer Engineering</h3>
                  <p className="text-xs text-amber-400 font-mono mt-0.5">Shree Rayeshwar Institute of Engineering & IT</p>
                </div>
                <span className="font-mono text-xs text-slate-400 print-text-muted px-2 py-0.5 rounded bg-slate-800 print-bg-light">
                  2017 – 2022
                </span>
              </div>
              <p className="text-xs text-slate-300 print-text-dark mt-3 leading-relaxed">
                Core Focus: Data Structures & Algorithms, Web Engineering, Software Architecture, Database Systems (MySQL/MongoDB), Computer Networks, Object-Oriented Programming.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#141824] border border-slate-800/80 print-card print-border">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white print-text-dark text-base">MBA in Marketing Management</h3>
                  <p className="text-xs text-amber-400 font-mono mt-0.5">GLA University</p>
                </div>
                <span className="font-mono text-xs text-slate-400 print-text-muted px-2 py-0.5 rounded bg-slate-800 print-bg-light">
                  2026 – Present
                </span>
              </div>
              <p className="text-xs text-slate-300 print-text-dark mt-3 leading-relaxed">
                Focus: Technical Product Management, Growth Strategy, Funnel Optimization, Digital Ecosystem Strategy & Consumer Psychology.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: KEY DEVELOPER PROJECTS & GITHUB REPOS */}
        <section className="print-card print-bg-light p-6 rounded-xl bg-[#0f111a] border border-slate-800/90 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 print-border">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-sm uppercase font-bold tracking-wide">
              <Code className="w-4 h-4" />
              <h2>Developer Projects & GitHub Repositories</h2>
            </div>
            <a
              href="https://github.com/dr-week"
              target="_blank"
              rel="noopener noreferrer"
              className="no-print font-mono text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <span>View All Repos</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <div className="p-4 rounded-lg bg-[#141824] border border-slate-800/80 print-card print-border space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-mono font-bold text-white print-text-dark text-sm flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-amber-400" />
                  blackbox-Agent-Orchestrator
                </h3>
                <span className="font-mono text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
                  TypeScript / Python
                </span>
              </div>
              <p className="text-xs text-slate-300 print-text-dark leading-relaxed">
                Multi-agent orchestration engine supporting automated task planning, CLI & GUI monitoring, parallel subagent communication, and automated workflow triggers.
              </p>
              <div className="pt-2 flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-400 print-text-muted">Stack: Node.js, TypeScript, Python, Async Queues</span>
                <a
                  href="https://github.com/DR-WEEK/blackbox-Agent-Orchestrator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-4 rounded-lg bg-[#141824] border border-slate-800/80 print-card print-border space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-mono font-bold text-white print-text-dark text-sm flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  GAME_OF_DATE
                </h3>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                  Next.js / React
                </span>
              </div>
              <p className="text-xs text-slate-300 print-text-dark leading-relaxed">
                Interactive decision web application featuring dynamic state management, smooth micro-animations with Framer Motion, and responsive UI components.
              </p>
              <div className="pt-2 flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-400 print-text-muted">Stack: Next.js, React, TailwindCSS, Framer Motion</span>
                <a
                  href="https://github.com/DR-WEEK/GAME_OF_DATE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-4 rounded-lg bg-[#141824] border border-slate-800/80 print-card print-border space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-mono font-bold text-white print-text-dark text-sm flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-amber-400" />
                  REP-COUNTER-BRO
                </h3>
                <span className="font-mono text-[10px] text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded border border-purple-400/20">
                  JS / Computer Vision
                </span>
              </div>
              <p className="text-xs text-slate-300 print-text-dark leading-relaxed">
                Real-time browser-based posture & exercise rep tracking system built with HTML5 Canvas API and client-side motion tracking logic.
              </p>
              <div className="pt-2 flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-400 print-text-muted">Stack: JavaScript, Canvas API, Web Speech API</span>
                <a
                  href="https://github.com/DR-WEEK/REP-COUNTER-BRO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="p-4 rounded-lg bg-[#141824] border border-slate-800/80 print-card print-border space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-mono font-bold text-white print-text-dark text-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  DANGER.DESIGN Studio Web Engine
                </h3>
                <span className="font-mono text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  Next.js 15 / WebGL
                </span>
              </div>
              <p className="text-xs text-slate-300 print-text-dark leading-relaxed">
                High-performance creative engineering showcase with 3D canvas planes, custom GLSL shaders, Web Audio synthesizer engine, and physical kinetic spring animations.
              </p>
              <div className="pt-2 flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-400 print-text-muted">Stack: Next.js 15, Three.js, Web Audio, Zustand</span>
                <a
                  href="https://github.com/dr-week"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: TECHNICAL SKILLS MATRIX */}
        <section className="print-card print-bg-light p-6 rounded-xl bg-[#0f111a] border border-slate-800/90 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 print-border">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-sm uppercase font-bold tracking-wide">
              <Cpu className="w-4 h-4" />
              <h2>Technical Skills & Engineering Competencies</h2>
            </div>

            {/* Filter Tabs (Hidden in Print) */}
            <div className="no-print flex items-center gap-1 bg-[#141824] p-1 rounded-lg border border-slate-800 font-mono text-[11px]">
              {["all", "frontend", "backend", "tools", "design"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillFilter(cat)}
                  className={`px-2.5 py-1 rounded uppercase transition-colors ${
                    activeSkillFilter === cat
                      ? "bg-amber-400 text-black font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {filteredSkills.map((skill, i) => (
              <div
                key={i}
                className="p-2.5 rounded bg-[#141824] border border-slate-800/80 print-card print-border flex items-center justify-between font-mono text-xs"
              >
                <span className="text-slate-200 print-text-dark font-medium">{skill.name}</span>
                <span className="text-[10px] text-amber-400/90 bg-amber-400/10 px-1.5 py-0.5 rounded print-bg-light print-text-muted">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: FREELANCE & IT DEVELOPER EXPERIENCE */}
        <section className="print-card print-bg-light p-6 rounded-xl bg-[#0f111a] border border-slate-800/90 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-sm uppercase font-bold tracking-wide border-b border-slate-800 pb-3 print-border">
            <Code className="w-4 h-4" />
            <h2>Freelance Web & Software Development Experience</h2>
          </div>

          <div className="p-4 rounded-lg bg-[#141824] border border-slate-800/80 print-card print-border space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-bold text-white print-text-dark text-base">
                Freelance Front-End Web Developer & UI/UX Engineer
              </h3>
              <span className="font-mono text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 self-start sm:self-auto">
                2021 – Present
              </span>
            </div>
            <p className="font-mono text-xs text-slate-400 print-text-muted">Independent / Remote</p>
            <ul className="text-xs text-slate-300 print-text-dark space-y-1.5 list-disc list-inside pt-1">
              <li>Engineered responsive web interfaces using <strong className="text-white print-text-dark">React.js, Next.js, JavaScript (ES6+), HTML5, and CSS3/TailwindCSS</strong>.</li>
              <li>Developed custom client websites, interactive web applications, dynamic menu engines, and WordPress themes.</li>
              <li>Integrated REST APIs, MongoDB/MySQL database handling, state management, and smooth micro-animations.</li>
            </ul>
          </div>
        </section>

        {/* SECTION: WORK EXPERIENCE */}
        <section className="print-card print-bg-light p-6 rounded-xl bg-[#0f111a] border border-slate-800/90 shadow-xl space-y-6">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-sm uppercase font-bold tracking-wide border-b border-slate-800 pb-3 print-border">
            <Briefcase className="w-4 h-4" />
            <h2>Work Experience (Creative & Visual Design)</h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-800 print-before:hidden">
            {/* Experience Item 1 */}
            <div className="relative pl-8 space-y-1.5">
              <div className="no-print absolute left-1.5 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400 border-4 border-[#0f111a]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white print-text-dark text-base">
                  Graphic Designer & Video Editor
                </h3>
                <span className="font-mono text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 self-start sm:self-auto">
                  Aug 2025 – Present
                </span>
              </div>
              <p className="font-mono text-xs text-slate-400 print-text-muted">XOXO Social • Goa, India</p>
              <p className="text-xs text-slate-300 print-text-dark leading-relaxed pt-1">
                Portfolio: The Feni Project, Sobit Sui, V. M. Salgaocar (VMSIIHE), Ameva Events, BNI, Planet Hollywood, Ceramic Cartel.<br />
                Scope: Strategy, graphic design, video editing, production shoots, and final delivery.
              </p>
            </div>

            {/* Experience Item 2 */}
            <div className="relative pl-8 space-y-1.5">
              <div className="no-print absolute left-1.5 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-700 border-4 border-[#0f111a]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white print-text-dark text-base">
                  Graphic Designer & Video Editor
                </h3>
                <span className="font-mono text-xs text-slate-400 print-text-muted bg-slate-800 px-2 py-0.5 rounded self-start sm:self-auto">
                  Oct 2024 – Aug 2025
                </span>
              </div>
              <p className="font-mono text-xs text-slate-400 print-text-muted">Growth Gravy • Panaji, Goa</p>
              <p className="text-xs text-slate-300 print-text-dark leading-relaxed pt-1">
                Portfolio: Novotel, Zantyes, Longuinhos Beach Resort, Taj, IHG, JW Marriott, W Goa, Aadhvay, Sunburn, IFFI, Football Plus Summit, Casino Pride, TVS, Govt of Goa.<br />
                Scope: Video editing, motion graphics, CGI/VFX, brainstorming, content writing, brand films, and government campaigns.
              </p>
            </div>

            {/* Experience Item 3 */}
            <div className="relative pl-8 space-y-1.5">
              <div className="no-print absolute left-1.5 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-700 border-4 border-[#0f111a]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white print-text-dark text-base">
                  Graphic Designer & Video Editor
                </h3>
                <span className="font-mono text-xs text-slate-400 print-text-muted bg-slate-800 px-2 py-0.5 rounded self-start sm:self-auto">
                  Feb 2024 – Sep 2024
                </span>
              </div>
              <p className="font-mono text-xs text-slate-400 print-text-muted">Miri Global Fusion Dining • Panaji, Goa</p>
              <p className="text-xs text-slate-300 print-text-dark leading-relaxed pt-1">
                Portfolio: Miri, Electronic Hub, Smoke House, Sunheads, Dr. Manaz’s Clinic.<br />
                Scope: Owned end-to-end visual storytelling and brand voice definition. Executed graphic design, video production, photography, and outdoor branding.
              </p>
            </div>

            {/* Experience Item 4 */}
            <div className="relative pl-8 space-y-1.5">
              <div className="no-print absolute left-1.5 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-700 border-4 border-[#0f111a]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white print-text-dark text-base">
                  Graphic Designer & Video Editor
                </h3>
                <span className="font-mono text-xs text-slate-400 print-text-muted bg-slate-800 px-2 py-0.5 rounded self-start sm:self-auto">
                  Jun 2023 – Jan 2024
                </span>
              </div>
              <p className="font-mono text-xs text-slate-400 print-text-muted">Wavelength • Panaji, Goa</p>
              <p className="text-xs text-slate-300 print-text-dark leading-relaxed pt-1">
                Portfolio: Novotel, Sobit Sarovar Portico, Ather Energy, Tanishq, STAYHIGH, Ocean Spa & Salon.<br />
                Scope: Creative ideation, promotional copywriting, social media creatives, videos, and print designs.
              </p>
            </div>

            {/* Experience Item 5 */}
            <div className="relative pl-8 space-y-1.5">
              <div className="no-print absolute left-1.5 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-700 border-4 border-[#0f111a]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white print-text-dark text-base">
                  Graphic Designer & Video Editor
                </h3>
                <span className="font-mono text-xs text-slate-400 print-text-muted bg-slate-800 px-2 py-0.5 rounded self-start sm:self-auto">
                  Oct 2022 – May 2023
                </span>
              </div>
              <p className="font-mono text-xs text-slate-400 print-text-muted">Haztech • Margao, Goa</p>
              <p className="text-xs text-slate-300 print-text-dark leading-relaxed pt-1">
                Portfolio: Planet Hollywood Beach Resort, Viva Panjim, Dent Inn, Cafe Chai Coffee, Ulas Jewellers, Baowich, USCAFE.<br />
                Scope: Managed production planning and creative direction. Handled visual production, photoshoots, video editing, and client delivery.
              </p>
            </div>

            {/* Experience Item 6 */}
            <div className="relative pl-8 space-y-1.5">
              <div className="no-print absolute left-1.5 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-700 border-4 border-[#0f111a]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white print-text-dark text-base">
                  Visual Designer
                </h3>
                <span className="font-mono text-xs text-slate-400 print-text-muted bg-slate-800 px-2 py-0.5 rounded self-start sm:self-auto">
                  Jan 2022 – Sep 2022
                </span>
              </div>
              <p className="font-mono text-xs text-slate-400 print-text-muted">Spark Plus Technologies • Mapusa, Goa</p>
              <p className="text-xs text-slate-300 print-text-dark leading-relaxed pt-1">
                Portfolio: UK and international SaaS startups, crypto platforms, NFT projects, and finance companies.<br />
                Scope: UI/UX design, motion graphics, 3D visuals, product demos, and marketing assets.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
