import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';
import './globals.css';
import './animations.css';

export const metadata: Metadata = {
  title: 'Force Multiply | Fractional AI & Technology Leadership',
  description: 'Fractional Chief AI Officers, CTOs, and Chief Innovation Officers. Executive-level leadership for AI transformation, technology strategy, and innovation—without the full-time commitment.',
  icons: {
    icon: '/favicon.png',
    apple: '/resources/assets/fm_favicon_192.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ScrollAnimations />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
