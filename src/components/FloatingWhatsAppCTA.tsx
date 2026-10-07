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
        className="group relative flex items-center justify-center h-14 w-14 sm:w-auto sm:px-6 sm:h-13 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl shadow-emerald-900/30 transition-transform active:scale-95 duration-200 border border-white/20"
      >
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-white" />
        </span>

        <MessageCircle className="w-6 h-6 sm:mr-2.5 stroke-[2.2] fill-current" />
        
        <div className="hidden sm:flex flex-col text-left">
          <span className="font-sans font-bold text-xs uppercase tracking-wider leading-none">
            Agendar Horário
          </span>
          <span className="text-[10px] text-emerald-100 font-light tracking-wide mt-0.5">
            Resposta Rápida no WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
};
