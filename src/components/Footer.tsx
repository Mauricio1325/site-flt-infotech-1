import React from 'react';
import { 
  Instagram, 
  Facebook,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { BrandLogoText } from './BrandLogoText';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070b09] text-slate-400 text-xs pt-16 pb-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Logo & Social Icons */}
          <div className="md:col-span-4 space-y-4">
            <a href="#inicio" className="flex items-center gap-3 sm:gap-4 group">
              <img
                src="/logo-com-fundo.png"
                alt="FLT Infotech"
                className="h-13 sm:h-15 md:h-16 w-auto object-contain rounded-lg shrink-0 group-hover:scale-105 transition-transform shadow-md"
              />
              <BrandLogoText className="w-[155px] sm:w-[185px] md:w-[210px] h-auto" glow={false} />
            </a>

            {/* Social Icons with original official brand colors and larger tactile sizing */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-[0_0_16px_rgba(220,39,67,0.5)] transition-all duration-200"
                aria-label="Instagram da FLT Infotech"
                title="Siga a FLT Infotech no Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
              </a>
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#1877F2] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-[0_0_16px_rgba(24,119,242,0.5)] transition-all duration-200"
                aria-label="Facebook da FLT Infotech"
                title="Curta a FLT Infotech no Facebook"
              >
                <Facebook className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-white stroke-none" />
              </a>
            </div>
          </div>

          {/* Col 2: SOBRE */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              SOBRE
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Procurando a melhor assistência técnica em informática em Santos? A FLT Infotech resolve! Qualidade, garantia em todos os reparos e transparência. Fale agora com um técnico pelo telefone <strong className="text-white">(13) 3222-3059</strong> ou WhatsApp <strong className="text-white">(13) 97416-0655</strong> e peça seu orçamento rápido!
            </p>
          </div>

          {/* Col 3: LINKS */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              LINKS
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors">Localização</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 4: CONTATO */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              CONTATO
            </h4>
            <div className="space-y-2 text-slate-300">
              <p className="leading-snug">
                <strong className="text-white block">FLT Infotech - Loja Macuco</strong>
                Endereço: {COMPANY_INFO.address.full}
              </p>
              <p>
                Telefone: <a href={`tel:${COMPANY_INFO.phones.landlineRaw}`} className="hover:text-white">{COMPANY_INFO.phones.landline}</a>
              </p>
              <p>
                WhatsApp: <a href={`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#22c55e]">{COMPANY_INFO.phones.whatsapp}</a>
              </p>
              <p>
                Email: {COMPANY_INFO.email}
              </p>
              <div className="pt-1 text-[11px] text-slate-400">
                <strong className="text-white block">Horário de Atendimento:</strong>
                Segunda à sexta: {COMPANY_INFO.hours.weekdays}<br />
                Sábado: {COMPANY_INFO.hours.saturday}<br />
                Domingo: {COMPANY_INFO.hours.sunday}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} FLT Infotech - Todos os Direitos Reservados.</p>
          <a href="#sobre" className="hover:text-slate-300 transition-colors">
            Política de Privacidade
          </a>
        </div>

      </div>
    </footer>
  );
};
