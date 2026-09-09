import React from 'react';
import { 
  Award, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Building2, 
  BadgePercent,
  CheckCircle2
} from 'lucide-react';
import { DIFFERENTIALS_LIST, COMPANY_INFO } from '../data/companyData';

export const DifferentialsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award': return <Award className="w-6 h-6 text-[#00ff01]" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#00ff01]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#00ff01]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#00ff01]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#00ff01]" />;
      case 'BadgePercent': return <BadgePercent className="w-6 h-6 text-[#00ff01]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#00ff01]" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 bg-[#080c0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-[#00ff01]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Por Que Escolher a FLT Infotech
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Diferenciais que Fazem Nossa Assistência Ser Líder em Santos
          </h2>
          <p className="text-base text-slate-300">
            Mais do que consertar computadores, entregamos segurança, transparência e retorno garantido do seu investimento.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS_LIST.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20 group"
            >
              <div className="w-12 h-12 rounded-xl bg-black border border-emerald-500/30 flex items-center justify-center mb-5 group-hover:border-[#00ff01] group-hover:shadow-[0_0_15px_rgba(0,255,1,0.3)] transition-all">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Local Commitment Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff01]"></span>
              Atendimento Técnico Próximo de Você em Santos
            </h4>
            <p className="text-xs text-slate-300">
              Localização privilegiada no Macuco (R. Luís Gama, 299) com fácil estacionamento e acesso rápido a toda a Baixada.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_INFO.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-xs font-bold text-slate-200 transition-all"
            >
              Abrir no Google Maps
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a assistência da FLT Infotech.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#00ff01] hover:bg-[#1eff20] text-xs font-bold text-black shadow-[0_0_15px_rgba(0,255,1,0.3)] transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
