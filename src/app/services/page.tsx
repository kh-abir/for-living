'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CtaSection from '@/components/CtaSection';

const servicePhases = [
  {
    step: '01',
    title: 'Design Optimization & Value Engineering',
    tagline: 'Smarter Design, Better Performance',
    description:
      'We evaluate materials, methods, and fabrication procedures to maximize value and functionality while lowering costs without compromising the architectural intent.',
    deliverables: [
      'Material feasibility analysis',
      'Value engineering proposals',
      'Cost-saving alternative material specifications',
      'Budget & timeline milestone mapping',
    ],
  },
  {
    step: '02',
    title: 'Technical Engineering & Production Drawings',
    tagline: 'Turning Vision into Precision',
    description:
      'Our engineering studio transforms architectural and interior sketches into millimetric CAD and BIM production drawings, ensuring absolute construction feasibility.',
    deliverables: [
      'Millwork shop drawings (1:1 and 1:5 scale)',
      'MEP and structural integration plans',
      'Hardware and joinery specifications',
      'Sample finishes & material mockups',
    ],
  },
  {
    step: '03',
    title: 'Artisan Workshop Selection & Supervision',
    tagline: 'The Right Partners, The Right Results',
    description:
      'We handpick specialized Italian artisan workshops across Lombardy, Veneto, Tuscany, and Umbria tailored specifically to your project requirements.',
    deliverables: [
      'Bespoke workshop procurement',
      'On-site quality control inspections',
      'Dry-fit pre-assembly at Italian facilities',
      'Factory audit & milestone verification',
    ],
  },
  {
    step: '04',
    title: 'Turnkey Procurement & White-Glove Installation',
    tagline: 'Seamless Delivery Worldwide',
    description:
      'We oversee worldwide packing, crate logistics, customs clearance, and direct site delivery with Italian master installers managing the final turnkey assembly.',
    deliverables: [
      'Customs clearance & maritime freight coordination',
      'Climate-controlled international storage',
      'Supervised installation by master fitters',
      'Handover, snagging & maintenance protocol',
    ],
  },
];

export default function ServicesPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-[#080e00] text-white pt-32">
      {/* Hero Header */}
      <section className="relative px-6 md:px-12 py-20 md:py-28 max-w-[1360px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-4 font-semibold">
            Services & Scope
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.08] text-white mb-6">
            Disciplined engineering for visionary architecture
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            From initial sketch analysis to white-glove turnkey installation, we act as your sole Italian manufacturing and procurement partner.
          </p>
        </motion.div>
      </section>

      {/* Interactive Project Ruler Step Section */}
      <section className="relative px-6 md:px-12 py-16 md:py-28 max-w-[1360px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Step Navigation Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-2">
              Our 4-Stage Methodology
            </span>

            {servicePhases.map((phase, idx) => (
              <button
                key={phase.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-xl border text-left transition-all duration-300 ${
                  activeStep === idx
                    ? 'bg-[#141512] border-[#b65234] shadow-xl'
                    : 'bg-transparent border-white/10 hover:border-white/30 text-white/60 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#b65234] font-medium">
                    Stage {phase.step}
                  </span>
                  <span className="text-xs text-white/40 font-mono">
                    {idx === activeStep ? 'Active' : ''}
                  </span>
                </div>
                <div className="font-serif-luxury text-xl font-normal text-white">
                  {phase.title}
                </div>
              </button>
            ))}
          </div>

          {/* Right Active Step Detailed View */}
          <div className="lg:col-span-7 bg-[#111111] rounded-2xl p-8 md:p-12 border border-white/10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <span className="text-3xl font-mono text-[#b65234]">
                  {servicePhases[activeStep].step}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/50">
                  Comprehensive Protocol
                </span>
              </div>

              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white mb-3 font-light">
                {servicePhases[activeStep].tagline}
              </h2>

              <p className="text-sm md:text-base text-white/70 leading-relaxed font-light mb-8">
                {servicePhases[activeStep].description}
              </p>

              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#b65234] mb-4">
                Key Scope & Deliverables
              </h4>
              <ul className="space-y-3">
                {servicePhases[activeStep].deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="text-[#b65234] mt-0.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-10 mt-10 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50 font-light">
                Ready to review your drawings?
              </span>
              <Link
                href="/contact"
                className="text-xs uppercase tracking-[0.2em] px-6 py-2.5 rounded-full bg-white text-black hover:bg-[#b65234] hover:text-white transition-colors"
              >
                Request consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Environments Sector Breakdown */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1360px] mx-auto border-t border-white/10">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-3 font-semibold">
            Sectors of Excellence
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white">
            Tailored solutions across three living environments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#111111] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#b65234] uppercase tracking-widest mb-3">
                01 / Living
              </div>
              <h3 className="font-serif-luxury text-2xl text-white mb-4">
                Residential Living
              </h3>
              <p className="text-sm text-white/65 leading-relaxed font-light">
                Private villas, penthouses, and heritage country estates requiring bespoke loose furniture packages, high-end architectural joinery, and artisanal stone finishing.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50">
              Cannes • Geneva • Paris • New York • London
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#111111] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#b65234] uppercase tracking-widest mb-3">
                02 / Living
              </div>
              <h3 className="font-serif-luxury text-2xl text-white mb-4">
                Commercial Living
              </h3>
              <p className="text-sm text-white/65 leading-relaxed font-light">
                Boutique luxury hospitality, flagship fashion retail, and high-performance corporate headquarters built to withstand heavy footfall while retaining residential intimacy.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50">
              Hotels • Salons • Spas • Flagship Boutiques
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#111111] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#b65234] uppercase tracking-widest mb-3">
                03 / Living
              </div>
              <h3 className="font-serif-luxury text-2xl text-white mb-4">
                Marine Living
              </h3>
              <p className="text-sm text-white/65 leading-relaxed font-light">
                Superyacht and megayacht interiors engineered with ultra-light honeycomb panels, certified marine-grade veneers, moisture-resistant leathers, and acoustic isolation systems.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50">
              50m–90m Superyachts • Naval Certification
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
