import Link from 'next/link';
import Image from 'next/image';
import HeroBackground from '@/components/HeroBackground';
import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero */}
      <section className={styles.header}>
        <HeroBackground />
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.tag}>About Us</div>
            <h1>AI & Technology Leadership</h1>
            <p className={styles.subtitle}>
              Fractional executive leadership and hands-on consulting to help companies navigate AI transformation and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>Our mission</h2>
            <p>We provide fractional Chief AI Officers, CTOs, and Chief Innovation Officers to companies ready to transform. Whether you need executive leadership to guide AI adoption, hands-on consulting to implement new technologies, or both—we bring senior leadership experience without the full-time commitment.</p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className={styles.model}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>Our approach</h2>
            <p>How we deliver value</p>
          </div>
          <div className={styles.modelGrid}>
            <div className={`${styles.modelCard} scroll-animate-scale`}>
              <div className={styles.cardNumber}>01</div>
              <h3>Deep Discovery</h3>
              <p>Understand your business, technology, and goals before proposing solutions.</p>
            </div>
            <div className={`${styles.modelCard} scroll-animate-scale animate-delay-1`}>
              <div className={styles.cardNumber}>02</div>
              <h3>Hands-on Delivery</h3>
              <p>Tiger teams that build and implement, not just advise.</p>
            </div>
            <div className={`${styles.modelCard} scroll-animate-scale animate-delay-2`}>
              <div className={styles.cardNumber}>03</div>
              <h3>Knowledge Transfer</h3>
              <p>Your team gets stronger. Lasting impact beyond the engagement.</p>
            </div>
            <div className={`${styles.modelCard} scroll-animate-scale animate-delay-3`}>
              <div className={styles.cardNumber}>04</div>
              <h3>Ongoing Partnership</h3>
              <p>Long-term relationships built on trust and results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.leader}>
        <div className="container">
          <div className={`${styles.leaderContent} scroll-animate`}>
            <div className={styles.leaderPhoto}>
              <Image
                src="/resources/images/ward headshot.png"
                alt="Ward Wood"
                width={300}
                height={300}
                className={styles.photoImage}
              />
            </div>
            <div className={styles.leaderInfo}>
              <h2>Ward Wood</h2>
              <p className={styles.leaderTitle}>Founder & CEO</p>
              <div className={styles.leaderText}>
                <p>
                  Ward brings over a decade of technology leadership experience, advising executives and boards on AI transformation and technology strategy. He works directly with senior leadership to shape AI roadmaps, build technology strategies, and lead implementation. Deep technical expertise meets business acumen—driving real outcomes, not just technology for its own sake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>What sets us apart</h2>
          </div>
          <div className={`${styles.valuesGrid} stagger-children`}>
            <div className={`${styles.valueCard} hover-lift`}>
              <h3>Executive experience</h3>
              <p>Senior leadership experience, not just consulting.</p>
            </div>
            <div className={`${styles.valueCard} hover-lift`}>
              <h3>Practitioners</h3>
              <p>We build and implement, not just advise.</p>
            </div>
            <div className={`${styles.valueCard} hover-lift`}>
              <h3>Flexible commitment</h3>
              <p>Part-time leadership, full-time impact.</p>
            </div>
            <div className={`${styles.valueCard} hover-lift`}>
              <h3>Outcome-focused</h3>
              <p>Invested in your success, not hours billed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className={styles.approach}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>Who we work with</h2>
          </div>
          <div className={styles.approachGrid}>
            <div className={`${styles.approachCard} scroll-animate hover-lift`}>
              <h3>Growth Companies</h3>
              <p>Startups and scale-ups ready to professionalize AI and technology leadership.</p>
            </div>
            <div className={`${styles.approachCard} scroll-animate hover-lift animate-delay-2`}>
              <h3>Mid-Market & Enterprise</h3>
              <p>Established companies seeking AI transformation and technology modernization.</p>
            </div>
            <div className={`${styles.approachCard} scroll-animate hover-lift animate-delay-3`}>
              <h3>Private Equity Portfolio</h3>
              <p>PE-backed companies needing technology leadership to drive value creation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className={styles.legal}>
        <div className="container">
          <div className={styles.legalContent}>
            <p>
              <strong>Legal Entity:</strong> ForceX Consulting LLC &nbsp;|&nbsp; <strong>DBA:</strong> Force Multiply
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={`${styles.ctaContent} scroll-animate-scale`}>
            <h2>Ready for AI leadership?</h2>
            <p>
              Let's discuss how fractional executive leadership can accelerate your transformation.
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
