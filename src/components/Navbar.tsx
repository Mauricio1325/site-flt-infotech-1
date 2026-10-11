import React, { useState } from 'react';
import { MessageSquare, Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { BrandLogoText } from './BrandLogoText';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsApp = (topic: string = 'Atendimento Geral') => {
    const text = encodeURIComponent(`Olá FLT Infotech! Gostaria de informações sobre ${topic}.`);
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Top Banner Informativo */}
      <div className="bg-[#040705] border-b border-emerald-950/60 text-xs text-slate-300 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#00ff01]" />
              <span>{COMPANY_INFO.address.street} - Macuco, Santos/SP</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#00ff01]" />
              <span>Seg a Sex: 09h às 18h | Sáb: 09h às 13h</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_INFO.phones.landlineRaw}`}
              className="hover:text-[#00ff01] transition-colors flex items-center gap-1 text-slate-400"
            >
              <Phone className="w-3 h-3 text-[#00ff01]" />
              <span>{COMPANY_INFO.phones.landline}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-[#00ff01] font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#00ff01] animate-ping"></span>
              Atendimento Online
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-[#060a08]/90 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img 
              src="/logo-com-fundo.png" 
              alt="FLT Infotech" 
              className="h-12 w-auto object-contain rounded-lg border border-emerald-900/50 group-hover:border-[#00ff01]/50 transition-colors"
            />
            <BrandLogoText className="w-[180px] sm:w-[210px] h-auto" glow={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#inicio" className="hover:text-[#00ff01] transition-colors">Início</a>
            <a href="#servicos" className="hover:text-[#00ff01] transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-[#00ff01] transition-colors">Diferenciais</a>
            <a href="#simulador" className="hover:text-[#00ff01] transition-colors">Orçamento</a>
            <a href="#avaliacoes" className="hover:text-[#00ff01] transition-colors">Avaliações</a>
            <a href="#localizacao" className="hover:text-[#00ff01] transition-colors">Onde Estamos</a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleWhatsApp('Orçamento Rápido')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00ff01] hover:bg-[#00dd01] text-black font-extrabold text-sm shadow-[0_0_20px_rgba(0,255,1,0.35)] hover:shadow-[0_0_28px_rgba(0,255,1,0.55)] transition-all hover:scale-[1.03] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Fazer Orçamento</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#070d09] border-b border-emerald-900/50 px-5 pt-3 pb-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-base font-semibold text-slate-200">
              <a 
                href="#inicio" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-1 hover:text-[#00ff01]"
              >
                Início
              </a>
              <a 
                href="#servicos" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-1 hover:text-[#00ff01]"
              >
                Serviços Especializados
              </a>
              <a 
                href="#diferenciais" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-1 hover:text-[#00ff01]"
              >
                Por que a FLT Infotech?
              </a>
              <a 
                href="#simulador" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-1 hover:text-[#00ff01]"
              >
                Simulador de Orçamento
              </a>
              <a 
                href="#avaliacoes" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-1 hover:text-[#00ff01]"
              >
                Avaliações de Clientes
              </a>
              <a 
                href="#localizacao" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-1 hover:text-[#00ff01]"
              >
                Endereço & Contato
              </a>
            </nav>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsApp('Orçamento Rápido Mobile');
                }}
                className="w-full py-3 rounded-xl bg-[#00ff01] text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,1,0.3)]"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Chamar no WhatsApp Agora</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
