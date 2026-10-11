import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQ_DATA, COMPANY_INFO } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Olá FLT Infotech! Tenho uma dúvida sobre os serviços de assistência técnica.');
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#050907] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-xs font-bold text-[#00ff01] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300">
            Respostas diretas e transparentes sobre diagnósticos, prazos, garantias e atendimento na Baixada Santista.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#080d0a] border border-white/10 hover:border-[#00ff01]/40 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-[#00ff01] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#00ff01]/10' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Ficou com alguma outra dúvida?</h4>
            <p className="text-xs text-slate-400">Nossa equipe técnica atende prontamente no WhatsApp.</p>
          </div>
          <button
            onClick={handleWhatsApp}
            className="py-2.5 px-5 rounded-full bg-[#00ff01] hover:bg-[#00dd01] text-black font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,1,0.3)] transition-all hover:scale-103 cursor-pointer shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>Falar com Técnico</span>
          </button>
        </div>

      </div>
    </section>
  );
};
