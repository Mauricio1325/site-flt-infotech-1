import React from 'react';
import { MessageSquare, Phone, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const CtaFinal: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('Olá! Vi o site da FLT Infotech e gostaria de solicitar um orçamento para o meu equipamento.');
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#080c0a] via-[#051409] to-[#040805]">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,1,0.12),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-xs font-bold text-[#00ff01]">
          <ShieldCheck className="w-4 h-4" />
          Garantia Formal • Peças Originais • Laboratório Próprio em Santos
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight max-w-3xl mx-auto leading-tight">
          Recupere Seu Equipamento com Quem Entende de Verdade há Mais de 20 Anos
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Não deixe seu computador, notebook ou celular nas mãos de curiosos. Fale agora com os especialistas da <strong className="text-white">FLT Infotech</strong> e tenha seu equipamento funcionando com máxima performance.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-extrabold text-black bg-[#00ff01] hover:bg-[#1eff20] active:scale-95 transition-all shadow-[0_0_35px_rgba(0,255,1,0.5)] flex items-center justify-center gap-3 cursor-pointer"
            id="cta-final-whatsapp"
          >
            <MessageSquare className="w-5 h-5 fill-black" />
            <span>Falar no WhatsApp: {COMPANY_INFO.phones.whatsapp}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${COMPANY_INFO.phones.landlineRaw}`}
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 flex items-center justify-center gap-2.5 transition-all"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Ligar no Fixo: {COMPANY_INFO.phones.landline}</span>
          </a>
        </div>

        {/* Bottom Location Indicator */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#00ff01]" />
            {COMPANY_INFO.address.street} - Macuco, Santos
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-emerald-400" />
            Seg a Sex 09h às 18h | Sáb 09h às 13h
          </span>
        </div>

      </div>
    </section>
  );
};
