"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const vendors = [
	// IT, Network, and Security Vendors
	{
		name: 'SentinelOne',
		logo: '/images/sentinelone.png', // You can replace with actual logo path
		description: 'SentinelOne is a leader in AI-powered cybersecurity, providing autonomous endpoint protection, detection, and response through their Singularity platform. Their advanced threat detection and automated response capabilities help organizations defend against ransomware, malware, and sophisticated cyber attacks.',
		solutions: ['Endpoint Security', 'XDR Platform', 'AI-Powered Threat Detection', 'Automated Response'],
		website: 'https://www.sentinelone.com',
		category: 'IT, Network, and Security'
	},
	{
		name: 'Netskope',
		logo: '/images/netskope logo.png', // You can replace with actual logo path
		description: 'Netskope is a SASE leader delivering secure access service edge solutions. Their cloud-native platform provides comprehensive security for users, applications, and data across cloud, web, and private applications, enabling secure digital transformation.',
		solutions: ['SASE', 'Zero Trust Network Access', 'Cloud Security', 'Secure Web Gateway'],
		website: 'https://www.netskope.com',
		category: 'IT, Network, and Security'
	},
	{
		name: 'Qualys',
		logo: '/images/qualy.png', // You can replace with actual logo path
		description: 'Qualys is a leading provider of cloud-based IT, security, and compliance solutions. Their Enterprise TruRisk Platform helps organizations measure, manage, and reduce cyber risk through vulnerability management, asset discovery, and automated remediation.',
		solutions: ['Vulnerability Management', 'Asset Discovery', 'Compliance Management', 'Cloud Security'],
		website: 'https://www.qualys.com',
		category: 'IT, Network, and Security'
	},
	{
		name: 'Varonis',
		logo: '/images/varonis.jpg', // You can replace with actual logo path
		description: 'Varonis is the #1 Data Security Platform that automatically finds critical data, remediates exposure, and stops threats in the cloud and on-premises. Their platform provides comprehensive data discovery, classification, and protection capabilities.',
		solutions: ['Data Security', 'Data Discovery & Classification', 'Insider Threat Detection', 'Data Access Governance'],
		website: 'https://www.varonis.com',
		category: 'IT, Network, and Security'
	},
	{
		name: 'Proofpoint',
		logo: '/images/proofpoint.jpg', // You can replace with actual logo path
		description: 'Proofpoint is a leading cybersecurity and compliance company that protects organizations\' greatest assets and biggest risks: their people. Their integrated suite of cloud-based solutions helps companies stop targeted threats and safeguard their data.',
		solutions: ['Email Security', 'Data Loss Prevention', 'Threat Protection', 'Security Awareness Training'],
		website: 'https://www.proofpoint.com',
		category: 'IT, Network, and Security'
	},
	{
		name: 'Ivanti',
		logo: '/images/ivanti.png', // You can replace with actual logo path
		description: 'Ivanti provides unified IT service management, security, and endpoint management solutions. Their platform helps organizations discover, manage, secure, and service all their IT assets from a single console, improving efficiency and reducing security risks.',
		solutions: ['IT Service Management', 'Endpoint Management', 'Security Management', 'Asset Discovery'],
		website: 'https://www.ivanti.com',
		category: 'IT, Network, and Security'
	},
	{
		name: 'Blancco',
		logo: '/images/blancco.png', // You can replace with actual logo path
		description: 'Blancco is the industry standard for secure data erasure and mobile device diagnostics. Their solutions ensure complete data sanitization and device lifecycle management, helping organizations maintain data privacy and comply with regulations.',
		solutions: ['Data Erasure', 'Mobile Diagnostics', 'Device Lifecycle Management', 'Compliance Reporting'],
		website: 'https://www.blancco.com',
		category: 'IT, Network, and Security'
	},
	// Physical Security Vendors
	{
		name: 'Milestone Systems',
		logo: '/images/mil.png', // You can replace with actual logo path
		description: 'Milestone Systems is a leading provider of open platform IP video management software. Their XProtect platform enables organizations to manage and view video surveillance systems, access control, and other security technologies from a unified interface.',
		solutions: ['Video Management Software', 'IP Surveillance', 'Access Control Integration', 'Analytics Platform'],
		website: 'https://www.milestonesys.com',
		category: 'Physical Security'
	},
	{
		name: 'Gallagher',
		logo: '/images/gall.jpg', // You can replace with actual logo path
		description: 'Gallagher Security is a global leader in perimeter protection, access control, and alarm monitoring solutions. Their integrated security management systems provide comprehensive physical security for critical infrastructure and high-security facilities.',
		solutions: ['Perimeter Security', 'Access Control', 'Intrusion Detection', 'Command & Control'],
		website: 'https://www.gallaghersecurity.com',
		category: 'Physical Security'
	},
	{
		name: 'Vaxtor',
		logo: '/vendor-logos/vaxtor-logo.svg', // You can replace with actual logo path
		description: 'Vaxtor specializes in advanced automatic number plate recognition (ANPR) and video analytics solutions. Their AI-powered systems provide intelligent video surveillance capabilities for traffic monitoring, parking management, and security applications.',
		solutions: ['ANPR Technology', 'Video Analytics', 'Traffic Monitoring', 'Intelligent Surveillance'],
		website: 'https://www.vaxtor.com',
		category: 'Physical Security'
	}
];

