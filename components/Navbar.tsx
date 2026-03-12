'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SBA Loans', href: '#products' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Lenders', href: '#lenders' },
    { label: 'Resources', href: '#resources' },
    { label: 'About', href: '#about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-r from-[#3B82F6] to-[#10B981] p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Cashifi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <Link
                  href={link.href}
                  className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#10B981] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="#login"
                className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors"
              >
                Login
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="#quote"
                className="relative group px-6 py-2.5 rounded-full font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#10B981] transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2 text-[15px]">
                  Get Free Quote
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * index,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium text-gray-300 hover:text-white transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="pt-4 border-t border-white/10 space-y-3"
              >
                <Link
                  href="#login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="#quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white font-medium hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-[#3B82F6]/25"
                >
                  Get Free Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}