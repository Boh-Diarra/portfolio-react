// Utilitaire d'animation au scroll (fade-in)
export function setupScrollAnimations() {
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
    const elements = document.querySelectorAll('.fade-in-start');
    const observer = new window.IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-end');
            entry.target.classList.remove('fade-in-start');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    elements.forEach(el => observer.observe(el));
  });
} 