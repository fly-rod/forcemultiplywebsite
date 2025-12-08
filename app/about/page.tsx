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
              Consulting funds acquisitions. Acquisitions create ownership. Ownership builds wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our mission</h2>
            <p>Help organizations succeed with AI and cloud while creating ownership pathways for our team</p>
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
              <h3>Consulting Revenue</h3>
              <p>Enterprise projects fund acquisitions.</p>
            </div>
            <div className={styles.modelCard}>
              <div className={styles.cardNumber}>02</div>
              <h3>Acquisitions</h3>
              <p>Service businesses modernized with tech.</p>
            </div>
            <div className={styles.modelCard}>
              <div className={styles.cardNumber}>03</div>
              <h3>Cash Flow</h3>
              <p>Stable operations, reduced consulting dependency.</p>
            </div>
            <div className={styles.modelCard}>
              <div className={styles.cardNumber}>04</div>
              <h3>Ownership</h3>
              <p>Team gains equity, builds wealth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.leader}>
        <div className="container">
          <div className={styles.leaderContent}>
            <div className={styles.leaderInfo}>
              <div className={styles.leaderIcon}>👨‍💼</div>
              <h2>Ward Wood</h2>
              <p className={styles.leaderTitle}>Founder & CEO</p>
            </div>
            <div className={styles.leaderText}>
              <p>
                Ward leads strategy, client work, and the connection between consulting and acquisitions. Deep technical expertise meets business operations—building systems that work in the real world.
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
              <span className={styles.valueIcon}>🛠️</span>
              <h3>Practitioners</h3>
              <p>We operate real businesses, not just advise.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>📈</span>
              <h3>Ownership</h3>
              <p>Build wealth through equity, not just hours.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>⚡</span>
              <h3>Results</h3>
              <p>Practical solutions, not theoretical frameworks.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>🤝</span>
              <h3>Partners</h3>
              <p>Long-term relationships, invested in outcomes.</p>
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
              <div className={styles.approachIcon}>🏢</div>
              <h3>Enterprise Clients</h3>
              <p>Unlock value from existing platforms. Hands-on delivery.</p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachIcon}>👥</div>
              <h3>Team Members</h3>
              <p>Consultant-to-Owner path. Build wealth through ownership.</p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachIcon}>🎯</div>
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
              <strong>Legal Entity:</strong> ForceX Consulting LLC &nbsp;|&nbsp; <strong>DBA:</strong> Force Multiply Consulting
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
