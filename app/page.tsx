'use client';

import Link from 'next/link';
import Icon from '@/components/Icon';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Artificial Intelligence', 'Automation', 'Salesforce', 'Microsoft', 'Data Strategy'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500); // Change word every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>
              <span className={styles.heroLine1}>
                <span className={styles.rotatingWord} key={currentWord}>
                  {words[currentWord]}
                </span>
              </span>
              <span className={styles.heroLine2}>turned into operating leverage</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We help financial services firms generate more output from their teams and technology—without adding headcount or removing what already works.
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
            <p>Deep expertise with platforms such as Salesforce and Microsoft</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={`${styles.serviceCard} scroll-animate hover-lift`}>
              <div className={styles.serviceIcon}>
                <Icon name="ai-brain" size={48} />
              </div>
              <h3>Data, Automation & AI</h3>
              <p>
                Intelligent automation and AI solutions that create operating leverage.
              </p>
              <Link href="/services" className={`${styles.serviceLink} transition-smooth`}>
                Learn More →
              </Link>
            </div>
            <div className={`${styles.serviceCard} scroll-animate hover-lift animate-delay-2`}>
              <div className={styles.serviceIcon}>
                <Icon name="cloud" size={48} />
              </div>
              <h3>Salesforce & Microsoft</h3>
              <p>
                Platform optimization and integration expertise.
              </p>
              <Link href="/services" className={`${styles.serviceLink} transition-smooth`}>
                Explore Services →
              </Link>
            </div>
            <div className={`${styles.serviceCard} scroll-animate hover-lift animate-delay-3`}>
              <div className={styles.serviceIcon}>
                <Icon name="briefcase" size={48} />
              </div>
              <h3>Technical Advisory</h3>
              <p>
                Strategic guidance for complex technology initiatives.
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
            <p>Deep expertise across private equity, PE-backed operating companies, and financial services firms</p>
          </div>
          <div className={styles.industriesGrid}>
            <div className={`${styles.industryCard} scroll-animate hover-lift`}>
              <div className={styles.industryIcon}>
                <Icon name="shield" size={32} />
              </div>
              <h3>Banking & Financial Institutions</h3>
              <p>Commercial banks, credit unions, regional banks</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-1`}>
              <div className={styles.industryIcon}>
                <Icon name="target" size={32} />
              </div>
              <h3>Wealth & Asset Management</h3>
              <p>RIAs, family offices, asset managers, wealth advisors</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-2`}>
              <div className={styles.industryIcon}>
                <Icon name="briefcase" size={32} />
              </div>
              <h3>Investment Banking & PE</h3>
              <p>Investment banks, private equity firms, venture capital</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-3`}>
              <div className={styles.industryIcon}>
                <Icon name="lightning" size={32} />
              </div>
              <h3>Payments & Fintech</h3>
              <p>Payment processors, digital banking, financial technology</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-4`}>
              <div className={styles.industryIcon}>
                <Icon name="rocket" size={32} />
              </div>
              <h3>Trading & Capital Markets</h3>
              <p>Broker-dealers, trading firms, market makers</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-5`}>
              <div className={styles.industryIcon}>
                <Icon name="check-circle" size={32} />
              </div>
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
              <div className={styles.diffIcon}>
                <Icon name="code" size={32} />
              </div>
              <div className={styles.diffNumber}>01</div>
              <h3>Practitioners, not theorists</h3>
              <p>We operate real businesses. We know what works in production.</p>
            </div>
            <div className={`${styles.diffCard} scroll-animate-scale animate-delay-1`}>
              <div className={styles.diffIcon}>
                <Icon name="lightning" size={32} />
              </div>
              <div className={styles.diffNumber}>02</div>
              <h3>Speed matters</h3>
              <p>Fast onboarding. Quick wins. Iterative delivery.</p>
            </div>
            <div className={`${styles.diffCard} scroll-animate-scale animate-delay-2`}>
              <div className={styles.diffIcon}>
                <Icon name="target" size={32} />
              </div>
              <div className={styles.diffNumber}>03</div>
              <h3>Ownership mindset</h3>
              <p>We're invested in outcomes, not just hours billed.</p>
            </div>
            <div className={`${styles.diffCard} scroll-animate-scale animate-delay-3`}>
              <div className={styles.diffIcon}>
                <Icon name="message" size={32} />
              </div>
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
            <h2>Ready to unlock operating leverage?</h2>
            <p>
              Let's talk about getting more value from your technology investments.
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
