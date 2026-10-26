'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#070b05] text-white pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[350px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(182, 82, 52, 0.25) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-white/10">
          {/* Col 1: Brand Typography & Mission */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4 group">
                <span className="font-serif-luxury text-2xl tracking-[0.24em] font-medium uppercase text-white group-hover:text-white/80 transition-colors">
                  PRANGON
                </span>
                <span className="text-[9px] font-mono tracking-[0.35em] text-[#b65234] uppercase block mt-1">
                  Studios • Dhaka
                </span>
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
                  Services &amp; Methodology
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Portfolio (10 Selected Projects)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Atelier &amp; Story
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

        {/* Original-Style Massive Debossed Letterpress Wordmark Carved into Base */}
        <div className="py-12 md:py-16 overflow-hidden select-none">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 1360 210"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-sm select-none pointer-events-none"
          >
            <defs>
              <filter id="prangon_deboss_filter" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                
                {/* Drop shadow bottom-right */}
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-2" dy="3" />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />

                {/* Bevel highlight top-left */}
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="2" dy="-2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0" />
                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />

                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />

                {/* Inner shadow top-left */}
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="3" dy="-2" />
                <feGaussianBlur stdDeviation="1.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                <feBlend mode="normal" in2="shape" result="effect3_innerShadow" />

                {/* Inner highlight bottom-right */}
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-2" dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0" />
                <feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow" />
              </filter>
            </defs>

            <g filter="url(#prangon_deboss_filter)">
              <text
                x="50%"
                y="68%"
                textAnchor="middle"
                className="font-serif-luxury uppercase"
                fontSize="175"
                fontWeight="400"
                letterSpacing="0.16em"
                fill="#0a0f07"
              >
                PRANGON
              </text>
            </g>
          </svg>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>2026 © PRANGON Studios Ltd. All rights reserved.</div>
          <div>Crafted in Bangladesh</div>
        </div>
      </div>
    </footer>
  );
}
