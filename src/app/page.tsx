import HeroSection from '@/components/home/HeroSection';
import WhyChooseFranklinOneSection from '@/components/home/WhyChooseFranklinOneSection';
import StatsSection from '@/components/home/StatsSection';
import SpecializationsSection from '@/components/home/SpecializationsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <WhyChooseFranklinOneSection />
      <SpecializationsSection />
      <CTASection />
    </div>
  );
}
