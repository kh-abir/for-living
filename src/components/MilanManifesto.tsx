'use client';

import { motion } from 'framer-motion';

export default function MilanManifesto() {
  return (
    <section className="relative bg-[#111111] text-white py-28 md:py-40 overflow-hidden border-t border-white/10">
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Manifesto Content & Co-founders */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-4 font-semibold">
              Heritage & Discipline
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-8">
              From Milan, Since 2010
            </h2>

            <div className="space-y-6 text-sm md:text-base text-white/75 font-light leading-relaxed mb-12">
              <p>
                We understand the poetry of your design, the proportions, textures and light behind every line.
              </p>
              <p className="text-white font-normal text-base md:text-lg border-l-2 border-[#b65234] pl-4 italic">
                “We deliver the engineering with discipline: one partner, one touchpoint, full responsibility.”
              </p>
              <p>
                Made in Italy by master artisans, our work protects your vision, your timelines and your international reputation.
              </p>
            </div>

            {/* Co-Founders Credential Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="font-serif-luxury text-lg text-white font-medium">
                  Paolo Curzi
                </div>
                <div className="text-xs font-mono text-white/50 tracking-wider uppercase mt-1">
                  Co-Founder & CEO
                </div>
              </div>

              <div>
                <div className="font-serif-luxury text-lg text-white font-medium">
                  Mauro Casamatta
                </div>
                <div className="text-xs font-mono text-white/50 tracking-wider uppercase mt-1">
                  Co-Founder & Executive Chairman
                </div>
              </div>
            </div>
          </div>

          {/* Right: Duomo di Milano High-Contrast Black & White Photo */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group"
            >
              <img
                src="/assets/milan-cathedral.avif"
                alt="Milan Cathedral with pigeons and stone lion statue in black and white"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10 text-xs font-mono tracking-widest uppercase text-white/70">
                Piazza del Duomo — Milan, Italy
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
