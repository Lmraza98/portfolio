import React from 'react';
import Image from 'next/image';

interface ProjectProps {
	name: string;
	description: string;
	imagePath: string;
	features: string[];
}

export const Project: React.FC<ProjectProps> = ({ 
	name, 
	description, 
	imagePath,
	features 
}) => {
	return (
		<div className="relative group h-[400px] rounded-lg overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0">
				<Image
					src={imagePath}
					alt={`${name} background`}
					fill
					className="object-cover"
				/>
				{/* Semi-transparent overlay - same for both states */}
				<div className="absolute inset-0 bg-black/50 transition-all duration-300 " />
			</div>

			{/* Content */}
			<div className="relative h-full flex flex-col justify-center items-center">
				{/* Default View - Only Name */}
				<div className="transform transition-all duration-300 opacity-100 group-hover:opacity-0">
					<h3 className="font-bold text-white text-center">{name}</h3>
				</div>

				{/* Features - Shown on Hover */}
				<div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center">
					<h4 className="text-xl font-semibold mb-4 text-white">Features:</h4>
					<ul className="list-disc list-inside space-y-2">
						{features.map((feature, index) => (
							<li key={index} className="text-white/90">{feature}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
