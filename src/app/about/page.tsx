import HeroSection from '@/components/about/HeroSection';
import VisionMissionSection from '@/components/about/VisionMissionSection';

export const metadata = {
  title: 'About Us - FranklinOne',
  description: 'Learn about FranklinOne, our history, mission, and commitment to cybersecurity excellence.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section - Introduction */}
      <HeroSection />
      
      {/* 2. Stats Section - Our Numbers */}
      {/* <AboutStatsSection /> */}
      
      {/* 3. Vision & Mission - Our Purpose & Direction */}
      <VisionMissionSection />
      
      {/* 4. Company Story - Our Journey */}
      {/* <CompanyStorySection /> */}
      
      {/* 5. Call to Action - Next Steps */}
      {/* <AboutCTASection /> */}
    </div>
  );
}