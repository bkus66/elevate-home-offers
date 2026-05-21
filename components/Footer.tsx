import Link from 'next/link';
import Image from 'next/image';
import { locations } from '@/lib/locations';
import { siteConfig } from '@/lib/seo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="relative w-52 h-[97px] mb-1">
                <Image
                  src="/logo-white.png"
                  alt="Elevate Home Offers"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Locally owned cash home buyers serving Austin &amp; Central Texas. We buy houses fast, as-is, for cash — no fees, no repairs, no hassle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link href="/how-it-works" className="text-gray-300 hover:text-white text-sm transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/reviews" className="text-gray-300 hover:text-white text-sm transition-colors">Reviews</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white text-sm transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</Link></li>
              <li><Link href="/get-cash-offer" className="text-accent hover:text-amber-300 text-sm font-semibold transition-colors">Get Cash Offer →</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Service Areas</h3>
            <ul className="space-y-1 grid grid-cols-2 gap-x-2">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/sell-my-house-fast/${loc.slug}`}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-blue-800 pt-6 mb-6">
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">{siteConfig.phone}</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Austin, TX &amp; Central Texas</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {currentYear} Elevate Home Offers. All rights reserved. | Austin, TX Cash Home Buyers
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
