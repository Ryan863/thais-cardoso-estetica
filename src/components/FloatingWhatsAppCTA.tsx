'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/data/content';

export const FloatingWhatsAppCTA: React.FC = () => {
  const waUrl = `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage)}`;

  return (
    <aside
      aria-label="Atendimento WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-fade-in"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center h-14 w-14 sm:w-auto sm:px-6 sm:h-13 bg-[#964F48] hover:bg-[#833F39] text-[#FAF7F2] rounded-full shadow-2xl shadow-black/40 transition-all active:scale-95 duration-200 border border-[#DECBB7]/50 backdrop-blur-md"
      >
        {/* Pulsing indicator in elegant warm champagne */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DECBB7] opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#EADCCB] border-2 border-[#1E1714]" />
        </span>

        <MessageCircle className="w-5 h-5 sm:mr-2.5 stroke-[2] text-[#DECBB7] fill-current" />
        
        <div className="hidden sm:flex flex-col text-left">
          <span className="font-sans font-bold text-[11px] uppercase tracking-[0.16em] leading-none text-[#FAF7F2]">
            Agendar Horário
          </span>
          <span className="text-[10px] text-[#E8DFD3]/80 font-light tracking-wide mt-0.5">
            Atendimento no WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
};
