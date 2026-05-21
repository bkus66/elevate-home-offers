import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Local Cash Home Buyers in Austin, TX',
  description:
    'Learn about Elevate Home Offers — a locally owned, family-operated cash home-buying company based in Austin, TX. 5+ years, 100+ transactions, and a commitment to treating every seller with respect.',
  alternates: {
    canonical: 'https://elevatehomeoffers.com/about',
  },
};

export default function AboutPage() {
  return (
    <article>
      {/* Hero */}
      <div className="bg-primary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Elevate Home Offers
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A locally owned, family-operated cash home-buying company rooted in the Austin, TX community since day one.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-5 text-gray-600 leading-relaxed">
              <h2 className="text-3xl font-bold text-primary mb-4">Who We Are</h2>
              <p>
                Elevate Home Offers was founded on a simple belief: homeowners deserve a better, more transparent option when they need to sell quickly. Too often, people facing urgent circumstances — foreclosure, divorce, job loss, inherited properties — find themselves caught between an unforgiving traditional real estate market and predatory investors looking to pay pennies on the dollar. We set out to be something different.
              </p>
              <p>
                We&apos;re a family-owned business, born and raised in Austin, Texas. Our founding team has deep roots in this community — we went to school here, raised families here, and watched Austin grow from a quirky college town into one of the most dynamic real estate markets in the country. We care about this place, and we care about the people who live here.
              </p>
              <p>
                Over the past five-plus years, we&apos;ve completed more than 100 real estate transactions across Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, and throughout Central Texas. Each transaction has made us better at understanding what homeowners truly need — not just a fast sale, but a fair, dignified process that respects their time, their intelligence, and their situation.
              </p>
              <p>
                We buy homes directly with our own funds. That means there are no middlemen, no wholesalers, no assignment fees, and no last-minute surprises when a mystery buyer backs out. When we make you an offer, we are the buyer — full stop. This allows us to close fast, close reliably, and deliver on every commitment we make.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-primary rounded-2xl p-6 text-center text-white">
                <div className="text-5xl font-bold text-accent mb-2">100+</div>
                <div className="text-gray-300">Homes Purchased</div>
              </div>
              <div className="bg-neutral rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600">Years Serving Austin</div>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-primary mb-2">13</div>
                <div className="text-gray-600">Cities Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-neutral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-3 text-center">Our Core Values</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            These aren&apos;t just words on a website — they&apos;re principles that guide every offer we make and every conversation we have.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: '🤝',
                title: 'Radical Transparency',
                desc: "We show our work. When we make an offer, we explain exactly how we arrived at that number — the comparable sales, the estimated repair costs, the market factors. No black boxes, no mysterious deductions.",
              },
              {
                icon: '⚡',
                title: 'Speed Without Sacrificing Fairness',
                desc: "Speed is valuable, but not at the cost of fairness. We work hard to make our process fast AND make offers that honestly reflect your property's value.",
              },
              {
                icon: '🏡',
                title: 'Community First',
                desc: "We live in Austin. Our kids go to school here. When we buy a home, we think carefully about how our renovation and resale choices affect the neighborhood and community.",
              },
              {
                icon: '💬',
                title: 'Direct Communication',
                desc: "You talk to real people who can answer real questions and make real decisions. No call centers, no automated responses, no getting shuffled around. We pick up the phone.",
              },
              {
                icon: '🛡️',
                title: 'No Pressure, Ever',
                desc: "We never use high-pressure tactics. Selling your home is a major decision and we believe in letting homeowners make it on their own terms, with full information.",
              },
              {
                icon: '✅',
                title: 'We Keep Our Word',
                desc: "When we make you an offer and you accept, that's a commitment. We don't reduce offers at closing, find excuses to back out, or change terms at the last minute.",
              },
            ].map((val, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <span className="text-3xl mb-3 block">{val.icon}</span>
                <h3 className="font-bold text-primary mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why not wholesaler */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Why We&apos;re Different from Wholesalers &amp; Hedge Funds</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              The real estate industry has seen an influx of two types of buyers that can harm homeowners: wholesalers and institutional hedge funds. Understanding the difference matters when you&apos;re choosing who to sell to.
            </p>
            <p>
              <strong className="text-primary">Wholesalers</strong> are not end buyers. They contract to purchase your home and then assign (sell) that contract to another investor for a fee. This means the person who makes you an offer is not the person who will actually buy your home. Deals collapse when their assigned buyer falls through — leaving you back at square one, sometimes weeks later and with fewer options.
            </p>
            <p>
              <strong className="text-primary">Institutional buyers</strong> (hedge funds and large iBuyers) operate at scale. They make standardized, algorithm-driven offers that often undervalue unique properties and provide zero personal service. When issues arise, you&apos;re dealing with a corporation, not a person.
            </p>
            <p>
              <strong className="text-primary">Elevate Home Offers</strong> is neither. We are direct buyers who purchase homes with our own funds, in our own community. When we make an offer, we stand behind it. We answer calls, return texts, and show up on closing day. Our reputation in Austin depends on doing right by every seller — and that&apos;s not something a hedge fund in New York City has to worry about.
            </p>
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-16 bg-neutral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Meet the Team</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Our team is made up of Austin locals who are passionate about real estate and helping homeowners navigate difficult situations with dignity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { initials: 'JD', name: 'John D.', role: 'Founder & Lead Buyer' },
              { initials: 'SM', name: 'Sarah M.', role: 'Acquisitions Manager' },
              { initials: 'TR', name: 'Tom R.', role: 'Transaction Coordinator' },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-20 h-20 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-bold text-primary">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
                <p className="text-xs text-gray-400 mt-2">Austin, TX — Born &amp; Raised</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-8 italic">
            Photos coming soon — we&apos;re a real team, not stock photos!
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Work with a Team You Can Trust?</h2>
            <p className="text-gray-300 text-lg">
              Get a free, no-obligation cash offer for your Austin-area home. We&apos;ll be in touch within 24 hours.
            </p>
          </div>
          <LeadForm />
          <p className="text-center mt-6">
            <Link href="/reviews" className="text-accent hover:underline text-sm">
              Read what our sellers say about us →
            </Link>
          </p>
        </div>
      </section>
    </article>
  );
}
