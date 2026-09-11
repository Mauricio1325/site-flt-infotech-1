import React from 'react';
import { COMPANY_INFO, SERVICES_DATA, ServiceItem } from '../data/companyData';

// Image imports
import appleImg from '../assets/images/apple_repair_bench_1788963695638.jpg';
import notebookImg from '../assets/images/laptop_repair_1788962339388.jpg';
import computerImg from '../assets/images/hero_repair_lab_1788962302612.jpg';
import motherboardImg from '../assets/images/motherboard_soldering_1788963714077.jpg';
import softwareImg from '../assets/images/hero_tech_devices_1788963590317.jpg';
import gamerImg from '../assets/images/pc_gamer_custom_1788962320395.jpg';
import printerImg from '../assets/images/corporate_printer_1788962355279.jpg';
import mobileImg from '../assets/images/phone_screen_repair_1788963633235.jpg';

const serviceImages: Record<string, string> = {
  apple: appleImg,
  notebooks: notebookImg,
  computers: computerImg,
  motherboard: motherboardImg,
  software: softwareImg,
  'pc-gamer': gamerImg,
  printers: printerImg,
  mobile: mobileImg,
  'screen-glass': mobileImg
};

export const ServicesSection: React.FC = () => {
  const handleServiceClick = (service: ServiceItem) => {
    const text = encodeURIComponent(`Olá FLT Infotech! Gostaria de saber mais informações e solicitar um orçamento para o serviço de: ${service.title} em Santos.`);
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="servicos" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Centered, elegant & breathable) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">
            SERVIÇOS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Soluções da Nossa Assistência Técnica em Informática em Santos e Baixada Santista
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Do seu computador ao PC Gamer, temos a solução técnica completa. Conheça nossos principais serviços e como podemos ajudar você.
          </p>
        </div>

        {/* 3x3 Card Grid (Clean, identical layout to model) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const cardImg = serviceImages[service.id] || notebookImg;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-48 overflow-hidden bg-slate-100">
                  <img
                    src={cardImg}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Black pill button */}
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="w-full py-2.5 px-4 rounded-full bg-black hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    {service.buttonText || `Mais sobre ${service.title}`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
