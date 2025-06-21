"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center group">
                <div className="relative">
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
            
            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
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
                  {/* Active state background */}
                  {isActive(item.href) && (
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, #743f77, #9a5d9d)`,
                        boxShadow: `
                          0 0 20px #743f77,
                          0 0 40px #743f77,
                          inset 0 0 20px rgba(116, 63, 119, 0.3)
                        `,
                      }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, #743f77/60, #9a5d9d/60)`,
                      boxShadow: `0 0 15px #743f77`,
                    }}
                  />
                  
                  {/* Text */}
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
                  
                  {/* Active indicator */}
                  {isActive(item.href) && (
                    <div
                      className="absolute -bottom-1 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2"
                      style={{ 
                        background: `radial-gradient(circle, #743f77, #9a5d9d)`,
                        boxShadow: `
                          0 0 15px #743f77,
                          0 0 30px #743f77,
                          0 0 45px #743f77
                        `,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center p-3 rounded-lg text-white transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, #743f77, #9a5d9d)`,
                  boxShadow: `0 0 20px #743f77`,
                  border: `2px solid #743f77`,
                }}
              >
                <span className="sr-only">Open main menu</span>
                
                {/* Hamburger menu */}
                <div className="w-6 h-6 relative flex flex-col justify-center space-y-1">
                  <span
                    className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                    style={{ 
                      filter: 'drop-shadow(0 0 5px #743f77) drop-shadow(0 0 10px #743f77)'
                    }}
                  />
                  <span
                    className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                    style={{ 
                      filter: 'drop-shadow(0 0 5px #743f77) drop-shadow(0 0 10px #743f77)'
                    }}
                  />
                  <span
                    className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                    style={{ 
                      filter: 'drop-shadow(0 0 5px #743f77) drop-shadow(0 0 10px #743f77)'
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: `radial-gradient(circle, #743f77/60, black/90)`,
              backdropFilter: 'blur(10px)',
            }}
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Mobile menu panel */}
          <div className="fixed top-20 right-4 left-4 z-50 md:hidden">
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
              <div className="relative z-10 p-6 space-y-3">
                {navItems.map((item) => (
                  <Link 
                    key={item.href}
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
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ 
                            background: `radial-gradient(circle, white, #743f77)`,
                            boxShadow: `0 0 15px #743f77, 0 0 30px #743f77`,
                          }}
                        />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Security status */}
              <div 
                className="relative p-4"
                style={{
                  borderTop: `2px solid #743f77`,
                  background: `linear-gradient(90deg, #743f77/30, #9a5d9d/30, #743f77/30)`,
                }}
              >
                <div className="flex items-center justify-center space-x-3 text-sm text-white font-bold">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: `radial-gradient(circle, #743f77, #9a5d9d)`,
                      boxShadow: `0 0 15px #743f77, 0 0 30px #743f77`,
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
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;