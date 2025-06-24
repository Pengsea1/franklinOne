"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const detailedSolutions = {
	endpointSecurity: [
		'Endpoint Protection (EDR/XDR)',
		'Mobile Threat Defense (MTD)',
		'AD Assessment',
		'AD Protection',
		'Insider Threat Management'
	],
	networkSecurity: [
		'Next-Gen SIEM',
		'Deception Solution',
		'Email Security Solution',
		'Data Loss Prevention (DLP) – Email DLP',
		'Secure Web Gateway (SWG)',
		'Zero Trust Network Access (ZTNA)',
		'Data Loss Prevention (DLP) – Network DLP',
		'Cloud Access Security Broker (CASB)',
		'Security Awareness Training',
		'Web Takedown Service',
		'Network Access Control (NAC)',
		'Virtual Private Network (VPN)'
	],
	dataSecurity: [
		'Data Security Platform',
		'Data Sanitization (Data Erasure)'
	],
	vulnerabilityManagement: [
		'Vulnerability Management Detection and Response (VMDR)',
		'Cybersecurity Asset Management (CAM)',
		'Policy Compliance (PC)',
		'File Integrity Monitoring (FIM)',
		'Security Assessment Questionnaire (SAQ)'
	],
	networkingSolutions: [
		'Next-Gen Firewall (NGFW)',
		'SD-WAN',
		'Device Intelligence and IOT Security',
		'Cloud Traffic Aggregation and Processing'
	],
	itOperations: [
		'IT Service Management',
		'IT Asset Management',
		'Endpoint Management',
		'Mobile Device Management (MDM)',
		'Patch Management'
	],
	physicalSecurity: [
		'Video Management Software (VMS)',
		'Access Control',
		'Automatic License Plate Recognition (ALPR)',
		'Optical Character Recognition (OCR)'
	]
};