const VendorsClient = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	useEffect(() => {
		// Check for mobile viewport
		const checkMobile = () => {
			setIsMobile(window.matchMedia('(max-width: 768px)').matches);
		};

		// Check for reduced motion preference
		const checkReducedMotion = () => {
			setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
		};

		checkMobile();
		checkReducedMotion();

		// Listen for changes
		const mobileQuery = window.matchMedia('(max-width: 768px)');
		const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		
		mobileQuery.addEventListener('change', checkMobile);
		motionQuery.addEventListener('change', checkReducedMotion);

		return () => {
			mobileQuery.removeEventListener('change', checkMobile);
			motionQuery.removeEventListener('change', checkReducedMotion);
		};
	}, []);

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
						animate={!isMobile && !prefersReducedMotion ? { 
							scale: [1, 1.05, 1],
							opacity: [0.3, 0.4, 0.3]
						} : {}}
						transition={!isMobile && !prefersReducedMotion ? { 
							duration: 15, 
							repeat: Infinity, 
							ease: "easeInOut" 
						} : {}}
					/>
				</div>
				
				{/* Animated network grid - Mobile optimized */}
				{!isMobile && !prefersReducedMotion && (
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
				)}
				
				{/* Animated dots - Mobile optimized */}
				{!isMobile && !prefersReducedMotion && (
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
				)}

				{/* Enhanced floating security elements - Mobile optimized */}
				{!isMobile && !prefersReducedMotion && (
					<div className="absolute inset-0 z-15">
						{[...Array(12)].map((_, i) => (
							<motion.div
								key={i}
								className="absolute text-[var(--color-primary)]"
								style={{
									left: `${15 + Math.random() * 70}%`,
									top: `${15 + Math.random() * 70}%`,
								}}
								initial={{ opacity: 0, scale: 0 }}
								animate={{
									y: [0, -25, 0],
									rotate: [0, 90, 180, 270, 360],
									scale: [0.8, 1.1, 0.8],
									opacity: [0.15, 0.35, 0.15],
								}}
								transition={{
									duration: 12 + Math.random() * 8,
									repeat: Infinity,
									delay: Math.random() * 3,
									ease: "easeInOut",
								}}
							>
								{i % 6 === 0 && <div className="w-5 h-5 border-2 border-current rounded-full" />}
								{i % 6 === 1 && <div className="w-4 h-4 border-2 border-current transform rotate-45" />}
								{i % 6 === 2 && <div className="w-4 h-6 border-2 border-current rounded-sm" />}
								{i % 6 === 3 && <div className="w-6 h-2 bg-current rounded-full" />}
								{i % 6 === 4 && (
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
									</svg>
								)}
								{i % 6 === 5 && (
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								)}
							</motion.div>
						))}
					</div>
				)}

				{/* Enhanced shield overlay pattern - Mobile optimized */}
				{!isMobile && !prefersReducedMotion && (
					<div className="absolute inset-0 opacity-8 z-10">
						<motion.div
							animate={{ rotate: 360 }}
							transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
							className="absolute top-1/3 left-1/4 w-72 h-72"
						>
							<svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[var(--color-primary)]">
								<path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
							</svg>
						</motion.div>
						<motion.div
							animate={{ rotate: -360 }}
							transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
							className="absolute bottom-1/4 right-1/4 w-48 h-48"
						>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-[#f15a22]">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</motion.div>
					</div>
				)}

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
						
						{/* Animated border glow - Mobile optimized */}
						<motion.div
							className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)]/50"
							animate={!isMobile && !prefersReducedMotion ? {
								boxShadow: [
									'0 0 5px rgba(116, 63, 119, 0.3)',
									'0 0 20px rgba(116, 63, 119, 0.6)',
									'0 0 5px rgba(116, 63, 119, 0.3)'
								]
							} : {}}
							transition={!isMobile && !prefersReducedMotion ? {
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut"
							} : {}}
						/>
						
						{/* Content */}
						<div className="relative flex items-center">
							{/* Animated pulse dot - Mobile optimized */}
							<motion.div 
								className="w-3 h-3 bg-[var(--color-primary)] rounded-full mr-4"
								animate={!isMobile && !prefersReducedMotion ? {
									scale: [1, 1.3, 1],
									opacity: [1, 0.7, 1]
								} : {}}
								transition={!isMobile && !prefersReducedMotion ? {
									duration: 1.5,
									repeat: Infinity,
									ease: "easeInOut"
								} : {}}
							/>
							
							{/* Shield icon - Mobile optimized */}
							<motion.div
								animate={!isMobile && !prefersReducedMotion ? { rotate: [0, 5, -5, 0] } : {}}
								transition={!isMobile && !prefersReducedMotion ? {
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut"
								} : {}}
								className="mr-3"
							>
								<svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
								</svg>
							</motion.div>
							
							{/* Text with gradient effect - Mobile optimized */}
							<motion.span 
								className="text-white text-sm font-semibold tracking-wide bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
								animate={!isMobile && !prefersReducedMotion ? {
									backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
								} : {}}
								transition={!isMobile && !prefersReducedMotion ? {
									duration: 4,
									repeat: Infinity,
									ease: "linear"
								} : {}}
								style={{
									backgroundSize: '200% 100%'
								}}
							>
								TRUSTED TECHNOLOGY PARTNERS
							</motion.span>
						</div>
					</motion.div>

					{/* Enhanced title with improved animations */}
					<motion.h1 
						className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ 
							duration: 1, 
							delay: 0.4,
							type: "spring",
							stiffness: 80
						}}
					>
						<motion.span 
							className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent"
							animate={!isMobile && !prefersReducedMotion ? {
								backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
							} : {}}
							transition={!isMobile && !prefersReducedMotion ? {
								duration: 8,
								repeat: Infinity,
								ease: "easeInOut"
							} : {}}
							style={{
								backgroundSize: '200% 100%'
							}}
						>
							Our Technology
						</motion.span>
						<br />
						<motion.span 
							className="text-white"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8, duration: 0.8 }}
						>
							Vendors
						</motion.span>
					</motion.h1>
					
					{/* Enhanced decorative element - Mobile optimized */}
					<motion.div 
						className="flex items-center justify-center mb-10"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ 
							duration: 1, 
							delay: 0.6,
							type: "spring",
							stiffness: 120
						}}
					>
						<motion.div 
							className="w-32 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent rounded-full"
							animate={!isMobile && !prefersReducedMotion ? {
								scaleX: [1, 1.1, 1],
								opacity: [0.8, 1, 0.8]
							} : {}}
							transition={!isMobile && !prefersReducedMotion ? {
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut"
							} : {}}
						/>
						<motion.div 
							className="w-10 h-10 bg-gradient-to-r from-[var(--color-primary)]/20 to-[#f15a22]/20 rounded-full flex items-center justify-center mx-6 border border-[var(--color-primary)]/30"
							animate={!isMobile && !prefersReducedMotion ? {
								rotate: 360,
								scale: [1, 1.05, 1]
							} : {}}
							transition={!isMobile && !prefersReducedMotion ? {
								rotate: { duration: 8, repeat: Infinity, ease: "linear" },
								scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
							} : {}}
						>
							<div className="w-4 h-4 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] rounded-full"></div>
						</motion.div>
						<motion.div 
							className="w-32 h-1 bg-gradient-to-r from-transparent via-[#f15a22] to-transparent rounded-full"
							animate={!isMobile && !prefersReducedMotion ? {
								scaleX: [1, 1.1, 1],
								opacity: [0.8, 1, 0.8]
							} : {}}
							transition={!isMobile && !prefersReducedMotion ? {
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 1
							} : {}}
						/>
					</motion.div>
					
					{/* Enhanced description */}
					<motion.p 
						className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
					>
						We partner with <motion.span 
							className="text-[var(--color-primary)] font-semibold"
							animate={!isMobile && !prefersReducedMotion ? {
								textShadow: [
									'0 0 5px rgba(116, 63, 119, 0.5)',
									'0 0 10px rgba(116, 63, 119, 0.8)',
									'0 0 5px rgba(116, 63, 119, 0.5)'
								]
							} : {}}
							transition={!isMobile && !prefersReducedMotion ? {
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut"
							} : {}}
						>
							industry-leading technology providers
						</motion.span> to deliver best-of-breed security and networking solutions that protect and empower your digital infrastructure.
					</motion.p>

					{/* Enhanced Security stats */}
					<motion.div 
						className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1 }}
					>
						{[
							{ number: "8+", label: "Technology Partners", color: "var(--color-primary)", delay: 0 },
							{ number: "100+", label: "Security Solutions", color: "#f15a22", delay: 0.2 },
							{ number: "25+", label: "Years Experience", color: "var(--color-primary)", delay: 0.4 }
						].map((stat, index) => (
							<motion.div
								key={index}
								className="text-center group"
								initial={{ opacity: 0, scale: 0.8, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								transition={{ 
									duration: 0.6, 
									delay: 1.2 + stat.delay,
									type: "spring",
									stiffness: 100
								}}
								whileHover={{ 
									scale: 1.05,
									transition: { duration: 0.2 }
								}}
							>
								{/* Background glow */}
								<motion.div
									className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									style={{
										background: `radial-gradient(circle, ${stat.color}15 0%, transparent 70%)`
									}}
								/>
								
								{/* Icon - Mobile optimized */}
								<motion.div
									className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center relative"
									style={{ 
										background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
										border: `2px solid ${stat.color}30`
									}}
									animate={!isMobile && !prefersReducedMotion ? {
										boxShadow: [
											`0 0 5px ${stat.color}30`,
											`0 0 15px ${stat.color}50`,
											`0 0 5px ${stat.color}30`
										]
									} : {}}
									transition={!isMobile && !prefersReducedMotion ? {
										duration: 2,
										repeat: 3,
										ease: "easeInOut",
										delay: index * 0.5
									} : {}}
								>
									{index === 0 && (
										<svg className="w-8 h-8" style={{ color: stat.color }} fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 4a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm7-1a1 1 0 011 1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1V8a1 1 0 011-1h1z" clipRule="evenodd" />
										</svg>
									)}
									{index === 1 && (
										<svg className="w-8 h-8" style={{ color: stat.color }} fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
									)}
									{index === 2 && (
										<svg className="w-8 h-8" style={{ color: stat.color }} fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
										</svg>
									)}
								</motion.div>
								
								{/* Number with counter animation */}
								<motion.div 
									className="text-4xl md:text-5xl font-bold mb-2 relative"
									style={{ color: stat.color }}
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ 
										duration: 0.5, 
										delay: 1.4 + stat.delay,
										type: "spring",
										stiffness: 150
									}}
								>
									<motion.span
										animate={!isMobile && !prefersReducedMotion ? {
											textShadow: [
												`0 0 5px ${stat.color}50`,
												`0 0 15px ${stat.color}80`,
												`0 0 5px ${stat.color}50`
											]
										} : {}}
										transition={!isMobile && !prefersReducedMotion ? {
											duration: 2,
											repeat: 2,
											ease: "easeInOut",
											delay: index * 0.3
										} : {}}
									>
										{stat.number}
									</motion.span>
								</motion.div>
								
								{/* Label */}
								<motion.div 
									className="text-sm md:text-base text-gray-400 font-medium tracking-wide"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 1.6 + stat.delay, duration: 0.5 }}
								>
									{stat.label}
								</motion.div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Enhanced Vendors Section */}
			<section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
				{/* Background patterns */}
				<div className="absolute inset-0 opacity-5">
					<div 
						className="absolute inset-0 bg-repeat"
						style={{
							backgroundImage: `
								linear-gradient(rgba(116, 63, 119, 0.4) 1px, transparent 1px),
								linear-gradient(90deg, rgba(116, 63, 119, 0.4) 1px, transparent 1px)
							`,
							backgroundSize: '60px 60px'
						}}
					/>
				</div>

				{/* Floating particles - Mobile optimized */}
				{!isMobile && !prefersReducedMotion && (
					<div className="absolute inset-0">
						{[...Array(20)].map((_, i) => (
							<motion.div
								key={i}
								className="absolute w-1 h-1 bg-[var(--color-primary)] rounded-full opacity-30"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
								}}
								animate={{
									scale: [1, 1.5, 1],
									opacity: [0.2, 0.6, 0.2],
									y: [0, -50, 0],
								}}
								transition={{
									duration: 8 + Math.random() * 4,
									repeat: Infinity,
									delay: Math.random() * 5,
								}}
							/>
						))}
					</div>
				)}

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					{/* Section header */}
					<motion.div 
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							<span className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent">
								Technology Partners
							</span>
						</h2>
						<div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-8"></div>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Leading security and networking vendors that power our comprehensive solutions
						</p>
					</motion.div>

					{/* Group vendors by category */}
					{Object.entries(
						vendors.reduce((acc, vendor) => {
							if (!acc[vendor.category]) {
								acc[vendor.category] = [];
							}
							acc[vendor.category].push(vendor);
							return acc;
						}, {} as Record<string, typeof vendors>)
					).map(([category, categoryVendors]) => (
						<motion.div
							key={category}
							className="mb-16"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							{/* Category header */}
							<div className="mb-8">
								<h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center">
									<span className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent">
										{category}
									</span>
								</h3>
								<div className="w-16 h-1 bg-[var(--color-primary)] mb-4"></div>
							</div>

							{/* Vendors grid for this category */}
							<motion.div 
								className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
								variants={containerVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
							>
								{categoryVendors.map((vendor) => (
									<motion.div 
										key={vendor.name}
										className="group bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-xl overflow-hidden border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col relative aspect-square"
										variants={itemVariants}
										whileHover={{ 
											scale: 1.05,
											transition: { duration: 0.3 }
										}}
									>
										{/* Corner accents */}
										<div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[var(--color-primary)] opacity-40"></div>
										<div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[var(--color-primary)] opacity-40"></div>
										
										{/* Vendor logo section */}
										<div className="p-4 bg-gradient-to-br from-gray-700/30 to-gray-800/50 flex items-center justify-center flex-grow relative">
											{vendor.logo ? (
												<Image
													src={vendor.logo}
													alt={vendor.name}
													width={120}
													height={60}
													style={{ objectFit: 'contain' }}
													className="filter brightness-100 group-hover:brightness-110 transition-all duration-300 max-w-full max-h-full"
												/>
											) : (
												<div className="text-lg font-bold text-white/80 text-center">{vendor.name}</div>
											)}
										</div>
										
										{/* Vendor name */}
										<div className="p-3 text-center bg-gradient-to-r from-gray-800/30 to-gray-900/50">
											<h3 className="text-sm font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors duration-300 line-clamp-2">
												{vendor.name}
											</h3>
										</div>
										
										{/* Hover glow effect */}
										<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-[#f15a22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Enhanced Partnership Section */}
			<section className="py-20 bg-gradient-to-b from-black via-[var(--color-primary)]/10 to-black relative overflow-hidden">
				{/* Enhanced background patterns */}
				<div className="absolute inset-0 opacity-10">
					<div 
						className="absolute inset-0 bg-repeat"
						style={{
							backgroundImage: `
								linear-gradient(rgba(116, 63, 119, 0.6) 1px, transparent 1px),
								linear-gradient(90deg, rgba(116, 63, 119, 0.6) 1px, transparent 1px)
							`,
							backgroundSize: '40px 40px'
						}}
					/>
				</div>

				{/* Animated cybersecurity elements - Mobile optimized */}
				{!isMobile && !prefersReducedMotion && (
					<div className="absolute inset-0">
						{[...Array(25)].map((_, i) => (
							<motion.div
								key={i}
								className="absolute"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
								}}
								animate={{
									y: [0, -20, 0],
									rotate: [0, 180, 360],
									scale: [1, 1.2, 1],
								}}
								transition={{
									duration: 15 + Math.random() * 10,
									repeat: Infinity,
									delay: Math.random() * 8,
								}}
							>
								{i % 6 === 0 && <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full opacity-40" />}
								{i % 6 === 1 && <div className="w-3 h-3 border border-[var(--color-primary)] rounded-full opacity-30" />}
								{i % 6 === 2 && <div className="w-4 h-1 bg-[#f15a22] rounded-full opacity-25" />}
								{i % 6 === 3 && <div className="w-1 h-4 bg-[var(--color-primary)] rounded-full opacity-35" />}
								{i % 6 === 4 && <div className="w-2 h-2 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] rounded-full opacity-40" />}
								{i % 6 === 5 && (
									<svg className="w-4 h-4 text-[var(--color-primary)] opacity-20" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
									</svg>
								)}
							</motion.div>
						))}
					</div>
				)}

				<div style={{ display: 'none' }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<motion.h2 
							className="text-3xl md:text-4xl font-bold text-white mb-4"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<span className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent">
								OUR PARTNERSHIP APPROACH
							</span>
						</motion.h2>
						<motion.div 
							className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-8"
							initial={{ opacity: 0, width: 0 }}
							whileInView={{ opacity: 1, width: 96 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						></motion.div>
						<motion.p 
							className="text-xl text-gray-300 max-w-3xl mx-auto"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							How we work with our technology partners to deliver <span className="text-[var(--color-primary)] font-semibold">unparalleled value</span> to our clients
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="group bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 transition-all duration-500 text-center relative overflow-hidden"
						>
							{/* Corner accents */}
							<div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[var(--color-primary)] opacity-40"></div>
							<div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[var(--color-primary)] opacity-40"></div>
							
							<div className="w-16 h-16 bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 relative">
								<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								<div className="absolute inset-0 bg-[var(--color-primary)]/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
							</div>
							<h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">Technical Expertise</h3>
							<p className="text-gray-300 leading-relaxed">
								Our team undergoes rigorous <span className="text-[var(--color-primary)] font-semibold">certification and training programs</span> with our vendor partners to maintain deep technical expertise in their solutions.
							</p>
							
							{/* Hover effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-[#f15a22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
						</motion.div>
						
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="group bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-2xl p-8 border border-[#f15a22]/20 hover:border-[#f15a22]/40 transition-all duration-500 text-center relative overflow-hidden"
						>
							{/* Corner accents */}
							<div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#f15a22] opacity-40"></div>
							<div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#f15a22] opacity-40"></div>
							
							<div className="w-16 h-16 bg-[#f15a22]/20 text-[#f15a22] rounded-full flex items-center justify-center mx-auto mb-6 relative">
								<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
								<div className="absolute inset-0 bg-[#f15a22]/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
							</div>
							<h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#f15a22] transition-colors duration-300">Strategic Partnerships</h3>
							<p className="text-gray-300 leading-relaxed">
								We foster deep strategic partnerships with our vendors, ensuring <span className="text-[#f15a22] font-semibold">early access to new technologies</span> and priority support for our clients.
							</p>
							
							{/* Hover effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-[#f15a22]/5 to-[var(--color-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
						</motion.div>
						
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="group bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/90 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 transition-all duration-500 text-center relative overflow-hidden"
						>
							{/* Corner accents */}
							<div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[var(--color-primary)] opacity-40"></div>
							<div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[var(--color-primary)] opacity-40"></div>
							
							<div className="w-16 h-16 bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 relative">
								<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
								<div className="absolute inset-0 bg-[var(--color-primary)]/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
							</div>
							<h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">Vendor-Agnostic Approach</h3>
							<p className="text-gray-300 leading-relaxed">
								While we maintain strong partnerships, we remain <span className="text-[var(--color-primary)] font-semibold">vendor-agnostic</span>, always recommending the best solution for each client&apos;s unique requirements.
							</p>
							
							{/* Hover effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-[#f15a22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Enhanced CTA Section */}
			<section className="py-20 bg-gradient-to-br from-[var(--color-primary)] via-purple-900 to-black relative overflow-hidden">
				{/* Cyber security pattern */}
				<div className="absolute inset-0 opacity-10">
					<div 
						className="absolute inset-0 bg-repeat"
						style={{
							backgroundImage: `
								linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
								linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
							`,
							backgroundSize: '60px 60px'
						}}
					/>
				</div>

				{/* Floating security elements - Mobile optimized */}
				{!isMobile && !prefersReducedMotion && (
					<div className="absolute inset-0">
						{[...Array(25)].map((_, i) => (
							<motion.div
								key={i}
								className="absolute"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
								}}
								animate={{
									y: [0, -30, 0],
									rotate: [0, 360, 0],
									opacity: [0.2, 0.6, 0.2],
								}}
								transition={{
									duration: 10 + Math.random() * 10,
									repeat: Infinity,
									delay: Math.random() * 8,
								}}
							>
								{i % 4 === 0 && <div className="w-1 h-1 bg-white rounded-full" />}
								{i % 4 === 1 && <div className="w-2 h-2 border border-white rounded-full" />}
								{i % 4 === 2 && <div className="w-3 h-1 bg-[#f15a22] rounded-full" />}
								{i % 4 === 3 && (
									<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
									</svg>
								)}
							</motion.div>
						))}
					</div>
				)}

				{/* Central tech circle - Mobile optimized */}
				{!isMobile && !prefersReducedMotion && (
					<div className="absolute inset-0 flex items-center justify-center">
						<motion.div
							className="w-96 h-96 border border-white/10 rounded-full"
							animate={{ rotate: 360 }}
							transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
						/>
						<motion.div
							className="absolute w-80 h-80 border border-white/5 rounded-full"
							animate={{ rotate: -360 }}
							transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
						/>
					</div>
				)}

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center">
						{/* Security badge */}
						<motion.div
							className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
							<span className="text-white text-sm font-medium">READY TO SECURE YOUR FUTURE?</span>
						</motion.div>

						<motion.h2 
							className="text-4xl md:text-5xl font-bold text-white mb-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<span className="bg-gradient-to-r from-white via-[#f15a22] to-white bg-clip-text text-transparent">
								Ready to explore our
							</span>
							<br />
							<span className="text-white">technology solutions?</span>
						</motion.h2>
						
						<motion.p 
							className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							Contact our team to discover how our <span className="text-[#f15a22] font-semibold">vendor partnerships</span> and cutting-edge solutions can help you address your security and networking challenges with confidence.
						</motion.p>
						
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="flex flex-col sm:flex-row justify-center gap-6"
						>
							<Link 
								href="/contact-us" 
								className="group bg-white text-[var(--color-primary)] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-2xl flex items-center justify-center relative overflow-hidden"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
								<svg className="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
								</svg>
								<span className="relative z-10">Schedule a Consultation</span>
							</Link>
							<Link 
								href="/solutions" 
								className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out flex items-center justify-center"
							>
								<svg className="w-5 h-5 mr-2 group-hover:text-[var(--color-primary)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
								Explore Solutions
							</Link>
						</motion.div>

						{/* Additional security features */}
						<motion.div 
							className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.7 }}
						>
							<div className="flex items-center text-white/80">
								<svg className="w-5 h-5 mr-2 text-[#f15a22]" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
								</svg>
								<span className="text-sm">Certified Experts</span>
							</div>
							<div className="flex items-center text-white/80">
								<svg className="w-5 h-5 mr-2 text-[#f15a22]" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
								</svg>
								<span className="text-sm">Proven Solutions</span>
							</div>
							<div className="flex items-center text-white/80">
								<svg className="w-5 h-5 mr-2 text-[#f15a22]" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<span className="text-sm">24/7 Support</span>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default VendorsClient;
