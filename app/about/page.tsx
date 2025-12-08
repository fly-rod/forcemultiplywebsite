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
            <h1>Built on a flywheel</h1>
            <p className={styles.subtitle}>
              Enterprise services fund acquisitions. Portfolio companies provide stability. Both paths create value.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our mission</h2>
            <p>Help organizations succeed with AI and cloud technology while building a portfolio of modernized businesses</p>
          </div>
        </div>
      </section>

      {/* Flywheel Model */}
      <section className={styles.model}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>The flywheel model</h2>
            <p>Each part strengthens the others</p>
          </div>
          <div className={styles.modelGrid}>
            <div className={styles.modelCard}>
              <div className={styles.cardNumber}>01</div>
              <h3>Enterprise Services</h3>
              <p>High-value projects fund acquisitions.</p>
            </div>
            <div className={styles.modelCard}>
              <div className={styles.cardNumber}>02</div>
              <h3>Acquisitions</h3>
              <p>Service businesses modernized with tech.</p>
            </div>
            <div className={styles.modelCard}>
              <div className={styles.cardNumber}>03</div>
              <h3>Cash Flow</h3>
              <p>Stable operations, reduced dependency on project cycles.</p>
            </div>
            <div className={styles.modelCard}>
              <div className={styles.cardNumber}>04</div>
              <h3>Growth</h3>
              <p>Reinvest and scale both sides of the business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.leader}>
        <div className="container">
          <div className={styles.leaderContent}>
            <div className={styles.leaderInfo}>
              <h2>Ward Wood</h2>
              <p className={styles.leaderTitle}>Founder & CEO</p>
            </div>
            <div className={styles.leaderText}>
              <p>
                Ward leads strategy, client work, and the connection between enterprise services and portfolio acquisitions. Deep technical expertise meets business operations—building systems that work in the real world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>What sets us apart</h2>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Practitioners</h3>
              <p>We operate real businesses, not just advise.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Results-driven</h3>
              <p>Practical solutions, not theoretical frameworks.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Long-term Partners</h3>
              <p>Building lasting relationships, invested in outcomes.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Fast Delivery</h3>
              <p>Move quickly and deliver value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className={styles.approach}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>How we work</h2>
          </div>
          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <h3>Enterprise Clients</h3>
              <p>Unlock value from existing platforms. Hands-on delivery.</p>
            </div>
            <div className={styles.approachCard}>
              <h3>Team Members</h3>
              <p>Career growth across enterprise services and operations.</p>
            </div>
            <div className={styles.approachCard}>
              <h3>Acquisitions</h3>
              <p>Stable transition. Enterprise tools and expertise.</p>
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
          <div className={styles.ctaContent}>
            <h2>Work with us</h2>
            <p>
              Enterprise client, team member, or business owner—let's talk.
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
