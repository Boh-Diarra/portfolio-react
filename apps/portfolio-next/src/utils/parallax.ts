// Utilitaire Parallax pour Hero
export function setupParallaxEffect(elementId: string) {
  if (typeof window === 'undefined') return;
  
  // Attendre que l'hydratation soit terminée
  const waitForHydration = () => {
    return new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', () => resolve());
      }
    });
  };

  waitForHydration().then(() => {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    function onScroll() {
      if (!el) return;
      if (window.innerWidth < 768) {
        el.style.transform = '';
        return;
      }
      const offset = window.scrollY * 0.2;
      el.style.transform = `translateY(${offset}px)`;
    }
    
    window.addEventListener('scroll', onScroll);
    // Nettoyage si besoin (ex: dans un useEffect)
    return () => window.removeEventListener('scroll', onScroll);
  });
} 