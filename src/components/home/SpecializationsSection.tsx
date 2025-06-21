"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const SpecializationsSection = () => {
  const specializations = [
    {
      title: "Cybersecurity",
      description: "Advanced threat protection, endpoint security, and comprehensive security solutions from leading global vendors.",
      icon: "🔒",
      link: "/solutions",
      features: ["Threat Detection", "Incident Response", "Security Analytics"]
    },
    {
      title: "Networking",
      description: "Enterprise networking infrastructure, SD-WAN, and connectivity solutions for modern business needs.",
      icon: "🌐",
      link: "/solutions",
      features: ["SD-WAN", "Network Security", "Cloud Connectivity"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions, hybrid infrastructure, and digital transformation technologies.",
      icon: "☁️",
      link: "/solutions",
      features: ["Hybrid Cloud", "Security as a Service", "Digital Transformation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Technical grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(116, 63, 119, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(116, 63, 119, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Floating tech elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {i % 3 === 0 && <div className="w-3 h-3 border border-[var(--color-primary)] opacity-20 transform rotate-45" />}
            {i % 3 === 1 && <div className="w-2 h-6 bg-[var(--color-primary)] opacity-15 rounded-full" />}
            {i % 3 === 2 && <div className="w-4 h-4 border-2 border-[var(--color-primary)] opacity-10 rounded-full" />}
          </motion.div>
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
            <span className="text-white text-sm font-medium">TECHNICAL EXPERTISE</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent">
              We Specialise In
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Advanced technologies that secure, connect, and transform modern enterprises
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-[var(--color-primary)]/20 via-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-primary)]/20 group-hover:border-[var(--color-primary)]/40 transition-all duration-500 h-full relative overflow-hidden">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[var(--color-primary)] opacity-60"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[var(--color-primary)] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[var(--color-primary)] opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[var(--color-primary)] opacity-60"></div>
                
                {/* Animated background element */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 border border-[var(--color-primary)]/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {spec.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {spec.title}
                  </h3>
                  <p className="text-white leading-relaxed mb-6">
                    {spec.description}
                  </p>

                  {/* Feature tags with improved readability */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {spec.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-[var(--color-primary)]/30 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full text-xs text-white font-semibold shadow-lg"
                        style={{
                          WebkitTextStroke: '0.2px rgba(0,0,0,0.5)',
                          textShadow: '0 0 6px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={spec.link}
                    className="inline-flex items-center text-white font-semibold hover:text-[var(--color-primary)] transition-colors duration-300 group-hover:translate-x-2 transform transition-transform"
                  >
                    <span>Explore Solutions</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection; 