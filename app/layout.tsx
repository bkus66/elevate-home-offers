import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elevatehomeoffers.com'),
  title: {
    default: 'Sell My House Fast Austin, TX | Cash Offer in 24 Hours – Elevate Home Offers',
    template: '%s | Elevate Home Offers',
  },
  description:
    'Elevate Home Offers buys houses fast for cash in Austin and Central Texas. No fees, no repairs, close in 7 days. Get your free no-obligation cash offer in 24 hours.',
  keywords: [
    'sell my house fast Austin TX',
    'cash home buyers Austin',
    'we buy houses Austin Texas',
    'sell house as is Austin',
    'cash offer for house Austin',
    'sell house fast Central Texas',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Elevate Home Offers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elevate Home Offers - Cash Home Buyers in Austin, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
