import { useState, useCallback } from 'react';

interface RateLimitConfig {
  maxAttempts: number;
  timeWindow: number; // en millisecondes
  cooldownPeriod: number; // en millisecondes
}

interface RateLimitState {
  attempts: number;
  lastAttempt: number;
  isBlocked: boolean;
  remainingTime: number;
}

const defaultConfig: RateLimitConfig = {
  maxAttempts: 3,
  timeWindow: 60000, // 1 minute
  cooldownPeriod: 300000, // 5 minutes
};

export const useRateLimit = (config: Partial<RateLimitConfig> = {}) => {
  const finalConfig = { ...defaultConfig, ...config };
  const [state, setState] = useState<RateLimitState>({
    attempts: 0,
    lastAttempt: 0,
    isBlocked: false,
    remainingTime: 0,
  });

  const checkRateLimit = useCallback((): boolean => {
    const now = Date.now();
    
    // Si bloqué, vérifier si la période de cooldown est terminée
    if (state.isBlocked) {
      const timeSinceLastAttempt = now - state.lastAttempt;
      if (timeSinceLastAttempt >= finalConfig.cooldownPeriod) {
        setState({
          attempts: 0,
          lastAttempt: 0,
          isBlocked: false,
          remainingTime: 0,
        });
        return true;
      } else {
        const remaining = finalConfig.cooldownPeriod - timeSinceLastAttempt;
        setState(prev => ({ ...prev, remainingTime: remaining }));
        return false;
      }
    }

    // Vérifier si on est dans la fenêtre de temps
    const timeSinceLastAttempt = now - state.lastAttempt;
    if (timeSinceLastAttempt >= finalConfig.timeWindow) {
      // Réinitialiser si la fenêtre de temps est expirée
      setState({
        attempts: 1,
        lastAttempt: now,
        isBlocked: false,
        remainingTime: 0,
      });
      return true;
    }

    // Vérifier le nombre de tentatives
    if (state.attempts >= finalConfig.maxAttempts) {
      setState(prev => ({
        ...prev,
        isBlocked: true,
        lastAttempt: now,
        remainingTime: finalConfig.cooldownPeriod,
      }));
      return false;
    }

    // Autoriser la tentative
    setState(prev => ({
      ...prev,
      attempts: prev.attempts + 1,
      lastAttempt: now,
    }));
    return true;
  }, [state, finalConfig]);

  const formatRemainingTime = useCallback((ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  const resetRateLimit = useCallback(() => {
    setState({
      attempts: 0,
      lastAttempt: 0,
      isBlocked: false,
      remainingTime: 0,
    });
  }, []);

  return {
    checkRateLimit,
    isBlocked: state.isBlocked,
    remainingTime: state.remainingTime,
    formatRemainingTime,
    resetRateLimit,
    attempts: state.attempts,
    maxAttempts: finalConfig.maxAttempts,
  };
}; 