/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Paul\'s Custom Curated Registry',
    description: 'A curated list of my Kasm Workspaces',
    icon: 'https://png.pngitem.com/pimgs/s/169-1695844_mixtape-skin-laptop-clipart-png-download-mixtape-clipart.png',
    listUrl: 'https://pasiegel.github.io/kasm-registry/',
    contactUrl: 'https://github.com/pasiegel/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
