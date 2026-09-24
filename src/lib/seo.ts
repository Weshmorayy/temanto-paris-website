import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  canonical = '/',
  ogImage = '/images/brand/brand-emblem-dark.jpg',
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.slogan}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: 'fr_SN',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — Maquillage & Cosmétiques Dakar`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/images/brand/logo.png',
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: siteConfig.name,
    image: `${siteConfig.url}/images/brand/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: 'Dakar',
      addressCountry: 'SN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '14.7833',
      longitude: '-17.3167',
    },
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: 'FCFA',
    paymentAccepted: 'Wave, Orange Money, Cash',
    currenciesAccepted: 'XOF',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '19:30',
      },
    ],
  };
}
