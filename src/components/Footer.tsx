import { SITE_CONFIG } from '@/data/content';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { MessageCircle, MapPin, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const waUrl = `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage)}`;

  return (
    <footer className="bg-[#181311] text-[#E8DFD3] pt-20 pb-12 px-5 sm:px-8 lg:px-12 border-t border-[#362A24]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#312520]">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#D4C3B3]/40 flex items-center justify-center bg-[#281F1A]">
                <span className="font-serif text-[#DECBB7] text-base font-semibold">
                  TC
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl font-normal text-white uppercase tracking-wider block">
                  Thaís Cardoso
                </span>
                <span className="font-sans text-[10px] tracking-[0.25em] text-[#C2B2A1] uppercase font-light">
                  Estética Facial & Cuidados Cutâneos
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89A8C] font-light leading-relaxed max-w-sm mb-6">
              "Resultados reais + cuidado exclusivo". Tratamentos personalizados para melasma, acne, rejuvenescimento e limpeza de pele profunda.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Thaís Cardoso"
                className="w-10 h-10 rounded-full bg-[#281F1A] border border-[#3E3129] hover:border-[#DECBB7] flex items-center justify-center text-[#DECBB7] hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Oficial"
                className="w-10 h-10 rounded-full bg-[#281F1A] border border-[#3E3129] hover:border-[#DECBB7] flex items-center justify-center text-[#DECBB7] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#DECBB7] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89A8C]">
              <li>
                <a href="#procedimentos" className="hover:text-white transition-colors">
                  Procedimentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Clínica
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-white transition-colors">
                  Resultados Reais
                </a>
              </li>
              <li>
                <a href="#unidades" className="hover:text-white transition-colors">
                  Nossas Unidades
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Units Information */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#DECBB7] mb-4">
              Locais de Atendimento
            </h4>
            <div className="space-y-4 text-xs text-[#A89A8C]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DECBB7] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Unidade Curitiba (Centro)</strong>
                  <span>Rua Emiliano Perneta, 325 - Centro, Curitiba - PR</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DECBB7] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Unidade Piraquara</strong>
                  <span>Consulte o endereço da unidade no agendamento</span>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule & Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#DECBB7] mb-4">
              Atendimento
            </h4>
            <div className="space-y-3 text-xs text-[#A89A8C]">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#DECBB7] flex-shrink-0 mt-0.5" />
                <span>Segunda a Sábado com hora marcada</span>
              </div>
              <p className="text-[11px] text-[#85776B]">
                Domingos fechado para descanso e assepsia do espaço.
              </p>
              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#DECBB7] transition-colors font-medium"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6B60]">
          <div>
            © {new Date().getFullYear()} Thaís Cardoso (Thais Machado) · Todos os direitos reservados.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#A89A8C] hover:text-[#DECBB7] transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
