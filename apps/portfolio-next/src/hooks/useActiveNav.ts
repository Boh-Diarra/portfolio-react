import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useActiveSection } from './useActiveSection';

export interface SubMenuItem {
  href: string;
  label: string;
}

export interface NavLink {
  href?: string;
  label: string;
  subMenu?: SubMenuItem[];
}

export function useActiveNav(navLinks: NavLink[]) {
  const pathname = usePathname();
  const getAllSectionIds = () => {
    const ids: string[] = [];
    navLinks.forEach((link: NavLink) => {
      if (link.href) ids.push(link.href.substring(2));
      if (link.subMenu) link.subMenu.forEach((sub: SubMenuItem) => ids.push(sub.href.substring(2)));
    });
    return ids;
  };
  const sectionIds = getAllSectionIds();
  const maybeActiveSection = useActiveSection(sectionIds); // Toujours appelé
  const isHome = pathname === '/';
  const activeSection = isHome ? maybeActiveSection : null;
  const [currentHash, setCurrentHash] = useState<string>('');

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);
    updateHash();
    window.addEventListener('hashchange', updateHash);
    window.addEventListener('popstate', updateHash);
    return () => {
      window.removeEventListener('hashchange', updateHash);
      window.removeEventListener('popstate', updateHash);
    };
  }, []);

  function isActive(link: NavLink): boolean {
    if (link.href) {
      if (isHome) {
        if (activeSection && activeSection === link.href.substring(2)) return true;
        if (currentHash && currentHash === link.href.substring(1)) return true;
        return false;
      }
      return pathname === link.href;
    }
    if (link.subMenu) {
      if (isHome) {
        return link.subMenu.some((subLink: SubMenuItem) => {
          if (activeSection && activeSection === subLink.href.substring(2)) return true;
          if (currentHash && currentHash === subLink.href.substring(1)) return true;
          return false;
        });
      }
      return link.subMenu.some((subLink: SubMenuItem) => pathname === subLink.href);
    }
    return false;
  }

  return { isActive, activeSection };
} 