"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import lottie player to avoid SSR issues
const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
});

const HeroSection = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Load the local lottie animation
    fetch('/Animation-1.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  const highlights: { icon: string; title: string; subtitle: string }[] = [];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(116, 63, 119, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(116, 63, 119, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Advanced floating security elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[var(--color-primary)] opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          >
            {i % 6 === 0 && <div className="w-10 h-10 border-2 border-current rounded-full" />}
            {i % 6 === 1 && <div className="w-8 h-8 border-2 border-current transform rotate-45" />}
            {i % 6 === 2 && <div className="w-6 h-10 border-2 border-current rounded-sm" />}
            {i % 6 === 3 && <div className="w-10 h-3 bg-current rounded-full" />}
            {i % 6 === 4 && <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-current rounded-full"></div></div>}
            {i % 6 === 5 && <div className="w-8 h-8 border-2 border-current"><div className="w-4 h-4 bg-current transform rotate-45"></div></div>}
          </motion.div>
        ))}
      </div>

      {/* Enhanced particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--color-primary)] rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content Side */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/30 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full mr-3 animate-pulse"></div>
              <span className="text-white text-sm font-medium tracking-wider">CYBERSECURITY PIONEERS</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block mb-4">
                <span className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent">
                  About
                </span>
              </span>
              <span className="block text-white">
                FranklinOne
              </span>
            </motion.h1>

            {/* Enhanced divider */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-20 h-1 bg-[var(--color-primary)] rounded-full"></div>
              <div className="w-8 h-8 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mx-4">
                <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full"></div>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-white rounded-full"></div>
            </motion.div>
            
            {/* Enhanced description */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <span className="text-[var(--color-primary)] font-semibold">Truly partner-centric</span> cybersecurity distribution since 2000
              </p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover our journey from a visionary startup to regional cybersecurity leadership, our mission to protect digital futures, and the expert team driving innovation in the ever-evolving threat landscape.
              </p>
            </motion.div>

            {/* Call-to-Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link 
                href="#company-story"
                className="group bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/80 text-white px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-2xl flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10">Our Story</span>
                <svg className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
              
              <Link 
                href="/contact"
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center"
              >
                <span>Partner With Us</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Key Highlights */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 transition-all duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-2xl mb-2">{highlight.icon}</div>
                  <div className="text-sm font-bold text-white">{highlight.title}</div>
                  <div className="text-xs text-gray-400">{highlight.subtitle}</div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Custom Cybersecurity Animation Side */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-2xl">
              {/* Main animation container */}
              <div className="bg-gradient-to-br from-[var(--color-primary)]/20 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-[var(--color-primary)]/30 shadow-2xl overflow-hidden relative">
                {/* Enhanced corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-[var(--color-primary)] opacity-60 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-[var(--color-primary)] opacity-60 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-[var(--color-primary)] opacity-60 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-[var(--color-primary)] opacity-60 rounded-br-2xl"></div>

                {/* Animated background rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-96 h-96 border border-[var(--color-primary)]/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute w-80 h-80 border border-[var(--color-primary)]/15 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute w-64 h-64 border border-[var(--color-primary)]/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Custom Cybersecurity Animation */}
                <div className="relative z-10 flex items-center justify-center h-[500px]">
                  {/* Local Lottie Animation */}
                  {animationData ? (
                    <Lottie
                      loop
                      animationData={animationData}
                      play
                      style={{ width: '100%', height: '100%', maxWidth: '500px' }}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <div className="w-16 h-16 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                    >
                     </motion.h3>
                    <motion.p 
                      className="text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.7 }}
                    >
                      Leading cybersecurity innovation across Asia-Pacific
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-[var(--color-primary)] rounded-full opacity-60 shadow-xl"
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0.6, 0.9, 0.6],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-white rounded-full opacity-50 shadow-xl"
                animate={{ 
                  scale: [1, 1.4, 1], 
                  opacity: [0.5, 0.8, 0.5],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
              <motion.div
                className="absolute top-1/2 -left-4 w-6 h-6 bg-gradient-to-br from-[var(--color-primary)] to-purple-600 rounded-full opacity-70"
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.3, 1] 
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-white transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Discover More</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 