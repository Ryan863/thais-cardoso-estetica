import React from 'react';
import { UNITS, SITE_CONFIG } from '@/data/content';
import { MapPin, Navigation, Clock, MessageCircle, CalendarCheck } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  return (
    <section id="unidades" className="py-24 sm:py-32 bg-[#F8F5F0] text-[#2C2523] px-5 sm:px-8 lg:px-12 border-t border-[#E6DDCF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8C7A6B] block mb-3">
            Onde Estamos
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal leading-[1.08] tracking-tight uppercase">
            <span className="font-sans font-bold text-[#231C18] block">
              NOSSAS UNIDADES
            </span>
            <span className="font-serif italic font-normal text-[#964F48] lowercase block mt-1">
              curitiba & piraquara
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#6A5C53] font-light leading-relaxed mt-4">
            Espaços planejados para proporcionar total tranquilidade, conforto e biossegurança.
          </p>
        </div>

        {/* Schedule Notice Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl bg-[#EFE8DD] border border-[#DFCFC0] flex items-center justify-center gap-3 text-center">
          <Clock className="w-4 h-4 text-[#964F48] flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium text-[#463932]">
            {SITE_CONFIG.scheduleHours}
          </span>
        </div>

        {/* Units Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {UNITS.map((unit) => {
            return (
              <div
                key={unit.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D8CC] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5EFEB] border border-[#DECBB7] flex items-center justify-center text-[#964F48]">
                      <MapPin className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#FAF7F2] text-[#8C7A6B] border border-[#E8DFC0]">
                      {unit.city}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#27201C] mb-2">
                    {unit.name}
                  </h3>

                  <p className="text-sm font-medium text-[#964F48] mb-3">
                    {unit.address}
                  </p>

                  <p className="text-xs sm:text-[13px] text-[#6A5C53] font-light leading-relaxed mb-6">
                    {unit.details}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#F2ECE3] flex flex-col gap-3">
                  {unit.mapsUrl ? (
                    <a
                      href={unit.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-white bg-[#221C19] hover:bg-[#964F48] transition-colors shadow-sm"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Como Chegar (Rota GPS)</span>
                    </a>
                  ) : (
                    <a
                      href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent("Olá Thaís! Gostaria de consultar o endereço exato da Unidade Piraquara e agendar um horário.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-white bg-[#221C19] hover:bg-[#964F48] transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Consultar Endereço no WhatsApp</span>
                    </a>
                  )}

                  <a
                    href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(`Olá! Gostaria de agendar meu horário na ${unit.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-[#2C231E] bg-[#F5EFEB] hover:bg-[#EAE0D3] transition-colors"
                  >
                    <CalendarCheck className="w-3.5 h-3.5 text-[#964F48]" />
                    <span>Agendar nesta unidade</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Conversion Callout */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8C7A6B] mb-2">
            Central de Atendimento Oficial
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-2xl sm:text-4xl text-[#231C18] hover:text-[#964F48] transition-colors tracking-tight font-normal inline-block"
          >
            {SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
};
