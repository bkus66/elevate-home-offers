import Link from 'next/link';

const situations = [
  {
    icon: '🏠',
    title: 'Facing Foreclosure',
    description: "Stop the foreclosure process. We can close fast enough to protect your credit and put cash in your hand before the bank forecloses.",
  },
  {
    icon: '📋',
    title: 'Inherited Property',
    description: "Inherited a house you don't want to manage or maintain? We buy inherited homes quickly, even before or during probate.",
  },
  {
    icon: '⚖️',
    title: 'Going Through Divorce',
    description: "Dividing assets in a divorce is hard enough. We make selling the house fast, fair, and drama-free so you can both move on.",
  },
  {
    icon: '✈️',
    title: 'Relocating for Work',
    description: "Got a new job in another city? Don't let your old house slow you down. We'll close on your schedule so your relocation goes smoothly.",
  },
  {
    icon: '💼',
    title: 'Job Loss or Financial Hardship',
    description: "When income dries up, monthly mortgage payments become unbearable. Selling for cash can provide immediate relief and a fresh start.",
  },
  {
    icon: '🔑',
    title: 'Tired Landlord',
    description: "Done dealing with tenants, repairs, and midnight calls? Sell your rental property as-is — tenants and all — and reclaim your peace of mind.",
  },
  {
    icon: '🔨',
    title: 'Property Needs Major Repairs',
    description: "Foundation problems, roof damage, outdated systems? We buy houses that need serious work. No repair costs, no contractor drama.",
  },
  {
    icon: '📦',
    title: 'Downsizing',
    description: "Ready to simplify? Sell your larger home fast and move into something that fits your current lifestyle without the hassle of a traditional sale.",
  },
  {
    icon: '❤️',
    title: 'Health Issues or Life Changes',
    description: "Medical bills, health challenges, or life transitions can make selling quickly the best financial decision. We handle the heavy lifting.",
  },
  {
    icon: '📑',
    title: 'Liens or Back Taxes',
    description: "Owe back property taxes or have liens on the property? We can often work through these issues and still purchase your home for cash.",
  },
  {
    icon: '🔥',
    title: 'Fire or Storm Damage',
    description: "Dealing with a fire-damaged or storm-damaged home is overwhelming. We buy properties with significant damage so you don't have to rebuild.",
  },
  {
    icon: '📊',
    title: 'Listing Expired with No Offers',
    description: "Your agent couldn't sell it. The market didn't cooperate. We'll make a real offer regardless of condition, price history, or time on market.",
  },
];

export default function SituationsGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Every Situation Welcome</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            We Buy Houses in Any Situation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Life doesn&apos;t always go as planned. Whatever situation you&apos;re facing, we have experience helping homeowners just like you find a way forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {situations.map((situation, index) => (
            <Link
              key={index}
              href="/get-cash-offer"
              className="group block p-5 rounded-xl border border-gray-200 hover:border-accent hover:shadow-md transition-all bg-white"
            >
              <span className="text-3xl mb-3 block">{situation.icon}</span>
              <h3 className="text-base font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {situation.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{situation.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">Don&apos;t see your situation? We handle all types of home sales.</p>
          <Link
            href="/get-cash-offer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-900 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Tell Us About Your Situation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
