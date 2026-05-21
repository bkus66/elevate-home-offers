'use client';

import { useState } from 'react';
import { allTestimonials, type Testimonial } from '@/lib/testimonials';
export type { Testimonial } from '@/lib/testimonials';
export { allTestimonials };

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-accent fill-accent' : 'text-gray-300 fill-gray-300'}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export default function Testimonials({ testimonials = allTestimonials }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const displayItems = testimonials.length <= 3 ? testimonials : testimonials;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Real Stories</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What Our Sellers Say
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-accent fill-accent" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-primary font-semibold">5.0 / 5.0</span>
            <span className="text-gray-500 text-sm">— Based on 100+ reviews</span>
          </div>
        </div>

        {/* Mobile: carousel */}
        <div className="block lg:hidden">
          <div className="bg-neutral rounded-2xl p-6 shadow-sm">
            <StarRating rating={displayItems[activeIndex].rating} />
            <blockquote className="text-gray-700 mt-4 leading-relaxed italic">
              &ldquo;{displayItems[activeIndex].text}&rdquo;
            </blockquote>
            <div className="mt-4 font-semibold text-primary">
              — {displayItems[activeIndex].name}
            </div>
            <div className="text-accent text-sm">{displayItems[activeIndex].location}</div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {displayItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeIndex ? 'bg-accent' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {displayItems.map((testimonial, index) => (
            <div key={index} className="bg-neutral rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <StarRating rating={testimonial.rating} />
              <blockquote className="text-gray-700 mt-4 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">{testimonial.name}</div>
                  <div className="text-accent text-xs">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
