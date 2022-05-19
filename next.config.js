/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
    deviceSizes: [320, 640, 768, 1024, 1600], 
  },
}

module.exports = nextConfig
