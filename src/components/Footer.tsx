'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#080e00] text-white pt-16 pb-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/10">
          {/* Col 1: Brand Wordmark & Mission */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
                <div className="w-6 h-6 rounded-sm border border-white flex items-center justify-center p-1">
                  <div className="w-2 h-2 border border-white rotate-45" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif-luxury text-xl tracking-[0.2em] font-medium uppercase text-white">
                    PRANGON
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.35em] text-white/50 uppercase">
                    Studios • Dhaka
                  </span>
                </div>
              </Link>
              <p className="text-xs md:text-sm text-white/60 font-light max-w-sm leading-relaxed mb-6">
                We turn architectural visions into bespoke interior masterpieces crafted by Bengal’s finest master artisans.
              </p>
            </div>

            <div className="text-xs font-mono text-white/40 uppercase tracking-widest">
              Dhaka Atelier • Chittagong • Sylhet Liaison
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#b65234] mb-4 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services & Methodology
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Portfolio (48 Projects)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Atelier & Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal Policy Pages */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#b65234] mb-4 font-semibold">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-white/70">
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

          {/* Col 4: Contact & Social */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#b65234] mb-4 font-semibold">
              Studio
            </h4>
            <div className="space-y-2 text-xs text-white/70">
              <p className="text-white/50">Road 71, Gulshan 2</p>
              <p className="text-white/50">Dhaka 1212, Bangladesh</p>
              <p className="pt-2">
                <a
                  href="mailto:contact@prangonstudios.com"
                  className="hover:text-white transition-colors text-[#b65234]"
                >
                  contact@prangonstudios.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>2026 © PRANGON Studios Ltd. All rights reserved.</div>
          <div>Crafted in Bangladesh</div>
        </div>
      </div>
    </footer>
  );
}
