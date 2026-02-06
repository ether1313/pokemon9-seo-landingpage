import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import CasinoReview from './components/CasinoReview';
import Registration from './components/Registration';
import Bonuses from './components/Bonuses';
import WhyChooseUs from './components/WhyChooseUs';
import Games from './components/Games';
import Payments from './components/Payments';
import FAQ from './components/FAQ';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEO from '../../components/SEO';
import { getSEODataBySlug, generateStructuredDataForHome } from '../../utils/seoData';

export default function HomePage() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, '') || '';
  const seoData = getSEODataBySlug(slug);
  const baseUrl = 'https://pokemon9aud.com';
  const currentUrl = `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;
  
  // Combine structured data
  const structuredData = seoData?.structuredData || generateStructuredDataForHome();
  
  // Generate breadcrumbs for non-home pages
  const breadcrumbs = slug ? [
    { name: 'Home', url: baseUrl },
    { name: seoData?.title.split(':')[0] || 'Page', url: currentUrl },
  ] : undefined;

  // Map paths to section IDs (homepage / stays at top, no auto-scroll)
  const pathToSectionMap: Record<string, string> = {
    '/pokemon9-casino-review': 'casino-review',
    '/pokemon9-casino-registration': 'registration',
    '/pokemon9-casino-bonuses': 'bonuses',
    '/pokemon9-casino-games': 'games',
    '/pokemon9-casino-payments': 'payments',
  };

  useEffect(() => {
    const sectionId = pathToSectionMap[location.pathname];
    if (sectionId) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80; // Header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    } else {
      // If no section found, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <SEO
        title={seoData?.title}
        description={seoData?.description}
        keywords={seoData?.keywords}
        canonical={currentUrl}
        ogTitle={seoData?.ogTitle}
        ogDescription={seoData?.ogDescription}
        ogUrl={currentUrl}
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main>
        <Hero />
        <CasinoReview />
        <Registration />
        <Bonuses />
        <WhyChooseUs />
        <Games />
        <Payments />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
