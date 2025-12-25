'use client';

import Link from 'next/link';
import Icon from '@/components/Icon';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>
              <span className={styles.heroLine1}>Fractional Chief AI,</span>
              <span className={styles.heroLine2}>Technology & Innovation Officers</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Executive-level leadership for AI transformation, technology strategy, and innovation—without the full-time commitment.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Schedule a Call
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
              <div className={styles.statLabel}>Years Senior Leadership</div>
            </div>
            <div className={`${styles.statCard} scroll-animate-scale`}>
              <div className={styles.statNumber}>3</div>
              <div className={styles.statLabel}>Fractional Roles</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className={styles.services}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>What we do</h2>
            <p>Fractional executive leadership and hands-on consulting</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={`${styles.serviceCard} scroll-animate hover-lift`}>
              <div className={styles.serviceIcon}>
                <Icon name="users" size={48} />
              </div>
              <h3>Fractional Executive Leadership</h3>
              <p>
                Part-time Chief AI Officer, CTO, or Chief Innovation Officer. Executive guidance, without the full-time cost.
              </p>
              <Link href="/services" className={`${styles.serviceLink} transition-smooth`}>
                Learn More →
              </Link>
            </div>
            <div className={`${styles.serviceCard} scroll-animate hover-lift animate-delay-2`}>
              <div className={styles.serviceIcon}>
                <Icon name="ai-brain" size={48} />
              </div>
              <h3>AI Strategy & Implementation</h3>
              <p>
                AI roadmaps, automation, and production AI systems that deliver real results.
              </p>
              <Link href="/services" className={`${styles.serviceLink} transition-smooth`}>
                Explore Services →
              </Link>
            </div>
            <div className={`${styles.serviceCard} scroll-animate hover-lift animate-delay-3`}>
              <div className={styles.serviceIcon}>
                <Icon name="cloud" size={48} />
              </div>
              <h3>Technology & Platform Consulting</h3>
              <p>
                Salesforce, Microsoft, cloud architecture, and technical program management.
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
            <h2>Industries we serve</h2>
            <p>AI and technology leadership for companies ready to transform</p>
          </div>
          <div className={styles.industriesGrid}>
            <div className={`${styles.industryCard} scroll-animate hover-lift`}>
              <div className={styles.industryIcon}>
                <Icon name="rocket" size={32} />
              </div>
              <h3>Technology & SaaS</h3>
              <p>Software companies, platforms, startups scaling up</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-1`}>
              <div className={styles.industryIcon}>
                <Icon name="shield" size={32} />
              </div>
              <h3>Financial Services</h3>
              <p>Banks, wealth management, fintech, private equity</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-2`}>
              <div className={styles.industryIcon}>
                <Icon name="briefcase" size={32} />
              </div>
              <h3>Professional Services</h3>
              <p>Consulting, legal, accounting, advisory firms</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-3`}>
              <div className={styles.industryIcon}>
                <Icon name="check-circle" size={32} />
              </div>
              <h3>Healthcare & Life Sciences</h3>
              <p>Health tech, biotech, medical devices, providers</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-4`}>
              <div className={styles.industryIcon}>
                <Icon name="lightning" size={32} />
              </div>
              <h3>Manufacturing & Industrial</h3>
              <p>Manufacturing, logistics, supply chain, industrial tech</p>
            </div>
            <div className={`${styles.industryCard} scroll-animate hover-lift animate-delay-5`}>
              <div className={styles.industryIcon}>
                <Icon name="target" size={32} />
              </div>
              <h3>Private Equity Portfolio</h3>
              <p>PE-backed operating companies seeking technology leadership</p>
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
                <Icon name="users" size={32} />
              </div>
              <div className={styles.diffNumber}>01</div>
              <h3>Executive experience</h3>
              <p>Senior leadership experience working with executives and boards to drive transformation.</p>
            </div>
            <div className={`${styles.diffCard} scroll-animate-scale animate-delay-1`}>
              <div className={styles.diffIcon}>
                <Icon name="code" size={32} />
              </div>
              <div className={styles.diffNumber}>02</div>
              <h3>Practitioners, not theorists</h3>
              <p>We build and operate, not just advise. We know what works in production.</p>
            </div>
            <div className={`${styles.diffCard} scroll-animate-scale animate-delay-2`}>
              <div className={styles.diffIcon}>
                <Icon name="lightning" size={32} />
              </div>
              <div className={styles.diffNumber}>03</div>
              <h3>Flexible engagement</h3>
              <p>Part-time leadership, full-time impact. Scale up or down as needed.</p>
            </div>
            <div className={`${styles.diffCard} scroll-animate-scale animate-delay-3`}>
              <div className={styles.diffIcon}>
                <Icon name="target" size={32} />
              </div>
              <div className={styles.diffNumber}>04</div>
              <h3>Outcome-focused</h3>
              <p>Invested in your success, not just hours billed. Real results, no jargon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={`${styles.ctaContent} scroll-animate-scale`}>
            <h2>Ready for AI and technology leadership?</h2>
            <p>
              Let's talk about how fractional executive leadership can accelerate your transformation.
            </p>
            <Link href="/contact" className={`${styles.ctaButton} hover-lift btn-press`}>
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
