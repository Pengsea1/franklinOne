"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'Network Security',
    description: 'Protect your network infrastructure with advanced security solutions including firewalls, intrusion prevention, and secure access.',
    icon: '/icons/network-security.svg', // You'll need to add this icon to your public folder
    color: 'bg-[var(--color-primary)]/10',
    iconColor: 'text-[#f15a22]',
    link: '/solutions'
  },
  {
    title: 'Cloud Security',
    description: 'Secure your cloud environments with comprehensive solutions designed for modern cloud architectures and workloads.',
    icon: '/icons/cloud-security.svg',
    color: 'bg-purple-100',
    iconColor: 'text-[#743f77]',
    link: '/solutions'
  },
  {
    title: 'Endpoint Protection',
    description: 'Defend your devices against malware, ransomware, and other threats with next-generation endpoint protection.',
    icon: '/icons/endpoint-security.svg',
    color: 'bg-orange-50', 
    iconColor: 'text-[#f15a22]',
    link: '/solutions'
  },
  {
    title: 'Managed Security Services',
    description: 'Let our experts manage your security operations with 24/7 monitoring, threat hunting, and incident response.',
    icon: '/icons/managed-security.svg',
    color: 'bg-purple-50',
    iconColor: 'text-[#743f77]',
    link: '/what-we-do'
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-white z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-bl-full -mr-20 -mt-20 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-tr-full -ml-20 -mb-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR SERVICES
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-8"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We offer a comprehensive range of security and networking solutions to meet your business needs.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
              variants={itemVariants}
            >
              <div className={`${service.color} ${service.iconColor} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link} className="text-[#743f77] hover:text-[#653767] font-medium inline-flex items-center">
                Learn More 
                <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link href="/solutions" className="bg-[var(--color-primary)] hover:bg-[#653767] text-white font-medium py-3 px-8 rounded-md inline-block transition duration-300 ease-in-out">
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;