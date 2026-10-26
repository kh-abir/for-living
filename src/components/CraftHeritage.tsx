'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MaterialHotspot {
  id: string;
  material: string;
  region: string;
  top: string;
  left: string;
  img: string;
  description: string;
}

const bdMaterials: MaterialHotspot[] = [
  {
    id: 'teak',
    material: 'Seasoned Teak Wood',
    region: 'Chittagong Hill Tracts',
    top: '12%',
    left: '26%',
    img: '/assets/material-wood.avif',
    description: 'Kiln-dried tropical hardwood joinery crafted with mortise-and-tenon interlocking precision.',
  },
  {
    id: 'brass',
    material: 'Lost-Wax Brass & Bell Metal',
    region: 'Dhamrai Heritage Belt',
    top: '22%',
    left: '42%',
    img: '/assets/material-metal.avif',
    description: 'Two-millennia-old casting tradition for heavy architectural pulls, bronze hinges, and trims.',
  },
  {
    id: 'terracotta',
    material: 'Terracotta & Sculptural Jali',
    region: 'Savar & Sonargaon',
    top: '36%',
    left: '58%',
    img: '/assets/material-marble.avif',
    description: 'Fired red delta clay perforated for tropical sun-shading, cross-ventilation, and tactile warmth.',
  },
  {
    id: 'stone',
    material: 'Honed Black River Basalt',
    region: 'Jaflong Riverbed, Sylhet',
    top: '52%',
    left: '30%',
    img: '/assets/material-stone.avif',
    description: 'Natural riverbed stone hand-honed to a leathered velvet finish for monolithic architectural fixtures.',
  },
  {
    id: 'cane',
    material: 'Golden Jute & Hand-Woven Cane',
    region: 'Sylhet & Narsingdi',
    top: '64%',
    left: '48%',
    img: '/assets/material-leather.avif',
    description: 'Tactile acoustic woven panels and rattan inserts balancing tropical warmth with minimal lines.',
  },
  {
    id: 'glass',
    material: 'Architectural Glazing & Silk',
    region: 'Narayanganj & Dhaka',
    top: '76%',
    left: '66%',
    img: '/assets/material-glass.avif',
    description: 'High-performance solar control glass paired with bespoke motorized hand-loomed Jamdani drapery.',
  },
];

export default function CraftHeritage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      data-theme="light"
      className="section_craft-italy relative bg-[#f2e8d4] text-[#111111] py-16 md:py-24 overflow-hidden"
    >
      {/* Background Wave Texture Overlay (Exact original Webflow asset) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `url('/assets/wave-bg.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="mb-10 md:mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-2 font-semibold">
            Provenance & Guilds
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light leading-[1.12] tracking-tight text-[#111111]">
            Connection to craft and tradition
          </h2>
        </div>

        {/* 2-Column Asymmetrical Grid (Exact layout: Left 58% card, Right 42% stacked cards) */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
          {/* Left Column: Large Interactive Map & Provenance Card (58% width on desktop) */}
          <div className="w-full lg:w-[58%] rounded-2xl bg-[#ffffff80] backdrop-blur-sm border border-black/5 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            {/* Top Text Content */}
            <div className="mb-6">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light text-[#111111] mb-3">
                Perfect craft from Bangladesh&apos;s artisan guilds
              </h3>
              <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-light">
                We work with master artisans from specific delta regions with time-tested techniques that have been refined over centuries, connecting contemporary architecture to a legacy of craft and tradition.
              </p>
            </div>

            {/* Interactive Regional Map Wrapper */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#e9dec7]/40 border border-black/5 flex items-center justify-center p-4">
              {/* Map Asset */}
              <img
                src="/assets/it-map-materials.avif"
                alt="Architectural regional craft map of materials"
                className="w-full h-full object-contain filter contrast-105 opacity-85 select-none pointer-events-none"
              />

              {/* Hotspot Markers */}
              {bdMaterials.map((m) => {
                const isActive = activeId === m.id;
                return (
                  <div
                    key={m.id}
                    style={{ top: m.top, left: m.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                    onMouseEnter={() => setActiveId(m.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onClick={() => setActiveId(isActive ? null : m.id)}
                  >
                    {/* Radar Pulse Trigger */}
                    <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer">
                      <span className="radar-ring w-8 h-8" />
                      <span className="radar-ring w-8 h-8" />
                      <span className="radar-ring w-8 h-8" />
                      <span
                        className={`w-3 h-3 rounded-full transition-all duration-300 shadow-md ${
                          isActive
                            ? 'bg-[#b65234] scale-125 ring-4 ring-[#b65234]/30'
                            : 'bg-[#111111] group-hover:bg-[#b65234] group-hover:scale-110'
                        }`}
                      />
                    </div>

                    {/* Exact Original Popover: Material Thumbnail + Title + Region */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -12, scale: 0.96 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: -8, scale: 0.96 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="absolute left-9 top-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-md rounded-lg py-2.5 px-4 pl-9 shadow-xl border border-black/10 whitespace-nowrap pointer-events-none"
                        >
                          {/* Round Material Thumbnail on Left Edge */}
                          <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full overflow-hidden border border-black/15 shadow-md bg-white">
                            <img
                              src={m.img}
                              alt={m.material}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="font-serif-luxury text-xs sm:text-sm font-medium text-[#111111]">
                            {m.material}
                          </div>
                          <div className="text-[10px] text-[#111111]/60 font-mono tracking-wider">
                            {m.region}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom Quick Material Tags */}
            <div className="mt-4 pt-3 border-t border-black/5 flex flex-wrap gap-1.5 items-center justify-between text-[11px] font-mono text-[#111111]/60">
              <span className="uppercase text-[#b65234] font-semibold">Hover pins:</span>
              <div className="flex flex-wrap gap-2">
                {bdMaterials.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveId(m.id)}
                    className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                      activeId === m.id
                        ? 'bg-[#111111] text-white'
                        : 'bg-black/5 hover:bg-black/10 text-[#111111]'
                    }`}
                  >
                    {m.material.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 2 Stacked Feature Cards (42% width on desktop) */}
          <div className="w-full lg:w-[42%] flex flex-col gap-6 md:gap-8 justify-between">
            {/* Small Card 1: Built by master artisans */}
            <div className="rounded-2xl bg-[#ffffff80] backdrop-blur-sm border border-black/5 overflow-hidden flex flex-col justify-between shadow-sm group">
              <div className="p-6 sm:p-7">
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-light text-[#111111] mb-2.5">
                  Built by master artisans
                </h3>
                <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-light">
                  This appreciation for the past enriches the final product, lending it an authenticity that resonates with clients who value heritage and artistry.
                </p>
              </div>
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src="/assets/craft-villa.avif"
                  alt="Close-up of hands assembling curved teak wood chair"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Small Card 2: Creative engineering for complex ideas */}
            <div className="rounded-2xl bg-[#ffffff80] backdrop-blur-sm border border-black/5 overflow-hidden flex flex-col justify-between shadow-sm group">
              <div className="p-6 sm:p-7">
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-light text-[#111111] mb-2.5">
                  Creative engineering for complex ideas
                </h3>
                <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-light">
                  Owning artisanal furniture is about more than just function; it&apos;s about experiencing the story, culture, and skill embedded within each piece.
                </p>
              </div>
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src="/assets/craft-engineering.avif"
                  alt="Person looking through architectural wooden slats"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
