'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';

function FloatingContactInner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Panel */}
      {isOpen && (
        <div className="glass-effect dark:bg-navy-light text-navy dark:text-white rounded-2xl shadow-2xl p-6 mb-6 animate-fade-in max-w-xs w-full">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-xl font-serif font-bold">Contact Us</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-navy text-slate dark:text-slate-light transition-colors"
              aria-label="Close contact panel"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-5">
            <a 
              href="tel:+18135551234" 
              className="flex items-center p-3 rounded-xl bg-slate-50 dark:bg-navy hover:bg-slate-100 dark:hover:bg-navy-light transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-navy dark:bg-gold flex items-center justify-center text-white dark:text-navy-dark mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-navy dark:text-white font-medium">(813) 555-1234</div>
                <div className="text-sm text-slate dark:text-slate-light">Call Us Directly</div>
              </div>
            </a>
            
            <a 
              href="mailto:info@odrgroup.com" 
              className="flex items-center p-3 rounded-xl bg-slate-50 dark:bg-navy hover:bg-slate-100 dark:hover:bg-navy-light transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-navy dark:bg-gold flex items-center justify-center text-white dark:text-navy-dark mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-navy dark:text-white font-medium">info@odrgroup.com</div>
                <div className="text-sm text-slate dark:text-slate-light">Email Us</div>
              </div>
            </a>
          </div>
          
          <div className="mt-6">
            <Link 
              href="/contact" 
              className="btn-primary w-full flex items-center justify-center py-3 text-center"
              onClick={() => setIsOpen(false)}
            >
              <span>Complete Contact Form</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      )}
      
      {/* Floating Contact Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-navy dark:bg-slate-200 rotate-45 scale-110' 
            : 'bg-gold hover:bg-gold-light hover:scale-110 animate-pulse-slow'
        }`}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-7 w-7 transition-colors ${isOpen ? 'text-white dark:text-navy' : 'text-navy-dark'}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          )}
        </svg>
      </button>
    </div>
  );
}

// Wrapper component with Suspense
export default function FloatingContact() {
  return (
    <Suspense fallback={null}>
      <FloatingContactInner />
    </Suspense>
  );
} 