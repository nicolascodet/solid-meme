'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';

// Sample testimonial data with images
const testimonials = [
  {
    quote: "ODR Group's operational transformation strategy helped us achieve a 45% EBITDA growth within 18 months.",
    author: "David Martinez",
    title: "CEO, Manufacturing Company",
    image: "/images/testimonial1.jpg" // Placeholder - replace with real image paths
  },
  {
    quote: "Their post-acquisition integration expertise was invaluable in ensuring a smooth transition and capturing 100% of identified synergies.",
    author: "Sarah Johnson",
    title: "COO, Retail Brand",
    image: "/images/testimonial2.jpg"
  },
  {
    quote: "ODR Group's strategic insights and implementation capabilities transformed our operational efficiency and accelerated our growth trajectory.",
    author: "Michael Chen",
    title: "Managing Director, Private Equity Firm",
    image: "/images/testimonial3.jpg"
  },
  {
    quote: "Their methodical approach to value creation helped us achieve a 3.2x return on our investment.",
    author: "Priya Shah",
    title: "Partner, Investment Firm",
    image: "/images/testimonial4.jpg"
  },
  {
    quote: "Working with ODR Group has been transformative. Their industry expertise and strategic vision set them apart from other consulting firms.",
    author: "Robert Wilson",
    title: "CFO, Technology Company",
    image: "/images/testimonial5.jpg"
  },
];

// Inner component that handles testimonial slider functionality
function TestimonialSliderInner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleTransition();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handleTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 500);
  };

  const goToTestimonial = (index: number) => {
    if (currentIndex !== index && !isTransitioning) {
      handleTransition();
      setTimeout(() => {
        setCurrentIndex(index);
      }, 500);
    }
  };

  const nextTestimonial = () => {
    if (!isTransitioning) {
      handleTransition();
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 500);
    }
  };

  const prevTestimonial = () => {
    if (!isTransitioning) {
      handleTransition();
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      }, 500);
    }
  };

  // Generate a placeholder image if no image is available
  const getImage = (testimonial: (typeof testimonials)[0]) => {
    try {
      return (
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-navy-light">
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
      );
    } catch (e) {
      // Fallback if image can't be loaded
      return (
        <div className="w-20 h-20 rounded-full bg-navy-light flex items-center justify-center">
          <span className="text-xl font-serif text-white">
            {testimonial.author.split(' ').map(name => name[0]).join('')}
          </span>
        </div>
      );
    }
  };

  return (
    <div className="relative">
      <div className="absolute -top-10 -left-10 w-20 h-20 text-gold opacity-20 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <div className="rounded-xl bg-white dark:bg-navy-light p-6 md:p-10 shadow-xl overflow-hidden relative z-0">
        <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <blockquote className="text-lg md:text-xl font-serif text-navy dark:text-white mb-8">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          
          <div className="flex items-center">
            {getImage(testimonials[currentIndex])}
            <div className="ml-4">
              <p className="font-bold text-navy dark:text-white">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-slate dark:text-slate-light">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-8">
        <div className="flex space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gold w-8'
                  : 'bg-slate-300 dark:bg-navy-light hover:bg-gold-light'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 dark:bg-navy-light text-navy dark:text-white hover:bg-gold hover:text-navy-dark transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 dark:bg-navy-light text-navy dark:text-white hover:bg-gold hover:text-navy-dark transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// Wrapper component with Suspense
export default function TestimonialSlider() {
  return (
    <Suspense fallback={null}>
      <TestimonialSliderInner />
    </Suspense>
  );
} 