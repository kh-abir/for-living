'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RegionMaterial {
  id: string;
  material: string;
  region: string;
  district: string;
  x: number; // percentage on map
  y: number; // percentage on map
  img: string;
  tagline: string;
  description: string;
  architecturalApplication: string;
}

const bengalMaterials: RegionMaterial[] = [
  {
    id: 'terracotta',
    material: 'Terracotta & Architectural Clay',
    region: 'Sonargaon & Savar',
    district: 'Dhaka Division',
    x: 48,
    y: 52,
    img: '/assets/bg-complexity.avif',
    tagline: 'Fired Red Delta Clay & Sculptural Jali',
    description: 'Centuries of Bengal temple terracotta heritage reimagined into precision-perforated sun-shading jali bricks, acoustic interior screens, and hand-burnished floor pavers.',
    architecturalApplication: 'Bespoke Facade Screens, Wine Cellars, Feature Wall Cladding',
  },
  {
    id: 'teak',
    material: 'Seasoned Teak & Sundari Hardwood',
    region: 'Chittagong Hill Tracts',
    district: 'Chittagong Division',
    x: 72,
    y: 65,
    img: '/assets/material-wood.avif',
    tagline: 'Kiln-Dried Tropical Hardwood Joinery',
    description: 'Harvested from certified sustainable plantations, seasoned against tropical delta humidity, and hand-planed by master joiners using traditional mortise-and-tenon interlocking joints.',
    architecturalApplication: 'Cantilevered Staircases, Pivot Doors, Monolithic Dining Tables',
  },
  {
    id: 'brass',
    material: 'Hand-Cast Bell Metal & Brass',
    region: 'Dhamrai Heritage Belt',
    district: 'Greater Dhaka',
    x: 43,
    y: 47,
    img: '/assets/material-metal.avif',
    tagline: 'Ancient Lost-Wax Metal Casting (Kasha)',
    description: 'Artisans practicing two-millennia-old lost-wax metallurgy, casting heavy architectural handles, patinated bronze cabinet pulls, and custom acoustic pendant luminaires.',
    architecturalApplication: 'Architectural Door Pulls, Cabinetry Trims, Water Spouts',
  },
  {
    id: 'cane',
    material: 'Golden Jute & Natural Cane',
    region: 'Narsingdi & Sylhet Wetlands',
    district: 'Sylhet & Dhaka',
    x: 62,
    y: 38,
    img: '/assets/material-leather.avif',
    tagline: 'Hand-Woven Natural Fiber Composites',
    description: 'Eco-conscious golden jute fiber pressed with bio-resins and hand-split rattan cane weaves that introduce tactile acoustic warmth and natural texture to modern minimalist spaces.',
    architecturalApplication: 'Acoustic Ceiling Clouds, Wardrobe Infill Panels, Shaded Screens',
  },
  {
    id: 'stone',
    material: 'River-Honed Black Basalt Stone',
    region: 'Jaflong & Piyain Riverbed',
    district: 'Sylhet Division',
    x: 76,
    y: 22,
    img: '/assets/material-marble.avif',
    tagline: 'Himalayan-Fed Riverbed Black Granite',
    description: 'Natural stone washed down from the Khasi hills, hand-honed to a leathered velvet finish. Highly resistant to staining and engineered into monolithic bathroom fixtures.',
    architecturalApplication: 'Monolithic Sinks, Courtyard Fountains, Honed Fireplace Mantels',
  },
  {
    id: 'silk',
    material: 'Hand-Loomed Silk & Jamdani',
    region: 'Narayanganj & Rajshahi',
    district: 'Narayanganj Waterfront',
    x: 52,
    y: 57,
    img: '/assets/material-glass.avif',
    tagline: 'Heritage Mulberry Silk & Muslin Weaves',
    description: 'Woven on wooden pit looms with geometric motifs inherited from the Mughal golden age. Tailored into sheer architectural solar drapery and custom wall tapestries.',
    architecturalApplication: 'Motorized Sheer Drapery, Fabric Wall Paneling, Bespoke Headboards',
  },
];

