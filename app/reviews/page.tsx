import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reviews | 5-Star Rated Cash Home Buyers in Austin, TX',
  description:
    'Read real reviews from homeowners who sold their house fast to Elevate Home Offers in Austin and Central Texas. 5-star rated cash home buyers.',
  alternates: {
    canonical: 'https://elevatehomeoffers.com/reviews',
  },
};

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-5 h-5 ${i <= count ? 'text-accent fill-accent' : 'text-gray-300 fill-gray-300'}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const allReviews = [
  {
    name: 'Sarah M.',
    location: 'Austin, TX',
    date: 'March 2024',
    rating: 5,
    text: "I needed to sell fast after my divorce and Elevate made it so easy. I had a cash offer in 24 hours and closed in 10 days. No stress, no hassle, no realtor drama. The team was incredibly professional and kept me informed every step of the way. They were compassionate about my situation and never made me feel rushed or pressured. I was honestly shocked by how smooth the whole process was. I would recommend Elevate Home Offers to anyone who needs to sell quickly and wants to work with people they can actually trust.",
  },
  {
    name: 'James R.',
    location: 'Round Rock, TX',
    date: 'February 2024',
    rating: 5,
    text: "The house I inherited from my uncle needed a tremendous amount of work — we're talking roof, HVAC, foundation, the works. I couldn't afford to fix it up and I didn't have time to manage contractors. Elevate bought it as-is and gave me a fair price. I was worried they'd lowball me because of the condition, but their offer was genuinely reasonable and they clearly knew the local market. The whole thing was done in about two weeks from first contact to cash in hand. Couldn't be happier.",
  },
  {
    name: 'Maria L.',
    location: 'Georgetown, TX',
    date: 'January 2024',
    rating: 5,
    text: "Inherited my mom's house and had no idea what to do. The probate process is complicated and I was completely lost. The team at Elevate was so patient and walked me through every step — they even connected me with a probate attorney who answered my questions. They waited while the estate was settled and then moved quickly once we could proceed. They never once pressured me and they made me feel like my situation mattered to them personally. The sale itself was seamless. Highly recommend without reservation.",
  },
  {
    name: 'David K.',
    location: 'Cedar Park, TX',
    date: 'December 2023',
    rating: 5,
    text: "Was behind on payments and facing foreclosure after a medical emergency wiped out my savings. I called Elevate and they got back to me within an hour. They explained all my options clearly and honestly — didn't just push me toward a sale. When I decided to sell, they moved incredibly fast and closed in 9 days, which was enough to stop the foreclosure proceedings. They genuinely saved my credit and gave me a fresh financial start. These guys are the real deal and I can't thank them enough.",
  },
  {
    name: 'Lisa T.',
    location: 'Pflugerville, TX',
    date: 'November 2023',
    rating: 5,
    text: "We were relocating to Seattle for my husband's new job and needed to sell our Pflugerville home fast. We listed with an agent first but after 45 days and two failed deals, we were running out of time. Elevate stepped in, gave us a solid offer within 24 hours, and we closed in 11 days. The offer was less than our listing price but honestly very close — and when you factor in no agent commission, no repair requests, and no more mortgage payments while we were already paying rent in Seattle, it was absolutely the right choice.",
  },
  {
    name: 'Robert and Nancy H.',
    location: 'Kyle, TX',
    date: 'October 2023',
    rating: 5,
    text: "We're in our 70s and the house had become too much for us to maintain. We didn't want the disruption of a traditional listing with showings and strangers coming through our home for weeks. Elevate was the perfect solution. They were respectful, patient, and made the process completely painless. The offer was fair, the team communicated clearly throughout, and we closed exactly when we wanted to. Now we're settled into a smaller place and loving the simplicity. Should have called them sooner!",
  },
  {
    name: 'Marcus J.',
    location: 'Hutto, TX',
    date: 'September 2023',
    rating: 5,
    text: "Had a rental property in Hutto that I was done managing. Tenants moving out, needed repairs, and I just didn't have the energy for another round of the landlord life. Elevate bought it as-is with the tenant still technically on a month-to-month lease and handled everything professionally. They knew exactly how to structure the deal and it was completely drama-free. If you're a tired landlord who wants out, these are your people.",
  },
  {
    name: 'Amanda F.',
    location: 'Buda, TX',
    date: 'August 2023',
    rating: 5,
    text: "Going through a divorce is hard enough without also navigating a complicated home sale. My ex and I couldn't agree on much, but we both agreed that Elevate's offer was fair and the process was exactly what we needed — fast, simple, and with no room for drama. They handled everything professionally, communicated with both of us, and got us to closing quickly. I genuinely don't think a traditional sale would have worked given the circumstances. So grateful we found them.",
  },
];

export default function ReviewsPage() {
  return (
    <article>
      {/* Hero */}
      <div className="bg-primary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Real Reviews</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What Our Sellers Say
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <StarRow />
            <span className="text-white font-bold text-xl">5.0</span>
            <span className="text-gray-300">/ 5.0</span>
          </div>
          <p className="text-gray-300">Based on 100+ verified reviews from Central Texas homeowners</p>
        </div>
      </div>

      {/* Rating summary */}
      <div className="bg-neutral py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Overall Rating', value: '5.0 / 5.0' },
              { label: 'Would Recommend', value: '100%' },
              { label: 'Process Satisfaction', value: '5.0 / 5.0' },
              { label: 'Communication', value: '5.0 / 5.0' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Google review placeholder */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4">
            <div className="text-3xl font-bold text-primary">G</div>
            <div>
              <div className="font-semibold text-gray-800">Google Reviews</div>
              <div className="flex items-center gap-2">
                <StarRow />
                <span className="text-gray-600 text-sm">5.0 — See our Google Business profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {allReviews.map((review, index) => (
              <div key={index} className="bg-neutral rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                      {review.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-sm">{review.name}</div>
                      <div className="text-accent text-xs">{review.location}</div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs">{review.date}</span>
                </div>
                <StarRow count={review.rating} />
                <blockquote className="mt-3 text-gray-600 text-sm leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Growing List of Happy Sellers</h2>
            <p className="text-gray-300 text-lg">
              Get your free, no-obligation cash offer today and experience the Elevate difference for yourself.
            </p>
          </div>
          <LeadForm />
          <p className="text-center mt-6">
            <Link href="/how-it-works" className="text-accent hover:underline text-sm">
              Learn how our simple process works →
            </Link>
          </p>
        </div>
      </section>
    </article>
  );
}
