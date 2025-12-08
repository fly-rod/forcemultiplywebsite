import Link from 'next/link';
import styles from './page.module.css';

export default function Ventures() {
  return (
    <div className={styles.venturesPage}>
      <section className={styles.header}>
        <div className="container">
          <h1>Small Business Ventures</h1>
          <p className={styles.subtitle}>
            Force Multiply acquires, modernizes, and operates service-based businesses—creating ownership opportunities for our team while building a portfolio of stable, cash-producing assets.
          </p>
        </div>
      </section>

      <section className={styles.model}>
        <div className="container">
          <h2>Our Acquisition Model</h2>
          <div className={styles.modelGrid}>
            <div className={styles.modelCard}>
              <h3>Target Businesses</h3>
              <p>
                We acquire service-based businesses generating <strong>$500K–$5M</strong> in annual revenue. Focus on home services (HVAC, plumbing, flooring), B2B services, and local/regional businesses with outdated operations.
              </p>
            </div>
            <div className={styles.modelCard}>
              <h3>Majority Stake</h3>
              <p>
                We acquire majority ownership positions, ensuring control and alignment with our long-term vision for operational improvement and growth.
              </p>
            </div>
            <div className={styles.modelCard}>
              <h3>Operational Improvement</h3>
              <p>
                Apply enterprise technology to small business operations. CRM systems, automation, AI tools, and modern business processes.
              </p>
            </div>
            <div className={styles.modelCard}>
              <h3>Portfolio Operators</h3>
              <p>
                Assign Force Multiply team members as operators who gain equity in portfolio companies—building wealth through ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.value}>
        <div className="container">
          <h2>Value Creation Strategy</h2>
          <p className={styles.valueIntro}>
            We modernize operations and unlock value through technology, systems, and process improvement.
          </p>
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>01</div>
              <h3>Technology Modernization</h3>
              <p>
                Implement CRM systems (Salesforce), accounting automation, scheduling software, and digital customer engagement tools. Bring enterprise-grade systems to small business operations.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>02</div>
              <h3>AI & Automation</h3>
              <p>
                Apply AI to customer service, scheduling optimization, pricing, and operations. Automate repetitive tasks and improve efficiency across the business.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>03</div>
              <h3>Process & Operations</h3>
              <p>
                Document and optimize core processes. Build scalable systems that reduce owner dependency and enable growth beyond current capacity.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>04</div>
              <h3>Financial Performance</h3>
              <p>
                Improve margins through better pricing, operational efficiency, and cost management. Turn businesses into stable, cash-producing assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectors}>
        <div className="container">
          <h2>Target Sectors</h2>
          <div className={styles.sectorsGrid}>
            <div className={styles.sectorCard}>
              <h3>Home Services</h3>
              <ul>
                <li>HVAC installation and repair</li>
                <li>Plumbing services</li>
                <li>Flooring and remodeling</li>
                <li>Electrical services</li>
                <li>Landscaping and maintenance</li>
              </ul>
            </div>
            <div className={styles.sectorCard}>
              <h3>B2B Services</h3>
              <ul>
                <li>Professional services firms</li>
                <li>Facility management</li>
                <li>Commercial cleaning</li>
                <li>Business consulting</li>
                <li>Specialized services</li>
              </ul>
            </div>
            <div className={styles.sectorCard}>
              <h3>Local & Regional</h3>
              <ul>
                <li>Service businesses with established customer base</li>
                <li>Owner-operator businesses ready for transition</li>
                <li>Companies with growth potential</li>
                <li>Businesses with outdated systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.forOwners}>
        <div className="container">
          <h2>For Business Owners</h2>
          <p className={styles.forOwnersIntro}>
            Considering a transition? We offer a stable exit strategy with operational expertise to ensure your business continues to thrive.
          </p>
          <div className={styles.forOwnersGrid}>
            <div className={styles.forOwnersCard}>
              <h3>Stable Transition</h3>
              <p>
                We provide fair valuations and smooth transitions. Work with operators who understand service businesses and respect what you've built.
              </p>
            </div>
            <div className={styles.forOwnersCard}>
              <h3>Operational Support</h3>
              <p>
                Access to enterprise technology, systems, and processes. We bring resources and expertise to help your business grow.
              </p>
            </div>
            <div className={styles.forOwnersCard}>
              <h3>Legacy Protection</h3>
              <p>
                We preserve what works and improve what doesn't. Your team, customers, and reputation remain intact through the transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Interested in discussing an acquisition?</h2>
          <p>
            Whether you're a business owner considering an exit or know of a business that might be a good fit, let's talk.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
