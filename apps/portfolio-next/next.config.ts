import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisations de performance
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion', 'react-parallax-tilt'],
  },
  
  // Compression et optimisation
  compress: true,
  
  // Configuration de l'URL de base
  basePath: '',
  trailingSlash: false,
  
  // Configuration spécifique pour AWS Amplify
  output: 'standalone', // Pour une meilleure performance sur Amplify
  
  // Variables d'environnement
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://votre-domaine.amplifyapp.com',
  },
  
  // Optimisation pour le déploiement
  generateEtags: true,
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Headers de sécurité et performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  
  // Optimisation des images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Optimisation du bundle
  webpack: (config, { dev, isServer }) => {
    // Optimisations pour la production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    // Configuration pour ignorer les erreurs Tailwind CSS v4 non bloquantes
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      /Cannot apply unknown utility class/,
      /Are you using CSS modules or similar and missing @reference/,
    ];
    
    return config;
  },
  
  // Optimisation du serveur
  poweredByHeader: false,
  
  // Optimisation des redirections
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/#portfolio',
        permanent: false,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: false,
      },
    ];
  },
  
  // Optimisation des rewrites
  async rewrites() {
    return [];
  },
};

export default nextConfig;