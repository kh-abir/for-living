'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects, Project } from '@/data/projects';
import CtaSection from '@/components/CtaSection';

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Marine'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#080e00] text-white pt-32">
      {/* Work Hero */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-3 font-semibold">
            Portfolio Archive
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6">
            Work that speaks for us
          </h1>
          <p className="text-base text-white/70 font-light max-w-xl leading-relaxed">
            A curated selection of 48 turnkey interior engineering projects executed across private residences, commercial landmarks, and superyachts globally.
          </p>
        </motion.div>

        {/* Filter Bar with Custom Ruler Indicator */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-medium shadow-md'
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
            Displaying {filteredProjects.length} of {projects.length} Works
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 pb-32 max-w-[1440px] mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={project.slug}
              className="group"
            >
              <Link href={`/work/${project.slug}`} className="block">
                {/* Top Ruler Ticks */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="rp_ruler_markers" />
                  <span className="rp_ruler_markers" />
                  <span className="rp_ruler_markers center" />
                  <span className="rp_ruler_markers" />
                  <span className="rp_ruler_markers" />
                </div>

                {/* Card Container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#161715] border border-white/10 shadow-xl transition-all duration-500 group-hover:border-white/40">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-white/80">
                    {project.category}
                  </div>

                  {/* Initials Badge Top Right */}
                  <div className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center font-mono text-[10px] text-white/80">
                    {project.initials}
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <h3 className="font-serif-luxury text-xl font-normal text-white group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs text-white/50 font-mono mt-1 flex items-center justify-between">
                      <span>{project.location}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white">
                        View Case →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Ruler Ticks */}
                <div className="flex items-center justify-between mt-3 px-1">
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
