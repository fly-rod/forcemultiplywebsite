import Link from 'next/link';
import Icon from '@/components/Icon';
import styles from './page.module.css';

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      {/* Hero */}
      <section className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.tag}>Enterprise Services</div>
            <h1>Turn systems into operating leverage</h1>
            <p className={styles.subtitle}>
              Data, automation, and AI solutions on platforms such as Salesforce and Microsoft—eliminating friction without adding headcount.
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
                <Icon name="ai-brain" size={48} />
              </div>
              <h2>Data, Automation & AI</h2>
              <p className={styles.cardLead}>Intelligent automation that creates operating leverage</p>
              <ul className={styles.features}>
                <li>Build AI agents to automate repetitive workflows and decision-making</li>
                <li>Design and implement custom data pipelines and integrations</li>
                <li>Create automated reporting and analytics dashboards</li>
                <li>Deploy production AI solutions (LLMs, classification, forecasting)</li>
                <li>Streamline approval workflows and reduce manual touchpoints</li>
              </ul>
            </div>

            <div className={`${styles.bigCard} scroll-animate hover-lift animate-delay-2`}>
              <div className={styles.cardIcon}>
                <Icon name="cloud" size={48} />
              </div>
              <h2>Salesforce & Microsoft Platforms</h2>
              <p className={styles.cardLead}>Unlock value from your existing platform investments</p>
              <ul className={styles.features}>
                <li>Optimize Salesforce orgs (data model, automation, integrations)</li>
                <li>Build custom Lightning components and Flow automations</li>
                <li>Integrate Salesforce with Microsoft (Teams, Power Platform, Azure)</li>
                <li>Design scalable platform architecture and governance frameworks</li>
                <li>Implement DevOps pipelines and release management (CI/CD)</li>
              </ul>
            </div>

            <div className={`${styles.bigCard} scroll-animate hover-lift animate-delay-3`}>
              <div className={styles.cardIcon}>
                <Icon name="briefcase" size={48} />
              </div>
              <h2>Technical Advisory</h2>
              <p className={styles.cardLead}>Strategic guidance for complex initiatives</p>
              <ul className={styles.features}>
                <li>Design system architecture and integration strategies</li>
                <li>Lead technical program management and delivery</li>
                <li>Map and optimize business processes for technology adoption</li>
                <li>Build governance frameworks (data, security, compliance)</li>
                <li>Provide fractional engineering leadership and team enablement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Services Focus */}
      <section className={styles.industries}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>Financial services specialists</h2>
            <p>Deep expertise across private equity and complex, regulated environments</p>
          </div>
          <div className={`${styles.industryGrid} stagger-children`}>
            <div className={`${styles.indCard} hover-lift`}>
              <Icon name="briefcase" size={32} />
              <h3>Private Equity</h3>
            </div>
            <div className={`${styles.indCard} hover-lift`}>
              <Icon name="chart" size={32} />
              <h3>Investment Banking</h3>
            </div>
            <div className={`${styles.indCard} hover-lift`}>
              <Icon name="target" size={32} />
              <h3>Wealth Management</h3>
            </div>
            <div className={`${styles.indCard} hover-lift`}>
              <Icon name="shield" size={32} />
              <h3>Banking</h3>
            </div>
            <div className={`${styles.indCard} hover-lift`}>
              <Icon name="lightning" size={32} />
              <h3>Payments & Fintech</h3>
            </div>
            <div className={`${styles.indCard} hover-lift`}>
              <Icon name="rocket" size={32} />
              <h3>Capital Markets</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className={styles.approach}>
        <div className="container">
          <div className={`${styles.sectionHeader} scroll-animate`}>
            <h2>Our approach</h2>
          </div>
          <div className={styles.approachGrid}>
            <div className={`${styles.approachCard} scroll-animate-scale`}>
              <div className={styles.stepNumber}>01</div>
              <h3>Practitioners</h3>
              <p>We operate real businesses. We know what works.</p>
            </div>
            <div className={`${styles.approachCard} scroll-animate-scale animate-delay-2`}>
              <div className={styles.stepNumber}>02</div>
              <h3>Tiger Teams</h3>
              <p>Focused engagements. Fast delivery. Real value.</p>
            </div>
            <div className={`${styles.approachCard} scroll-animate-scale animate-delay-3`}>
              <div className={styles.stepNumber}>03</div>
              <h3>Knowledge Transfer</h3>
              <p>Your team gets stronger. Lasting impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={`${styles.ctaContent} scroll-animate-scale`}>
            <h2>Let's work together</h2>
            <p>Ready to unlock value from your technology investments?</p>
            <Link href="/contact" className={`${styles.ctaButton} hover-lift btn-press`}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
