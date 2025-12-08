import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.header}>
        <div className="container">
          <h1>About Force Multiply</h1>
          <p className={styles.subtitle}>
            We multiply the impact of the teams you already have.
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyContent}>
            <h2>The story</h2>
            <p>
              Force Multiply started from a simple observation: most enterprises don't need another
              consulting firm that rebuilds everything from scratch. They need partners who can make
              their existing teams exponentially more effective.
            </p>
            <p>
              Too many organizations are drowning in technical debt, stuck in pilot purgatory with
              AI initiatives, or bottlenecked by governance that prevents instead of enables. The
              answer isn't to hire an army of junior consultants. It's to bring senior technical
              leadership that works with your team, not above them.
            </p>
            <p>
              We built Force Multiply to be the firm we wished existed: fast, pragmatic, hands-on,
              and focused on making your team better, not dependent on us.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.founder}>
        <div className="container">
          <div className={styles.founderContent}>
            <div className={styles.founderText}>
              <h2>Meet Ward</h2>
              <p>
                Ward Wood is the founder of Force Multiply. Former Director of Innovation & Technology
                with 10+ years in Salesforce, data architecture, and enterprise modernization.
              </p>
              <p>
                He's led technical teams, designed AI strategies, architected data platforms, and
                shipped production systems for PE-backed companies and enterprise clients. He's been
                the person in the room who knows how to untangle the mess and get teams moving again.
              </p>
              <p>
                Ward builds Force Multiply on a philosophy of multiplication, not replacement. Your
                team knows your business. We bring architecture, AI strategy, governance frameworks,
                and modern delivery practices that make them unstoppable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.philosophy}>
        <div className="container">
          <h2>Our philosophy</h2>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <h3>Multiply the force you have</h3>
              <p>
                We don't rebuild your team. We amplify them. Better patterns, clearer architecture,
                stronger capabilities. You're more effective with us, and stronger when we leave.
              </p>
            </div>
            <div className={styles.philosophyCard}>
              <h3>Interview first, recommend second</h3>
              <p>
                We talk to the people doing the work before making recommendations. No drive-by
                assessments. No stakeholder theater. We find the real problems.
              </p>
            </div>
            <div className={styles.philosophyCard}>
              <h3>Ship, don't deck</h3>
              <p>
                We build things. Production-grade automation. Real architecture changes. Shipped
                features. Not endless slides and proof-of-concepts that never launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <h2>Our values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Clarity</h3>
              <p>
                No jargon. No buzzwords. Clear language, honest assessments, transparent communication.
                You always know where you stand and what we're doing.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Velocity</h3>
              <p>
                Speed matters. Fast onboarding. Quick wins. Iterative delivery. We move fast and we
                help you move faster.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Integrity</h3>
              <p>
                We tell you what you need to hear, not what you want to hear. If we're not the right
                fit, we'll tell you. If something won't work, we'll say so.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Craftsmanship</h3>
              <p>
                We care about quality. Clean architecture. Maintainable code. Documentation that
                actually helps. We build things the right way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Work with us</h2>
          <p>
            If you need strategic Salesforce architecture, AI automation, or technical leadership
            that multiplies your team's impact, let's talk.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
