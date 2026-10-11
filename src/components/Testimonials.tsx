import React from 'react';
import { Star, CheckCircle, ThumbsUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Carlos Eduardo Mendes',
      location: 'Gonzaga, Santos',
      rating: 5,
      date: 'Há 2 semanas',
      device: 'Notebook Dell Inspiron',
      comment: 'Meu notebook de trabalho simplesmente parou de ligar com todos os meus arquivos da empresa dentro. Outra loja disse que precisava trocar a placa toda por uma fortuna. A FLT consertou a placa no laboratório deles por uma fração do preço em menos de 24 horas! Salvou meu mês.'
    },
    {
      name: 'Mariana Silveira',
      location: 'Macuco, Santos',
      rating: 5,
      date: 'Há 1 mês',
      device: 'MacBook Air M1',
      comment: 'Serviço impecável! Derrubei café no teclado do meu MacBook. Fui atendida na hora no laboratório, fizeram a desoxidação e trocaram o teclado com peça original. Ficou novinho. Recomendo de olhos fechados em Santos.'
    },
    {
      name: 'Rodrigo Fontes',
      location: 'Ponta da Praia, Santos',
      rating: 5,
      date: 'Há 3 semanas',
      device: 'PC Gamer Custom RTX 4070',
      comment: 'Mandei meu PC Gamer para otimização térmica e instalação de Water Cooler. O cable management e a organização interna ficaram nível internacional. Temperaturas caíram 20°C e o atendimento pelo WhatsApp foi nota 10!'
    },
    {
      name: 'Juliana P. Albuquerque',
      location: 'Boqueirão, Santos',
      rating: 5,
      date: 'Há 1 mês',
      device: 'iPhone 13 Pro',
      comment: 'Troquei a tela e a bateria do meu celular. Ficou perfeito, touch com resposta rápida e cores 100%. Sem falar no orçamento que foi feito na hora sem enrolação. Muito honestos e pontuais.'
    }
  ];

  return (
    <section id="avaliacoes" className="py-20 sm:py-28 bg-[#060a08] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-xs font-bold text-[#00ff01] uppercase tracking-wider mb-4">
            <ThumbsUp className="w-3.5 h-3.5" />
            Opinião Real de Quem Confia
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Avaliações 5 Estrelas no Google
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300">
            A reputação da FLT Infotech é construída cliente a cliente, com transparência e honestidade em cada reparo.
          </p>

          {/* Overall Rating Badge */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">4.9 / 5.0</span>
            <span className="text-xs text-slate-400">• Mais de 380 clientes satisfeitos</span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, index) => (
            <div 
              key={index}
              className="bg-[#090f0c] border border-white/10 hover:border-[#00ff01]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:-translate-y-1"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00ff01] text-black font-black flex items-center justify-center text-sm shadow-md">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        {rev.name}
                        <CheckCircle className="w-3.5 h-3.5 text-[#00ff01]" />
                      </h4>
                      <span className="text-xs text-slate-400">{rev.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Device Pill */}
                <div className="mb-3">
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/40 px-2.5 py-0.5 rounded-md">
                    Reparo: {rev.device}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[11px] text-slate-500">
                <span>Avaliação verificada no Google</span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
