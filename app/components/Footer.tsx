'use client';

import Link from 'next/link';
import { Suspense } from 'react';

function FooterInner() {
  const currentYear = new Date().getFullYear();

  // Footer links
  const links = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'M&A Integration', href: '/services#ma-integration' },
      { label: 'Operational Excellence', href: '/services#operational-excellence' },
      { label: 'Value Creation', href: '/services#value-creation' },
      { label: 'Due Diligence', href: '/services#due-diligence' },
    ],
    resources: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
      { label: 'Insights', href: '/insights' },
      { label: 'FAQ', href: '/faq' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-white dark:bg-navy-dark border-t border-slate-100 dark:border-navy-light/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-serif font-bold text-navy dark:text-white">
                ODR <span className="text-gold">Group</span>
              </h2>
            </Link>
            <p className="text-slate dark:text-slate-light mb-6 max-w-md">
              A boutique consulting firm specializing in M&A, transformation, buy-side diligence, and post-acquisition integration for private equity and strategic platforms.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 dark:bg-navy-light flex items-center justify-center text-navy dark:text-white hover:bg-gold hover:text-navy-dark transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 dark:bg-navy-light flex items-center justify-center text-navy dark:text-white hover:bg-gold hover:text-navy-dark transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-navy dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-slate dark:text-slate-light hover:text-navy dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold text-navy dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-slate dark:text-slate-light hover:text-navy dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-bold text-navy dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-slate dark:text-slate-light hover:text-navy dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-slate-100 dark:border-navy-light/10 pt-8 pb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Stay Updated</h3>
              <p className="text-slate dark:text-slate-light">
                Subscribe to our newsletter for insights on M&A and operational excellence.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-md bg-slate-50 dark:bg-navy-light border border-slate-200 dark:border-navy focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-slate-100 dark:border-navy-light/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate dark:text-slate-light text-sm mb-4 md:mb-0">
            &copy; {currentYear} ODR Group LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {links.legal.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-sm text-slate dark:text-slate-light hover:text-navy dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <Suspense fallback={null}>
      <FooterInner />
    </Suspense>
  );
} 