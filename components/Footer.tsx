import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Force Multiply</h3>
            <p>Multiply the impact of the teams you already have.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Navigate</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/how-we-work">How We Work</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Get Started</h4>
            <p>Ready to move faster?</p>
            <p><a href="mailto:ward@forcemultiply.com" className={styles.email}>ward@forcemultiply.com</a></p>
            <p><a href="/contact" className={styles.cta}>Schedule a Call</a></p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Force Multiply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
