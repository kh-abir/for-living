'use client';

import { motion } from 'framer-motion';

export default function BengalManifesto() {
  return (
    <section className="relative bg-[#111111] text-white py-16 md:py-24 overflow-hidden border-t border-white/10">
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Manifesto Content & Co-founders */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-3 font-semibold">
              Delta Modernism & Discipline
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
              From Dhaka, Since 2012
            </h2>

            <div className="space-y-4 text-sm md:text-base text-white/75 font-light leading-relaxed mb-8">
              <p>
                We understand the poetry of your architecture—the dialogue between monsoon light and deep shadows, porous terracotta jali screens, seasoned teak, and courtyards that breathe with the delta wind.
              </p>
              <p className="text-white font-normal text-base md:text-lg border-l-2 border-[#b65234] pl-4 italic">
                “One partner, one touchpoint, full responsibility across every joint, weld, and weave.”
              </p>
              <p>
                Crafted in Bangladesh by master guilds, PRANGON Studios protects your architectural vision, your delivery schedules, and your enduring legacy.
              </p>
            </div>

            {/* Co-Founders Credential Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="font-serif-luxury text-lg text-white font-medium">
                  Tariqul Islam
                </div>
                <div className="text-xs font-mono text-white/50 tracking-wider uppercase mt-1">
                  Co-Founder & Principal Architect
                </div>
              </div>

              <div>
                <div className="font-serif-luxury text-lg text-white font-medium">
                  Farhana Rahman
                </div>
                <div className="text-xs font-mono text-white/50 tracking-wider uppercase mt-1">
                  Co-Founder & Managing Director
                </div>
              </div>
            </div>
          </div>

          {/* Right: Architectural Monolith Photo */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group"
            >
              <img
                src="/assets/milan-cathedral.avif"
                alt="Architectural light and shadow study in black and white"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 z-10 text-xs font-mono tracking-widest uppercase text-white/80">
                PRANGON Design Atelier — Gulshan 2, Dhaka
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
