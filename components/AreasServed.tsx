import Link from 'next/link';
import { locations } from '@/lib/locations';

export default function AreasServed() {
  return (
    <section className="py-16 lg:py-24 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Our Coverage Area</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Cities We Serve in Central Texas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We buy houses throughout the Greater Austin area and Central Texas. If your city isn&apos;t listed, give us a call — we may still be able to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map placeholder */}
          <div className="lg:col-span-1">
            <div className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-2xl p-8 text-center h-64 flex flex-col items-center justify-center">
              <svg className="w-12 h-12 text-primary/40 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-primary/60 font-semibold text-lg">Central Texas</p>
              <p className="text-primary/40 text-sm mt-1">Service Area</p>
              <p className="text-gray-500 text-xs mt-3">Austin &amp; Surrounding Communities</p>
            </div>
          </div>

          {/* City grid */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/sell-my-house-fast/${loc.slug}`}
                className="group bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:border-accent hover:shadow-md transition-all text-center"
              >
                <div className="text-primary font-semibold text-sm group-hover:text-accent transition-colors">
                  {loc.name}
                </div>
                <div className="text-gray-400 text-xs mt-0.5">Cash Home Buyers</div>
                <div className="text-accent text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  View Details →
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-primary rounded-xl p-6 text-center text-white">
          <p className="font-semibold text-lg mb-2">Don&apos;t see your city?</p>
          <p className="text-gray-300 text-sm mb-4">
            We may still be able to help. We work throughout Central Texas and occasionally take properties outside our core markets.
          </p>
          <a
            href="tel:[PHONE]"
            className="inline-flex items-center gap-2 bg-accent hover:bg-amber-500 text-primary font-bold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us to Find Out
          </a>
        </div>
      </div>
    </section>
  );
}
