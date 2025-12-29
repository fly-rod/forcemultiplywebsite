import Link from 'next/link';
import Icon from '@/components/Icon';
import HeroBackground from '@/components/HeroBackground';
import styles from './page.module.css';

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      {/* Hero */}
      <section className={styles.header}>
        <HeroBackground />
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.tag}>Services</div>
            <h1>Fractional Leadership & Consulting</h1>
            <p className={styles.subtitle}>
              Executive-level AI and technology leadership, plus hands-on consulting—without the full-time commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className={styles.mainServices}>
        <div className="container">
          <div className={styles.serviceCards}>
            <div className={`${styles.bigCard} scroll-animate hover-lift`}>
              <div className={styles.cardIcon}>
                <Icon name="users" size={48} />
              </div>
              <h2>Fractional Executive Leadership</h2>
              <p className={styles.cardLead}>Part-time executive guidance, full-time impact</p>
              <ul className={styles.features}>
                <li>Fractional Chief AI Officer (CAIO) – lead AI strategy and adoption</li>
                <li>Fractional CTO – technology vision, architecture, and team leadership</li>
                <li>Fractional Chief Innovation Officer – drive innovation and transformation</li>
                <li>Board and executive advisory on AI and technology strategy</li>
                <li>Team mentoring, hiring support, and capability building</li>
              </ul>
            </div>

            <div className={`${styles.bigCard} scroll-animate hover-lift animate-delay-2`}>
              <div className={styles.cardIcon}>
                <Icon name="ai-brain" size={48} />
              </div>
              <h2>AI Strategy & Implementation</h2>
              <p className={styles.cardLead}>From AI roadmap to production systems</p>
              <ul className={styles.features}>
                <li>AI adoption strategy and organizational readiness assessment</li>
                <li>Build AI agents to automate workflows and decision-making</li>
                <li>Deploy production AI solutions (LLMs, classification, forecasting)</li>
                <li>Design data pipelines and integrations for AI-ready infrastructure</li>
                <li>AI governance, ethics, and risk management frameworks</li>
              </ul>
            </div>

            <div className={`${styles.bigCard} scroll-animate hover-lift animate-delay-3`}>
              <div className={styles.cardIcon}>
                <Icon name="cloud" size={48} />
              </div>
              <h2>Technology & Platform Consulting</h2>
              <p className={styles.cardLead}>Hands-on expertise across leading platforms</p>
              <ul className={styles.features}>
                <li>Salesforce optimization, architecture, and custom development</li>
                <li>Microsoft Azure, Power Platform, and Teams integrations</li>
                <li>Cloud architecture, migration, and infrastructure design</li>
                <li>Technical program management and delivery leadership</li>
                <li>DevOps, CI/CD, and engineering best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className={styles.industries}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>Industries we serve</h2>
            <p>AI and technology leadership across sectors</p>
          </div>
          <div className={`${styles.industryGrid} stagger-children`}>
            <div className={`${styles.indCard} hover-lift`}>
              <Icon name="rocket" size={32} />
              <h3>Technology & SaaS</h3>
            </div>
            <div className={`${styles.indCard} hover-lift`}>
              <Icon name="shield" size={32} />
              <h3>Financial Services</h3>
            </div>
            <div className={`${styles.indCard} hover-lift`}>
              <Icon name="briefcase" size={32} />
              <h3>Professional Services</h3>
            </div>
            <div className={`${styles.indCard} hover-lift`}>
              <Icon name="check-circle" size={32} />
              <h3>Healthcare</h3>
            </div>
            <div className={`${styles.indCard} hover-lift`}>
              <Icon name="lightning" size={32} />
              <h3>Manufacturing</h3>
            </div>
            <div className={`${styles.indCard} hover-lift`}>
              <Icon name="target" size={32} />
              <h3>Private Equity</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className={styles.approach}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>How we engage</h2>
          </div>
          <div className={styles.approachGrid}>
            <div className={`${styles.approachCard} scroll-animate-scale`}>
              <div className={styles.stepNumber}>01</div>
              <h3>Flexible commitment</h3>
              <p>Part-time or full-time. Scale up or down as needed.</p>
            </div>
            <div className={`${styles.approachCard} scroll-animate-scale animate-delay-2`}>
              <div className={styles.stepNumber}>02</div>
              <h3>Hands-on delivery</h3>
              <p>We do the work, not just advise. Real results.</p>
            </div>
            <div className={`${styles.approachCard} scroll-animate-scale animate-delay-3`}>
              <div className={styles.stepNumber}>03</div>
              <h3>Capability transfer</h3>
              <p>Your team gets stronger. Lasting impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={`${styles.ctaContent} scroll-animate-scale`}>
            <h2>Ready to talk?</h2>
            <p>Let's discuss how fractional leadership can accelerate your AI and technology initiatives.</p>
            <Link href="/contact" className={`${styles.ctaButton} hover-lift btn-press`}>
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
