'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Microclimate & Value Engineering',
    tagline: 'Smarter Design, Better Performance',
    description:
      'We evaluate materials, humidity cycles, and fabrication methods to maximize functional lifespan and value while honoring the architect’s conceptual intent.',
    deliverables: ['Monsoon moisture modeling', 'Sustainable timber audits', 'Budget optimization'],
  },
  {
    number: '02',
    title: 'BIM & Production Detailing',
    tagline: 'Turning Vision into Precision',
    description:
      'Our Dhaka technical studio develops millimeter-accurate shop drawings, interlocking joinery details, and hardware specifications ready for artisanal execution.',
    deliverables: ['1:1 joinery mockups', 'BIM MEP clash detection', 'CNC cutting schedules'],
  },
  {
    number: '03',
    title: 'Guild Selection & Supervision',
    tagline: 'The Right Artisans, The Right Results',
    description:
      'We pair each element with specialized guild workshops across Savar, Dhamrai, and Chittagong, supervising every kiln cycle, weld, and polish.',
    deliverables: ['Artisan workshop audit', 'Dry-fit studio assembly', 'Multi-stage quality checks'],
  },
  {
    number: '04',
    title: 'Turnkey Procurement & Installation',
    tagline: 'Flawless On-Site Execution',
    description:
      'We manage end-to-end logistics, protective crating, and white-glove site delivery, with PRANGON master installers managing the final turnkey handover.',
    deliverables: ['White-glove logistics', 'Supervised site assembly', '5-year craft warranty'],
  },
];

export default function ProcessWorkflow() {
  return (
    <section className="relative bg-[#080e00] text-white py-16 md:py-24 overflow-hidden border-t border-white/10">
      {/* Background Graphic Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `url('/assets/bg-complexity.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-2 font-semibold">
            Execution Discipline
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-white">
            We handle all <br className="hidden sm:inline" />
            the complexity
          </h2>
        </div>

        {/* 4 Process Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative flex flex-col justify-between p-6 rounded-xl bg-[#111111]/90 border border-white/10 group hover:border-[#b65234] transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-light text-[#b65234]">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    Stage
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl font-normal text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <div className="text-[11px] font-mono text-white/50 mb-3">
                  {step.tagline}
                </div>
                <p className="text-xs text-white/65 leading-relaxed font-light mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables tags */}
              <div className="pt-4 border-t border-white/10">
                <div className="space-y-1.5">
                  {step.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-white/70">
                      <span className="text-[#b65234]">✦</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
                <div className="w-0 group-hover:w-full h-[1.5px] bg-[#b65234] transition-all duration-500 mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
