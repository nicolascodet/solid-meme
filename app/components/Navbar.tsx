'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

function NavbarInner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Detect active section for nav highlighting
    const sections = document.querySelectorAll('section[id]');
    const observeSection = () => {
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', observeSection);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', observeSection);
    };
  }, []);

  // Handle menu item click
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // Navigation links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-navy-dark shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <h1 className="text-2xl font-serif font-bold text-navy dark:text-white">
            ODR <span className="text-gold">Group</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-navy dark:text-white hover:text-gold dark:hover:text-gold transition-colors py-1 relative ${
                (activeSection === link.href.substring(1) || (link.href === '/' && activeSection === '')) ? 'font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 w-10 h-10 text-navy dark:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className={`transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                } absolute h-0.5 w-6 bg-current`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-150 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                } absolute h-0.5 w-6 bg-current`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-white dark:bg-navy-dark transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleMenuItemClick}
              className="text-2xl font-serif text-navy dark:text-white hover:text-gold dark:hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={handleMenuItemClick}
            className="btn-primary mt-4 text-lg px-6 py-3"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={null}>
      <NavbarInner />
    </Suspense>
  );
} 