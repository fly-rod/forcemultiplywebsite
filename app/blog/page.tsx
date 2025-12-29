import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import HeroBackground from '@/components/HeroBackground';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Force Multiply Consulting',
  description: 'Insights, strategies, and expertise on business growth, sales optimization, and consulting best practices.',
  openGraph: {
    title: 'Blog | Force Multiply Consulting',
    description: 'Insights, strategies, and expertise on business growth, sales optimization, and consulting best practices.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <HeroBackground />
        <h1>Blog</h1>
        <p>Insights, strategies, and expertise to help your business grow</p>
      </div>

      {posts.length === 0 ? (
        <div className={styles.empty}>
          <p>No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
              {post.image && (
                <div className={styles.imageWrapper}>
                  <img src={post.image} alt={post.title} className={styles.image} />
                </div>
              )}
              <div className={styles.content}>
                <h2>{post.title}</h2>
                <p className={styles.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className={styles.description}>{post.description}</p>
                {post.keywords && post.keywords.length > 0 && (
                  <div className={styles.tags}>
                    {post.keywords.slice(0, 3).map((keyword) => (
                      <span key={keyword} className={styles.tag}>
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
