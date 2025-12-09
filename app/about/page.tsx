import Link from 'next/link';
import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero */}
      <section className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.tag}>About Us</div>
            <h1>Technology consulting that delivers</h1>
            <p className={styles.subtitle}>
              We're practitioners who build and operate, not theorists who write reports.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>Our mission</h2>
            <p>Help organizations succeed with AI and cloud technology in complex, regulated environments</p>
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
            <div className={styles.leaderInfo}>
              <h2>Ward Wood</h2>
              <p className={styles.leaderTitle}>Founder & CEO</p>
            </div>
            <div className={styles.leaderText}>
              <p>
                Ward leads strategy, client work, and Force Multiply's vision for delivering practical technology solutions. Deep technical expertise meets business operations—building systems that work in the real world.
              </p>
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
              <h3>Practitioners</h3>
              <p>We operate real businesses, not just advise.</p>
            </div>
            <div className={`${styles.valueCard} hover-lift`}>
              <h3>Results-driven</h3>
              <p>Practical solutions, not theoretical frameworks.</p>
            </div>
            <div className={`${styles.valueCard} hover-lift`}>
              <h3>Long-term Partners</h3>
              <p>Building lasting relationships, invested in outcomes.</p>
            </div>
            <div className={`${styles.valueCard} hover-lift`}>
              <h3>Fast Delivery</h3>
              <p>Move quickly and deliver value.</p>
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
              <h3>Financial Services</h3>
              <p>Banks, wealth managers, fintechs, and trading firms in complex, regulated environments.</p>
            </div>
            <div className={`${styles.approachCard} scroll-animate hover-lift animate-delay-2`}>
              <h3>Technology Leaders</h3>
              <p>CTOs, VPs of Engineering, and technology teams driving innovation.</p>
            </div>
            <div className={`${styles.approachCard} scroll-animate hover-lift animate-delay-3`}>
              <h3>Business Executives</h3>
              <p>CEOs and business leaders looking to unlock value from technology investments.</p>
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
            <h2>Work with us</h2>
            <p>
              Enterprise client, team member, or business owner—let's talk.
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
