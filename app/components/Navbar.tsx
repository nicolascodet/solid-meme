'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-white dark:bg-navy py-4 px-6 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-navy dark:text-white">ODR Group</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-slate-dark dark:text-slate-light hover:text-navy dark:hover:text-white transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="text-slate-dark dark:text-slate-light hover:text-navy dark:hover:text-white transition-colors font-medium">
            About
          </Link>
          <Link href="/services" className="text-slate-dark dark:text-slate-light hover:text-navy dark:hover:text-white transition-colors font-medium">
            Services
          </Link>
          <Link href="/case-studies" className="text-slate-dark dark:text-slate-light hover:text-navy dark:hover:text-white transition-colors font-medium">
            Case Studies
          </Link>
          <Link href="/contact" className="text-slate-dark dark:text-slate-light hover:text-navy dark:hover:text-white transition-colors font-medium">
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            className="text-slate-dark dark:text-white hover:text-navy dark:hover:text-gold" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-2 bg-white dark:bg-navy-light border-t border-gray-100 dark:border-navy">
          <div className="flex flex-col space-y-3 px-6">
            <Link href="/" className="text-slate-dark dark:text-white hover:text-navy dark:hover:text-gold py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-slate-dark dark:text-white hover:text-navy dark:hover:text-gold py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/services" className="text-slate-dark dark:text-white hover:text-navy dark:hover:text-gold py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/case-studies" className="text-slate-dark dark:text-white hover:text-navy dark:hover:text-gold py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Case Studies
            </Link>
            <Link href="/contact" className="text-slate-dark dark:text-white hover:text-navy dark:hover:text-gold py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 