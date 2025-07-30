import { useState, useCallback } from 'react';

export function useDropdown<T = string | null>(initial: T = null as T) {
  const [activeDropdown, setActiveDropdown] = useState<T>(initial);

  const openDropdown = useCallback((value: T) => setActiveDropdown(value), []);
  const closeDropdown = useCallback(() => setActiveDropdown(initial), [initial]);
  const toggleDropdown = useCallback(
    (value: T) => setActiveDropdown((current) => (current === value ? initial : value)),
    [initial]
  );

  return {
    activeDropdown,
    setActiveDropdown,
    openDropdown,
    closeDropdown,
    toggleDropdown,
  };
} 