import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the root directory for news MDX files
const NEWS_DIR = path.join(process.cwd(), 'content/news');

// Define the TypeScript interface for your YAML frontmatter
export interface NewsFrontmatter {
  title: string;
  date: string;
  category: string;
  tags: string[];
  [key: string]: any;
}

export interface NewsPost {
  slug: string;
  meta: NewsFrontmatter;
  content: string;
}

/**
 * Retrieves all MDX filenames from the news directory.
 */
export const getNewsSlugs = (): string[] => {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs.readdirSync(NEWS_DIR).filter((file) => file.endsWith('.mdx'));
};

/**
 * Parses a single MDX file by slug to extract frontmatter and content.
 */
export const getNewsBySlug = (slug: string): NewsPost => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(NEWS_DIR, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  return {
    slug: realSlug,
    meta: data as NewsFrontmatter,
    content,
  };
};

/**
 * Retrieves all news posts and sorts them in descending order (newest first).
 */
export const getAllNews = (): NewsPost[] => {
  const slugs = getNewsSlugs();
  const posts = slugs
    .map((slug) => getNewsBySlug(slug))
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
    
  return posts;
};
