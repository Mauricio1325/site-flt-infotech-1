import React from 'react';
import { Instagram, Play, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

import reel1 from '../assets/images/laptop_repair_1788962339388.jpg';
import reel2 from '../assets/images/pc_gamer_custom_1788962320395.jpg';
import reel3 from '../assets/images/motherboard_soldering_1788963714077.jpg';
import reel4 from '../assets/images/apple_repair_bench_1788963695638.jpg';
import reel5 from '../assets/images/phone_screen_repair_1788963633235.jpg';
import reel6 from '../assets/images/hero_repair_lab_1788962302612.jpg';

export const InstagramSection: React.FC = () => {
  const reels = [
    { image: reel1, tag: 'Computador Antigo?', title: 'Vale a pena atualizar com SSD?' },
    { image: reel2, tag: 'PC Gamer', title: 'Como manter as temperaturas baixas' },
    { image: reel3, tag: 'Diagnóstico Grátis', title: 'Recuperando placa que não ligava' },
    { image: reel4, tag: 'Linha Apple', title: 'MacBook com tela preta resolvido' },
    { image: reel5, tag: 'Bateria Celular', title: 'Dicas para aumentar a vida útil' },
    { image: reel6, tag: 'Santos e Região', title: 'Bastidores do nosso laboratório' },
  ];

  return (
    <section className="py-20 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">
            REDE SOCIAL
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Nos Siga no Instagram
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Nos siga no Instagram e fique por dentro das novidades, dicas e promoções exclusivas da FLT Infotech.
          </p>
        </div>

        {/* Profile Card Header (exact look from reference model) */}
        <div className="max-w-md mx-auto mb-10 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
              <img
                src="/logo-com-fundo.png"
                alt="FLT Infotech Instagram"
                className="w-full h-full object-cover rounded-full bg-white p-0.5"
              />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                FLT Infotech Santos
              </h4>
              <span className="text-[11px] text-slate-500 block">
                @fltinfotech
              </span>
            </div>
          </div>

          <a
            href={COMPANY_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-1.5 rounded-full bg-[#0095f6] hover:bg-[#007cd6] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Seguir</span>
          </a>
        </div>

        {/* 6 Reels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {reels.map((reel, index) => (
            <a
              key={index}
              href={COMPANY_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-[9/16] bg-slate-900 border border-slate-200 block shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
            >
              <img
                src={reel.image}
                alt={reel.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-3">
                <div className="flex justify-end">
                  <div className="w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                </div>
                <div>
                  <span className="inline-block bg-[#22c55e] text-white text-[9px] font-bold px-1.5 py-0.5 rounded mb-1">
                    {reel.tag}
                  </span>
                  <p className="text-[11px] text-white font-medium line-clamp-2 leading-tight">
                    {reel.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
