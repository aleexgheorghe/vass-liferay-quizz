/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {
	async rewrites() {
	  return [
		{
		  source: '/robots.txt',
		  destination: '/api/robots',
		},
	  ];
	},
  };

