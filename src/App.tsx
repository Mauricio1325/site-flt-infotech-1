import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900 font-sans">
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
