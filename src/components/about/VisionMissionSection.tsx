"use client";
import { motion } from 'framer-motion';

const VisionMissionSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-800 overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        {/* Animated lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
        />
        
        {/* Floating dots */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-400"></div>
            <span className="text-purple-300 font-semibold tracking-wider">FOUNDATION</span>
            <div className="w-8 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
          </motion.div>
          
          {/* <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8">
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            >
              VISION
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent ml-auto text-right"
            >
              MISSION
            </motion.span> */}
          {/* </h1> */}
        </motion.div>

        {/* Main Content - Split Diagonal Layout */}
        <div className="relative">
          {/* Diagonal divider */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ rotate: 45, scaleY: 0 }}
              whileInView={{ rotate: 45, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="w-px h-full bg-gradient-to-b from-purple-400/50 via-white/20 to-blue-400/50 origin-center"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative lg:pr-16"
            >
              {/* Vision indicator */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold text-white">VISION</h2>
                  <p className="text-purple-300 text-sm">Where We&apos;re Heading</p>
                </div>
              </div>

              {/* Vision content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
                  <blockquote className="text-3xl lg:text-4xl font-bold text-white leading-tight pl-8">
                    &quot;Truly partner-centric company.&quot;
                  </blockquote>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="pl-8 space-y-4"
                >
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We envision a future where partnerships transcend traditional boundaries, 
                    creating ecosystems of mutual growth and innovation.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    <span className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm">
                      Partnership Excellence
                    </span>
                    <span className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm">
                      Strategic Growth
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Vision decorative elements */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.1 }}
                className="absolute -top-8 -right-8 w-32 h-32 border-2 border-purple-400/20 rounded-full"
              />
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="relative lg:pl-16 lg:pt-32"
            >
              {/* Mission indicator */}
              <div className="flex items-center gap-4 mb-8 justify-end lg:justify-start">
                <div className="order-2 lg:order-1">
                  <h2 className="text-2xl font-bold text-white text-right lg:text-left">MISSION</h2>
                  <p className="text-blue-300 text-sm text-right lg:text-left">What We Do</p>
                </div>
                <motion.div
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25 order-1 lg:order-2"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </motion.div>
              </div>

              {/* Mission content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="relative"
                >
                  <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
                  <blockquote className="text-3xl lg:text-4xl font-bold text-white leading-tight pr-8 text-right lg:text-left">
                    &quot;Be the extended hand of the manufacturer serving wisely to each-and-every customer.&quot;
                  </blockquote>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="pr-8 lg:pr-0 lg:pl-0 space-y-4"
                >
                  <p className="text-lg text-gray-300 leading-relaxed text-right lg:text-left">
                    We bridge gaps, connect possibilities, and deliver wisdom-driven solutions 
                    that serve every customer with precision and care.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-4 justify-end lg:justify-start">
                    <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm">
                      Customer First
                    </span>
                    <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm">
                      Wise Service
                    </span>
                    <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm">
                      Excellence
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Mission decorative elements */}
              <motion.div
                initial={{ scale: 0, rotate: 45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.3 }}
                className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-blue-400/20 rounded-lg"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-32"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.7 }}
              className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-12"
            />
            
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-purple-300 via-white to-blue-300 bg-clip-text text-transparent">
                Driving Success Through Strategic Partnership
              </span>
            </h3>
            
            <div className="flex items-center justify-center gap-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-purple-400/50 rounded-full"
              />
              <span className="text-gray-300 font-medium tracking-wider">
                WHERE VISION MEETS MISSION
              </span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-blue-400/50 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;