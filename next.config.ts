import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config) => {
    // Remove any existing asset rules that might handle SVGs
    config.module.rules = config.module.rules.filter((rule: any) => {
      if (rule && rule.test) {
        if (rule.test instanceof RegExp) {
          // If the rule's test regex includes SVG, exclude the rule
          return !rule.test.test('.svg');
        } else if (typeof rule.test === 'function') {
          try {
            // If the rule's test function accepts SVG, exclude the rule
            return !rule.test('.svg');
          } catch (e) {
            // If test function throws, keep the rule
            return true;
          }
        }
      }
      return true;
    });

    // Add our SVGR rule for SVG files with proper configuration
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            dimensions: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;