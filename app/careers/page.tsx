import Link from 'next/link';
import styles from './page.module.css';

export default function Careers() {
  return (
    <div className={styles.careersPage}>
      <section className={styles.header}>
        <div className="container">
          <h1>Build Wealth Through Ownership</h1>
          <p className={styles.subtitle}>
            Force Multiply offers a unique career path: Consultant-to-Owner. Build your wealth through equity in portfolio businesses, not just billable hours.
          </p>
        </div>
      </section>

      <section className={styles.path}>
        <div className="container">
          <h2>The Consultant-to-Owner Path</h2>
          <p className={styles.pathIntro}>
            Traditional consulting stops at billable hours. At Force Multiply, your career can lead to business ownership and long-term wealth creation.
          </p>
          <div className={styles.pathGrid}>
            <div className={styles.pathCard}>
              <div className={styles.pathNumber}>01</div>
              <h3>Start as a Consultant</h3>
              <p>
                Join Force Multiply as a consultant delivering enterprise projects. Work with high-value clients in AI, Salesforce, and cloud platforms.
              </p>
            </div>
            <div className={styles.pathCard}>
              <div className={styles.pathNumber}>02</div>
              <h3>Develop Business Operations Skills</h3>
              <p>
                Learn how we acquire and operate small businesses. Understand the systems, processes, and technology that drive operational improvement.
              </p>
            </div>
            <div className={styles.pathCard}>
              <div className={styles.pathNumber}>03</div>
              <h3>Become a Portfolio Operator</h3>
              <p>
                Take ownership of a portfolio company. Manage operations, drive growth, and build equity as you improve and scale the business.
              </p>
            </div>
            <div className={styles.pathCard}>
              <div className={styles.pathNumber}>04</div>
              <h3>Build Long-Term Wealth</h3>
              <p>
                Gain equity ownership in the businesses you operate. Create wealth beyond consulting income through business appreciation and cash flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.why}>
        <div className="container">
          <h2>Why Force Multiply is different</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <h3>Ownership, not just income</h3>
              <p>
                Build wealth through equity in portfolio companies. Traditional consulting maxes out at hourly rates. We offer a path to business ownership.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h3>Operators, not just advisors</h3>
              <p>
                Learn to operate real businesses, not just advise on them. Develop skills in P&L management, operations, and business leadership.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h3>Diverse experience</h3>
              <p>
                Work on enterprise consulting projects and small business operations. Build expertise across technology, strategy, and business management.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h3>Supported growth</h3>
              <p>
                Access to capital, expertise, and resources. You're not buying a business alone—you're backed by the Force Multiply team and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.roles}>
        <div className="container">
          <h2>Current Opportunities</h2>
          <p className={styles.rolesIntro}>
            We're building our team. Opportunities exist across consulting and venture operations.
          </p>
          <div className={styles.rolesGrid}>
            <div className={styles.roleCard}>
              <h3>Salesforce Consultant</h3>
              <p className={styles.roleType}>Consulting Track</p>
              <p>
                Work with enterprise clients to optimize Salesforce implementations. 3-5 years experience required. Remote or hybrid.
              </p>
              <div className={styles.roleSkills}>
                <span>Salesforce</span>
                <span>Integration</span>
                <span>Architecture</span>
              </div>
            </div>
            <div className={styles.roleCard}>
              <h3>AI Solutions Architect</h3>
              <p className={styles.roleType}>Consulting Track</p>
              <p>
                Design and implement AI solutions for enterprise clients. 5+ years in software architecture, AI/ML experience preferred.
              </p>
              <div className={styles.roleSkills}>
                <span>AI/ML</span>
                <span>Cloud</span>
                <span>Architecture</span>
              </div>
            </div>
            <div className={styles.roleCard}>
              <h3>Cloud Platform Engineer</h3>
              <p className={styles.roleType}>Consulting Track</p>
              <p>
                Build and optimize cloud infrastructure on Azure, AWS, or GCP. 3+ years cloud platform experience.
              </p>
              <div className={styles.roleSkills}>
                <span>Azure/AWS/GCP</span>
                <span>IaC</span>
                <span>DevOps</span>
              </div>
            </div>
            <div className={styles.roleCard}>
              <h3>Portfolio Operations Manager</h3>
              <p className={styles.roleType}>Ventures Track</p>
              <p>
                Manage operations for portfolio companies. Technology background preferred. Path to equity ownership.
              </p>
              <div className={styles.roleSkills}>
                <span>Operations</span>
                <span>P&L</span>
                <span>Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className="container">
          <h2>What we look for</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <h3>Hands-on practitioners</h3>
              <p>
                You've built things, not just advised on them. You understand the gap between theory and implementation.
              </p>
            </div>
            <div className={styles.teamCard}>
              <h3>Business-minded technologists</h3>
              <p>
                You connect technology to business outcomes. You understand why decisions matter, not just how to implement them.
              </p>
            </div>
            <div className={styles.teamCard}>
              <h3>Ownership mentality</h3>
              <p>
                You want to build something, not just bill hours. You're interested in the long game and building wealth over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Interested in joining Force Multiply?</h2>
          <p>
            Send your resume and a note about what interests you. Let's talk about how you can build a career—and wealth—with Force Multiply.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
