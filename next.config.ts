import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // No basePath - deployed at root on Vercel
  env: {
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  },
};

export default nextConfig;