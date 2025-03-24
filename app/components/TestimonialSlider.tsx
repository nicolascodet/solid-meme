'use client';

import { useState, useEffect, Suspense } from 'react';

// Sample testimonial data
const testimonials = [
  {
    quote: "ODR Group's operational transformation strategy helped us achieve a 45% EBITDA growth within 18 months.",
    author: "CEO, Manufacturing Company",
  },
  {
    quote: "Their post-acquisition integration expertise was invaluable in ensuring a smooth transition and capturing 100% of identified synergies.",
    author: "COO, Retail Brand",
  },
  {
    quote: "ODR Group's strategic insights and implementation capabilities transformed our operational efficiency and accelerated our growth trajectory.",
    author: "Managing Director, Private Equity Firm",
  },
  {
    quote: "Their methodical approach to value creation helped us achieve a 3.2x return on our investment.",
    author: "Partner, Investment Firm",
  },
  {
    quote: "Working with ODR Group has been transformative. Their industry expertise and strategic vision set them apart from other consulting firms.",
    author: "CFO, Technology Company",
  },
];

// Inner component that handles testimonial slider functionality
function TestimonialSliderInner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="rounded-lg bg-white dark:bg-navy-light p-8 shadow-lg">
      <div className="space-y-6">
        <div className="h-40 flex items-center justify-center">
          <div className="transition-opacity duration-500 text-center">
            <blockquote className="text-xl italic font-serif text-navy dark:text-white mb-4">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <p className="text-navy-light dark:text-slate-light font-medium">
              — {testimonials[currentIndex].author}
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? 'bg-gold'
                  : 'bg-slate-300 dark:bg-navy-dark hover:bg-gold-light'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
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