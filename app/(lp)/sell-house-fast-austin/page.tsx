import type { Metadata } from 'next';
import HowItWorks from '@/components/HowItWorks';
import BenefitGrid from '@/components/BenefitGrid';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Sell Your House Fast in Austin, TX | Cash Offer in 24 Hours – Elevate Home Offers',
  description:
    'Get a fair, no-obligation cash offer for your Austin house in 24 hours. No realtors, no repairs, no fees. Close in as little as 7 days. Request your free offer now.',
  alternates: {
    canonical: 'https://elevatehomeoffers.com/sell-house-fast-austin',
  },
  // Paid landing page — keep out of organic results, but allow link-following.
  robots: { index: false, follow: true },
};

const lpFAQ = [
  {
    question: 'How fast can you close on my house?',
    answer:
      'We can close in as little as 7 days once you accept our cash offer. Most transactions close within 7–14 days, but if you need more time to move, we can also accommodate a longer 30–60 day close. You set the date that works for you.',
  },
  {
    question: 'Do I pay any fees or commissions?',
    answer:
      'Absolutely not. You pay zero real estate commissions, zero agent fees, and zero closing costs — we cover all standard closing costs. The cash offer we present is the amount you walk away with at closing. No deductions, no surprises.',
  },
  {
    question: 'What condition must my house be in?',
    answer:
      'Any condition — literally. We buy homes with foundation issues, roof or water damage, deferred maintenance, code violations, and everything in between. You do not need to clean, paint, repair, or even remove your belongings before selling.',
  },
  {
    question: 'How is your cash offer calculated?',
    answer:
      "Our offer is based on your property's current condition, the cost of any needed repairs, recent comparable sales nearby, and the current Austin-area market. We're completely transparent and happy to walk you through exactly how we arrived at your number.",
  },
  {
    question: 'Are you a real cash buyer or a wholesaler?',
    answer:
      "We are a direct cash buyer — not a wholesaler or middleman. We use our own funds to purchase your home, which is why we can guarantee a fast, reliable close with no financing contingencies and no last-minute fall-throughs.",
  },
  {
    question: 'Is there any obligation when I request a cash offer?',
    answer:
      "None whatsoever. Requesting a cash offer is completely free and places no obligation on you. We'll make you a fair offer, explain how we calculated it, and the decision is 100% yours. We never pressure homeowners.",
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elevate Home Offers',
  description: 'Cash home buyers serving Austin, TX and Central Texas. We buy houses fast, as-is, for cash.',
  url: siteConfig.baseUrl,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: 'Austin, TX and Central Texas',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '100',
    bestRating: '5',
    worstRating: '1',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: lpFAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const trustBadges = [
  '5+ Years in Business',
  '100+ Homes Purchased',
  'Close in as Little as 7 Days',
  'Zero Fees or Commissions',
  'Any Condition — No Repairs',
];

export default function LandingPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* Stripped top bar — logo + click-to-call only, no nav (no exit links) */}
      <div className="bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.png"
            alt="Elevate Home Offers"
            width={112}
            height={48}
            className="h-10 w-auto object-contain"
          />
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 text-white hover:text-accent transition-colors font-semibold"
          >
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">{siteConfig.phone}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </div>

      {/* Hero — CSS gradient (no image) for fastest LCP/FCP */}
      <section
        className="relative py-12 lg:py-24 overflow-hidden bg-primary"
        style={{
          backgroundImage:
            'radial-gradient(90% 120% at 85% 0%, rgba(200,162,75,0.14) 0%, rgba(15,42,71,0) 55%), linear-gradient(160deg, #16395b 0%, #0F2A47 45%, #0a1d31 100%)',
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left — headline + trust */}
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-sm font-semibold tracking-wide">
                  Locally Owned &amp; Operated · Austin, TX
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                Sell Your House Fast in Austin, TX
              </h1>

              <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed max-w-lg">
                Get a fair, no-obligation cash offer in 24 hours. No realtors. No repairs.
                No fees. Close in as little as 7 days.
              </p>

              <div className="space-y-2.5 mb-6">
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-100 font-medium">{badge}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 max-w-md">
                <div className="flex -space-x-2">
                  {['S', 'J', 'M', 'D'].map((initial) => (
                    <div
                      key={initial}
                      className="w-9 h-9 rounded-full bg-accent border-2 border-white flex items-center justify-center text-primary text-xs font-bold"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-200 text-xs mt-0.5">Trusted by 100+ Central Texas homeowners</p>
                </div>
              </div>
            </div>

            {/* Right — Lead form */}
            <div className="lg:pl-4">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <div className="bg-primary py-4 border-t border-blue-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2">
              <div className="flex text-accent">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-sm font-medium">5-Star Rated on Google</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>100+ Homes Purchased</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>5+ Years in Business</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>Locally Owned &amp; Operated</span>
            </div>
          </div>
        </div>
      </div>

      <HowItWorks city="Austin" />
      <BenefitGrid />
      <ComparisonTable />
      <Testimonials />
      <FAQ items={lpFAQ} />

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Free Cash Offer Today
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join hundreds of Austin-area homeowners who sold the easy way. No obligation,
              no pressure, and no fees — ever.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* Minimal footer — no nav, single phone CTA */}
      <footer className="bg-primary border-t border-blue-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.png"
            alt="Elevate Home Offers"
            width={120}
            height={51}
            className="h-10 w-auto object-contain mx-auto mb-4"
          />
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 text-accent font-semibold mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.phone}
          </a>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Elevate Home Offers buys houses for cash in Austin and Central Texas — any
            condition, no fees, no commissions.
          </p>
          <p className="text-gray-500 text-xs mt-3">
            © {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
