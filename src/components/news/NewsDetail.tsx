"use client";

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

// TypeScript interface for news items
interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  category: string;
  image: string;
}

// This would typically come from a CMS or API in a real application
const getNewsDetail = (id: string): NewsItem | null => {
  // Mock data for demonstration
  const newsDatabase: Record<string, NewsItem> = {
    'niagara-networks-partnership': {
      id: 'niagara-networks-partnership',
      title: "Niagara Networks And FranklinOne Announce Partnership To Expand The Next Generation Network Visibility Solutions In India",
      date: "8 May 2025",
      content: `
        <p>FranklinOne, a leading technology distributor in Asia, announced today a strategic partnership with Niagara Networks, a pioneer in network visibility solutions, to expand their joint presence in the Indian market.</p>
        
        <p>This collaboration will enable organizations across India to leverage Niagara Networks' comprehensive suite of network visibility solutions, backed by FranklinOne's extensive channel network and technical expertise.</p>

        <p>"We are excited to partner with Niagara Networks to bring their cutting-edge network visibility solutions to the Indian market," said John Smith, Regional Director of FranklinOne India. "This partnership aligns perfectly with our commitment to providing our partners and customers with innovative solutions that address the increasing complexity of network security and monitoring challenges."</p>
        
        <p>The partnership comes at a critical time when organizations are increasingly focused on improving their network visibility and security posture in response to evolving cyber threats and the complexity of hybrid IT environments.</p>
        
        <p>"India represents a significant growth opportunity for Niagara Networks, and we are thrilled to partner with FranklinOne to expand our presence in this dynamic market," said Jane Doe, VP of Global Sales at Niagara Networks. "FranklinOne's deep understanding of the local market, strong channel relationships, and technical expertise make them an ideal partner for us."</p>
        
        <p>Through this partnership, FranklinOne will distribute Niagara Networks' portfolio of network visibility solutions, including Network Packet Brokers, Bypass Switches, and Network TAPs, to enterprise and government customers throughout India.</p>
      `,
      category: "Partnership",
      image: "/news-partnership.jpg"
    },
    'cybersecurity-award': {
      id: 'cybersecurity-award',
      title: "FranklinOne Named Top Cybersecurity Distributor of the Year",
      date: "15 April 2025",
      content: `
        <p>FranklinOne has been recognized as the "Top Cybersecurity Distributor of the Year" at the annual Asia Pacific Security Excellence Awards. This prestigious recognition highlights FranklinOne's commitment to delivering cutting-edge cybersecurity solutions and exceptional service to its partners and customers.</p>
        
        <p>The award, presented at a gala ceremony in Singapore, recognizes distributors who have demonstrated excellence in supporting the cybersecurity ecosystem, offering comprehensive security solutions, and providing outstanding technical expertise and support.</p>
        
        <p>"We are honored to receive this recognition as it reflects our team's dedication to building strong partnerships with both vendors and channel partners," said Sarah Johnson, CEO of FranklinOne. "In an era of increasingly sophisticated cyber threats, we remain committed to enabling organizations across Asia Pacific to protect their digital assets with best-in-class security solutions."</p>
        
        <p>The award committee specifically noted FranklinOne's comprehensive security portfolio, technical expertise, and value-added services as key factors in their selection.</p>
        
        <p>Over the past year, FranklinOne has expanded its cybersecurity portfolio, adding several leading security vendors and launching a specialized security services division to better support its partners.</p>
        
        <p>FranklinOne continues to invest in its security practice, with increased training for its technical teams and enhanced support programs for partners looking to grow their security businesses.</p>
      `,
      category: "Awards",
      image: "/news-award.jpg"
    },
    'franklinone-vad-award-2024': {
      id: 'franklinone-vad-award-2024',
      title: "FranklinOne India Wins Top VAD Award 2024",
      date: "2 Dec 2024",
      content: `
        <p>FranklinOne India has been recognized as the Top Value-Added Distributor of the Year at the prestigious IT Industry Awards ceremony held in Mumbai last week.</p>
        
        <p>The award recognizes FranklinOne India's excellence in providing comprehensive technology solutions, technical expertise, and exceptional partner support throughout 2024. The company was selected from among more than 50 distributors operating in the Indian market.</p>
        
        <p>"This award is a testament to our team's unwavering commitment to excellence and innovation," said Rajiv Kumar, Country Manager for FranklinOne India. "We've made significant investments in building our technical capabilities and partner enablement programs over the past year, and this recognition validates our approach."</p>
        
        <p>The judging panel highlighted FranklinOne's comprehensive cybersecurity portfolio, pre-sales support, and partner training initiatives as key differentiators that contributed to their selection.</p>
        
        <p>The company has experienced significant growth in the Indian market over the past year, adding several new technology vendors to its portfolio and expanding its partner network to more than 1,000 active resellers across the country.</p>
        
        <p>FranklinOne India continues to focus on emerging technologies, with plans to further expand its offerings in cloud security, zero trust architecture, and advanced threat protection in the coming year.</p>
      `,
      category: "Award",
      image: "/news-award.jpg"
    }
  };

  return newsDatabase[id] || null;
};

