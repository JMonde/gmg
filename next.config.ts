import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config) => {
    // Create a new SVG rule
    const svgRule = {
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
    };

    // Find the asset rule (usually handles images, fonts, etc.) and modify it to exclude SVGs
    const assetRuleIndex = config.module.rules.findIndex((rule: any) => {
      return rule && rule.test && rule.test.toString().includes('svg');
    });

    if (assetRuleIndex !== -1) {
      // If there's already an SVG rule, replace it
      config.module.rules[assetRuleIndex] = svgRule;
    } else {
      // Otherwise, add our rule to handle SVGs
      config.module.rules.push(svgRule);
    }

    return config;
  },
};

export default nextConfig;
