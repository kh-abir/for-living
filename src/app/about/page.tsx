'use client';

import { motion } from 'framer-motion';
import CtaSection from '@/components/CtaSection';

const teamMembers = [
  {
    name: 'Paolo Curzi',
    role: 'Co-Founder & CEO',
    bio: 'Pioneered turnkey interior engineering methodologies connecting global architectural icons to northern Italian artisanal workshops.',
    img: '/assets/founders.avif',
  },
  {
    name: 'Mauro Casamatta',
    role: 'Co-Founder & Executive Chairman',
    bio: 'Decades of leadership in Italian luxury manufacturing, materials research, and international contract procurement.',
    img: '/assets/craft-villa.avif',
  },
  {
    name: 'Gianluca Rossi',
    role: 'Head of Technical Engineering',
    bio: 'Oversees 3D parametric modeling, structural analysis, and joint engineering across residential and marine commissions.',
    img: '/assets/craft-engineering.avif',
  },
  {
    name: 'Elena Moretti',
    role: 'Director of Artisan Procurement',
    bio: 'Coordinates specialized regional craftsmen across Lombardy, Veneto, and Tuscany to ensure museum-grade fabrication.',
    img: '/assets/milan-cathedral.avif',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#080e00] text-white pt-32">
      {/* About Hero */}
      <section className="px-6 md:px-12 py-20 md:py-28 max-w-[1360px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-4 font-semibold">
            Our Heritage
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.08] text-white mb-6">
            Born in Milan, dedicated to the mastery of craft
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            Since 2010, For Living has bridged the gap between pure architectural vision and rigorous Italian engineering.
          </p>
        </motion.div>
      </section>

      {/* Narrative Split */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1360px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-white mb-6 leading-tight">
              One partner, one touchpoint, full responsibility
            </h2>
            <div className="space-y-4 text-sm md:text-base text-white/70 font-light leading-relaxed">
              <p>
                Architects and interior designers spend months cultivating proportions, light, and material textures. Yet the translation into physical reality is frequently compromised by fractured supply chains and inconsistent manufacturing standards.
              </p>
              <p>
                We founded For Living to solve this challenge. By consolidating technical drawings, artisan selection, workshop supervision, and international white-glove installation under one disciplined Milanese umbrella, we safeguard our clients’ vision, budget, and peace of mind.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/assets/founders.avif"
                alt="For Living founders and Milan studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Team Section */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1360px] mx-auto border-t border-white/10">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-3 font-semibold">
            Leadership
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white">
            The minds behind the craft
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`p-6 rounded-2xl bg-[#111111] border border-white/10 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-white/30 ${
                i % 2 === 1 ? 'lg:translate-y-6' : ''
              }`}
            >
              <div>
                <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-[#161715]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale contrast-110"
                  />
                </div>
                <h3 className="font-serif-luxury text-xl text-white font-medium">
                  {member.name}
                </h3>
                <div className="text-xs font-mono text-[#b65234] uppercase tracking-wider mt-1 mb-4">
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
