import Link from 'next/link';
import styles from './page.module.css';

export default function Services() {
  const services = [
    {
      title: 'Salesforce Modernization & Architecture',
      description: 'Technical debt cleanup, architecture redesign, and platform modernization that makes Salesforce work the way it should.',
      whatItIs: 'Deep technical assessment of your Salesforce org, architecture recommendations, and hands-on remediation of the mess.',
      whyItMatters: 'Technical debt compounds. Every bad pattern makes the next feature harder to ship. We untangle it.',
      whatWeDoDifferently: 'We interview your team first, not your stakeholders. We find the real problems, not the political ones.',
      deliverables: [
        'Technical debt assessment and prioritized remediation roadmap',
        'Architecture review and target state design',
        'Hands-on refactoring of critical flows',
        'Documentation your team can actually use',
      ],
    },
    {
      title: 'AI / Automation (Agentic & Workflow)',
      description: 'Production-grade AI automation that actually ships. Agentic workflows, intelligent routing, and real business impact.',
      whatItIs: 'Building AI systems that work in production. Not demos. Not pilots. Real automation that handles real work.',
      whyItMatters: 'AI proof-of-concepts are easy. Production AI that handles edge cases, integrates with your systems, and scales is hard.',
      whatWeDoDifferently: 'We build for production from day one. Error handling, monitoring, graceful degradation, the works.',
      deliverables: [
        'AI automation implementation (workflows, agents, integrations)',
        'Production monitoring and error handling',
        'Documentation and runbooks',
        'Team training on maintenance and extension',
      ],
    },
    {
      title: 'Data Cloud & Integration Strategy',
      description: 'Unified data architecture across Salesforce, cloud platforms, and legacy systems. Real-time sync. Actual governance.',
      whatItIs: 'Connecting your data silos. Designing integration architecture. Making systems talk to each other reliably.',
      whyItMatters: 'Data in silos is data you can\'t use. Poor integration creates brittleness, manual work, and data quality issues.',
      whatWeDoDifferently: 'We design for the messy reality of enterprise data, not the clean theory.',
      deliverables: [
        'Data architecture and integration blueprint',
        'Salesforce Data Cloud implementation',
        'API design and integration patterns',
        'Data governance framework',
      ],
    },
    {
      title: 'Governance, DevOps, & Team Enablement',
      description: 'Modern DevOps practices, release automation, and governance frameworks that enable teams instead of blocking them.',
      whatItIs: 'Setting up CI/CD, deployment automation, governance guardrails, and processes that make shipping faster, not slower.',
      whyItMatters: 'Slow deployments kill velocity. Bad governance creates bottlenecks. Your team should ship multiple times per week.',
      whatWeDoDifferently: 'We design governance that enables, not prevents. Automation that catches problems early, not late.',
      deliverables: [
        'DevOps pipeline setup (CI/CD, automated testing)',
        'Governance framework and change management process',
        'Team training and documentation',
        'Metrics dashboards for velocity and quality',
      ],
    },
    {
      title: 'Fractional Engineering Leadership',
      description: 'Senior technical leadership on demand. Architecture reviews, team mentoring, strategic planning, hands-on pairing.',
      whatItIs: 'Embedded technical leadership. We join your standups, review PRs, pair on hard problems, and make your team better.',
      whyItMatters: 'Not every company needs a full-time VP of Engineering. But every team needs senior technical guidance.',
      whatWeDoDifferently: 'We work with your team, not above them. No ivory tower architecture. No drive-by recommendations.',
      deliverables: [
        'Weekly architecture reviews and technical planning',
        'Hands-on pairing and code reviews',
        'Team mentoring and capability building',
        'Strategic technical roadmap',
      ],
    },
  ];

  return (
    <div className={styles.servicesPage}>
      <section className={styles.header}>
        <div className="container">
          <h1>Services</h1>
          <p className={styles.subtitle}>
            Strategic technology and AI services for enterprise teams that need to move faster.
          </p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className={styles.serviceBlock}>
              <div className={styles.serviceHeader}>
                <h2>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
              <div className={styles.serviceDetails}>
                <div className={styles.detailColumn}>
                  <h4>What it is</h4>
                  <p>{service.whatItIs}</p>
                </div>
                <div className={styles.detailColumn}>
                  <h4>Why it matters</h4>
                  <p>{service.whyItMatters}</p>
                </div>
                <div className={styles.detailColumn}>
                  <h4>What we do differently</h4>
                  <p>{service.whatWeDoDifferently}</p>
                </div>
              </div>
              <div className={styles.deliverables}>
                <h4>Example deliverables</h4>
                <ul>
                  {service.deliverables.map((deliverable, idx) => (
                    <li key={idx}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.engagement}>
        <div className="container">
          <h2>Flexible engagement models</h2>
          <p className={styles.engagementIntro}>
            We work the way you need. Project-based assessments. Ongoing fractional leadership.
            Sprint-based implementation. You choose.
          </p>
          <div className={styles.engagementOptions}>
            <div className={styles.option}>
              <h3>5 hours/week</h3>
              <p>Strategic guidance, architecture reviews, planning</p>
            </div>
            <div className={styles.option}>
              <h3>10 hours/week</h3>
              <p>Active project leadership, hands-on pairing, team enablement</p>
            </div>
            <div className={styles.option}>
              <h3>20 hours/week</h3>
              <p>Fractional engineering leadership, delivery ownership</p>
            </div>
            <div className={styles.option}>
              <h3>40 hours/week</h3>
              <p>Full-time embedded leadership for critical initiatives</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>
            Let's talk about what you need and how we can help.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Schedule a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
