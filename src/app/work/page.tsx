'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import CtaSection from '@/components/CtaSection';

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Marine'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#12100e] text-white pt-28">
      {/* Work Hero */}
      <section className="px-6 md:px-12 py-12 md:py-16 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#bd7b58] block mb-2 font-semibold">
            PRANGON Portfolio Archive
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-4">
            Work that speaks for us
          </h1>
          <p className="text-sm md:text-base text-white/70 font-light max-w-xl leading-relaxed">
            A curated archive of 10 turnkey architectural and interior commissions crafted across Dhaka, Sylhet, Chittagong, and coastal Bangladesh.
          </p>
        </motion.div>

        {/* Filter Bar with Ruler Indicator */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer active:scale-95 ${
                  selectedCategory === cat
                    ? 'bg-[#bd7b58] text-white font-semibold shadow-md'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
                {cat === 'All'
                  ? ` (${projects.length})`
                  : ` (${projects.filter((p) => p.category === cat).length})`}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-white/40 tracking-wider">
            Showing {filteredProjects.length} of {projects.length} Works
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 pb-24 max-w-[1440px] mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              key={project.slug}
              className="group"
            >
              <Link href={`/work/${project.slug}`} className="block">
                {/* Top Ruler Ticks */}
                <div className="flex items-center justify-between mb-2.5 px-1">
                  <span className="rp_ruler_markers" />
                  <span className="rp_ruler_markers" />
                  <span className="rp_ruler_markers center" />
                  <span className="rp_ruler_markers" />
                  <span className="rp_ruler_markers" />
                </div>

                {/* Card Container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#2a241e] border border-white/10 shadow-xl transition-all duration-500 group-hover:border-white/40">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-65 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-widest text-white/80">
                    {project.category}
                  </div>

                  {/* Initials Badge */}
                  <div className="absolute top-3.5 right-3.5 z-10 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center font-mono text-[10px] text-white/80">
                    {project.initials}
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="text-[10px] font-mono text-[#bd7b58] uppercase tracking-wider mb-0.5">
                      {project.location}
                    </div>
                    <h3 className="font-serif-luxury text-lg font-normal text-white group-hover:text-white/90 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <div className="text-[11px] text-white/50 font-mono mt-1 flex items-center justify-between">
                      <span>{project.size}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white">
                        Case Study →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Ruler Ticks */}
                <div className="flex items-center justify-between mt-2.5 px-1">
                  <span className="rp_ruler_markers" />
                  <span className="rp_ruler_markers" />
                  <span className="rp_ruler_markers center" />
                  <span className="rp_ruler_markers" />
                  <span className="rp_ruler_markers" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <CtaSection />
    </div>
  );
}
