import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Exclude SVGs from the default asset loader
    const assetRule = config.module.rules.find((rule: any) => 
      rule.test && rule.test.toString().includes('svg')
    );
    
    if (assetRule) {
      assetRule.exclude = /\.svg$/;
    }

    // Add SVGR loader for SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
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