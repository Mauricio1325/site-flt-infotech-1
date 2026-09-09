import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CtaBannerProps {
  title?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ 
  title = 'Solicite seu Orçamento Agora' 
}) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('Olá FLT Infotech! Gostaria de solicitar um orçamento rápido para o meu equipamento em Santos.');
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#0e1411] py-8 sm:py-10 text-white border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
          {title}
        </h3>
        
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-[1.02] cursor-pointer shrink-0"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Orçamento rápido</span>
        </button>
      </div>
    </div>
  );
};
