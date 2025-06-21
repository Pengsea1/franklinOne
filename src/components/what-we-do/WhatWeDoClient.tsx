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
						animate={{ 
							scale: [1, 1.05, 1],
							opacity: [0.3, 0.4, 0.3]
						}}
						transition={{ 
							duration: 15, 
							repeat: Infinity, 
							ease: "easeInOut" 
						}}
					/>
				</div>
				
				{/* Animated network grid */}
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
				
				{/* Animated dots */}
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

				{/* Enhanced floating security elements */}
				<div className="absolute inset-0 z-15">
					{[...Array(8)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute text-[var(--color-primary)]"
							style={{
								left: `${15 + Math.random() * 70}%`,
								top: `${15 + Math.random() * 70}%`,
								fontSize: `${1.5 + Math.random() * 1}rem`
							}}
							animate={{
								y: [0, -20, 0],
								opacity: [0.3, 0.7, 0.3],
								rotate: [0, 360]
							}}
							transition={{
								duration: 8 + i * 2,
								repeat: Infinity,
								ease: "easeInOut",
								delay: i * 0.8
							}}
						>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</motion.div>
					))}
				</div>

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
						
						{/* Animated border glow */}
						<motion.div
							className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)]/50"
							animate={{
								boxShadow: [
									'0 0 5px rgba(116, 63, 119, 0.3)',
									'0 0 20px rgba(116, 63, 119, 0.6)',
									'0 0 5px rgba(116, 63, 119, 0.3)'
								]
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut"
							}}
						/>
						
						{/* Content */}
						<div className="relative flex items-center">
							<motion.div 
								className="w-3 h-3 bg-[var(--color-primary)] rounded-full mr-4"
								animate={{
									scale: [1, 1.3, 1],
									opacity: [1, 0.7, 1]
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									ease: "easeInOut"
								}}
							/>
							<span className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
								CYBERSECURITY EXPERTS
							</span>
						</div>
					</motion.div>

					{/* Enhanced title with gradient text */}
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

					{/* Enhanced subtitle */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="mb-12"
					>
						<motion.div 
							className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mx-auto mb-8"
							initial={{ width: 0, opacity: 0 }}
							animate={{ width: 128, opacity: 1 }}
							transition={{ duration: 1, delay: 0.8 }}
						/>
						<p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
							Enabling security through expertise, partnership, and regional reach with comprehensive cybersecurity and networking solutions tailored to your needs.
						</p>
					</motion.div>

					{/* Enhanced CTA buttons */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1 }}
						className="flex flex-col sm:flex-row justify-center gap-6"
					>
						<motion.div
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.98 }}
							className="relative group"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
							<Link href="/contact-us" className="relative bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] hover:from-[#f15a22] hover:to-[var(--color-primary)] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out block">
								Get Started Today
							</Link>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.98 }}
						>
							<Link href="#services" className="bg-transparent border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out block">
								Explore Services
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Enhanced Services Overview Section */}
			<section id="services" className="relative py-20 bg-gradient-to-b from-[#0a0e1a] via-[#161b2e] to-[#0a0e1a] text-white overflow-hidden">
				{/* Background elements */}
				<div className="absolute inset-0 z-0">
					<motion.div 
						className="absolute inset-0 bg-[url('/cyber-grid.svg')] bg-center z-0"
						style={{ opacity: 0.1 }}
						animate={{ 
							backgroundPosition: ['0px 0px', '50px 50px'],
							opacity: [0.05, 0.15, 0.05]
						}}
						transition={{ 
							duration: 20, 
							repeat: Infinity, 
							ease: "easeInOut" 
						}}
					/>
				</div>

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
						<motion.div 
							className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mx-auto mb-8"
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
							We provide comprehensive support through expert consulting, proven validation, professional implementation, and regional presence across Southeast Asia.
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{services.map((service, index) => (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="relative group"
							>
								{/* Enhanced card background */}
								<div className="absolute inset-0 bg-gradient-to-br from-[rgba(116,63,119,0.1)] via-[rgba(22,33,62,0.15)] to-[rgba(241,90,34,0.1)] rounded-2xl border border-[var(--color-primary)]/20 backdrop-blur-sm"></div>
								
								{/* Glow effect on hover */}
								<motion.div
									className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									style={{
										background: 'linear-gradient(135deg, rgba(116,63,119,0.2) 0%, rgba(22,33,62,0.2) 50%, rgba(241,90,34,0.2) 100%)',
										filter: 'blur(1px)'
									}}
								/>

								{/* Corner accents */}
								<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-primary)]/50 rounded-tl-2xl"></div>
								<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#f15a22]/50 rounded-br-2xl"></div>

								<div className="relative p-8 h-full">
									{/* Enhanced icon */}
									<motion.div 
										className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 text-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6 border border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/50 transition-all duration-300"
										whileHover={{ rotate: 5, scale: 1.1 }}
									>
										{service.icon}
									</motion.div>

									<h3 className="text-xl font-bold mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">
										{service.title}
									</h3>
									<p className="text-gray-300 mb-6 leading-relaxed">
										{service.description}
									</p>

									{/* Enhanced capabilities list */}
									<div className="space-y-2">
										<h4 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
											Key Capabilities
										</h4>
										{service.capabilities.map((capability, capIndex) => (
											<motion.div 
												key={capIndex}
												className="flex items-center text-sm text-gray-400"
												initial={{ opacity: 0, x: -10 }}
												whileInView={{ opacity: 1, x: 0 }}
												transition={{ delay: index * 0.1 + capIndex * 0.05 }}
											>
												<div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3 flex-shrink-0"></div>
												{capability}
											</motion.div>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

		 
			{/* Enhanced CTA Section */}
			<section className="relative py-20 bg-gradient-to-b from-[#0a0e1a] via-[#161b2e] to-[#0a0e1a] text-white overflow-hidden">
				{/* Advanced cyber background */}
				<div className="absolute inset-0 z-0">
					{/* Primary gradient overlay */}
					<motion.div 
						className="absolute inset-0 bg-gradient-to-br from-[rgba(10,14,26,0.95)] via-[rgba(22,33,62,0.85)] to-[rgba(116,63,119,0.9)] z-10"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5, ease: "easeOut" }}
					/>
					
					{/* Animated cyber grid */}
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
					
					{/* Floating tech particles */}
					{[...Array(12)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
							animate={{
								y: [0, -100, 0],
								opacity: [0, 1, 0],
								scale: [0.5, 1.5, 0.5]
							}}
							transition={{
								duration: 8 + Math.random() * 4,
								repeat: Infinity,
								ease: "easeInOut",
								delay: Math.random() * 5
							}}
						>
							<div className="w-2 h-2 bg-[var(--color-primary)] rounded-full shadow-lg shadow-[var(--color-primary)]/50"></div>
						</motion.div>
					))}
					
					{/* Security shield patterns */}
					{[...Array(8)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute text-[var(--color-primary)]/20"
							style={{
								left: `${15 + Math.random() * 70}%`,
								top: `${15 + Math.random() * 70}%`,
								fontSize: `${1 + Math.random() * 0.5}rem`
							}}
							animate={{
								rotate: [0, 360],
								opacity: [0.1, 0.4, 0.1],
								scale: [1, 1.3, 1]
							}}
							transition={{
								duration: 10 + i * 2,
								repeat: Infinity,
								ease: "easeInOut",
								delay: i * 1.2
							}}
						>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</motion.div>
					))}
				</div>

				<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					{/* Enhanced security badge */}
					<motion.div
						className="relative inline-flex items-center px-6 py-3 mb-8"
						initial={{ opacity: 0, y: 30, scale: 0.8 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: true }}
						transition={{ 
							duration: 0.8, 
							delay: 0.2,
							type: "spring",
							stiffness: 100
						}}
					>
						{/* Glowing background */}
						<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/30 to-[var(--color-primary)]/20 backdrop-blur-md rounded-full border border-[var(--color-primary)]/40 shadow-lg"></div>
						
						{/* Animated border glow */}
						<motion.div
							className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)]/50"
							animate={{
								boxShadow: [
									'0 0 5px rgba(116, 63, 119, 0.3)',
									'0 0 20px rgba(116, 63, 119, 0.6)',
									'0 0 5px rgba(116, 63, 119, 0.3)'
								]
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut"
							}}
						/>
						
						{/* Content */}
						<div className="relative flex items-center">
							<motion.div 
								className="w-2.5 h-2.5 bg-[var(--color-primary)] rounded-full mr-3"
								animate={{
									scale: [1, 1.3, 1],
									opacity: [1, 0.7, 1]
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									ease: "easeInOut"
								}}
							/>
							<span className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
								START YOUR SECURITY JOURNEY
							</span>
						</div>
					</motion.div>

					{/* Enhanced title with gradient text */}
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

					{/* Enhanced subtitle */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mb-10"
					>
						<motion.div 
							className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mx-auto mb-6"
							initial={{ width: 0, opacity: 0 }}
							whileInView={{ width: 96, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1, delay: 0.4 }}
						/>
						<motion.p 
							className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							Contact our team to discuss how we can help you address your security and networking challenges with cutting-edge solutions.
						</motion.p>
					</motion.div>

					{/* Enhanced CTA buttons */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex flex-col sm:flex-row justify-center gap-6"
					>
						{/* Primary CTA button */}
						<motion.div
							whileHover={{ scale: 1.05, y: -3 }}
							whileTap={{ scale: 0.98 }}
							className="relative group"
						>
							{/* Glow effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
							
							{/* Enhanced button */}
							<Link href="/contact-us" className="relative bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] hover:from-[#f15a22] hover:to-[var(--color-primary)] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out flex items-center justify-center space-x-3 group">
								<span>Schedule a Consultation</span>
								<motion.div
									animate={{ x: [0, 5, 0] }}
									transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
								>
									<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</motion.div>
							</Link>
						</motion.div>

						{/* Secondary CTA button */}
						<motion.div
							whileHover={{ scale: 1.05, y: -3 }}
							whileTap={{ scale: 0.98 }}
							className="relative group"
						>
							{/* Enhanced border glow */}
							<motion.div
								className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:border-white/50 transition-all duration-300"
								animate={{
									boxShadow: [
										'0 0 10px rgba(255, 255, 255, 0.1)',
										'0 0 20px rgba(255, 255, 255, 0.2)',
										'0 0 10px rgba(255, 255, 255, 0.1)'
									]
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut"
								}}
							/>
							
							<Link href="/solutions" className="relative bg-transparent backdrop-blur-sm text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out flex items-center justify-center space-x-3 group">
								<span>Explore Solutions</span>
								<motion.div
									animate={{ rotate: [0, 360] }}
									transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
								>
									<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
									</svg>
								</motion.div>
							</Link>
						</motion.div>
					</motion.div>

					
				</div>
			</section>
		</div>
	);
};

export default WhatWeDoClient;
