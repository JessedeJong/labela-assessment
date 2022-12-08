/* eslint-disable @typescript-eslint/no-var-requires */

/** @typedef {import('next').NextConfig} NextConfig */

/**
 * Set up our Next environment based on build phase
 * @param {string} phase
 * @param {NextConfig} config
 * @returns {NextConfig}
 */
const config = (phase, config) => {
  // Remove defaultConfig from config
  // This can not be included in the returned config
  const { defaultConfig, ...nextConfig } = config;

  /** @type {NextConfig} */
  const cfg = {
    ...nextConfig,
    // Remove x-powered-by header to remove information about the server
    poweredByHeader: false,
    reactStrictMode: false,
    basePath: '',
    devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-left',
    },
    compiler: {
      styledComponents: true,
    },
    images: {
      domains: ['cms.labela.nl'],
    },
  };

  return cfg;
};

module.exports = config;
