'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RegionMaterial {
  id: string;
  material: string;
  region: string;
  x: number; // percentage on map
  y: number; // percentage on map
  img: string;
  description: string;
}

const materialsData: RegionMaterial[] = [
  {
    id: 'wood',
    material: 'Wood',
    region: 'Brianza, Lombardy',
    x: 24,
    y: 19,
    img: '/assets/material-wood.avif',
    description: 'Master joinery, steam-bent solid woods, and exquisite high-gloss lacquer finishes perfected over generations.',
  },
  {
    id: 'leather',
    material: 'Leather',
    region: 'Vicenza, Veneto',
    x: 37,
    y: 22,
    img: '/assets/material-leather.avif',
    description: 'Full-grain vegetable-tanned hides, saddle stitching, and supple bespoke upholstery.',
  },
  {
    id: 'glass',
    material: 'Glass',
    region: 'Murano, Veneto',
    x: 44,
    y: 25,
    img: '/assets/material-glass.avif',
    description: 'Hand-blown Venetian glass chandeliers, cast architectural panels, and prismatic crystal details.',
  },
  {
    id: 'marble',
    material: 'Marble',
    region: 'Carrara, Tuscany',
    x: 32,
    y: 35,
    img: '/assets/material-marble.avif',
    description: 'Book-matched Calacatta and Statuario slabs quarried from the Apuan Alps, precision CNC-cut and hand-honed.',
  },
  {
    id: 'metal',
    material: 'Metal',
    region: 'Perugia, Umbria',
    x: 45,
    y: 45,
    img: '/assets/material-metal.avif',
    description: 'Brushed bronze, antique patinas, and structural architectural metals hand-buffed to museum spec.',
  },
  {
    id: 'stone',
    material: 'Travertine',
    region: 'Rome, Lazio',
    x: 48,
    y: 56,
    img: '/assets/material-stone.avif',
    description: 'Porous Roman travertine honed for monumental fireplaces, monolithic sinks, and architectural steps.',
  },
];

export default function CraftHeritage() {
  const [activeMaterial, setActiveMaterial] = useState<RegionMaterial>(materialsData[0]);

  return (
    <section
      data-theme="light"
      className="relative bg-[#f2e8d4] text-[#111111] py-24 md:py-36 overflow-hidden transition-colors"
    >
      {/* Subtle organic wavy texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `url('/assets/wave-bg.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-3 font-semibold">
            Artisan Legacy
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-[#111111]">
            Connection to craft <br className="hidden sm:inline" />
            and tradition
          </h2>
        </div>

        {/* Top Split Layout: Interactive Map + Material Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          {/* Left Text & Active Material Detail */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="font-serif-luxury text-2xl md:text-3xl font-light mb-4 text-[#111111]">
              Perfect craft from the best of Italy
            </h3>
            <p className="text-sm md:text-base text-[#111111]/75 leading-relaxed mb-8">
              We work with artisans from specific Italian regions with time-tested techniques that have been refined over centuries, connecting modern luxury furniture to a legacy of craft and tradition.
            </p>

            {/* Active Material Interactive Pill Card */}
            <div className="bg-[#fcfbf9] rounded-2xl p-6 border border-[#111111]/10 shadow-lg">
              <div className="flex items-center gap-5">
                <img
                  src={activeMaterial.img}
                  alt={activeMaterial.material}
                  className="w-16 h-16 rounded-xl object-cover border border-[#111111]/10 shadow-sm"
                />
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#b65234]">
                    Selected Material
                  </div>
                  <div className="font-serif-luxury text-xl font-normal text-[#111111]">
                    {activeMaterial.material}
                  </div>
                  <div className="text-xs text-[#111111]/60">
                    {activeMaterial.region}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#111111]/70 leading-relaxed border-t border-[#111111]/10 pt-4">
                {activeMaterial.description}
              </p>

              {/* Selector buttons for quick switching */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-2">
                {materialsData.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveMaterial(m)}
                    className={`text-[11px] py-1.5 px-2 rounded-md font-medium text-center transition-all ${
                      activeMaterial.id === m.id
                        ? 'bg-[#111111] text-white shadow'
                        : 'bg-black/5 hover:bg-black/10 text-[#111111]/80'
                    }`}
                  >
                    {m.material}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Italy Map with Hotspots */}
          <div className="lg:col-span-7 relative flex justify-center">
            <div className="relative w-full max-w-[620px] aspect-[4/5] rounded-2xl overflow-hidden bg-black/5 p-4 border border-[#111111]/10 shadow-xl">
              <img
                src="/assets/it-map-materials.avif"
                alt="Map of Italian artisan production regions"
                className="w-full h-full object-contain filter contrast-105"
              />

              {/* Hotspot Markers */}
              {materialsData.map((m) => {
                const isActive = activeMaterial.id === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveMaterial(m)}
                    onMouseEnter={() => setActiveMaterial(m)}
                    style={{ left: `${m.x}%`, top: `${m.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 cursor-pointer"
                    aria-label={`${m.material} in ${m.region}`}
                  >
                    {/* Pulsing Radar Rings */}
                    <div className="relative flex items-center justify-center w-8 h-8">
                      <span className="radar-ring w-8 h-8" />
                      <span className="radar-ring w-8 h-8" />
                      <span className="radar-ring w-8 h-8" />
                      
                      {/* Core Dot */}
                      <span
                        className={`w-3.5 h-3.5 rounded-full transition-transform duration-300 shadow-md ${
                          isActive
                            ? 'bg-[#b65234] scale-125 ring-4 ring-[#b65234]/30'
                            : 'bg-[#111111] group-hover:scale-125'
                        }`}
                      />
                    </div>

                    {/* Popover label on hover or active */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 rounded-lg bg-[#111111] text-white text-[11px] whitespace-nowrap shadow-xl transition-all duration-200 pointer-events-none ${
                        isActive
                          ? 'opacity-100 -translate-y-1 scale-100'
                          : 'opacity-0 scale-95'
                      }`}
                    >
                      <div className="font-semibold">{m.material}</div>
                      <div className="text-[9px] text-white/60">{m.region}</div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#111111]" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Split Feature Cards: Master Artisans & Creative Engineering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="group rounded-2xl overflow-hidden bg-[#fcfbf9] border border-[#111111]/10 shadow-xl flex flex-col justify-between">
            <div className="p-8 md:p-10">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b65234] block mb-2 font-semibold">
                Heritage & Provenance
              </span>
              <h3 className="font-serif-luxury text-2xl md:text-3xl font-light text-[#111111] mb-4">
                Built by master artisans
              </h3>
              <p className="text-sm md:text-base text-[#111111]/75 leading-relaxed">
                This appreciation for the past enriches the final product, lending it an authenticity that resonates with clients who value heritage, hand finishing, and centuries of artistic mastery.
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/assets/craft-villa.avif"
                alt="Close-up of hands assembling curved wooden furniture"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl overflow-hidden bg-[#fcfbf9] border border-[#111111]/10 shadow-xl flex flex-col justify-between">
            <div className="p-8 md:p-10">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b65234] block mb-2 font-semibold">
                Technical Execution
              </span>
              <h3 className="font-serif-luxury text-2xl md:text-3xl font-light text-[#111111] mb-4">
                Creative engineering for complex ideas
              </h3>
              <p className="text-sm md:text-base text-[#111111]/75 leading-relaxed">
                Owning artisanal furniture is about more than just function; it’s about experiencing the story, culture, structural ingenuity, and skill embedded within each bespoke architectural element.
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/assets/craft-engineering.avif"
                alt="Architectural wooden slats detail"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
