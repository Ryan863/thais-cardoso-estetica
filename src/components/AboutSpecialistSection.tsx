import React from 'react';
import { SITE_CONFIG } from '@/data/content';
import { Sparkles, ShieldCheck, Heart, Award, ArrowUpRight } from 'lucide-react';

export const AboutSpecialistSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F3ECE2] text-[#2C2523] px-5 sm:px-8 lg:px-12 border-t border-[#E6DDCF]">
      <div className="max-w-7xl mx-auto">
        {/* Header inspired by Image 1: "MEET OUR team" */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8C7A6B] block mb-3">
            Conheça a Especialista
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal leading-[1.08] tracking-tight uppercase">
            <span className="font-sans font-bold text-[#231C18] block">
              TERAPEUTA EM
            </span>
            <span className="font-serif italic font-normal text-[#964F48] lowercase block mt-1">
              cuidados com a pele
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#6A5C53] font-light leading-relaxed mt-4">
            Compromisso inegociável com a integridade cutânea, ciência e atendimento acolhedor.
          </p>
        </div>

        {/* Specialist Profile Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-[#E3D8CC] grid grid-cols-1 md:grid-cols-12">
          {/* Portrait Column */}
          <div className="md:col-span-5 relative aspect-[3/4] md:aspect-auto min-h-[380px] bg-[#E8DFC0]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
              alt="Thaís Cardoso - Especialista em Estética Facial"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#DECBB7] block">
                Profissional Responsável
              </span>
              <h3 className="font-serif text-2xl font-normal">
                {SITE_CONFIG.professionalName}
              </h3>
            </div>
          </div>

          {/* Bio & Credentials Column */}
          <div className="md:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#964F48]"></span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C7A6B]">
                  {SITE_CONFIG.role}
                </span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl text-[#231C18] font-normal mb-4">
                "Não acredito em padrões inalcançáveis, mas sim no brilho singular da sua pele saudável."
              </h4>

              <p className="text-xs sm:text-sm text-[#5C4F47] leading-relaxed font-light mb-4">
                Com anos de dedicação ao estudo aprofundado das disfunções pigmentares (Melasma), acne inflamatória e estímulo biocompatível de colágeno, Thaís Cardoso desenvolve protocolos sob medida com o mais alto padrão de assepsia e tecnologia.
              </p>

              <p className="text-xs sm:text-sm text-[#5C4F47] leading-relaxed font-light mb-6">
                Aqui, seu tempo é valorizado: cada consulta é uma imersão de autocuidado silenciosa, privativa e sem pressa.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#F2ECE3]">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#964F48]" />
                  <span className="text-xs text-[#3E332D] font-medium">100% Hora Marcada</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-[#964F48]" />
                  <span className="text-xs text-[#3E332D] font-medium">Cosméticos Ouro</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#964F48]" />
                  <span className="text-xs text-[#3E332D] font-medium">Avaliação Bioquímica</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Heart className="w-4 h-4 text-[#964F48]" />
                  <span className="text-xs text-[#3E332D] font-medium">Cuidado Exclusivo</span>
                </div>
              </div>
            </div>

            {/* Bottom Contact CTA */}
            <div className="mt-8 pt-6 border-t border-[#F2ECE3] flex items-center justify-between">
              <span className="text-xs text-[#8C7A6B] font-light">
                Curitiba (Centro) & Piraquara
              </span>
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#964F48] hover:text-[#7A3631] transition-colors"
              >
                <span>Agendar com Thaís</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
