'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse move handler for spotlight mask micro-interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transformations for hero elements
  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.45], [0, -60]);
  const textBlur = useTransform(scrollYProgress, [0, 0.45], ['blur(0px)', 'blur(10px)']);
  const overlayDarken = useTransform(scrollYProgress, [0, 0.5], [0.35, 0.85]);

  // Parallax elevation for the 3 living cards
  const card1Y = useTransform(scrollYProgress, [0.1, 0.8], [240, -40]);
  const card2Y = useTransform(scrollYProgress, [0.1, 0.8], [320, -10]);
  const card3Y = useTransform(scrollYProgress, [0.1, 0.8], [280, -30]);

  const livingCards = [
    {
      type: 'Commercial',
      title: 'Commercial Living',
      img: '/assets/feat-commercial.avif',
      alt: 'Luxury commercial interior fitout by Italian artisans',
      y: card1Y,
    },
    {
      type: 'Residential',
      title: 'Residential Living',
      img: '/assets/feat-residential.avif',
      alt: 'Bespoke residential architectural living space',
      y: card2Y,
    },
    {
      type: 'Marine',
      title: 'Marine Living',
      img: '/assets/feat-marine.avif',
      alt: 'Superyacht naval architecture and bespoke interior',
      y: card3Y,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[160vh] md:min-h-[185vh] bg-[#080e00] text-white overflow-hidden"
    >
      {/* Pinned Cinematic Background Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Base Layer: High-Res Handcrafted Fabric / Chair Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-chair.avif"
            alt="Italian craftsmanship shadow detail"
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>

        {/* Breathing / Pulsing Geometric Line Pattern Layer */}
        <div
          className="absolute inset-0 z-1 pointer-events-none mix-blend-screen opacity-20 animate-hero-pulse"
          style={{
            backgroundImage: `url('/assets/hero_line_bg.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Interactive Radial Spotlight Mask that follows mouse */}
        <div
          className="absolute inset-0 z-2 pointer-events-none opacity-40 transition-opacity duration-300 hidden md:block"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 70%)`,
          }}
        />

        {/* Scroll-driven Dark Dimmer Overlay */}
        <motion.div
          className="absolute inset-0 z-3 bg-[#080e00]"
          style={{ opacity: overlayDarken }}
        />

        {/* Top Spacer for floating navigation */}
        <div className="h-28 w-full z-10" />

        {/* Central Brand Statement */}
        <motion.div
          className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center my-auto"
          style={{
            opacity: textOpacity,
            y: textY,
            filter: textBlur,
          }}
        >
          {/* Made in Italy Crest & Script */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-3 mb-6"
          >
            {/* Elegant Emblem SVG */}
            <svg
              width="32"
              height="42"
              viewBox="0 0 36 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90 drop-shadow"
            >
              <path
                d="M18 2C9.5 2 3 8.5 3 17C3 26 18 46 18 46C18 46 33 26 33 17C33 8.5 26.5 2 18 2Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <circle cx="18" cy="17" r="6" stroke="white" strokeWidth="1.5" />
            </svg>
            <span className="font-cursive-luxury text-2xl md:text-3xl text-white/70 tracking-wide">
              Made in Italy
            </span>
          </motion.div>

          {/* Core Brand Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] tracking-tight max-w-4xl text-white drop-shadow-sm mb-6"
          >
            The poetry of design & <br className="hidden sm:inline" />
            The engineering of craft
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-sm md:text-base text-white/75 font-light max-w-xl mx-auto leading-relaxed mb-8"
          >
            We turn architectural designs into masterpiece interiors crafted by genius Italian artists.
          </motion.p>

          {/* Call to action button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 text-xs uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#080e00] hover:scale-105 active:scale-95 shadow-lg"
            >
              Start a project
            </Link>
          </motion.div>
        </motion.div>

        {/* Down Scroll Indicator */}
        <motion.div
          className="relative z-10 pb-8 flex flex-col items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.25em]"
          style={{ opacity: textOpacity }}
        >
          <span>Scroll to explore</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </motion.div>
      </div>

      {/* Parallax Floating Living Categories Cards */}
      <div className="relative z-20 max-w-[1360px] mx-auto px-6 md:px-12 -mt-[35vh] md:-mt-[45vh] pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {livingCards.map((card, idx) => (
            <motion.div
              key={card.type}
              style={{ y: card.y }}
              className={`group relative rounded-xl overflow-hidden shadow-2xl bg-[#111111] border border-white/10 transition-all duration-500 hover:border-white/30 ${
                idx === 1 ? 'md:translate-y-8' : ''
              }`}
            >
              {/* Image with slow luxurious hover scale */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Animated Floating Tag */}
                <div className="absolute top-5 left-5 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-[0.16em] text-white">
                  <span className="text-white/50">For</span>
                  <span className="font-semibold text-white">{card.type}</span>
                  <span className="text-white/50">Living</span>
                </div>

                {/* Bottom title & link */}
                <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
                  <h3 className="font-serif-luxury text-xl font-light text-white tracking-wide">
                    {card.title}
                  </h3>
                  <Link
                    href={`/work?category=${card.type}`}
                    className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white text-xs transition-colors group-hover:bg-white group-hover:text-black"
                  >
                    →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
