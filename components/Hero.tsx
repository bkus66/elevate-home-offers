import LeadForm from './LeadForm';

interface HeroProps {
  title: string;
  subtitle: string;
  city?: string;
  backgroundImage?: string;
}

const trustBadges = [
  '5+ Years in Business',
  '100+ Homes Purchased',
  'Close in 7 Days',
  'Zero Fees or Commissions',
  'A+ Local Reputation',
];

export default function Hero({ title, subtitle, backgroundImage = '/austin-skyline.jpg' }: HeroProps) {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — headline + trust signals */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-semibold tracking-wide">
                Locally Owned &amp; Operated · Austin, TX
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              {title}
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
              {subtitle}
            </p>

            {/* Trust badges */}
            <div className="space-y-3 mb-8">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-100 font-medium">{badge}</span>
                </div>
              ))}
            </div>

            {/* Social proof row */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4">
              <div className="flex -space-x-2">
                {['S', 'J', 'M', 'D'].map((initial) => (
                  <div
                    key={initial}
                    className="w-9 h-9 rounded-full bg-accent border-2 border-white flex items-center justify-center text-primary text-xs font-bold"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 text-xs mt-0.5">Trusted by 100+ Central Texas homeowners</p>
              </div>
            </div>
          </div>

          {/* Right — Lead Form */}
          <div className="lg:pl-4">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
