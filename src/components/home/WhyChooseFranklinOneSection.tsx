"use client";
import { motion } from 'framer-motion';

const WhyChooseFranklinOneSection = () => {
  const valueProps = [
    {
      tagline: "Prevent the breach. Preserve the business.",
      description: "As a trusted IT security distribution partner, we empower enterprise to take control of risk before it turns into real-world impact.",
      number: "01"
    },
    {
      tagline: "Secure solutions. Strategic partnerships.",
      description: "We connect businesses with leading cybersecurity technologies, backed by global vendors and tailored to enterprise demands. Our solutions are built to scale, adapt, and protect across evolving threat landscapes.",
      number: "02"
    },
    {
      tagline: "Your Link to World-Class Cybersecurity.",
      description: "We distribute advanced security technologies from globally recognized vendors-ensuring our clients have access to reliable, scalable solutions designed for complex business environments.",
      number: "03"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };
 
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(116, 63, 119, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(116, 63, 119, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              backgroundColor: '#743f77',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.2, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced main headline */}
        <motion.div 
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/30 mb-8"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(116, 63, 119, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
            />
            <span className="text-white text-sm font-medium">SECURITY LEADERSHIP</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            <motion.span 
              className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Why Choose FranklinOne?
            </motion.span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-white mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        {/* Enhanced value propositions */}
        <div className="space-y-20">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div 
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Enhanced number and line */}
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div 
                    className="flex items-center justify-center w-12 h-12 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/30 mr-4"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(116, 63, 119, 0.5)",
                      borderColor: "rgba(116, 63, 119, 0.8)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span 
                      className="text-[var(--color-primary)] text-xl font-bold"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        delay: 0.6 
                      }}
                    >
                      {prop.number}
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    className="h-px bg-gradient-to-r from-[var(--color-primary)] to-transparent flex-1"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{ originX: 0 }}
                  />
                </motion.div>
                
                {/* Enhanced title */}
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {prop.tagline}
                </motion.h3>
                
                {/* Enhanced description */}
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  {prop.description}
                </motion.p>

                {/* Enhanced security features tags */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {index === 0 && (
                    <>
                      <motion.span 
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold shadow-lg"
                        variants={tagVariants}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(116, 63, 119, 0.6)",
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          WebkitTextStroke: '0.3px rgba(0,0,0,0.5)',
                          textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        Threat Prevention
                      </motion.span>
                      <motion.span 
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold shadow-lg"
                        variants={tagVariants}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(116, 63, 119, 0.6)",
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          WebkitTextStroke: '0.3px rgba(0,0,0,0.5)',
                          textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        Risk Management
                      </motion.span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <motion.span 
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold shadow-lg"
                        variants={tagVariants}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(116, 63, 119, 0.6)",
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          WebkitTextStroke: '0.3px rgba(0,0,0,0.5)',
                          textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        Global Vendors
                      </motion.span>
                      <motion.span 
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold shadow-lg"
                        variants={tagVariants}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(116, 63, 119, 0.6)",
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          WebkitTextStroke: '0.3px rgba(0,0,0,0.5)',
                          textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        Scalable Solutions
                      </motion.span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <motion.span 
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold shadow-lg"
                        variants={tagVariants}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(116, 63, 119, 0.6)",
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          WebkitTextStroke: '0.3px rgba(0,0,0,0.5)',
                          textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        Enterprise-Grade
                      </motion.span>
                      <motion.span 
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold shadow-lg"
                        variants={tagVariants}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(116, 63, 119, 0.6)",
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          WebkitTextStroke: '0.3px rgba(0,0,0,0.5)',
                          textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        Proven Reliability
                      </motion.span>
                    </>
                  )}
                </motion.div>
              </motion.div>
              
              {/* Enhanced image section */}
              <motion.div 
                className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-80 flex items-center justify-center">
                    {/* Enhanced tech visualization */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Enhanced images with animations */}
                      {index === 0 ? (
                        <motion.div 
                          className="w-full h-full z-10 flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          whileHover={{ scale: 1.05 }}
                        > 
                          <motion.img 
                            src="https://i.pinimg.com/736x/b3/be/3a/b3be3a3d7253c5e0d796574cae5a3391.jpg" 
                            alt="Security Protection"
                            className="max-w-full max-h-full object-contain rounded-lg"
                            initial={{ filter: "brightness(0.8)" }}
                            whileHover={{ filter: "brightness(1.1)" }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      ) : index === 1 ? (
                        <motion.div 
                          className="w-full h-full z-10 flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.img 
                            src="https://i.pinimg.com/736x/af/d8/f3/afd8f33d32fc367949575dfccf2014c6.jpg" 
                            alt="Strategic Partnerships"
                            className="max-w-full max-h-full object-contain rounded-lg"
                            initial={{ filter: "brightness(0.8)" }}
                            whileHover={{ filter: "brightness(1.1)" }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="w-full h-full z-10 flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.img 
                            src="https://i.pinimg.com/736x/40/ab/f8/40abf88d1f9b4ee94b05a677d0224d48.jpg" 
                            alt="Global Solutions"
                            className="max-w-full max-h-full object-contain rounded-lg"
                            initial={{ filter: "brightness(0.8)" }}
                            whileHover={{ filter: "brightness(1.1)" }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      )}
                      
                      {/* Enhanced animated rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-32 h-32 border-2 border-[var(--color-primary)]/30 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          whileHover={{ 
                            borderColor: "rgba(116, 63, 119, 0.6)",
                            boxShadow: "0 0 20px rgba(116, 63, 119, 0.3)"
                          }}
                        />
                        <motion.div
                          className="absolute w-24 h-24 border border-[var(--color-primary)]/20 rounded-full"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          whileHover={{ 
                            borderColor: "rgba(116, 63, 119, 0.4)",
                            scale: 1.1
                          }}
                        />
                        <motion.div
                          className="absolute w-16 h-16 border border-[var(--color-primary)]/10 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                      
                      {/* Enhanced corner accents */}
                      <motion.div 
                        className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-[var(--color-primary)] opacity-60"
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      />
                      <motion.div 
                        className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-[var(--color-primary)] opacity-60"
                        initial={{ scale: 0, rotate: 45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                      />
                      <motion.div 
                        className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-[var(--color-primary)] opacity-60"
                        initial={{ scale: 0, rotate: 45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                      />
                      <motion.div 
                        className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-[var(--color-primary)] opacity-60"
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFranklinOneSection; 