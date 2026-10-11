import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  FileText, 
  Truck, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { BrandLogoText } from './BrandLogoText';
import heroDevicesImage from '../assets/images/hero_tech_devices_1788963590317.jpg';

// Camadas individuais dos equipamentos para animação independente
import layerNotebooks from '../assets/images/hero_layers/layer_notebooks.webp';
import layerMotherboard from '../assets/images/hero_layers/layer_motherboard.webp';
import layerRam from '../assets/images/hero_layers/layer_ram.webp';
import layerSsd from '../assets/images/hero_layers/layer_ssd.webp';
import layerMobile from '../assets/images/hero_layers/layer_mobile.webp';
import layerCpu from '../assets/images/hero_layers/layer_cpu.webp';

export const Hero: React.FC = () => {
  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent('Olá FLT Infotech! Gostaria de um orçamento rápido para conserto do meu aparelho em Santos.');
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inicio" className="relative bg-[#0a0f0d] pt-28 pb-12 sm:pt-36 sm:pb-16 text-white overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d] via-[#101713] to-[#0a0f0d] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Company Header Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#00ff01] animate-pulse"></span>
          <span className="text-xs sm:text-sm font-bold text-slate-200 tracking-wide">
            Loja & Laboratório Especializado no Macuco • Santos/SP
          </span>
        </div>

        {/* Main Centered Headline (H1 structured for optimal SEO & readability) */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-white leading-tight mb-4">
          <span className="block">
            Assistência Técnica Especializada em Notebooks, Computadores, Celulares, PCs Gamers e Impressoras
          </span>
          <span className="block mt-2 sm:mt-2.5 text-lg sm:text-2xl md:text-3xl font-bold text-[#00ff01] tracking-normal drop-shadow-[0_1px_10px_rgba(0,255,1,0.35)]">
            em Santos e Baixada Santista
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          Seu PC, notebook ou celular parou? Encontre aqui a melhor <strong className="text-white font-semibold">assistência técnica em informática em Santos e Baixada Santista</strong>. Fale conosco agora!
        </p>

        {/* Primary CTA Button (Bright Green Pill, exact model match) */}
        <div className="flex justify-center mb-10">
          <button
            onClick={handleWhatsAppQuote}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm sm:text-base shadow-lg shadow-green-900/30 transition-all hover:scale-[1.02] cursor-pointer"
            id="hero-cta-orcamento-rapido"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Orçamento rápido</span>
          </button>
        </div>

        {/* Hero Tech Devices Showcase - Imagem Limpa Sem Emendas com Flutuação e Logo Fixa */}
        <div className="relative max-w-5xl xl:max-w-[1080px] mx-auto rounded-3xl overflow-hidden border-2 border-[#00ff01]/40 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_45px_rgba(0,255,1,0.2)] bg-[#070b09] min-h-[340px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] max-h-[580px] flex items-center justify-center group">
          {/* Fundo com iluminação ambiente sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00ff01]/10 via-[#0a120e]/60 to-[#070b09] pointer-events-none"></div>

          {/* Imagem Original Sem Emendas com Flutuação Suave Contínua */}
          <motion.img
            src={heroDevicesImage}
            alt="Assistência Técnica Especializada em Santos - FLT Infotech"
            animate={{
              y: [0, -14, 0],
              scale: [1.03, 1.05, 1.03],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-auto object-cover min-h-[340px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] max-h-[580px] pointer-events-none select-none"
            loading="eager"
          />

          {/* Gradiente sutil de acabamento na base */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-black/15 to-transparent pointer-events-none z-15"></div>

          {/* Prominent Logo Badge - 100% FIXO no pé do card */}
          <div className="absolute bottom-4 sm:bottom-7 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 sm:gap-4 px-5 sm:px-7 py-3 sm:py-4 rounded-2xl bg-black/90 backdrop-blur-md border border-[#00ff01]/50 shadow-[0_0_35px_rgba(0,255,1,0.4)] transition-transform duration-300 hover:scale-[1.02] max-w-[95%]">
            <img
              src="/logo-com-fundo.png"
              alt="FLT Infotech"
              className="h-11 sm:h-14 md:h-16 w-auto object-contain rounded-lg shadow-md shrink-0"
            />
            <BrandLogoText className="w-[195px] sm:w-[240px] md:w-[280px] h-auto" glow={true} />
          </div>
        </div>
      </div>

      {/* 3 Floating Highlight Feature Cards (Exact structure from model site) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-start pt-4 md:pt-0 md:px-4 first:pl-0">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
              Garantia em Nossos Reparos
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Confie em nosso serviço. Oferecemos garantia estendida e formal em todos os reparos realizados com peças de procedência.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start pt-4 md:pt-0 md:px-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <FileText className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
              Orçamento Grátis e Rápido
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Você sabe o valor antes de aprovar. Transparência total para você decidir com tranquilidade e total segurança.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start pt-4 md:pt-0 md:px-4 last:pr-0">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Truck className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
              Atendimento Balcão ou Delivery
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sem tempo? Traga seu equipamento à nossa loja no Macuco ou consulte opções de coleta e entrega com total conveniência em Santos e Baixada Santista.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
