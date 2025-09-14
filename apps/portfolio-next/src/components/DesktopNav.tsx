import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa6';
import type { NavLink } from '../hooks/useActiveNav';
import { useRef, useEffect } from 'react';

interface DesktopNavProps {
  navLinks: NavLink[];
  isActive: (link: NavLink) => boolean;
  activeSection: string | null;
  activeDropdown: string | null;
  setActiveDropdown: (label: string | null) => void;
  toggleDropdown: (label: string | null) => void;
}

export function DesktopNav({ navLinks, isActive, activeDropdown, setActiveDropdown, toggleDropdown }: DesktopNavProps) {
  // Pour focus clavier sur le premier lien du sous-menu
  const dropdownRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    if (activeDropdown && dropdownRefs.current[activeDropdown]) {
      dropdownRefs.current[activeDropdown]?.focus();
    }
  }, [activeDropdown]);

  // Gestion Escape pour fermer le dropdown
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
    <div className="hidden lg:flex items-center space-x-6">
      {navLinks.map((link) => {
        const active = isActive(link);
        if (link.subMenu) {
          const isDropdownOpen = activeDropdown === link.label;
          const dropdownId = `dropdown-${link.label.replace(/\s+/g, '').toLowerCase()}`;
          return (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown(link.label)}
                className={`relative py-2 px-3 text-sm xl:text-base font-medium transition-all duration-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1 ${
                  active
                    ? 'text-orange-600 dark:text-orange-400'
                    : 'text-gray-800 dark:text-gray-200'
                }`}
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-controls={dropdownId}
              >
                {link.label}
                <span className={`text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  <FaChevronDown />
                </span>
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></span>
                )}
              </button>
              {/* Desktop Dropdown */}
              <div
                id={dropdownId}
                role="menu"
                aria-label={link.label}
                className={`absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 transition-all duration-200 transform ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
              >
                <div className="py-2">
                  {link.subMenu.map((subLink, idx) => {
                    const isSubActive = isActive({ ...link, href: subLink.href, subMenu: undefined });
                    return (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        role="menuitem"
                        tabIndex={isDropdownOpen ? 0 : -1}
                        ref={el => {
                          if (isDropdownOpen && idx === 0) {
                            dropdownRefs.current[link.label] = el;
                          }
                        }}
                        className={`block px-4 py-3 text-sm font-medium transition-colors ${
                          isSubActive
                            ? 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20'
                            : 'text-gray-900 dark:text-gray-200 hover:text-orange-600 hover:bg-gray-100 dark:hover:text-orange-400 dark:hover:bg-gray-700'
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
            className={`relative py-2 px-3 text-sm xl:text-base font-medium transition-all duration-300 hover:text-orange-600 dark:hover:text-orange-400 ${
              active
                ? 'text-orange-600 dark:text-orange-400'
                : 'text-gray-800 dark:text-gray-200'
            }`}
          >
            {link.label}
            {active && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></span>
            )}
          </Link>
        );
      })}
    </div>
  );
} 