const rows = [
  {
    category: 'Time to Close',
    elevate: '7–14 days',
    agent: '30–90 days',
  },
  {
    category: 'Commissions & Fees',
    elevate: 'None (0%)',
    agent: '5–6% commission',
  },
  {
    category: 'Closing Costs',
    elevate: 'We pay them',
    agent: 'Buyer negotiates',
  },
  {
    category: 'Repairs Needed',
    elevate: 'None — sell as-is',
    agent: 'Often required',
  },
  {
    category: 'Open Houses & Showings',
    elevate: 'None required',
    agent: 'Multiple required',
  },
  {
    category: 'Financing Risk',
    elevate: 'No risk (cash)',
    agent: 'Deals fall through',
  },
  {
    category: 'Cleaning Required',
    elevate: 'Not required',
    agent: 'Yes',
  },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-success inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-red-400 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function ComparisonTable() {
  return (
    <section className="py-16 lg:py-24 bg-neutral">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Side by Side</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Compare Your Selling Options
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See how selling to Elevate Home Offers stacks up against a traditional real estate agent sale.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 sm:p-5 text-gray-500 font-medium text-sm bg-gray-50 border-b border-gray-200">
                  Factor
                </th>
                <th className="p-4 sm:p-5 text-center bg-accent/10 border-b border-accent/20">
                  <div className="text-primary font-bold text-sm sm:text-base">Elevate Home Offers</div>
                  <div className="text-accent text-xs font-medium mt-0.5">Cash Buyer</div>
                </th>
                <th className="p-4 sm:p-5 text-center bg-gray-50 border-b border-gray-200">
                  <div className="text-gray-700 font-bold text-sm sm:text-base">Traditional Agent</div>
                  <div className="text-gray-400 text-xs font-medium mt-0.5">MLS Listing</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="p-4 sm:p-5 text-gray-700 font-medium text-sm border-b border-gray-100">
                    {row.category}
                  </td>
                  <td className="p-4 sm:p-5 text-center border-b border-accent/10 bg-accent/5">
                    <div className="flex items-center justify-center gap-2">
                      <CheckIcon />
                      <span className="text-sm font-semibold text-primary">{row.elevate}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-center border-b border-gray-100">
                    <div className="flex items-center justify-center gap-2">
                      <XIcon />
                      <span className="text-sm text-gray-600">{row.agent}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-accent/10 border border-accent/20 rounded-xl p-5 text-center">
          <p className="text-primary font-semibold mb-1">Ready to skip the hassle?</p>
          <p className="text-gray-600 text-sm">
            With Elevate Home Offers, you save time, avoid fees, and get cash in your pocket faster. Request your free offer today — no obligation.
          </p>
        </div>
      </div>
    </section>
  );
}
