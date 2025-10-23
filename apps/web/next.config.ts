import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Temporarily disable typedRoutes to fix production build issue
	// typedRoutes: true,
	// Add output configuration for production
	output: 'standalone',
	// Production optimizations
	reactStrictMode: false,
	swcMinify: true,
	// Disable development features in production
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	// Disable dev overlay in production
	devIndicators: {
		buildActivity: false,
		buildActivityPosition: 'bottom-right',
	},
	// Fix standalone output path
	distDir: '.next',
};

export default nextConfig;
