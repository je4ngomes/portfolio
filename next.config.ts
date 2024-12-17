import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.resolve.alias["~"] = path.resolve(__dirname);
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: "url-loader?limit=100000",
    });
    return config;
  },
};

export default nextConfig;
