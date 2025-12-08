import Link from 'next/link';
import styles from './page.module.css';

export default function Ventures() {
  return (
    <div className={styles.venturesPage}>
      {/* Hero */}
      <section className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.tag}>Portfolio Strategy</div>
            <h1>Acquiring and modernizing service businesses</h1>
            <p className={styles.subtitle}>
              We acquire established businesses and transform operations with modern technology and AI.
            </p>
          </div>
        </div>
      </section>

      {/* Model */}
      <section className={styles.model}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Acquisition model</h2>
            <p>Majority stakes in established service businesses</p>
          </div>
          <div className={styles.modelGrid}>
            <div className={styles.modelCard}>
              <h3>Target Profile</h3>
              <p className={styles.cardLead}>$500K–$5M revenue</p>
              <ul className={styles.features}>
                <li>Service-based businesses</li>
                <li>Established customer base</li>
                <li>Outdated operations</li>
              </ul>
            </div>
            <div className={styles.modelCard}>
              <h3>Modernize</h3>
              <p className={styles.cardLead}>Technology + Process</p>
              <ul className={styles.features}>
                <li>CRM & automation</li>
                <li>AI implementation</li>
                <li>Systems & workflows</li>
              </ul>
            </div>
            <div className={styles.modelCard}>
              <h3>Operate & Grow</h3>
              <p className={styles.cardLead}>Operational excellence</p>
              <ul className={styles.features}>
                <li>Process optimization</li>
                <li>Margin improvement</li>
                <li>Stable cash flow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Creation */}
      <section className={styles.value}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>How we create value</h2>
          </div>
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>01</div>
              <h3>Technology</h3>
              <p>CRM, automation, digital tools. Enterprise systems for small business.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>02</div>
              <h3>AI & Automation</h3>
              <p>Optimize scheduling, pricing, customer service. Free up human capacity.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>03</div>
              <h3>Process</h3>
              <p>Document, optimize, scale. Reduce owner dependency.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>04</div>
              <h3>Performance</h3>
              <p>Better pricing, efficiency, margins. Cash-producing assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Sectors */}
      <section className={styles.sectors}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Target sectors</h2>
          </div>
          <div className={styles.sectorsGrid}>
            <div className={styles.sectorCard}>
              <h3>Home Services</h3>
              <p>HVAC, plumbing, flooring, electrical, landscaping</p>
            </div>
            <div className={styles.sectorCard}>
              <h3>B2B Services</h3>
              <p>Professional services, facility management, commercial</p>
            </div>
            <div className={styles.sectorCard}>
              <h3>Local & Regional</h3>
              <p>Established businesses ready for transition</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Owners */}
      <section className={styles.forOwners}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>For business owners</h2>
            <p>Considering an exit? We provide stability and operational support.</p>
          </div>
          <div className={styles.ownersGrid}>
            <div className={styles.ownerCard}>
              <div className={styles.stepNumber}>01</div>
              <h3>Fair Valuation</h3>
              <p>Smooth transition with operators who respect what you built.</p>
            </div>
            <div className={styles.ownerCard}>
              <div className={styles.stepNumber}>02</div>
              <h3>Technology & Support</h3>
              <p>Enterprise resources to help your business grow.</p>
            </div>
            <div className={styles.ownerCard}>
              <div className={styles.stepNumber}>03</div>
              <h3>Legacy Protection</h3>
              <p>Team, customers, and reputation remain intact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Let's talk</h2>
            <p>
              Business owner considering an exit? Know a good fit? Get in touch.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
