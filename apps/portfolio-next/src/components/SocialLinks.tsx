'use client';

import React from 'react';
import Link from 'next/link';
import type { SocialLink } from '../config/socialLinks';

interface SocialLinksProps {
  links: SocialLink[];
  variant?: 'header' | 'footer' | 'mobile';
  className?: string;
}

export function SocialLinks({ links, variant = 'header', className = '' }: SocialLinksProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'header':
        return 'icon-social text-xl hover:scale-110 transition-transform duration-300 text-gray-800 dark:text-gray-200';
      case 'footer':
        return 'icon-social text-2xl p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-orange-500/50 text-white';
      case 'mobile':
        return 'icon-social text-xl hover:scale-110 transition-transform duration-300 text-gray-800 dark:text-gray-200';
      default:
        return 'icon-social text-xl hover:scale-110 transition-transform duration-300 text-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={getVariantClasses()}
            data-icon={link.name}
            aria-label={`Suivez-moi sur ${link.name}`}
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
} 