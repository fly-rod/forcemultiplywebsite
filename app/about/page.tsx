import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.header}>
        <div className="container">
          <h1>About Force Multiply</h1>
          <p className={styles.subtitle}>
            A hybrid consulting and investment firm built on a unique flywheel: enterprise consulting funds small business acquisitions, creating ownership pathways for our team.
          </p>
        </div>
      </section>

      <section className={styles.mission}>
        <div className="container">
          <h2>Our Mission</h2>
          <div className={styles.missionContent}>
            <p>
              In this AI revolution and highly competitive landscape, Force Multiply helps organizations innovate and succeed through business and technical consulting services centered on the adoption of artificial intelligence and modern cloud technologies.
            </p>
            <p>
              At the same time, we invest in our employees by enabling pathways to business acquisition and ownership—giving consultants the opportunity to build long-term wealth, support and operate portfolio companies with the use of AI, and grow as leaders.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.model}>
        <div className="container">
          <h2>The Flywheel Model</h2>
          <p className={styles.modelIntro}>
            Force Multiply operates differently. We've built a business model where each part strengthens the others.
          </p>
          <div className={styles.modelGrid}>
            <div className={styles.modelCard}>
              <h3>Consulting Revenue</h3>
              <p>
                High-impact enterprise consulting generates revenue that funds strategic small business acquisitions.
              </p>
            </div>
            <div className={styles.modelCard}>
              <h3>Business Acquisitions</h3>
              <p>
                We acquire and operate service businesses generating $500K–$5M in revenue, modernizing operations through technology.
              </p>
            </div>
            <div className={styles.modelCard}>
              <h3>Cash Flow Stability</h3>
              <p>
                Portfolio companies provide stable cash flow, reducing dependency on consulting cycles and creating long-term value.
              </p>
            </div>
            <div className={styles.modelCard}>
              <h3>Ownership Opportunities</h3>
              <p>
                Team members gain equity in portfolio companies, building wealth beyond hourly billing and traditional consulting careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.leader}>
        <div className="container">
          <div className={styles.leaderContent}>
            <div className={styles.leaderText}>
              <h2>Ward Wood – Founder & CEO</h2>
              <p>
                Ward leads Force Multiply's vision and works directly with clients to shape strategy, improve their technology landscape, and apply practical AI. He focuses on connecting the business outcomes clients want with the systems, processes, and teams needed to achieve them.
              </p>
              <p>
                Ward ties together the consulting and small-business sides of the company, ensuring they support one another as Force Multiply grows. His approach combines deep technical expertise with business operations experience—building systems that work in the real world, not just in theory.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <h2>What sets us apart</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Practitioners, not just advisors</h3>
              <p>
                The team operates real businesses, not just advises on them. We understand what it takes to run operations because we do it every day.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Ownership pathways</h3>
              <p>
                Consultants can build wealth through equity in portfolio companies—creating career paths beyond traditional consulting.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Hands-on delivery</h3>
              <p>
                High-impact, practical solutions rather than theoretical frameworks. We deliver results, not just recommendations.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Trusted partners</h3>
              <p>
                Building long-term relationships with clients and team members. We're invested in outcomes, not just hours billed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.approach}>
        <div className="container">
          <h2>How we work</h2>
          <div className={styles.approachContent}>
            <div className={styles.approachCard}>
              <h3>For Enterprise Clients</h3>
              <p>
                We help you get more out of your technology investment. Tiger team approach to unlocking value from your existing platforms. Hands-on partners who deliver, not just advise.
              </p>
            </div>
            <div className={styles.approachCard}>
              <h3>For Potential Team Members</h3>
              <p>
                Build wealth through ownership, not just billable hours. Consultant-to-Owner career path. Be part of a team that operates what we advise.
              </p>
            </div>
            <div className={styles.approachCard}>
              <h3>For Acquisition Targets</h3>
              <p>
                Modernize operations through technology and AI. Stable transition with operational expertise. Access to enterprise-grade tools and practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.legal}>
        <div className="container">
          <div className={styles.legalContent}>
            <p>
              <strong>Legal Entity:</strong> ForceX Consulting LLC<br/>
              <strong>DBA:</strong> Force Multiply Consulting
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Work with us</h2>
          <p>
            Whether you're an enterprise client, a potential team member, or a business owner, let's talk about how Force Multiply can help.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
