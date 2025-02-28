import React from 'react';
import packageJson from '../../package.json';

export const Footer: React.FC = () => {
	return (
		<footer className="text-primary-secondary mt-auto py-4 px-6 text-gray-200 gap-2 select-none flex justify-center items-center">
			<a href={packageJson.repository.web + '/releases/tag/' + packageJson.version} target="_blank" rel="noopener noreferrer" className="hover:underline text-sm">
				Version {packageJson.version}
			</a>
			<span className="text-sm"> - </span>
			<a href={packageJson.repository.web} target="_blank" rel="noopener noreferrer" className="hover:underline text-sm">
				Source code
			</a>
		</footer>
	);
};
