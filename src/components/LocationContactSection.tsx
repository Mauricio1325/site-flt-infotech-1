import React from 'react';
import { MapPin, Navigation, Phone, Clock, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const LocationContactSection: React.FC = () => {
  const handleCreateRoute = () => {
    window.open(COMPANY_INFO.address.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="localizacao" className="py-20 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">
            LOCALIZAÇÃO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Visite Nossa Loja de Informática no Macuco, Santos
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Estamos em um dos pontos mais acessíveis de Santos, prontos para te atender. Venha tomar um café e resolver o problema do seu aparelho.
          </p>
        </div>

        {/* Map Container */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50 mb-6">
          <iframe
            title="Localização FLT Infotech Santos"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.065403212869!2d-46.32179832387133!3d-23.957597178527814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce031c553d162f%3A0xe54d8961358f27aa!2sR.%20Lu%C3%ADs%20Gama%2C%20299%20-%20Macuco%2C%20Santos%20-%20SP%2C%2011015-151!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>

        {/* Route CTA and Info (exact look from reference model) */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-500 mb-4">
            Clique no botão abaixo para gerar uma rota da sua localização atual até nossa Assistência Técnica.
            <br />
            <span className="text-[11px] text-slate-400">*Ative o GPS do seu dispositivo.</span>
          </p>

          <button
            onClick={handleCreateRoute}
            className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer hover:shadow"
          >
            <Navigation className="w-4 h-4 text-emerald-600" />
            <span>Criar Rota</span>
          </button>
        </div>

        {/* Quick Contact Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-100 text-center">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <MapPin className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
            <span className="text-xs font-bold text-slate-900 block mb-0.5">Endereço</span>
            <span className="text-xs text-slate-600">{COMPANY_INFO.address.full}</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <Phone className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
            <span className="text-xs font-bold text-slate-900 block mb-0.5">Telefones</span>
            <span className="text-xs text-slate-600">{COMPANY_INFO.phones.landline} • {COMPANY_INFO.phones.whatsapp}</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <Clock className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
            <span className="text-xs font-bold text-slate-900 block mb-0.5">Horário de Funcionamento</span>
            <span className="text-xs text-slate-600">Seg a Sex: {COMPANY_INFO.hours.weekdays} | Sáb: {COMPANY_INFO.hours.saturday}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
