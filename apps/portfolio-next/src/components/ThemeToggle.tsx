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

  useEffect(() => {
    if (mounted) {
      // Force apply theme to DOM immediately and aggressively
      const html = document.documentElement;
      console.log('ThemeToggle - Before DOM update:', {
        theme,
        resolvedTheme,
        htmlClasses: html.className,
        computedStyle: window.getComputedStyle(html).backgroundColor
      });
      
      // Clear all theme classes first
      html.classList.remove('light', 'dark');
      
      if (resolvedTheme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.add('light');
      }
      
      console.log('ThemeToggle - After DOM update:', {
        htmlClasses: html.className,
        computedStyle: window.getComputedStyle(html).backgroundColor
      });
      
      // Force a repaint
      html.style.display = 'none';
      html.offsetHeight; // trigger reflow
      html.style.display = '';
    }
  }, [resolvedTheme, mounted]);

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
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.log('ThemeToggle - Toggling theme from', theme, 'to', newTheme);
    setTheme(newTheme);
    
    // Force immediate DOM update
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    if (newTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.add('light');
    }
    
    // Force a repaint
    setTimeout(() => {
      html.style.display = 'none';
      html.offsetHeight; // trigger reflow
      html.style.display = '';
    }, 0);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
      className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:border-orange-400 dark:hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
    >
      {theme === 'dark' ? 
        <FaSun color="#FD9800" size={18} /> : 
        <FaMoon color="#6b7280" size={18} />
      }
    </button>
  );
} 