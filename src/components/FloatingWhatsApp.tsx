import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const text = encodeURIComponent('Olá FLT Infotech! Gostaria de tirar uma dúvida sobre assistência técnica em Santos.');
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#090f0c] text-white text-xs font-semibold py-2.5 px-4 rounded-2xl border border-[#00ff01]/40 shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(0,255,1,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#00ff01] animate-pulse"></span>
          <span>Dúvidas? Fale com um técnico no WhatsApp!</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        className="relative w-14 h-14 rounded-full bg-[#00ff01] hover:bg-[#00dd01] text-black flex items-center justify-center shadow-[0_0_25px_rgba(0,255,1,0.5)] hover:shadow-[0_0_35px_rgba(0,255,1,0.8)] transition-all hover:scale-110 active:scale-95 cursor-pointer group"
        aria-label="Chamar no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-black animate-ping"></span>
        <MessageSquare className="w-7 h-7 fill-black group-hover:scale-105 transition-transform" />
      </button>
    </div>
  );
};
