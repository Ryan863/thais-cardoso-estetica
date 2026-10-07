import { ParallaxComponent } from '@/components/ui/parallax-scrolling';

export default function ParallaxDemo() {
  return (
    <div className="w-full">
      <ParallaxComponent />
      <div className="osmo-credits py-6 text-center bg-[#1b1714] text-[#a89b88] text-xs">
        <p className="osmo-credits__p">
          Editorial Experience · Thaís Cardoso Estética Facial
        </p>
      </div>
    </div>
  );
}
