"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-[var(--color-primary)]/20 to-black relative overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(116, 63, 119, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(116, 63, 119, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Animated cybersecurity elements */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[var(--color-primary)] opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          >
            {i % 5 === 0 && <div className="w-6 h-6 border-2 border-current rounded-full" />}
            {i % 5 === 1 && <div className="w-4 h-4 border-2 border-current transform rotate-45" />}
            {i % 5 === 2 && <div className="w-3 h-6 border-2 border-current rounded-sm" />}
            {i % 5 === 3 && <div className="w-6 h-2 bg-current rounded-full" />}
            {i % 5 === 4 && <div className="w-5 h-5 border border-current rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-current rounded-full"></div></div>}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3 animate-pulse"></div>
              <span className="text-white text-sm font-medium">JOIN OUR NETWORK</span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent">
                Partner with Excellence
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ready to join the FranklinOne family? Discover how our partner-centric approach, proven expertise, and comprehensive support can elevate your cybersecurity business to new heights.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link 
                href="/contact"
                className="group bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-2xl flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10">Become a Partner</span>
                <svg className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link 
                href="/solutions"
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition duration-300 flex items-center justify-center"
              >
                <span>Explore Solutions</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-400">Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">9</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Animation Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[var(--color-primary)]/20 via-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-primary)]/30 shadow-2xl overflow-hidden relative">
              {/* Enhanced corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-[var(--color-primary)] opacity-60 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-[var(--color-primary)] opacity-60 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-[var(--color-primary)] opacity-60 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-[var(--color-primary)] opacity-60 rounded-br-lg"></div>

              {/* Animated background elements */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute top-1/4 left-1/4 w-32 h-32 border border-[var(--color-primary)]/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-[var(--color-primary)]/15 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              <div className="relative z-10 text-center">
                {/* Custom Partnership Network Animation */}
                <div className="flex items-center justify-center h-[500px]">
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {/* Central Partnership Hub */}
                    <motion.div
                      className="w-40 h-40 border-4 border-[var(--color-primary)] rounded-full flex items-center justify-center relative"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    >
                      {/* Inner Partnership Core */}
                      <motion.div
                        className="w-28 h-28 bg-gradient-to-br from-[var(--color-primary)] to-purple-600 rounded-full flex items-center justify-center relative"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {/* People Group Icon */}
                        <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.997 2.997 0 0 0 17.05 7h-1.61A2.997 2.997 0 0 0 12.54 8.37L10 16h2.5v6h7.5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zm1.5 1h-4c-.83 0-1.5.67-1.5 1.5v6h2V22h3v-2.5h2v-6c0-.83-.67-1.5-1.5-1.5zM6.5 6C7.33 6 8 5.33 8 4.5S7.33 3 6.5 3 5 3.67 5 4.5 5.67 6 6.5 6zm2.5 16v-6H11l-1.89-5.7A2.002 2.002 0 0 0 7.22 9H5.78c-.93 0-1.78.63-2.02 1.55L2 16h2.5v6H9z"/>
                        </svg>
                        
                        {/* Pulse Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-white opacity-30"
                          animate={{ scale: [1, 1.6, 2.2], opacity: [0.3, 0.1, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      {/* Partner Nodes */}
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-8 h-8 bg-[var(--color-primary)] rounded-full border-2 border-white"
                          style={{
                            top: '50%',
                            left: '50%',
                            transformOrigin: '0 0',
                          }}
                          animate={{
                            rotate: [0, 360],
                            x: [-4, -4],
                            y: [-4, -4],
                          }}
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.8,
                          }}
                          initial={{
                            rotate: i * 36,
                            x: 90,
                            y: -4,
                          }}
                        >
                          <motion.div
                            className="w-full h-full bg-[var(--color-primary)] rounded-full flex items-center justify-center"
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          >
                            <span className="text-white text-xs font-bold">{i + 1}</span>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* Floating Partnership Icons */}
                    {[
                      { icon: '🤝', x: -80, y: -60, delay: 0 },
                      { icon: '🌟', x: 80, y: -60, delay: 1 },
                      { icon: '💼', x: -80, y: 60, delay: 2 },
                      { icon: '🚀', x: 80, y: 60, delay: 3 },
                      { icon: '🔗', x: 0, y: -100, delay: 4 },
                      { icon: '⭐', x: 0, y: 100, delay: 5 },
                    ].map((item, i) => (
                      <motion.div
                        key={`partner-icon-${i}`}
                        className="absolute text-3xl"
                        style={{ x: item.x, y: item.y }}
                        animate={{
                          y: [item.y, item.y - 15, item.y],
                          rotate: [0, 15, -15, 0],
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
                    
                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: 'scale(1.2)' }}>
                      {[
                        { x1: '30%', y1: '30%', x2: '50%', y2: '50%' },
                        { x1: '70%', y1: '30%', x2: '50%', y2: '50%' },
                        { x1: '30%', y1: '70%', x2: '50%', y2: '50%' },
                        { x1: '70%', y1: '70%', x2: '50%', y2: '50%' },
                      ].map((line, i) => (
                        <motion.line
                          key={`partner-line-${i}`}
                          x1={line.x1}
                          y1={line.y1}
                          x2={line.x2}
                          y2={line.y2}
                          stroke="url(#partnerGradient)"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.5 }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        />
                      ))}
                      <defs>
                        <linearGradient id="partnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--color-primary)" />
                          <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  The Future is Secure
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Join thousands of partners who trust FranklinOne to deliver world-class cybersecurity solutions and unmatched support.
                </p>
              </div>
            </div>

            {/* Floating accent elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--color-primary)] rounded-full opacity-60"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full opacity-40"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;