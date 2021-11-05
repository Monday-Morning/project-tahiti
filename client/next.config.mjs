import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';
import { DEV_ENV, PROD_ENV } from './.env.mjs';

const nextConfig = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  env: phase === PHASE_DEVELOPMENT_SERVER ? DEV_ENV : PROD_ENV,
  reactStrictMode: phase === PHASE_DEVELOPMENT_SERVER,
  devIndicators: {
    buildActivityPosition: 'bottom-left',
  },
  images: {
    domains: ['ik.imagekit.io'],
  },
});

export default nextConfig;
