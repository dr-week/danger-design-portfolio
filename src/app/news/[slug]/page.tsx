import { getNewsBySlug, getNewsSlugs } from "@/utils/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const slugs = getNewsSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const components = {
  h1: (props: any) => <h1 className="text-2xl font-bold mt-8 mb-4 text-text-primary font-mono" {...props} />,
  h2: (props: any) => <h2 className="text-xl font-bold mt-6 mb-3 text-text-primary font-mono" {...props} />,
  h3: (props: any) => <h3 className="text-lg font-bold mt-4 mb-2 text-text-primary font-mono" {...props} />,
  p: (props: any) => <p className="leading-relaxed mb-4 text-text-secondary font-mono text-sm" {...props} />,
  pre: (props: any) => <pre className="bg-surface border border-border p-4 rounded-md overflow-x-auto text-xs text-text-primary mb-4 font-mono" {...props} />,
  code: (props: any) => <code className="bg-accent/10 text-accent border border-accent/20 px-1 py-0.5 rounded font-mono text-xs" {...props} />,
  ul: (props: any) => (
    <ul className="list-disc pl-6 mb-4 text-text-secondary font-mono text-sm" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 mb-4 text-text-secondary font-mono text-sm" {...props} />
  ),
  li: (props: any) => (
    <li className="mb-2 text-sm font-mono" {...props} />
  ),
  a: (props: any) => (
    <a 
      className="text-accent hover:underline underline-offset-4 decoration-accent/50 transition-all cursor-pointer font-mono" 
      target="_blank" 
      rel="noopener noreferrer" 
      {...props} 
    />
  ),
  blockquote: (props: any) => (
    <blockquote 
      className="border-l-4 border-accent pl-4 py-1 my-4 text-text-secondary bg-black/10 dark:bg-white/5 italic font-mono text-sm" 
      {...props} 
    />
  ),
};

export default async function NewsPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);

  return (
    <div className="bg-bg min-h-screen text-text-primary">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-32 space-y-8 select-none">
        <Link
          href="/news"
          className="font-mono text-xs text-text-secondary hover:text-accent border border-border bg-surface px-3 py-1.5 uppercase tracking-widest inline-block rounded-md transition-colors"
        >
          ← Return to News Feed
        </Link>

        <div className="space-y-4">
          <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 uppercase tracking-widest inline-block rounded-md">
            {post.meta.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-text-primary leading-tight">
            {post.meta.title}
          </h1>
          <p className="font-mono text-xs text-text-secondary">
            Published on: {post.meta.date}
          </p>
        </div>

        {/* Dynamic MDX Content */}
        <article className="space-y-6 pt-6 border-t border-border/50">
          <MDXRemote source={post.content} components={components} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
