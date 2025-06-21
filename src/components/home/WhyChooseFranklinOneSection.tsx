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
 
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Tech pattern background */}
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
        {/* Main headline */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/30 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3 animate-pulse"></div>
            <span className="text-white text-sm font-medium">SECURITY LEADERSHIP</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent">
              Why Choose FranklinOne?
            </span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-white mx-auto"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </div>

        {/* Value propositions */}
        <div className="space-y-20">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/30 mr-4">
                    <span className="text-[var(--color-primary)] text-xl font-bold">
                      {prop.number}
                    </span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-[var(--color-primary)] to-transparent flex-1"></div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {prop.tagline}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {prop.description}
                </p>

                {/* Security features with improved readability */}
                <div className="flex flex-wrap gap-2">
                  {index === 0 && (
                    <>
                      <span 
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold shadow-lg"
                        style={{
                          WebkitTextStroke: '0.3px rgba(0,0,0,0.5)',
                          textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        Threat Prevention
                      </span>
                      <span 
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold shadow-lg"
                        style={{
                          WebkitTextStroke: '0.3px rgba(0,0,0,0.5)',
                          textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        Risk Management
                      </span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span 
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold shadow-lg"
                        style={{
                          WebkitTextStroke: '0.3px rgba(0,0,0,0.5)',
                          textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        Global Vendors
                      </span>
                      <span 
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold shadow-lg"
                        style={{
                          WebkitTextStroke: '0.3px rgba(0,0,0,0.5)',
                          textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        Scalable Solutions
                      </span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span 
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold shadow-lg"
                        style={{
                          WebkitTextStroke: '0.3px rgba(0,0,0,0.5)',
                          textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        Enterprise-Grade
                      </span>
                      <span 
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-sm text-white font-semibold shadow-lg"
                        style={{
                          WebkitTextStroke: '0.3px rgba(0,0,0,0.5)',
                          textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        Proven Reliability
                      </span>
                    </>
                  )}
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative">
                  <div className="h-80 flex items-center justify-center">
                    {/* Tech visualization */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Shield Image for first section, Lottie Animation for others */}
                      {index === 0 ? (
                        <div className="w-full h-full z-10 flex items-center justify-center"> 
                          <img 
                            src="https://i.pinimg.com/736x/b3/be/3a/b3be3a3d7253c5e0d796574cae5a3391.jpg" 
                            alt="Security Protection"
                            className="max-w-full max-h-full object-contain rounded-lg"
                          />
                        </div>
                      ) : index === 1 ? (
                        <div className="w-full h-full z-10 flex items-center justify-center">
                          <img 
                            src="https://i.pinimg.com/736x/af/d8/f3/afd8f33d32fc367949575dfccf2014c6.jpg" 
                            alt="Strategic Partnerships"
                            className="max-w-full max-h-full object-contain rounded-lg"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full z-10 flex items-center justify-center">
                          <img 
                            src="https://i.pinimg.com/736x/40/ab/f8/40abf88d1f9b4ee94b05a677d0224d48.jpg" 
                            alt="Global Solutions"
                            className="max-w-full max-h-full object-contain rounded-lg"
                          />
                        </div>
                      )}
                      
                      {/* Animated rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-32 h-32 border-2 border-[var(--color-primary)]/30 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                          className="absolute w-24 h-24 border border-[var(--color-primary)]/20 rounded-full"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                      
                      {/* Corner accents */}
                      <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-[var(--color-primary)] opacity-60"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-[var(--color-primary)] opacity-60"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-[var(--color-primary)] opacity-60"></div>
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-[var(--color-primary)] opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFranklinOneSection; 