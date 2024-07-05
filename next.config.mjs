/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'assets.aceternity.com',
      'firebasestorage.googleapis.com',
      'www.soldev.app',
      'avatar.vercel.sh',
      'arweave.net',
      'i.imgur.com',
      'quackassets.pages.dev',
      'shdw-drive.genesysgo.net',
      'gateway.irys.xyz'
    ]
  },
  webpack: (config, { isServer }) => {
    // Ensure you are not overriding the resolve.alias
    // You can extend the config here if needed
    return config;
  }
};

export default nextConfig;