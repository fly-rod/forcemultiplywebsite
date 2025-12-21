import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';
import './globals.css';
import './animations.css';

export const metadata: Metadata = {
  title: 'Force Multiply',
  description: 'Turn technology into operating leverage. We help financial services firms unlock value through data, automation, and AI on platforms like Salesforce and Microsoft.',
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
