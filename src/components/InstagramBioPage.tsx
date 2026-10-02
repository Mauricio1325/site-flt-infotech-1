import React from 'react';
import { 
  Laptop, 
  Monitor, 
  Printer, 
  Smartphone, 
  Instagram,
  ArrowLeft
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface InstagramBioPageProps {
  onBackToMainSite?: () => void;
}

export const InstagramBioPage: React.FC<InstagramBioPageProps> = ({ onBackToMainSite }) => {
  // Mensagem padrão solicitada pelo usuário
  const defaultWhatsAppMessage = 'Olá, vim pelo Instagram e preciso de um orçamento.';
  const primaryWhatsAppUrl = `https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  // 4 Pilares principais da FLT Infotech: Notebooks, Computadores, Impressoras e Celulares
  const services = [
    {
      title: 'CONSERTO DE NOTEBOOKS',
      icon: Laptop,
      message: 'Olá, vim pelo Instagram e preciso de um orçamento para conserto de Notebook/MacBook.'
    },
    {
      title: 'CONSERTO DE COMPUTADORES',
      icon: Monitor,
      message: 'Olá, vim pelo Instagram e preciso de um orçamento para conserto de Computador / PC Gamer.'
    },
    {
      title: 'CONSERTO DE IMPRESSORAS',
      icon: Printer,
      message: 'Olá, vim pelo Instagram e preciso de um orçamento para conserto ou locação de Impressora.'
    },
    {
      title: 'CONSERTO DE CELULARES',
      icon: Smartphone,
      message: 'Olá, vim pelo Instagram e preciso de um orçamento para conserto de Celular/Tablet.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0e273c] text-white flex flex-col justify-between items-center py-4 px-3 sm:px-4 font-sans selection:bg-emerald-300 selection:text-emerald-950">
      
      {/* Container Central com proporção de smartphone (clean) */}
      <div className="w-full max-w-[390px] mx-auto flex flex-col">
        
        {/* Barra superior discreta */}
        <div className="w-full flex items-center justify-between mb-3 px-1">
          {onBackToMainSite ? (
            <button
              onClick={onBackToMainSite}
              className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Ver Site Completo</span>
            </button>
          ) : (
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Ver Site Completo</span>
            </a>
          )}
          <span className="text-[11px] font-medium text-emerald-300 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Online agora
          </span>
        </div>

        {/* ============================================================== */}
        {/* TOPO: LOGO AMPLIADO DA FLT INFOTECH + TÍTULO COMPLETO */}
        {/* ============================================================== */}
        <header className="flex flex-col items-center text-center pt-1 pb-4">
          
          {/* Logo Oficial da FLT Infotech ampliado e sem a chave de boca */}
          <div className="mb-3 flex items-center justify-center">
            <div className="bg-black/80 p-2.5 px-4 rounded-2xl border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              <img 
                src="/logo-com-fundo.png" 
                alt="FLT Infotech - Assistência Técnica em Santos" 
                className="w-48 sm:w-56 h-auto object-contain max-h-16"
              />
            </div>
          </div>

          {/* Título Principal Completo com todos os 4 serviços */}
          <h2 className="text-[15px] sm:text-base font-extrabold text-white leading-tight uppercase px-2 max-w-[340px] mt-1 mb-1 tracking-tight">
            CONSERTO RÁPIDO DE COMPUTADORES, NOTEBOOKS, IMPRESSORAS E CELULARES
          </h2>

          {/* Subtítulo Clean */}
          <p className="text-xs sm:text-sm text-slate-200/90 font-medium mb-4">
            Orçamento na Hora, Sem Compromisso.
          </p>

          {/* BOTÃO PRINCIPAL DE DESTAQUE: FAZER ORÇAMENTO AGORA (WHATSAPP) */}
          <a
            href={primaryWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#2da64f] hover:bg-[#258b42] active:scale-[0.98] text-white font-extrabold text-sm sm:text-[15px] py-3.5 px-4 rounded-xl shadow-lg shadow-black/20 flex items-center justify-center gap-2 transition-all duration-200 uppercase tracking-wide border border-emerald-400/30"
          >
            <span>FAZER ORÇAMENTO AGORA (WHATSAPP)</span>
            <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
        </header>

        {/* ============================================================== */}
        {/* CARD BRANCO LIMPO: OS 4 PILARES DE SERVIÇOS (GRID 2x2) */}
        {/* ============================================================== */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 text-slate-800 shadow-xl">
          
          {/* Grid 2x2: Notebooks, Computadores, Impressoras e Celulares */}
          <div className="grid grid-cols-2 gap-2.5 mb-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const serviceUrl = `https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${encodeURIComponent(service.message)}`;
              
              return (
                <a
                  key={index}
                  href={serviceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center text-center p-3 rounded-xl border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 transition-all duration-150 active:scale-[0.98] shadow-sm group min-h-[102px]"
                >
                  <div className="text-[#0e273c] mb-1.5 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 stroke-[1.8]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-extrabold text-[#0e273c] leading-snug uppercase">
                    {service.title}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Card de Localização Google Maps */}
          <a
            href={COMPANY_INFO.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/70 hover:bg-slate-100/80 transition-all text-left group"
          >
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
                <circle cx="12" cy="9" r="2.5" fill="#FFFFFF"/>
              </svg>
            </div>

            <div className="flex-grow min-w-0">
              <p className="text-xs font-extrabold text-[#0e273c] leading-tight">
                Estamos no Macuco em Santos!
              </p>
              <p className="text-[11px] text-slate-600 truncate">
                {COMPANY_INFO.address.street} - Macuco
              </p>
            </div>

            <span className="text-[11px] font-bold text-blue-600 group-hover:underline shrink-0">
              Rota
            </span>
          </a>
        </div>

        {/* ============================================================== */}
        {/* RODAPÉ LIMPO */}
        {/* ============================================================== */}
        <div className="mt-3 w-full">
          <div className="bg-[#cbd5e1] text-slate-700 text-center py-1.5 px-2 rounded-lg text-[10px] font-bold tracking-wide uppercase">
            FLT INFOTECH • DESDE 2005 EM SANTOS - SP
          </div>

          <a
            href={COMPANY_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-xs text-white/90 hover:text-white font-medium py-2.5 transition-colors"
          >
            <span>Acesse nosso Instagram</span>
            <Instagram className="w-3.5 h-3.5 text-pink-300" />
          </a>
        </div>

      </div>
    </div>
  );
};
