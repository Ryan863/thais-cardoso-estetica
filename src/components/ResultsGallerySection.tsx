import { GALLERY_ITEMS, SITE_CONFIG } from '@/data/content';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { ArrowUpRight } from 'lucide-react';

export const ResultsGallerySection: React.FC = () => {
  return (
    <section id="resultados" className="py-24 sm:py-32 bg-[#F8F5F0] text-[#2C2523] px-5 sm:px-8 lg:px-12 border-t border-[#E6DDCF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Inspired by Image 1 (OUR WORK real results) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-[#E3D8CC] gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8C7A6B] block mb-3">
              Portfólio & Casos
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight uppercase">
              <span className="font-sans font-bold text-[#231C18] block">
                Nossos Resultados
              </span>
              <span className="font-serif italic font-normal text-[#964F48] lowercase block mt-1">
                transformações reais
              </span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col items-start md:items-end gap-4 text-left md:text-right">
            <p className="text-xs sm:text-sm text-[#6E5F55] leading-relaxed font-light">
              Cada pele conta uma história. Nossos tratamentos focam no resgate da textura natural, na uniformidade de tom e na saúde biológica sustentável.
            </p>
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] text-white bg-[#964F48] hover:bg-[#833F39] transition-all shadow-md active:scale-95"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Ver Casos no Instagram</span>
            </a>
          </div>
        </div>

        {/* Gallery Grid inspired by the multi-portrait layout in Image 1 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 pt-12">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#E8DFC0]/40 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=85';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[9px] uppercase tracking-wider font-semibold text-[#DECBB7]">
                  {item.category}
                </span>
                <h4 className="font-serif text-white text-base font-normal mt-0.5">
                  {item.title}
                </h4>
                <p className="text-[10px] text-white/80 font-light mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Minimal category badge always visible */}
              <div className="absolute bottom-3 left-3 group-hover:opacity-0 transition-opacity">
                <span className="text-[9px] uppercase tracking-wider font-medium bg-[#1F1916]/70 backdrop-blur-sm text-[#F7F4EE] px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Connection Banner */}
        <div className="mt-14 rounded-3xl bg-[#FAF7F2] border border-[#E3D8CC] p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#C32A5E] via-[#E95950] to-[#BC1888] p-[2px] shadow-lg flex-shrink-0">
              <div className="w-full h-full rounded-2xl bg-white p-1">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=85"
                  alt="Thaís Cardoso Instagram"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif text-xl sm:text-2xl font-normal text-[#27201C]">
                  {SITE_CONFIG.instagram}
                </span>
                <span className="text-[10px] font-sans font-bold bg-[#DECBB7] text-[#2C231E] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Oficial
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#6A5C53] font-light max-w-lg">
                Acompanhe os bastidores dos atendimentos, rotina de home care, dicas de proteção solar e antes/depois no feed e stories diários.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-white bg-[#221C19] hover:bg-[#964F48] transition-colors shadow-md active:scale-95"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Seguir no Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
