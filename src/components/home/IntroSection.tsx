"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ABOUT OUR COMPANY
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-8"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A leading provider of integrated security, networking solutions and value added services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Established as a Value Added Distributor (VAD) since 2000, FranklinOne has grown to become a leading provider of cybersecurity and networking solutions in the region.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With our regional presence spanning across multiple countries including Singapore, Australia, India, Indonesia, Cambodia, Malaysia, Philippines, Thailand and Vietnam, we offer unparalleled expertise and support to our clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide best-of-breed solutions to protect and enhance our clients&apos; digital infrastructure in an increasingly complex threat landscape.
            </p>
          </motion.div>
          
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="https://www.franklinone.com/assets/img/men.png"
              alt="FranklinOne Office"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;