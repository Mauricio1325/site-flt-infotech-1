import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-[#040806] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-xs font-bold text-[#00ff01] uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Visite Nossa Loja Física
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Onde Estamos em Santos
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300">
            Fácil acesso no bairro Macuco, próximo às principais vias de Santos. Estacionamento facilitado na rua.
          </p>
        </div>

        {/* Store Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card Info */}
          <div className="bg-[#080e0b] border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00ff01] text-black flex items-center justify-center font-black">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">FLT Infotech Santos</h3>
                  <p className="text-xs text-[#00ff01]">Laboratório & Atendimento ao Cliente</p>
                </div>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#00ff01] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Endereço Completo:</strong>
                    <span className="text-slate-300">{COMPANY_INFO.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#00ff01] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Horário de Funcionamento:</strong>
                    <span className="text-slate-300 block">Segunda a Sexta: {COMPANY_INFO.hours.weekdays}</span>
                    <span className="text-slate-300 block">Sábado: {COMPANY_INFO.hours.saturday}</span>
                    <span className="text-slate-500 block">Domingo e Feriados: Fechado</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#00ff01] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Telefones para Contato:</strong>
                    <span className="text-slate-300 block">WhatsApp: {COMPANY_INFO.phones.whatsapp}</span>
                    <span className="text-slate-300 block">Fixo: {COMPANY_INFO.phones.landline}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#00ff01] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">E-mail:</strong>
                    <span className="text-slate-300">{COMPANY_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={COMPANY_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl bg-[#00ff01] hover:bg-[#00dd01] text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,1,0.3)] transition-all hover:scale-102"
              >
                <Navigation className="w-4 h-4 fill-black" />
                <span>Como Chegar (Google Maps)</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phones.landlineRaw}`}
                className="py-3.5 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm border border-white/10 flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#00ff01]" />
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>

          {/* Fachada / Foto e Mapa */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 h-64 sm:h-72">
              <img 
                src="/conserta-computadores-notebook-impressoras-celular.png" 
                alt="FLT Infotech - Especialista em Conserto de Computadores, Notebooks, Impressoras e Celulares no Macuco em Santos" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs font-bold text-white bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
                  📍 Loja & Laboratório Especializado no Macuco
                </span>
              </div>
            </div>

            <div className="bg-[#080e0b] border border-white/10 rounded-3xl overflow-hidden p-2 flex-grow min-h-[220px]">
              <iframe
                title="Mapa FLT Infotech Santos"
                src={`https://maps.google.com/maps?q=${COMPANY_INFO.address.embedMapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '220px', borderRadius: '1rem' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
