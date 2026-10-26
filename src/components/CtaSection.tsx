'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section
      data-theme="light"
      className="relative bg-[#f2e8d4] text-[#111111] py-28 md:py-36 overflow-hidden border-t border-[#111111]/10 transition-colors"
    >
      {/* Background Graphic */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: `url('/assets/cta-bg.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-4 font-semibold"
        >
          Begin The Dialogue
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-[#111111] leading-tight tracking-tight max-w-3xl mb-8"
        >
          Your next masterpiece <br className="hidden sm:inline" />
          is crafted here
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#111111] text-white text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:bg-[#b65234] hover:scale-105 active:scale-95 shadow-xl"
          >
            Start a project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
