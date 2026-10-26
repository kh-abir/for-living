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
        {/* Embossed Emblem Above Headline (Original Webflow style) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex flex-col items-center"
        >
          <svg
            fill="none"
            height="56"
            role="presentation"
            viewBox="0 0 36 48"
            width="42"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] opacity-85"
          >
            <path
              d="M35.6674 28.822C35.6674 27.8203 35.6772 28.2126 35.6674 25.6625C35.6674 25.6625 35.6561 23.1176 35.6287 20.8867C35.6006 18.6564 35.8615 17.8535 35.654 14.8853C35.4466 11.9163 35.1203 11.0587 34.6415 9.56646C33.9903 7.53645 32.231 5.66453 31.0953 4.5594C29.9597 3.45353 26.3327 0.765317 22.5221 0.245256C21.5138 0.0982501 19.6103 0 18.7489 0C18.4268 0 18.1062 0.00369361 17.7848 0.00664851C17.5696 0.00886467 17.3538 0.0103421 17.14 0.013297H17.0542C15.562 0.0273327 14.0193 -0.0391523 12.5194 0.189113C9.51962 0.590978 6.69493 1.62371 4.42999 4.08218C2.1334 6.57685 0.545619 10.238 0.229187 13.5489C0.0934735 14.8845 0.0941791 16.1655 0.170123 17.5225C0.171529 18.3713 0.168013 19.2208 0.170123 20.0696C0.179967 23.5276 0.262942 27.0269 0.015422 30.4391C-0.0415357 31.5294 0.0688623 33.148 0.189809 34.3248C0.397951 36.1856 0.833926 37.943 1.58633 39.371C2.2431 40.581 3.03277 41.7157 3.91105 42.7588C4.2324 43.1414 5.23373 44.0464 6.12114 44.8604C7.00785 45.6738 8.27006 46.3024 10.1194 46.9554C10.445 47.0699 10.7699 47.1867 11.0926 47.3086C11.6144 47.5051 12.153 47.474 12.6874 47.6011C13.3112 47.7488 13.9475 47.8057 14.5431 47.8456C15.7378 47.9291 17.0366 47.9734 18.5126 47.9793C18.8944 47.9808 19.2763 47.986 19.6581 47.9897C20.1243 47.9948 20.606 48 21.0792 48C22.2177 48 23.5635 47.9741 24.9249 47.7762C28.3374 47.3108 31.5046 45.1212 33.3968 41.9188C34.0051 40.895 34.4861 40.0181 34.9424 38.5643C35.1808 37.8034 35.505 36.7234 35.6386 35.4085C35.7729 34.0935 35.7194 33.8047 35.7412 32.1293C35.7476 31.6306 35.654 29.3243 35.6667 28.822H35.6674Z"
              fill="#9e5a3c"
            />
          </svg>
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
          <div className="button-outline p-[4px] rounded-[14px] border border-black/25 inline-flex transition-colors duration-300 hover:border-black/50">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-[9px] bg-black text-white font-serif-luxury text-sm md:text-[15.75px] uppercase tracking-normal transition-all duration-300 hover:bg-[#bd7b58] hover:scale-[1.02] active:scale-[0.98]"
            >
              start a project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
