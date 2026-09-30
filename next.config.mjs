/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Keep previously shared résumé links working after the file rename.
        source: "/Resume_Elder_Bradley_v12.pdf",
        destination: "/Resume_Elder_Bradley.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
