'use client';

import { useState, useEffect } from 'react';

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
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-advance the testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToTestimonial = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="relative bg-navy-light dark:bg-navy p-8 md:p-12 rounded-lg shadow-lg">
      <div className="absolute top-4 left-6 text-gold text-6xl opacity-20">"</div>
      
      <div className="relative z-10">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className={`transition-opacity duration-700 absolute inset-0 flex flex-col justify-center p-8 md:p-12 ${
              index === current ? 'opacity-100 z-20' : 'opacity-0 -z-10'
            }`}
          >
            <blockquote className="mb-6 text-lg md:text-xl text-white italic">
              "{testimonial.quote}"
            </blockquote>
            <cite className="text-gold font-medium not-italic">— {testimonial.author}</cite>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current ? 'bg-gold' : 'bg-slate-300 dark:bg-slate-600 hover:bg-gold/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 