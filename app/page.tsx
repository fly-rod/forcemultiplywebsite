import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Innovate through AI and technology. Build wealth through ownership.</h1>
            <p className={styles.heroSubtitle}>
              Force Multiply is a hybrid consulting and investment firm helping organizations succeed through AI adoption and modern cloud technologies—while creating ownership pathways for our team.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Get in Touch
              </Link>
              <Link href="/services" className={styles.buttonSecondary}>
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.flywheel}>
        <div className="container">
          <h2>The Force Multiply Flywheel</h2>
          <p className={styles.flywheelIntro}>
            We operate differently. Our consulting work funds small business acquisitions. Those businesses create stability and ownership opportunities for our team. Our consultants become operators—building wealth beyond billable hours.
          </p>
          <div className={styles.flywheelGrid}>
            <div className={styles.flywheelCard}>
              <div className={styles.cardNumber}>01</div>
              <h3>Consulting Revenue</h3>
              <p>
                High-impact enterprise consulting in AI, Salesforce, and cloud platforms funds strategic acquisitions
              </p>
            </div>
            <div className={styles.flywheelCard}>
              <div className={styles.cardNumber}>02</div>
              <h3>Small Business Acquisitions</h3>
              <p>
                We acquire and operate service businesses generating $500K–$5M in revenue
              </p>
            </div>
            <div className={styles.flywheelCard}>
              <div className={styles.cardNumber}>03</div>
              <h3>Portfolio Operations</h3>
              <p>
                Portfolio companies provide cash flow stability and equity opportunities for our team
              </p>
            </div>
            <div className={styles.flywheelCard}>
              <div className={styles.cardNumber}>04</div>
              <h3>Consultant-to-Owner Path</h3>
              <p>
                Team members build long-term wealth through ownership, not just hourly billing
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className="container">
          <h2>What we do</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Enterprise Consulting</h3>
              <p>
                AI strategy and implementation, Salesforce optimization, cloud architecture across Azure, AWS, and GCP. We help enterprise clients unlock value from their technology investments.
              </p>
              <Link href="/services" className={styles.serviceLink}>
                View Services →
              </Link>
            </div>
            <div className={styles.serviceCard}>
              <h3>Small Business Ventures</h3>
              <p>
                We acquire, modernize, and operate service-based businesses—improving operations through CRM, automation, and AI while creating ownership opportunities for our team.
              </p>
              <Link href="/ventures" className={styles.serviceLink}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.differentiators}>
        <div className="container">
          <h2>Why Force Multiply is different</h2>
          <div className={styles.diffGrid}>
            <div className={styles.diffCard}>
              <h3>Practitioners, not just advisors</h3>
              <p>
                We operate real businesses, not just advise on them. Our team understands what it takes to run operations because we do it every day.
              </p>
            </div>
            <div className={styles.diffCard}>
              <h3>Ownership pathways</h3>
              <p>
                Consultants can build wealth through equity in portfolio companies—creating career paths beyond traditional consulting.
              </p>
            </div>
            <div className={styles.diffCard}>
              <h3>Hands-on delivery</h3>
              <p>
                High-impact, practical solutions rather than theoretical frameworks. We deliver results, not just recommendations.
              </p>
            </div>
            <div className={styles.diffCard}>
              <h3>Trusted partners</h3>
              <p>
                Building long-term relationships with clients and team members. We're here for the long haul.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.industries}>
        <div className="container">
          <h2>Industries we serve</h2>
          <div className={styles.industriesList}>
            <div className={styles.industry}>Financial Services</div>
            <div className={styles.industry}>Wealth Management</div>
            <div className={styles.industry}>Investment Banking & Private Equity</div>
            <div className={styles.industry}>Payments & Banking</div>
            <div className={styles.industry}>Healthcare</div>
            <div className={styles.industry}>State & Local Government</div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to work together?</h2>
          <p>
            Whether you're an enterprise client looking for strategic technology consulting or a business owner considering a transition, let's talk.
          </p>
          <Link href="/contact" className={styles.buttonPrimary}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
