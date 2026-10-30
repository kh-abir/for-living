'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section
      data-theme="light"
      className="section_cta25 relative bg-[#f1f2e4] text-[#221d18] py-20 md:py-28 overflow-hidden border-t border-black/5"
    >
      {/* Exact Original Background Asset */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/assets/cta-bg.avif"
          alt=""
          className="w-full h-full object-cover object-center select-none"
        />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Brand Emblem Above Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex flex-col items-center"
        >
          <div className="w-11 h-11 rounded-[8px] overflow-hidden shadow-lg border border-white/20">
            <svg viewBox="0 0 256 256" className="w-full h-full" role="presentation">
              <rect width="256" height="256" rx="16" fill="#bd7b58" />
              <path
                fill="#f8f9ee"
                fillRule="evenodd"
                d="M 72 48 L 112 48 L 112 56 C 112 56 124 48 148 48 C 176 48 192 68 192 96 C 192 124 176 144 148 144 C 124 144 112 136 112 136 L 112 208 L 72 208 Z M 112 80 L 112 112 C 112 112 124 120 144 120 C 160 120 164 108 164 96 C 164 84 160 72 144 72 C 124 72 112 80 112 80 Z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Exact Original Double-Layer Tactile Embossed Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mb-6 select-none max-w-[864px] mx-auto w-full"
        >
          {/* Top Layer: #8a7d76 background-clip:text + terracotta textShadow */}
          <h2
            className="heading-style-h2_custom cta_heading font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[3.375rem] font-normal leading-[1.1] tracking-normal uppercase text-center relative z-10"
            style={{
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              backgroundColor: 'rgb(138, 125, 118)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              textShadow: 'rgb(197, 180, 168) -1px 1px 2px',
            }}
          >
            Your next masterpiece <br className="hidden sm:inline" />
            is crafted here
          </h2>

          {/* Under Layer: White Bevel Highlight */}
          <div
            aria-hidden="true"
            className="heading-style-h2_custom cta_heading under font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[3.375rem] font-normal leading-[1.1] tracking-normal uppercase text-center absolute inset-0 z-0 pointer-events-none opacity-90"
            style={{
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              textShadow: 'rgb(255, 255, 255) -1px 1px 1px',
              paddingTop: '1px',
              paddingRight: '1px',
            }}
          >
            Your next masterpiece <br className="hidden sm:inline" />
            is crafted here
          </div>
        </motion.div>

        {/* Exact Original Double-Outline Luxury Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2"
        >
          <div className="button-outline p-[4px] rounded-[14px] border border-black/25 inline-flex transition-all duration-300 hover:border-[#bd7b58] hover:shadow-[0_0_25px_rgba(189,123,88,0.3)]">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-[9px] bg-black text-white font-serif-luxury text-sm md:text-[15.75px] uppercase tracking-normal transition-all duration-300 hover:bg-[#bd7b58] hover:scale-[1.02] active:scale-[0.97] cursor-pointer inline-block"
            >
              start a project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
