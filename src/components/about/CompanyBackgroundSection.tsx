"use client";
import { motion } from 'framer-motion';

const CompanyBackgroundSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Cyber grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(116, 63, 119, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(116, 63, 119, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--color-primary)] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/30 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3 animate-pulse"></div>
            <span className="text-white text-sm font-medium">COMPANY FOUNDATION</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent">
              Company Background
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-white mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Content with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-primary)]/20 shadow-xl overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[var(--color-primary)] opacity-40"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[var(--color-primary)] opacity-40"></div>
                
                <div className="relative h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/20 to-gray-800/50">
                  {/* Placeholder for company image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-[var(--color-primary)]/30 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-white text-sm">Our Professional Team</p>
                      <p className="text-gray-400 text-xs mt-1">Excellence in Cybersecurity Distribution</p>
                    </div>
                  </div>
                  
                  {/* You can replace this with an actual image */}
                  {/* <Image
                    src="/images/about/team-photo.jpg"
                    alt="FranklinOne Team"
                    fill
                    className="object-cover"
                  /> */}
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-white leading-relaxed">
                Our company was established by a team of highly experienced professionals who have excelled in the distribution business for years, deeply understanding the core values of being a true distributor.
              </p>
              
              <p className="text-lg text-white leading-relaxed">
                We have built a dedicated team to provide comprehensive support, including solution consultation and after-sales service, ensuring that our customers receive the best possible experience.
              </p>

              {/* Key features */}
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold">
                  Experienced Team
                </span>
                <span className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold">
                  Comprehensive Support
                </span>
              </div>
            </motion.div>
          </div>

          {/* Additional Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-2xl p-10 border border-[var(--color-primary)]/20 shadow-xl relative overflow-hidden"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[var(--color-primary)] opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[var(--color-primary)] opacity-40"></div>
            
            {/* Security shield icon */}
            <div className="absolute top-4 right-4 w-8 h-8 text-[var(--color-primary)] opacity-20">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-white leading-relaxed">
                Committed to unquestionable business principles, we strictly conduct our transactions through resellers and never engage directly with end customers. We firmly believe in the partner ecosystem and strive to be a role model in the country and the region.
              </p>
              
              <p className="text-lg text-white leading-relaxed">
                Our shareholders comprise individuals with a strong financial background who share a unified vision— building a long-lasting organization that generates sustainable benefits for all stakeholders.
              </p>
            </div>

            {/* Security features tags */}
            <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-[var(--color-primary)]/20">
              <span className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold">
                Partner-Centric
              </span>
              <span className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold">
                Proven Excellence
              </span>
              <span className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold">
                Regional Leadership
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBackgroundSection; 