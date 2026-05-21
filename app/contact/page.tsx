import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact Us | Elevate Home Offers – Cash Home Buyers Austin TX',
  description:
    'Contact Elevate Home Offers to sell your house fast for cash in Austin and Central Texas. Call, email, or fill out our form. We respond within 24 hours.',
  alternates: {
    canonical: 'https://elevatehomeoffers.com/contact',
  },
};

export default function ContactPage() {
  return (
    <article>
      {/* Hero */}
      <div className="bg-primary py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We&apos;re real people based in Austin, TX. Reach out any way that works for you — we respond to every inquiry promptly.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <a href={`tel:${siteConfig.phone}`} className="text-gray-600 hover:text-accent transition-colors text-lg font-medium">
                      {siteConfig.phone}
                    </a>
                    <p className="text-gray-400 text-sm mt-1">Call or text — we respond fast</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.email}`} className="text-gray-600 hover:text-accent transition-colors text-lg font-medium">
                      {siteConfig.email}
                    </a>
                    <p className="text-gray-400 text-sm mt-1">We respond within 1 business day</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Service Area</h3>
                    <p className="text-gray-600 text-lg font-medium">Austin, TX &amp; Central Texas</p>
                    <p className="text-gray-400 text-sm mt-1">All 13 cities in our coverage area</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-neutral rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday – Friday</span>
                    <span className="font-semibold text-primary">8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-primary">9:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-primary">By Appointment</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4">All times are Central Time (CT). For urgent situations, call anytime — we do our best to pick up.</p>
              </div>

              {/* Map placeholder */}
              <div className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-2xl p-8 text-center">
                <svg className="w-12 h-12 text-primary/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-primary/60 font-medium">Austin, TX Office</p>
                <p className="text-gray-400 text-sm mt-1">Map coming soon — we meet at your property or a local title company</p>
              </div>
            </div>

            {/* Lead Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">Send Us a Message</h2>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
