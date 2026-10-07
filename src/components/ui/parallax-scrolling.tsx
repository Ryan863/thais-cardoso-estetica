import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

interface ParallaxComponentProps {
  title?: string;
  subtitle?: string;
  layer1Url?: string;
  layer2Url?: string;
  layer4Url?: string;
}

export function ParallaxComponent({
  title = "Pele Radiante & Cuidado Exclusivo",
  subtitle = "Thaís Cardoso · Estética Facial de Alta Precisão",
  layer1Url = "https://images.unsplash.com/photo-1512290900672-1f41634b3e6c?auto=format&fit=crop&w=1920&q=85",
  layer2Url = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=85",
  layer4Url = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=85"
}: ParallaxComponentProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0
        }
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up GSAP and ScrollTrigger instances
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) {
        gsap.killTweensOf(triggerElement);
      }
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="parallax relative overflow-hidden bg-[#1f1a17] text-[#f7f4ee]" ref={parallaxRef}>
      <section className="parallax__header relative h-[85vh] min-h-[560px] w-full overflow-hidden flex items-center justify-center">
        <div className="parallax__visuals absolute inset-0 w-full h-full">
          <div className="parallax__black-line-overflow absolute inset-0 bg-[#1a1614]/30 z-10 pointer-events-none"></div>
          <div data-parallax-layers className="parallax__layers relative w-full h-full">
            {/* Background Layer 1 */}
            <img
              src={layer1Url}
              loading="eager"
              data-parallax-layer="1"
              alt="Estética e Tratamentos"
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover opacity-50 brightness-75 scale-105"
            />
            {/* Mid Layer 2 */}
            <img
              src={layer2Url}
              loading="eager"
              data-parallax-layer="2"
              alt="Pele Saudável e Textura"
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen scale-110"
            />
            {/* Typography Layer 3 */}
            <div data-parallax-layer="3" className="parallax__layer-title absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6">
              <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#d4af7a] font-medium mb-3">
                {subtitle}
              </span>
              <h2 className="parallax__title font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#f9f7f2] max-w-4xl drop-shadow-md">
                {title}
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-[1px] w-12 bg-[#d4af7a]/60"></div>
                <span className="text-xs tracking-[0.25em] uppercase text-[#e2d7c5]/80">Curitiba · Piraquara</span>
                <div className="h-[1px] w-12 bg-[#d4af7a]/60"></div>
              </div>
            </div>
            {/* Foreground Accent Layer 4 */}
            <img
              src={layer4Url}
              loading="eager"
              data-parallax-layer="4"
              alt="Ambiente Relaxante"
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-soft-light"
            />
          </div>
          <div className="parallax__fade absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1b1714] to-transparent pointer-events-none"></div>
        </div>
      </section>
      <section className="parallax__content relative py-8 px-6 flex justify-center items-center bg-[#1b1714] border-t border-[#3b322b]">
        <div className="flex items-center gap-4 text-[#c7b9a5] text-xs uppercase tracking-[0.2em]">
          <span>Saúde Cutânea</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c39e6a]"></span>
          <span>Tecnologia Avançada</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c39e6a]"></span>
          <span>Atendimento 100% Exclusivo</span>
        </div>
      </section>
    </div>
  );
}

export default ParallaxComponent;
