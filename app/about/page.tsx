'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

// Team member component
function TeamMember({
  name,
  title,
  bio,
  imageSrc,
  delay = 0
}: {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  delay?: number;
}) {
  return (
    <AnimatedSection delay={delay} className="group">
      <div className="bg-slate-50 dark:bg-navy-light rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 h-full">
        <div className="relative h-64 overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={name} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy dark:text-white">{name}</h3>
          <p className="text-gold mb-4">{title}</p>
          <p className="text-slate dark:text-slate-light">{bio}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

// Timeline item component
function TimelineItem({
  year,
  title,
  description,
  isLast = false,
  delay = 0
}: {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
  delay?: number;
}) {
  return (
    <AnimatedSection delay={delay} className="relative">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute top-10 bottom-0 left-4 md:left-1/2 w-px bg-slate-200 dark:bg-navy-light -ml-px z-0"></div>
      )}
      
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy-dark font-bold text-sm md:mx-auto">
          {year.substring(2)}
        </div>
        
        <div className="flex-1 bg-slate-50 dark:bg-navy-light p-6 rounded-xl">
          <div className="text-lg font-bold text-navy dark:text-white mb-1">{year}</div>
          <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{title}</h3>
          <p className="text-slate dark:text-slate-light">{description}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

// Value item component
function ValueItem({
  icon,
  title,
  description,
  delay = 0
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <AnimatedSection delay={delay} className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{title}</h3>
      <p className="text-slate dark:text-slate-light">{description}</p>
    </AnimatedSection>
  );
}

export default function About() {
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
            <span className="text-gold font-medium">OUR STORY</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy dark:text-white mt-3 mb-8">
              About ODR Group
            </h1>
            <p className="text-lg md:text-xl text-slate-dark dark:text-slate-light max-w-3xl mx-auto">
              We are a team of experienced professionals dedicated to helping businesses 
              transform, grow, and achieve their full potential through strategic advisory 
              and operational excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-navy/20 rounded-3xl blur-lg opacity-50"></div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/about-hero.jpg" 
                    alt="ODR Group Office" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <span className="text-gold font-medium">OUR MISSION</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy dark:text-white mt-2 mb-6">
                Transforming Businesses Since 2005
              </h2>
              <p className="text-slate dark:text-slate-light mb-6">
                ODR Group was founded in 2005 with a clear mission: to help businesses navigate complex 
                transformations and achieve sustainable growth. What began as a small consultancy focused 
                on operational efficiency has evolved into a comprehensive strategic advisory firm serving 
                clients across multiple industries.
              </p>
              <p className="text-slate dark:text-slate-light mb-6">
                Our team combines deep industry expertise with innovative methodologies to deliver exceptional 
                results. We pride ourselves on building long-term partnerships with our clients, understanding 
                their unique challenges, and developing tailored solutions that drive lasting value.
              </p>
              <p className="text-navy dark:text-white font-medium">
                Today, ODR Group is recognized as a trusted partner for businesses undergoing strategic 
                transformations, mergers and acquisitions, and operational improvements.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-slate-50 dark:bg-navy relative overflow-hidden">
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
            <span className="text-gold font-medium">OUR CORE VALUES</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy dark:text-white mt-2 mb-6">
              What Guides Our Work
            </h2>
            <p className="text-lg text-slate dark:text-slate-light">
              Our values form the foundation of everything we do, guiding our approach to client 
              relationships and problem-solving.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ValueItem 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              } 
              title="Integrity" 
              description="We uphold the highest standards of integrity in all our actions, ensuring transparency and honesty in every client interaction."
              delay={0}
            />
            
            <ValueItem 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              } 
              title="Excellence" 
              description="We are committed to delivering exceptional results through rigorous analysis, innovative thinking, and flawless execution."
              delay={200}
            />
            
            <ValueItem 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              } 
              title="Collaboration" 
              description="We believe in the power of partnership and work closely with our clients to develop solutions that address their specific needs."
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-gold font-medium">OUR JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy dark:text-white mt-2 mb-6">
              Key Milestones
            </h2>
            <p className="text-lg text-slate dark:text-slate-light">
              Our growth story reflects our commitment to excellence and continuous evolution.
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            <TimelineItem 
              year="2005" 
              title="Foundation" 
              description="ODR Group was founded with a focus on operational efficiency consulting for mid-sized businesses."
              delay={0}
            />
            
            <TimelineItem 
              year="2010" 
              title="Expansion" 
              description="Expanded service offerings to include M&A advisory and post-acquisition integration support."
              delay={200}
            />
            
            <TimelineItem 
              year="2015" 
              title="Growth" 
              description="Established partnerships with leading private equity firms, adding specialized services for portfolio companies."
              delay={400}
            />
            
            <TimelineItem 
              year="2018" 
              title="Innovation" 
              description="Launched digital transformation practice to help clients navigate technological disruption and leverage new opportunities."
              delay={600}
            />
            
            <TimelineItem 
              year="2020" 
              title="Global Reach" 
              description="Expanded operations to serve clients across North America and Europe, with a growing international presence."
              delay={800}
            />
            
            <TimelineItem 
              year="2023" 
              title="Today" 
              description="Recognized as a leading strategic advisory firm with a track record of delivering exceptional results for clients across industries."
              isLast={true}
              delay={1000}
            />
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="py-16 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-gold font-medium">OUR TEAM</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy dark:text-white mt-2 mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-slate dark:text-slate-light">
              Our team of experienced professionals brings diverse expertise and a shared 
              commitment to excellence.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              name="Sarah Johnson" 
              title="CEO & Founder" 
              bio="With over 25 years of experience in business transformation and leadership, Sarah founded ODR Group with a vision to help companies achieve operational excellence." 
              imageSrc="/images/team-1.jpg"
              delay={0}
            />
            
            <TeamMember 
              name="Michael Chen" 
              title="Managing Director, M&A" 
              bio="Michael leads our M&A practice, bringing 20 years of experience in corporate development and integration strategy for both strategic and financial buyers." 
              imageSrc="/images/team-2.jpg"
              delay={200}
            />
            
            <TeamMember 
              name="Emily Rodriguez" 
              title="Chief Strategy Officer" 
              bio="Emily oversees our strategic advisory practice, specializing in growth strategy and digital transformation for companies in rapidly evolving industries." 
              imageSrc="/images/team-3.jpg"
              delay={400}
            />
            
            <TeamMember 
              name="David Wilson" 
              title="Managing Director, Operations" 
              bio="David leads our operational excellence practice, with expertise in supply chain optimization, process improvement, and organizational effectiveness." 
              imageSrc="/images/team-4.jpg"
              delay={600}
            />
            
            <TeamMember 
              name="Jennifer Lee" 
              title="Managing Director, Private Equity" 
              bio="Jennifer specializes in value creation strategies for portfolio companies, with a focus on growth acceleration and operational improvement." 
              imageSrc="/images/team-5.jpg"
              delay={800}
            />
            
            <TeamMember 
              name="Robert Thompson" 
              title="Chief Innovation Officer" 
              bio="Robert leads our innovation practice, helping clients leverage emerging technologies and develop new business models to stay ahead of disruption." 
              imageSrc="/images/team-6.jpg"
              delay={1000}
            />
          </div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-slate-light max-w-3xl mx-auto mb-10">
              Contact us today to schedule a consultation and discover how ODR Group can help your organization achieve its full potential.
            </p>
            <Link 
              href="/contact" 
              className="btn-gold text-lg px-10 py-4 font-medium inline-block"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
} 