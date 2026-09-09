import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  MessageSquare,
  Instagram,
  Facebook
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent('Olá FLT Infotech! Gostaria de solicitar um orçamento rápido para conserto do meu aparelho em Santos.');
    window.open(`https://wa.me/${COMPANY_INFO.phones.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Contact & Social Bar (exact look from reference model) */}
      <div className="bg-black/95 border-b border-white/10 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Social Icons Left */}
          <div className="flex items-center space-x-3 text-slate-300">
            <a 
              href={COMPANY_INFO.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram da FLT Infotech"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href={COMPANY_INFO.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook da FLT Infotech"
              className="hover:text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          {/* Direct Actions Right */}
          <div className="flex items-center space-x-3">
            <a 
              href={`tel:${COMPANY_INFO.phones.landlineRaw}`}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e53e3e] hover:bg-[#c53030] text-white font-semibold text-[11px] sm:text-xs transition-colors shadow-sm"
              title="Ligar para FLT Infotech"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>(13) 3222-3059</span>
            </a>

            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[11px] sm:text-xs transition-colors shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-3 h-3 fill-current" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0a0f0d]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3' 
            : 'bg-[#0a0f0d] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 sm:gap-4 shrink-0 group" id="header-logo-link">
              <img
                src="/logo-com-fundo.png"
                alt="FLT Infotech - Assistência Técnica em Santos"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col justify-center leading-tight">
                <span className="text-base sm:text-lg md:text-xl font-black text-[#00ff01] tracking-tight leading-none drop-shadow-[0_1px_6px_rgba(0,255,1,0.25)]">
                  FLT INFOTECH
                </span>
                <span className="text-xs sm:text-sm text-slate-100 font-semibold tracking-normal mt-1 leading-tight">
                  Assistência Técnica em Santos
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white focus:outline-none"
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0e1411] border-b border-white/10 px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full py-2.5 rounded-full bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Orçamento rápido no WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
