'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialSlider from './components/TestimonialSlider';

// Component for animated section
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-navy dark:bg-navy-dark text-white py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Transforming businesses through strategic integration and operational excellence
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-slate-light mb-8">
                ODR Group specializes in M&A, transformation, buy-side diligence, and post-acquisition integration for private equity and strategic platforms.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <Link href="/contact" className="btn-primary inline-block animate-bounce-gentle">
                Schedule a Consultation
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-white dark:bg-navy-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="section-heading">Who We Are</h2>
                <p className="text-slate dark:text-slate-light mb-6">
                  ODR Group is a boutique consulting firm that partners with private equity firms and strategic platforms to drive value creation and operational excellence.
                </p>
                <p className="text-slate dark:text-slate-light mb-6">
                  Our team of seasoned executives brings decades of experience across various industries, helping clients navigate complex transformations and achieve sustainable growth.
                </p>
                <Link href="/about" className="text-navy dark:text-gold font-semibold hover:text-gold dark:hover:text-gold-light transition-colors">
                  Learn more about us →
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-slate-100 dark:bg-navy-light h-80 flex items-center justify-center rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-serif text-navy dark:text-white mb-4">Expert Leadership</h3>
                  <p className="text-slate dark:text-slate-light">
                    Led by industry veterans with proven track records in driving significant market cap growth and operational transformation.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="section-heading text-center mb-12">Our Approach to Value Creation</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value Prop 1 */}
            <AnimatedSection delay={100}>
              <div className="bg-white dark:bg-navy-light p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                <div className="h-12 w-12 bg-navy dark:bg-gold rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold dark:text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-navy dark:text-white mb-4">Strategic Integration</h3>
                <p className="text-slate dark:text-slate-light">
                  We expertly guide post-acquisition integration to maximize synergies and minimize disruption, ensuring a smooth transition.
                </p>
              </div>
            </AnimatedSection>

            {/* Value Prop 2 */}
            <AnimatedSection delay={200}>
              <div className="bg-white dark:bg-navy-light p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                <div className="h-12 w-12 bg-navy dark:bg-gold rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold dark:text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-navy dark:text-white mb-4">Operational Excellence</h3>
                <p className="text-slate dark:text-slate-light">
                  We implement data-driven methodologies to streamline operations, reduce costs, and enhance productivity across the organization.
                </p>
              </div>
            </AnimatedSection>

            {/* Value Prop 3 */}
            <AnimatedSection delay={300}>
              <div className="bg-white dark:bg-navy-light p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                <div className="h-12 w-12 bg-navy dark:bg-gold rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold dark:text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-navy dark:text-white mb-4">Accelerated Growth</h3>
                <p className="text-slate dark:text-slate-light">
                  Our strategic initiatives are designed to identify and capitalize on growth opportunities, leading to substantial market cap increases.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 md:py-20 bg-white dark:bg-navy-dark">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-serif text-center text-navy dark:text-white mb-12">Trusted By Industry Leaders</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* These would normally be actual client logos */}
            <AnimatedSection delay={100}>
              <div className="bg-slate-50 dark:bg-navy-light h-24 w-full max-w-xs flex items-center justify-center rounded p-4 transition-all duration-300 hover:shadow-lg hover:bg-white dark:hover:bg-navy">
                <span className="text-lg font-medium text-slate dark:text-slate-light">Client A</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-slate-50 dark:bg-navy-light h-24 w-full max-w-xs flex items-center justify-center rounded p-4 transition-all duration-300 hover:shadow-lg hover:bg-white dark:hover:bg-navy">
                <span className="text-lg font-medium text-slate dark:text-slate-light">Client B</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="bg-slate-50 dark:bg-navy-light h-24 w-full max-w-xs flex items-center justify-center rounded p-4 transition-all duration-300 hover:shadow-lg hover:bg-white dark:hover:bg-navy">
                <span className="text-lg font-medium text-slate dark:text-slate-light">Client C</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="bg-slate-50 dark:bg-navy-light h-24 w-full max-w-xs flex items-center justify-center rounded p-4 transition-all duration-300 hover:shadow-lg hover:bg-white dark:hover:bg-navy">
                <span className="text-lg font-medium text-slate dark:text-slate-light">Client D</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="section-heading text-center mb-12">What Our Clients Say</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <TestimonialSlider />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy dark:bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Transform Your Business?</h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-slate-light text-lg max-w-2xl mx-auto mb-8">
              Contact us today to discuss how ODR Group can help you achieve operational excellence and drive significant growth.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Link href="/contact" className="btn-primary inline-block transition-transform hover:scale-105">
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
} 