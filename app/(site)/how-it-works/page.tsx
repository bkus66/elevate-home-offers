import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works | Sell Your House Fast for Cash',
  description:
    'Learn exactly how Elevate Home Offers buys houses fast for cash in Austin, TX. Our simple 3-step process means you can have a cash offer in 24 hours and close in as little as 7 days.',
  alternates: {
    canonical: 'https://elevatehomeoffers.com/how-it-works',
  },
};

const processFAQ = [
  {
    question: 'What happens after I submit the form?',
    answer:
      "After you submit your property information, a member of our team will review your submission and may reach out with a few follow-up questions if needed. Within 24 hours, we'll call or email you with a cash offer. There's no visit required at this stage — we do our research first. If you'd like to move forward, we then schedule a brief property walkthrough before finalizing the offer.",
  },
  {
    question: 'Will someone need to visit my house?',
    answer:
      "Yes, but only after we've presented a preliminary offer and you want to move forward. The property visit is brief — typically 20–30 minutes — and is really just a quick walkthrough to confirm the condition of the home matches what we researched. We schedule it at a time that works for you. There's no obligation after the visit — if you change your mind, that's completely fine.",
  },
  {
    question: 'How does closing work?',
    answer:
      "Closing happens at a local, reputable title company. We coordinate all the paperwork and work directly with the title company so you don't have to manage that process. On closing day, you sign the documents, the title company verifies funds, and you receive your cash — typically via wire transfer on the same day or the next business day. The whole closing appointment usually takes 30–45 minutes.",
  },
  {
    question: 'What if I have a mortgage on the property?',
    answer:
      "No problem. Having an outstanding mortgage is very common. At closing, the title company pays off your existing mortgage balance from the sale proceeds, and you receive the remaining equity as cash. As long as the property has positive equity (what it's worth is more than what you owe), we can typically make this work. If you're underwater on the mortgage, contact us anyway — we may still have options.",
  },
  {
    question: "Can I back out after accepting the offer?",
    answer:
      "We understand that circumstances change. While we do enter into a formal purchase agreement, we handle each situation with understanding and open communication. If something major changes in your situation, let us know as soon as possible and we'll work through it together. Our goal is a fair, mutually agreeable transaction — not to trap anyone into a deal that doesn't work for them.",
  },
];

export default function HowItWorksPage() {
  return (
    <article>
      {/* Hero */}
      <div className="bg-primary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Simple. Fast. Transparent.</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How Selling Your House for Cash Works
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Selling your home to Elevate Home Offers is the simplest home sale you&apos;ll ever experience. Here&apos;s exactly what to expect from start to finish.
          </p>
        </div>
      </div>

      {/* Step 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary font-bold text-xl mb-6">1</div>
              <h2 className="text-3xl font-bold text-primary mb-4">Tell Us About Your Property</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The process begins with a simple form submission or a phone call. We just need the basics: the property address, your name and contact information, and optionally, a brief description of your situation or the property&apos;s condition.
                </p>
                <p>
                  You don&apos;t need to have an inspection done, gather documents, or prepare your home in any way. We do our own research using public records, recent comparable sales, and neighborhood data to evaluate your property.
                </p>
                <p>
                  This first step takes about five minutes and costs you nothing. There&apos;s no obligation to proceed, and we never share your information with third parties.
                </p>
              </div>
            </div>
            <div className="bg-neutral rounded-2xl p-8 text-center">
              <svg className="w-24 h-24 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-primary font-semibold text-lg">Takes about 5 minutes</p>
              <p className="text-gray-500 text-sm mt-1">Online form or phone call</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="py-16 bg-neutral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 bg-white rounded-2xl p-8 text-center shadow-sm">
              <svg className="w-24 h-24 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-primary font-semibold text-lg">Within 24 hours</p>
              <p className="text-gray-500 text-sm mt-1">Fair, data-backed offer</p>
              <div className="mt-4 inline-flex items-center gap-2 bg-success/10 text-success rounded-full px-3 py-1 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No Obligation
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary font-bold text-xl mb-6">2</div>
              <h2 className="text-3xl font-bold text-primary mb-4">Receive a Fair Cash Offer</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Within 24 hours of your submission, we&apos;ll contact you with a cash offer for your property. Our offers are based on thorough market research — we look at recent comparable sales in your specific neighborhood, your home&apos;s estimated condition, and current market trends in your area.
                </p>
                <p>
                  We walk you through how we calculated the offer so you understand exactly where the number comes from. Our goal is a fair offer that works for both parties, not the lowest possible number to maximize our profit.
                </p>
                <p>
                  This offer comes with zero pressure. Take your time reviewing it, ask questions, compare it to other options if you like. The offer is yours to accept or decline — we respect your decision either way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary font-bold text-xl mb-6">3</div>
              <h2 className="text-3xl font-bold text-primary mb-4">Close on Your Timeline</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Once you accept our offer, we move into the closing phase. We handle all of the paperwork, coordinate with a reputable local title company, and manage the process from accepted offer to funded sale.
                </p>
                <p>
                  You set the closing date. Need to close in 7 days? We can do that. Need 45 days to find a new home and coordinate your move? We can accommodate that too. We work on your schedule, not ours.
                </p>
                <p>
                  On closing day, you&apos;ll sign the final documents at the title company (this takes about 30–45 minutes), and your cash will be transferred to you, typically by wire transfer on the same or next business day. At that point, you&apos;re done — no more mortgage payments, no more property taxes, no more maintenance headaches.
                </p>
                <p>
                  We cover all standard closing costs, so the amount in your pocket is the offer amount, period.
                </p>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-center text-white">
              <svg className="w-24 h-24 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-white font-semibold text-xl mb-2">Close in as Little as 7 Days</p>
              <p className="text-gray-300 text-sm">Or on your timeline — you decide</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="text-accent font-bold">$0</div>
                  <div className="text-gray-300">Closing Costs</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="text-accent font-bold">$0</div>
                  <div className="text-gray-300">Commissions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-16 bg-neutral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">What Sets Our Process Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'No Financing Contingency',
                desc: "Traditional buyers often lose their financing at the last minute. We use our own cash, so your deal never falls through because of a bank.",
              },
              {
                title: 'No Appraisal Required',
                desc: "Bank-financed buyers require an appraisal. We don't — which removes a major source of deal delays and deal-killers.",
              },
              {
                title: 'No Inspection Negotiations',
                desc: "When an inspector finds problems, traditional buyers come back with repair demands. We buy as-is — no inspection-based renegotiations.",
              },
              {
                title: 'No Open Houses',
                desc: "Traditional sales require staging, cleaning, and dozens of strangers walking through your home. With us, there's just one brief walkthrough.",
              },
              {
                title: 'We Handle the Paperwork',
                desc: "Our team coordinates everything with the title company. You don't need to manage documents, chase signatures, or navigate complex paperwork.",
              },
              {
                title: 'Direct Line to Decision Makers',
                desc: "You work directly with the people who make the offers — not a call center. Questions get answered and decisions get made quickly.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={processFAQ} title="Questions About Our Process" />

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 text-lg">
              Fill out the form below and we&apos;ll have a cash offer for your Austin-area home within 24 hours. Zero obligation, zero fees.
            </p>
          </div>
          <LeadForm />
          <p className="text-center mt-6 text-gray-400 text-sm">
            Prefer to talk first?{' '}
            <Link href="/contact" className="text-accent hover:underline">
              Contact us directly
            </Link>
            .
          </p>
        </div>
      </section>
    </article>
  );
}
