import { getAllNews } from "@/utils/mdx";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 60; // Revalidate dynamic content changes

export default async function NewsFeedPage() {
  const posts = getAllNews();

  return (
    <div className="bg-bg min-h-screen text-text-primary">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-32 space-y-12 select-none">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 uppercase tracking-widest inline-block rounded-md">
              ACT VI // JOURNAL
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-text-primary">
              Updates & Log Files
            </h1>
            <p className="font-mono text-xs md:text-sm text-text-secondary">
              * Micro-blog tracking recent software fixes, client updates, and creative tech runs.
            </p>
          </div>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/news/${post.slug}`}
              className="group border border-border bg-surface p-6 flex flex-col justify-between transition-all duration-300 hover:rotate-1 hover:shadow-xl hover:border-accent rounded-md cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 uppercase tracking-widest rounded-md">
                    {post.meta.category}
                  </span>
                  <span className="font-mono text-[10px] text-text-secondary">
                    {post.meta.date}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold uppercase font-mono text-text-primary group-hover:text-accent transition-colors">
                  {post.meta.title}
                </h2>
                
                <p className="text-xs font-mono text-text-secondary line-clamp-3 leading-relaxed">
                  {post.content.replace(/[#*`\-]/g, "").trim().slice(0, 150)}...
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border flex justify-end">
                <span className="font-mono text-[11px] text-accent font-bold uppercase group-hover:translate-x-1 transition-transform">
                  Read Update →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
