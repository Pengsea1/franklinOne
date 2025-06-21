"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CertifiedIcon, 
  ArchitectureIcon, 
  ImplementationIcon, 
  SupportIcon, 
  TrainingIcon, 
  GrowthIcon 
} from '@/components/icons';

// Feature animation variants
const featureVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.5,
    }
  })
};

// Service features data
const services = [
  {
    icon: CertifiedIcon,
    title: "Certified Engineers",
    description: "Our team of certified engineers ensures expert implementation of security solutions"
  },
  {
    icon: ArchitectureIcon,
    title: "Provide POC & Architecture Design",
    description: "We deliver proof of concept demonstrations and custom architecture design services"
  },
  {
    icon: ImplementationIcon,
    title: "Provide Installation, Implementation, Migration",
    description: "Complete services for installation, implementation, migration, commissioning and reconfiguration"
  },
  {
    icon: SupportIcon,
    title: "24/7 Technical Service Support",
    description: "Around-the-clock technical support and advanced hardware replacement"
  },
  {
    icon: TrainingIcon,
    title: "Certification and Customized Technical Training",
    description: "Professional certification courses and customized training programs"
  },
  {
    icon: GrowthIcon,
    title: "Regional Growth Opportunity",
    description: "Leverage FranklinOne's regional coverage for business expansion opportunities"
  }
];

const WhyFranklinoneSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-white">
      {/* Background network pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[url('/network-bg.svg')] bg-repeat"></div>
      </div>
      
      {/* Wave background pattern */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute inset-0 bg-[url('/wave-bg.svg')] bg-repeat-x bg-bottom"></div>
      </div>
      
      {/* Add subtle radial gradient */}
      <div className="absolute inset-0 opacity-15 z-0 bg-radial-gradient"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">WHY FRANKLINONE</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] mx-auto rounded-full mb-6"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={featureVariant}
            >
              <div className="mb-6 p-3 rounded-full bg-white shadow-sm border border-gray-100">
                <div className="w-24 h-24 relative flex items-center justify-center">
                  {React.createElement(service.icon, {
                    color: "var(--color-primary)",
                    width: 96,
                    height: 96
                  })}
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href="/what-we-do"
            className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-medium py-3 px-10 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            FIND OUT MORE
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyFranklinoneSection;