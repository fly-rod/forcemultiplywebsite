'use client';

import Link from 'next/link';
import Icon from '@/components/Icon';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

const heroTags = [
  'Fractional AI & Technology Leadership',
  'Hands-On Development Expertise',
  'Salesforce, Microsoft, AWS and More',
];

export default function Home() {
  const [currentTagIndex, setCurrentTagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagIndex((prev) => (prev + 1) % heroTags.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          {/* Grid pattern */}
          <div className={styles.heroGrid}></div>

          {/* Floating gradient orbs */}
          <div className={styles.heroOrb1}></div>
          <div className={styles.heroOrb2}></div>
          <div className={styles.heroOrb3}></div>

          {/* Mathematical symbols - multiplication theme */}
          <svg className={styles.heroSymbol1} viewBox="0 0 100 100">
            <text x="50" y="70" textAnchor="middle" fontSize="80" fill="rgba(255,255,255,0.08)">×</text>
          </svg>
          <svg className={styles.heroSymbol2} viewBox="0 0 100 100">
            <text x="50" y="70" textAnchor="middle" fontSize="60" fill="rgba(255,255,255,0.06)">+</text>
          </svg>

          {/* F+M Braille pattern - hidden logo reference */}
          <div className={styles.heroBraille}>
            <div className={styles.brailleDot}></div>
            <div className={styles.brailleDot}></div>
            <div className={styles.brailleDot}></div>
            <div className={styles.brailleDot}></div>
          </div>

          {/* X-Y Axes - expand X, multiply Y */}
          <svg className={styles.heroAxes} viewBox="0 0 200 200">
            <line x1="20" y1="180" x2="180" y2="180" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
            <line x1="20" y1="180" x2="20" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
            <text x="185" y="185" fontSize="14" fill="rgba(255,255,255,0.15)">x</text>
            <text x="15" y="15" fontSize="14" fill="rgba(255,255,255,0.15)">y</text>
            {/* Growth curve - animated */}
            <path className={styles.heroGrowthCurve} d="M 25 175 Q 80 170 100 120 T 170 30" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none"/>
          </svg>

          {/* Geometric shapes */}
          <div className={styles.heroTriangle}></div>
          <div className={styles.heroSquare}></div>
          <div className={styles.heroHexagon}></div>
          <div className={styles.heroDiamond}></div>
          <div className={styles.heroCircle}></div>
          <div className={styles.heroCross}></div>

          {/* Connecting lines */}
          <svg className={styles.heroLines} viewBox="0 0 400 400">
            <line x1="50" y1="100" x2="350" y2="300" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <line x1="100" y1="350" x2="300" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="5,5"/>
          </svg>

          {/* Pulsing rings */}
          <div className={styles.heroRing1}></div>
          <div className={styles.heroRing2}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroTag} key={currentTagIndex}>
              {heroTags[currentTagIndex]}
            </div>
            <h1>Expand Possibility</h1>
            <p className={styles.heroSubtitle}>
              Fractional executive leadership and hands-on consulting to navigate AI transformation, modernize technology, and drive innovation.
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

      {/* Value Props */}
      <section className={styles.valueProps}>
        <div className="container">
          <div className={styles.valuePropsGrid}>
            <div className={styles.valueProp}>
              <h3>Leading</h3>
              <p>Executive guidance for AI and technology</p>
            </div>
            <div className={styles.valueProp}>
              <h3>Building</h3>
              <p>Hands-on implementation, not just advice</p>
            </div>
            <div className={styles.valueProp}>
              <h3>Multiplying</h3>
              <p>Your team's impact and capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className={styles.services}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>What we do</h2>
            <p>Fractional executive leadership and hands-on AI, data, and technology implementation—multiplying the impact of your teams and investments.</p>
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
