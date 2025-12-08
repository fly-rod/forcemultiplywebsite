import Link from 'next/link';
import styles from './page.module.css';

export default function HowWeWork() {
  return (
    <div className={styles.howWeWorkPage}>
      <section className={styles.header}>
        <div className="container">
          <h1>How We Work</h1>
          <p className={styles.subtitle}>
            Interview-first. Playbook-driven. Light-touch. Get-stuff-done.
          </p>
        </div>
      </section>

      <section className={styles.method}>
        <div className="container">
          <div className={styles.methodIntro}>
            <h2>Our method</h2>
            <p>
              We don't start with workshops and stakeholder decks. We start with interviews.
              We talk to the people doing the work. We find the real problems. Then we fix them.
            </p>
          </div>

          <div className={styles.phases}>
            <div className={styles.phase}>
              <div className={styles.phaseNumber}>01</div>
              <div className={styles.phaseContent}>
                <h3>Assess</h3>
                <p>
                  Structured interviews with your team. Architecture review. Technical assessment.
                  We map the current state, identify bottlenecks, and prioritize what matters most.
                </p>
                <div className={styles.phaseDetails}>
                  <strong>Typical duration:</strong> 1-2 weeks<br/>
                  <strong>Output:</strong> Assessment report with prioritized recommendations
                </div>
              </div>
            </div>

            <div className={styles.phase}>
              <div className={styles.phaseNumber}>02</div>
              <div className={styles.phaseContent}>
                <h3>Align</h3>
                <p>
                  Review findings with leadership. Get buy-in on priorities. Set clear expectations
                  for scope, timeline, and success metrics. No surprises.
                </p>
                <div className={styles.phaseDetails}>
                  <strong>Typical duration:</strong> 1 week<br/>
                  <strong>Output:</strong> Aligned roadmap and engagement plan
                </div>
              </div>
            </div>

            <div className={styles.phase}>
              <div className={styles.phaseNumber}>03</div>
              <div className={styles.phaseContent}>
                <h3>Architect</h3>
                <p>
                  Design the solution. Create technical specs. Map dependencies. Build the blueprint
                  for implementation. Everything documented, nothing assumed.
                </p>
                <div className={styles.phaseDetails}>
                  <strong>Typical duration:</strong> 2-3 weeks<br/>
                  <strong>Output:</strong> Technical specifications and implementation plan
                </div>
              </div>
            </div>

            <div className={styles.phase}>
              <div className={styles.phaseNumber}>04</div>
              <div className={styles.phaseContent}>
                <h3>Activate</h3>
                <p>
                  Execute. Build. Deploy. We work with your team hands-on. Pairing sessions. Code
                  reviews. Iterative delivery. Ship working software every sprint.
                </p>
                <div className={styles.phaseDetails}>
                  <strong>Typical duration:</strong> Ongoing<br/>
                  <strong>Output:</strong> Shipped features and capability transfer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.approach}>
        <div className="container">
          <h2>What makes us different</h2>
          <div className={styles.differentiators}>
            <div className={styles.differentiator}>
              <h3>Interview-first approach</h3>
              <p>
                We talk to the people doing the work before we talk to leadership. Engineers,
                admins, architects. They know where the problems are. We listen.
              </p>
            </div>
            <div className={styles.differentiator}>
              <h3>Repeatable playbooks</h3>
              <p>
                We've done this before. Technical assessments. Architecture patterns. Governance
                frameworks. We bring proven templates and adapt them to your reality.
              </p>
            </div>
            <div className={styles.differentiator}>
              <h3>Light-touch culture</h3>
              <p>
                No endless meetings. No death-by-documentation. We show up, do the work, and
                get out of your way. Fast decisions. Clear communication. Minimal overhead.
              </p>
            </div>
            <div className={styles.differentiator}>
              <h3>Capability transfer</h3>
              <p>
                Every engagement builds your team's skills. We pair, we teach, we document.
                When we leave, you're stronger than when we started.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.expectations}>
        <div className="container">
          <h2>What to expect</h2>
          <div className={styles.expectationsList}>
            <div className={styles.expectationItem}>
              <h4>Clear communication</h4>
              <p>Weekly updates. Slack availability. No surprises. You'll always know what we're working on and where we're headed.</p>
            </div>
            <div className={styles.expectationItem}>
              <h4>Flexible commitment levels</h4>
              <p>5/10/20/40 hours per week. Scale up for launches. Scale down for maintenance. Adjust as needs change.</p>
            </div>
            <div className={styles.expectationItem}>
              <h4>Rapid onboarding</h4>
              <p>We get up to speed fast. Access to systems in week 1. First recommendations by week 2. Momentum from day one.</p>
            </div>
            <div className={styles.expectationItem}>
              <h4>Transparent pricing</h4>
              <p>Fixed weekly rates based on commitment level. No hidden fees. No surprise invoices. You know exactly what you're paying.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to start?</h2>
          <p>
            Book a 30-minute intro call. We'll talk about your challenges,
            answer questions, and figure out if we're a good fit.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Schedule a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
