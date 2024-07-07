/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import globImporter from 'node-sass-glob-importer';
import path from 'path';
// import { withSentryConfig } from '@sentry/nextjs';
import './src/libs/Env.mjs';
import withBundleAnalyzer from '@next/bundle-analyzer';
import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer(
  withNextIntlConfig({
    eslint: {
      dirs: ['.'],
    },
    sassOptions: {
      sourceMap: true,
      importer: globImporter(),
      includePaths: [path.join(process.cwd(), 'styles')],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
      // Related to Pino error with RSC: https://github.com/orgs/vercel/discussions/3150
      serverComponentsExternalPackages: ['pino'],
    },
    webpack: (config) => {
      // config.externals is needed to resolve the following errors:
      // Module not found: Can't resolve 'bufferutil'
      // Module not found: Can't resolve 'utf-8-validate'
      config.externals.push({
        bufferutil: 'bufferutil',
        'utf-8-validate': 'utf-8-validate',
      });

      return config;
    },
  }),
);
