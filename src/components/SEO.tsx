import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  structuredData?: object | object[];
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function SEO({
  title = 'PKM9 Casino (POKEMON9): Complete Gaming Platform for Australian Players',
  description = 'PKM9 Casino (formerly POKEMON9) - reliable gaming destination for Australian players with 800+ games, secure transactions, and no deposit bonus. Licensed by Curacao Gaming Authority.',
  keywords = 'PKM9 Casino, PKM9, pkm9 australia, POKEMON9 Casino, Australian casino, online pokies, casino bonus, no deposit bonus, live casino, pokemon9',
  canonical,
  ogTitle,
  ogDescription,
  ogImage = 'https://pokemon9aud.com/logo/pokemon9-logo.png',
  ogUrl,
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  article,
  breadcrumbs,
}: SEOProps) {
  const baseUrl = 'https://pokemon9aud.com';
  const currentUrl = canonical || ogUrl || (typeof window !== 'undefined' ? window.location.href : baseUrl);
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('author', 'PKM9 Casino');
    updateMetaTag('language', 'English');
    updateMetaTag('geo.region', 'AU');
    updateMetaTag('geo.placename', 'Australia');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('rating', 'general');
    updateMetaTag('distribution', 'global');
    updateMetaTag('copyright', 'PKM9 Casino');
    updateMetaTag('application-name', 'PKM9 Casino');
    
    // Additional SEO meta tags
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Open Graph tags
    updateMetaTag('og:title', finalOgTitle, 'property');
    updateMetaTag('og:description', finalOgDescription, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', title, 'property');
    updateMetaTag('og:site_name', 'PKM9 Casino', 'property');
    updateMetaTag('og:locale', 'en_AU', 'property');
    updateMetaTag('og:locale:alternate', 'en_US', 'property');
    
    // Article meta tags (if provided)
    if (article) {
      if (article.publishedTime) updateMetaTag('article:published_time', article.publishedTime, 'property');
      if (article.modifiedTime) updateMetaTag('article:modified_time', article.modifiedTime, 'property');
      if (article.author) updateMetaTag('article:author', article.author, 'property');
      if (article.section) updateMetaTag('article:section', article.section, 'property');
      if (article.tags) {
        article.tags.forEach((tag, index) => {
          updateMetaTag(`article:tag`, tag, 'property');
        });
      }
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', finalOgTitle);
    updateMetaTag('twitter:description', finalOgDescription);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', title);
    updateMetaTag('twitter:site', '@pokemon9casino');
    updateMetaTag('twitter:creator', '@pokemon9casino');

    // Structured Data (JSON-LD)
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    if (structuredData) {
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      
      // Add breadcrumbs if provided
      if (breadcrumbs && breadcrumbs.length > 0) {
        const breadcrumbData = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          })),
        };
        dataArray.push(breadcrumbData);
      }
      
      // Create script for each structured data object
      dataArray.forEach((data, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = `structured-data-${index}`;
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, structuredData, noindex, currentUrl, finalOgTitle, finalOgDescription, article, breadcrumbs]);

  return null;
}
