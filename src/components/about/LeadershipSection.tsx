"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const leaders = [
	{
		name: 'John Smith',
		position: 'Chief Executive Officer',
		bio: 'With over 25 years of experience in the technology sector, John has led FranklinOne through a period of tremendous growth and innovation.',
		image: 'https://imageio.forbes.com/specials-images/imageserve/66c3b9c5b69e4e9fcffc9ca6/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
	},
	{
		name: 'Sarah Johnson',
		position: 'Chief Technology Officer',
		bio: 'Sarah brings extensive expertise in cybersecurity architecture and has been instrumental in developing our technical capabilities.',
		image: 'https://cdn.corporatefinanceinstitute.com/assets/ceo-chief-executive-officer-1024x682.jpeg',
	},
	{
		name: 'Michael Wong',
		position: 'Regional Director, APAC',
		bio: 'Michael oversees our operations across the Asia-Pacific region, building strong relationships with clients and partners.',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLblAdQfSG-G_ZYyJrSxH0CeLPGhYdFzXWlg&s',
	},
	{
		name: 'Lisa Chen',
		position: 'Chief Financial Officer',
		bio: 'Lisa has played a key role in managing our financial strategy and enabling our expansion across multiple markets.',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDEwMvTzZ0zC20PurDhkwdx7RkjmxS3OyFew&s',
	},
];

const LeadershipSection = () => {
	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<motion.h2
						className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						OUR LEADERSHIP TEAM
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
						Meet the experienced executives driving our vision forward
					</motion.p>
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{leaders.map((leader, index) => (
						<motion.div
							key={index}
							className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
							variants={itemVariants}
						>
							<div className="relative h-64 bg-gray-200">
								{leader.image ? (
									<Image
										src={leader.image}
										alt={leader.name}
										fill
										style={{ objectFit: 'cover' }}
										className="hover:scale-105 transition-transform duration-300"
									/>
								) : (
									<div className="h-full w-full flex items-center justify-center">
										<span className="text-gray-400">Photo</span>
									</div>
								)}
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-1">
									{leader.name}
								</h3>
								<p className="text-[#f15a22] font-medium mb-3">
									{leader.position}
								</p>
								<p className="text-gray-600">{leader.bio}</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default LeadershipSection;