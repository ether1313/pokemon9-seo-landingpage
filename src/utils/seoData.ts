// SEO data for different pages/slugs
export interface PageSEOData {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  structuredData?: object;
}

export const seoPages: PageSEOData[] = [
  {
    slug: '',
    title: 'PKM9 Casino (POKEMON9): Complete Gaming Platform for Australian Players',
    description: 'PKM9 Casino (formerly POKEMON9) - reliable gaming destination for Australian players with 800+ games, secure transactions, and no deposit bonus. Licensed by Curacao Gaming Authority.',
    keywords: 'PKM9 Casino, PKM9, pkm9 australia, POKEMON9 Casino, Australian casino, online pokies, casino bonus, no deposit bonus, live casino, pokemon9',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Casino',
        name: 'PKM9 Casino',
        alternateName: ['POKEMON9', 'POKEMON9 Casino'],
        description: 'PKM9 Casino (formerly POKEMON9) - reliable gaming destination for Australian players with 800+ games, secure transactions, and no deposit bonus.',
        url: 'https://pokemon9aud.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://pokemon9aud.com/logo/pokemon9-logo.png',
          width: 512,
          height: 512,
        },
        image: 'https://pokemon9aud.com/logo/pokemon9-logo.png',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'AU',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '1250',
          bestRating: '5',
          worstRating: '1',
        },
        offers: {
          '@type': 'Offer',
          name: 'Welcome Bonus',
          description: '50% Slot Unlimited Bonus up to AUD 250',
          priceCurrency: 'AUD',
          availability: 'https://schema.org/InStock',
        },
        sameAs: [
          'https://pokemon9.org',
        ],
        telephone: '+61-XXX-XXX-XXX',
        priceRange: '$$',
        currenciesAccepted: 'AUD',
        paymentAccepted: 'PayID, AmoPay, Visa, Mastercard, Google Pay, Apple Pay',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'PKM9 Casino',
        url: 'https://pokemon9aud.com',
        logo: 'https://pokemon9aud.com/logo/pokemon9-logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          availableLanguage: 'English',
          areaServed: 'AU',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'PKM9 Casino',
        url: 'https://pokemon9aud.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://pokemon9aud.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        publisher: {
          '@type': 'Organization',
          name: 'PKM9 Casino',
          logo: {
            '@type': 'ImageObject',
            url: 'https://pokemon9aud.com/logo/pokemon9-logo.png',
          },
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How long does PKM9 casino account verification take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Account verification typically completes within 1 hour after submitting required documents. Australian players need valid au phone number verification for the registration process.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is PKM9 Casino legal for Australian players?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PKM9 Casino operates under Curacao Gaming Authority licensing and accepts Australian players in compliance with applicable regulations. Players should verify local gambling laws in their jurisdiction.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the minimum withdrawal amount at PKM9?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The minimum withdrawal amount is AUD 50 for most payment methods, with some e-wallet options allowing withdrawals as low as AUD 20.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I play PKM9 Casino games on mobile devices?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, PKM9 Casino offers full mobile compatibility through web browsers without requiring app downloads. All games and features function normally on smartphones and tablets.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I claim the PKM9 no deposit bonus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The no deposit bonus activates automatically upon successful account verification. Free spins appear in your account within 24 hours of verification completion.',
            },
          },
          {
            '@type': 'Question',
            name: 'What customer support options are available?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PKM9 Casino provides 24/7 live chat support and email assistance as well as whatsapp and telegram bonus group support. Response times average under 5 minutes for live chat and within 24 hours for email inquiries.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are there withdrawal limits at PKM9 Casino?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Standard players can withdraw up to AUD 5,000 per transaction and AUD 20,000 per month. VIP members receive higher limits based on their status level.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which software providers power PKM9 Casino games?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The casino features games from JILI, BOOONGO, CQ9 Gaming, Imperium Games, RICH Gaming, VPower, ACE333, Joker, and several other established providers ensuring quality and fairness.',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'pokemon9-casino-review',
    title: 'PKM9 Casino Review 2024 (POKEMON9): Complete Guide for Australian Players',
    description: 'Comprehensive PKM9 Casino (formerly POKEMON9) review covering games, bonuses, payments, security, and user experience. Read our detailed analysis before playing.',
    keywords: 'PKM9 Casino review, PKM9 review, POKEMON9 Casino review, pokemon9 review, australian casino review, pkm9 casino australia',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: {
          '@type': 'Casino',
          name: 'PKM9 Casino',
          url: 'https://pokemon9aud.com',
        },
        author: {
          '@type': 'Organization',
          name: 'Casino Review Team',
          url: 'https://pokemon9aud.com',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '4.8',
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: 'PKM9 Casino offers a comprehensive gaming experience with 800+ games, secure payment methods, and excellent customer support for Australian players.',
        datePublished: '2024-01-11',
        dateModified: '2024-12-19',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://pokemon9aud.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Casino Review',
            item: 'https://pokemon9aud.com/pokemon9-casino-review',
          },
        ],
      },
    ],
  },
  {
    slug: 'pokemon9-casino-bonuses',
    title: 'PKM9 Casino Bonuses & Promotions (POKEMON9): No Deposit Bonus & Welcome Offers',
    description: 'Discover PKM9 Casino (formerly POKEMON9) bonuses including no deposit bonus, welcome package, weekly rebates, and VIP program rewards. Claim your bonus today!',
    keywords: 'PKM9 Casino bonus, PKM9 no deposit bonus, POKEMON9 Casino bonus, pokemon9 welcome bonus, pkm9 casino promotions',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Offer',
        name: 'PKM9 Casino Bonuses',
        description: 'No deposit bonus, welcome package, and ongoing promotions at PKM9 Casino',
        url: 'https://pokemon9aud.com/pokemon9-casino-bonuses',
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        validFrom: '2024-01-01',
        category: 'Casino Bonus',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://pokemon9aud.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Bonuses',
            item: 'https://pokemon9aud.com/pokemon9-casino-bonuses',
          },
        ],
      },
    ],
  },
  {
    slug: 'pokemon9-casino-games',
    title: 'PKM9 Casino Games (POKEMON9): 800+ Slots, Live Casino & Table Games',
    description: 'Play 800+ casino games at PKM9 (formerly POKEMON9) including slots, live dealer games, table games from top providers. Explore our complete game library.',
    keywords: 'PKM9 Casino games, PKM9 slots, POKEMON9 Casino games, pokemon9 live casino, pkm9 pokies',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'PKM9 Casino Games',
        description: '800+ casino games including slots, live dealer, and table games',
        url: 'https://pokemon9aud.com/pokemon9-casino-games',
        numberOfItems: 800,
        itemListElement: [
          {
            '@type': 'Game',
            name: 'Slot Games',
            description: 'Popular slot games from top providers',
          },
          {
            '@type': 'Game',
            name: 'Live Casino',
            description: 'Live dealer games with HD streaming',
          },
          {
            '@type': 'Game',
            name: 'Table Games',
            description: 'Classic table games including blackjack and roulette',
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://pokemon9aud.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Games',
            item: 'https://pokemon9aud.com/pokemon9-casino-games',
          },
        ],
      },
    ],
  },
  {
    slug: 'pokemon9-casino-registration',
    title: 'PKM9 Casino Registration (POKEMON9): How to Sign Up & Create Account',
    description: 'Step-by-step guide to register at PKM9 Casino (formerly POKEMON9). Learn how to create your account, verify your mobile number, and start playing instantly.',
    keywords: 'PKM9 Casino registration, PKM9 sign up, POKEMON9 Casino registration, pokemon9 account creation, pkm9 register',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Register at PKM9 Casino',
        description: 'Complete guide to creating an account at PKM9 Casino',
        url: 'https://pokemon9aud.com/pokemon9-casino-registration',
        image: 'https://pokemon9aud.com/register.jpg',
        totalTime: 'PT5M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'AUD',
          value: '0',
        },
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Fill in Registration Form',
            text: 'Enter your full name (must match bank account), mobile number, and create a password between 6-20 characters',
            image: 'https://pokemon9aud.com/register.jpg',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Verify Mobile Number',
            text: 'Click GET CODE button to receive SMS verification code',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Complete Registration',
            text: 'Enter the verification code in the verification field and click REGISTER to complete',
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://pokemon9aud.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Registration',
            item: 'https://pokemon9aud.com/pokemon9-casino-registration',
          },
        ],
      },
    ],
  },
  {
    slug: 'pokemon9-casino-payments',
    title: 'PKM9 Casino Payment Methods (POKEMON9): Deposits & Withdrawals Guide',
    description: 'Complete guide to PKM9 Casino (formerly POKEMON9) payment methods including PayID, AmoPay, Visa, Mastercard, Google Pay, and Apple Pay. Fast and secure transactions.',
    keywords: 'PKM9 Casino payments, PKM9 deposit, POKEMON9 Casino payments, pokemon9 withdrawal, pkm9 payid',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: 'PKM9 Casino Payment Methods',
        description: 'Secure payment methods for deposits and withdrawals',
        url: 'https://pokemon9aud.com/pokemon9-casino-payments',
        areaServed: {
          '@type': 'Country',
          name: 'Australia',
        },
        feesAndCommissionsSpecification: 'No fees for deposits and withdrawals',
        currenciesAccepted: 'AUD',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://pokemon9aud.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Payments',
            item: 'https://pokemon9aud.com/pokemon9-casino-payments',
          },
        ],
      },
    ],
  },
];

export function getSEODataBySlug(slug: string): PageSEOData | undefined {
  return seoPages.find((page) => page.slug === slug) || seoPages[0];
}

export function generateStructuredDataForHome() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PKM9 Casino',
    url: 'https://pokemon9aud.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://pokemon9aud.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PKM9 Casino',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pokemon9aud.com/logo/pokemon9-logo.png',
      },
    },
  };
}
