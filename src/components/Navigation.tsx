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
      <header className="fixed top-0 inset-x-0 z-50 pt-4 sm:pt-6 px-4 sm:px-8 pointer-events-none flex justify-center">
        <div
          className={`pointer-events-auto w-full max-w-[1360px] transition-all duration-300 rounded-2xl border px-6 md:px-10 py-3.5 flex items-center justify-between gap-6 md:gap-10 shadow-2xl backdrop-blur-xl ${
            isLightSection && scrolled
              ? 'bg-[#ffffff]/85 text-[#221d18] border-black/10 shadow-[0_15px_35px_rgba(0,0,0,0.06)]'
              : 'bg-[#000000a6] text-white border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* Brand Logo: Strictly Typographic PRANGON (No icon box) */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center group transition-opacity hover:opacity-90"
          >
            <span
              className={`font-serif-luxury text-xl md:text-2xl tracking-[0.24em] font-medium leading-none uppercase transition-colors duration-300 ${
                isLightSection && scrolled ? 'text-[#221d18]' : 'text-white'
              }`}
            >
              PRANGON
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 relative py-1.5 px-2 font-medium ${
                    isActive
                      ? isLightSection && scrolled
                        ? 'text-[#221d18] font-semibold'
                        : 'text-white font-semibold'
                      : isLightSection && scrolled
                      ? 'text-[#666666] hover:text-[#221d18]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute left-0 bottom-0 w-full h-[1.5px] ${
                        isLightSection && scrolled ? 'bg-[#221d18]' : 'bg-[#bd7b58]'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Language switch & Contact button */}
          <div className="hidden md:flex items-center gap-6 pl-6 border-l border-white/15">
            <div className="flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase">
              <button
                onClick={() => setLang('En')}
                className={`transition-all duration-200 cursor-pointer active:scale-95 px-1 ${
                  lang === 'En' ? 'font-bold opacity-100 text-[#bd7b58]' : 'opacity-40 hover:opacity-80'
                }`}
              >
                EN
              </button>
              <span className="opacity-30">|</span>
              <button
                onClick={() => setLang('Bn')}
                className={`transition-all duration-200 cursor-pointer active:scale-95 px-1 ${
                  lang === 'Bn' ? 'font-bold opacity-100 text-[#bd7b58]' : 'opacity-40 hover:opacity-80'
                }`}
              >
                বাং
              </button>
            </div>

            <Link
              href="/contact"
              className={`text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                isLightSection && scrolled
                  ? 'border-[#221d18] bg-[#221d18] text-white hover:bg-[#bd7b58] hover:border-[#bd7b58]'
                  : 'border-white/20 bg-white/10 backdrop-blur-md text-white hover:border-[#bd7b58] hover:bg-[#bd7b58] hover:text-white shadow-sm'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-95 transition-all focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <span className="text-xs uppercase tracking-widest font-mono">
                {isOpen ? 'Close' : 'Menu'}
              </span>
              <div className="w-5 h-4 relative flex flex-col justify-between items-center py-0.5">
                <span
                  className={`w-4 h-[1.5px] transition-transform duration-300 ${
                    isOpen
                      ? 'rotate-45 translate-y-[5px] bg-white'
                      : 'bg-white'
                  }`}
                />
                <span
                  className={`w-4 h-[1.5px] transition-opacity duration-200 ${
                    isOpen ? 'opacity-0' : 'bg-white'
                  }`}
                />
                <span
                  className={`w-4 h-[1.5px] transition-transform duration-300 ${
                    isOpen
                      ? '-rotate-45 -translate-y-[5px] bg-white'
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
            className="fixed inset-0 z-40 bg-[#12100e] text-white flex flex-col justify-between px-8 pt-28 pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#bd7b58]">
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
