import { SITE, CATEGORIES, type CategorySlug } from './constants';

type JSONLD = Record<string, unknown>;

/**
 * Главная схема для главной страницы и default-блока.
 */
export function professionalServiceSchema(): JSONLD {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${SITE.brandName} — ${SITE.brandTagline}`,
    alternateName: `${SITE.brandNameEn} Real Estate Consulting`,
    description:
      'Независимая экспертиза по недвижимости в Эквадоре для русскоязычной аудитории. Сопровождение сделок через лицензированных партнёров-корредоров.',
    url: SITE.url,
    logo: `${SITE.url}/favicon.svg`,
    image: `${SITE.url}/og/default.svg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cuenca',
      addressRegion: 'Azuay',
      addressCountry: 'EC',
    },
    areaServed: SITE.cities.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    priceRange: '$$$',
    founder: {
      '@type': 'Person',
      name: SITE.founder.name,
      jobTitle: SITE.founder.jobTitle,
      knowsLanguage: SITE.founder.languages,
      knowsAbout: SITE.founder.knowsAbout,
    },
    sameAs: [SITE.telegramUrl, SITE.youtubeUrl],
  };
}

/**
 * Person schema для страницы /kto-ya и автора статей.
 */
export function personSchema(): JSONLD {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.founder.name,
    alternateName: SITE.founder.nameRu,
    jobTitle: SITE.founder.jobTitle,
    description: SITE.founder.description,
    url: `${SITE.url}/kto-ya`,
    image: `${SITE.url}${SITE.founder.photo}`,
    knowsLanguage: SITE.founder.languages,
    knowsAbout: SITE.founder.knowsAbout,
    workLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'EC',
      },
    },
  };
}

/**
 * Service schema для страниц услуг.
 */
export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  priceDescription?: string;
  serviceType?: string;
}): JSONLD {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: input.serviceType ?? 'Real Estate Consulting',
    name: input.name,
    description: input.description,
    url: input.url,
    provider: {
      '@type': 'Person',
      name: SITE.founder.name,
      jobTitle: SITE.founder.jobTitle,
      url: `${SITE.url}/kto-ya`,
    },
    areaServed: { '@type': 'Country', name: 'Ecuador' },
    audience: {
      '@type': 'PeopleAudience',
      audienceType: 'Russian-speaking real estate investors and relocators',
    },
    ...(input.priceDescription
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            description: input.priceDescription,
          },
        }
      : {}),
  };
}

/**
 * Article schema для статей каталога знаний.
 */
export function articleSchema(input: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: Date;
  dateModified: Date;
  category: CategorySlug;
}): JSONLD {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    image: input.image ?? `${SITE.url}/og/default.svg`,
    author: {
      '@type': 'Person',
      name: SITE.founder.name,
      url: `${SITE.url}/kto-ya`,
    },
    publisher: {
      '@type': 'ProfessionalService',
      name: `${SITE.brandName} — ${SITE.brandTagline}`,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.svg` },
    },
    datePublished: input.datePublished.toISOString(),
    dateModified: input.dateModified.toISOString(),
    mainEntityOfPage: input.url,
    articleSection: CATEGORIES[input.category].name,
    inLanguage: 'ru',
  };
}

/**
 * FAQPage schema. Если faqs пустой — возвращает null.
 */
export function faqPageSchema(
  faqs: Array<{ question: string; answer: string }>,
): JSONLD | null {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList schema.
 */
export function breadcrumbListSchema(
  items: Array<{ name: string; url: string }>,
): JSONLD {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * CollectionPage schema (для страниц категорий каталога).
 */
export function collectionPageSchema(input: {
  name: string;
  description: string;
  url: string;
}): JSONLD {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: input.name,
    description: input.description,
    url: input.url,
    inLanguage: 'ru',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.brandName,
      url: SITE.url,
    },
  };
}
