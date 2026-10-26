'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [hasMovedCursor, setHasMovedCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!hasMovedCursor) setHasMovedCursor(true);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hasMovedCursor]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1 (Scroll 0 -> 0.08): Brand statement dissolves early and fast on initial scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.08], [0, -35]);
  const textScale = useTransform(scrollYProgress, [0, 0.08], [1, 0.96]);
  const textBlur = useTransform(scrollYProgress, [0, 0.08], ['blur(0px)', 'blur(8px)']);
  const textPointerEvents = useTransform(scrollYProgress, (v) => (v > 0.06 ? 'none' : 'auto'));

  // Phase 2 (Scroll 0.02 -> 0.12): 3 Living Cards glide up to dead center on much shorter scroll!
  // Stay centered, interactive, and completely unobstructed from 0.12 to 0.38
  const cardsOpacity = useTransform(scrollYProgress, [0.02, 0.08], [0, 1]);
  const cardCommercialY = useTransform(scrollYProgress, [0.02, 0.12], ['100vh', '0vh']);
  const cardResidentialY = useTransform(scrollYProgress, [0.02, 0.12], ['115vh', '-5vh']);
  const cardMarineY = useTransform(scrollYProgress, [0.02, 0.12], ['105vh', '3vh']);

  // Phase 3 (Scroll 0.38 -> 0.85): Hero stays pinned at top: 0, progressively fading away as bottom content stacks over
  const heroBackgroundOpacity = useTransform(scrollYProgress, [0.38, 0.82], [1, 0.15]);
  const heroOverlayDark = useTransform(scrollYProgress, [0.05, 0.82], [0.25, 0.92]);
  const heroRecedeScale = useTransform(scrollYProgress, [0.38, 0.90], [1, 0.93]);

  return (
    <section
      ref={containerRef}
      className="section_hero hp_section_hero relative min-h-[220vh] bg-[#080e00] text-white"
    >
      {/* Pinned 100vh Viewport that stays completely still while next section stacks over */}
      <motion.div
        style={{
          scale: heroRecedeScale,
        }}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center z-0 origin-center"
      >
        {/* Layer 0: Artisanal Fired Terracotta Clay Texture (Progressively fades) */}
        <motion.div
          style={{ opacity: heroBackgroundOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/assets/hero-terracotta.avif"
            alt="Artisanal terracotta fired clay architectural texture"
            className="w-full h-full object-cover object-center scale-105 select-none"
          />
        </motion.div>

        {/* Layer 1: Architectural Blueprint Line Art - Matte muted style, revealed ONLY directly under cursor */}
        <motion.div
          style={{
            opacity: heroBackgroundOpacity,
            WebkitMaskImage: hasMovedCursor
              ? `radial-gradient(260px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.35) 60%, transparent 100%)`
              : 'radial-gradient(0px circle at 0px 0px, transparent 0%, transparent 100%)',
            maskImage: hasMovedCursor
              ? `radial-gradient(260px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.35) 60%, transparent 100%)`
              : 'radial-gradient(0px circle at 0px 0px, transparent 0%, transparent 100%)',
          }}
          className="absolute inset-0 z-1 pointer-events-none overflow-hidden transition-[opacity] duration-300"
        >
          <img
            src="/assets/hero_line_bg.webp"
            alt=""
            className="w-full h-full object-cover object-center opacity-30 mix-blend-screen select-none filter contrast-75 brightness-70 sepia-[0.3]"
          />
        </motion.div>

        {/* Layer 2: Warm Amber / Terracotta Central Glow */}
        <motion.div
          style={{
            opacity: heroBackgroundOpacity,
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(205, 105, 55, 0.42) 0%, rgba(182, 82, 52, 0.2) 38%, transparent 72%)',
          }}
          className="absolute inset-0 z-2 pointer-events-none"
        />

        {/* Layer 3: Progressive Fade / Darkening Overlay (stays still in background) */}
        <motion.div
          className="absolute inset-0 z-4 pointer-events-none bg-[#080e00]"
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
          {/* Authentic Architectural Emblem SVG */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col items-center gap-2 mb-5"
          >
            <svg
              fill="none"
              height="48"
              role="presentation"
              viewBox="0 0 36 48"
              width="36"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md opacity-95"
            >
              <path
                d="M4.25715 39.8555C4.36497 40.0194 4.47722 40.1826 4.5939 40.3458C4.5939 40.3458 3.26983 38.2523 4.25715 39.8555Z"
                fill="white"
              />
              <path
                d="M35.6674 28.822C35.6674 27.8203 35.6772 28.2126 35.6674 25.6625C35.6674 25.6625 35.6561 23.1176 35.6287 20.8867C35.6006 18.6564 35.8615 17.8535 35.654 14.8853C35.4466 11.9163 35.1203 11.0587 34.6415 9.56646C33.9903 7.53645 32.231 5.66453 31.0953 4.5594C29.9597 3.45353 26.3327 0.765317 22.5221 0.245256C21.5138 0.0982501 19.6103 0 18.7489 0C18.4268 0 18.1062 0.00369361 17.7848 0.00664851C17.5696 0.00886467 17.3538 0.0103421 17.14 0.013297H17.0542C15.562 0.0273327 14.0193 -0.0391523 12.5194 0.189113C9.51962 0.590978 6.69493 1.62371 4.42999 4.08218C2.1334 6.57685 0.545619 10.238 0.229187 13.5489C0.0934735 14.8845 0.0941791 16.1655 0.170123 17.5225C0.171529 18.3713 0.168013 19.2208 0.170123 20.0696C0.179967 23.5276 0.262942 27.0269 0.015422 30.4391C-0.0415357 31.5294 0.0688623 33.148 0.189809 34.3248C0.397951 36.1856 0.833926 37.943 1.58633 39.371C2.2431 40.581 3.03277 41.7157 3.91105 42.7588C4.2324 43.1414 5.23373 44.0464 6.12114 44.8604C7.00785 45.6738 8.27006 46.3024 10.1194 46.9554C10.445 47.0699 10.7699 47.1867 11.0926 47.3086C11.6144 47.5051 12.153 47.474 12.6874 47.6011C13.3112 47.7488 13.9475 47.8057 14.5431 47.8456C15.7378 47.9291 17.0366 47.9734 18.5126 47.9793C18.8944 47.9808 19.2763 47.986 19.6581 47.9897C20.1243 47.9948 20.606 48 21.0792 48C22.2177 48 23.5635 47.9741 24.9249 47.7762C28.3374 47.3108 31.5046 45.1212 33.3968 41.9188C34.0051 40.895 34.4861 40.0181 34.9424 38.5643C35.1808 37.8034 35.505 36.7234 35.6386 35.4085C35.7729 34.0935 35.7194 33.8047 35.7412 32.1293C35.7476 31.6306 35.654 29.3243 35.6667 28.822H35.6674ZM33.5389 34.8803C33.5389 37.4451 32.1297 40.7819 30.473 42.4537C28.5034 44.4408 25.9115 45.5172 23.3674 45.543C23.3674 45.543 22.9103 45.5563 22.686 45.563C21.5946 45.5947 20.466 45.6272 19.3466 45.6272C15.8159 45.6272 11.3437 45.3436 9.37335 44.1306C7.40304 42.9168 5.57899 41.6322 4.57836 39.925C4.56711 39.9058 4.55656 39.8881 4.54602 39.8696C2.66008 36.8704 2.1988 33.7626 2.49625 29.953C2.80213 25.4342 2.50187 20.5941 2.28318 16.1404L2.28107 16.0872C1.96464 10.5674 3.90049 6.30574 8.67509 3.61605C10.4359 2.62394 12.5939 2.35283 15.1183 2.30629C15.8271 2.28635 16.4136 2.27748 16.9635 2.27748C17.9536 2.27748 18.834 2.30851 19.6581 2.37204C21.1355 2.51092 23.0446 2.76578 24.304 3.10928C25.5641 3.45279 26.8369 3.92262 27.5 4.42273C29.7754 6.05531 31.3885 7.83194 32.1571 9.76518C32.9257 11.6977 32.8399 12.4187 33.0565 13.2719C33.6085 15.4489 33.4953 18.372 33.3863 21.6387C33.3139 23.9339 33.4911 25.9986 33.4636 28.296C33.5705 29.9781 33.541 33.1953 33.5389 34.8803Z"
                fill="white"
              />
              <path
                d="M25.0057 26.8659C25.3963 27.0018 27.0128 26.3431 27.0032 26.6791C27.0202 27.7085 27.1841 30.429 27.1841 33.7292C27.1841 34.1013 27.1753 34.4499 27.1613 34.7704C27.049 36.0272 27.0778 37.4444 26.3482 38.5358C25.6186 39.6273 24.3972 40.0142 23.2917 40.0792C22.6758 40.1154 21.7314 39.9943 21.1051 39.2514L21.0992 39.2447C20.0506 37.9044 19.9229 36.0383 19.8202 34.5341C19.7109 32.5107 19.7331 30.4533 19.7545 28.4639C19.7589 28.1301 19.7619 27.7971 19.7648 27.4618C19.7781 26.6621 19.7781 25.8476 19.7781 25.0589C19.7781 23.87 19.7781 22.6404 19.821 21.4293C19.8822 19.8269 20.0085 18.2037 20.1304 16.6338C20.2677 14.8607 20.4102 12.2547 20.4582 10.4521C20.4686 9.82146 20.4664 9.19229 20.4457 8.56165C20.4265 8.09568 20.4036 7.51599 20.0469 7.30995C19.959 7.26195 19.849 7.2398 19.7028 7.2398C19.5787 7.2398 19.4554 7.25457 19.3321 7.2686C19.276 7.27377 19.1947 7.27746 19.0766 7.27746C18.8085 7.27746 18.4031 7.26195 18.0102 7.24792C17.8146 7.24054 17.6218 7.22503 17.4261 7.22503C17.2865 7.22872 17.1492 7.2302 17.0074 7.2302C16.5614 7.2302 16.1611 7.21248 15.8082 7.19623C15.501 7.18294 15.21 7.16965 14.9279 7.16965C14.2995 7.16965 13.4045 7.1534 12.2842 7.49679C9.31707 8.40657 7.60237 10.6197 6.714 13.1372C6.29824 14.3047 6.21701 16.1072 6.2111 17.6558C6.15129 18.7879 6.16458 19.9199 6.1476 21.0498C6.07892 21.2307 5.80274 21.2912 5.67941 21.422C5.38477 21.6117 4.74009 22.1397 4.66772 22.2025C4.72606 22.2055 5.57677 22.1294 6.02354 22.0873C6.08483 22.0792 6.14465 22.1331 6.14243 22.1951C6.14021 22.9868 6.18378 24.5804 6.18378 24.5804C6.18378 25.5603 6.1764 26.2042 6.1764 26.936V27.8554C6.17418 29.3597 5.94304 30.7362 5.94304 31.3107C6.07227 31.4185 6.71252 31.3794 6.92372 31.3794H9.58514C10.3258 31.3794 11.5214 31.3513 11.5214 30.957C11.5214 30.5626 10.4152 30.601 10.1375 30.4312C9.41751 29.9874 9.31338 28.6234 9.31338 26.462C9.31338 26.318 9.30969 26.1496 9.306 25.9724C9.30083 25.7626 9.2964 25.5463 9.2964 25.3269C9.2964 24.7088 9.29049 24.22 9.28237 23.8013C9.27499 23.1071 9.2676 22.4122 9.26465 21.7166C9.26465 21.6671 9.29936 21.6228 9.34809 21.6132C9.6996 21.5379 10.0858 21.3282 10.396 21.1598C10.537 21.0741 12.7753 19.7294 12.0819 19.8335C11.1736 19.9923 10.263 20.1267 9.37246 20.2249C9.17012 20.2522 9.13911 18.2488 9.13172 18.1129C9.13024 18.0893 9.12434 18.0664 9.11474 18.0442C9.1044 17.7164 9.09702 17.3744 9.09702 17.0207C9.09702 15.5911 8.89246 13.8084 9.29566 12.4024C9.87978 10.3672 10.5577 9.25875 12.313 8.96337H12.9459C15.7158 8.97962 15.9758 12.2074 16.1301 14.2286L16.1486 14.4701C16.4883 17.8685 16.4026 22.0976 16.3206 25.4407L16.3147 26.6052C16.3701 30.7347 16.4277 35.0067 16.2114 39.2122C16.2018 39.3518 16.2054 39.4973 16.2091 39.6516C16.218 39.9928 16.2269 40.3458 16.088 40.6847C16.0267 40.828 16.0068 40.8952 16.0024 40.9269C16.0216 40.9388 16.0659 40.9594 16.1589 40.9845C16.4152 41.0444 16.6914 41.0562 17.0259 41.0562H17.3944C17.4586 41.0562 17.5214 41.0562 17.5834 41.0576C17.98 41.0628 17.98 41.0695 18.3787 41.0761C18.6483 41.0805 19.8379 41.1049 20.5328 41.0997C21.227 41.0946 22.269 41.1559 23.0067 41.1108C24.8883 40.9978 26.6259 40.4484 27.6605 39.5874C29.0909 38.4029 29.5118 37.6541 30.0582 35.4756C30.0582 35.4756 30.3322 34.3288 30.3322 29.3804C30.3322 27.6176 30.2598 25.7523 30.1624 23.9024C29.5251 23.8508 25.115 26.2626 25.0064 26.8674L25.0057 26.8659Z"
                fill="white"
              />
              <path
                d="M27.8875 21.8786C27.4644 21.8786 27.0738 21.7265 26.8417 21.473C26.501 21.0769 26.2633 20.3686 26.2919 19.8291C26.3251 19.5494 26.4725 19.2491 26.6262 18.9655C26.6991 18.8316 26.814 18.731 26.9637 18.6217C27.0144 18.5852 27.0683 18.5456 27.1221 18.5052C27.2766 18.3911 27.4359 18.2731 27.5888 18.1867C27.668 18.1432 27.8051 18.1154 27.9453 18.1154C28.0665 18.1154 28.1822 18.136 28.2559 18.1701C28.3375 18.2097 28.4143 18.3087 28.4824 18.4632C28.5228 18.5496 28.5292 18.6359 28.5038 18.7183V18.716C28.4713 18.8182 28.4309 19.4223 28.4499 19.5831C28.4895 19.9119 28.6631 20.1737 28.9744 20.2117L29.0006 20.2173C29.0552 20.2284 29.1067 20.2387 29.1408 20.2553C29.2897 20.3599 29.2485 20.6665 29.1883 20.9533C29.1297 21.2052 29.037 21.3835 28.8897 21.5261C28.6496 21.7503 28.2836 21.8802 27.8875 21.8802V21.8786Z"
                fill="white"
              />
            </svg>

            <span className="font-cursive-luxury text-2xl md:text-3xl text-white/75 tracking-wide -mt-1">
              Crafted in Bangladesh
            </span>
          </motion.div>

          {/* Core Brand Headline: Exactly 2 Lines Guaranteed */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif-luxury uppercase text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal leading-[1.08] tracking-normal text-center w-full max-w-[1360px] mb-6 bg-gradient-to-br from-white via-white to-[#f8e7c3]/60 bg-clip-text text-transparent drop-shadow-sm"
          >
            <span className="block whitespace-nowrap">THE POETRY OF DESIGN &amp;</span>
            <span className="block whitespace-nowrap">THE ENGINEERING OF CRAFT</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="text-sm md:text-base text-white/75 font-light max-w-xl mx-auto leading-relaxed mb-8"
          >
            We turn architectural designs into masterpiece interiors crafted by genius artisans.
          </motion.p>

          {/* Start a project Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#111111] font-sans text-xs uppercase font-medium tracking-[0.2em] shadow-2xl transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95"
            >
              START A PROJECT
            </Link>
          </motion.div>
        </motion.div>

        {/* Layer 5: Parallax Floating Living Categories Cards */}
        {/* On page load (scroll = 0), cards are 100vh down (offscreen). As user scrolls, they glide up into view on short scroll! */}
        <motion.div
          style={{ opacity: cardsOpacity }}
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center pointer-events-auto">
            {/* Card 1: Commercial Living (Left) */}
            <motion.div
              style={{ y: cardCommercialY }}
              className="section_hero_followup_content_card group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-md bg-[#111111]/80 border border-white/15 transition-all duration-500 hover:border-white/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.85)]"
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
              className="section_hero_followup_content_card card-1 group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-md bg-[#111111]/80 border border-white/15 transition-all duration-500 hover:border-white/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.85)]"
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
              className="section_hero_followup_content_card group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-md bg-[#111111]/80 border border-white/15 transition-all duration-500 hover:border-white/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.85)]"
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
        </motion.div>
      </motion.div>
    </section>
  );
}
