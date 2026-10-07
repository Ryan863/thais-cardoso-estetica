import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/data/content';
import { Menu, X, MessageCircle, Calendar } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Unidades', href: '#unidades' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const waBookingUrl = `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1C1714]/92 backdrop-blur-xl py-4.5 border-b border-[#E6DDCF]/15 shadow-xl'
          : 'bg-gradient-to-b from-[#140F0D]/80 via-[#140F0D]/30 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between min-h-[44px]">
        {/* Brand Monogram & Title */}
        <a
          href="#"
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4C3B3]/40 flex items-center justify-center bg-[#2E241F]/40 backdrop-blur-sm group-hover:border-[#DECBB7] transition-colors">
            <span className="font-serif text-[#DECBB7] text-base font-semibold tracking-wider">
              TC
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-normal tracking-[0.18em] text-[#FAF7F2] uppercase group-hover:text-[#DECBB7] transition-colors">
              Thaís Cardoso
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.28em] text-[#CDBEAA] uppercase font-light">
              Estética Facial & Saúde
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] tracking-[0.16em] uppercase text-[#E8DFD3]/85 hover:text-[#FFFFFF] transition-colors font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#DECBB7] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={waBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF7F2] border border-[#DECBB7]/40 bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 hover:border-[#DECBB7] backdrop-blur-md transition-all duration-300 shadow-sm active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-[#DECBB7] group-hover:rotate-12 transition-transform" />
            <span>Agendar Horário</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden p-2 rounded-lg text-[#FAF7F2] hover:bg-[#FAF7F2]/10 transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#DECBB7]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181412]/95 backdrop-blur-xl border-b border-[#E6DDCF]/15 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[0.2em] uppercase text-[#E8DFD3] hover:text-[#DECBB7] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={waBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-[#1F1916] bg-[#DECBB7] hover:bg-[#EAE0D3] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar no WhatsApp</span>
              </a>
              <div className="text-center text-[11px] text-[#A6998A] tracking-wider pt-1">
                Atendimento exclusivamente com hora marcada
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
