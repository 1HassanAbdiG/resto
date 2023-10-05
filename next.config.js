/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.pokemondb.net'],
    loader: 'custom'
  }
}

module.exports = nextConfig
