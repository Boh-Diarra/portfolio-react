import { useEffect } from 'react';
import type { RefObject } from 'react';

/**
 * Piège le focus clavier à l'intérieur d'un conteneur (modale) tant que `active` est vrai.
 * - Place le focus sur le premier élément focusable à l'ouverture.
 * - Fait boucler le focus avec Tab / Shift+Tab (ne sort plus de la modale).
 * - Restaure le focus sur l'élément précédemment actif à la fermeture.
 */
export function useFocusTrap<T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>, active: boolean) {
  useEffect(() => {
    if (!active) return;
    const node = ref.current;
    if (!node) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const selector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const getFocusable = () =>
      Array.from(node.querySelectorAll<HTMLElement>(selector)).filter(
        (el) => el.offsetParent !== null
      );

    // Focus initial sur le premier élément focusable
    const focusables = getFocusable();
    (focusables[0] ?? node).focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const items = getFocusable();
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const activeEl = document.activeElement;

      if (e.shiftKey) {
        if (activeEl === first || !node.contains(activeEl)) {
          e.preventDefault();
          last.focus();
        }
      } else if (activeEl === last) {
        e.preventDefault();
        first.focus();
      }
    };

    node.addEventListener('keydown', onKeyDown);
    return () => {
      node.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [ref, active]);
}
