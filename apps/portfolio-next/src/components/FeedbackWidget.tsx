'use client';

import { useState, useEffect, useCallback, useRef, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegLightbulb, FaXmark } from 'react-icons/fa6';
import { useFocusTrap } from '../hooks/useFocusTrap';

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const FALLBACK_EMAIL = 'boh.diarra92@gmail.com';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('Suggestion');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [botField, setBotField] = useState('');

  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(panelRef, open);

  // Ouverture déclenchée depuis le footer (événement global)
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-feedback', handler);
    return () => window.removeEventListener('open-feedback', handler);
  }, []);

  // Échap + verrouillage du scroll quand la modale est ouverte
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const reset = useCallback(() => {
    setType('Suggestion');
    setMessage('');
    setEmail('');
    setStatus('idle');
    setBotField('');
  }, []);

  const close = () => {
    setOpen(false);
    setTimeout(reset, 300);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (botField) return; // honeypot rempli → bot, on ignore
    if (!message.trim()) return;
    setStatus('sending');

    // Repli mailto tant que la clé Web3Forms n'est pas configurée
    if (!ACCESS_KEY) {
      const subject = encodeURIComponent(`[Portfolio] ${type}`);
      const body = encodeURIComponent(`${message}\n\n— ${email || 'Visiteur'}`);
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
      setStatus('success');
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `[Portfolio] Nouvelle ${type.toLowerCase()}`,
          from_name: 'Portfolio Boh DIARRA',
          type,
          message,
          replyto: email || undefined,
          email: email || undefined,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 text-gray-800 dark:text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 transition';

  return (
    <>
      {/* Bouton flottant (bas-gauche pour ne pas gêner le bouton "remonter") */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Proposer une suggestion ou un retour"
        className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8732A] to-[#C2410C] text-white px-4 py-3 shadow-lg hover:scale-105 focus-visible:ring-2 focus-visible:ring-orange-400 transition-all duration-300"
      >
        <FaRegLightbulb size={18} />
        <span className="hidden sm:inline font-semibold text-sm">Une suggestion ?</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-title"
          >
            <motion.div
              ref={panelRef}
              className="relative w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 shadow-2xl p-6"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Fermer"
                className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/10 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-black/20 dark:hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-orange-400 transition-colors"
              >
                <FaXmark />
              </button>

              {status === 'success' ? (
                <div className="text-center py-6">
                  <div className="flex justify-center mb-3 text-4xl">🙏</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Merci pour votre retour !</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Votre message a bien été transmis. J'en tiendrai compte.</p>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-5 inline-flex items-center px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#E8732A] to-[#C2410C] hover:scale-105 transition-transform"
                  >
                    Fermer
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 id="feedback-title" className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    Une idée d&apos;amélioration ?
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Suggestion, bug ou remarque, dites-moi tout, ça m&apos;aide à progresser.
                  </p>

                  {/* Honeypot anti-spam (caché) */}
                  <input
                    type="text"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="mt-4 space-y-3 text-left">
                    <div>
                      <label htmlFor="fb-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
                      <select id="fb-type" value={type} onChange={(e) => setType(e.target.value)} className={inputClass}>
                        <option>Suggestion</option>
                        <option>Bug</option>
                        <option>Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="fb-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                      <textarea
                        id="fb-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Votre suggestion d'amélioration…"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="fb-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">E-mail (optionnel)</label>
                      <input
                        id="fb-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="pour vous recontacter"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="mt-3 text-sm text-red-500">Oups, l&apos;envoi a échoué. Merci de réessayer.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-5 w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#E8732A] to-[#C2410C] shadow hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-orange-400 transition-all duration-300 disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {status === 'sending' ? 'Envoi…' : 'Envoyer'}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
