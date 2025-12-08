import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>AI • Cloud • Technology</div>
            <h1>Move fast. Unlock value from AI and technology.</h1>
            <p className={styles.heroSubtitle}>
              Practical AI implementations, cloud platform optimization, and technical leadership. No jargon. No endless decks. Just results.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Get Started
              </Link>
              <Link href="/services" className={styles.buttonSecondary}>
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>$5M+</div>
              <div className={styles.statLabel}>Portfolio Revenue</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>What we do</h2>
            <p>Two paths. One mission. Deliver value fast.</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Enterprise Services</h3>
              <p>
                AI strategy, Salesforce optimization, and cloud architecture. We unlock value from your technology investments.
              </p>
              <Link href="/services" className={styles.serviceLink}>
                Explore Services →
              </Link>
            </div>
            <div className={styles.serviceCard}>
              <h3>Venture Portfolio</h3>
              <p>
                We acquire and modernize service businesses using CRM, AI, and automation.
              </p>
              <Link href="/ventures" className={styles.serviceLink}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className={styles.industries}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Financial services expertise</h2>
            <p>Deep domain knowledge where technology and compliance intersect</p>
          </div>
          <div className={styles.industriesGrid}>
            <div className={styles.industryCard}>
              <h3>Banking & Financial Institutions</h3>
              <p>Commercial banks, credit unions, regional banks</p>
            </div>
            <div className={styles.industryCard}>
              <h3>Wealth & Asset Management</h3>
              <p>RIAs, family offices, asset managers, wealth advisors</p>
            </div>
            <div className={styles.industryCard}>
              <h3>Investment Banking & PE</h3>
              <p>Investment banks, private equity firms, venture capital</p>
            </div>
            <div className={styles.industryCard}>
              <h3>Payments & Fintech</h3>
              <p>Payment processors, digital banking, financial technology</p>
            </div>
            <div className={styles.industryCard}>
              <h3>Trading & Capital Markets</h3>
              <p>Broker-dealers, trading firms, market makers</p>
            </div>
            <div className={styles.industryCard}>
              <h3>Compliance & RegTech</h3>
              <p>Regulatory technology, compliance platforms, risk management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className={styles.differentiators}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Why we're different</h2>
          </div>
          <div className={styles.diffGrid}>
            <div className={styles.diffCard}>
              <div className={styles.diffNumber}>01</div>
              <h3>Practitioners, not theorists</h3>
              <p>We operate real businesses. We know what works in production.</p>
            </div>
            <div className={styles.diffCard}>
              <div className={styles.diffNumber}>02</div>
              <h3>Speed matters</h3>
              <p>Fast onboarding. Quick wins. Iterative delivery.</p>
            </div>
            <div className={styles.diffCard}>
              <div className={styles.diffNumber}>03</div>
              <h3>Ownership mindset</h3>
              <p>We're invested in outcomes, not just hours billed.</p>
            </div>
            <div className={styles.diffCard}>
              <div className={styles.diffNumber}>04</div>
              <h3>No jargon</h3>
              <p>Clear communication. Honest assessments. Real results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to move faster?</h2>
            <p>
              Whether you're an enterprise client or a business owner, let's talk about unlocking value.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
