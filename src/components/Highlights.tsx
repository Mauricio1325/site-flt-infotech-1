import React from 'react';
import { ShieldCheck, FileCheck, Truck, Cpu } from 'lucide-react';

export const Highlights: React.FC = () => {
  const cards = [
    {
      icon: ShieldCheck,
      title: 'Garantia Formal em Todos os Reparos',
      desc: 'Segurança absoluta. Todos os serviços contam com garantia documentada e peças testadas rigorosamente em laboratório próprio.',
      badge: 'Garantia Real'
    },
    {
      icon: FileCheck,
      title: 'Orçamento Rápido e Sem Surpresas',
      desc: 'Transparência total. Você sabe o diagnóstico e o valor exato antes de aprovar qualquer serviço. Sem taxas ocultas.',
      badge: '100% Transparente'
    },
    {
      icon: Cpu,
      title: 'Laboratório Próprio Especializado',
      desc: 'Estação de solda BGA, microscópio térmico e bancadas antiestáticas. Consertos de alta complexidade em placas-mãe.',
      badge: 'Alta Tecnologia'
    },
    {
      icon: Truck,
      title: 'Atendimento Balcão ou Delivery',
      desc: 'Traga seu aparelho à nossa loja no Macuco ou solicite o serviço de busca e entrega com comodidade em toda a Baixada Santista.',
      badge: 'Santos & Região'
    }
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div 
              key={index}
              className="bg-[#080e0a]/90 backdrop-blur-md border border-white/10 hover:border-[#00ff01]/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,255,1,0.12)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-[#00ff01]/30 flex items-center justify-center text-[#00ff01] group-hover:scale-110 group-hover:bg-[#00ff01] group-hover:text-black transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#00ff01] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
