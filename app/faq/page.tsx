import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Cash Home Buyers Austin TX – Your Questions Answered',
  description:
    'Answers to the most common questions about selling your house fast for cash in Austin and Central Texas. No obligation, no fees, close in 7 days.',
  alternates: {
    canonical: 'https://elevatehomeoffers.com/faq',
  },
};

const faqCategories = [
  {
    category: 'General Questions',
    items: [
      {
        question: 'What is a cash home buyer?',
        answer: 'A cash home buyer is an individual or company that purchases real estate using their own funds rather than a bank mortgage. This means the sale isn\'t contingent on financing approval, which dramatically speeds up the closing process and eliminates the risk of the deal falling through at the last minute. Elevate Home Offers is a direct cash buyer — we use our own capital to purchase every home we acquire.',
      },
      {
        question: 'Is selling to a cash buyer a good idea?',
        answer: 'It depends on your priorities. If maximizing the sale price is your only goal and you have plenty of time, a traditional listed sale may net you slightly more (though fees often close the gap). But if you need to sell quickly, want to avoid repairs and showings, or are dealing with a complicated situation like foreclosure or probate, selling to a cash buyer is often the smarter choice. We encourage sellers to weigh all their options and we\'re transparent about what our offer represents.',
      },
      {
        question: 'How is Elevate Home Offers different from iBuyers like Opendoor?',
        answer: 'Large iBuyers use algorithms and operate at massive national scale. Their offers can be inconsistent, and their fees are often surprisingly high. We\'re a local, family-owned company that knows the Austin-area market deeply. We make offers based on real local knowledge, we communicate personally, and we don\'t charge fees. Many sellers find our offers are competitive with iBuyers once fees are factored in — and our process is far more personal.',
      },
      {
        question: 'Do you buy condos and townhomes, not just houses?',
        answer: 'Yes, we purchase a variety of property types including single-family homes, condos, townhomes, duplexes, and small multi-family properties (2–4 units). We do not currently purchase commercial properties or vacant land. If you have a property type not listed here, give us a call and we can let you know if it\'s something we can work with.',
      },
    ],
  },
  {
    category: 'About the Process',
    items: [
      {
        question: 'How long does the process take from start to finish?',
        answer: 'The entire process — from initial inquiry to cash in hand — typically takes 7–21 days, depending on the complexity of the title search and your preferred closing date. The offer itself comes within 24 hours. Once accepted, we can often close in as little as 7 days. If you need a longer timeline (for example, you need time to find a new home), we can also accommodate 30–60 day closings.',
      },
      {
        question: 'Will I need to be present at closing?',
        answer: 'Yes, in most cases the seller attends the closing appointment at the title company to sign the final documents. The appointment typically takes 30–45 minutes. In some circumstances, closings can be done remotely using a mobile notary — ask us if this is something you need and we\'ll do our best to accommodate.',
      },
      {
        question: 'What happens to my belongings when I sell?',
        answer: 'That\'s entirely up to you. You can take everything you want and leave everything you don\'t. We handle the cleanout after closing. Many sellers who are downsizing or moving quickly appreciate not having to arrange a junk removal service. Just let us know what you plan to leave and we\'ll factor it into our planning.',
      },
      {
        question: 'Can I cancel the sale after signing a purchase agreement?',
        answer: 'Once a purchase agreement is signed, it is a legally binding contract. However, we understand life circumstances change and we try to work with sellers who encounter unexpected situations. The purchase agreement does include certain contingency periods — speak with us directly if something changes after signing and we\'ll discuss options openly.',
      },
    ],
  },
  {
    category: 'Pricing & Offers',
    items: [
      {
        question: 'How do you determine how much to offer?',
        answer: 'Our offer is based on three main factors: (1) the estimated After Repair Value (ARV) of the home — what it would be worth fully updated and in excellent condition; (2) the estimated cost of all necessary repairs, updates, and carrying costs; and (3) current comparable sales in your specific neighborhood. We research every property carefully and explain our methodology when we present the offer.',
      },
      {
        question: 'Will I get fair market value for my home?',
        answer: 'Cash offers are typically below full retail market value — this is true for all cash buyers, not just us. Our value comes from speed, certainty, and eliminating costs you\'d otherwise pay: no 5–6% agent commission, no closing costs, no repair costs, no holding costs while your home sits on the market. When you net these savings against the offer gap, many sellers find the difference is smaller than expected.',
      },
      {
        question: 'Are there any fees or costs to me?',
        answer: 'Zero. You pay no real estate commissions, no closing costs, no administrative fees, no inspection fees — nothing. We cover all standard closing costs. The number on your offer is the number you receive at closing. This is one of the most significant advantages of selling to us versus a traditional sale.',
      },
      {
        question: 'Can you offer more if I need it?',
        answer: 'Our offers are based on genuine market analysis, not a number we inflate for marketing purposes. We can\'t offer more than the numbers support without losing money ourselves. However, we\'re always happy to walk through our analysis with you and explain exactly what\'s driving the offer. If you have information we might have missed — recent upgrades, unique features — we want to hear it.',
      },
    ],
  },
  {
    category: 'Situations We Help With',
    items: [
      {
        question: 'Can you help if I\'m behind on my mortgage?',
        answer: 'Yes. If you\'re behind on payments but the property still has equity (it\'s worth more than you owe), we can often purchase the home quickly enough to satisfy the mortgage, avoid foreclosure, and put some cash in your pocket. If you\'ve received a Notice of Default or a foreclosure sale date, please contact us immediately — time is critical and there may still be options available to you.',
      },
      {
        question: 'Can you buy my house if it has code violations?',
        answer: 'Yes. We regularly purchase properties with code violations, unpermitted additions, zoning issues, and other legal complications. These don\'t prevent us from buying — we factor the cost of resolving these issues into our offer. You won\'t need to pay fines or make repairs before selling.',
      },
      {
        question: 'Can I sell an inherited property that\'s in probate?',
        answer: 'In most cases, you need the probate process to be substantially complete before transferring title. However, Texas has several simplified probate procedures (Muniment of Title, Independent Administration) that can move faster than you might expect. We work with inherited properties regularly and can connect you with a local probate attorney. We\'re patient and can wait for the process to complete.',
      },
      {
        question: 'What if the house has tenants in it?',
        answer: 'We can work with occupied properties. If the tenants are on a current lease, we\'d purchase the property subject to that lease. If they\'re on a month-to-month arrangement, we\'ll coordinate a timeline that works for everyone involved. We handle occupied property acquisitions regularly and know how to navigate them professionally and legally.',
      },
    ],
  },
  {
    category: 'About Our Company',
    items: [
      {
        question: 'Are you a legitimate company?',
        answer: 'Absolutely. Elevate Home Offers is a registered Texas business with a track record of 100+ completed transactions over 5+ years. We work with licensed title companies and real estate attorneys on every transaction. We\'re happy to provide references from past sellers upon request. We encourage you to do your due diligence — we have nothing to hide.',
      },
      {
        question: 'Are you a cash buyer or a wholesaler?',
        answer: 'We are a direct cash buyer. We do not assign contracts to third parties. When we make you an offer, Elevate Home Offers is the entity that will purchase your home and funds the transaction with our own capital. This means no deal collapses, no mystery buyers, no surprises at closing.',
      },
      {
        question: 'What happens to the house after you buy it?',
        answer: 'We typically renovate the homes we purchase and sell them on the retail market, which benefits the neighborhood by improving the housing stock. In some cases, we may rent properties. Either way, we take pride in our renovations and aim to make every property we touch a better home than when we bought it.',
      },
      {
        question: 'How do I know I can trust you?',
        answer: 'That\'s a fair question — trust is earned. We\'d encourage you to read our reviews, speak with us on the phone before committing to anything, ask for references, and take your time with any decision. We don\'t use high-pressure tactics, we don\'t set artificial deadlines, and we\'re transparent about everything. If something feels off, ask us directly. We\'re happy to answer any question.',
      },
    ],
  },
];

const allFaqItems = faqCategories.flatMap((cat) => cat.items);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <div className="bg-primary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Everything You Need to Know</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We believe informed sellers make the best decisions. Here are the answers to every question we&apos;ve heard from Central Texas homeowners.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((cat, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-accent/30">
                {cat.category}
              </h2>
              <div className="space-y-4">
                {cat.items.map((item, itemIndex) => (
                  <details key={itemIndex} className="border border-gray-200 rounded-xl overflow-hidden group">
                    <summary className="px-6 py-4 cursor-pointer font-semibold text-primary hover:bg-neutral/50 transition-colors flex items-center justify-between list-none">
                      <span>{item.question}</span>
                      <svg className="w-5 h-5 text-accent flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 bg-neutral rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-primary mb-3">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              We&apos;re happy to answer anything not covered here. Give us a call or shoot us an email — real people respond to every inquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                Contact Us
              </Link>
              <Link href="/get-cash-offer" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-amber-500 text-primary font-bold px-6 py-3 rounded-xl transition-colors">
                Get a Cash Offer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready for a No-Obligation Cash Offer?</h2>
            <p className="text-gray-300">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
