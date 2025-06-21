"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Handle mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About FranklinOne' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/vendors', label: 'Vendors' },
    { href: '/what-we-do', label: 'What We Do' },
    { href: '/contact-us', label: 'Contact Us' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-[#743f77]/95 backdrop-blur-2xl border-b-2 border-[#743f77] shadow-2xl shadow-[#743f77]/50' 
          : 'bg-gradient-to-r from-[#743f77] via-[#9a5d9d] to-[#743f77]'
      }`}>
        {/* Vibrant animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#743f77]/80 via-[#9a5d9d]/60 to-[#743f77]/80">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#743f77]/30 to-transparent"
            animate={{
              x: [-200, isMounted && typeof window !== 'undefined' ? window.innerWidth + 200 : 1200],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

         
        {/* Floating purple orbs/particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              <div 
                className="w-6 h-6 rounded-full"
                style={{
                  background: `radial-gradient(circle, #743f77, #9a5d9d)`,
                  boxShadow: `0 0 20px #743f77, 0 0 40px #743f77, 0 0 60px #743f77`,
                  filter: 'blur(1px)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Pulsing energy waves */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-[#743f77] to-transparent"
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            style={{
              boxShadow: `0 0 20px #743f77, 0 0 40px #743f77`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center group">
                <div className="relative">
                  {/* Multi-layered purple glow for logo */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle, #743f77, transparent)`,
                      filter: 'blur(20px)',
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle, #9a5d9d, transparent)`,
                      filter: 'blur(10px)',
                    }}
                    animate={{
                      scale: [0.8, 1.1, 0.8],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                  <Image
                    src="/logo.png"
                    alt="FranklinOne Logo"
                    width={128}
                    height={12}
                    className="block h-12 w-auto relative z-10 group-hover:brightness-200 transition-all duration-500 filter drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 0 10px #743f77) drop-shadow(0 0 20px #743f77)',
                    }}
                  />
                </div>
              </Link>
            </div>
            
            {/* Desktop menu with purple dominance */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className={`relative px-4 py-3 mx-1 font-bold transition-all duration-300 group ${
                      isActive(item.href) 
                        ? 'text-white' 
                        : 'text-white/90 hover:text-white'
                    }`}
                    style={{
                      textShadow: '0 0 10px #743f77, 0 2px 4px rgba(0,0,0,0.8)',
                    }}
                  >
                    {/* Active state with intense purple glow */}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: `linear-gradient(135deg, #743f77, #9a5d9d)`,
                          boxShadow: `
                            0 0 20px #743f77,
                            0 0 40px #743f77,
                            inset 0 0 20px rgba(116, 63, 119, 0.3)
                          `,
                        }}
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
                      />
                    )}
                    
                    {/* Hover effect with purple energy */}
                    <motion.div 
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, #743f77/60, #9a5d9d/60)`,
                        boxShadow: `0 0 15px #743f77`,
                      }}
                      whileHover={{
                        boxShadow: `0 0 25px #743f77, 0 0 50px #743f77`,
                      }}
                    />
                    
                    {/* Text with purple glow */}
                    <span className={`relative z-10 text-sm font-bold transition-all duration-300 ${
                      isActive(item.href) 
                        ? 'text-white' 
                        : 'text-white/90 group-hover:text-white'
                    }`}
                    style={{
                      textShadow: isActive(item.href) 
                        ? '0 0 15px #743f77, 0 0 30px #743f77, 0 2px 4px rgba(0,0,0,0.8)' 
                        : '0 0 8px #743f77, 0 2px 4px rgba(0,0,0,0.6)'
                    }}>
                      {item.label}
                    </span>
                    
                    {/* Active indicator with intense purple glow */}
                    {isActive(item.href) && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-3 h-3 rounded-full"
                        style={{ 
                          background: `radial-gradient(circle, #743f77, #9a5d9d)`,
                          boxShadow: `
                            0 0 15px #743f77,
                            0 0 30px #743f77,
                            0 0 45px #743f77
                          `,
                        }}
                        initial={{ scale: 0, x: '-50%' }}
                        animate={{ 
                          scale: [1, 1.2, 1], 
                          x: '-50%',
                        }}
                        transition={{ 
                          scale: {
                            duration: 2,
                            repeat: Infinity,
                          },
                          x: { duration: 0 }
                        }}
                      />
                    )}

                    {/* Purple energy scan effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-[#743f77]/50 to-transparent"
                        animate={{
                          x: [-100, 200],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                        }}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile menu button with purple energy */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center p-3 rounded-lg text-white transition-all duration-300 group"
                style={{
                  background: `linear-gradient(135deg, #743f77, #9a5d9d)`,
                  boxShadow: `0 0 20px #743f77`,
                  border: `2px solid #743f77`,
                }}
              >
                <span className="sr-only">Open main menu</span>
                
                {/* Hamburger with purple glow */}
                <div className="w-6 h-6 relative">
                  <motion.span
                    className="absolute top-1 left-0 w-6 h-0.5 bg-white rounded-full"
                    style={{ 
                      filter: 'drop-shadow(0 0 5px #743f77) drop-shadow(0 0 10px #743f77)'
                    }}
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute top-3 left-0 w-6 h-0.5 bg-white rounded-full"
                    style={{ 
                      filter: 'drop-shadow(0 0 5px #743f77) drop-shadow(0 0 10px #743f77)'
                    }}
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute top-5 left-0 w-6 h-0.5 bg-white rounded-full"
                    style={{ 
                      filter: 'drop-shadow(0 0 5px #743f77) drop-shadow(0 0 10px #743f77)'
                    }}
                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Pulsing purple energy ring */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    border: `2px solid #743f77`,
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 10px #743f77',
                      '0 0 30px #743f77, 0 0 50px #743f77',
                      '0 0 10px #743f77'
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu with purple dominance */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop with purple tint */}
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              style={{
                background: `radial-gradient(circle, #743f77/60, black/90)`,
                backdropFilter: 'blur(10px)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile menu panel with intense purple styling */}
            <motion.div
              className="fixed top-20 right-4 left-4 z-50 md:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.1 }}
            >
              <div 
                className="rounded-2xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #743f77/95, #9a5d9d/90, #743f77/95)`,
                  border: `3px solid #743f77`,
                  boxShadow: `
                    0 0 30px #743f77,
                    0 0 60px #743f77,
                    inset 0 0 30px rgba(116, 63, 119, 0.2)
                  `,
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Animated purple grid background */}
                <div className="absolute inset-0 opacity-60">
                  <motion.div 
                    className="absolute inset-0 bg-repeat"
                    style={{
                      backgroundImage: `
                        linear-gradient(#743f77 1px, transparent 1px),
                        linear-gradient(90deg, #743f77 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '20px 20px'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Floating purple energy orbs */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [0.5, 1, 0.5],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    >
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{
                          background: `radial-gradient(circle, #743f77, #9a5d9d)`,
                          boxShadow: `0 0 15px #743f77`,
                          filter: 'blur(1px)',
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="relative z-10 p-6 space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.href} 
                        onClick={() => setIsMenuOpen(false)} 
                        className={`relative block px-6 py-4 rounded-xl text-base font-bold transition-all duration-300 group ${
                          isActive(item.href) 
                            ? 'text-white' 
                            : 'text-white/90 hover:text-white'
                        }`}
                        style={{
                          background: isActive(item.href) 
                            ? `linear-gradient(135deg, #743f77, #9a5d9d)`
                            : 'transparent',
                          border: `2px solid ${isActive(item.href) ? '#743f77' : 'transparent'}`,
                          boxShadow: isActive(item.href) 
                            ? `0 0 20px #743f77, inset 0 0 20px rgba(116, 63, 119, 0.3)`
                            : 'none',
                        }}
                      >
                        {/* Purple energy wave effect */}
                        <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.div
                            className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-[#743f77]/60 to-transparent"
                            animate={{
                              x: [-100, 400],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <span 
                            className={`transition-all duration-300 ${
                              isActive(item.href) 
                                ? 'text-white font-black' 
                                : 'text-white/90 group-hover:text-white'
                            }`}
                            style={{
                              textShadow: '0 0 10px #743f77, 0 0 20px #743f77, 0 2px 4px rgba(0,0,0,0.8)',
                            }}
                          >
                            {item.label}
                          </span>
                          {isActive(item.href) && (
                            <motion.div
                              className="w-4 h-4 rounded-full"
                              style={{ 
                                background: `radial-gradient(circle, white, #743f77)`,
                                boxShadow: `0 0 15px #743f77, 0 0 30px #743f77`,
                              }}
                              initial={{ scale: 0 }}
                              animate={{ 
                                scale: [1, 1.2, 1],
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                              }}
                            />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Enhanced security status with purple dominance */}
                <div 
                  className="relative p-4"
                  style={{
                    borderTop: `2px solid #743f77`,
                    background: `linear-gradient(90deg, #743f77/30, #9a5d9d/30, #743f77/30)`,
                  }}
                >
                  <div className="flex items-center justify-center space-x-3 text-sm text-white font-bold">
                    <motion.div 
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: `radial-gradient(circle, #743f77, #9a5d9d)`,
                        boxShadow: `0 0 15px #743f77, 0 0 30px #743f77`,
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <span 
                      style={{
                        textShadow: '0 0 10px #743f77, 0 0 20px #743f77, 0 2px 4px rgba(0,0,0,0.8)',
                      }}
                    >
                      ⚡ PURPLE POWER ACTIVATED ⚡
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;