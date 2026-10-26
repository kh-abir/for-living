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
  title: 'FOR LIVING | Masterpiece Interiors Crafted in Italy',
  description:
    'We turn architectural designs into masterpiece interiors crafted by genius Italian artists.',
  openGraph: {
    title: 'FOR LIVING | Homepage',
    description:
      'We turn architectural designs into masterpiece interiors crafted by genius Italian artists.',
    images: ['/assets/founders.avif'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} font-sans-luxury`}>
      <body className="bg-[#080e00] text-white selection:bg-[#b65234] selection:text-white antialiased">
        <SmoothScroll>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
