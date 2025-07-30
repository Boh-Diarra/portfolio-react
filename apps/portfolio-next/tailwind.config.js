/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',      // Extra small phones
        'sm': '640px',      // Small phones (default)
        'md': '768px',      // Small tablets (default)
        'lg': '1024px',     // Large tablets / Small laptops (default)
        'xl': '1280px',     // Desktop (default)
        '2xl': '1536px',    // Large desktop (default)
        // Custom breakpoints for better UX
        'tablet': '860px',  // Real tablet breakpoint (between md and lg)
        'laptop': '1200px', // Laptop-specific
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      minHeight: {
        'screen-mobile': '100dvh', // Dynamic viewport height for mobile
      }
    },
  },
  plugins: [],
}; 