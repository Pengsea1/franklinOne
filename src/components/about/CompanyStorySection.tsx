"use client";
import { motion } from 'framer-motion';

const CompanyStorySection = () => {
  const storyPoints = [
    {
      year: "2000",
      title: "Founded with Vision",
      description: "Our company was established by a team of highly experienced professionals who have excelled in the distribution business for years, deeply understanding the core values of being a true distributor.",
      icon: "🎯",
      color: "from-[var(--color-primary)] to-purple-600"
    },
    {
      year: "2005-2010",
      title: "Building Excellence",
      description: "We built a dedicated team to provide comprehensive support, including solution consultation and after-sales service, ensuring that our customers receive the best possible experience.",
      icon: "🏗️",
      color: "from-blue-500 to-indigo-600"
    },
    {
      year: "2010-2020",
      title: "Regional Growth",
      description: "Expanded our operations across Asia-Pacific, establishing strong partnerships and building trust through unquestionable business principles and partner-centric approach.",
      icon: "🌐",
      color: "from-green-500 to-teal-600"
    },
    {
      year: "2020+",
      title: "Future Forward",
      description: "Committed to building a long-lasting organization that generates sustainable benefits for all stakeholders, while maintaining our role as a true partner ecosystem leader.",
      icon: "🚀",
      color: "from-orange-500 to-red-600"
    }
  ];

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
        {[...Array(20)].map((_, i) => (
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
            <span className="text-white text-sm font-medium">OUR JOURNEY</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent">
              Our Story of Excellence
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From humble beginnings to regional leadership in cybersecurity distribution
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  {/* Timeline indicator */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${point.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {point.icon}
                    </div>
                    {index < storyPoints.length - 1 && (
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-[var(--color-primary)] to-transparent opacity-40"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-xl p-6 border border-[var(--color-primary)]/20 group-hover:border-[var(--color-primary)]/40 transition-all duration-500">
                    <div className="flex items-center mb-3">
                      <span className="text-[var(--color-primary)] font-bold text-sm bg-[var(--color-primary)]/20 px-3 py-1 rounded-full">
                        {point.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[var(--color-primary)]/20 via-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-primary)]/20 shadow-xl overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[var(--color-primary)] opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[var(--color-primary)] opacity-40"></div>
              
              <div className="text-center">
                {/* Custom Company Growth Animation */}
                <div className="flex items-center justify-center h-[400px]">
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {/* Central Growth Hub */}
                    <motion.div
                      className="w-40 h-40 border-4 border-[var(--color-primary)] rounded-full flex items-center justify-center relative"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      {/* Inner Core */}
                      <motion.div
                        className="w-28 h-28 bg-gradient-to-br from-[var(--color-primary)] to-purple-600 rounded-full flex items-center justify-center relative"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {/* Growth Chart Icon */}
                        <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        
                        {/* Pulse Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-white opacity-30"
                          animate={{ scale: [1, 1.6, 2.2], opacity: [0.3, 0.1, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      {/* Timeline Nodes */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-6 h-6 bg-[var(--color-primary)] rounded-full border-2 border-white"
                          style={{
                            top: '50%',
                            left: '50%',
                            transformOrigin: '0 0',
                          }}
                          animate={{
                            rotate: [0, 360],
                            x: [-3, -3],
                            y: [-3, -3],
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 1,
                          }}
                          initial={{
                            rotate: i * 45,
                            x: 85,
                            y: -3,
                          }}
                        >
                          <motion.div
                            className="w-full h-full bg-[var(--color-primary)] rounded-full flex items-center justify-center"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
                          >
                            <span className="text-white text-xs font-bold">{2000 + i * 3}</span>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* Floating Timeline Icons */}
                    {[
                      { icon: '🎯', x: -80, y: -60, delay: 0 },
                      { icon: '📈', x: 80, y: -60, delay: 1 },
                      { icon: '🌟', x: -80, y: 60, delay: 2 },
                      { icon: '🚀', x: 80, y: 60, delay: 3 },
                      { icon: '💡', x: 0, y: -100, delay: 4 },
                      { icon: '🏆', x: 0, y: 100, delay: 5 },
                    ].map((item, i) => (
                      <motion.div
                        key={`timeline-icon-${i}`}
                        className="absolute text-3xl"
                        style={{ x: item.x, y: item.y }}
                        animate={{
                          y: [item.y, item.y - 15, item.y],
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: item.delay,
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                      >
                        {item.icon}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Building the Future</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every milestone in our journey represents our commitment to excellence, innovation, and partnership in the cybersecurity landscape.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Core Principles</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Committed to unquestionable business principles, we strictly conduct our transactions through resellers and never engage directly with end customers. We firmly believe in the partner ecosystem and strive to be a role model in the country and the region.
              </p>
              
              <div className="flex flex-wrap gap-3">
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
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our shareholders comprise individuals with a strong financial background who share a unified vision—building a long-lasting organization that generates sustainable benefits for all stakeholders.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStorySection; 