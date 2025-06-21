"use client";
import { motion } from 'framer-motion';

const AboutStatsSection = () => {
  const stats = [
    {
      number: "2000",
      label: "Founded",
      description: "Established as a trusted cybersecurity distributor",
      icon: "🎯"
    },
    {
      number: "9",
      label: "Countries",
      description: "Regional presence across Asia-Pacific",
      icon: "🌏"
    },
    {
      number: "25+",
      label: "Years",
      description: "Of proven excellence in cybersecurity",
      icon: "🏆"
    },
    {
      number: "1000+",
      label: "Partners",
      description: "Trusted relationships built over decades",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Security grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(116, 63, 119, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(116, 63, 119, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Animated security elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[var(--color-primary)] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/30 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3 animate-pulse"></div>
            <span className="text-white text-sm font-medium">OUR FOUNDATION</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent">
              Building Trust Since Day One
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our journey of excellence, innovation, and partnerships across the region
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-[var(--color-primary)]/20 via-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-primary)]/20 group-hover:border-[var(--color-primary)]/40 transition-all duration-500 text-center h-full relative overflow-hidden">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[var(--color-primary)] opacity-60"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[var(--color-primary)] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[var(--color-primary)] opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[var(--color-primary)] opacity-60"></div>

                <div className="text-4xl mb-4 opacity-30">{stat.icon}</div>
                
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Animated background ring */}
                <motion.div
                  className="absolute inset-4 border border-[var(--color-primary)]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Animation Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="max-w-md mx-auto">
            {/* Custom Stats Animation */}
            <div className="flex items-center justify-center h-[300px]">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Central Stats Hub */}
                <motion.div
                  className="w-32 h-32 border-4 border-[var(--color-primary)] rounded-full flex items-center justify-center relative bg-gradient-to-br from-[var(--color-primary)] to-purple-600"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {/* Chart Icon */}
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white opacity-30"
                    animate={{ scale: [1, 1.5, 2], opacity: [0.3, 0.1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* Floating Numbers */}
                {[
                  { text: '25+', x: -60, y: -40, delay: 0 },
                  { text: '9', x: 60, y: -40, delay: 1 },
                  { text: '2K', x: -60, y: 40, delay: 2 },
                  { text: '1K+', x: 60, y: 40, delay: 3 },
                ].map((item, i) => (
                  <motion.div
                    key={`stats-${i}`}
                    className="absolute text-2xl font-bold text-[var(--color-primary)]"
                    style={{ x: item.x, y: item.y }}
                    animate={{
                      y: [item.y, item.y - 10, item.y],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: item.delay,
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <motion.p
            className="text-gray-400 text-lg mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Securing digital futures with innovation and expertise
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStatsSection; 