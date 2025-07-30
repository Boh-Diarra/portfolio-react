'use client';

import { useState, useEffect } from 'react';
import { FaClock, FaExclamation } from 'react-icons/fa6';
import { useRateLimit } from '../hooks/useRateLimit';
import { createMailtoUrl } from '../utils/emailUtils';

interface RateLimitedContactLinkProps {
  email: string;
  subject?: string;
  body?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'icon';
  showAttempts?: boolean;
}

export default function RateLimitedContactLink({
  email,
  subject = 'Contact Portfolio',
  body = `Bonjour Boh,

Je souhaite discuter d'un projet avec vous.

Cordialement,`,
  children,
  className = '',
  variant = 'primary',
  showAttempts = false,
}: RateLimitedContactLinkProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const {
    checkRateLimit,
    isBlocked,
    remainingTime,
    formatRemainingTime,
    attempts,
    maxAttempts,
  } = useRateLimit();

  // Mettre à jour le temps restant toutes les secondes
  useEffect(() => {
    if (isBlocked && remainingTime > 0) {
      const interval = setInterval(() => {
        // Le hook se met à jour automatiquement
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isBlocked, remainingTime]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isBlocked) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
      return;
    }

    const isAllowed = checkRateLimit();
    
    if (isAllowed) {
      const mailtoUrl = createMailtoUrl(email, subject, body);
      window.open(mailtoUrl, '_blank');
    } else {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }
  };

  const getButtonClasses = () => {
    const baseClasses = 'transition-all duration-300 focus-visible:ring-2 focus-visible:ring-orange-500';
    
    if (isBlocked) {
      return `${baseClasses} opacity-50 cursor-not-allowed bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400`;
    }

    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white hover:from-[#ff6b35] hover:to-[#FD9800]`;
      case 'secondary':
        return `${baseClasses} border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-[#FD9800] hover:to-[#ff6b35] hover:text-white`;
      case 'icon':
        return `${baseClasses} text-[#FD9800] hover:text-[#ff6b35]`;
      default:
        return baseClasses;
    }
  };

  const getButtonContent = () => {
    if (isBlocked) {
      return (
        <div className="flex items-center gap-2">
          <FaClock/>
          <span>Attendez {formatRemainingTime(remainingTime)}</span>
        </div>
      );
    }

    return children;
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        disabled={isBlocked}
        className={`${getButtonClasses()} ${className}`}
        title={isBlocked ? `Trop de tentatives. Réessayez dans ${formatRemainingTime(remainingTime)}` : undefined}
      >
        {getButtonContent()}
      </button>

      {/* Tooltip d'information */}
      {showAttempts && !isBlocked && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400">
          {attempts}/{maxAttempts} tentatives
        </div>
      )}

      {/* Tooltip d'erreur */}
      {showTooltip && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-2 rounded-lg text-sm shadow-lg z-50 animate-bounce">
          <div className="flex items-center gap-2">
          <FaExclamation />
            <span>
              {isBlocked 
                ? `Trop de tentatives. Réessayez dans ${formatRemainingTime(remainingTime)}`
                : 'Limite de tentatives atteinte'
              }
            </span>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-500"></div>
        </div>
      )}
    </div>
  );
} 