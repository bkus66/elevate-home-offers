import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Get My Free Cash Offer | Sell Your House Fast – Elevate Home Offers',
  description:
    'Request your free, no-obligation cash offer for your Austin-area home. We respond in 24 hours. No fees, no repairs, close in 7 days.',
  alternates: {
    canonical: 'https://elevatehomeoffers.com/get-cash-offer',
  },
};

export default function GetCashOfferPage() {
  return (
    <main className="bg-neutral min-h-screen">
      {/* Minimal header */}
      <div className="bg-primary py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-[75px]">
              <Image
                src="/logo-white.png"
                alt="Elevate Home Offers"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 text-white hover:text-accent transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-4 py-1.5 mb-4">
              <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-success text-sm font-medium">No Obligation — 100% Free</span>
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              Get Your Free Cash Offer
            </h1>
            <p className="text-gray-600 text-lg">
              Tell us about your property and we&apos;ll send you a fair, no-obligation cash offer within <strong>24 hours</strong>.
            </p>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { icon: '💰', text: 'Zero Fees' },
              { icon: '🔨', text: 'Any Condition' },
              { icon: '📅', text: 'Close in 7 Days' },
              { icon: '🤝', text: 'No Obligation' },
            ].map((badge, i) => (
              <div key={i} className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                <span className="text-2xl mb-1 block">{badge.icon}</span>
                <span className="text-xs font-semibold text-primary">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <LeadForm />

          {/* Reassurance */}
          <div className="mt-8 space-y-3">
            {[
              'Your information is private and never shared with third parties.',
              "We won't pressure you or call you 10 times. We respect your time.",
              'You can say no to any offer — completely obligation-free.',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600 text-sm">{text}</p>
              </div>
            ))}
          </div>

          {/* Alternative */}
          <div className="mt-8 bg-primary rounded-xl p-5 text-center text-white">
            <p className="font-semibold mb-1">Prefer to talk first?</p>
            <p className="text-gray-300 text-sm mb-3">Call or text us directly — we love talking to people.</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-accent hover:bg-amber-500 text-primary font-bold px-6 py-2.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
