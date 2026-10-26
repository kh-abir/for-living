'use client';

import { motion } from 'framer-motion';
import CtaSection from '@/components/CtaSection';

const teamMembers = [
  {
    name: 'Tariqul Islam',
    role: 'Co-Founder & Principal Architect',
    bio: 'Educated in Dhaka and London, pioneering turnkey delta architectural joinery connecting contemporary villas to multi-generational artisan workshops.',
    img: '/assets/founders.avif',
  },
  {
    name: 'Farhana Rahman',
    role: 'Co-Founder & Managing Director',
    bio: 'Over a decade of leadership in sustainable tropical timber supply chains, artisanal guild development, and turnkey contract management.',
    img: '/assets/craft-villa.avif',
  },
  {
    name: 'Kazi Tanvir Ahmed',
    role: 'Head of Technical Engineering',
    bio: 'Oversees 3D parametric BIM models, structural load analysis, and seismic/monsoon climate detailing across residential and marine commissions.',
    img: '/assets/craft-engineering.avif',
  },
  {
    name: 'Nuzhat Sharmin',
    role: 'Director of Delta Craft Guilds',
    bio: 'Directs on-site master craftsmen across Savar, Dhamrai, Narsingdi, and Sylhet to maintain international precision standards.',
    img: '/assets/milan-cathedral.avif',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#12100e] text-white pt-28">
      {/* About Hero */}
      <section className="px-6 md:px-12 py-16 md:py-20 max-w-[1360px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#bd7b58] block mb-3 font-semibold">
            Our Provenance
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.08] text-white mb-4">
            Born in Dhaka, dedicated to the mastery of craft
          </h1>
          <p className="text-sm md:text-base text-white/70 font-light leading-relaxed max-w-2xl">
            Since 2012, PRANGON Studios has bridged the divide between visionary delta architecture and rigorous turnkey execution.
          </p>
        </motion.div>
      </section>

      {/* Narrative Split */}
      <section className="px-6 md:px-12 py-12 md:py-20 max-w-[1360px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-light text-white mb-4 leading-tight">
              One partner, one touchpoint, full responsibility
            </h2>
            <div className="space-y-4 text-xs md:text-sm text-white/70 font-light leading-relaxed">
              <p>
                Architects in Bangladesh balance unique environmental forces—intense tropical rainfall, shifting water tables, deep sun angles, and coastal humidity. Yet the realization of high-concept designs is frequently disrupted by fragmented fabrication and inconsistent finishing.
              </p>
              <p>
                PRANGON Studios was founded to establish a unified benchmark of excellence. By uniting CAD/BIM shop engineering, guild curation across Dhamrai, Savar, and Chittagong, and white-glove site delivery under one disciplined Dhaka umbrella, we safeguard our clients’ vision, budget, and legacy.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/assets/founders.avif"
                alt="PRANGON Studios atelier team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Team Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1360px] mx-auto border-t border-white/10">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#bd7b58] block mb-2 font-semibold">
            Leadership
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-white">
            The minds behind the craft
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`p-5 rounded-2xl bg-[#221d18] border border-white/10 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-white/30 ${
                i % 2 === 1 ? 'lg:translate-y-4' : ''
              }`}
            >
              <div>
                <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-[#2a241e]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale contrast-110"
                  />
                </div>
                <h3 className="font-serif-luxury text-lg text-white font-medium">
                  {member.name}
                </h3>
                <div className="text-[11px] font-mono text-[#bd7b58] uppercase tracking-wider mt-0.5 mb-3">
                  {member.role}
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