// Client component for news detail
export default function NewsDetail({ id }: { id: string }) {
  const newsItem = getNewsDetail(id);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Import animations CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/news/animations.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  if (!newsItem) {
    notFound();
  }
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  // Get related articles (excluding current article)
  const relatedArticles: NewsItem[] = [];
  
  // Safely add cybersecurity-award if it exists and is not the current article
  const awardArticle = getNewsDetail('cybersecurity-award');
  if (awardArticle && awardArticle.id !== newsItem.id) {
    relatedArticles.push(awardArticle);
  }
  
  // Safely add vad-award if it exists and is not the current article
  const vadArticle = getNewsDetail('franklinone-vad-award-2024');
  if (vadArticle && vadArticle.id !== newsItem.id) {
    relatedArticles.push(vadArticle);
  }
  
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero section with title and animated background */}
      <section className="relative py-20 bg-gradient-to-b from-[#faf7fe] via-white to-gray-50 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Diagonal color band with primary brand colors */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#743f77]/10 via-transparent to-[#f15a22]/10 transform -rotate-6 scale-150"></div>
          
          {/* Abstract shapes */}
          <div className="absolute top-1/4 right-[5%] w-32 h-32 rounded-full bg-[var(--color-primary)]/5 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 left-[8%] w-24 h-24 rounded-full bg-[var(--color-primary)]/5 animate-pulse" style={{ animationDuration: '6s' }}></div>
          
          {/* Particle dots */}
          <div className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-[var(--color-primary)]/30"></div>
          <div className="absolute top-[35%] right-[15%] w-3 h-3 rounded-full bg-[var(--color-primary)]/30"></div>
          <div className="absolute bottom-[25%] left-[40%] w-2 h-2 rounded-full bg-[var(--color-primary)]/30"></div>
        </div>
        
        {/* Animated gradient line */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-2 overflow-hidden"
        >
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
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Link 
                href="/news" 
                className="inline-flex items-centertext-[var(--color-primary)] hover:text-[#652d68] font-medium mb-6"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to all news
              </Link>
            </motion.div>
            
            <motion.span 
              className="inline-block bg-[var(--color-primary)] text-white text-sm py-1 px-3 rounded-full mb-4"
              variants={fadeInUp}
            >
              {newsItem.category}
            </motion.span>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 leading-tight"
              variants={fadeInUp}
            >
              {newsItem.title}
            </motion.h1>
            
            <motion.div 
              className="flex items-center text-gray-600 mb-8"
              variants={fadeInUp}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>{newsItem.date}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Content section with enhanced styling */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Featured image */}
            <div className="w-full h-72 bg-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#743f77]/30 to-[#f15a22]/30 mix-blend-multiply z-10"></div>
              <div className="absolute inset-0 bg-[url('/news-banner.jpg')] bg-cover bg-center"></div>
            </div>
            
            <div className="p-6 md:p-10">
              <div 
                ref={contentRef}
                className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-[#743f77] prose-a:no-underline hover:prose-a:text-[#f15a22] text-gray-700"
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
              />
              
              {/* Related articles */}
              {relatedArticles.length > 0 && (
                <div className="mt-16 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedArticles.map((article) => (
                      <Link href={`/news/${article.id}`} key={article.id} className="group">
                        <div className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                          <div className="h-40 bg-gray-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#743f77]/20 to-[#f15a22]/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/news-card.jpg')" }}></div>
                          </div>
                          <div className="p-5">
                            <span className="inline-block bg-[var(--color-primary)]/10text-[var(--color-primary)] text-xs py-1 px-2 rounded-full mb-2">
                              {article.category}
                            </span>
                            <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#f15a22] transition-colors duration-300">
                              {article.title}
                            </h4>
                            <p className="text-sm text-gray-500">{article.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Social sharing */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-600 text-sm mb-4 sm:mb-0">Share this article:</span>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="#" 
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="inline-block p-px bg-gradient-to-r from-[#743f77] to-[#f15a22] rounded-full hover:shadow-lg transition-all duration-300">
                <Link 
                  href="/news" 
                  className="flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-800 hover:bg-transparent hover:text-white transition-all duration-300"
                >
                  <span className="font-medium">View more articles</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Newsletter section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-gradient-to-r from-[#743f77] to-[#f15a22] rounded-2xl overflow-hidden shadow-xl relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-white rounded-full translate-y-1/2"></div>
            </div>
            
            <div className="relative p-8 md:p-12 text-white">
              <div className="md:flex items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay informed with FranklinOne</h3>
                  <p className="text-white/80">Join our newsletter to receive the latest news and updates about our products, partnerships, and industry insights.</p>
                </div>
                <div className="shrink-0">
                  <div className="flex flex-col sm:flex-row">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full sm:w-64 px-4 py-3 rounded-l-md sm:rounded-r-none mb-2 sm:mb-0 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="bg-whitetext-[var(--color-primary)] hover:bg-gray-100 font-medium px-6 py-3 rounded-md sm:rounded-l-none transition-colors duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
