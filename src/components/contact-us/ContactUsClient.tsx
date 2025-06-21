"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ContactUsClient = () => {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0a0e1a] text-white overflow-hidden">
        {/* Dark cyber background with overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[rgba(10,14,26,0.95)] via-[rgba(22,33,62,0.85)] to-[rgba(116,63,119,0.9)] z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute inset-0 bg-[url('/cyber.png')] bg-cover bg-center z-0"
            style={{ opacity: 0.3 }}
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
        
        {/* Animated network grid */}
        <motion.div 
          className="absolute inset-0 bg-[url('/network-bg.svg')] z-10"
          style={{ opacity: 0.15 }}
          animate={{ 
            backgroundPosition: ['0px 0px', '100px 100px'],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Animated dots */}
        <motion.div 
          className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-repeat z-10"
          animate={{ 
            backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'] 
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ opacity: 0.12 }}
        />

        {/* Enhanced floating security elements */}
        <div className="absolute inset-0 z-15">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[var(--color-primary)]"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
                fontSize: `${1.5 + Math.random() * 1}rem`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 360]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Enhanced Security badge */}
          <motion.div
            className="relative inline-flex items-center px-8 py-4 mb-10"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/30 to-[var(--color-primary)]/20 backdrop-blur-md rounded-full border border-[var(--color-primary)]/40 shadow-lg"></div>
            
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)]/50"
              animate={{
                boxShadow: [
                  '0 0 5px rgba(116, 63, 119, 0.3)',
                  '0 0 20px rgba(116, 63, 119, 0.6)',
                  '0 0 5px rgba(116, 63, 119, 0.3)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Content */}
            <div className="relative flex items-center">
              <motion.div 
                className="w-3 h-3 bg-[var(--color-primary)] rounded-full mr-4"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                SECURE COMMUNICATION
              </span>
            </div>
          </motion.div>

          {/* Enhanced title with gradient text */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-[var(--color-primary)] bg-clip-text text-transparent">
              Contact Us
            </span>
          </motion.h1>

          {/* Enhanced subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mx-auto mb-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 128, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
              We&apos;re here to help with your security and networking needs. Reach out to our team for expert consultation and advanced cybersecurity solutions.
            </p>
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[var(--color-primary)]"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Form and Info Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#0a0e1a] via-[#161b2e] to-[#0a0e1a] text-white overflow-hidden">
        {/* Advanced cyber background */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0 bg-[url('/cyber-grid.svg')] bg-center z-0"
            style={{ opacity: 0.1 }}
            animate={{ 
              backgroundPosition: ['0px 0px', '50px 50px'],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          {/* Floating security nodes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 border border-[var(--color-primary)]/30 rounded-full flex items-center justify-center"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
            >
              <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Enhanced form container */}
              <div className="relative bg-gradient-to-br from-[rgba(116,63,119,0.1)] via-[rgba(22,33,62,0.15)] to-[rgba(241,90,34,0.1)] rounded-2xl border border-[var(--color-primary)]/20 backdrop-blur-sm p-8 shadow-2xl">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-primary)]/50 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#f15a22]/50 rounded-br-2xl"></div>
                
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-white via-gray-200 to-[var(--color-primary)] bg-clip-text text-transparent">
                    Send Us a Secure Message
                  </span>
                </motion.h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-[rgba(22,33,62,0.3)] border border-[var(--color-primary)]/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-300 backdrop-blur-sm"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-[rgba(22,33,62,0.3)] border border-[var(--color-primary)]/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-300 backdrop-blur-sm"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[rgba(22,33,62,0.3)] border border-[var(--color-primary)]/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-300 backdrop-blur-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name*
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 bg-[rgba(22,33,62,0.3)] border border-[var(--color-primary)]/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-[rgba(22,33,62,0.3)] border border-[var(--color-primary)]/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-300 backdrop-blur-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-[rgba(22,33,62,0.3)] border border-[var(--color-primary)]/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-300 backdrop-blur-sm"
                      placeholder="Security consultation request"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-[rgba(22,33,62,0.3)] border border-[var(--color-primary)]/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Tell us about your security and networking requirements..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 mt-1 text-[var(--color-primary)] bg-[rgba(22,33,62,0.3)] border-[var(--color-primary)]/30 rounded focus:ring-[var(--color-primary)] focus:ring-2"
                    />
                    <label htmlFor="privacy" className="ml-3 block text-sm text-gray-300">
                      I agree to the{' '}
                      <Link href="/privacy-policy" className="text-[var(--color-primary)] hover:text-[#f15a22] transition-colors duration-300 underline">
                        Privacy Policy
                      </Link>
                      {' '}and consent to having my data processed securely.
                    </label>
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full group"
                    >
                      {/* Enhanced button background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] hover:from-[#f15a22] hover:to-[var(--color-primary)] text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ease-in-out flex items-center justify-center space-x-3">
                        <span>Send Secure Message</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
            
            {/* Enhanced Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between"
            >
              <div>
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-white via-gray-200 to-[var(--color-primary)] bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </motion.h2>
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mb-8"
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <p className="text-gray-300 mb-8 leading-relaxed">
                  If you have any questions or would like to discuss your security and networking needs, our expert team is here to help. You can reach us through the following secure channels:
                </p>
                
                <div className="space-y-6">
                  {/* Enhanced contact items */}
                  <motion.div 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">Phone</h3>
                      <p className="mt-1 text-gray-300">+1 (555) 123-4567</p>
                      <p className="mt-1 text-sm text-gray-400">Mon-Fri, 9AM - 6PM EST</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 text-[#f15a22] border border-[#f15a22]/30 group-hover:border-[#f15a22]/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-white group-hover:text-[#f15a22] transition-colors duration-300">Email</h3>
                      <p className="mt-1 text-gray-300">info@franklinone.com</p>
                      <p className="mt-1 text-sm text-gray-400">support@franklinone.com (Technical Support)</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">Headquarters</h3>
                      <p className="mt-1 text-gray-300">
                        No. 37, Street 2011, Sen Sok<br />
                        Phnom Penh, Cambodia
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium text-white mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                    { name: 'Twitter', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                    { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' }
                  ].map((social, index) => (
                    <motion.a 
                      key={social.name}
                      href="#" 
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <div className="bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 text-[var(--color-primary)] group-hover:text-white border border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/50 rounded-xl p-3 transition-all duration-300 backdrop-blur-sm">
                        <span className="sr-only">{social.name}</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon}/>
                        </svg>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#0a0e1a] via-[#161b2e] to-[#0a0e1a] text-white overflow-hidden">
        {/* Cyber background patterns */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0 bg-[url('/cyber-grid.svg')] bg-center"
            style={{ opacity: 0.08 }}
            animate={{ 
              backgroundPosition: ['0px 0px', '100px 100px'],
              opacity: [0.05, 0.12, 0.05]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          {/* Floating security nodes for map section */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 border border-[var(--color-primary)]/20 rounded-full flex items-center justify-center"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 8 + i * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
            >
              <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced section header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-[var(--color-primary)] bg-clip-text text-transparent">
                Find Our Secure Location
              </span>
            </motion.h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Visit our headquarters for in-person consultations and cybersecurity solutions demonstrations.
            </p>
          </motion.div>

          {/* Enhanced map container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Enhanced map frame with cyber styling */}
            <div className="relative bg-gradient-to-br from-[rgba(116,63,119,0.1)] via-[rgba(22,33,62,0.15)] to-[rgba(241,90,34,0.1)] rounded-2xl border border-[var(--color-primary)]/20 backdrop-blur-sm p-6 shadow-2xl">
              {/* Enhanced corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--color-primary)]/50 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#f15a22]/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#f15a22]/50 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--color-primary)]/50 rounded-br-2xl"></div>
              
              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-[var(--color-primary)]/30"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(116, 63, 119, 0.2)',
                    '0 0 30px rgba(116, 63, 119, 0.4)',
                    '0 0 10px rgba(116, 63, 119, 0.2)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Map with enhanced styling */}
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden border border-[var(--color-primary)]/20">
                <Image 
                  src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL21hcHMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0="
                  alt="Office Location Map"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
                
                {/* Map overlay with security theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/20 via-transparent to-[var(--color-primary)]/10 rounded-xl"></div>
                
                {/* Location marker with animation */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[#f15a22] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    
                    {/* Pulsing ring effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-[var(--color-primary)] rounded-full"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.7, 0, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Enhanced location details */}
              <motion.div
                className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="text-center group">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">Address</h3>
                  <p className="text-sm text-gray-300 mt-1">No. 37, Street 2011, Sen Sok<br />Phnom Penh, Cambodia</p>
                </div>
                
                <div className="text-center group">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-[#f15a22]/30 group-hover:border-[#f15a22]/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg className="w-6 h-6 text-[#f15a22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold text-white group-hover:text-[#f15a22] transition-colors duration-300">Office Hours</h3>
                  <p className="text-sm text-gray-300 mt-1">Monday - Friday<br />9:00 AM - 6:00 PM</p>
                </div>
                
                <div className="text-center group">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">Security</h3>
                  <p className="text-sm text-gray-300 mt-1">Secure facility with<br />24/7 surveillance</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsClient;
