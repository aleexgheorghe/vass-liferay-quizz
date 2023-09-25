/** @type {import('next').NextConfig} */
const nextConfig = {}

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

