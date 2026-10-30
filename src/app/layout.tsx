import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PRANGON Studios | Bespoke Architecture & Interior Engineering',
  description:
    'We turn architectural designs into masterpiece interiors crafted by Bengal’s finest master artisans.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'PRANGON Studios | Dhaka Atelier',
    description:
      'We turn architectural designs into masterpiece interiors crafted by Bengal’s finest master artisans.',
    images: ['/assets/hero-terracotta-wall.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRANGON Studios | Dhaka Atelier',
    description:
      'We turn architectural designs into masterpiece interiors crafted by Bengal’s finest master artisans.',
    images: ['/assets/hero-terracotta-wall.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} font-sans-luxury`}>
      <body className="bg-[#12100e] text-white selection:bg-[#bd7b58] selection:text-white antialiased">
        <SmoothScroll>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
