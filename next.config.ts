import type { Configuration } from 'webpack';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config: Configuration) => {
    if (!config.watchOptions) {
      config.watchOptions = {};
    }
    config.watchOptions.poll = 1000;
    config.watchOptions.aggregateTimeout = 300;
    return config;
  },
  images: {
    remotePatterns: [],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 85, 90, 95],
  },
};

export default nextConfig;
