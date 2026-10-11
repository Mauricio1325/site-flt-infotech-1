import React from 'react';
import { Check, X } from 'lucide-react';
import labImg from '../assets/images/hero_repair_lab_1788962302612.jpg';

export const WhyChooseUs: React.FC = () => {
  const stats = [
    { value: '19+', label: 'Anos de Tradição', sub: 'Em Santos desde 2005' },
    { value: '+15.000', label: 'Equipamentos Salvos', sub: 'Notebooks, PCs e Celulares' },
    { value: '98,7%', label: 'Satisfação dos Clientes', sub: 'Avaliações 5 estrelas' },
    { value: '100%', label: 'Garantia Formal', sub: 'Em todos os serviços' }
  ];

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-[#040705] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#00ff01] uppercase tracking-wider bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800/40">
            Diferenciais Exclusivos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-3 mb-4">
            Por que confiar na FLT Infotech?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300">
            Equipamento caro e dados pessoais exigem responsabilidade. Veja a diferença entre nossa assistência especializada e curiosos de bairro.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((st, i) => (
            <div 
              key={i}
              className="bg-[#080e0b] border border-white/10 hover:border-[#00ff01]/40 rounded-2xl p-6 text-center transition-all hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00ff01] mb-1">
                {st.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-white mb-0.5">
                {st.label}
              </div>
              <div className="text-xs text-slate-400">
                {st.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Image & Lab Reality */}
          <div className="relative rounded-3xl overflow-hidden border border-[#00ff01]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <img 
              src={labImg} 
              alt="Laboratório de Informática FLT Infotech Santos" 
              className="w-full h-[380px] sm:h-[460px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#00ff01] animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Laboratório Físico Aberto</span>
              </div>
              <p className="text-sm text-slate-200">
                Localizado na Rua Luís Gama, 299 no Macuco. Venha tomar um café conosco e acompanhar o teste do seu equipamento.
              </p>
            </div>
          </div>

          {/* Right Column: Comparison Table */}
          <div className="bg-[#080d0a] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              Comparativo de Segurança & Qualidade
            </h3>

            <div className="space-y-3">
              {[
                {
                  feature: 'Orçamento Claro com Diagnóstico Técnico',
                  flt: 'Sim, explicado em detalhes antes de qualquer custo',
                  others: 'Valores vagos que aumentam no meio do conserto'
                },
                {
                  feature: 'Garantia Formal com Nota/Comprovante',
                  flt: 'Sim, documentada por escrito com suporte total',
                  others: 'Sem garantia ou apenas promessa verbal'
                },
                {
                  feature: 'Laboratório Próprio com Estações Anti-ESD',
                  flt: 'Sim, equipamentos de precisão microscópica',
                  others: 'Terceirizam o serviço ou fazem em casa'
                },
                {
                  feature: 'Privacidade Total dos Seus Arquivos e Fotos',
                  flt: 'Sigilo absoluto e respeito ético aos seus dados',
                  others: 'Risco de vazamento ou perda sem backup'
                },
                {
                  feature: 'Peças Testadas e Homologadas',
                  flt: 'Componentes novos de distribuidores confiáveis',
                  others: 'Peças usadas ou de segunda linha'
                }
              ].map((row, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2">
                  <div className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                    {row.feature}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-start gap-2 text-emerald-400 font-medium">
                      <Check className="w-4 h-4 text-[#00ff01] shrink-0 mt-0.5" />
                      <span><strong>FLT Infotech:</strong> {row.flt}</span>
                    </div>
                    <div className="flex items-start gap-2 text-rose-400 font-normal">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span><strong>Assistências Comuns:</strong> {row.others}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
