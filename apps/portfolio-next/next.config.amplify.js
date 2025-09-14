/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration spécifique pour AWS Amplify
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Désactiver les fonctionnalités server-side pour Amplify
  experimental: {
    esmExternals: false
  }
}

module.exports = nextConfig
