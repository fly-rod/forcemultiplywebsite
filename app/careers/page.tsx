import Link from 'next/link';
import styles from './page.module.css';

export default function Careers() {
  return (
    <div className={styles.careersPage}>
      {/* Hero */}
      <section className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.tag}>Careers</div>
            <h1>From consultant to owner</h1>
            <p className={styles.subtitle}>
              Build wealth through equity, not just billable hours.
            </p>
          </div>
        </div>
      </section>

      {/* Career Path */}
      <section className={styles.path}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Your path</h2>
            <p>Four stages from consultant to business owner</p>
          </div>
          <div className={styles.pathGrid}>
            <div className={styles.pathCard}>
              <div className={styles.pathIcon}>💼</div>
              <div className={styles.pathNumber}>01</div>
              <h3>Consultant</h3>
              <p>Enterprise projects. AI, Salesforce, cloud platforms.</p>
            </div>
            <div className={styles.pathCard}>
              <div className={styles.pathIcon}>🎓</div>
              <div className={styles.pathNumber}>02</div>
              <h3>Learn Operations</h3>
              <p>How we acquire and operate small businesses.</p>
            </div>
            <div className={styles.pathCard}>
              <div className={styles.pathIcon}>⚡</div>
              <div className={styles.pathNumber}>03</div>
              <h3>Operate</h3>
              <p>Run a portfolio company. Drive growth. Build equity.</p>
            </div>
            <div className={styles.pathCard}>
              <div className={styles.pathIcon}>📈</div>
              <div className={styles.pathNumber}>04</div>
              <h3>Build Wealth</h3>
              <p>Equity ownership. Business appreciation. Cash flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className={styles.why}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Why we're different</h2>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.cardNumber}>01</div>
              <h3>Ownership</h3>
              <p>Equity in portfolio companies, not just salary.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.cardNumber}>02</div>
              <h3>Operators</h3>
              <p>Run real businesses, not just advise on them.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.cardNumber}>03</div>
              <h3>Diverse</h3>
              <p>Enterprise consulting + small business operations.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.cardNumber}>04</div>
              <h3>Supported</h3>
              <p>Backed by team, capital, and infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className={styles.roles}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Current opportunities</h2>
          </div>
          <div className={styles.rolesGrid}>
            <div className={styles.roleCard}>
              <div className={styles.roleHeader}>
                <h3>Salesforce Consultant</h3>
                <span className={styles.roleTrack}>Consulting</span>
              </div>
              <p>Optimize Salesforce for enterprise clients. 3-5 years experience.</p>
              <div className={styles.roleSkills}>
                <span>Salesforce</span>
                <span>Integration</span>
                <span>Architecture</span>
              </div>
            </div>
            <div className={styles.roleCard}>
              <div className={styles.roleHeader}>
                <h3>AI Solutions Architect</h3>
                <span className={styles.roleTrack}>Consulting</span>
              </div>
              <p>Design and implement AI for enterprises. 5+ years experience.</p>
              <div className={styles.roleSkills}>
                <span>AI/ML</span>
                <span>Cloud</span>
                <span>Architecture</span>
              </div>
            </div>
            <div className={styles.roleCard}>
              <div className={styles.roleHeader}>
                <h3>Cloud Platform Engineer</h3>
                <span className={styles.roleTrack}>Consulting</span>
              </div>
              <p>Build and optimize cloud infrastructure. 3+ years experience.</p>
              <div className={styles.roleSkills}>
                <span>Azure/AWS/GCP</span>
                <span>IaC</span>
                <span>DevOps</span>
              </div>
            </div>
            <div className={styles.roleCard}>
              <div className={styles.roleHeader}>
                <h3>Portfolio Operations</h3>
                <span className={styles.roleTrack}>Ventures</span>
              </div>
              <p>Manage portfolio companies. Path to equity ownership.</p>
              <div className={styles.roleSkills}>
                <span>Operations</span>
                <span>P&L</span>
                <span>Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className={styles.team}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>What we look for</h2>
          </div>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <span className={styles.teamIcon}>🛠️</span>
              <h3>Practitioners</h3>
              <p>You build things, not just advise.</p>
            </div>
            <div className={styles.teamCard}>
              <span className={styles.teamIcon}>💡</span>
              <h3>Business-minded</h3>
              <p>You connect tech to outcomes.</p>
            </div>
            <div className={styles.teamCard}>
              <span className={styles.teamIcon}>🎯</span>
              <h3>Ownership mindset</h3>
              <p>You want to build, not just bill.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Join us</h2>
            <p>
              Send your resume and tell us what interests you.
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
