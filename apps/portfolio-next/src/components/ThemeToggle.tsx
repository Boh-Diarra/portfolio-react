'use client';

import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Éviter le mismatch d'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
        aria-label="Chargement du thème..."
      >
        <FaMoon color="#6b7280" size={18} />
      </button>
    );
  }

  const toggleTheme = () => {
    // Alternance simple : clair ↔ sombre
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const getCurrentIcon = () => {
    return resolvedTheme === 'dark' ? 
      <FaSun color="#FD9800" size={18} /> : 
      <FaMoon color="#6b7280" size={18} />;
  };

  const getAriaLabel = () => {
    return resolvedTheme === 'dark' ? 
      'Passer en mode clair' : 
      'Passer en mode sombre';
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={getAriaLabel()}
      className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:border-orange-400 dark:hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
      title={`Mode actuel : ${resolvedTheme === 'dark' ? 'Sombre' : 'Clair'}`}
    >
      {getCurrentIcon()}
    </button>
  );
} 