import React, { useState } from 'react';
import { FAQ_ITEMS, SITE_CONFIG } from '@/data/content';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#F3ECE2] text-[#2C2523] px-5 sm:px-8 lg:px-12 border-t border-[#E6DDCF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8C7A6B] block mb-3">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal leading-[1.08] tracking-tight uppercase">
            <span className="font-sans font-bold text-[#231C18] block">
              PERGUNTAS
            </span>
            <span className="font-serif italic font-normal text-[#964F48] lowercase block mt-1">
              frequentes
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#6A5C53] font-light leading-relaxed mt-4">
            Respostas transparentes para as principais questões sobre nossos procedimentos e rotina de atendimento.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E3D8CC] overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left py-5 px-6 sm:px-8 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#27201C] font-normal">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#964F48] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#DECBB7]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-xs sm:text-sm text-[#5C4F47] font-light leading-relaxed border-t border-[#F7F2EC]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question button */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-[#FAF7F2] border border-[#DFCFC0]">
          <h3 className="font-serif text-xl sm:text-2xl text-[#231C18] font-normal mb-2">
            Ficou com alguma dúvida específica sobre a sua pele?
          </h3>
          <p className="text-xs text-[#6A5C53] font-light mb-6">
            Converse diretamente com Thaís pelo WhatsApp e receba orientações personalizadas.
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent("Olá Thaís! Tenho uma dúvida sobre os procedimentos que não encontrei no site.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-white bg-[#964F48] hover:bg-[#833F39] transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar Conosco no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
