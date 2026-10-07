import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { SpecialtiesSection } from '@/components/SpecialtiesSection';
import { ClinicExperienceSection } from '@/components/ClinicExperienceSection';
import { ParallaxComponent } from '@/components/ui/parallax-scrolling';
import { ResultsGallerySection } from '@/components/ResultsGallerySection';
import { AboutSpecialistSection } from '@/components/AboutSpecialistSection';
import { LocationsSection } from '@/components/LocationsSection';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsAppCTA } from '@/components/FloatingWhatsAppCTA';

export function App() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#2C2523] selection:bg-[#DECBB7] selection:text-[#1F1916]">
      {/* 1. Transparent Floating Header */}
      <Navbar />

      {/* 2. Hero Section - Inspired by Image 2 (Warm Beige/Sand instead of green, luxury glow) */}
      <HeroSection />

      {/* 3. Specialties & Procedures - Inspired by Image 1 (Editorial Cards & Numbering) */}
      <SpecialtiesSection />

      {/* 4. Clinic Experience & Philosophy - Inspired by Image 1 (Two-Column Architecture Layout) */}
      <ClinicExperienceSection />

      {/* 5. Parallax Experience - Requested GSAP & Lenis component */}
      <ParallaxComponent
        title="Harmonia, Ciência & Autocuidado"
        subtitle="Thaís Cardoso · Estética Facial Personalizada"
      />

      {/* 6. Real Results & Instagram - Inspired by Image 1 (Photo Grid & @thais_cardosoestetica) */}
      <ResultsGallerySection />

      {/* 7. About the Specialist - Thaís Cardoso presentation */}
      <AboutSpecialistSection />

      {/* 8. Locations & Schedule - Curitiba (Centro) & Piraquara */}
      <LocationsSection />

      {/* 9. Frequently Asked Questions */}
      <FaqSection />

      {/* 10. Editorial Footer */}
      <Footer />

      {/* 11. High Conversion Floating WhatsApp Button */}
      <FloatingWhatsAppCTA />
    </div>
  );
}

export default App;