const SolutionsClient = () => {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative min-h-[80vh] flex items-center justify-center bg-[#0a0e1a] text-white overflow-hidden">
				{/* Dark cyber background with overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,14,26,0.9)] via-[rgba(22,33,62,0.8)] to-[rgba(116,63,119,0.9)] z-10"></div>
					<div className="absolute inset-0 bg-[url('/cyber.png')] bg-cover bg-center z-0 opacity-40"></div>
				</div>
				
				{/* Animated network grid */}
				<div className="absolute inset-0 bg-[url('/network-bg.svg')] opacity-20 z-10"></div>
				
				{/* Animated dots */}
				<motion.div 
					className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-repeat z-10"
					animate={{ 
						backgroundPosition: ["0px 0px", "100px 100px"]
					}}
					transition={{
						duration: 60,
						ease: "linear",
						repeat: Infinity
					}}
				></motion.div>
				
				{/* Animated shield overlay */}
				<div className="absolute inset-0 flex items-center justify-center z-10">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 0.15 }}
						transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
					>
						<div className="w-[400px] h-[400px] rounded-full border-8 border-white/30"></div>
					</motion.div>
					<motion.div
						initial={{ scale: 0.5, opacity: 0 }}
						animate={{ scale: 0.7, opacity: 0.1 }}
						transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
						className="absolute"
					>
						<div className="w-[600px] h-[600px] rounded-full border-2 border-[var(--color-secondary)]/40"></div>
					</motion.div>
					<motion.div
						className="absolute w-full h-full flex items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.15 }}
						transition={{ duration: 1 }}
					>
						<svg width="240" height="240" viewBox="0 0 24 24" className="text-white/20">
							<path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
						</svg>
					</motion.div>
				</div>
				
				<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="text-center mb-20"
					>
						<motion.div 
							className="inline-block mb-6 px-4 py-1 rounded-full border border-[var(--color-secondary)]/30 bg-white/5 backdrop-blur-sm text-sm font-medium text-[var(--color-secondary)] mt-14"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							ENTERPRISE SECURITY SOLUTIONS
						</motion.div>
						
						<motion.h1 
							className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<span className="text-white block mb-2">Secure Solutions</span>
							<span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">Strategic Defense</span>
						</motion.h1>
						
						<motion.div 
							className="w-24 h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] mx-auto mb-8"
							initial={{ width: 0, opacity: 0 }}
							animate={{ width: "6rem", opacity: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
						></motion.div>
						
						<motion.p 
							className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-10"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.7 }}
						>
							Advanced cybersecurity and networking solutions to protect your organization&apos;s most valuable assets against evolving threats in an increasingly connected world.
						</motion.p>
						
						<motion.div
							className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 }}
						>
							<Link href="#solutions" 
								className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary)] shadow-lg hover:shadow-xl transition-all duration-300"
							>
								<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
								Explore Security Solutions
							</Link>
							<Link href="/contact-us" 
								className="inline-flex items-center px-8 py-4 border border-white/30 bg-transparent text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300"
							>
								Request Consultation
								<svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</Link>
						</motion.div>
						
						{/* Animated shield badge */}
						<motion.div
							className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center gap-6 text-white/70"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.5, duration: 1 }}
						>
							<div className="flex items-center gap-2">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
								</svg>
								<span className="text-sm">ISO 27001 Certified</span>
							</div>
							<div className="w-1 h-1 rounded-full bg-white/50"></div>
							<div className="flex items-center gap-2">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
								</svg>
								<span className="text-sm">CMMC Level 3 Compliant</span>
							</div>
							<div className="w-1 h-1 rounded-full bg-white/50"></div>
							<div className="flex items-center gap-2">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
								</svg>
								<span className="text-sm">24/7 Expert Support</span>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Security Badge/Stats Section */}
			<section className="py-16 bg-gradient-to-b from-[#0a0e1a] to-gray-50 relative overflow-hidden">
				<div className="absolute inset-0 bg-[url('/dot-pattern.svg')] opacity-[0.03]"></div>
				
				{/* Shield accent element */}
				<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-transparent"></div>
				
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-10">
						<motion.h2
							className="text-xl font-medium text-[var(--color-primary)] mb-2"
							initial={{ opacity: 0, y: -10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							INDUSTRY-LEADING SECURITY
						</motion.h2>
						<motion.div
							className="w-16 h-1 bg-[var(--color-secondary)] mx-auto mb-2"
							initial={{ width: 0 }}
							whileInView={{ width: "4rem" }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						></motion.div>
					</div>
					
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
						<motion.div 
							className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm shadow-md py-8 px-4 flex flex-col items-center text-center border-t-2 border-[var(--color-primary)]"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
						>
							<div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[var(--color-primary)] to-transparent opacity-50"></div>
							<div className="bg-[var(--color-primary)]/10 p-3 rounded-full mb-4">
								<svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
									<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
								</svg>
							</div>
							<div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">24/7</div>
							<div className="mt-3 text-sm font-medium text-gray-700">Continuous Security Monitoring</div>
							<div className="w-12 h-0.5 bg-gray-200 my-3"></div>
							<div className="text-xs text-gray-500">Real-time threat detection</div>
						</motion.div>
						
						<motion.div 
							className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm shadow-md py-8 px-4 flex flex-col items-center text-center border-t-2 border-[var(--color-primary)]"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
						>
							<div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[var(--color-primary)] to-transparent opacity-50"></div>
							<div className="bg-[var(--color-primary)]/10 p-3 rounded-full mb-4">
								<svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
									<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
								</svg>
							</div>
							<div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">99.9%</div>
							<div className="mt-3 text-sm font-medium text-gray-700">Guaranteed Uptime Security</div>
							<div className="w-12 h-0.5 bg-gray-200 my-3"></div>
							<div className="text-xs text-gray-500">Enterprise-grade protection</div>
						</motion.div>
						
						<motion.div 
							className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm shadow-md py-8 px-4 flex flex-col items-center text-center border-t-2 border-[var(--color-primary)]"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
						>
							<div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[var(--color-primary)] to-transparent opacity-50"></div>
							<div className="bg-[var(--color-primary)]/10 p-3 rounded-full mb-4">
								<svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
									<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
								</svg>
							</div>
							<div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">500+</div>
							<div className="mt-3 text-sm font-medium text-gray-700">Threats Blocked Daily</div>
							<div className="w-12 h-0.5 bg-gray-200 my-3"></div>
							<div className="text-xs text-gray-500">Advanced threat intelligence</div>
						</motion.div>
						
						<motion.div 
							className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm shadow-md py-8 px-4 flex flex-col items-center text-center border-t-2 border-[var(--color-primary)]"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 }}
							whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
						>
							<div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[var(--color-primary)] to-transparent opacity-50"></div>
							<div className="bg-[var(--color-primary)]/10 p-3 rounded-full mb-4">
								<svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
									<path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905 0 .905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
								</svg>
							</div>
							<div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">100%</div>
							<div className="mt-3 text-sm font-medium text-gray-700">Client Satisfaction</div>
							<div className="w-12 h-0.5 bg-gray-200 my-3"></div>
							<div className="text-xs text-gray-500">Industry-leading expertise</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Detailed Solutions Structure Section */}
			<section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
				<div className="absolute inset-0 bg-[url('/dot-pattern.svg')] opacity-[0.02]"></div>
				
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<div className="inline-block mb-6 px-4 py-1 rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 text-sm font-medium text-[var(--color-secondary)]">
							COMPREHENSIVE SECURITY ARCHITECTURE
						</div>
						<h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Security Solutions Portfolio</h2>
						<div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-6"></div>
						<p className="text-lg text-gray-600 max-w-4xl mx-auto">
							Our integrated security framework covers all critical areas of cybersecurity, from endpoint protection to network defense and data security, providing comprehensive protection for your organization.
						</p>
					</motion.div>
					
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Endpoint Security */}
						<motion.div
							className="bg-white rounded-xl shadow-lg border-t-4 border-t-blue-600 overflow-hidden hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
								<div className="flex items-center mb-4">
									<div className="bg-white/20 p-3 rounded-lg mr-4">
										<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
										</svg>
									</div>
									<div>
										<h3 className="text-2xl font-bold">Endpoint Security</h3>
										<p className="text-blue-100 text-sm">Device & User Protection</p>
									</div>
								</div>
							</div>
							<div className="relative">
								<div className="absolute top-0 right-0 w-32 h-24 opacity-20">
									<Image
										src="/images/endpoint-security.jpg"
										alt="Endpoint Security"
										fill
										className="object-cover rounded-tr-xl"
									/>
								</div>
								<div className="p-6">
									<div className="grid grid-cols-1 gap-3">
										{detailedSolutions.endpointSecurity.map((solution, index) => (
											<motion.div
												key={index}
												className="bg-blue-50 border border-blue-100 rounded-lg p-4 hover:bg-blue-100 transition-colors cursor-pointer"
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.4, delay: index * 0.1 }}
												whileHover={{ scale: 1.02 }}
											>
												<div className="flex items-center">
													<div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
													<span className="text-gray-800 font-medium text-sm">{solution}</span>
												</div>
											</motion.div>
										))}
									</div>
								</div>
							</div>
						</motion.div>

						{/* Network Security */}
						<motion.div
							className="bg-white rounded-xl shadow-lg border-t-4 border-t-green-600 overflow-hidden hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
								<div className="flex items-center mb-4">
									<div className="bg-white/20 p-3 rounded-lg mr-4">
										<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
											<path d="M15,9H9V7.5H15M15,16.5H9V15H15M21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M19,5H5V19H19V5Z"/>
										</svg>
									</div>
									<div>
										<h3 className="text-2xl font-bold">Network Security</h3>
										<p className="text-green-100 text-sm">Infrastructure Protection</p>
									</div>
								</div>
							</div>
							<div className="relative">
								<div className="absolute top-0 right-0 w-32 h-24 opacity-20">
									<Image
										src="/images/network-security.jpg"
										alt="Network Security"
										fill
										className="object-cover rounded-tr-xl"
									/>
								</div>
								<div className="p-6">
									<div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
										{detailedSolutions.networkSecurity.map((solution, index) => (
											<motion.div
												key={index}
												className="bg-green-50 border border-green-100 rounded-lg p-4 hover:bg-green-100 transition-colors cursor-pointer"
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.4, delay: index * 0.05 }}
												whileHover={{ scale: 1.02 }}
											>
												<div className="flex items-center">
													<div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
													<span className="text-gray-800 font-medium text-sm">{solution}</span>
												</div>
											</motion.div>
										))}
									</div>
								</div>
							</div>
						</motion.div>

						{/* Data Security */}
						<motion.div
							className="bg-white rounded-xl shadow-lg border-t-4 border-t-purple-600 overflow-hidden hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
								<div className="flex items-center mb-4">
									<div className="bg-white/20 p-3 rounded-lg mr-4">
										<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
										</svg>
									</div>
									<div>
										<h3 className="text-2xl font-bold">Data Security</h3>
										<p className="text-purple-100 text-sm">Information Protection</p>
									</div>
								</div>
							</div>
							<div className="relative">
								<div className="absolute top-0 right-0 w-32 h-24 opacity-20">
									<Image
										src="/images/data-security.jpg"
										alt="Data Security"
										fill
										className="object-cover rounded-tr-xl"
									/>
								</div>
								<div className="p-6">
									<div className="grid grid-cols-1 gap-3">
										{detailedSolutions.dataSecurity.map((solution, index) => (
											<motion.div
												key={index}
												className="bg-purple-50 border border-purple-100 rounded-lg p-4 hover:bg-purple-100 transition-colors cursor-pointer"
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.4, delay: index * 0.1 }}
												whileHover={{ scale: 1.02 }}
											>
												<div className="flex items-center">
													<div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
													<span className="text-gray-800 font-medium text-sm">{solution}</span>
												</div>
											</motion.div>
										))}
									</div>
									
									{/* Additional padding for visual balance
									<div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
										<div className="flex items-center justify-center text-purple-600">
											<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
											</svg>
											<span className="text-sm font-medium">Comprehensive Data Protection</span>
										</div>
									</div> */}
								</div>
							</div>
						</motion.div>

						{/* Vulnerability Management and Compliance */}
						<motion.div
							className="bg-white rounded-xl shadow-lg border-t-4 border-t-orange-600 overflow-hidden hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.6 }}
						>
							<div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 text-white">
								<div className="flex items-center mb-4">
									<div className="bg-white/20 p-3 rounded-lg mr-4">
										<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12,2A3,3 0 0,1 15,5V7H16A2,2 0 0,1 18,9V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19V9A2,2 0 0,1 8,7H9V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V7H13V5A1,1 0 0,0 12,4M8,9V19H16V9H8M9,11H15V13H9V11M9,15H13V17H9V15Z"/>
										</svg>
									</div>
									<div>
										<h3 className="text-2xl font-bold">Vulnerability Management</h3>
										<p className="text-orange-100 text-sm">Risk Assessment & Compliance</p>
									</div>
								</div>
							</div>
							<div className="relative">
								<div className="absolute top-0 right-0 w-32 h-24 opacity-20">
									<Image
										src="/images/vulnerability-management.jpg"
										alt="Vulnerability Management"
										fill
										className="object-cover rounded-tr-xl"
									/>
								</div>
								<div className="p-6">
									<div className="grid grid-cols-1 gap-3">
										{detailedSolutions.vulnerabilityManagement.map((solution, index) => (
											<motion.div
												key={index}
												className="bg-orange-50 border border-orange-100 rounded-lg p-4 hover:bg-orange-100 transition-colors cursor-pointer"
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.4, delay: index * 0.1 }}
												whileHover={{ scale: 1.02 }}
											>
												<div className="flex items-center">
													<div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
													<span className="text-gray-800 font-medium text-sm">{solution}</span>
												</div>
											</motion.div>
										))}
									</div>
								</div>
							</div>
						</motion.div>

						{/* Networking Solutions */}
						<motion.div
							className="bg-white rounded-xl shadow-lg border-t-4 border-t-teal-600 overflow-hidden hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.8 }}
						>
							<div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-white">
								<div className="flex items-center mb-4">
									<div className="bg-white/20 p-3 rounded-lg mr-4">
										<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
											<path d="M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17Z"/>
										</svg>
									</div>
									<div>
										<h3 className="text-2xl font-bold">Networking Solutions</h3>
										<p className="text-teal-100 text-sm">Infrastructure & Connectivity</p>
									</div>
								</div>
							</div>
							<div className="relative">
								<div className="absolute top-0 right-0 w-32 h-24 opacity-20">
									<Image
										src="/images/networking-solutions.jpg"
										alt="Networking Solutions"
										fill
										className="object-cover rounded-tr-xl"
									/>
								</div>
								<div className="p-6">
									<div className="grid grid-cols-1 gap-3">
										{detailedSolutions.networkingSolutions.map((solution, index) => (
											<motion.div
												key={index}
												className="bg-teal-50 border border-teal-100 rounded-lg p-4 hover:bg-teal-100 transition-colors cursor-pointer"
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.4, delay: index * 0.1 }}
												whileHover={{ scale: 1.02 }}
											>
												<div className="flex items-center">
													<div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
													<span className="text-gray-800 font-medium text-sm">{solution}</span>
												</div>
											</motion.div>
										))}
									</div>
								</div>
							</div>
						</motion.div>

						{/* IT Operations and Management */}
						<motion.div
							className="bg-white rounded-xl shadow-lg border-t-4 border-t-indigo-600 overflow-hidden hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 1.0 }}
						>
							<div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-6 text-white">
								<div className="flex items-center mb-4">
									<div className="bg-white/20 p-3 rounded-lg mr-4">
										<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H15A7,7 0 0,1 22,14H23A1,1 0 0,1 24,15V18A1,1 0 0,1 23,19H22A2,2 0 0,1 20,21H5A2,2 0 0,1 3,19V18A2,2 0 0,1 5,16H6V15A3,3 0 0,1 9,18H15V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19H10V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17Z"/>
										</svg>
									</div>
									<div>
										<h3 className="text-2xl font-bold">IT Operations</h3>
										<p className="text-indigo-100 text-sm">System Management</p>
									</div>
								</div>
							</div>
							<div className="relative">
								<div className="absolute top-0 right-0 w-32 h-24 opacity-20">
									<Image
										src="/images/it-operations.jpg"
										alt="IT Operations"
										fill
										className="object-cover rounded-tr-xl"
									/>
								</div>
								<div className="p-6">
									<div className="grid grid-cols-1 gap-3">
										{detailedSolutions.itOperations.map((solution, index) => (
											<motion.div
												key={index}
												className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 hover:bg-indigo-100 transition-colors cursor-pointer"
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.4, delay: index * 0.1 }}
												whileHover={{ scale: 1.02 }}
											>
												<div className="flex items-center">
													<div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
													<span className="text-gray-800 font-medium text-sm">{solution}</span>
												</div>
											</motion.div>
										))}
									</div>
								</div>
							</div>
						</motion.div>

						{/* Physical Security */}
						<motion.div
							className="bg-white rounded-xl shadow-lg border-t-4 border-t-red-600 overflow-hidden hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 1.2 }}
						>
							<div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
								<div className="flex items-center mb-4">
									<div className="bg-white/20 p-3 rounded-lg mr-4">
										<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
											<path d="M17,9H7V7A5,5 0 0,1 12,2A5,5 0 0,1 17,7M12,4A3,3 0 0,0 9,7V9H15V7A3,3 0 0,0 12,4M6,20V10H18V20H6Z"/>
										</svg>
									</div>
									<div>
										<h3 className="text-2xl font-bold">Physical Security</h3>
										<p className="text-red-100 text-sm">Access & Surveillance</p>
									</div>
								</div>
							</div>
							<div className="relative">
								<div className="absolute top-0 right-0 w-32 h-24 opacity-20">
									<Image
										src="/images/physical-security.jpg"
										alt="Physical Security"
										fill
										className="object-cover rounded-tr-xl"
									/>
								</div>
								<div className="p-6">
									<div className="grid grid-cols-1 gap-3">
										{detailedSolutions.physicalSecurity.map((solution, index) => (
											<motion.div
												key={index}
												className="bg-red-50 border border-red-100 rounded-lg p-4 hover:bg-red-100 transition-colors cursor-pointer"
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.4, delay: index * 0.1 }}
												whileHover={{ scale: 1.02 }}
											>
												<div className="flex items-center">
													<div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
													<span className="text-gray-800 font-medium text-sm">{solution}</span>
												</div>
											</motion.div>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Bottom CTA for detailed solutions */}
					<motion.div
						className="mt-16 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Need a Custom Security Solution?
							</h3>
							<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
								Our security experts can design a tailored solution that combines multiple security domains to meet your specific business requirements and compliance needs.
							</p>
							<Link 
								href="/contact-us"
								className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary)] transition-all duration-300 shadow-md hover:shadow-lg"
							>
								<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
								</svg>
								Consult Our Security Experts
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="relative py-20 bg-gradient-to-br from-[#16213e] via-[#0f3460] to-[#743f77] text-white overflow-hidden">
				<div className="absolute inset-0 bg-[url('/network-bg.svg')] opacity-10"></div>
				<div className="absolute inset-0 bg-[url('/dot-pattern.svg')] opacity-5"></div>
				
				{/* Shield animation background */}
				<div className="absolute inset-0">
					<motion.div 
						className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: [0.05, 0.1, 0.05] }}
						transition={{ duration: 5, repeat: Infinity }}
					>
						<svg width="800" height="800" viewBox="0 0 24 24" className="text-white/10">
							<path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
						</svg>
					</motion.div>
				</div>
				
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					
					<motion.h2 
						className="text-3xl md:text-4xl font-bold mb-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Ready to enhance your security posture?
					</motion.h2>
					
					<motion.div
						className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"
						initial={{ width: 0 }}
						whileInView={{ width: "6rem" }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					></motion.div>
					
					<motion.p 
						className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Contact our team of security experts to discuss how we can help you address your specific security and networking challenges with our enterprise-grade solutions.
					</motion.p>
					
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex flex-col sm:flex-row justify-center gap-6"
					>
						<Link href="/contact-us" className="bg-white text-[var(--color-primary)] hover:bg-gray-100 font-bold py-4 px-8 rounded-md text-lg transition duration-300 shadow-lg hover:shadow-xl ease-in-out flex items-center justify-center">
							<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
							</svg>
							Schedule a Consultation
						</Link>
						<Link href="/contact-us#form" className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold py-4 px-8 rounded-md text-lg transition duration-300 shadow-lg hover:shadow-xl ease-in-out flex items-center justify-center">
							<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
							</svg>
							Get in Touch
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default SolutionsClient;
