/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/chat',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
