import React from 'react';
import { PROCEDURES, SITE_CONFIG } from '@/data/content';
import { ArrowUpRight, MessageCircle, CheckCircle2 } from 'lucide-react';

export const SpecialtiesSection: React.FC = () => {
  return (
    <section id="procedimentos" className="py-24 sm:py-32 bg-[#F8F5F0] text-[#2C2523] px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Editorial Style like Image 1 (EVERYTHING YOU NEED FOR complete beauty) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-[#E3D8CC] gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8C7A6B] block mb-3">
              Nossos Procedimentos
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight uppercase">
              <span className="font-sans font-bold text-[#231C18] block">
                Cuidado Integral Para
              </span>
              <span className="font-serif italic font-normal text-[#964F48] lowercase block mt-1">
                sua melhor pele
              </span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col items-start md:items-end gap-5 text-left md:text-right">
            <p className="text-xs sm:text-sm text-[#6E5F55] leading-relaxed font-light">
              Protocolos dermatológicos personalizados, unindo avaliação celular e ativos de alta performance para entregar resultados visíveis e sustentáveis.
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] text-white bg-[#964F48] hover:bg-[#833F39] transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Agendar Consulta</span>
            </a>
          </div>
        </div>

        {/* Procedures Grid - 01, 02, 03 style like Image 1 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12">
          {PROCEDURES.map((item) => {
            const itemWaUrl = `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(item.whatsappMessage)}`;

            return (
              <article
                key={item.id}
                className="group relative bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E8DFC0]/40 hover:border-[#D6C1A5] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Editorial Number */}
                <div className="relative aspect-[16/11] sm:aspect-[4/3] overflow-hidden bg-[#ECE4D8]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                  
                  {/* Card Number & Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-serif text-base text-white/90 bg-black/30 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/20">
                      {item.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#FAF7F2] text-[#3A2E28] px-2 py-0.5 rounded shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Corner Arrow */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#964F48] group-hover:border-[#964F48] transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-normal drop-shadow-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#E8DFD3] tracking-wide font-light">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <p className="text-xs sm:text-[13px] text-[#5C4F47] leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>

                  {/* Benefits checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#F2ECE3]">
                    {item.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#4A3D36]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#964F48] flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Individual WhatsApp Button */}
                  <a
                    href={itemWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-[0.14em] text-[#2C231E] bg-[#F5EFEB] hover:bg-[#964F48] hover:text-white transition-all duration-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Dúvidas & Agendamento</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
