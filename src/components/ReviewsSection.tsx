import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { REVIEWS_DATA } from '../data/companyData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">
            AVALIAÇÕES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A satisfação de quem confia no nosso trabalho é nossa maior recompensa. Veja porque somos a escolha de tantos clientes em Santos.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-amber-400 gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {review.name}
                  </h4>
                  <span className="text-[11px] text-slate-500 block">
                    {review.role || 'Avaliação no Google'}
                  </span>
                </div>
                <span className="inline-flex items-center text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" /> Verificado
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
