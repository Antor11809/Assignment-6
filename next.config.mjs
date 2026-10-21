
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/Assignment-6",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  experimental: {
    agentFeedback: true,
  },

  cacheComponents: false,
  partialPrefetching: false,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

