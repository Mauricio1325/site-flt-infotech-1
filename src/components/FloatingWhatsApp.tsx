import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent('Olá FLT Infotech! Gostaria de um orçamento rápido para o meu aparelho em Santos.');
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Desktop & Tablet WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end">
        <button
          onClick={handleWhatsAppClick}
          className="p-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 font-bold text-sm cursor-pointer"
          aria-label="Falar no WhatsApp com FLT Infotech"
          id="floating-whatsapp-btn"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden md:inline pr-1">Orçamento no WhatsApp</span>
        </button>
      </div>

      {/* Sticky Bottom Bar for Mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-white/10 p-2.5 px-4 flex items-center gap-3 shadow-2xl">
        <a
          href={`tel:${COMPANY_INFO.phones.landlineRaw}`}
          className="flex-1 py-2.5 px-2 rounded-full bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Ligar</span>
        </a>

        <button
          onClick={handleWhatsAppClick}
          className="flex-[2] py-2.5 px-3 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Orçamento WhatsApp</span>
        </button>
      </div>
    </>
  );
};
