'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Animated section component
function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  id = ''
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  id?: string;
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
      id={id}
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

// Service section with icon
function ServiceSection({ 
  title, 
  description, 
  icon, 
  features, 
  benefits,
  caseStudyText,
  caseStudyLink,
  colorClass = "from-navy to-navy-dark",
  id,
  delay = 0
}: { 
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  caseStudyText?: string;
  caseStudyLink?: string;
  colorClass?: string;
  id: string;
  delay?: number;
}) {
  return (
    <AnimatedSection id={id} className="mb-24" delay={delay}>
      <div className="rounded-3xl overflow-hidden">
        <div className={`bg-gradient-to-br ${colorClass} text-white py-16 px-8 relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <Image 
              src="/images/pattern.svg" 
              alt="" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6 md:mb-0 md:mr-8">
                {icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center md:text-left">
                {title}
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-slate-light max-w-3xl mb-8">
              {description}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50 dark:bg-navy-light">
          {/* Features Section */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">Key Features</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-navy dark:bg-gold flex items-center justify-center text-white dark:text-navy-dark mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-slate-dark dark:text-slate-light">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Benefits Section */}
          <div className="p-8 md:p-12 bg-white/50 dark:bg-navy/50">
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-navy-dark mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-slate-dark dark:text-slate-light">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {caseStudyText && caseStudyLink && (
          <div className="bg-white dark:bg-navy-dark p-8 border-t border-slate-100 dark:border-navy">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <p className="text-slate-dark dark:text-slate-light mb-4 md:mb-0">
                <span className="font-medium text-navy dark:text-white">Case Study:</span> {caseStudyText}
              </p>
              <Link 
                href={caseStudyLink}
                className="btn-outline inline-flex items-center justify-center"
              >
                <span>Read Case Study</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export default function Services() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 mb-16 relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-navy-dark dark:to-navy">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/pattern.svg" 
            alt="" 
            fill 
            className="object-cover" 
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-medium">OUR EXPERTISE</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy dark:text-white mt-3 mb-8">
              Comprehensive Business Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-dark dark:text-slate-light max-w-3xl mx-auto">
              ODR Group offers a complete suite of services designed to help your business navigate 
              complex challenges, drive growth, and achieve lasting success.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Services Navigation */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="bg-slate-50 dark:bg-navy-light rounded-xl shadow-sm p-6 overflow-x-auto">
            <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-4 min-w-max md:min-w-0">
              <a href="#ma" className="btn-nav">
                Mergers & Acquisitions
              </a>
              <a href="#transformation" className="btn-nav">
                Business Transformation
              </a>
              <a href="#advisory" className="btn-nav">
                Strategic Advisory
              </a>
              <a href="#diligence" className="btn-nav">
                Buy-Side Diligence
              </a>
              <a href="#integration" className="btn-nav">
                Post-Acquisition Integration
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Services Content */}
      <section>
        <div className="container mx-auto px-4">
          <ServiceSection
            id="ma"
            title="Mergers & Acquisitions"
            description="Strategic guidance throughout the entire M&A process, from target identification to post-merger integration."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            }
            features={[
              "Comprehensive due diligence and valuation",
              "Strategy development and execution",
              "Target identification and screening",
              "Deal structuring and negotiation support",
              "Post-merger integration planning"
            ]}
            benefits={[
              "Maximize deal value and minimize risks",
              "Accelerate time-to-close with expert guidance",
              "Identify synergies and growth opportunities",
              "Ensure cultural alignment and stakeholder buy-in",
              "Streamline the integration process for faster ROI"
            ]}
            caseStudyText="How we helped a mid-market manufacturing company successfully acquire and integrate a strategic competitor"
            caseStudyLink="/case-studies/ma-success"
            colorClass="from-navy to-navy-dark"
            delay={0}
          />
          
          <ServiceSection
            id="transformation"
            title="Business Transformation"
            description="Comprehensive solutions to help organizations navigate change, improve performance, and drive innovation."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            features={[
              "Operational efficiency assessment and improvement",
              "Digital transformation strategy and implementation",
              "Process optimization and automation",
              "Organizational restructuring and change management",
              "Performance tracking and metrics development"
            ]}
            benefits={[
              "Reduce costs and increase operational efficiency",
              "Implement digital solutions that drive growth",
              "Create more agile and responsive operations",
              "Improve customer experience and satisfaction",
              "Develop a data-driven performance culture"
            ]}
            caseStudyText="How we transformed a traditional retail business into a digital-first enterprise with 45% profit improvement"
            caseStudyLink="/case-studies/retail-transformation"
            colorClass="from-navy-dark to-navy"
            delay={200}
          />
          
          <ServiceSection
            id="advisory"
            title="Strategic Advisory"
            description="Expert guidance on critical business decisions, growth strategies, and organizational development."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            }
            features={[
              "Business strategy development and refinement",
              "Market analysis and competitive intelligence",
              "Growth opportunity identification",
              "Executive coaching and leadership development",
              "Board and stakeholder advisory services"
            ]}
            benefits={[
              "Access to expert insights and industry knowledge",
              "Make better-informed strategic decisions",
              "Identify new opportunities for growth and innovation",
              "Develop stronger leadership capabilities",
              "Align organizational efforts with strategic goals"
            ]}
            caseStudyText="How our advisory services helped a technology company pivot its product offering and capture new market share"
            caseStudyLink="/case-studies/tech-pivot"
            colorClass="from-blue-700 to-navy"
            delay={400}
          />
          
          <ServiceSection
            id="diligence"
            title="Buy-Side Diligence"
            description="Comprehensive analysis and evaluation of potential acquisition targets to identify opportunities and risks."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            }
            features={[
              "Financial performance analysis",
              "Operational and technical due diligence",
              "Market and competitive assessment",
              "Legal and compliance review",
              "Synergy identification and valuation"
            ]}
            benefits={[
              "Reduce acquisition risks through thorough evaluation",
              "Identify key value drivers and growth levers",
              "Uncover hidden opportunities and challenges",
              "Develop informed negotiation strategies",
              "Create a foundation for successful integration"
            ]}
            caseStudyText="How our diligence process identified $12M in annual synergies for a private equity acquisition"
            caseStudyLink="/case-studies/diligence-synergies"
            colorClass="from-slate-700 to-navy"
            delay={600}
          />
          
          <ServiceSection
            id="integration"
            title="Post-Acquisition Integration"
            description="Seamless integration strategies to maximize value and minimize disruption following a merger or acquisition."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            }
            features={[
              "Integration strategy and roadmap development",
              "Day 1 readiness planning",
              "Synergy capture and tracking",
              "Cultural integration and change management",
              "Operational and systems integration"
            ]}
            benefits={[
              "Accelerate time to value realization",
              "Minimize business disruption during transition",
              "Capture identified synergies efficiently",
              "Build a unified organizational culture",
              "Maintain business momentum and stakeholder confidence"
            ]}
            caseStudyText="How we integrated two competing healthcare providers while improving patient satisfaction scores"
            caseStudyLink="/case-studies/healthcare-integration"
            colorClass="from-navy to-navy-dark"
            delay={800}
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 mt-16 bg-navy dark:bg-navy-dark relative overflow-hidden">
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
              Schedule a Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
} 