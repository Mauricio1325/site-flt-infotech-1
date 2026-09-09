import React from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Truck, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import heroDevicesImage from '../assets/images/hero_tech_devices_1788963590317.jpg';

export const Hero: React.FC = () => {
  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent('Olá FLT Infotech! Gostaria de um orçamento rápido para conserto do meu aparelho em Santos.');
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inicio" className="relative bg-[#0a0f0d] pt-28 pb-12 sm:pt-36 sm:pb-16 text-white overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d] via-[#101713] to-[#0a0f0d] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Main Centered Headline (Identical layout to reference model) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-tight mb-4">
          Assistência Técnica em Notebook, Computador, Celular, PC Gamer e Impressoras em Santos
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          Seu PC, notebook ou celular parou? Encontre aqui a melhor <strong className="text-white font-semibold">assistência técnica em informática em Santos</strong>. Fale conosco agora!
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

        {/* Hero Tech Devices Floating Image */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src={heroDevicesImage}
            alt="Assistência Técnica em Informática - FLT Infotech Santos"
            className="w-full h-auto object-cover max-h-[380px] sm:max-h-[460px]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-transparent pointer-events-none"></div>
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
              Sem tempo? Traga seu equipamento à nossa loja no Macuco ou consulte opções de coleta e entrega com total conveniência em Santos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
