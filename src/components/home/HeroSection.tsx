"use client";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Prevent the breach. Preserve the business.",
    description: "As a trusted IT security distribution partner, we empower enterprise to take control of risk before it turns into real-world impact.",
    bgGradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #743f77 100%)"
  },
  {
    id: 2,
    title: "Secure solutions. Strategic partnerships.",
    description: "We connect businesses with leading cybersecurity technologies, backed by global vendors and tailored to enterprise demands. Our solutions are built to scale, adapt, and protect across evolving threat landscapes.",
    bgGradient: "linear-gradient(135deg, #16213e 0%, #0f3460 50%, #743f77 100%)"
  },
  {
    id: 3,
    title: "Your Link to World-Class Cybersecurity.",
    description: "We distribute advanced security technologies from globally recognized vendors-ensuring our clients have access to reliable, scalable solutions designed for complex business environments.",
    bgGradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #743f77 100%)"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-rotate slides
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };
  
  // Progress timer
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isPaused) {
      setProgress(0);
      return;
    }
    
    setProgress(0);
    const duration = 6000;
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep += 1;
      setProgress(Math.min(100, (currentStep / steps) * 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);
  
  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    }
    
    if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  return (
    <div 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slideshow backgrounds */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div 
              key={slide.id}
              className="absolute inset-0 z-0" 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2 }}
              style={{ 
                background: slide.bgGradient,
              }}
            />
          )
        ))}
      </AnimatePresence>

      {/* Cyber grid pattern overlay */}
      <div className="absolute inset-0 z-5 opacity-10">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(116, 63, 119, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(116, 63, 119, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating security icons */}
      <div className="absolute inset-0 z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[var(--color-primary)] opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {i % 4 === 0 && <div className="w-8 h-8 border-2 border-current rounded-full" />}
            {i % 4 === 1 && <div className="w-6 h-6 border-2 border-current transform rotate-45" />}
            {i % 4 === 2 && <div className="w-4 h-8 border-2 border-current rounded-sm" />}
            {i % 4 === 3 && <div className="w-8 h-2 bg-current rounded-full" />}
          </motion.div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 z-30 top-1/2 transform -translate-y-1/2 bg-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/70 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center focus:outline-none transition-all duration-300 border border-[var(--color-primary)]/50"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 z-30 top-1/2 transform -translate-y-1/2 bg-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/70 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center focus:outline-none transition-all duration-300 border border-[var(--color-primary)]/50"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={`content-${slide.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 sm:mb-10"
              >
                {/* Security badge */}
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/30 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3 animate-pulse"></div>
                  <span className="text-white text-sm font-medium">CYBERSECURITY EXPERTS</span>
                </motion.div>

                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-white to-[var(--color-primary)] bg-clip-text text-transparent">
                  {slide.title}
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto px-4 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  {slide.description}
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link 
                    href="/solutions" 
                    className="group bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-2xl flex items-center"
                  >
                    <span>Explore Solutions</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link 
                    href="/contact-us" 
                    className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] font-bold py-4 px-8 rounded-lg text-lg transition duration-300 backdrop-blur-sm"
                  >
                    Get Protected
                  </Link>
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        
        {/* Slide navigation dots */}
        <div className="flex flex-col items-center gap-4 mt-12">
          <div className="flex justify-center gap-4">
            {slides.map((slide, index) => (
              <button
                key={`nav-${slide.id}`}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[var(--color-primary)] scale-125 shadow-lg shadow-[var(--color-primary)]/50' 
                    : 'bg-white/30 hover:bg-white/50 backdrop-blur-sm'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Progress bar */}
          <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div 
              className="h-full bg-gradient-to-r from-[var(--color-primary)] to-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;