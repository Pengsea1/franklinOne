"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
	{
		id: 'consulting-solution-design',
		title: 'Consulting & Solution Design',
		description: 'We provide full support by identifying customer needs, customizing solutions, and building the right security architecture.',
		icon: (
			<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
			</svg>
		),
		capabilities: [
			'Customer Needs Assessment',
			'Security Architecture Design',
			'Solution Customization',
			'Technology Evaluation',
			'Strategic Security Planning'
		]
	},
	{
		id: 'proof-of-concept',
		title: 'Proof of Concept & Value',
		description: 'We execute PoC and PoV initiatives to help clients gain hands-on, practical insight into how solutions deliver value.',
		icon: (
			<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
			</svg>
		),
		capabilities: [
			'Proof of Concept Development',
			'Value Demonstration',
			'Hands-on Testing Environment',
			'ROI Analysis',
			'Solution Validation'
		]
	},
	{
		id: 'professional-services',
		title: 'Professional Services & Support',
		description: 'Our team delivers expert implementation, configuration, and technical support to ensure long-term success.',
		icon: (
			<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
		),
		capabilities: [
			'Expert Implementation',
			'System Configuration',
			'Technical Support',
			'Maintenance Services',
			'Long-term Success Planning'
		]
	},
	{
		id: 'regional-presence',
		title: 'Regional Presence',
		description: 'We operate across Southeast Asia, including but not limited to Cambodia, Laos, and Myanmar.',
		icon: (
			<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		),
		capabilities: [
			'Southeast Asia Operations',
			'Cambodia Coverage',
			'Laos Market Presence',
			'Myanmar Operations',
			'Regional Partnership Network'
		]
	}
];

const WhatWeDoClient = () => {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative min-h-[85vh] flex items-center justify-center bg-[#0a0e1a] text-white overflow-hidden">
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,14,26,0.95)] via-[rgba(22,33,62,0.85)] to-[rgba(116,63,119,0.9)] z-10" />
					<div className="absolute inset-0 bg-[url('/cyber.png')] bg-cover bg-center z-0 opacity-30" />
				</div>

				<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						className="relative inline-flex items-center px-8 py-4 mb-10"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/30 to-[var(--color-primary)]/20 backdrop-blur-md rounded-full border border-[var(--color-primary)]/40 shadow-lg"></div>
						<div className="relative flex items-center">
							<div className="w-3 h-3 bg-[var(--color-primary)] rounded-full mr-4" />
							<span className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
								CYBERSECURITY EXPERTS
							</span>
						</div>
					</motion.div>

					<motion.h1 
						className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<span className="bg-gradient-to-r from-white via-gray-200 to-[var(--color-primary)] bg-clip-text text-transparent">
							What We Do
						</span>
					</motion.h1>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="mb-12"
					>
						<div className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mx-auto mb-8" />
						<p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
							Enabling security through expertise, partnership, and regional reach with comprehensive cybersecurity and networking solutions tailored to your needs.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1 }}
						className="flex flex-col sm:flex-row justify-center gap-6"
					>
						<Link href="/contact-us" className="bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] hover:from-[#f15a22] hover:to-[var(--color-primary)] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out">
							Get Started Today
						</Link>
						<Link href="#services" className="bg-transparent border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out">
							Explore Services
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Services Overview Section */}
			<section id="services" className="relative py-20 bg-gradient-to-b from-[#0a0e1a] via-[#161b2e] to-[#0a0e1a] text-white overflow-hidden">
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<motion.h2 
							className="text-3xl md:text-4xl font-bold mb-4"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<span className="bg-gradient-to-r from-white via-gray-200 to-[var(--color-primary)] bg-clip-text text-transparent">
								WHAT WE DO
							</span>
						</motion.h2>
						<div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mx-auto mb-8" />
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							We provide comprehensive support through expert consulting, proven validation, professional implementation, and regional presence across Southeast Asia.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{services.map((service, index) => (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="relative group"
							>
								<div className="absolute inset-0 bg-gradient-to-br from-[rgba(116,63,119,0.1)] via-[rgba(22,33,62,0.15)] to-[rgba(241,90,34,0.1)] rounded-2xl border border-[var(--color-primary)]/20 backdrop-blur-sm"></div>
								
								<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-primary)]/50 rounded-tl-2xl"></div>
								<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#f15a22]/50 rounded-br-2xl"></div>

								<div className="relative p-8 h-full">
									<div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 text-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6 border border-[var(--color-primary)]/30">
										{service.icon}
									</div>

									<h3 className="text-xl font-bold mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">
										{service.title}
									</h3>
									<p className="text-gray-300 mb-6 leading-relaxed">
										{service.description}
									</p>

									<div style={{ display: 'none' }} className="space-y-2">
										<h4 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
											Key Capabilities
										</h4>
										{service.capabilities.map((capability, capIndex) => (
											<div 
												key={capIndex}
												className="flex items-center text-sm text-gray-400"
											>
												<div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3 flex-shrink-0"></div>
												{capability}
											</div>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="relative py-20 bg-gradient-to-b from-[#0a0e1a] via-[#161b2e] to-[#0a0e1a] text-white overflow-hidden">
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,14,26,0.95)] via-[rgba(22,33,62,0.85)] to-[rgba(116,63,119,0.9)] z-10" />
				</div>

				<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						className="relative inline-flex items-center px-6 py-3 mb-8"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/30 to-[var(--color-primary)]/20 backdrop-blur-md rounded-full border border-[var(--color-primary)]/40 shadow-lg"></div>
						<div className="relative flex items-center">
							<div className="w-2.5 h-2.5 bg-[var(--color-primary)] rounded-full mr-3" />
							<span className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
								START YOUR SECURITY JOURNEY
							</span>
						</div>
					</motion.div>

					<motion.h2 
						className="text-3xl md:text-5xl font-bold mb-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<span className="bg-gradient-to-r from-white via-gray-200 to-[var(--color-primary)] bg-clip-text text-transparent">
							Ready to enhance your security posture?
						</span>
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mb-10"
					>
						<div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mx-auto mb-6" />
						<p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
							Contact our team to discuss how we can help you address your security and networking challenges with cutting-edge solutions.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex flex-col sm:flex-row justify-center gap-6"
					>
						<Link href="/contact-us" className="bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] hover:from-[#f15a22] hover:to-[var(--color-primary)] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out flex items-center justify-center space-x-3">
							<span>Schedule a Consultation</span>
							<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</Link>

						<Link href="/solutions" className="bg-transparent backdrop-blur-sm text-white hover:bg-white/10 border-2 border-white/30 hover:border-white/50 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out flex items-center justify-center space-x-3">
							<span>Explore Solutions</span>
							<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default WhatWeDoClient;
