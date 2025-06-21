"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Mock data for news items - in a real application, this would come from an API or CMS
const allNewsItems = [
  {
    id: 'niagara-networks-partnership',
    date: "8 May 2025",
    title: "Niagara Networks And FranklinOne Announce Partnership To Expand The Next Generation Network Visibility Solutions In India",
    excerpt: "This partnership will enable organizations across India to leverage Niagara Networks' comprehensive suite of network visibility solutions...",
    category: "Partnership",
    featured: true,
    image: "/news-partnership.jpg" // In production, replace with actual image path
  },
  {
    id: 'franklinone-vad-award-2024',
    date: "2 Dec 2024",
    title: "FranklinOne India Wins Top VAD Award 2024",
    excerpt: "FranklinOne India has been recognized as the Top Value-Added Distributor of the Year at the prestigious IT Industry Awards...",
    category: "Award",
    featured: true,
    image: "/news-award.jpg" // In production, replace with actual image path
  },
  {
    id: 'franklinone-star-nite-awards-2024',
    date: "27 Nov 2024",
    title: "FranklinOne India Shines Again: Wins 'Best VAD - Network Security' at Star Nite Awards for the 4th Consecutive Year",
    excerpt: "The company's consistent excellence in network security distribution has been recognized once again at the industry's leading awards ceremony...",
    category: "Award",
    featured: false,
    image: "/news-star-award.jpg" // In production, replace with actual image path
  },
  {
    id: 'franklinone-infoblox-distributor-2024',
    date: "16 Oct 2024",
    title: "FranklinOne India has been named the FY24 Distributor of the Year by Infoblox",
    excerpt: "This recognition comes after a year of exceptional performance in distributing Infoblox's solutions across the Indian market...",
    category: "Recognition",
    featured: false,
    image: "/news-infoblox.jpg" // In production, replace with actual image path
  },
  {
    id: 'franklinone-isoda-summit-2024',
    date: "26 Aug 2024",
    title: "FranklinOne India Honored as Best Distributor at the ISODA United Summit 2024",
    excerpt: "The ISODA United Summit recognized FranklinOne's outstanding contribution to the IT distribution landscape in India...",
    category: "Recognition",
    featured: false,
    image: "/news-isoda.jpg" // In production, replace with actual image path
  },
  {
    id: 'franklinone-asia-expansion',
    date: "15 Jul 2024",
    title: "FranklinOne Announces Major Expansion Across Southeast Asia",
    excerpt: "The company is set to strengthen its presence in key markets including Singapore, Malaysia, and Thailand with new offices and team members...",
    category: "Expansion",
    featured: true,
    image: "/news-expansion.jpg" // In production, replace with actual image path
  },
  {
    id: 'franklinone-cyber-security-forum',
    date: "3 Jun 2024",
    title: "FranklinOne Hosts Annual Cyber Security Forum 2024",
    excerpt: "Industry leaders gathered at the FranklinOne Cyber Security Forum to discuss emerging threats and innovative solutions...",
    category: "Event",
    featured: false,
    image: "/news-cyber-forum.jpg" // In production, replace with actual image path
  },
  {
    id: 'franklinone-technology-partnership',
    date: "24 May 2024",
    title: "FranklinOne Partners with Leading Cloud Security Provider",
    excerpt: "The strategic partnership will enhance FranklinOne's cloud security portfolio with cutting-edge solutions...",
    category: "Partnership",
    featured: false,
    image: "/news-cloud-security.jpg" // In production, replace with actual image path
  },
  {
    id: 'franklinone-q1-growth-2024',
    date: "10 Apr 2024",
    title: "FranklinOne Reports Record Growth in Q1 2024",
    excerpt: "The company achieved unprecedented revenue growth in the first quarter, driven by strong demand for cybersecurity solutions...",
    category: "Business",
    featured: true,
    image: "/news-growth.jpg" // In production, replace with actual image path
  },
  {
    id: 'franklinone-education-initiative',
    date: "28 Mar 2024",
    title: "FranklinOne Launches Education Initiative for Cybersecurity Professionals",
    excerpt: "The new program aims to address the skills gap in the cybersecurity industry through comprehensive training and certification...",
    category: "Education",
    featured: false,
    image: "/news-education.jpg" // In production, replace with actual image path
  }
];

// Categories for filtering
const categories = ["All", "Partnership", "Award", "Recognition", "Expansion", "Event", "Business", "Education"];

const NewsClient = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredNews, setFilteredNews] = useState(allNewsItems);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter news based on category and search term
  useEffect(() => {
    const filtered = allNewsItems.filter(item => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredNews(filtered);
  }, [activeCategory, searchTerm]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Search and filter */}
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Filter News</h2>
              <div className="relative max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search news..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f15a22]/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Featured news - only shown if we have featured news in the filtered results */}
        {filteredNews.some(item => item.featured) && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 relative inline-block">
              Featured News
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-[var(--color-primary)]"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8 }}
              />
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {filteredNews
                .filter(item => item.featured)
                .slice(0, 3)
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]"
                  >
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#743f77]/70" />
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="bg-[var(--color-primary)] text-white text-xs py-1 px-2 rounded-md">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-smtext-[var(--color-primary)] font-medium mb-2">{item.date}</p>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 text-gray-800 hover:text-[#f15a22] transition-colors">
                        <Link href={`/news/${item.id}`}>{item.title}</Link>
                      </h3>
                      <p className="text-gray-600 line-clamp-3 mb-4">{item.excerpt}</p>
                      <Link 
                        href={`/news/${item.id}`}
                        className="inline-flex items-centertext-[var(--color-primary)] hover:text-[#653767] font-medium transition-colors"
                      >
                        Read more
                        <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        )}
        
        {/* All news */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 relative inline-block">
            {activeCategory === "All" ? "All News" : `${activeCategory} News`}
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-[var(--color-primary)]"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8 }}
            />
          </h2>
          
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-xl font-medium text-gray-900">No news found</h3>
              <p className="mt-1 text-gray-500">Try changing your search or filter to find what you&#39;re looking for.</p>
              <div className="mt-6">
                <button 
                  onClick={() => {setActiveCategory("All"); setSearchTerm("");}} 
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[#652d68] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#743f77]"
                >
                  Clear filters
                </button>
              </div>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredNews.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-gray-100text-[var(--color-primary)] text-xs py-1 px-2 rounded-md">
                        {item.category}
                      </span>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-[#f15a22] transition-colors">
                      <Link href={`/news/${item.id}`}>{item.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{item.excerpt}</p>
                    <Link 
                      href={`/news/${item.id}`}
                      className="inline-flex items-center text-[#f15a22] hover:text-[#e04d15] font-medium transition-colors"
                    >
                      Read more
                      <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {filteredNews.length > 0 && (
            <div className="mt-12 flex justify-center">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center">
                Load more news
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsClient;