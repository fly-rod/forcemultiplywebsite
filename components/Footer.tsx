'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    // Check for logo files
    const checkLogo = async (path: string) => {
      try {
        const response = await fetch(path, { method: 'HEAD' });
        return response.ok;
      } catch {
        return false;
      }
    };

    const findLogo = async () => {
      const logoOptions = [
        '/resources/logos/logo-light.svg',
        '/resources/logos/logo-light.png',
        '/resources/logos/logo.svg',
        '/resources/logos/logo.png',
      ];

      for (const logo of logoOptions) {
        const exists = await checkLogo(logo);
        if (exists) {
          setLogoSrc(logo);
          return;
        }
      }
    };

    findLogo();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt="Force Multiply"
                width={160}
                height={35}
                className={styles.footerLogo}
              />
            ) : (
              <h3>Force Multiply</h3>
            )}
            <p>Multiply the impact of the teams you already have.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Navigate</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
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
          <p className={styles.legal}>ForceX Consulting LLC DBA Force Multiply</p>
        </div>
      </div>
    </footer>
  );
}
