import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QuickQuote } from './components/QuickQuote';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050807] text-white flex flex-col font-sans selection:bg-[#00ff01]/20 selection:text-[#00ff01] relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Highlights />
        <Services />
        <WhyChooseUs />
        <QuickQuote />
        <Testimonials />
        <FaqSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
