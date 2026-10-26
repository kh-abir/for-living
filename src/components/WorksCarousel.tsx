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

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
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

  // Smooth continuous auto-scroll drift (pauses on hover or manual drag)
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const step = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isHovered && !isDragging && scrollRef.current) {
        scrollRef.current.scrollLeft += delta * 42; // ~42px per second smooth glide
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScroll - 5) {
          scrollRef.current.scrollLeft = 0;
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

  // Mouse Drag to Scroll handlers
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
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative bg-[#080e00] text-white py-24 md:py-32 overflow-hidden border-t border-white/10">
      {/* Subtle Ambient Radial Backlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(182, 82, 52, 0.35) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
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
              onClick={() => scrollByAmount(-450)}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border border-white/15 backdrop-blur-md bg-white/5 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'hover:border-white hover:bg-white hover:text-black cursor-pointer text-white shadow-lg'
                  : 'opacity-30 cursor-not-allowed text-white/40'
              }`}
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              onClick={() => scrollByAmount(450)}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border border-white/15 backdrop-blur-md bg-white/5 flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'hover:border-white hover:bg-white hover:text-black cursor-pointer text-white shadow-lg'
                  : 'opacity-30 cursor-not-allowed text-white/40'
              }`}
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track - Smooth Continuous Scroll + Drag */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseUpOrLeave();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar px-6 md:px-12 py-8 cursor-grab active:cursor-grabbing select-none"
      >
        {allProjects.map((project, idx) => (
          <div
            key={`${project.slug}-${idx}`}
            className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[420px] transition-all duration-500 ease-out hover:scale-[1.08] hover:-translate-y-2 hover:z-30 relative group"
          >
            <Link href={`/work/${project.slug}`} className="block">
              {/* Top Architectural Precision Ruler Ticks */}
              <div className="flex items-center justify-between mb-3 px-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="w-1.5 h-[1px] bg-white/40" />
                <span className="w-1.5 h-[1px] bg-white/40" />
                <span className="w-3 h-[1px] bg-[#b65234]" />
                <span className="w-1.5 h-[1px] bg-white/40" />
                <span className="w-1.5 h-[1px] bg-white/40" />
              </div>

              {/* Elevated Glassmorphic Card Image Container */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden backdrop-blur-xl bg-white/[0.04] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:border-white/50 group-hover:shadow-[0_35px_80px_rgba(0,0,0,0.95)] transition-all duration-500">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />

                {/* Glassmorphic Category Pill */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] uppercase font-mono tracking-widest text-white/90 shadow-md">
                  {project.category}
                </div>

                {/* Floating Glassmorphic Location & Title Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10 backdrop-blur-md bg-black/55 border border-white/15 rounded-xl p-3.5 transition-all duration-300 group-hover:bg-black/75 group-hover:border-white/30">
                  <div className="text-[10px] font-mono text-[#b65234] uppercase tracking-wider mb-1">
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
                <span className="w-3 h-[1px] bg-[#b65234]" />
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
