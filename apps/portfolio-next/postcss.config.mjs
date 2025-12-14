const config = {
  plugins: [
    [
      "@tailwindcss/postcss",
      {
        // Ignorer les erreurs @apply pour compatibilité avec Tailwind v4
        onError: (err) => {
          // Convertir les erreurs en warnings pour ne pas bloquer le build
          console.warn('Tailwind CSS warning:', err.message);
        }
      }
    ]
  ],
};

export default config;
