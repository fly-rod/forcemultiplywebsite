import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import styles from './page.module.css';
import type { Metadata } from 'next';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Force Multiply Consulting`,
    description: post.description,
    keywords: post.keywords,
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Force Multiply Consulting',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Force Multiply Consulting',
    },
    image: post.image || undefined,
    keywords: post.keywords?.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className={styles.article}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>{post.title}</h1>
            <div className={styles.meta}>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.author && <span className={styles.author}>By {post.author}</span>}
            </div>
            {post.keywords && post.keywords.length > 0 && (
              <div className={styles.tags}>
                {post.keywords.map((keyword) => (
                  <span key={keyword} className={styles.tag}>
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </header>

          {post.image && (
            <div className={styles.featuredImage}>
              <img src={post.image} alt={post.title} />
            </div>
          )}

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          <footer className={styles.footer}>
            <a href="/blog" className={styles.backLink}>
              ← Back to Blog
            </a>
          </footer>
        </div>
      </article>
    </>
  );
}

// Simple markdown to HTML converter (you can enhance this or use a library)
function renderMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
    // Paragraphs
    .split('\n\n')
    .map(para => `<p>${para.replace(/\n/g, '<br>')}</p>`)
    .join('\n');
}
