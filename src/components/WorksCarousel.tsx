'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function WorksCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // Duplicate items for infinite seamless scroll flow
  const allProjects = [...projects, ...projects];
  const driftAccumulator = useRef(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const nextLeft = scrollLeft > 20;
    const nextRight = scrollLeft < scrollWidth - clientWidth - 20;
    setCanScrollLeft((prev) => (prev !== nextLeft ? nextLeft : prev));
    setCanScrollRight((prev) => (prev !== nextRight ? nextRight : prev));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  // Smooth continuous auto-scroll drift (faster 80px/s, subpixel accumulator, pause on hover/drag)
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const step = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1); // clamp delta to prevent jump
      lastTime = time;

      if (!isHovered && !isDragging && scrollRef.current) {
        driftAccumulator.current += delta * 80; // 80px per second lively smooth flow

        if (Math.abs(driftAccumulator.current) >= 1) {
          const stepPx = Math.trunc(driftAccumulator.current);
          scrollRef.current.scrollLeft += stepPx;
          driftAccumulator.current -= stepPx;

          const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
          if (scrollRef.current.scrollLeft >= maxScroll - 10) {
            scrollRef.current.scrollLeft = 0;
          }
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, isDragging]);

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  // Trackpad / Mouse Wheel smooth horizontal scroll conversion
  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    scrollRef.current.scrollLeft += delta * 0.9;
    checkScroll();
  };

  // Mouse Drag to Scroll handlers with smooth tracking
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.35;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
    checkScroll();
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="work" className="relative bg-[#12100e] text-white py-24 md:py-32 overflow-hidden border-t border-white/10 scroll-mt-20">
      {/* Subtle Ambient Radial Backlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(189, 123, 88, 0.35) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#bd7b58] block mb-2 font-semibold">
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
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#e2c5a7] hover:text-[#bd7b58] transition-colors cursor-pointer"
          >
            <span>Archive (10 Selected Works)</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => scrollByAmount(-450)}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'border-white/20 backdrop-blur-xl bg-white/10 hover:border-[#bd7b58] hover:bg-[#bd7b58] hover:text-white cursor-pointer text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] active:scale-90'
                  : 'border-white/10 bg-white/[0.02] opacity-30 cursor-not-allowed text-white/30'
              }`}
              aria-label="Previous project"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollByAmount(450)}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'border-white/20 backdrop-blur-xl bg-white/10 hover:border-[#bd7b58] hover:bg-[#bd7b58] hover:text-white cursor-pointer text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] active:scale-90'
                  : 'border-white/10 bg-white/[0.02] opacity-30 cursor-not-allowed text-white/30'
              }`}
              aria-label="Next project"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track - Smooth Continuous Scroll + Drag + Wheel */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseUpOrLeave();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar px-6 md:px-12 py-14 md:py-20 cursor-grab active:cursor-grabbing select-none transform-gpu will-change-scroll"
      >
        {allProjects.map((project, idx) => (
          <div
            key={`${project.slug}-${idx}`}
            className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[420px] origin-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.18] hover:z-40 relative group transform-gpu will-change-transform"
          >
            <Link href={`/work/${project.slug}`} className="block">
              {/* Top Architectural Precision Ruler Ticks */}
              <div className="flex items-center justify-between mb-3 px-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="w-1.5 h-[1px] bg-white/40" />
                <span className="w-1.5 h-[1px] bg-white/40" />
                <span className="w-3 h-[1px] bg-[#bd7b58]" />
                <span className="w-1.5 h-[1px] bg-white/40" />
                <span className="w-1.5 h-[1px] bg-white/40" />
              </div>

              {/* Elevated Tall Vertical Glassmorphic Card Image Container */}
              <div className="relative aspect-[9/13] rounded-2xl overflow-hidden backdrop-blur-xl bg-white/[0.04] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:border-white/60 group-hover:shadow-[0_45px_110px_rgba(0,0,0,0.98)] transition-all duration-500">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-300" />

                {/* Glassmorphic Category Pill */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] uppercase font-mono tracking-widest text-white/90 shadow-md">
                  {project.category}
                </div>

                {/* Floating Glassmorphic Location & Title Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10 backdrop-blur-md bg-black/60 border border-white/15 rounded-xl p-4 transition-all duration-300 group-hover:bg-black/80 group-hover:border-white/35">
                  <div className="text-[10px] font-mono text-[#bd7b58] uppercase tracking-wider mb-1">
                    {project.location} • {project.year}
                  </div>
                  <div className="text-base font-serif-luxury font-normal tracking-wide text-white group-hover:text-white transition-colors line-clamp-1">
                    {project.title}
                  </div>
                </div>
              </div>

              {/* Bottom Architectural Precision Ruler Ticks */}
              <div className="flex items-center justify-between mt-3 px-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="w-1.5 h-[1px] bg-white/40" />
                <span className="w-1.5 h-[1px] bg-white/40" />
                <span className="w-3 h-[1px] bg-[#bd7b58]" />
                <span className="w-1.5 h-[1px] bg-white/40" />
                <span className="w-1.5 h-[1px] bg-white/40" />
              </div>

              {/* Initials & Explore Prompt */}
              <div className="flex items-center justify-between text-xs font-mono text-white/40 px-2 mt-2">
                <span>{project.initials}</span>
                <span className="text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity text-white font-sans">
                  Case Study →
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
