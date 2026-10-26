'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

export default function WorksCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

      // calculate approx index
      const itemWidth = 320;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(projects.length - 1, Math.max(0, index)));
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#080e00] text-white py-24 md:py-36 overflow-hidden border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-3 font-semibold">
            Selected Works
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            Work that speaks for us
          </h2>
        </div>

        {/* Carousel Arrow Controls & View All Link */}
        <div className="flex items-center gap-6">
          <Link
            href="/work"
            className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
          >
            View all 48 projects →
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollByAmount(-400)}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'hover:border-white hover:bg-white hover:text-black cursor-pointer text-white'
                  : 'opacity-30 cursor-not-allowed text-white/40'
              }`}
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              onClick={() => scrollByAmount(400)}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'hover:border-white hover:bg-white hover:text-black cursor-pointer text-white'
                  : 'opacity-30 cursor-not-allowed text-white/40'
              }`}
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Draggable / Swipeable Carousel Track */}
      <div
        ref={scrollRef}
        className="flex items-start gap-5 md:gap-7 overflow-x-auto no-scrollbar px-6 md:px-12 pb-6 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
      >
        {projects.map((project, idx) => (
          <div
            key={project.slug}
            className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] snap-start group"
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

              {/* Card Image Wrapper with Hover Zoom */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#161715] border border-white/10 shadow-xl transition-all duration-500 group-hover:border-white/40">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Translucent dark mask */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-white/80">
                  {project.category}
                </div>

                {/* Hover view text */}
                <div className="absolute bottom-4 right-4 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-3 py-1.5 rounded-full bg-white text-black text-[11px] font-medium tracking-wider uppercase">
                  Explore
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

              {/* Title & Initials */}
              <div className="flex flex-col items-center text-center mt-3">
                <div className="text-sm font-medium tracking-wide text-white group-hover:text-white/80 transition-colors">
                  {project.title}
                </div>
                <div className="text-xs font-mono tracking-widest text-white/40 mt-0.5">
                  {project.initials}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Minimalist Pill Progress Dots */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-8 flex items-center justify-center gap-1.5">
        {projects.slice(0, 12).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (scrollRef.current) {
                const targetScroll = i * (scrollRef.current.scrollWidth / 12);
                scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
              }
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              Math.floor((activeIndex / projects.length) * 12) === i
                ? 'w-8 bg-[#b65234]'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Jump to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
