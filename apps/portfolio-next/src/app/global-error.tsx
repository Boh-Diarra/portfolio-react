'use client';

import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log l'erreur pour le monitoring
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="fr">
      <body className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-md w-full mx-4 text-center">
          {/* Icône d'erreur */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-red-500 dark:text-red-400">
              <FaExclamationTriangle size={48} />
            </div>
            </div>
            <div className="text-6xl font-bold text-red-500 dark:text-red-400 mb-2">
              Oups !
            </div>
            <div className="w-16 h-1 bg-red-500 dark:bg-red-400 mx-auto rounded-full"></div>
          </div>

          {/* Message d'erreur */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Une erreur s'est produite
            </h1>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Désolé, une erreur inattendue s'est produite.
              <br />
              Veuillez réessayer ou retourner à l'accueil.
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              <span className="mr-2">
                <FaRedo size={16} />
              </span>
              Réessayer
            </button>
            
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              <span className="mr-2">
                <FaHome size={16} />
              </span>
              Retour à l'accueil
            </Link>
          </div>

          {/* Informations de contact */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Le problème persiste ?
            </p>
            <Link
              href="/#contact"
              className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 font-medium transition-colors duration-200"
            >
              Contactez-moi
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
