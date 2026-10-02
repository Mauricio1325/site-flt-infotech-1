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
import { Instagram, Sparkles } from 'lucide-react';

export default function App() {
  const [isBioPage, setIsBioPage] = useState<boolean>(() => {
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    return (
      hash === '#bio' || 
      hash === '#/bio' || 
      search.includes('bio=true') || 
      search.includes('page=bio') ||
      path.endsWith('/bio')
    );
  });

  useEffect(() => {
    const handleHashOrPopState = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      const isBio = (
        hash === '#bio' || 
        hash === '#/bio' || 
        search.includes('bio=true') || 
        search.includes('page=bio') ||
        path.endsWith('/bio')
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

  const navigateToBio = () => {
    window.location.hash = 'bio';
    setIsBioPage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMainSite = () => {
    window.history.pushState(null, '', window.location.pathname);
    setIsBioPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Se a rota for a bio, exibe a página exclusiva para a Bio do Instagram
  if (isBioPage) {
    return <InstagramBioPage onBackToMainSite={navigateToMainSite} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900 font-sans relative">
      {/* Botão flutuante para testar/acessar a Bio do Instagram */}
      <button
        onClick={navigateToBio}
        title="Ver Microsite da Bio do Instagram"
        className="fixed bottom-24 right-5 z-40 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white p-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-xs font-bold border-2 border-white group"
      >
        <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Bio do Instagram</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-200" />
      </button>

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
