'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const livingCategories = [
    {
      type: 'Residential',
      title: 'Residential Living',
      tagline: 'Private Courtyards & Lakeside Estates',
      img: '/assets/feat-residential.avif',
      count: '24 Projects',
      slug: 'residential',
    },
    {
      type: 'Commercial',
      title: 'Commercial Living',
      tagline: 'Flagships, Art Lounges & Diplomatic Suites',
      img: '/assets/feat-commercial.avif',
      count: '16 Projects',
      slug: 'commercial',
    },
    {
      type: 'Marine',
      title: 'Marine & Riverside',
      tagline: 'Expedition Yachts & Delta River Cruisers',
      img: '/assets/feat-marine.avif',
      count: '8 Projects',
      slug: 'marine',
    },
  ];

  const metrics = [
    { label: 'Years of Atelier Craft', value: '12+' },
    { label: 'Commissions Executed', value: '48+' },
    { label: 'Regional Craft Guilds', value: '06' },
    { label: 'Turnkey Guarantee', value: '100%' },
  ];

  return (
    <section className="relative bg-[#080e00] text-white overflow-hidden pt-28 pb-16 md:pb-24">
      {/* Background High-Res Texture Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-chair.avif"
          alt="Architectural shadow on handcrafted textile"
          className="w-full h-full object-cover object-center scale-105 opacity-60"
        />
      </div>

      {/* Breathing / Pulsing Geometric Grid Pattern */}
      <div
        className="absolute inset-0 z-1 pointer-events-none mix-blend-screen opacity-25 animate-hero-pulse"
        style={{
          backgroundImage: `url('/assets/hero_line_bg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Interactive Radial Spotlight Mask */}
      <div
        className="absolute inset-0 z-2 pointer-events-none opacity-40 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.07), transparent 70%)`,
        }}
      />

      {/* Dark Subtle Vignette Gradient */}
      <div className="absolute inset-0 z-3 bg-gradient-to-b from-[#080e00]/60 via-[#080e00]/40 to-[#080e00]" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12 flex flex-col justify-between">
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center pt-8 pb-12 md:pb-16 flex flex-col items-center">
          {/* Made in Bengal Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#b65234] animate-pulse" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-white/80">
              Crafted in Bangladesh • Dhaka Atelier
            </span>
          </motion.div>

          {/* Central Statement */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight text-white mb-6"
          >
            The poetry of design & <br className="hidden sm:inline" />
            The engineering of craft
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-sm md:text-base text-white/75 font-light max-w-2xl leading-relaxed mb-8"
          >
            PRANGON Studios turns architectural visions into bespoke interior masterpieces, synthesizing delta tropical modernism with centuries of Bengal artisanal heritage.
          </motion.p>

          {/* Call to action & Direct Inquiry */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-black text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:bg-[#b65234] hover:text-white shadow-xl hover:scale-105 active:scale-95"
            >
              Start a project
            </Link>
            <Link
              href="/work"
              className="px-8 py-3.5 rounded-full border border-white/30 text-white text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Explore 48 Works
            </Link>
          </motion.div>
        </div>

        {/* Studio Metrics Row to Utilize Whitespace Cleanly */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 my-4 border-y border-white/10 text-center">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-serif-luxury text-2xl md:text-3xl text-white font-normal">
                {m.value}
              </span>
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/50 mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* 3 Living Categories Asymmetrical Cards */}
        <div className="mt-8 pt-4">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] font-semibold">
              Three Living Environments
            </span>
            <span className="text-xs font-mono text-white/40 tracking-wider hidden sm:inline">
              Bespoke Turnkey Interior Engineering
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {livingCategories.map((card, idx) => (
              <motion.div
                key={card.type}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
                className="group relative rounded-xl overflow-hidden bg-[#111111] border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/35"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-[0.16em] text-white">
                    <span className="text-white/50">For</span>
                    <span className="font-semibold text-white">{card.type}</span>
                    <span className="text-white/50">Living</span>
                  </div>

                  <div className="absolute top-4 right-4 z-10 text-[10px] font-mono text-white/60 bg-black/50 px-2 py-0.5 rounded">
                    {card.count}
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <h3 className="font-serif-luxury text-2xl font-light text-white tracking-wide mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-white/65 font-light mb-3">
                      {card.tagline}
                    </p>
                    <Link
                      href={`/work?category=${card.type}`}
                      className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/80 hover:text-white transition-colors"
                    >
                      View Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
