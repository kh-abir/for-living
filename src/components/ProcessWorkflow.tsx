'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    discipline: 'Climatology & Timber Audits',
    title: 'Microclimate & Value Engineering',
    tagline: 'Smarter Design, Better Performance',
    description:
      'We evaluate delta humidity cycles, monsoon precipitation, and structural timber joinery to ensure generational lifespan while protecting the architect’s purest intent.',
    metric: 'RH 85% Monsoon Stress Tested',
    deliverables: ['Monsoon moisture modeling', 'Sustainable timber kiln audits', 'Cost & fabrication optimization'],
  },
  {
    number: '02',
    discipline: 'Computational 3D Detailing',
    title: 'BIM & Production Detailing',
    tagline: 'Turning Vision into Precision',
    description:
      'Our Dhaka technical atelier engineers millimeter-accurate fabrication blueprints, hidden mortise connections, and precision CNC cutting schedules ready for craft guilds.',
    metric: '±0.3mm Tolerance Threshold',
    deliverables: ['1:1 joinery shop drawings', 'BIM MEP clash coordination', 'CNC precision cutting schedules'],
  },
  {
    number: '03',
    discipline: 'Master Guild Alliance',
    title: 'Guild Selection & Supervision',
    tagline: 'The Right Artisans, The Right Results',
    description:
      'We commission master workshops across Savar, Dhamrai, and Chittagong. Every casting, lost-wax pour, weld, and hand-rubbed oil finish is supervised on the workshop floor.',
    metric: '100% Studio Dry-Fit Assembly',
    deliverables: ['Guild workshop vetting', 'Full-scale studio dry-fit assembly', 'Multi-stage material certifications'],
  },
  {
    number: '04',
    discipline: 'Turnkey Handover & Care',
    title: 'Turnkey Logistics & Installation',
    tagline: 'Flawless On-Site Execution',
    description:
      'We manage white-glove site crating, climate-controlled transport, and supervised architectural assembly, backed by our comprehensive PRANGON enduring craft warranty.',
    metric: '5-Year Structural Craft Guarantee',
    deliverables: ['Custom protective crating', 'Supervised on-site installation', 'Enduring 5-year craft warranty'],
  },
];

export default function ProcessWorkflow() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="relative bg-[#12100e] text-white py-24 md:py-32 overflow-hidden border-t border-white/10">
      {/* Creative Background: Architectural Drafting Grid & Topographic Contour Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="arch-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.75" />
              <circle cx="0" cy="0" r="1.5" fill="rgba(189, 123, 88, 0.4)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arch-grid)" />
        </svg>
      </div>

      {/* Topographic Contour Wave Lines (Vector overlay) */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M-100 200 C300 100 600 350 1000 220 C1300 120 1500 280 1600 240" stroke="rgba(189, 123, 88, 0.25)" strokeWidth="1.2" strokeDasharray="4 6" />
          <path d="M-100 380 C350 260 700 480 1100 340 C1350 240 1520 400 1600 360" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
          <path d="M-100 560 C250 450 650 620 1050 500 C1380 400 1550 580 1600 530" stroke="rgba(189, 123, 88, 0.2)" strokeWidth="1" strokeDasharray="3 5" />
        </svg>
      </div>

      {/* Ambient Lighting Vignette */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[400px] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle at center, rgba(189, 123, 88, 0.3) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-10 w-[500px] h-[350px] pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle at center, rgba(124, 140, 111, 0.3) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#bd7b58] block mb-3 font-semibold">
              Execution Discipline & Protocol
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight text-white">
              We handle all <br className="hidden sm:inline" />
              the complexity
            </h2>
          </div>

          <div className="text-xs md:text-sm text-white/60 font-light max-w-md leading-relaxed">
            From monsoon climate engineering to master artisan oversight, we absorb every friction point so architectural studios can design with absolute freedom.
          </div>
        </div>

        {/* Technical Milestone Conduit Line (Desktop) */}
        <div className="hidden lg:flex items-center justify-between relative mb-8 px-6">
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-white/10 via-[#bd7b58]/40 to-white/10 z-0" />
          {steps.map((s, idx) => (
            <div
              key={`node-${s.number}`}
              className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                activeStep === idx
                  ? 'border-[#bd7b58] bg-[#bd7b58] text-white shadow-[0_0_20px_rgba(189, 123, 88,0.8)] scale-110'
                  : 'border-white/20 bg-[#12100e] text-white/50'
              }`}
            >
              <span className="font-mono text-xs font-bold">{s.number}</span>
            </div>
          ))}
        </div>

        {/* 4 Glassmorphic Architectural Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onMouseEnter={() => setActiveStep(idx)}
              onMouseLeave={() => setActiveStep(null)}
              className="relative flex flex-col justify-between p-7 rounded-2xl backdrop-blur-2xl bg-white/[0.03] border border-white/10 group hover:border-[#bd7b58]/60 hover:bg-white/[0.06] hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-all duration-500"
            >
              {/* Top Accent Indicator */}
              <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#bd7b58] to-[#e2c5a7]/60 transition-all duration-500 absolute top-0 left-0 rounded-t-2xl" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-3xl font-light text-[#bd7b58] group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 border border-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    {step.discipline}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl font-normal text-white mb-2 leading-snug group-hover:text-[#e2c5a7] transition-colors">
                  {step.title}
                </h3>
                <div className="text-[11px] font-mono text-[#bd7b58]/90 mb-3 tracking-wide">
                  {step.tagline}
                </div>
                <p className="text-xs text-white/65 leading-relaxed font-light mb-6">
                  {step.description}
                </p>
              </div>

              {/* Technical Metric & Deliverables */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                {/* Metric pill */}
                <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bd7b58]" />
                  <span>{step.metric}</span>
                </div>

                <div className="space-y-2">
                  {step.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-white/70">
                      <span className="text-[#bd7b58] leading-tight mt-0.5">✦</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
