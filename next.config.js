/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'videos.pexels.com',
      'images.pexels.com',
      'images.unsplash.com',
      'plus.unsplash.com'
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
