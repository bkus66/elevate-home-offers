import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import BenefitGrid from '@/components/BenefitGrid';
import SituationsGrid from '@/components/SituationsGrid';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';
import AreasServed from '@/components/AreasServed';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Sell My House Fast Austin, TX | Cash Offer in 24 Hours – Elevate Home Offers',
  description:
    'Need to sell your house fast in Austin, TX? Elevate Home Offers pays cash for homes in any condition. No fees, no repairs, no commissions. Get a fair cash offer in 24 hours and close in as little as 7 days.',
  alternates: {
    canonical: 'https://elevatehomeoffers.com',
  },
};

const homepageFAQ = [
  {
    question: 'How fast can you close on my house?',
    answer:
      'We can close in as little as 7 days once you accept our cash offer. The exact timeline depends on the title search and any outstanding liens or title issues, but most of our transactions close within 7–14 days. If you need more time to arrange your move or find a new home, we can also accommodate a longer closing timeline of 30–60 days — you set the date that works for you.',
  },
  {
    question: 'How is your cash offer calculated?',
    answer:
      "Our offer is based on several factors including the property's current condition, the cost of any necessary repairs or updates, recent comparable sales in your neighborhood, and the current Austin-area real estate market. We research each property thoroughly and aim to make a fair offer that reflects real market value, accounting for the as-is condition. We're completely transparent about how we arrived at your offer and happy to walk you through our analysis.",
  },
  {
    question: 'Do I pay any fees or commissions?',
    answer:
      'Absolutely not. When you sell to Elevate Home Offers, you pay zero real estate commissions, zero agent fees, and zero closing costs. We cover all standard closing costs on our end. The cash offer we present to you is the amount you walk away with at closing — no deductions, no surprises. This is one of the biggest advantages over a traditional agent sale where 5–6% commissions and closing costs can eat significantly into your proceeds.',
  },
  {
    question: 'What condition must my house be in?',
    answer:
      "Your house can be in any condition — literally. We have purchased homes with foundation issues, roof damage, water damage, fire damage, severe deferred maintenance, full-gut renovation needs, code violations, and everything in between. You do not need to clean, paint, repair, or even remove your belongings before selling. We handle all of that after closing. The property's condition is factored into our offer price, not used as a reason to decline.",
  },
  {
    question: 'Do you buy houses in foreclosure?',
    answer:
      "Yes, we specialize in helping homeowners who are facing foreclosure or are already in the foreclosure process. We can often close fast enough to stop the foreclosure, protect your credit, and put cash in your pocket before the bank takes the home. If you're behind on payments or have received a Notice of Default, time is critical — contact us immediately and we'll do everything we can to help you explore your options.",
  },
  {
    question: 'Can I sell an inherited house before probate is complete?',
    answer:
      "It depends on the specific situation. In Texas, if you're using Muniment of Title or a simplified probate process, you may be able to transfer and sell relatively quickly. If a full probate is required, the sale typically must wait until the estate is administered or you obtain court approval. We work with inherited properties regularly and can connect you with a local probate attorney if needed. We're patient and will work on your timeline throughout the probate process.",
  },
  {
    question: 'Are you a real cash buyer or a wholesaler?',
    answer:
      "We are a direct cash buyer — not a wholesaler or middleman. When you sell to us, you're selling directly to Elevate Home Offers. We use our own funds to purchase your home, which is why we can guarantee a fast, reliable close with no financing contingencies. We do not assign your contract to another buyer or add middleman markups. This matters because it means your deal won't fall apart at the last minute due to a third-party buyer backing out.",
  },
  {
    question: 'Do you buy houses outside of Austin?',
    answer:
      "Yes! While Austin is our home base, we actively buy homes throughout the Greater Austin area and Central Texas. Our service area includes Round Rock, Leander, Georgetown, Cedar Park, Pflugerville, Kyle, Hutto, Buda, Manor, Temple, Killeen, and Taylor — plus surrounding communities. If you're unsure whether we cover your area, just give us a call and we'll let you know right away.",
  },
  {
    question: 'What cities in Central Texas do you serve?',
    answer:
      "We serve 13 cities throughout the Greater Austin and Central Texas area: Austin, Round Rock, Leander, Georgetown, Cedar Park, Pflugerville, Kyle, Hutto, Buda, Manor, Temple, Killeen, and Taylor. Each of these markets has unique characteristics and we have deep experience buying homes in all of them. Our local knowledge means we can make fair offers that reflect your specific neighborhood and market conditions.",
  },
  {
    question: 'Is there any obligation when I request a cash offer?',
    answer:
      "None whatsoever. Requesting a cash offer from Elevate Home Offers is completely free and places no obligation on you to sell or move forward in any way. We'll make you a fair offer, explain how we calculated it, and then the decision is 100% yours. We never pressure homeowners — we believe in transparent, respectful transactions, and we understand that selling your home is a major decision. If you decide our offer isn't right for you, there are no hard feelings and no cost to you.",
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elevate Home Offers',
  description: 'Cash home buyers serving Austin, TX and Central Texas. We buy houses fast, as-is, for cash.',
  url: siteConfig.baseUrl,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '30.2672',
    longitude: '-97.7431',
  },
  areaServed: [
    'Austin', 'Round Rock', 'Leander', 'Georgetown', 'Cedar Park',
    'Pflugerville', 'Kyle', 'Hutto', 'Buda', 'Manor', 'Temple', 'Killeen', 'Taylor',
  ],
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
  mainEntity: homepageFAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <Hero
        title="Sell Your House Fast in Austin, TX"
        subtitle="Get a fair, no-obligation cash offer in 24 hours. No realtors. No repairs. No fees. Close in as little as 7 days."
        city="Austin"
      />

      {/* Social Proof Bar */}
      <div className="bg-primary py-4 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                About Elevate Home Offers
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Elevate Home Offers is a locally owned and operated cash home-buying company based in Austin, Texas. For over five years, we&apos;ve been helping Central Texas homeowners sell their properties quickly, fairly, and without the typical headaches of a traditional real estate sale.
                </p>
                <p>
                  With more than 100 successful transactions across Austin, Round Rock, Cedar Park, Georgetown, and surrounding communities, our team brings deep local market expertise to every deal. We&apos;re not a Wall Street hedge fund or an out-of-state investment company — we&apos;re your neighbors, and this community is our home.
                </p>
                <p>
                  Our family-owned approach means you work directly with decision-makers who can answer your questions, move quickly, and honor their commitments. No middlemen, no corporate runaround, no bait-and-switch tactics. We believe in honest, transparent transactions that work for both parties.
                </p>
                <p>
                  Whether you&apos;re facing foreclosure, going through a divorce, dealing with an inherited property, or simply need to sell fast, we have the experience and resources to help you find a path forward.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                >
                  Learn more about us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary rounded-2xl p-6 text-center text-white">
                <div className="text-4xl font-bold text-accent mb-1">100+</div>
                <div className="text-sm text-gray-300">Homes Purchased</div>
              </div>
              <div className="bg-neutral rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-gray-600">Years in Business</div>
              </div>
              <div className="bg-neutral rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-1">7</div>
                <div className="text-sm text-gray-600">Day Close Possible</div>
              </div>
              <div className="bg-accent rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-1">0%</div>
                <div className="text-sm text-primary/70">Fees &amp; Commissions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SituationsGrid />
      <ComparisonTable />
      <Testimonials />
      <AreasServed />
      <FAQ items={homepageFAQ} />

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Free Cash Offer Today
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join hundreds of Austin-area homeowners who have experienced the Elevate difference. No obligation, no pressure, and no fees — ever.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
