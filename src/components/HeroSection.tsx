import React from 'react';
import { SITE_CONFIG } from '@/data/content';
import { MessageCircle, ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const waUrl = `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage)}`;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#1E1815] text-[#F8F5F0] pt-28 pb-12 px-5 sm:px-8 lg:px-12">
      {/* Background Photography with Warm Beige & Amber Studio Lighting (Replacing green with rich warm sand/mocha/amber tones) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=2000&q=85"
          alt="Pele iluminada e radiante - Estética Facial Thaís Cardoso"
          className="w-full h-full object-cover object-[center_28%] opacity-55 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Soft Radial and Gradient Vignette in warm beige / dark caramel / espresso */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1412]/95 via-[#1E1714]/80 to-[#1A1412]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#1E1714]/30 to-[#1A1412]/80"></div>
        {/* Warm Golden / Beige Ambient Halo */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D4AF7A]/15 blur-3xl pointer-events-none"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center my-auto py-12 md:py-16">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Subtle Top Kicker Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4C3B3]/25 bg-[#2A211C]/40 backdrop-blur-sm mb-6 sm:mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DECBB7] animate-pulse"></span>
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#DECBB7] uppercase">
              Cuidado Exclusivo · Estética Facial Personalizada
            </span>
          </div>

          {/* Headline - Editorial Serif inspired by Image 2 (Timeless Elegance.) */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-[-0.015em] text-[#FAF7F2] mb-6 sm:mb-8 drop-shadow-sm">
            Elegância <br className="hidden sm:inline" />
            <span className="italic font-light text-[#E8DFD3]">atemporal</span> e saúde <br />
            para sua pele.
          </h1>

          {/* Refined Subtitle */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#D6C7B7] font-light leading-relaxed max-w-xl mb-10 tracking-wide text-balance">
            Protocolos individuais para <span className="text-[#FAF7F2] font-medium">Melasma</span>, <span className="text-[#FAF7F2] font-medium">Acne</span>, <span className="text-[#FAF7F2] font-medium">Rejuvenescimento</span> e saúde cutânea com atendimento exclusivo em Curitiba e Piraquara.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-cta"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FAF7F2] bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 border border-[#DECBB7]/50 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#DECBB7] group-hover:scale-110 transition-transform" />
              <span>Agendar Avaliação</span>
              <span className="text-[#DECBB7] text-base group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href="#procedimentos"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-[#D4C3B3] hover:text-[#FAF7F2] hover:bg-white/5 transition-all text-center"
            >
              <span>Conhecer Especialidades</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Pillars (3 Columns with hairline borders, mirroring the bottom of Image 2) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-[#E6DDCF]/15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Pillar 1 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#DECBB7] uppercase">
                01 · Protocolos Individuais
              </span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#C2B2A1] font-light leading-relaxed">
              Avaliação minuciosa respeitando a biologia da sua pele e suas reais prioridades.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col md:border-l md:border-[#E6DDCF]/15 md:pl-8">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#DECBB7] uppercase">
                02 · Atendimento Exclusivo
              </span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#C2B2A1] font-light leading-relaxed">
              Sessões 100% com horário marcado, privacidade absoluta e ambiente acolhedor.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col md:border-l md:border-[#E6DDCF]/15 md:pl-8">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#DECBB7] uppercase">
                03 · Resultados Reais
              </span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#C2B2A1] font-light leading-relaxed">
              Associação de ciência dermatológica e cosmecêuticos de padrão ouro sem excessos.
            </p>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-8 pt-4 flex items-center justify-between text-[11px] tracking-[0.2em] text-[#A6998A] uppercase">
          <span className="hidden sm:inline">Thaís Cardoso · Estética Facial</span>
          <a
            href="#procedimentos"
            className="inline-flex items-center gap-2 hover:text-[#DECBB7] transition-colors mx-auto sm:mx-0"
          >
            <span>Scroll down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#DECBB7]" />
          </a>
          <span className="hidden sm:inline">Curitiba & Piraquara</span>
        </div>
      </div>
    </section>
  );
};
