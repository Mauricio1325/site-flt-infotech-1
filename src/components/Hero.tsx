import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { BrandLogoText } from './BrandLogoText';

// Clean isolated device assets for independent floating motion
import deviceLaptop from '../assets/images/clean_devices/device_laptop.webp';
import deviceMotherboard from '../assets/images/clean_devices/device_motherboard.webp';
import devicePhone from '../assets/images/clean_devices/device_phone.webp';
import deviceRam from '../assets/images/clean_devices/device_ram.webp';
import deviceCpu from '../assets/images/clean_devices/device_cpu.webp';

export const Hero: React.FC = () => {
  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent('Olá FLT Infotech! Gostaria de um orçamento rápido para conserto do meu equipamento em Santos.');
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inicio" className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-[#050807]">
      {/* Background Cyber Tech Ambient Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(0,255,1,0.14)_0%,_rgba(6,20,12,0.4)_45%,_transparent_75%)] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00ff01]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-80 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Highlight Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-[#00ff01]/40 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,1,0.2)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00ff01] animate-pulse"></span>
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
            Assistência Técnica & Laboratório Especializado em Santos • Desde 2005
          </span>
        </div>

        {/* Impactful Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6 max-w-5xl mx-auto">
          Recupere seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff01] via-emerald-300 to-[#00ff01]">Notebook, PC Gamer ou Celular</span> com Rapidez e Garantia
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
          Seu equipamento parou, esquentou ou quebrou? Laboratório próprio no bairro Macuco com diagnóstico ágil, peças de procedência comprovada e orçamento sem enrolação.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
          <button
            onClick={handleWhatsAppQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00ff01] hover:bg-[#00dd01] text-black font-black text-base shadow-[0_0_30px_rgba(0,255,1,0.45)] hover:shadow-[0_0_40px_rgba(0,255,1,0.7)] transition-all hover:scale-[1.03] cursor-pointer"
            id="hero-cta-whatsapp"
          >
            <MessageSquare className="w-5 h-5 fill-black" />
            <span>Solicitar Orçamento Grátis</span>
          </button>

          <a
            href="#servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-base border border-white/15 backdrop-blur-sm transition-all hover:border-[#00ff01]/50 cursor-pointer"
          >
            <span>Conhecer Nossos Serviços</span>
            <ArrowRight className="w-4 h-4 text-[#00ff01]" />
          </a>
        </div>

        {/* QUICK TRUST PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300 mb-10">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#00ff01]" />
            Garantia formal por escrito
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#00ff01]" />
            Orçamento sem surpresas
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#00ff01]" />
            Atendimento Balcão ou Delivery
          </span>
        </div>

        {/* =========================================================================
            GRANDE VITRINE TECNOLÓGICA (HERO SHOWCASE) COM ELEMENTOS FLUTUANDO
            INDIVIDUALMENTE E LOGO BADGE FIXA NO RODAPÉ
           ========================================================================= */}
        <div className="relative max-w-6xl xl:max-w-7xl mx-auto rounded-3xl overflow-hidden border-2 border-[#00ff01]/50 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_60px_rgba(0,255,1,0.25)] bg-[#050907] h-[420px] sm:h-[530px] md:h-[600px] lg:h-[650px] xl:h-[680px] select-none group">
          
          {/* Fundo com iluminação ambiente e grade cibernética tridimensional */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,1,0.16)_0%,_rgba(10,24,16,0.75)_50%,_#050907_100%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff010d_1px,transparent_1px),linear-gradient(to_bottom,#00ff010d_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_85%)] pointer-events-none opacity-60"></div>

          {/* Destaque de feixe de luz neon no topo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-36 bg-[#00ff01]/15 blur-3xl pointer-events-none rounded-full"></div>
          
          {/* Elemento 1: Placa-mãe Gamer (Fundo Superior Direito) */}
          <motion.img
            src={deviceMotherboard}
            alt="Hardware de Alta Performance e Placas-Mãe FLT Infotech"
            animate={{
              y: [0, -18, 0],
              rotate: [0, 1.4, 0],
            }}
            transition={{
              duration: 5.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[4%] sm:top-[5%] right-[2%] sm:right-[5%] md:right-[7%] w-[42%] sm:w-[38%] md:w-[36%] max-w-[440px] object-contain drop-shadow-[0_16px_35px_rgba(0,0,0,0.85)] z-10 pointer-events-none"
            loading="eager"
          />

          {/* Elemento 2: Notebook de Alta Performance (Destaque Principal Esquerdo) */}
          <motion.img
            src={deviceLaptop}
            alt="Reparo Especializado de Notebooks e MacBooks FLT Infotech"
            animate={{
              y: [0, -22, 0],
              rotate: [0, -1.2, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[8%] sm:top-[9%] left-[2%] sm:left-[5%] md:left-[7%] w-[52%] sm:w-[48%] md:w-[46%] max-w-[520px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.92)] z-20 pointer-events-none"
            loading="eager"
          />

          {/* Elemento 3: Pente de Memória RAM (Lateral Direita Centro) */}
          <motion.img
            src={deviceRam}
            alt="Upgrades e Memórias RAM FLT Infotech"
            animate={{
              y: [0, -20, 0],
              rotate: [0, -2.5, 0],
            }}
            transition={{
              duration: 3.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
            className="absolute top-[32%] sm:top-[33%] right-[1%] sm:right-[3%] md:right-[5%] w-[18%] sm:w-[16%] md:w-[15%] max-w-[170px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] z-15 pointer-events-none"
            loading="eager"
          />

          {/* Elemento 4: Celular / Smartphone Moderno (Inferior Centro-Esquerda) */}
          <motion.img
            src={devicePhone}
            alt="Conserto de Smartphones e Telas FLT Infotech"
            animate={{
              y: [0, -16, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="absolute bottom-[17%] sm:bottom-[16%] left-[24%] sm:left-[28%] md:left-[32%] w-[25%] sm:w-[22%] md:w-[20%] max-w-[230px] object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.95)] z-25 pointer-events-none"
            loading="eager"
          />

          {/* Elemento 5: Processador CPU de Alta Precisão (Inferior Centro-Direita) */}
          <motion.img
            src={deviceCpu}
            alt="Processadores e Peças Originais FLT Infotech"
            animate={{
              y: [0, -14, 0],
              rotate: [0, 2.4, 0],
            }}
            transition={{
              duration: 4.0,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1,
            }}
            className="absolute bottom-[18%] sm:bottom-[17%] right-[14%] sm:right-[17%] md:right-[20%] w-[18%] sm:w-[16%] md:w-[15%] max-w-[165px] object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.85)] z-22 pointer-events-none"
            loading="eager"
          />

          {/* Gradiente escuro sutil de acabamento no rodapé */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050907] via-black/30 to-transparent pointer-events-none z-28"></div>

          {/* =========================================================
              PROMINENT LOGO BADGE - 100% FIXA NO PÉ DO CARD
             ========================================================= */}
          <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 sm:gap-4 px-4 sm:px-8 py-2.5 sm:py-4 rounded-2xl bg-black/95 backdrop-blur-md border border-[#00ff01]/60 shadow-[0_0_40px_rgba(0,255,1,0.5)] transition-transform duration-300 hover:scale-[1.02] max-w-[96%]">
            <img
              src="/logo-com-fundo.png"
              alt="FLT Infotech"
              className="h-10 sm:h-14 md:h-16 w-auto object-contain rounded-lg shadow-md shrink-0 border border-emerald-900/50"
            />
            <BrandLogoText className="w-[180px] sm:w-[240px] md:w-[290px] h-auto" glow={true} />
          </div>
        </div>

      </div>
    </section>
  );
};
