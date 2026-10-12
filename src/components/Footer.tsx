import React from 'react';
import { ShieldCheck, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { BrandLogoText } from './BrandLogoText';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030604] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo-com-fundo.png" 
                alt="FLT Infotech" 
                className="h-10 w-auto object-contain rounded-lg border border-emerald-900/50"
              />
              <BrandLogoText className="w-[170px] h-auto" glow={false} />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Assistência técnica em informática de alta precisão em Santos e Baixada Santista. Laboratório próprio no Macuco especializado em microeletrônica, notebooks, PCs gamers e celulares.
            </p>
            <div className="pt-2 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00ff01]" />
              <span>Garantia Documentada em Todos os Serviços</span>
            </div>
          </div>

          {/* Col 2: Serviços Rápidos */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Serviços Rápidos
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#servicos" className="hover:text-[#00ff01] transition-colors">Conserto de Notebooks e MacBooks</a></li>
              <li><a href="#servicos" className="hover:text-[#00ff01] transition-colors">Manutenção e Montagem de PC Gamer</a></li>
              <li><a href="#servicos" className="hover:text-[#00ff01] transition-colors">Reparo e Troca de Tela de Celulares</a></li>
              <li><a href="#servicos" className="hover:text-[#00ff01] transition-colors">Recuperação de Placas-Mãe (BGA)</a></li>
              <li><a href="#servicos" className="hover:text-[#00ff01] transition-colors">Manutenção de Impressoras e Ecotank</a></li>
              <li><a href="#servicos" className="hover:text-[#00ff01] transition-colors">Upgrades de Memória RAM e SSD NVMe</a></li>
            </ul>
          </div>

          {/* Col 3: Navegação */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-[#00ff01] transition-colors">Início</a></li>
              <li><a href="#diferenciais" className="hover:text-[#00ff01] transition-colors">Por Que a FLT Infotech?</a></li>
              <li><a href="#simulador" className="hover:text-[#00ff01] transition-colors">Simulador de Orçamento</a></li>
              <li><a href="#avaliacoes" className="hover:text-[#00ff01] transition-colors">Depoimentos no Google</a></li>
              <li><a href="#localizacao" className="hover:text-[#00ff01] transition-colors">Como Chegar à Loja</a></li>
              <li><a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff01] transition-colors">Instagram Oficial</a></li>
            </ul>
          </div>

          {/* Col 4: Contato Direto */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Contato Direto
            </h4>
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-[#00ff01] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address.full}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-[#00ff01] shrink-0" />
              <span>{COMPANY_INFO.phones.whatsapp}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-[#00ff01] shrink-0" />
              <span>{COMPANY_INFO.phones.landline}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Mail className="w-4 h-4 text-[#00ff01] shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} {COMPANY_INFO.name} - Assistência Técnica em Informática em Santos. Todos os direitos reservados.
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span>
              Desenvolvido por <strong className="text-slate-300 font-semibold">Maurício Reis</strong> | Contato: <a href="https://wa.me/5513996733810?text=Ol%C3%A1%20Maur%C3%ADcio!%20Vi%20o%20site%20da%20FLT%20Infotech%20e%20gostaria%20de%20um%20or%C3%A7amento%20de%20site." target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-[#00ff01] hover:underline font-medium transition-colors">(13) 99673-3810</a>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-[#00ff01] text-slate-400 hover:text-black border border-white/10 hover:border-transparent transition-all cursor-pointer flex items-center gap-1.5"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold">Voltar ao topo</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