export default function CraftHeritage() {
  const [activeMaterial, setActiveMaterial] = useState<RegionMaterial>(bengalMaterials[0]);

  return (
    <section
      data-theme="light"
      className="relative bg-[#f2e8d4] text-[#111111] py-16 md:py-24 overflow-hidden transition-colors"
    >
      {/* Subtle organic wavy texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35 mix-blend-multiply"
        style={{
          backgroundImage: `url('/assets/wave-bg.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-2 font-semibold">
            Delta Provenance & Materiality
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light leading-tight tracking-tight text-[#111111]">
            Connection to Bengal craft <br className="hidden sm:inline" />
            and architectural heritage
          </h2>
        </div>

        {/* Interactive Map + Material Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-20">
          {/* Left: Active Material Spec Card */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-serif-luxury text-2xl md:text-3xl font-light mb-3 text-[#111111]">
              Authentic craft from Bangladesh’s artisan guilds
            </h3>
            <p className="text-sm text-[#111111]/75 leading-relaxed mb-6">
              We collaborate with master artisans across 6 specialized delta regions, transforming time-honored artisanal techniques into precision interior engineering suited for contemporary tropical architecture.
            </p>

            {/* Selected Material Card */}
            <div className="bg-[#fcfbf9] rounded-2xl p-6 border border-[#111111]/10 shadow-lg">
              <div className="flex items-start gap-5">
                <img
                  src={activeMaterial.img}
                  alt={activeMaterial.material}
                  className="w-20 h-20 rounded-xl object-cover border border-[#111111]/10 shadow-sm flex-shrink-0"
                />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#b65234] font-semibold">
                    {activeMaterial.region} • {activeMaterial.district}
                  </div>
                  <h4 className="font-serif-luxury text-xl font-normal text-[#111111] mt-0.5">
                    {activeMaterial.material}
                  </h4>
                  <p className="text-xs text-[#111111]/60 font-mono mt-0.5">
                    {activeMaterial.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs text-[#111111]/75 leading-relaxed border-t border-[#111111]/10 pt-4">
                {activeMaterial.description}
              </p>

              <div className="mt-3 pt-3 border-t border-[#111111]/10 flex items-center justify-between text-xs">
                <span className="font-mono text-[#b65234] text-[11px] uppercase tracking-wider">
                  Typical Application:
                </span>
                <span className="font-medium text-[#111111]/85 text-[11px]">
                  {activeMaterial.architecturalApplication}
                </span>
              </div>

              {/* Selector Buttons */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-2">
                {bengalMaterials.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveMaterial(m)}
                    className={`text-[11px] py-1.5 px-2 rounded-md font-medium text-center transition-all cursor-pointer ${
                      activeMaterial.id === m.id
                        ? 'bg-[#111111] text-white shadow'
                        : 'bg-black/5 hover:bg-black/10 text-[#111111]/80'
                    }`}
                  >
                    {m.material.split('&')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Architectural Bangladesh Delta Map with Radar Pulsing Rings */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[560px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#161715] p-6 border border-[#111111]/15 shadow-2xl flex flex-col justify-between">
              {/* Map Header */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/60 pb-3 border-b border-white/10">
                <span>BANGLADESH CRAFT REGIONS</span>
                <span className="text-[#b65234] font-semibold">6 ACTIVE GUILDS</span>
              </div>

              {/* Stylized Delta Map SVG */}
              <div className="relative flex-1 w-full flex items-center justify-center my-2">
                <svg
                  viewBox="0 0 400 480"
                  className="w-full h-full opacity-70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Bangladesh Contour Outline */}
                  <path
                    d="M170 30 C 180 35, 230 40, 260 50 C 290 60, 310 80, 330 110 C 340 130, 320 160, 310 180 C 310 200, 340 230, 350 260 C 360 290, 360 330, 350 370 C 340 400, 300 440, 270 450 C 240 460, 200 440, 180 430 C 160 420, 140 435, 110 430 C 80 420, 70 380, 80 340 C 90 300, 100 270, 110 230 C 120 190, 110 150, 120 120 C 130 90, 150 40, 170 30 Z"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    fill="rgba(255,255,255,0.02)"
                  />
                  {/* Rivers: Padma, Meghna, Jamuna */}
                  <path
                    d="M190 70 Q 200 150 200 220 Q 210 280 230 350 Q 240 400 240 440"
                    stroke="rgba(182, 82, 52, 0.4)"
                    strokeWidth="2"
                  />
                  <path
                    d="M120 190 Q 160 230 200 240 Q 240 270 270 340"
                    stroke="rgba(182, 82, 52, 0.3)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M310 160 Q 260 200 220 250"
                    stroke="rgba(182, 82, 52, 0.3)"
                    strokeWidth="1.5"
                  />
                </svg>

                {/* Hotspot Markers */}
                {bengalMaterials.map((m) => {
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
                      <div className="relative flex items-center justify-center w-8 h-8">
                        <span className="radar-ring w-8 h-8" />
                        <span className="radar-ring w-8 h-8" />
                        <span className="radar-ring w-8 h-8" />
                        
                        <span
                          className={`w-3.5 h-3.5 rounded-full transition-transform duration-300 shadow-md ${
                            isActive
                              ? 'bg-[#b65234] scale-125 ring-4 ring-[#b65234]/40'
                              : 'bg-white group-hover:scale-125'
                          }`}
                        />
                      </div>

                      {/* Tooltip Label */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 rounded-lg bg-[#080e00] text-white text-[11px] whitespace-nowrap shadow-2xl transition-all duration-200 pointer-events-none border border-white/10 ${
                          isActive
                            ? 'opacity-100 -translate-y-1 scale-100'
                            : 'opacity-0 scale-95'
                        }`}
                      >
                        <div className="font-semibold">{m.material.split('&')[0]}</div>
                        <div className="text-[9px] text-[#b65234] font-mono">{m.region}</div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#080e00]" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Map Legend */}
              <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>Coordinates: 23.6850° N, 90.3563° E</span>
                <span>Click markers to explore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group rounded-2xl overflow-hidden bg-[#fcfbf9] border border-[#111111]/10 shadow-xl flex flex-col justify-between">
            <div className="p-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b65234] block mb-2 font-semibold">
                Guild Lineage
              </span>
              <h3 className="font-serif-luxury text-2xl font-light text-[#111111] mb-3">
                Built by delta master artisans
              </h3>
              <p className="text-xs md:text-sm text-[#111111]/75 leading-relaxed font-light">
                From Dhamrai brass founders to Savar clay masters, our collaborative workshops preserve multi-generational techniques, lending an authenticity that resonates with clients who value tactile permanence and soul.
              </p>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="/assets/craft-villa.avif"
                alt="Close-up of curved timber assemble by master craftsman"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          <div className="group rounded-2xl overflow-hidden bg-[#fcfbf9] border border-[#111111]/10 shadow-xl flex flex-col justify-between">
            <div className="p-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b65234] block mb-2 font-semibold">
                Climate & Engineering
              </span>
              <h3 className="font-serif-luxury text-2xl font-light text-[#111111] mb-3">
                Tropical modernism & structural precision
              </h3>
              <p className="text-xs md:text-sm text-[#111111]/75 leading-relaxed font-light">
                Bengal architecture demands harmony with monsoon rains, shifting delta watercourses, and high solar heat. Our engineering pairs deep overhangs and cross-ventilation joinery with aerospace-grade sealants.
              </p>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="/assets/craft-engineering.avif"
                alt="Architectural timber louvers and shaded space"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
