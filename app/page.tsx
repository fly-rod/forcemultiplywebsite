import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.tagline}>Clean. Confident. Fast.</div>
            <h1>Multiply the force you already have.</h1>
            <p className={styles.heroSubtitle}>
              We don't rebuild your team. We amplify it. Strategic Salesforce architecture,
              AI automation, and governance that gets your enterprise moving faster.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Talk to Us
              </Link>
              <Link href="/how-we-work" className={styles.buttonSecondary}>
                Start an Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.subHero}>
        <div className="container">
          <div className={styles.subHeroContent}>
            <h2>What we do</h2>
            <p>
              Force Multiply partners with enterprise leaders to modernize Salesforce
              architecture, implement agentic AI, and unlock velocity through better
              governance and delivery practices. Not another consulting deck. Real improvements. Fast.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.valueProps}>
        <div className="container">
          <div className={styles.propsGrid}>
            <div className={styles.propCard}>
              <h3>We multiply impact</h3>
              <p>
                Your team knows your business. We bring architecture, AI strategy,
                and modern delivery practices that make them exponentially more effective.
              </p>
            </div>
            <div className={styles.propCard}>
              <h3>We move fast</h3>
              <p>
                Interviews, not workshops. Playbooks, not decks. Clear recommendations
                in weeks, not months. We get stuff done.
              </p>
            </div>
            <div className={styles.propCard}>
              <h3>We embed, not lecture</h3>
              <p>
                Fractional engineering leadership. Hands-on pairing. Architecture reviews.
                We work with your team, not above them.
              </p>
            </div>
            <div className={styles.propCard}>
              <h3>We leave you stronger</h3>
              <p>
                Every engagement builds capability. Better patterns, clearer governance,
                repeatable processes your team can own.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.problems}>
        <div className="container">
          <h2>Problems we solve</h2>
          <div className={styles.problemsList}>
            <div className={styles.problemItem}>
              <span className={styles.problemIcon}>→</span>
              <p>Your Salesforce org is a mess of technical debt and nobody knows how to fix it</p>
            </div>
            <div className={styles.problemItem}>
              <span className={styles.problemIcon}>→</span>
              <p>AI pilots are stuck in proof-of-concept and you need production-grade automation</p>
            </div>
            <div className={styles.problemItem}>
              <span className={styles.problemIcon}>→</span>
              <p>Data sits in silos and you need unified architecture across Salesforce, cloud, and legacy systems</p>
            </div>
            <div className={styles.problemItem}>
              <span className={styles.problemIcon}>→</span>
              <p>Releases are slow, brittle, and your DevOps maturity is years behind</p>
            </div>
            <div className={styles.problemItem}>
              <span className={styles.problemIcon}>→</span>
              <p>Your team is underwater and you need senior technical leadership, not another junior consultant</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Let's talk</h2>
          <p>
            Book a 30-minute intro call. We'll listen, ask good questions,
            and tell you honestly if we can help.
          </p>
          <Link href="/contact" className={styles.buttonPrimary}>
            Schedule a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
