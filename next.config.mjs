/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'api.github.com', 'raw.githubusercontent.com'],
    unoptimized: true
  },
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone'
};

export default nextConfig;
