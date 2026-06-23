import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locations, getLocationBySlug } from '@/lib/locations';
import { generateLocationMetadata } from '@/lib/seo';
import HowItWorks from '@/components/HowItWorks';
import SituationsGrid from '@/components/SituationsGrid';
import ComparisonTable from '@/components/ComparisonTable';
import LeadForm from '@/components/LeadForm';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/lib/seo';
import { allTestimonials } from '@/lib/testimonials';

interface PageProps {
  params: { city: string };
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.city);
  if (!location) return {};
  return generateLocationMetadata(location);
}

const cityFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  default: [
    {
      question: 'How fast can you close on my house?',
      answer: 'We can close in as little as 7 days after accepting our offer. The exact timeline depends on the title search results, but most transactions close in 7–14 days. If you need more time, we accommodate 30–60 day closings too.',
    },
    {
      question: 'Do I need to make any repairs before selling?',
      answer: 'No repairs are necessary. We buy homes in any condition — from move-in ready to houses needing full renovations. The condition is factored into our offer price, so you keep more money without spending on fixes.',
    },
    {
      question: 'Are there any fees or commissions?',
      answer: 'Zero fees and zero commissions. We cover all closing costs. The offer amount is the amount you receive — no deductions at the closing table.',
    },
    {
      question: 'What if I have an existing mortgage?',
      answer: 'No problem. At closing, the title company pays off your remaining mortgage balance from the sale proceeds. You receive the equity remaining after the payoff.',
    },
    {
      question: 'Is there any obligation after requesting an offer?',
      answer: 'None at all. Requesting an offer is completely free and places no obligation on you to sell or proceed in any way. You can review our offer at your own pace and decline without any cost.',
    },
  ],
};

