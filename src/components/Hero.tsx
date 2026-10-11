import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  FileText, 
  Truck, 
  MessageSquare,
  Sparkles
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
    const text = encodeURIComponent('Olá FLT Infotech! Gostaria de um orçamento rápido para conserto do meu aparelho em Santos.');
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inicio" className="relative bg-[#0a0f0d] pt-28 pb-12 sm:pt-36 sm:pb-16 text-white overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d] via-[#101713] to-[#0a0f0d] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Company Header Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#00ff01] animate-pulse"></span>
          <span className="text-xs sm:text-sm font-bold text-slate-200 tracking-wide">
            Loja & Laboratório Especializado no Macuco • Santos/SP
          </span>
        </div>

        {/* Main Centered Headline (H1 structured for optimal SEO & readability) */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-white leading-tight mb-4">
          <span className="block">
            Assistência Técnica Especializada em Notebooks, Computadores, Celulares, PCs Gamers e Impressoras
          </span>
          <span className="block mt-2 sm:mt-2.5 text-lg sm:text-2xl md:text-3xl font-bold text-[#00ff01] tracking-normal drop-shadow-[0_1px_10px_rgba(0,255,1,0.35)]">
            em Santos e Baixada Santista
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          Seu PC, notebook ou celular parou? Encontre aqui a melhor <strong className="text-white font-semibold">assistência técnica em informática em Santos e Baixada Santista</strong>. Fale conosco agora!
        </p>

        {/* Primary CTA Button (Bright Green Pill, exact model match) */}
        <div className="flex justify-center mb-10">
          <button
            onClick={handleWhatsAppQuote}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm sm:text-base shadow-lg shadow-green-900/30 transition-all hover:scale-[1.02] cursor-pointer"
            id="hero-cta-orcamento-rapido"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Orçamento rápido</span>
          </button>
        </div>

        {/* Hero Tech Devices Showcase - Elementos Isolados com Flutuação Independente e Logo 100% Fixa */}
        <div className="relative max-w-5xl xl:max-w-[1080px] mx-auto rounded-3xl overflow-hidden border-2 border-[#00ff01]/40 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_45px_rgba(0,255,1,0.2)] bg-[#060a08] h-[360px] sm:h-[480px] md:h-[540px] lg:h-[580px] select-none">
          {/* Fundo com iluminação ambiente e sutil grade cibernética */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,1,0.12)_0%,_rgba(10,18,14,0.65)_50%,_#060a08_100%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0108_1px,transparent_1px),linear-gradient(to_bottom,#00ff0108_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_80%)] pointer-events-none opacity-50"></div>

          {/* Luz de destaque no topo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-[#00ff01]/10 blur-3xl pointer-events-none rounded-full"></div>

          {/* 1. Placa-mãe Gamer (Fundo Superior Direito) */}
          <motion.img
            src={deviceMotherboard}
            alt="Placa-Mãe e Hardware Especializado FLT Infotech"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1.2, 0],
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[5%] sm:top-[6%] right-[3%] sm:right-[6%] md:right-[8%] w-[38%] sm:w-[36%] md:w-[35%] max-w-[380px] object-contain drop-shadow-[0_14px_30px_rgba(0,0,0,0.85)] z-10 pointer-events-none"
            loading="eager"
          />

          {/* 2. Notebook de Alta Performance (Destaque Principal Esquerdo) */}
          <motion.img
            src={deviceLaptop}
            alt="Reparo de Notebooks e MacBooks FLT Infotech"
            animate={{
              y: [0, -18, 0],
              rotate: [0, -1, 0],
            }}
            transition={{
              duration: 4.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[10%] sm:top-[11%] left-[3%] sm:left-[6%] md:left-[8%] w-[48%] sm:w-[46%] md:w-[44%] max-w-[450px] object-contain drop-shadow-[0_18px_38px_rgba(0,0,0,0.9)] z-20 pointer-events-none"
            loading="eager"
          />

          {/* 3. Pente de Memória RAM (Lateral Direita Média) */}
          <motion.img
            src={deviceRam}
            alt="Upgrades de Memória RAM FLT Infotech"
            animate={{
              y: [0, -16, 0],
              rotate: [0, -2, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute top-[34%] sm:top-[35%] right-[2%] sm:right-[4%] md:right-[5%] w-[16%] sm:w-[15%] md:w-[14%] max-w-[145px] object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.8)] z-15 pointer-events-none"
            loading="eager"
          />

          {/* 4. Celular / Smartphone Moderno (Inferior Centro-Esquerda) */}
          <motion.img
            src={devicePhone}
            alt="Conserto de Celulares e Smartphones FLT Infotech"
            animate={{
              y: [0, -13, 0],
              rotate: [0, 1.8, 0],
            }}
            transition={{
              duration: 4.0,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute bottom-[16%] sm:bottom-[15%] left-[26%] sm:left-[30%] md:left-[33%] w-[22%] sm:w-[20%] md:w-[19%] max-w-[195px] object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.95)] z-25 pointer-events-none"
            loading="eager"
          />

          {/* 5. Processador CPU (Inferior Centro-Direita) */}
          <motion.img
            src={deviceCpu}
            alt="Processadores e Peças FLT Infotech"
            animate={{
              y: [0, -11, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="absolute bottom-[17%] sm:bottom-[16%] right-[16%] sm:right-[18%] md:right-[20%] w-[16%] sm:w-[15%] md:w-[14%] max-w-[140px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] z-22 pointer-events-none"
            loading="eager"
          />

          {/* Gradiente sutil de acabamento na base */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a08] via-transparent to-transparent pointer-events-none z-28"></div>

          {/* Prominent Logo Badge - 100% FIXO no pé do card */}
          <div className="absolute bottom-3 sm:bottom-6 md:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 sm:gap-4 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-2xl bg-black/92 backdrop-blur-md border border-[#00ff01]/50 shadow-[0_0_35px_rgba(0,255,1,0.4)] transition-transform duration-300 hover:scale-[1.02] max-w-[95%]">
            <img
              src="/logo-com-fundo.png"
              alt="FLT Infotech"
              className="h-10 sm:h-13 md:h-15 w-auto object-contain rounded-lg shadow-md shrink-0"
            />
            <BrandLogoText className="w-[180px] sm:w-[230px] md:w-[270px] h-auto" glow={true} />
          </div>
        </div>
      </div>

      {/* 3 Floating Highlight Feature Cards (Exact structure from model site) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-start pt-4 md:pt-0 md:px-4 first:pl-0">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
              Garantia em Nossos Reparos
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Confie em nosso serviço. Oferecemos garantia estendida e formal em todos os reparos realizados com peças de procedência.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start pt-4 md:pt-0 md:px-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <FileText className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
              Orçamento Grátis e Rápido
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Você sabe o valor antes de aprovar. Transparência total para você decidir com tranquilidade e total segurança.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start pt-4 md:pt-0 md:px-4 last:pr-0">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Truck className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
              Atendimento Balcão ou Delivery
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sem tempo? Traga seu equipamento à nossa loja no Macuco ou consulte opções de coleta e entrega com total conveniência em Santos e Baixada Santista.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
