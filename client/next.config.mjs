import dotenv from 'dotenv';
import { PHASE_DEVELOPMENT_SERVER, PHASE_TEST } from 'next/constants.js';

const isDev = (phase) =>
  phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_TEST;

const getEnv = (phase) => {
  const { parsed } = dotenv.config({
    path: `./env/.env.${isDev(phase) ? 'development' : 'production'}`,
  });
  return parsed;
};

const nextConfig = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  reactStrictMode: !isDev(phase),
  env: getEnv(phase),
  devIndicators: {
    buildActivityPosition: 'bottom-left',
  },
  images: {
    domains: ['ik.imagekit.io', 'mondaymorning.nitrkl.ac.in', 'mm.dashnet.in'],
  },
  eslint: {
    /**
     * Warning!
     * This allows production builds to successfully complete even if your project has ESLint errors.
     * Do not enable for production builds.
     */
    ignoreDuringBuilds: true,
  },
});

export default nextConfig;
