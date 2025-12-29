import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import styles from './page.module.css';

export default function Careers() {
  return (
    <div className={styles.careersPage}>
      {/* Hero */}
      <section className={styles.header}>
        <HeroBackground />
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.tag}>Careers</div>
            <h1>Join Force Multiply</h1>
            <p className={styles.subtitle}>
              Work on high-impact technology projects for financial services firms.
            </p>
          </div>
        </div>
      </section>

      {/* Career Path */}
      <section className={styles.path}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>Career paths</h2>
            <p>Opportunities across technical consulting and leadership</p>
          </div>
          <div className={styles.pathGrid}>
            <div className={`${styles.pathCard} scroll-animate-scale`}>
              <div className={styles.pathNumber}>01</div>
              <h3>Consulting</h3>
              <p>Data, automation, and AI projects on Salesforce and Microsoft platforms for financial services clients.</p>
            </div>
            <div className={`${styles.pathCard} scroll-animate-scale animate-delay-1`}>
              <div className={styles.pathNumber}>02</div>
              <h3>Technical Leadership</h3>
              <p>Architecture, strategy, and technical program management.</p>
            </div>
            <div className={`${styles.pathCard} scroll-animate-scale animate-delay-2`}>
              <div className={styles.pathNumber}>03</div>
              <h3>Client Engagement</h3>
              <p>Lead client relationships and drive business development.</p>
            </div>
            <div className={`${styles.pathCard} scroll-animate-scale animate-delay-3`}>
              <div className={styles.pathNumber}>04</div>
              <h3>Growth & Development</h3>
              <p>Leadership opportunities as the firm grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className={styles.why}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>Why we're different</h2>
          </div>
          <div className={`${styles.whyGrid} stagger-children`}>
            <div className={styles.whyCard}>
              <div className={styles.cardNumber}>01</div>
              <h3>Real Impact</h3>
              <p>Work on projects that move the needle for clients.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.cardNumber}>02</div>
              <h3>Hands-on Work</h3>
              <p>Build and operate, not just advise.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.cardNumber}>03</div>
              <h3>Diverse Projects</h3>
              <p>Work across data, automation, AI, Salesforce, and Microsoft platforms.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.cardNumber}>04</div>
              <h3>Growth Opportunities</h3>
              <p>Learn, lead, and advance your career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className={styles.team}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>What we look for</h2>
          </div>
          <div className={`${styles.teamGrid} stagger-children`}>
            <div className={`${styles.teamCard} hover-lift`}>
              <h3>Practitioners</h3>
              <p>You build things, not just advise.</p>
            </div>
            <div className={`${styles.teamCard} hover-lift`}>
              <h3>Business-minded</h3>
              <p>You connect tech to business outcomes.</p>
            </div>
            <div className={`${styles.teamCard} hover-lift`}>
              <h3>Driven</h3>
              <p>You want to make an impact and grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={`${styles.ctaContent} scroll-animate-scale`}>
            <h2>Join us</h2>
            <p>
              Send your resume and tell us what interests you.
            </p>
            <Link href="/contact" className={`${styles.ctaButton} hover-lift btn-press`}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
