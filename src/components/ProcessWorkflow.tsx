'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Smarter Design, Better Performance',
    description:
      'We optimise the design by evaluating materials, methods, and procedures to maximise value and functionality while lowering the costs.',
  },
  {
    number: '02',
    title: 'Turning Vision into Precision',
    description:
      'We turn initial concepts into fully realised, practical designs, technical engineering and precision production drawings.',
  },
  {
    number: '03',
    title: 'The Right Partners, The Right Results',
    description:
      'We handpick the master workshop suited for every specific detail and supervise them continuously during the fabrication phases.',
  },
  {
    number: '04',
    title: 'Turnkey Procurement & Installation',
    description:
      'We handle all aspects of furniture, fixtures, and equipment from international logistics and customs to white-glove final installation on-site.',
  },
];

export default function ProcessWorkflow() {
  return (
    <section className="relative bg-[#080e00] text-white py-28 md:py-40 overflow-hidden border-t border-white/10">
      {/* Background Graphic Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen"
        style={{
          backgroundImage: `url('/assets/bg-complexity.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-3 font-semibold">
            Execution Discipline
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-white">
            We handle all <br className="hidden sm:inline" />
            the complexity
          </h2>
        </div>

        {/* 4 Waterfall Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative flex flex-col justify-between pt-6 border-t border-white/20 group hover:border-[#b65234] transition-colors duration-500"
            >
              {/* Number indicator */}
              <div className="font-mono text-2xl md:text-3xl font-light text-[#b65234] mb-8">
                {step.number}
              </div>

              <div>
                <h3 className="font-serif-luxury text-xl md:text-2xl font-light text-white mb-4 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-white/65 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Bottom line accent */}
              <div className="w-0 group-hover:w-full h-[1px] bg-[#b65234] transition-all duration-500 mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
