"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const regions = [
	{
		name: 'Singapore',
		description: 'Regional headquarters with full-service operations',
		icon: '🇸🇬'
	},
	{
		name: 'Australia',
		description: 'Major hub for Oceania operations',
		icon: '🇦🇺'
	},
	{
		name: 'India',
		description: 'Growing market with significant technical resources',
		icon: '🇮🇳'
	},
	{
		name: 'Indonesia',
		description: 'Key Southeast Asian market',
		icon: '🇮🇩'
	},
	{
		name: 'Cambodia',
		description: 'Emerging market with growth potential',
		icon: '🇰🇭'
	},
	{
		name: 'Malaysia',
		description: 'Established presence with strong partner network',
		icon: '🇲🇾'
	},
	{
		name: 'Myanmar',
		description: 'Developing market with specialized solutions',
		icon: '🇲🇲'
	},
	{
		name: 'Philippines',
		description: 'Growing operations with technical support center',
		icon: '🇵🇭'
	},
	{
		name: 'Thailand',
		description: 'Strong market presence with local expertise',
		icon: '🇹🇭'
	},
	{
		name: 'Vietnam',
		description: 'Rapidly growing market with dedicated team',
		icon: '🇻🇳'
	}
];

const RegionalPresenceSection = () => {
	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<motion.h2
						className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						OUR GLOBAL PRESENCE
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
						Serving clients across the Asia-Pacific region with local expertise and global capabilities
					</motion.p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="bg-white p-8 rounded-lg shadow-lg"
					>
						<h3 className="text-2xl font-bold text-gray-900 mb-4">Regional Coverage</h3>
						<p className="text-gray-600 mb-6">
							Since our founding in 2000, FranklinOne has strategically expanded across the Asia-Pacific region to serve our growing client base with local expertise and personalized support.
						</p>
						<p className="text-gray-600 mb-6">
							Our regional presence allows us to understand the unique challenges and requirements of each market, while leveraging our global capabilities to deliver comprehensive security and networking solutions.
						</p>
						<p className="text-gray-600">
							With offices and technical teams in 10 countries, we provide consistent, high-quality service to enterprises, government organizations, and service providers throughout the region.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
					>
						<Image
							src="https://www.freevector.com/uploads/vector/preview/90949/vecteezyWorldMapCountryName1FV0223_generated.jpg"
							alt="FranklinOne Global Presence"
							fill
							style={{ objectFit: 'cover' }}
							className="rounded-lg"
						/>
					</motion.div>
				</div>

				<motion.div
					className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.1
							}
						}
					}}
				>
					{regions.map((region, index) => (
						<motion.div
							key={index}
							className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
							}}
						>
							<div className="text-4xl mb-3">{region.icon}</div>
							<h3 className="text-lg font-bold text-gray-900 mb-2">{region.name}</h3>
							<p className="text-gray-600 text-sm">{region.description}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default RegionalPresenceSection;