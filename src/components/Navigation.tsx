'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const [lang, setLang] = useState<'En' | 'Bn'>('En');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const lightElements = document.querySelectorAll('[data-theme="light"]');
      let overLight = false;
      const navCenter = 30;

      lightElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= navCenter && rect.bottom >= navCenter) {
          overLight = true;
        }
      });

      setIsLightSection(overLight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? isLightSection && !isOpen
              ? 'bg-[#fcfbf9]/90 text-[#111111] backdrop-blur-md shadow-sm py-4'
              : 'bg-[#080e00]/85 text-white backdrop-blur-md border-b border-white/10 py-4'
            : isLightSection && !isOpen
            ? 'text-[#111111] py-5'
            : 'text-white py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo: PRANGON Studios */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 group transition-opacity hover:opacity-90"
          >
            {/* Geometric Delta / Courtyard Icon */}
            <div className="w-7 h-7 rounded-sm border border-current flex items-center justify-center p-1 relative">
              <div className="w-2.5 h-2.5 border border-current rotate-45" />
            </div>

            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl md:text-2xl tracking-[0.18em] font-medium leading-none uppercase">
                PRANGON
              </span>
              <span className="text-[9px] font-mono tracking-[0.35em] opacity-60 uppercase mt-0.5">
                Studios • Dhaka
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase tracking-[0.18em] transition-colors relative py-1 ${
                      isActive
                        ? isLightSection && scrolled
                          ? 'text-[#111111] font-semibold'
                          : 'text-white font-semibold'
                        : isLightSection && scrolled
                        ? 'text-[#666666] hover:text-[#111111]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute left-0 bottom-0 w-full h-[1.5px] ${
                          isLightSection && scrolled ? 'bg-[#111111]' : 'bg-[#b65234]'
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Language switch & Contact button */}
            <div className="flex items-center gap-5 pl-5 border-l border-white/20">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase">
                <button
                  onClick={() => setLang('En')}
                  className={`transition-opacity cursor-pointer ${
                    lang === 'En'
                      ? 'font-bold opacity-100'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  EN
                </button>
                <span className="opacity-30">/</span>
                <button
                  onClick={() => setLang('Bn')}
                  className={`transition-opacity cursor-pointer ${
                    lang === 'Bn'
                      ? 'font-bold opacity-100'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  বাং
                </button>
              </div>

              <Link
                href="/contact"
                className={`text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border transition-all duration-300 ${
                  isLightSection && scrolled
                    ? 'border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white'
                    : 'border-white/30 text-white hover:border-white hover:bg-white hover:text-[#080e00]'
                }`}
              >
                Inquire
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 px-3 py-1.5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="text-xs uppercase tracking-widest font-mono">
                {isOpen ? 'Close' : 'Menu'}
              </span>
              <div className="w-6 h-5 relative flex flex-col justify-between items-center py-1">
                <span
                  className={`w-5 h-[1.5px] transition-transform duration-300 ${
                    isOpen
                      ? 'rotate-45 translate-y-[6px] bg-white'
                      : isLightSection && scrolled
                      ? 'bg-[#111111]'
                      : 'bg-white'
                  }`}
                />
                <span
                  className={`w-5 h-[1.5px] transition-opacity duration-200 ${
                    isOpen
                      ? 'opacity-0'
                      : isLightSection && scrolled
                      ? 'bg-[#111111]'
                      : 'bg-white'
                  }`}
                />
                <span
                  className={`w-5 h-[1.5px] transition-transform duration-300 ${
                    isOpen
                      ? '-rotate-45 -translate-y-[6px] bg-white'
                      : isLightSection && scrolled
                      ? 'bg-[#111111]'
                      : 'bg-white'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#080e00] text-white flex flex-col justify-between px-8 pt-28 pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#b65234]">
                PRANGON Studios • Menu
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif-luxury text-3xl font-light tracking-wide text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase">
                <span className="font-semibold text-white">English</span>
                <span className="text-white/30">/</span>
                <span className="text-white/60">বাংলা</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-xs uppercase tracking-[0.2em] py-3.5 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition-colors"
              >
                Initiate Project Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
