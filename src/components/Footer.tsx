'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#080e00] text-white pt-20 pb-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Col 1: Brand Logo & Mission */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6">
                <img
                  src="/assets/footer-logo.svg"
                  alt="For Living MILANO brand logo"
                  className="h-7 w-auto"
                />
              </Link>
              <p className="text-sm text-white/60 font-light max-w-sm leading-relaxed">
                We turn architectural designs into masterpiece interiors crafted by genius Italian artists.
              </p>
            </div>

            <div className="mt-8 text-xs font-mono text-white/40 uppercase tracking-widest">
              Milan — London — Côte d’Azur
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#b65234] mb-6 font-semibold">
              Menu
            </h4>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal Policy Pages */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#b65234] mb-6 font-semibold">
              Legal
            </h4>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li>
                <Link href="/legals/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legals/cookie-policy" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#b65234] mb-6 font-semibold">
              Social
            </h4>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li>
                <a
                  href="https://www.instagram.com/forlivingmilano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Instagram <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  LinkedIn <span>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>2026 © For Living S.r.l. All rights reserved.</div>
          <div>
            <a
              href="https://www.forwwward.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Made by Forwwward Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
