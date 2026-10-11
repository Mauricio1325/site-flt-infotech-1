import React, { useState } from 'react';
import { 
  Laptop, 
  Monitor, 
  Smartphone, 
  Printer, 
  Cpu, 
  MessageSquare, 
  CheckCircle, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

import laptopImg from '../assets/images/laptop_repair_1788962339388.jpg';
import appleImg from '../assets/images/apple_repair_bench_1788963695638.jpg';
import gamerImg from '../assets/images/pc_gamer_custom_1788962320395.jpg';
import phoneImg from '../assets/images/phone_screen_repair_1788963633235.jpg';
import motherImg from '../assets/images/motherboard_soldering_1788963714077.jpg';
import printerImg from '../assets/images/corporate_printer_1788962355279.jpg';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'notebooks' | 'gamers' | 'celulares' | 'impressoras'>('all');

  const services = [
    {
      id: 'notebooks',
      category: 'notebooks',
      title: 'Conserto de Notebooks & MacBooks',
      subtitle: 'Dell, Lenovo, Acer, Asus, HP, Apple & Samsung',
      desc: 'Soluções definitivas para lentidão, tela trincada, teclado quebrado, carcaça danificada ou notebook que não liga.',
      image: laptopImg,
      icon: Laptop,
      items: [
        'Reparo avançado em placa-mãe (curto, reballing BGA)',
        'Troca de tela LED / IPS / Retina no mesmo dia',
        'Upgrade de SSD NVMe ultrarrápido (até 10x mais veloz)',
        'Limpeza preventiva profunda e troca de pasta térmica',
        'Reparo e reconstrução de carcaças e dobradiças',
        'Troca de bateria original e teclado'
      ],
      whatsappTopic: 'Conserto de Notebook / MacBook'
    },
    {
      id: 'gamers',
      category: 'gamers',
      title: 'PCs Gamers & Computadores de Alta Performance',
      subtitle: 'Montagem, Otimização, Overclock & Water Cooler',
      desc: 'Extraia 100% de FPS e estabilidade do seu setup. Diagnóstico elétrico, teste sob estresse e montagem profissional.',
      image: gamerImg,
      icon: Monitor,
      items: [
        'Diagnóstico de congelamento, tela azul e reinicialização',
        'Instalação de Water Cooler e airflow térmico profissional',
        'Manutenção e troca de pasta térmica de placas de vídeo (GPU)',
        'Montagem limpa com cable management de alta precisão',
        'Upgrades de memória RAM, processador e fontes 80 Plus',
        'Formatação gamer otimizada sem bloatwares'
      ],
      whatsappTopic: 'Manutenção de PC Gamer / Desktop'
    },
    {
      id: 'apple',
      category: 'notebooks',
      title: 'Especialista em Linha Apple (MacBook & iMac)',
      subtitle: 'MacBook Air, MacBook Pro, Mac mini e iMac',
      desc: 'Técnicos capacitados em circuitos lógicos Apple. Recuperação sem a necessidade de substituição cara da placa completa.',
      image: appleImg,
      icon: Cpu,
      items: [
        'Reparo de circuito de carga e portas USB-C Thunderbolt',
        'Recuperação de aparelhos atingidos por líquidos',
        'Troca de bateria original com calibragem de ciclos',
        'Restauração de sistema macOS e migração segura de dados',
        'Troca de display Retina e teclados retroiluminados'
      ],
      whatsappTopic: 'Reparo de MacBook / iMac'
    },
    {
      id: 'celulares',
      category: 'celulares',
      title: 'Conserto de Celulares & Smartphones',
      subtitle: 'iPhone, Samsung Galaxy, Xiaomi e Motorola',
      desc: 'Troca de tela frontal de alta fidelidade de cores e toque, troca de bateria com selo de qualidade e reparo de conector.',
      image: phoneImg,
      icon: Smartphone,
      items: [
        'Troca de tela e display frontal (OLED / AMOLED / LCD)',
        'Substituição de bateria de alta capacidade',
        'Troca de conector de carga Tipo-C e Lightning',
        'Recuperação de aparelhos molhados (desoxidação química)',
        'Reparo de microfones, alto-falantes e câmeras',
        'Desbloqueios e restauração de sistema Android e iOS'
      ],
      whatsappTopic: 'Conserto de Celular / Smartphone'
    },
    {
      id: 'motherboard',
      category: 'notebooks',
      title: 'Microeletrônica & Solda BGA de Placas',
      subtitle: 'Laboratório Próprio com Estação de Solda Infrvermelha',
      desc: 'Evite condenar seu equipamento. Nosso laboratório no Macuco repara placas que outras assistências dizem não ter conserto.',
      image: motherImg,
      icon: Cpu,
      items: [
        'Diagnóstico em microscópio óptico de alta definição',
        'Substituição de MOSFETs, capacitores e CI de carga (PWM)',
        'Reballing e ressoldagem de chipsets e processadores',
        'Gravação e reprogramação de chip BIOS / SPI Flash',
        'Recuperação de trilhas rompidas pós-curto'
      ],
      whatsappTopic: 'Reparo em Placa-Mãe / Eletrônica'
    },
    {
      id: 'impressoras',
      category: 'impressoras',
      title: 'Impressoras, Multifuncionais & Redes TI',
      subtitle: 'Epson Ecotank, HP, Brother e Canon',
      desc: 'Manutenção de sistemas tanque de tinta, laser e contratos corporativos para empresas em Santos e Baixada Santista.',
      image: printerImg,
      icon: Printer,
      items: [
        'Desentupimento e limpeza ultra-sônica de cabeçote',
        'Troca de almofadas de tinta e reset de contador',
        'Troca de roletes tracionadores e películas de fusor',
        'Configuração de rede Wi-Fi corporativa e servidores',
        'Contratos de manutenção preventiva para empresas',
        'Locação de impressoras com suprimentos inclusos'
      ],
      whatsappTopic: 'Manutenção de Impressora / Soluções TI'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  const handleWhatsAppQuote = (topic: string) => {
    const text = encodeURIComponent(`Olá FLT Infotech! Gostaria de um orçamento para: ${topic}.`);
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-[#040806] relative">
      {/* Decorative ambient lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(0,255,1,0.06)_0%,_transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-xs font-bold text-[#00ff01] uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            Laboratório Físico Multimarcas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300">
            Mais de 19 anos de excelência técnica no Macuco em Santos. Soluções definitivas para seu computador, notebook, celular ou impressora.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'Todos os Serviços' },
            { id: 'notebooks', label: 'Notebooks & Mac' },
            { id: 'gamers', label: 'PCs & Gamers' },
            { id: 'celulares', label: 'Celulares & Telas' },
            { id: 'impressoras', label: 'Impressoras & TI' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#00ff01] text-black shadow-[0_0_20px_rgba(0,255,1,0.4)] scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#080e0b] border border-white/10 hover:border-[#00ff01]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,255,1,0.15)] flex flex-col justify-between group"
              >
                <div>
                  {/* Service Image Preview */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080e0b] via-transparent to-black/30"></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/80 backdrop-blur-md border border-[#00ff01]/40 flex items-center justify-center text-[#00ff01] shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff01] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    {/* Feature items */}
                    <ul className="space-y-2 mb-6">
                      {service.items.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00ff01] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => handleWhatsAppQuote(service.whatsappTopic)}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-950/80 hover:bg-[#00ff01] text-emerald-300 hover:text-black font-extrabold text-xs sm:text-sm border border-emerald-800/50 hover:border-transparent flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group/btn"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Pedir Orçamento Deste Serviço</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
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
