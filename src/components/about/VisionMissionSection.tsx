"use client";
import { motion } from 'framer-motion';

const VisionMissionSection = () => {
  // Animation variants for better organization
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };



  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 0.8, 1],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <motion.span 
              className="text-purple-300 font-semibold tracking-wider"
              whileHover={{ 
                scale: 1.1,
                letterSpacing: "0.2em",
                transition: { duration: 0.3 }
              }}
            >
              FOUNDATION
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Main Content - Split Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Vision Section */}
            <motion.div
              variants={slideInFromLeft}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative lg:pr-16"
            >
              {/* Vision indicator */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-center gap-4 mb-8"
              >
                <motion.div
                  whileHover={{ 
                    rotate: 360, 
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                  }}
                  animate={pulseAnimation}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25 cursor-pointer"
                >
                  <motion.svg 
                    className="w-8 h-8 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    whileHover={{ scale: 1.2 }}
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </motion.svg>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <motion.h2 
                    className="text-2xl font-bold text-white"
                    whileHover={{ color: "#c084fc" }}
                  >
                    VISION
                  </motion.h2>
                                     <p className="text-purple-300 text-sm">
                     Where We&apos;re Heading
                   </p>
                </motion.div>
              </motion.div>

              {/* Vision content */}
              <div className="space-y-8">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <motion.blockquote 
                    className="text-3xl lg:text-4xl font-bold text-white leading-tight"
                    whileHover={{ color: "#c084fc" }}
                    transition={{ duration: 0.3 }}
                  >
                    &quot;Truly partner-centric company.&quot;
                  </motion.blockquote>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="space-y-4"
                >
                  <motion.p 
                    className="text-lg text-gray-300 leading-relaxed"
                    whileHover={{ color: "#e2e8f0" }}
                  >
                    We envision a future where partnerships transcend traditional boundaries, 
                    creating ecosystems of mutual growth and innovation.
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-3 pt-4"
                    variants={containerVariants}
                  >
                    <motion.span 
                      className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm cursor-pointer"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(147, 51, 234, 0.3)",
                        borderColor: "rgba(196, 181, 253, 0.5)"
                      }}
                      variants={fadeInUp}
                    >
                      Partnership Excellence
                    </motion.span>
                    <motion.span 
                      className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm cursor-pointer"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(147, 51, 234, 0.3)",
                        borderColor: "rgba(196, 181, 253, 0.5)"
                      }}
                      variants={fadeInUp}
                    >
                      Strategic Growth
                    </motion.span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Vision decorative elements */}
              <motion.div
                initial={{ scale: 0, rotate: -45, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-8 -right-8 w-32 h-32 border-2 border-purple-400/20 rounded-full"
              />
            </motion.div>

            {/* Mission Section */}
            <motion.div
              variants={slideInFromRight}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative lg:pl-16 lg:pt-32"
            >
              {/* Mission indicator */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-center gap-4 mb-8 justify-end lg:justify-start"
              >
                <motion.div 
                  className="order-2 lg:order-1"
                  variants={fadeInUp}
                >
                  <motion.h2 
                    className="text-2xl font-bold text-white text-right lg:text-left"
                    whileHover={{ color: "#60a5fa" }}
                  >
                    MISSION
                  </motion.h2>
                                     <p className="text-blue-300 text-sm text-right lg:text-left">
                     What We Do
                   </p>
                </motion.div>
                <motion.div
                  whileHover={{ 
                    rotate: -360, 
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                  }}
                  animate={pulseAnimation}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25 order-1 lg:order-2 cursor-pointer"
                >
                  <motion.svg 
                    className="w-8 h-8 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    whileHover={{ scale: 1.2 }}
                  >
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </motion.svg>
                </motion.div>
              </motion.div>

              {/* Mission content */}
              <div className="space-y-8">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <motion.blockquote 
                    className="text-3xl lg:text-4xl font-bold text-white leading-tight text-right lg:text-left"
                    whileHover={{ color: "#60a5fa" }}
                    transition={{ duration: 0.3 }}
                  >
                    &quot;Be the extended hand of the manufacturer serving wisely to each-and-every customer.&quot;
                  </motion.blockquote>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="space-y-4"
                >
                  <motion.p 
                    className="text-lg text-gray-300 leading-relaxed text-right lg:text-left"
                    whileHover={{ color: "#e2e8f0" }}
                  >
                    We bridge gaps, connect possibilities, and deliver wisdom-driven solutions 
                    that serve every customer with precision and care.
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-3 pt-4 justify-end lg:justify-start"
                    variants={containerVariants}
                  >
                    <motion.span 
                      className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm cursor-pointer"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                        borderColor: "rgba(147, 197, 253, 0.5)"
                      }}
                      variants={fadeInUp}
                    >
                      Customer First
                    </motion.span>
                    <motion.span 
                      className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm cursor-pointer"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                        borderColor: "rgba(147, 197, 253, 0.5)"
                      }}
                      variants={fadeInUp}
                    >
                      Wise Service
                    </motion.span>
                    <motion.span 
                      className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm cursor-pointer"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                        borderColor: "rgba(147, 197, 253, 0.5)"
                      }}
                      variants={fadeInUp}
                    >
                      Excellence
                    </motion.span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Mission decorative elements */}
              <motion.div
                initial={{ scale: 0, rotate: 45, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.7,
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-blue-400/20 rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: 0.3
          }}
          className="text-center mt-32"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-purple-300 via-white to-blue-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Driving Success Through Strategic Partnership
              </motion.span>
            </motion.h3>
            
            <motion.div 
              className="flex items-center justify-center gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-4 h-4 border-2 border-purple-400/50 rounded-full"
              />
              <motion.span 
                className="text-gray-300 font-medium tracking-wider"
                whileHover={{ 
                  scale: 1.1,
                  color: "#e2e8f0",
                  letterSpacing: "0.2em"
                }}
              >
                WHERE VISION MEETS MISSION
              </motion.span>
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.5, 1]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-4 h-4 border-2 border-blue-400/50 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;