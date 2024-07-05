import webpack from 'webpack';

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
  webpack: async (config, { isServer }) => {
    config.resolve.fallback = {
      crypto: await import('crypto-browserify').then(mod => mod.default),
      stream: await import('stream-browserify').then(mod => mod.default),
      http: await import('stream-http').then(mod => mod.default),
      https: await import('https-browserify').then(mod => mod.default),
    };
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      })
    );
    return config;
  }
};

export default nextConfig;