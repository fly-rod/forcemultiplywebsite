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
          <div className={`${styles.statsGrid} stagger-children`}>
            <div className={`${styles.statCard} scroll-animate-scale`}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={`${styles.statCard} scroll-animate-scale`}>
              <div className={styles.statNumber}>3</div>
              <div className={styles.statLabel}>Core Platforms</div>
            </div>
            <div className={`${styles.statCard} scroll-animate-scale`}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Financial Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className={styles.services}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>What we do</h2>
            <p>Enterprise technology consulting for financial services</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={`${styles.serviceCard} scroll-animate hover-lift`}>
              <h3>AI Strategy & Implementation</h3>
              <p>
                Production-ready AI solutions that deliver real business value. Strategy, implementation, and integration.
              </p>
              <Link href="/services" className={`${styles.serviceLink} transition-smooth`}>
                Learn More →
              </Link>
            </div>
            <div className={`${styles.serviceCard} scroll-animate hover-lift animate-delay-2`}>
              <h3>Cloud & Platform</h3>
              <p>
                Salesforce optimization, Azure, AWS, and GCP. We help you get more from your existing investments.
              </p>
              <Link href="/services" className={`${styles.serviceLink} transition-smooth`}>
                Explore Services →
              </Link>
            </div>
            <div className={`${styles.serviceCard} scroll-animate hover-lift animate-delay-3`}>
              <h3>Technical Advisory</h3>
              <p>
                Architecture, program management, and strategic guidance for complex technology initiatives.
              </p>
              <Link href="/services" className={`${styles.serviceLink} transition-smooth`}>
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className={styles.industries}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>Financial services expertise</h2>
            <p>Deep domain knowledge where technology and compliance intersect</p>
          </div>
          <div className={styles.industriesGrid}>
            <div className={`${styles.industryCard} scroll-animate hover-lift`}>
              <h3>Banking & Financial Institutions</h3>
              <p>Commercial banks, credit unions, regional banks</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-1`}>
              <h3>Wealth & Asset Management</h3>
              <p>RIAs, family offices, asset managers, wealth advisors</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-2`}>
              <h3>Investment Banking & PE</h3>
              <p>Investment banks, private equity firms, venture capital</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-3`}>
              <h3>Payments & Fintech</h3>
              <p>Payment processors, digital banking, financial technology</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-4`}>
              <h3>Trading & Capital Markets</h3>
              <p>Broker-dealers, trading firms, market makers</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-5`}>
              <h3>Compliance & RegTech</h3>
              <p>Regulatory technology, compliance platforms, risk management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className={styles.differentiators}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>Why we're different</h2>
          </div>
          <div className={styles.diffGrid}>
            <div className={`${styles.diffCard} scroll-animate-scale`}>
              <div className={styles.diffNumber}>01</div>
              <h3>Practitioners, not theorists</h3>
              <p>We operate real businesses. We know what works in production.</p>
            </div>
            <div className={`${styles.diffCard} scroll-animate-scale animate-delay-1`}>
              <div className={styles.diffNumber}>02</div>
              <h3>Speed matters</h3>
              <p>Fast onboarding. Quick wins. Iterative delivery.</p>
            </div>
            <div className={`${styles.diffCard} scroll-animate-scale animate-delay-2`}>
              <div className={styles.diffNumber}>03</div>
              <h3>Ownership mindset</h3>
              <p>We're invested in outcomes, not just hours billed.</p>
            </div>
            <div className={`${styles.diffCard} scroll-animate-scale animate-delay-3`}>
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
          <div className={`${styles.ctaContent} scroll-animate-scale`}>
            <h2>Ready to move faster?</h2>
            <p>
              Whether you're an enterprise client or a business owner, let's talk about unlocking value.
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
