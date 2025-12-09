import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';
import './globals.css';
import './animations.css';

export const metadata: Metadata = {
  title: 'Force Multiply',
  description: 'Enterprise technology consulting for financial services. AI, Cloud, and Salesforce solutions that deliver value.',
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
