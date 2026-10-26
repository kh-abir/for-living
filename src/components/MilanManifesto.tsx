'use client';

import { motion } from 'framer-motion';

export default function BengalManifesto() {
  return (
    <section className="relative bg-[#0c100a] text-white py-24 md:py-32 overflow-hidden border-t border-white/10">
      {/* Background Architectural Canvas */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `url('/assets/bg-marble.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Subtle Radial Warmth Glow */}
      <div
        className="absolute top-1/3 left-10 w-[600px] h-[500px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(182, 82, 52, 0.4) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Manifesto & Signatures */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-3 font-semibold">
              Delta Modernism & Discipline
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-6 leading-[1.12]">
              From Dhaka, <br />
              Since 2012
            </h2>

            <div className="space-y-5 text-sm md:text-base text-white/75 font-light leading-relaxed mb-10 max-w-xl">
              <p>
                We understand the poetry of your design—the profound dialogue between tropical monsoon light, deep sculptural brick shadows, seasoned river teak, and courtyards that breathe with the delta wind.
              </p>

              {/* Glassmorphic Core Covenant Quote */}
              <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/[0.04] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#b65234]" />
                <p className="font-serif-luxury text-base md:text-lg text-white font-normal italic leading-snug">
                  “One partner, one touchpoint, full accountability across every joint, weld, and weave.”
                </p>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mt-2">
                  The PRANGON Atelier Covenant
                </span>
              </div>

              <p>
                Crafted in Bangladesh by generations of master guilds, PRANGON Studios shields your architectural vision, protects your delivery schedules, and safeguards your enduring legacy.
              </p>
            </div>

            {/* Co-Founders Credential Row with Handwritten Cursive Signatures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              {/* Founder 1 */}
              <div className="flex flex-col">
                <div className="font-cursive-luxury text-3xl md:text-4xl text-[#f8e7c3] tracking-wide mb-1 select-none">
                  Tariqul Islam
                </div>
                <div className="font-sans text-xs uppercase tracking-wider text-white font-medium">
                  Tariqul Islam
                </div>
                <div className="text-[11px] font-mono text-white/50 tracking-wide mt-0.5">
                  Co-Founder &amp; Principal Architect
                </div>
              </div>

              {/* Founder 2 */}
              <div className="flex flex-col">
                <div className="font-cursive-luxury text-3xl md:text-4xl text-[#f8e7c3] tracking-wide mb-1 select-none">
                  Farhana Rahman
                </div>
                <div className="font-sans text-xs uppercase tracking-wider text-white font-medium">
                  Farhana Rahman
                </div>
                <div className="text-[11px] font-mono text-white/50 tracking-wide mt-0.5">
                  Co-Founder &amp; Guildmaster Liaison
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Architectural Monolith Visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden backdrop-blur-xl bg-white/[0.03] border border-white/15 p-2.5 shadow-[0_30px_70px_rgba(0,0,0,0.85)] group"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/assets/milan-cathedral.avif"
                  alt="Light and shadow study of architectural monolithic stone and courtyard"
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Glassmorphic Atelier GPS Coordinates Badge */}
                <div className="absolute bottom-5 left-5 right-5 z-10 backdrop-blur-md bg-black/60 border border-white/15 rounded-xl p-3.5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#b65234]">
                      Dhaka Atelier
                    </div>
                    <div className="text-xs font-sans tracking-wide text-white font-medium">
                      Gulshan 2, Dhaka
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-white/50">
                    23°47&apos;33&quot;N 90°24&apos;59&quot;E
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
