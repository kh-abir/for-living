'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [hasMovedCursor, setHasMovedCursor] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePos({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
      if (!hasMovedCursor) setHasMovedCursor(true);
      setIsPaused(false);

      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = setTimeout(() => {
        setIsPaused(true);
      }, 350); // 350ms of stillness triggers subtle breathing pulse
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [hasMovedCursor]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1: Brand statement dissolves smoothly with blur as user begins scrolling (0 -> 0.16)
  const textOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.16], [0, -40]);
  const textScale = useTransform(scrollYProgress, [0, 0.16], [1, 0.95]);
  const textBlur = useTransform(scrollYProgress, [0, 0.16], ['blur(0px)', 'blur(8px)']);
  const textPointerEvents = useTransform(scrollYProgress, (v) => (v > 0.14 ? 'none' : 'auto'));

  // Phase 2: 3 Living Cards emerge linearly from bottom edge (0.12 -> 0.38)
  // Reaches optical center by 0.38
  const cardsContainerY = useTransform(scrollYProgress, [0.12, 0.38], ['100vh', '0vh']);

  // Subtle organic parallax stagger on individual cards
  const cardCommercialY = useTransform(scrollYProgress, [0.12, 0.38], ['4vh', '0vh']);
  const cardResidentialY = useTransform(scrollYProgress, [0.12, 0.38], ['10vh', '-4vh']);
  const cardMarineY = useTransform(scrollYProgress, [0.12, 0.38], ['6vh', '2vh']);

  // Phase 3 & 4: Cards stay docked in center from 0.38 to 0.60,
  // then recede deep into background as "Provenance & Guilds" scrolls up over them (0.60 -> 0.98)
  const cardsScale = useTransform(scrollYProgress, [0.60, 0.96], [1, 0.88]);
  const cardsOpacity = useTransform(scrollYProgress, [0.60, 0.96], [1, 0.25]);
  const cardsBlur = useTransform(scrollYProgress, [0.60, 0.96], ['blur(0px)', 'blur(5px)']);
  const cardsPointerEvents = useTransform(scrollYProgress, (v) => (v >= 0.36 && v <= 0.64 ? 'auto' : 'none'));

  // Hero background wall recedes into depth as next section stacks over
  const heroBackgroundOpacity = useTransform(scrollYProgress, [0.60, 0.98], [1, 0.15]);
  const heroOverlayDark = useTransform(scrollYProgress, [0.10, 0.60, 0.95], [0.12, 0.82, 0.96]);
  const heroRecedeScale = useTransform(scrollYProgress, [0.60, 0.98], [1, 0.86]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="section_hero hp_section_hero relative min-h-[350vh] bg-[#12100e] text-white"
    >
      {/* Pinned 100vh Viewport that stays completely still while next section stacks over */}
      <motion.div
        style={{
          scale: heroRecedeScale,
        }}
        className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden flex flex-col justify-center items-center z-0 origin-center"
      >
        {/* Layer 0: Aesthetic Boho Terracotta Wall Photographic Background */}
        <motion.div
          style={{ opacity: heroBackgroundOpacity }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <picture>
            <source srcSet="/assets/hero-terracotta-wall.webp" type="image/webp" />
            <img
              src="/assets/hero-terracotta-wall.jpg"
              alt="Artisanal terracotta boho architectural wall texture"
              className="w-full h-full object-cover object-center scale-105 select-none pointer-events-none filter brightness-[0.72] contrast-[1.04] saturate-[1.02]"
            />
          </picture>
        </motion.div>

        {/* Layer 0.5: Cinematic Directional & Radial Shadow Overlays (Softened for greater background visibility) */}
        <motion.div
          style={{ opacity: heroBackgroundOpacity }}
          className="absolute inset-0 z-1 pointer-events-none"
        >
          {/* Top-down directional shadow for navbar and upper contrast */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(18, 16, 14, 0.68) 0%, rgba(18, 16, 14, 0.12) 28%, rgba(18, 16, 14, 0.24) 62%, rgba(18, 16, 14, 0.88) 100%)',
            }}
          />
          {/* Spatial vignette framing the central statement */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 90% 82% at 50% 48%, rgba(18, 16, 14, 0.08) 0%, rgba(18, 16, 14, 0.48) 65%, rgba(18, 16, 14, 0.92) 100%)',
            }}
          />
        </motion.div>

        {/* Layer 1: Dynamic Cursor Spotlight - Ultra-Subtle Elliptical Ambient Wash */}
        {/* Blueprint line art is temporarily hidden per user request */}
        {hasMovedCursor && (
          <motion.div
            style={{ opacity: heroBackgroundOpacity }}
            animate={
              isPaused
                ? {
                    opacity: [0.96, 1, 0.96],
                    scale: [1, 1.003, 1],
                  }
                : {
                    opacity: 0.98,
                    scale: 1,
                  }
            }
            transition={
              isPaused
                ? {
                    duration: 3.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
                : { duration: 0.25 }
            }
            className="absolute inset-0 z-2 pointer-events-none overflow-hidden origin-center"
          >
            {/* Non-circular organic ellipse wash: generous architectural brightness lift */}
            <div
              style={{
                WebkitMaskImage: `radial-gradient(ellipse 850px 480px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.12) 68%, transparent 85%)`,
                maskImage: `radial-gradient(ellipse 850px 480px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.12) 68%, transparent 85%)`,
              }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <picture>
                <source srcSet="/assets/hero-terracotta-wall.webp" type="image/webp" />
                <img
                  src="/assets/hero-terracotta-wall.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center scale-105 select-none pointer-events-none filter brightness-[0.84] contrast-[1.04] saturate-[1.04]"
                />
              </picture>
            </div>

            {/* Ultra-subtle non-circular warm ambient reflection with broader coverage */}
            <div
              className="absolute inset-0 mix-blend-screen pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 880px 500px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 235, 210, 0.04) 0%, rgba(220, 140, 90, 0.018) 55%, transparent 85%)`,
              }}
            />
          </motion.div>
        )}

        {/* Blueprint line art (hidden for now on cursor area per user request):
        <motion.div
          animate={isPaused ? { opacity: [0.30, 0.50, 0.30], scale: [1, 1.018, 1] } : { opacity: 0.38, scale: 1 }}
          transition={isPaused ? { duration: 2.2, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
          style={{
            WebkitMaskImage: hasMovedCursor
              ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.7) 60%, transparent 100%)`
              : 'radial-gradient(0px circle at 0px 0px, transparent 0%, transparent 100%)',
            maskImage: hasMovedCursor
              ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.7) 60%, transparent 100%)`
              : 'radial-gradient(0px circle at 0px 0px, transparent 0%, transparent 100%)',
          }}
          className="absolute inset-0 z-2 pointer-events-none overflow-hidden"
        >
          <img
            src="/assets/hero_line_bg.webp"
            alt=""
            className="w-full h-full object-cover object-center mix-blend-screen select-none filter contrast-90 brightness-[0.50] sepia-[0.35]"
          />
        </motion.div>
        */}

        {/* Layer 2: Warm Subtle Terracotta Atmospheric Core Glow */}
        <motion.div
          style={{
            opacity: heroBackgroundOpacity,
            background:
              'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(189, 123, 88, 0.3) 0%, rgba(189, 123, 88, 0.08) 50%, transparent 78%)',
          }}
          className="absolute inset-0 z-3 pointer-events-none"
        />

        {/* Layer 3: Progressive Fade / Darkening Overlay (stays still in background) */}
        <motion.div
          className="absolute inset-0 z-4 pointer-events-none bg-[#12100e]"
          style={{
            opacity: heroOverlayDark,
          }}
        />

        {/* Layer 4: Central Brand Statement (Dissolves quickly on Initial Scroll) */}
        <motion.div
          className="relative z-10 max-w-[1360px] w-full mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center my-auto pt-12 md:pt-16"
          style={{
            opacity: textOpacity,
            y: textY,
            scale: textScale,
            filter: textBlur,
            pointerEvents: textPointerEvents,
          }}
        >
          {/* Provenance Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col items-center gap-2 mb-5"
          >
            <span className="font-cursive-luxury text-2xl md:text-3xl text-white/75 tracking-wide">
              Crafted in Bangladesh
            </span>
          </motion.div>

          {/* Core Brand Headline: Exactly 2 Lines Guaranteed */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif-luxury uppercase text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal leading-[1.08] tracking-normal text-center w-full max-w-[1360px] mb-6 bg-gradient-to-br from-white via-white to-[#e2c5a7]/80 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          >
            <span className="block whitespace-nowrap">THE POETRY OF DESIGN &amp;</span>
            <span className="block whitespace-nowrap">THE ENGINEERING OF CRAFT</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="text-sm md:text-base text-white/90 font-light max-w-xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          >
            We turn architectural designs into masterpiece interiors crafted by genius artisans.
          </motion.p>

          {/* Start a project Button with Concentric Luxury Outline & Tactile Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="button-outline p-[4px] rounded-full border border-white/30 inline-flex transition-all duration-300 hover:border-[#bd7b58] hover:shadow-[0_0_32px_rgba(189,123,88,0.5)] shadow-[0_12px_36px_rgba(0,0,0,0.65)]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#12100e] font-sans text-xs uppercase font-medium tracking-[0.2em] shadow-2xl transition-all duration-300 hover:bg-[#bd7b58] hover:text-white active:scale-95 cursor-pointer"
              >
                START A PROJECT
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Layer 5: Parallax Floating Living Categories Cards */}
        {/* Rises into center, stays pinned and steady, then recedes deep into background as Provenance & Guilds scrolls above */}
        <motion.div
          style={{
            y: cardsContainerY,
            scale: cardsScale,
            opacity: cardsOpacity,
            filter: cardsBlur,
            pointerEvents: cardsPointerEvents,
          }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none origin-center"
        >
          <div className="max-w-[1360px] w-full mx-auto px-5 sm:px-8 md:px-12 flex md:grid md:grid-cols-3 gap-4 md:gap-8 items-center overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory justify-start md:justify-center py-4 pointer-events-auto">
            {/* Card 1: Commercial Living (Left) */}
            <motion.div
              style={{ y: cardCommercialY }}
              className="section_hero_followup_content_card pointer-events-auto group relative w-[76vw] max-w-[290px] sm:w-[320px] md:w-full shrink-0 md:shrink aspect-[4/5] max-h-[50vh] md:max-h-none rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-md bg-[#221d18]/80 border border-white/15 transition-all duration-500 hover:border-white/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.85)] cursor-pointer snap-center"
            >
              <Link href="/work/?category=Commercial" className="block w-full h-full relative">
                <img
                  src="/assets/feat-commercial.avif"
                  alt="Interior view of luxury commercial boutique space"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />

                {/* Original Interactive Hover Tag with Glassmorphism */}
                <div className="for_living_feat_tag_container">
                  <div className="for_living_feat_tag_container_inner backdrop-blur-md bg-black/50 border border-white/15 shadow-xl">
                    <span className="for-living-display-text for-prefix">For</span>
                    <div className="for_living_feat_tag">Commercial</div>
                    <span className="for-living-display-text living-suffix">Living</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 2: Residential Living (Center - Offset) */}
            <motion.div
              style={{ y: cardResidentialY }}
              className="section_hero_followup_content_card card-1 pointer-events-auto group relative w-[76vw] max-w-[290px] sm:w-[320px] md:w-full shrink-0 md:shrink aspect-[4/5] max-h-[50vh] md:max-h-none rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-md bg-[#221d18]/80 border border-white/15 transition-all duration-500 hover:border-white/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.85)] cursor-pointer snap-center"
            >
              <Link href="/work/?category=Residential" className="block w-full h-full relative">
                <img
                  src="/assets/feat-residential.avif"
                  alt="Modern luxury residence with illuminated waters at dusk"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />

                {/* Original Interactive Hover Tag with Glassmorphism */}
                <div className="for_living_feat_tag_container">
                  <div className="for_living_feat_tag_container_inner backdrop-blur-md bg-black/50 border border-white/15 shadow-xl">
                    <span className="for-living-display-text for-prefix">For</span>
                    <div className="for_living_feat_tag">Residential</div>
                    <span className="for-living-display-text living-suffix">Living</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 3: Marine Living (Right) */}
            <motion.div
              style={{ y: cardMarineY }}
              className="section_hero_followup_content_card pointer-events-auto group relative w-[76vw] max-w-[290px] sm:w-[320px] md:w-full shrink-0 md:shrink aspect-[4/5] max-h-[50vh] md:max-h-none rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-md bg-[#221d18]/80 border border-white/15 transition-all duration-500 hover:border-white/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.85)] cursor-pointer snap-center"
            >
              <Link href="/work/?category=Marine" className="block w-full h-full relative">
                <img
                  src="/assets/feat-marine.avif"
                  alt="Aerial view of luxury expedition yacht floating at night"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />

                {/* Original Interactive Hover Tag with Glassmorphism */}
                <div className="for_living_feat_tag_container">
                  <div className="for_living_feat_tag_container_inner backdrop-blur-md bg-black/50 border border-white/15 shadow-xl">
                    <span className="for-living-display-text for-prefix">For</span>
                    <div className="for_living_feat_tag">Marine</div>
                    <span className="for-living-display-text living-suffix">Living</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Swipe Hint Pills */}
          <div className="flex md:hidden items-center justify-center gap-1.5 mt-2 pointer-events-none opacity-70">
            <span className="text-[10px] uppercase font-mono tracking-widest text-white/50">← Swipe Living Spaces →</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
