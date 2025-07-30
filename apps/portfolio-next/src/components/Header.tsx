'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useActiveNav, NavLink } from '../hooks/useActiveNav';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import ThemeToggle from './ThemeToggle';
import { SocialLinks } from './SocialLinks';
import { socialLinks } from '../config/socialLinks';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { useDropdown } from '../hooks/useDropdown';

const navLinks: NavLink[] = [
  { href: '/#home', label: 'Accueil' },
  { href: '/#about', label: 'À propos' },
  { 
    label: 'Mes travaux', 
    subMenu: [
      { href: '/#experience', label: 'Expériences' },
      { href: '/#portfolio', label: 'Portfolio' },
    ],
  },
  { href: '/#service', label: 'Services' },
  { 
    label: 'Références', 
    subMenu: [
  { href: '/#review', label: 'Témoignages' },
      { href: '/#team', label: 'Collaborateurs' },
    ],
  },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  // Tous les hooks d'abord
  const {
    isOpen,
    mobileMenuRef,
    toggleMenu,
    closeMenu,
  } = useMobileMenu();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { activeDropdown, setActiveDropdown, toggleDropdown } = useDropdown<string | null>(null);
  const { isActive, activeSection } = useActiveNav(navLinks);

  // Puis seulement ensuite le test
  if (!mounted) {
    return (
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <nav className="container mx-auto px-4 tablet:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Boh DIARRA
            </div>
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
      <nav className="container mx-auto px-4 tablet:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl tablet:text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            Boh DIARRA
          </Link>
          {/* Desktop Navigation */}
          <DesktopNav navLinks={navLinks} isActive={isActive} activeSection={activeSection} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} toggleDropdown={toggleDropdown} />
          {/* Desktop Social Links & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <SocialLinks links={socialLinks} variant="header" />
            <ThemeToggle />
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-2.5' : ''
                }`}
              />
              <span 
                className={`absolute top-2.5 left-0 w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`absolute top-4 left-0 w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-2.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
        {/* Mobile Navigation */}
        <div ref={mobileMenuRef}>
          <MobileNav
            navLinks={navLinks}
            isActive={isActive}
            activeSection={activeSection}
            isOpen={isOpen}
            onClose={closeMenu}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            toggleDropdown={toggleDropdown}
            closeMenu={closeMenu}
            socialLinks={socialLinks}
          />
        </div>
        {/* Mobile Menu Backdrop */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
} 