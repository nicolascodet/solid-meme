'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy dark:bg-navy-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">ODR Group</h3>
            <p className="text-slate-light mb-4">
              Transforming businesses through strategic integration and operational excellence.
            </p>
            <p className="text-slate-light text-sm">
              &copy; {currentYear} ODR Group, LLC. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-light hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-light hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-slate-light hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/case-studies" className="text-slate-light hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-slate-light hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-slate-light">
              <p className="mb-2">ODR Group, LLC</p>
              <p className="mb-2">Tampa, Florida</p>
              <p className="mb-2">
                <a href="mailto:info@odrgroup.com" className="hover:text-white transition-colors">
                  info@odrgroup.com
                </a>
              </p>
              <p>
                <a href="tel:+18135551234" className="hover:text-white transition-colors">
                  (813) 555-1234
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
} 