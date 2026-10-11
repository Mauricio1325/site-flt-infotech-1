import React from 'react';
import { 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { BrandLogoText } from './BrandLogoText';

export const Hero: React.FC = () => {
  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent('Olá FLT Infotech! Gostaria de um orçamento rápido para conserto do meu equipamento em Santos.');
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inicio" className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-[#050807]">
      {/* Background Cyber Tech Ambient Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(0,255,1,0.14)_0%,_rgba(6,20,12,0.4)_45%,_transparent_75%)] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00ff01]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-80 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Highlight Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-[#00ff01]/40 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,1,0.2)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00ff01] animate-pulse"></span>
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
            Assistência Técnica & Laboratório Especializado em Santos • Desde 2005
          </span>
        </div>

        {/* Impactful Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6 max-w-5xl mx-auto">
          Recupere seu <span className="text-[#00ff01]">Notebook, PC Gamer, Celular ou Impressora</span> com Rapidez e Garantia
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
          Seu equipamento parou, esquentou ou quebrou? Laboratório próprio no bairro Macuco com diagnóstico ágil, peças de procedência comprovada e orçamento sem enrolação.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
          <button
            onClick={handleWhatsAppQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00ff01] hover:bg-[#00dd01] text-black font-black text-base shadow-[0_0_30px_rgba(0,255,1,0.45)] hover:shadow-[0_0_40px_rgba(0,255,1,0.7)] transition-all hover:scale-[1.03] cursor-pointer"
            id="hero-cta-whatsapp"
          >
            <MessageSquare className="w-5 h-5 fill-black" />
            <span>Solicitar Orçamento Grátis</span>
          </button>

          <a
            href="#servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-base border border-white/15 backdrop-blur-sm transition-all hover:border-[#00ff01]/50 cursor-pointer"
          >
            <span>Conhecer Nossos Serviços</span>
            <ArrowRight className="w-4 h-4 text-[#00ff01]" />
          </a>
        </div>

        {/* QUICK TRUST PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300 mb-10">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#00ff01]" />
            Garantia formal por escrito
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#00ff01]" />
            Orçamento sem surpresas
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#00ff01]" />
            Atendimento Balcão ou Delivery
          </span>
        </div>

        {/* =========================================================================
            GRANDE VITRINE TECNOLÓGICA (HERO SHOWCASE) COM VÍDEO DO FLOW
            EM LOOP CINEMATOGRÁFICO E LOGO BADGE 100% FIXA NO RODAPÉ
           ========================================================================= */}
        <div className="relative max-w-6xl xl:max-w-7xl mx-auto rounded-3xl overflow-hidden border-2 border-[#00ff01]/50 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_60px_rgba(0,255,1,0.25)] bg-[#050907] min-h-[380px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[620px] select-none group flex items-center justify-center">
          
          {/* Fundo com iluminação ambiente sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,1,0.12)_0%,_rgba(10,24,16,0.6)_50%,_#050907_100%)] pointer-events-none z-0"></div>

          {/* Vídeo Cinematográfico do Flow rodando em loop infinito suave */}
          <video
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover min-h-[380px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[620px] pointer-events-none select-none z-10"
          />

          {/* Gradiente escuro sutil de acabamento no rodapé */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050907] via-black/25 to-transparent pointer-events-none z-20"></div>

          {/* =========================================================
              PROMINENT LOGO BADGE - 100% FIXA NO PÉ DO CARD
             ========================================================= */}
          <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 sm:gap-4 px-4 sm:px-8 py-2.5 sm:py-4 rounded-2xl bg-black/92 backdrop-blur-md border border-[#00ff01]/60 shadow-[0_0_40px_rgba(0,255,1,0.5)] transition-transform duration-300 hover:scale-[1.02] max-w-[96%]">
            <img
              src="/logo-com-fundo.png"
              alt="FLT Infotech"
              className="h-10 sm:h-14 md:h-16 w-auto object-contain rounded-lg shadow-md shrink-0 border border-emerald-900/50"
            />
            <BrandLogoText className="w-[180px] sm:w-[240px] md:w-[290px] h-auto" glow={true} />
          </div>
        </div>

      </div>
    </section>
  );
};
