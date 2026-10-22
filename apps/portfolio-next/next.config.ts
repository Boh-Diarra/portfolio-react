import type { NextConfig } from "next";

// Content-Security-Policy (Report-Only) : Vercel Analytics, Vercel Live (previews) et Web3Forms
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://vercel.live",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://api.web3forms.com https://va.vercel-scripts.com https://vercel.live",
  "frame-src https://vercel.live",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

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
  
  // (Vercel gère Next.js nativement — pas de output 'standalone', qui était prévu pour Amplify)
  
  // Variables d'environnement
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://bohdiarra.vercel.app',
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
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            // Mode observation : les violations sont signalées dans la console, rien n'est bloqué
            key: 'Content-Security-Policy-Report-Only',
            value: contentSecurityPolicy,
          },
        ],
      },
      {
        // Images non versionnées : cache d'une semaine (au lieu d'un an immutable)
        source: '/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800',
          },
        ],
      },
    ];
  },
  
  // Optimisation des images
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
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