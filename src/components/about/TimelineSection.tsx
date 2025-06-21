"use client";
import { motion } from 'framer-motion';

const milestones = [
	{
		year: 2000,
		title: 'Company Founded',
		description: 'FranklinOne was established as a Value Added Distributor for security and networking solutions.',
		color: 'bg-[var(--color-primary)]'
	},
	{
		year: 2005,
		title: 'Regional Expansion',
		description: 'Expanded operations to Singapore, Malaysia and Thailand.',
		color: 'bg-green-600'
	},
	{
		year: 2010,
		title: 'Portfolio Growth',
		description: 'Expanded our solutions portfolio to include cloud security and identity management.',
		color: 'bg-purple-600'
	},
	{
		year: 2015,
		title: 'Further Expansion',
		description: 'Established presence in Australia, Indonesia, Vietnam, and Philippines.',
		color: 'bg-orange-600'
	},
	{
		year: 2020,
		title: 'Award Recognition',
		description: 'Received multiple industry awards as the leading Value Added Distributor in Cybersecurity.',
		color: 'bg-red-600'
	},
	{
		year: 2025,
		title: 'Innovation Focus',
		description: 'Launched advanced services focusing on AI-driven security solutions and zero trust architectures.',
		color: 'bg-indigo-600'
	}
];

const TimelineSection = () => {
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
						OUR MILESTONES
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
						A journey of growth and innovation spanning over two decades
					</motion.p>
				</div>

				<div className="relative">
					{/* Vertical line */}
					<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

					<div className="relative">
						{milestones.map((milestone, index) => (
							<motion.div
								key={milestone.year}
								className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="hidden md:block w-1/2"></div>
								<div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
									<div className={`w-8 h-8 rounded-full ${milestone.color} border-4 border-white`}></div>
								</div>
								<div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md relative">
									<div className={`absolute top-0 left-0 w-16 h-1 ${milestone.color}`}></div>
									<div className={`text-lg font-bold ${milestone.color.replace('bg-', 'text-')}`}>{milestone.year}</div>
									<h3 className="text-xl font-bold text-gray-900 my-2">{milestone.title}</h3>
									<p className="text-gray-600">{milestone.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TimelineSection;