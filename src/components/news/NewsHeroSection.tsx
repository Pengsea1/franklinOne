"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const NewsHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax scroll effects
  const bgYPos = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleYPos = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);
  
  // Background particles setup
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    size: number;
    color: string;
    opacity: number;
    blur: number;
    animationDuration: number;
  }>>([]);

  // Floating orbs setup
  const [orbs, setOrbs] = useState<Array<{
    x: number;
    y: number;
    size: number;
    color: string;
    animationDelay: number;
    animationDuration: number;
  }>>([]);
  
  useEffect(() => {
    // Create background particles
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 5,
      color: Math.random() > 0.5 ? "#f15a22" : "#743f77",
      opacity: Math.random() * 0.15 + 0.05,
      blur: Math.random() * 5 + 1,
      animationDuration: Math.random() * 20 + 20
    }));
    setParticles(newParticles);

    // Create floating orbs
    const newOrbs = Array.from({ length: 6 }, () => ({
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      size: Math.random() * 120 + 40,
      color: Math.random() > 0.5 ? "#f15a22" : "#743f77",
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 10 + 15
    }));
    setOrbs(newOrbs);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#faf7fe] via-white to-gray-50"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient background with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#743f77]/20 via-transparent to-[#f15a22]/20 animate-gradient"></div>
        
        {/* Diagonal color bands with brand colors */}
        <div className="absolute inset-0 transform -rotate-12 scale-150">
          <div className="absolute h-20 w-full top-1/4 bg-gradient-to-r from-[#743f77]/5 via-[#f15a22]/10 to-[#743f77]/5 blur-xl"></div>
          <div className="absolute h-24 w-full top-2/3 bg-gradient-to-r from-[#f15a22]/5 via-[#743f77]/10 to-[#f15a22]/5 blur-xl"></div>
        </div>
        
        {/* Floating orbs with parallax effect */}
        {orbs.map((orb, index) => (
          <motion.div 
            key={`orb-${index}`}
            className="absolute rounded-full opacity-20 mix-blend-multiply"
            style={{ 
              left: `${orb.x}%`, 
              top: `${orb.y}%`, 
              width: orb.size, 
              height: orb.size,
              background: `radial-gradient(circle at 30% 30%, ${orb.color}, transparent)`,
              y: bgYPos,
              filter: "blur(30px)",
              animation: `pulse ${orb.animationDuration}s ease-in-out ${orb.animationDelay}s infinite`
            }}
          />
        ))}
        
        {/* Small particles */}
        {particles.map((particle, index) => (
          <motion.div 
            key={`particle-${index}`}
            className="absolute rounded-full"
            style={{ 
              left: `${particle.x}%`, 
              top: `${particle.y}%`, 
              width: particle.size, 
              height: particle.size, 
              backgroundColor: particle.color,
              opacity: particle.opacity,
              filter: `blur(${particle.blur}px)`,
              animation: `float ${particle.animationDuration}s ease-in-out infinite`
            }}
          />
        ))}
        
        {/* Wave pattern with parallax scroll */}
        <motion.div 
          className="absolute w-full h-full bg-[url('/wave-bg.svg')] bg-repeat-x bg-bottom opacity-15"
          style={{ y: bgYPos }}
        />
      </div>
      
      {/* Animated gradient line along the top */}
      <div className="absolute top-0 left-0 w-full h-3 overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#f15a22] via-[#743f77] to-[#f15a22]"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ 
            duration: 8, 
            ease: "linear", 
            repeat: Infinity 
          }}
          style={{ 
            backgroundSize: "200% 100%",
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center relative"
          style={{ 
            opacity: titleOpacity,
            y: titleYPos
          }}
        >
          {/* Badge with animated background */}
          <motion.div
            className="inline-block relative mb-6 mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block relative px-6 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-[#743f77] to-[#f15a22] animate-pulse-slow">
              <span className="relative z-10">FranklinOne Newsroom</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#743f77] to-[#f15a22] animate-gradient opacity-80"></span>
            </span>
          </motion.div>
          
          {/* Main heading with animation */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#743f77] to-[#f15a22]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Latest News & Updates
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Stay informed about our latest partnerships, achievements, 
            and industry insights.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsHeroSection;
