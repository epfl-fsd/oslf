import type { NextConfig } from 'next';
import nextIntl from 'next-intl/plugin';

const withNextIntl = nextIntl();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	output: 'standalone',
	webpack(config) {
		config.module.rules.push({
			test: /\.json$/,
			type: 'json',
		});
		return config;
	},
};

export default withNextIntl(nextConfig);
