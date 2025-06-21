"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlobeIcon, CalendarIcon, ShieldIcon, AwardIcon } from '@/components/icons';

// Feature card animation variant
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

const AboutSection = () => {
    return (
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-white">
        {/* Background network pattern */}
        <div className="absolute inset-0 opacity-15 z-0">
          <div className="absolute inset-0 bg-[url('/network-bg.svg')] bg-repeat"></div>
        </div>
        
        {/* Dot pattern background */}
        <div className="absolute inset-0 opacity-40 z-0">
          <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-repeat"></div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#f15a22]/5 to-[#f15a22]/10 rounded-bl-full -mt-10 -mr-10 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#743f77]/5 to-[#743f77]/10 rounded-tr-full -mb-10 -ml-10 z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">ABOUT FRANKLINONE</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#f15a22] to-[#743f77] mx-auto rounded-full mb-6"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A leading provider of integrated security, networking solutions and value added services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Feature 1 */}
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={featureVariant}
            >
              <div className="mb-6 p-4 rounded-full bg-white shadow-sm border border-gray-100">
                <CalendarIcon 
                  color="var(--color-primary"
                  width={120} 
                  height={120} 
                />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Established as Value Added Distributor (VAD) since July 2000.
              </h3>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={featureVariant}
            >
              <div className="mb-6 p-4 rounded-full bg-white shadow-sm border border-gray-100">
                <GlobeIcon 
                  color="var(--color-primary)"
                  width={120} 
                  height={120} 
                />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Regional presence in Singapore, Australia, India, Indonesia, Cambodia, Malaysia, Myanmar, Philippines, Thailand and Vietnam.
              </h3>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={featureVariant}
            >
              <div className="mb-6 p-4 rounded-full bg-white shadow-sm border border-gray-100">
                <ShieldIcon 
                  color="var(--color-primary)"
                  width={120} 
                  height={120} 
                />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Selective of our products & focus on best-of-breed solutions
              </h3>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={featureVariant}
            >
              <div className="mb-6 p-4 rounded-full bg-white shadow-sm border border-gray-100">
                <AwardIcon 
                  color="var(--color-primary)"
                  width={120} 
                  height={120} 
                />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Leading VAD for Network and IT Security Solutions and service in the region.
              </h3>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link 
              href="/about" 
              className="inline-block bg-[var(--color-primary)] hover:bg-[#e04d15] text-white font-medium py-3 px-10 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              FIND OUT MORE
            </Link>
          </motion.div>
        </div>
      </section>
    );
};

export default AboutSection;