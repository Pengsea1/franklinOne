"use client";

import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import WhyChooseFranklinOneSection from '@/components/home/WhyChooseFranklinOneSection';
import StatsSection from '@/components/home/StatsSection';
import SpecializationsSection from '@/components/home/SpecializationsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  // Animation variants for different section types
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - No animation as it's the first thing users see */}
      <HeroSection />
      
      {/* Stats Section - Fade in from bottom */}
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        transition={fadeInUp.transition}
        viewport={{ once: true, amount: 0.3 }}
      >
        <StatsSection />
      </motion.div>
      
      {/* Why Choose Section - Fade in from left */}
      <motion.div
        initial={fadeInLeft.initial}
        whileInView={fadeInLeft.animate}
        transition={{ ...fadeInLeft.transition, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <WhyChooseFranklinOneSection />
      </motion.div>
      
      {/* Specializations Section - Scale in */}
      <motion.div
        initial={scaleIn.initial}
        whileInView={scaleIn.animate}
        transition={{ ...scaleIn.transition, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SpecializationsSection />
      </motion.div>
      
      {/* CTA Section - Fade in from right */}
      <motion.div
        initial={fadeInRight.initial}
        whileInView={fadeInRight.animate}
        transition={{ ...fadeInRight.transition, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <CTASection />
      </motion.div>
    </div>
  );
}
