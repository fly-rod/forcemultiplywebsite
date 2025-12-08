import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  image?: string;
  keywords?: string[];
  content: string;
  published: boolean;
}

// Ensure blog directory exists
export function ensureBlogDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

// Get all blog posts
export function getAllPosts(): BlogPost[] {
  ensureBlogDirectory();

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        author: data.author,
        image: data.image,
        keywords: data.keywords || [],
        content,
        published: data.published !== false,
      };
    })
    .filter(post => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return allPostsData;
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  ensureBlogDirectory();

  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      author: data.author,
      image: data.image,
      keywords: data.keywords || [],
      content,
      published: data.published !== false,
    };
  } catch (error) {
    return null;
  }
}

// Save a blog post (used by webhook)
export function savePost(slug: string, frontmatter: any, content: string) {
  ensureBlogDirectory();

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = matter.stringify(content, frontmatter);
  fs.writeFileSync(fullPath, fileContent, 'utf8');
}
