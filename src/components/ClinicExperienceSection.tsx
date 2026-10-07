import { CLINIC_PILLARS } from '@/data/content';
import { Sparkles, Shield, HeartHandshake, Award, Feather, Heart } from 'lucide-react';

export const ClinicExperienceSection: React.FC = () => {
  const iconList = [HeartHandshake, Shield, Sparkles, Award, Feather, Heart];

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#F3ECE2] text-[#2C2523] px-5 sm:px-8 lg:px-12 border-t border-[#E6DDCF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Philosophy & Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8C7A6B] block mb-3">
              Diferenciais do Nosso Espaço
            </span>
            
            {/* Header inspired by Image 1: "MORE THAN A BEAUTY salon" */}
            <h2 className="text-3xl sm:text-5xl font-normal leading-[1.08] tracking-tight uppercase mb-8">
              <span className="font-sans font-bold text-[#231C18] block">
                MUITO ALÉM DE UM
              </span>
              <span className="font-serif italic font-normal text-[#964F48] lowercase block mt-1">
                espaço de beleza
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#5C4F47] font-light leading-relaxed mb-10 max-w-xl">
              Nossa abordagem une o rigor técnico dermatológico à sensibilidade humana. Não trabalhamos com protocolos padronizados: cada sessão é pensada exclusivamente para você, respeitando os ciclos biológicos e o conforto da sua pele.
            </p>

            {/* Icons Grid with clean minimalist lines like Image 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {CLINIC_PILLARS.map((pillar, index) => {
                const IconComponent = iconList[index % iconList.length];
                return (
                  <div key={pillar.title} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#DDCFBE] flex items-center justify-center flex-shrink-0 text-[#964F48]">
                      <IconComponent className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#2C231E] uppercase tracking-wider mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#6A5C53] font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Signature quote */}
            <div className="mt-12 pt-6 border-t border-[#DECBB7]/70 flex items-center justify-between">
              <div>
                <p className="font-serif italic text-lg sm:text-xl text-[#3A302A]">
                  "Cuidar da pele é um ritual de reconexão e respeito à sua história."
                </p>
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#8C7A6B] block mt-1">
                  — Thaís Cardoso · Terapeuta Cutânea
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography Card (as seen in Image 1) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF] bg-[#E8DFC0]/30 aspect-[4/5] max-h-[640px] mx-auto w-full">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                alt="Ambiente de Atendimento Thaís Cardoso Estética Facial"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              {/* Floating Address Pin Badge like Image 1 */}
              <div className="absolute top-6 right-6 bg-[#2B231F]/80 backdrop-blur-md border border-white/20 text-[#FAF7F2] text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full shadow-lg">
                Centro · Curitiba & Piraquara
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E6DDCF] shadow-lg text-[#2C2523]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#964F48]">
                    Atendimento Exclusivo
                  </span>
                  <span className="text-[11px] font-sans text-[#78695E]">
                    Segunda a Sábado
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#27201C] mb-1">
                  Ambiente Silencioso & Higiene Hospitalar
                </h3>
                <p className="text-xs text-[#5E5148] font-light">
                  Sem salas cheias ou esperas desgastantes. Cada detalhe é preparado para acolher você com conforto absoluto e total segurança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
