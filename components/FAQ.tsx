'use client';

import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = 'Frequently Asked Questions' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Got Questions?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">{title}</h2>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-accent/50 transition-colors"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-neutral/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-primary text-sm sm:text-base leading-snug">
                  {item.question}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
