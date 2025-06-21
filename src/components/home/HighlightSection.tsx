"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

// News highlight data
const newsItems = [
  {
    date: "6 May 2025",
    title: "Niagara Networks And Netpoleon Announce Partnership To Expand The Next Generation Network Visibility Solutions In India",
    link: "/news/niagara-networks-partnership"
  },
  {
    date: "2 Dec 2024",
    title: "Netpoleon India Wins Top VAD Award 2024",
    link: "/news/netpoleon-vad-award-2024"
  },
  {
    date: "27 Nov 2024",
    title: "Netpoleon India Shines Again: Wins 'Best VAD - Network Security' at Star Nite Awards for the 4th Consecutive Year",
    link: "/news/netpoleon-star-nite-awards-2024"
  },
  {
    date: "16 Oct 2024",
    title: "Netpoleon India has been named the FY24 Distributor of the Year by Infoblox",
    link: "/news/netpoleon-infoblox-distributor-2024"
  },
  {
    date: "26 Aug 2024",
    title: "Netpoleon India Honored as Best Distributor at the ISODA United Summit 2024",
    link: "/news/netpoleon-isoda-summit-2024"
  }
];

const HighlightSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 z-0"></div>
      
      {/* Wave background pattern */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute inset-0 bg-[url('/wave-bg.svg')] bg-repeat-x bg-bottom"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#f15a22] to-[#743f77] z-0"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-primary)]/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[var(--color-primary)]/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          HIGHLIGHT
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* News sidebar */}
            <div className="bg-[var(--color-primary)] text-white p-8 flex items-center justify-center md:w-64">
              <h3 className="text-3xl font-semibold">NEWS</h3>
            </div>

            {/* News content */}
            <div className="flex-1 bg-white">
              {newsItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.link}
                  className="flex flex-col md:flex-row border-b border-gray-200 last:border-b-0 hover:bg-gray-100 transition-colors"
                >
                  <div className="p-4 md:p-6 md:w-48 text-gray-600 opacity-75 font-medium border-r border-gray-200">
                    {item.date}
                  </div>
                  <div className="p-4 md:p-6 text-blue-400 flex-1 hover:underline">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <Link href="/news" className="text-[var(--color-primary)] hover:text-[var(--color-primary)]font-medium inline-flex items-center transition-colors">
              View all news
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;