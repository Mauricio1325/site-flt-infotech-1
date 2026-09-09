import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import storeImage from '../assets/images/tech_store_front_1788963613468.jpg';

export const AboutSection: React.FC = () => {
  const handleContactClick = () => {
    const text = encodeURIComponent('Olá! Gostaria de conhecer melhor os serviços da FLT Infotech e falar com um técnico em Santos.');
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="sobre" className="py-20 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">
            SOBRE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            A Loja de Informática <span className="relative inline-block">Que<span className="absolute bottom-1 left-0 right-0 h-1.5 bg-[#22c55e]/40 rounded-full -z-10"></span></span> Você Confia em Santos
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Mais que uma assistência de informática, somos apaixonados por tecnologia e por resolver problemas. Conheça a nossa história e compromisso.
          </p>
        </div>

        {/* 2-Column Content (Store image on left, Mission card on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Photo */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img
                src={storeImage}
                alt="Loja e Laboratório da FLT Infotech em Santos"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Mission Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-9 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-snug">
                Nossa Missão Como Assistência Técnica em Informática
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                A <strong>FLT Infotech</strong> nasceu em 2005 no bairro <strong>Macuco, em Santos</strong>, para ser a solução definitiva para seus problemas tecnológicos. Entendemos a frustração de ter um aparelho essencial parado e, por isso, construímos uma empresa focada em agilidade, honestidade técnica e transparência em cada diagnóstico.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                Nossos mais de 20 anos de trajetória nos consolidaram como referência em toda a Baixada Santista. Nosso objetivo é claro: ser a assistência técnica que você recomenda com segurança, oferecendo um atendimento no qual você não apenas conserta, mas devolve a tranquilidade e a confiança ao seu dia a dia.
              </p>

              <button
                onClick={handleContactClick}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-black hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer text-center"
              >
                Conheça a FLT Infotech
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
