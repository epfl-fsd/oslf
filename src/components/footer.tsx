import React from 'react';
import packageJson from '../../package.json';

export const Footer: React.FC = () => {
	return (
		<footer className="text-primary-secondary mt-auto py-4 px-6 text-gray-200 select-none flex justify-center items-center">
			<span className="text-sm">Version {packageJson.version} - </span>
			<a href={packageJson.repository.web} target="_blank" rel="noopener noreferrer" className="hover:underline text-sm">
				Source code
			</a>
		</footer>
	);
};
