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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect if user is over a light background section
      const lightElements = document.querySelectorAll('[data-theme="light"]');
      let overLight = false;
      const navCenter = 30; // approx center Y of nav

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

  // Lock body scroll when mobile menu is open
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
              ? 'bg-[#fcfbf9]/85 text-[#111111] backdrop-blur-md shadow-sm'
              : 'bg-[#080e00]/80 text-white backdrop-blur-md border-b border-white/10'
            : isLightSection && !isOpen
            ? 'text-[#111111]'
            : 'text-white'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 group transition-opacity hover:opacity-80"
          >
            <img
              src="/assets/logo-white.svg"
              alt="FOR LIVING brand logo"
              className={`h-4 md:h-5 transition-all duration-300 ${
                isLightSection && !isOpen && scrolled ? 'invert' : ''
              }`}
            />
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
                    className={`text-sm tracking-wide transition-colors relative py-1 ${
                      isActive
                        ? isLightSection && scrolled
                          ? 'text-[#111111] font-medium'
                          : 'text-white font-medium'
                        : isLightSection && scrolled
                        ? 'text-[#555555] hover:text-[#111111]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute left-0 bottom-0 w-full h-[1px] ${
                          isLightSection && scrolled ? 'bg-[#111111]' : 'bg-white'
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Language switch & Contact button */}
            <div className="flex items-center gap-6 pl-4 border-l border-white/20">
              <div className="flex items-center gap-2 text-xs tracking-wider uppercase">
                <span className={`font-semibold ${isLightSection && scrolled ? 'text-[#111111]' : 'text-white'}`}>
                  En
                </span>
                <span className="opacity-40">/</span>
                <span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                  It
                </span>
              </div>

              <Link
                href="/contact"
                className={`text-xs uppercase tracking-[0.18em] px-5 py-2.5 rounded-full border transition-all duration-300 ${
                  isLightSection && scrolled
                    ? 'border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white'
                    : 'border-white/30 text-white hover:border-white hover:bg-white hover:text-[#080e00]'
                }`}
              >
                Contact
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
            <div className="flex flex-col gap-8">
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
              <div className="flex items-center gap-4 text-sm tracking-widest uppercase">
                <span className="font-semibold text-white">En</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50">It</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-xs uppercase tracking-[0.2em] py-3.5 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition-colors"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
