import type { Metadata } from 'next';
import type { Location } from './locations';

export const siteConfig = {
  baseUrl: 'https://elevatehomeoffers.com',
  name: 'Elevate Home Offers',
  phone: '+1 512-580-9847',
  email: '',
  address: 'Austin, TX',
  twitterHandle: '@elevatehomeoffers',
};

export function generateMetadata(
  title: string,
  description: string,
  canonical?: string
): Metadata {
  const url = canonical ? `${siteConfig.baseUrl}${canonical}` : siteConfig.baseUrl;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${siteConfig.baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Cash Home Buyers in Austin, TX`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateLocationMetadata(location: Location): Metadata {
  return generateMetadata(
    location.metaTitle,
    location.metaDescription,
    `/sell-my-house-fast/${location.slug}`
  );
}
