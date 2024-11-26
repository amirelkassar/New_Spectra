import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      '@mantine/core',
      '@mantine/hooks',
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spectra.profound-group.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
