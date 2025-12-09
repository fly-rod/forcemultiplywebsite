'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    // Check for logo files in order of preference
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

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/careers', label: 'Careers' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt="Force Multiply"
                width={180}
                height={40}
                className={styles.logoImage}
                priority
              />
            ) : (
              'Force Multiply'
            )}
          </Link>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? styles.active : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
