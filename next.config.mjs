/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_OUTPUT === 'export';

const nextConfig = {
  output: isStaticExport ? 'export' : (process.env.NEXT_OUTPUT === 'standalone' ? 'standalone' : undefined),
  trailingSlash: isStaticExport,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  ...(isStaticExport ? {} : {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
          ],
        },
      ];
    },
  }),
};

export default nextConfig;
