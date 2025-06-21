"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

// Sample partner logos
const partners = [
  { name: 'Cisco', logo: '/logos/cisco.svg' },
  { name: 'Fortinet', logo: '/logos/fortinet.svg' },
  { name: 'Palo Alto Networks', logo: '/logos/paloalto.svg' },
  { name: 'Symantec', logo: '/logos/symantec.svg' },
  { name: 'Checkpoint', logo: '/logos/checkpoint.svg' },
  { name: 'F5 Networks', logo: '/logos/f5.svg' },
  { name: 'Juniper Networks', logo: '/logos/juniper.svg' },
  { name: 'Trend Micro', logo: '/logos/trendmicro.svg' },
];

interface Partner {
  name: string;
  logo?: string;
}

const PartnersSection = () => {
  // Placeholder image function
  const placeholderImage = (partner: Partner) => (
    <div className="h-20 bg-white flex items-center justify-center p-4">
      <div className="text-gray-400 font-medium">{partner.name}</div>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR PARTNERS
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-8"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We partner with leading technology vendors to deliver the best solutions to our clients.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg p-6 h-24 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={150}
                      height={60}
                      style={{ objectFit: 'contain' }}
                    />
                  ) : placeholderImage(partner)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;