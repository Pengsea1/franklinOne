"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactUsSection = () => {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cityscape-sunset.svg" 
          alt="New York City Skyline"
          fill
          quality={100}
          priority
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
        {/* Orange sunset Gradient Overlay like in the reference image */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f15a22]/5 to-[#743f77]/5"></div>
      </div>
      
      {/* Subtle Darkening for better text visibility */}
      <div className="absolute inset-0 bg-black/15 z-5"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <motion.h2 
          className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-16 text-center text-white drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          How we can help you?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link 
            href="/contact-us" 
            className="inline-block bg-white hover:bg-gray-50 text-[#f15a22] font-medium py-3 px-10 rounded-md hover:shadow-lg transition-all duration-300"
          >
            CONTACT US
          </Link>
        </motion.div>
      </div>
      
      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f15a22] to-[#743f77] z-20"></div>
    </section>
  );
};

export default ContactUsSection;