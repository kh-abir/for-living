'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section
      data-theme="light"
      className="relative bg-[#ebe1ce] text-[#111111] py-24 md:py-36 overflow-hidden border-t border-[#111111]/10 transition-colors"
    >
      {/* Creative Background: Tactile Architectural Linen & Wave Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `url('/assets/cta-bg.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-color-burn"
        style={{
          backgroundImage: `url('/assets/wave-bg.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Warm Ambient Vignette */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.6) 0%, transparent 75%)',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Embossed Emblem Above Headline (Original Webflow style) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 flex flex-col items-center opacity-80"
        >
          <svg
            fill="none"
            height="44"
            role="presentation"
            viewBox="0 0 36 48"
            width="34"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]"
          >
            <path
              d="M35.6674 28.822C35.6674 27.8203 35.6772 28.2126 35.6674 25.6625C35.6674 25.6625 35.6561 23.1176 35.6287 20.8867C35.6006 18.6564 35.8615 17.8535 35.654 14.8853C35.4466 11.9163 35.1203 11.0587 34.6415 9.56646C33.9903 7.53645 32.231 5.66453 31.0953 4.5594C29.9597 3.45353 26.3327 0.765317 22.5221 0.245256C21.5138 0.0982501 19.6103 0 18.7489 0C18.4268 0 18.1062 0.00369361 17.7848 0.00664851C17.5696 0.00886467 17.3538 0.0103421 17.14 0.013297H17.0542C15.562 0.0273327 14.0193 -0.0391523 12.5194 0.189113C9.51962 0.590978 6.69493 1.62371 4.42999 4.08218C2.1334 6.57685 0.545619 10.238 0.229187 13.5489C0.0934735 14.8845 0.0941791 16.1655 0.170123 17.5225C0.171529 18.3713 0.168013 19.2208 0.170123 20.0696C0.179967 23.5276 0.262942 27.0269 0.015422 30.4391C-0.0415357 31.5294 0.0688623 33.148 0.189809 34.3248C0.397951 36.1856 0.833926 37.943 1.58633 39.371C2.2431 40.581 3.03277 41.7157 3.91105 42.7588C4.2324 43.1414 5.23373 44.0464 6.12114 44.8604C7.00785 45.6738 8.27006 46.3024 10.1194 46.9554C10.445 47.0699 10.7699 47.1867 11.0926 47.3086C11.6144 47.5051 12.153 47.474 12.6874 47.6011C13.3112 47.7488 13.9475 47.8057 14.5431 47.8456C15.7378 47.9291 17.0366 47.9734 18.5126 47.9793C18.8944 47.9808 19.2763 47.986 19.6581 47.9897C20.1243 47.9948 20.606 48 21.0792 48C22.2177 48 23.5635 47.9741 24.9249 47.7762C28.3374 47.3108 31.5046 45.1212 33.3968 41.9188C34.0051 40.895 34.4861 40.0181 34.9424 38.5643C35.1808 37.8034 35.505 36.7234 35.6386 35.4085C35.7729 34.0935 35.7194 33.8047 35.7412 32.1293C35.7476 31.6306 35.654 29.3243 35.6667 28.822H35.6674Z"
              fill="#9e5a3c"
            />
          </svg>
        </motion.div>

        {/* Exact Original Tactile Debossed Letterpress Typography (Dual-Layer) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mb-6 select-none max-w-4xl"
        >
          {/* Top Layer: Warm terracotta deboss shadow */}
          <h2
            className="font-serif-luxury uppercase text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal leading-[1.1] tracking-normal text-center relative z-10"
            style={{
              color: 'transparent',
              textShadow: 'rgb(197, 180, 168) -1px 1px 2px',
            }}
          >
            Your next masterpiece <br className="hidden sm:inline" />
            is crafted here
          </h2>

          {/* Under Layer: Ambient crisp white bevel highlight */}
          <div
            aria-hidden="true"
            className="font-serif-luxury uppercase text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal leading-[1.1] tracking-normal text-center absolute inset-0 z-0 pointer-events-none opacity-90"
            style={{
              color: 'transparent',
              textShadow: 'rgb(255, 255, 255) -1px 1px 1px',
            }}
          >
            Your next masterpiece <br className="hidden sm:inline" />
            is crafted here
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="text-xs md:text-sm text-[#111111]/70 font-light max-w-xl mb-10 leading-relaxed"
        >
          Whether designing a private residence in Gulshan, a boutique retreat in Sreemangal, or a coastal villa in Cox&apos;s Bazar, PRANGON Studios delivers end-to-end craft and engineering.
        </motion.p>

        {/* Start a project CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#111111] text-white text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:bg-[#b65234] hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.22)] border border-black/10"
          >
            Start a project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
