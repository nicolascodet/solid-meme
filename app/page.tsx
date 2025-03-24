'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialSlider from './components/TestimonialSlider';

// Animated section component
function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay to stagger animations
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-navy-dark dark:to-navy">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image 
            src="/images/pattern.svg" 
            alt="" 
            fill 
            className="object-cover" 
          />
        </div>
        
        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy dark:text-white leading-tight mb-8 animate-fade-in">
              <span className="relative inline-block">
                Transformation
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold"></span>
              </span>{" "}
              & Growth For Modern Businesses
            </h1>
            
            <p className="text-lg md:text-xl text-slate-dark dark:text-slate-light max-w-3xl mx-auto mb-12">
              ODR Group specializes in mergers & acquisitions, business transformation, and strategic advisory services that drive lasting results for our clients.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-8 py-4 font-medium animate-bounce-gentle"
              >
                Request a Consultation
              </Link>
              
              <Link 
                href="/services" 
                className="btn-outline text-lg px-8 py-4 font-medium"
              >
                Explore Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-navy-dark to-transparent"></div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16" delay={100}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy dark:text-white mb-6">
              Strategic Advisory for Complex Business Challenges
            </h2>
            <p className="text-lg text-slate dark:text-slate-light">
              Since 2005, ODR Group has been a trusted partner for businesses navigating critical transitions, 
              growth strategies, and organizational transformation. Our unique approach combines deep industry 
              expertise with innovative methodologies to deliver exceptional outcomes.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <AnimatedSection delay={200} className="bg-slate-50 dark:bg-navy-light rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Trusted Expertise</h3>
              <p className="text-slate dark:text-slate-light">
                With over 15 years of industry experience and a team of experts from diverse backgrounds, 
                we bring invaluable knowledge to every client engagement.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="bg-slate-50 dark:bg-navy-light rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Proven Results</h3>
              <p className="text-slate dark:text-slate-light">
                Our strategic approach has helped clients achieve significant growth, successful mergers, 
                and lasting organizational improvements.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={400} className="bg-slate-50 dark:bg-navy-light rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Client-Focused</h3>
              <p className="text-slate dark:text-slate-light">
                We prioritize understanding each client's unique challenges and goals to create 
                tailored solutions that deliver exceptional value.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image 
            src="/images/pattern.svg" 
            alt="" 
            fill 
            className="object-cover" 
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-gold font-medium">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy dark:text-white mt-2 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate dark:text-slate-light">
              We're proud of the results we deliver and the relationships we build with our clients.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <TestimonialSlider />
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-gold font-medium">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy dark:text-white mt-2 mb-6">
              Comprehensive Solutions for Business Growth
            </h2>
            <p className="text-lg text-slate dark:text-slate-light">
              We offer a wide range of services to help your business thrive in today's competitive landscape.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={200} className="group">
              <div className="bg-slate-50 dark:bg-navy-light rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow h-full">
                <div className="h-48 bg-navy dark:bg-gold relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Mergers & Acquisitions</h3>
                  <p className="text-slate dark:text-slate-light mb-6">
                    Strategic guidance throughout the entire M&A process, from target identification to post-merger integration.
                  </p>
                  <Link href="/services#ma" className="text-gold hover:text-gold-light inline-flex items-center transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="group">
              <div className="bg-slate-50 dark:bg-navy-light rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow h-full">
                <div className="h-48 bg-navy dark:bg-gold relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Business Transformation</h3>
                  <p className="text-slate dark:text-slate-light mb-6">
                    Comprehensive solutions to help organizations navigate change, improve performance, and drive innovation.
                  </p>
                  <Link href="/services#transformation" className="text-gold hover:text-gold-light inline-flex items-center transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400} className="group">
              <div className="bg-slate-50 dark:bg-navy-light rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow h-full">
                <div className="h-48 bg-navy dark:bg-gold relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Strategic Advisory</h3>
                  <p className="text-slate dark:text-slate-light mb-6">
                    Expert guidance on critical business decisions, growth strategies, and organizational development.
                  </p>
                  <Link href="/services#advisory" className="text-gold hover:text-gold-light inline-flex items-center transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={500} className="text-center mt-12">
            <Link href="/services" className="btn-primary px-8 py-4 inline-block">
              View All Services
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-navy dark:bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/images/circuit.svg" 
            alt="" 
            fill 
            className="object-cover" 
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-light max-w-3xl mx-auto mb-10">
              Contact us today to schedule a consultation and discover how ODR Group can help your organization achieve its full potential.
            </p>
            <Link 
              href="/contact" 
              className="btn-gold text-lg px-10 py-4 font-medium inline-block"
            >
              Get Started
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
} 