import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export const StatsBanner: React.FC = () => {
  return (
    <div className="bg-black py-12 text-white border-y border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/15">
          
          {/* Stat 1 */}
          <div className="pt-4 md:pt-0">
            <span className="block text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
              +20 Anos
            </span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium">
              De Tradição em Santos (Desde 2005)
            </span>
          </div>

          {/* Stat 2 */}
          <div className="pt-4 md:pt-0">
            <span className="block text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
              +18 mil
            </span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium">
              Equipamentos e Clientes Atendidos
            </span>
          </div>

          {/* Stat 3 */}
          <div className="pt-4 md:pt-0">
            <span className="block text-4xl sm:text-5xl font-black text-[#22c55e] tracking-tight mb-1">
              Nota 5.0
            </span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium">
              Avaliações 5 Estrelas no Google
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
