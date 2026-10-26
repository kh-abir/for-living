'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CtaSection from '@/components/CtaSection';

const servicePhases = [
  {
    step: '01',
    title: 'Design Optimization & Climate Engineering',
    tagline: 'Smarter Design, Better Performance',
    description:
      'We evaluate materials, delta humidity cycles, and fabrication methods to maximize functional lifespan and value while honoring the architect’s conceptual intent.',
    deliverables: [
      'Monsoon moisture & thermal analysis',
      'Value engineering proposals',
      'Certified sustainable timber sourcing',
      'Budget & timeline milestone mapping',
    ],
  },
  {
    step: '02',
    title: 'Technical CAD/BIM & Joinery Precision Drawings',
    tagline: 'Turning Vision into Precision',
    description:
      'Our Dhaka engineering studio translates architectural sketches into millimetric CAD and BIM production drawings, specifying interlocking traditional mortise-and-tenon joinery.',
    deliverables: [
      'Millwork shop drawings (1:1 and 1:5 scale)',
      'MEP and structural integration plans',
      'Hardware and metalwork specifications',
      'Sample finishes & full-scale mockups',
    ],
  },
  {
    step: '03',
    title: 'Delta Guild Selection & Supervision',
    tagline: 'The Right Artisans, The Right Results',
    description:
      'We handpick specialized artisan guilds across Savar (terracotta), Dhamrai (brass casting), and Chittagong (timber joinery), supervising every kiln burn and assembly.',
    deliverables: [
      'Artisan workshop procurement',
      'On-site quality control inspections',
      'Studio dry-fit pre-assembly in Dhaka',
      'Material certification & audit reports',
    ],
  },
  {
    step: '04',
    title: 'Turnkey Procurement & White-Glove Installation',
    tagline: 'Seamless On-Site Delivery',
    description:
      'We oversee protective packaging, nationwide and regional river logistics, and white-glove site delivery, with PRANGON master fitters managing the final installation.',
    deliverables: [
      'Climate-controlled freight coordination',
      'Careful on-site white-glove installation',
      'Snagging & client handover verification',
      'Long-term maintenance & finish care plan',
    ],
  },
];

export default function ServicesPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-[#12100e] text-white pt-28">
      {/* Hero Header */}
      <section className="relative px-6 md:px-12 py-16 md:py-20 max-w-[1360px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#bd7b58] block mb-3 font-semibold">
            Services & Scope
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.08] text-white mb-4">
            Disciplined engineering for visionary architecture
          </h1>
          <p className="text-sm md:text-base text-white/70 font-light leading-relaxed max-w-2xl">
            From initial sketch analysis to white-glove turnkey installation, PRANGON Studios acts as your sole manufacturing, craft, and procurement partner across Bangladesh.
          </p>
        </motion.div>
      </section>

      {/* Interactive Project Ruler Step Section */}
      <section className="relative px-6 md:px-12 py-12 md:py-20 max-w-[1360px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Step Navigation Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-1">
              Our 4-Stage Methodology
            </span>

            {servicePhases.map((phase, idx) => (
              <button
                key={phase.step}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                  activeStep === idx
                    ? 'bg-[#221d18] border-[#bd7b58] shadow-xl'
                    : 'bg-transparent border-white/10 hover:border-white/30 text-white/60 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-[#bd7b58] font-medium">
                    Stage {phase.step}
                  </span>
                  <span className="text-[10px] text-white/40 font-mono">
                    {idx === activeStep ? 'Active' : ''}
                  </span>
                </div>
                <div className="font-serif-luxury text-lg font-normal text-white">
                  {phase.title}
                </div>
              </button>
            ))}
          </div>

          {/* Right Active Step Detailed View */}
          <div className="lg:col-span-7 bg-[#221d18] rounded-2xl p-6 md:p-10 border border-white/10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-3xl font-mono text-[#bd7b58]">
                  {servicePhases[activeStep].step}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono">
                  Standard Atelier Protocol
                </span>
              </div>

              <h2 className="font-serif-luxury text-2xl text-white mb-2 font-light">
                {servicePhases[activeStep].tagline}
              </h2>

              <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light mb-6">
                {servicePhases[activeStep].description}
              </p>

              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#bd7b58] mb-3">
                Key Scope & Deliverables
              </h4>
              <ul className="space-y-2">
                {servicePhases[activeStep].deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                    <span className="text-[#bd7b58]">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50 font-light">
                Ready to review architectural drawings?
              </span>
              <Link
                href="/contact"
                className="text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full bg-white text-black hover:bg-[#bd7b58] hover:text-white transition-colors"
              >
                Request consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Environments Sector Breakdown */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1360px] mx-auto border-t border-white/10">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#bd7b58] block mb-2 font-semibold">
            Sectors of Excellence
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white">
            Tailored solutions across three living environments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#221d18] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#bd7b58] uppercase tracking-widest mb-2">
                01 / Living
              </div>
              <h3 className="font-serif-luxury text-xl text-white mb-3">
                Residential Living
              </h3>
              <p className="text-xs text-white/65 leading-relaxed font-light">
                Private lakeside villas, tea estate bungalows, and high-end urban duplexes requiring bespoke Burma teak millwork, hand-cast Dhamrai hardware, and sculpted delta stone.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/50 font-mono">
              Gulshan • Baridhara • Sreemangal • Sylhet
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#221d18] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#bd7b58] uppercase tracking-widest mb-2">
                02 / Living
              </div>
              <h3 className="font-serif-luxury text-xl text-white mb-3">
                Commercial Living
              </h3>
              <p className="text-xs text-white/65 leading-relaxed font-light">
                Flagship fashion lounges, boutique headquarters, and diplomatic club suites engineered to withstand heavy footfall while retaining residential intimacy and acoustic serenity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/50 font-mono">
              Lounges • Art Districts • Diplomatic Enclaves
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#221d18] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#bd7b58] uppercase tracking-widest mb-2">
                03 / Living
              </div>
              <h3 className="font-serif-luxury text-xl text-white mb-3">
                Marine & Riverside
              </h3>
              <p className="text-xs text-white/65 leading-relaxed font-light">
                Expedition yachts, delta houseboats, and coastal coastal villas engineered with salt-resistant metals, ultra-lightweight carbon composites, and tropical marine finishes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/50 font-mono">
              Cox&apos;s Bazar • Meghna • Karnaphuli River
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