export default function CityPage({ params }: PageProps) {
  const location = getLocationBySlug(params.city);
  if (!location) notFound();

  const faqItems = cityFAQs[location.slug] || cityFAQs.default;

  // Get nearby cities (up to 4)
  const nearbyCities = locations
    .filter((loc) => loc.slug !== location.slug && loc.county === location.county)
    .slice(0, 2)
    .concat(
      locations
        .filter((loc) => loc.slug !== location.slug && loc.county !== location.county)
        .slice(0, 2)
    )
    .slice(0, 4);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Elevate Home Offers',
    description: `Cash home buyers in ${location.name}, TX. We buy houses fast for cash with no fees or repairs needed.`,
    url: `${siteConfig.baseUrl}/sell-my-house-fast/${location.slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedIn: {
        '@type': 'State',
        name: 'Texas',
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sell My House Fast',
        item: `${siteConfig.baseUrl}/sell-my-house-fast`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${location.name}, TX`,
        item: `${siteConfig.baseUrl}/sell-my-house-fast/${location.slug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-gray-300 text-sm mb-6">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <span>Sell My House Fast</span>
                <span>/</span>
                <span className="text-white">{location.name}</span>
              </nav>

              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Sell My House Fast in {location.name}, TX
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Get a fair, no-obligation cash offer within 24 hours. No fees, no repairs, no commissions. We&apos;re {location.county} County&apos;s trusted local cash home buyers.
              </p>

              <div className="space-y-3">
                {['Cash offer in 24 hours', 'Close in as little as 7 days', 'No repairs or cleaning required', 'Zero fees or commissions', 'We cover all closing costs'].map((badge, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-200 text-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About This City */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Selling Your House Fast in {location.name}, TX
          </h2>
          <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
            <p>
              {location.name} is one of Central Texas&apos;s most dynamic communities. Located in {location.county} County with a population of approximately {location.population.toLocaleString()}, {location.name} has grown rapidly alongside the broader Austin metro area. ZIP codes we serve include {location.zipCodes.join(', ')}.
            </p>
            <p>
              The {location.name} housing market has seen significant activity in recent years, driven by population growth and economic expansion. Notable employers and landmarks in the area include {location.landmarks.join(' and ')}, which have contributed to strong demand for housing across all price points.
            </p>
            <p>
              Whether you own a home in {location.neighborhoods.slice(0, 3).join(', ')}, or anywhere else in {location.name}, Elevate Home Offers is your local cash buying partner. We&apos;ve purchased homes throughout {location.county} County and know this market inside and out.
            </p>
            <p>
              We understand that {location.name} homeowners face the same urgent situations as homeowners everywhere — foreclosure, divorce, job changes, inherited properties, needed repairs — and we&apos;re here to provide a fast, fair, and hassle-free alternative to a traditional listing.
            </p>
          </div>
        </div>
      </section>

      <HowItWorks city={location.name} />

      {/* Why City Homeowners Choose Elevate */}
      <section className="py-16 bg-neutral">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">
            Why {location.name} Homeowners Choose Elevate Home Offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-2xl mb-3">📍</div>
              <h3 className="font-bold text-primary mb-2">Deep Local Knowledge</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We know {location.name}&apos;s neighborhoods, market trends, and property values intimately. From {location.neighborhoods[0]} to {location.neighborhoods[1] || location.neighborhoods[0]}, we price your home accurately based on real local data — not generic algorithms.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-bold text-primary mb-2">Fastest Close in {location.county} County</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We can move from accepted offer to funded sale in as little as 7 days. For {location.name} homeowners who need to sell fast — whether due to a job relocation, financial hardship, or personal circumstances — speed matters, and we deliver.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-2xl mb-3">🏭</div>
              <h3 className="font-bold text-primary mb-2">Built for {location.name}&apos;s Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                With {location.landmarks[0]} driving employment in the area, {location.name}&apos;s market is unique. We understand the dynamics of this market and how they affect your home&apos;s value — giving you an offer that reflects local conditions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-2xl mb-3">🤝</div>
              <h3 className="font-bold text-primary mb-2">Your Neighbors, Not Outsiders</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We&apos;re Austin-area locals who care about Central Texas communities. Unlike out-of-state hedge funds, we&apos;re invested in {location.name}&apos;s future and treat every transaction with the respect it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-5">
                Neighborhoods We Buy in {location.name}
              </h2>
              <ul className="space-y-3">
                {location.neighborhoods.map((hood, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">{hood}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-500 text-sm">And all other neighborhoods in {location.name}, TX — if you&apos;re unsure, just ask us.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-5">
                ZIP Codes Served in {location.name}
              </h2>
              <div className="flex flex-wrap gap-3">
                {location.zipCodes.map((zip) => (
                  <span key={zip} className="bg-primary text-white font-bold px-4 py-2 rounded-lg text-sm">
                    {zip}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-gray-500 text-sm">
                We serve all ZIP codes in {location.name} and {location.county} County. Selling a property in a neighboring ZIP? Call us — we likely cover it.
              </p>
              <div className="mt-6 bg-accent/10 border border-accent/20 rounded-xl p-4">
                <p className="text-sm text-primary font-medium">
                  {location.name} homeowners — get your free cash offer today.
                </p>
                <Link href="/get-cash-offer" className="inline-flex items-center gap-2 mt-2 text-accent font-semibold text-sm hover:underline">
                  Request a Cash Offer →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SituationsGrid />
      <ComparisonTable />

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">
            What Central Texas Sellers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allTestimonials.slice(0, 2).map((t, i) => (
              <div key={i} className="bg-neutral rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 text-sm italic leading-relaxed">&ldquo;{t.text}&rdquo;</blockquote>
                <div className="mt-4">
                  <div className="font-semibold text-primary text-sm">— {t.name}</div>
                  <div className="text-accent text-xs">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City FAQ */}
      <section className="py-16 bg-neutral">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Frequently Asked Questions — Selling in {location.name}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary hover:bg-neutral/50 transition-colors flex items-center justify-between list-none">
                  <span>{item.question}</span>
                  <svg className="w-5 h-5 text-accent flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Your Free Cash Offer in {location.name}
            </h2>
            <p className="text-gray-300 text-lg">
              No obligation. No fees. Close in as little as 7 days. We respond within 24 hours.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* Internal links to nearby cities */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-primary mb-5">
            We Also Buy Houses in Nearby Cities
          </h3>
          <div className="flex flex-wrap gap-3">
            {nearbyCities.map((city) => (
              <Link
                key={city.slug}
                href={`/sell-my-house-fast/${city.slug}`}
                className="bg-neutral hover:bg-accent/10 border border-gray-200 hover:border-accent text-primary text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Sell House Fast in {city.name}, TX →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
