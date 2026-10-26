'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
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
    <section className="relative bg-[#080e00] text-white py-16 md:py-20 overflow-hidden border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-2 font-semibold">
            Selected Commissions
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
            Archive (10 Selected Works) →
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollByAmount(-400)}
              disabled={!canScrollLeft}
              className={`w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-all ${
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
              className={`w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-all ${
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

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        className="flex items-start gap-5 md:gap-6 overflow-x-auto no-scrollbar px-6 md:px-12 pb-4 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
      >
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex-shrink-0 w-[260px] sm:w-[290px] md:w-[320px] snap-start group"
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

              {/* Card Image */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#161715] border border-white/10 shadow-xl transition-all duration-500 group-hover:border-white/40">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category Pill Tag */}
                <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-widest text-white/80">
                  {project.category}
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                  <div className="text-[10px] font-mono text-[#b65234] uppercase tracking-wider mb-0.5">
                    {project.location}
                  </div>
                  <div className="text-sm font-medium tracking-wide text-white group-hover:text-white/85 transition-colors line-clamp-1">
                    {project.title}
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

              {/* Initials and explore hint */}
              <div className="flex items-center justify-between text-xs font-mono text-white/40 px-1 mt-1.5">
                <span>{project.initials}</span>
                <span className="text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  Case Study →
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pill Progress Dots */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-6 flex items-center justify-center gap-1.5">
        {projects.slice(0, 10).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (scrollRef.current) {
                const targetScroll = i * (scrollRef.current.scrollWidth / 10);
                scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
              }
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              Math.floor((activeIndex / projects.length) * 10) === i
                ? 'w-7 bg-[#b65234]'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Jump to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
