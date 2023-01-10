/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/weather/04084',
        permanent: true,
      },
    ];
  },
};
