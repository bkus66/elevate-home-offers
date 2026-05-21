import LeadForm from './LeadForm';

interface HeroProps {
  title: string;
  subtitle: string;
  city?: string;
}

const trustBadges = [
  { icon: '✓', text: '5+ Years in Business' },
  { icon: '✓', text: '100+ Homes Purchased' },
  { icon: '✓', text: 'Close in 7 Days' },
  { icon: '✓', text: 'A+ Local Reputation' },
  { icon: '✓', text: 'Zero Fees or Commissions' },
];

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-accent text-sm font-medium">Locally Owned &amp; Operated in Austin, TX</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {subtitle}
            </p>

            {/* Trust Badges */}
            <div className="space-y-3">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-sm">
                    {badge.icon}
                  </span>
                  <span className="text-gray-200 text-sm sm:text-base">{badge.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {['S', 'J', 'M', 'D'][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-accent">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-xs mt-0.5">Trusted by 100+ Austin homeowners</p>
              </div>
            </div>
          </div>

          {/* Right side: Lead Form */}
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
