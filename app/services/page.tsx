import Link from 'next/link';
import styles from './page.module.css';

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      <section className={styles.header}>
        <div className="container">
          <h1>Enterprise Consulting Services</h1>
          <p className={styles.subtitle}>
            We help enterprise clients unlock value from their technology investments through AI adoption, cloud platforms, and strategic technical advisory.
          </p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          {/* Cloud & Platform Implementation */}
          <div className={styles.serviceBlock}>
            <div className={styles.serviceHeader}>
              <h2>Cloud & Platform Implementation</h2>
              <p className={styles.serviceDescription}>
                Tiger team approach to implementing and optimizing enterprise platforms. We help you get more out of your technology investment.
              </p>
            </div>
            <div className={styles.serviceDetails}>
              <div className={styles.detailColumn}>
                <h4>Salesforce</h4>
                <ul>
                  <li>Implementation and optimization</li>
                  <li>Technical assessment and architecture review</li>
                  <li>Custom development and integration</li>
                  <li>Platform modernization</li>
                </ul>
              </div>
              <div className={styles.detailColumn}>
                <h4>Azure Cloud Services</h4>
                <ul>
                  <li>Cloud architecture and migration</li>
                  <li>Azure infrastructure setup</li>
                  <li>Security and compliance</li>
                  <li>Cost optimization</li>
                </ul>
              </div>
              <div className={styles.detailColumn}>
                <h4>AWS & Google Cloud</h4>
                <ul>
                  <li>Multi-cloud strategy</li>
                  <li>Migration and implementation</li>
                  <li>Infrastructure as code</li>
                  <li>Platform engineering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Strategy & Implementation */}
          <div className={styles.serviceBlock}>
            <div className={styles.serviceHeader}>
              <h2>AI Strategy & Implementation</h2>
              <p className={styles.serviceDescription}>
                Applied AI implementations that deliver real business value. We move beyond proof-of-concept to production-grade solutions.
              </p>
            </div>
            <div className={styles.serviceDetails}>
              <div className={styles.detailColumn}>
                <h4>AI Adoption Strategy</h4>
                <p>
                  Develop practical AI strategies aligned to business outcomes. Identify high-impact use cases and create roadmaps for implementation.
                </p>
              </div>
              <div className={styles.detailColumn}>
                <h4>Applied AI Solutions</h4>
                <p>
                  Build production-grade AI applications. Process automation, intelligent workflows, and AI-powered decision support systems.
                </p>
              </div>
              <div className={styles.detailColumn}>
                <h4>Integration & Operations</h4>
                <p>
                  Connect AI systems to existing platforms. Ensure reliability, monitoring, and continuous improvement of AI implementations.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Advisory */}
          <div className={styles.serviceBlock}>
            <div className={styles.serviceHeader}>
              <h2>Technical Advisory</h2>
              <p className={styles.serviceDescription}>
                Strategic technical guidance for complex initiatives. Architecture, project leadership, and operational excellence.
              </p>
            </div>
            <div className={styles.serviceDetails}>
              <div className={styles.detailColumn}>
                <h4>Architecture & Design</h4>
                <ul>
                  <li>Architecture reviews and optimization</li>
                  <li>Technical strategy and roadmaps</li>
                  <li>System integration design</li>
                  <li>Scalability and performance</li>
                </ul>
              </div>
              <div className={styles.detailColumn}>
                <h4>Program Management</h4>
                <ul>
                  <li>Technical project management</li>
                  <li>Multi-workstream coordination</li>
                  <li>Risk management and mitigation</li>
                  <li>Delivery excellence</li>
                </ul>
              </div>
              <div className={styles.detailColumn}>
                <h4>Operations & Governance</h4>
                <ul>
                  <li>Business systems analysis</li>
                  <li>Process design and optimization</li>
                  <li>Governance frameworks</li>
                  <li>Team alignment and enablement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.industries}>
        <div className="container">
          <h2>Target Industries</h2>
          <p className={styles.industriesIntro}>
            We specialize in serving clients in complex, regulated industries where technology and compliance intersect.
          </p>
          <div className={styles.industriesGrid}>
            <div className={styles.industryCard}>
              <h3>Financial Services</h3>
              <p>Banks, credit unions, and financial institutions</p>
            </div>
            <div className={styles.industryCard}>
              <h3>Wealth Management</h3>
              <p>RIAs, wealth advisors, and asset management firms</p>
            </div>
            <div className={styles.industryCard}>
              <h3>Investment Banking & PE</h3>
              <p>Investment banks, private equity, and VC firms</p>
            </div>
            <div className={styles.industryCard}>
              <h3>Payments & Banking</h3>
              <p>Payment processors, fintechs, and digital banking</p>
            </div>
            <div className={styles.industryCard}>
              <h3>Healthcare</h3>
              <p>Healthcare systems, providers, and health tech</p>
            </div>
            <div className={styles.industryCard}>
              <h3>Government</h3>
              <p>State and local government agencies</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.approach}>
        <div className="container">
          <h2>How we work</h2>
          <p className={styles.approachIntro}>
            Hands-on partners who deliver, not just advise. We work with your team to implement solutions and transfer knowledge.
          </p>
          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <h3>Practitioners, not theorists</h3>
              <p>
                We operate real businesses. Our consultants understand what it takes to implement and maintain systems in production.
              </p>
            </div>
            <div className={styles.approachCard}>
              <h3>Tiger team delivery</h3>
              <p>
                Focused, high-impact engagements. We assess quickly, design pragmatically, and deliver value fast.
              </p>
            </div>
            <div className={styles.approachCard}>
              <h3>Knowledge transfer</h3>
              <p>
                Every engagement builds your team's capability. We work alongside you to ensure lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Let's talk about your project</h2>
          <p>
            Ready to unlock value from your technology investments? Get in touch to discuss how we can help.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
