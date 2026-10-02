import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { StatsBanner } from './components/StatsBanner';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { FaqSection } from './components/FaqSection';
import { InstagramSection } from './components/InstagramSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InstagramBioPage } from './components/InstagramBioPage';

export default function App() {
  const [isBioPage, setIsBioPage] = useState<boolean>(() => {
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    return (
      hash === '#bio' || 
      hash === '#/bio' || 
      search.includes('bio=true') || 
      search.includes('page=bio')
    );
  });

  useEffect(() => {
    const handleHashOrPopState = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      const isBio = (
        hash === '#bio' || 
        hash === '#/bio' || 
        search.includes('bio=true') || 
        search.includes('page=bio')
      );
      setIsBioPage(isBio);
    };

    window.addEventListener('hashchange', handleHashOrPopState);
    window.addEventListener('popstate', handleHashOrPopState);

    return () => {
      window.removeEventListener('hashchange', handleHashOrPopState);
      window.removeEventListener('popstate', handleHashOrPopState);
    };
  }, []);

  const navigateToMainSite = () => {
    window.history.pushState(null, '', window.location.pathname);
    setIsBioPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Se o usuário acessar especificamente com #bio, abre a tela da bio
  if (isBioPage) {
    return <InstagramBioPage onBackToMainSite={navigateToMainSite} />;
  }

  // Por padrão na raiz (/), abre SEMPRE o SITE INSTITUCIONAL COMPLETO da FLT Infotech
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900 font-sans relative">
      {/* Header with Top Contacts Bar and Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section: Centered title, CTA, floating tech devices image, 3 highlight cards */}
        <Hero />

        {/* Services & Solutions: 3x3 clean grid with photos and black pill buttons */}
        <ServicesSection />

        {/* Statistics Banner: Dark full width bar (+20 Anos, +18 mil, Nota 5.0) */}
        <StatsBanner />

        {/* About Section: Store photo on left, mission card on right */}
        <AboutSection />

        {/* Customer Testimonials & Social Proof */}
        <ReviewsSection />

        {/* First Call-to-Action Bar */}
        <CtaBanner title="Solicite seu Orçamento Agora" />

        {/* Location & Map Section with 'Criar Rota' */}
        <LocationContactSection />

        {/* Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* Instagram Social Section with Profile Card and Reels */}
        <InstagramSection />

        {/* Second Call-to-Action Bar */}
        <CtaBanner title="Solicite seu Orçamento Agora" />
      </main>

      {/* Dark Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button & Mobile Sticky Bar */}
      <FloatingWhatsApp />
    </div>
  );
}
