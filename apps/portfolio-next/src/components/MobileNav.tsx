import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa6';
import type { NavLink } from '../hooks/useActiveNav';
import type { SocialLink } from '../config/socialLinks';
import ThemeToggle from './ThemeToggle';
import { SocialLinks } from './SocialLinks';

interface MobileNavProps {
  navLinks: NavLink[];
  isActive: (link: NavLink) => boolean;
  activeSection: string | null;
  isOpen: boolean;
  onClose: () => void;
  activeDropdown: string | null;
  setActiveDropdown: (label: string | null) => void;
  toggleDropdown: (label: string | null) => void;
  closeMenu: () => void;
  socialLinks: SocialLink[];
}

export function MobileNav({ navLinks, isActive, activeSection, isOpen, onClose, activeDropdown, setActiveDropdown, toggleDropdown, closeMenu, socialLinks }: MobileNavProps) {
  // Pour focus clavier sur le premier lien du sous-menu
  const dropdownRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    if (activeDropdown && dropdownRefs.current[activeDropdown]) {
      dropdownRefs.current[activeDropdown]?.focus();
    }
  }, [activeDropdown]);

  // Gestion Escape pour fermer le sous-menu
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
      }
    }
    if (activeDropdown) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDropdown, setActiveDropdown]);

  return (
    <div
      className={`mobile-menu lg:hidden absolute left-0 right-0 top-full bg-white dark:bg-gray-900/95 border-b border-gray-200/50 dark:border-gray-700/50 shadow-xl transition-all duration-300 ease-out ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        {/* Header with close button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-black dark:text-gray-100">Menu</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Fermer le menu"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <nav className="space-y-2 mb-6">
          {navLinks.map((link) => {
            const active = isActive(link);
            if (link.subMenu) {
              const isDropdownOpen = activeDropdown === link.label;
              const dropdownId = `mobile-dropdown-${link.label.replace(/\s+/g, '').toLowerCase()}`;
              return (
                <div key={link.label} className="space-y-1">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                      active
                        ? 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/20 border-l-4 border-orange-500'
                        : 'text-black dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                    aria-controls={dropdownId}
                  >
                    {link.label}
                    <span className={`text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                      <FaChevronDown />
                    </span>
                  </button>
                  {/* Mobile Submenu */}
                  <div
                    id={dropdownId}
                    role="menu"
                    aria-label={link.label}
                    className={`overflow-hidden transition-all duration-300 ${isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="pl-4 space-y-1 mt-2 py-2">
                      {link.subMenu.map((subLink, idx) => {
                        const isSubActive = isActive({ ...link, href: subLink.href, subMenu: undefined });
                        return (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={closeMenu}
                            role="menuitem"
                            tabIndex={isDropdownOpen ? 0 : -1}
                            ref={el => {
                              if (isDropdownOpen && idx === 0) {
                                dropdownRefs.current[link.label] = el;
                              }
                            }}
                            className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                              isSubActive
                                ? 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20'
                                : 'text-black dark:text-gray-300 hover:text-orange-600 hover:bg-gray-100 dark:hover:text-orange-400 dark:hover:bg-gray-700'
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href!}
                onClick={closeMenu}
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                  active
                    ? 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/20 border-l-4 border-orange-500'
                    : 'text-black dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        {/* Social Links & Theme Toggle */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <SocialLinks links={socialLinks} variant="mobile" />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
} 