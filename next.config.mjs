/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // 🔥 Google Popup COOP Fix
  async headers() {
    return [
      {
        source: "/(.*)", // সব route এ apply হবে
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "unsafe-none",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
