'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { locations } from '@/lib/locations';
import { siteConfig } from '@/lib/seo';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="relative w-44 h-[82px]">
              <Image
                src="/logo-white.png"
                alt="Elevate Home Offers"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/how-it-works" className="text-white hover:text-accent transition-colors text-sm font-medium">
              How It Works
            </Link>

            {/* Locations Dropdown */}
            <div className="relative">
              <button
                className="text-white hover:text-accent transition-colors text-sm font-medium flex items-center gap-1"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
                onClick={() => setLocationsOpen(!locationsOpen)}
              >
                Locations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {locationsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl py-2 w-56 z-50"
                  onMouseEnter={() => setLocationsOpen(true)}
                  onMouseLeave={() => setLocationsOpen(false)}
                >
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/sell-my-house-fast/${loc.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-neutral hover:text-primary transition-colors"
                      onClick={() => setLocationsOpen(false)}
                    >
                      {loc.name}, TX
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-white hover:text-accent transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/reviews" className="text-white hover:text-accent transition-colors text-sm font-medium">
              Reviews
            </Link>
            <Link href="/faq" className="text-white hover:text-accent transition-colors text-sm font-medium">
              FAQ
            </Link>
            <Link href="/blog" className="text-white hover:text-accent transition-colors text-sm font-medium">
              Blog
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-white hover:text-accent transition-colors text-sm font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
            <Link
              href="/get-cash-offer"
              className="bg-accent text-primary font-semibold px-4 py-2 rounded-lg hover:bg-amber-500 transition-colors text-sm"
            >
              Get Cash Offer
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-blue-800">
          <div className="px-4 py-4 space-y-3">
            <Link href="/how-it-works" className="block text-white hover:text-accent py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>
              How It Works
            </Link>
            <div>
              <button
                className="flex items-center justify-between w-full text-white hover:text-accent py-2 text-sm font-medium"
                onClick={() => setLocationsOpen(!locationsOpen)}
              >
                Locations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={locationsOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>
              {locationsOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/sell-my-house-fast/${loc.slug}`}
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {loc.name}, TX
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about" className="block text-white hover:text-accent py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/reviews" className="block text-white hover:text-accent py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>
              Reviews
            </Link>
            <Link href="/faq" className="block text-white hover:text-accent py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>
              FAQ
            </Link>
            <Link href="/blog" className="block text-white hover:text-accent py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <div className="pt-3 border-t border-blue-800 space-y-3">
              <a href={`tel:${siteConfig.phone}`} className="block text-white text-sm font-medium">
                {siteConfig.phone}
              </a>
              <Link
                href="/get-cash-offer"
                className="block bg-accent text-primary font-semibold px-4 py-2 rounded-lg text-sm text-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Cash Offer
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
