'use client';

import Link from 'next/link';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md w-full mx-4 text-center">
        {/* Icône 404 */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-orange-500 dark:text-orange-400 mb-4">
            404
          </div>
          <div className="w-24 h-1 bg-orange-500 dark:bg-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* Message d'erreur */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Page introuvable
          </h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            <br />
            Vérifiez l'URL ou retournez à l'accueil.
          </p>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            <span className="mr-2">
              <FaHome size={16} />
            </span>
            Retour à l'accueil
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            <span className="mr-2">
              <FaArrowLeft size={16} />
            </span>
            Page précédente
          </button>
        </div>

        {/* Informations de contact */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Besoin d'aide ?
          </p>
          <Link
            href="/#contact"
            className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 font-medium transition-colors duration-200"
          >
            Contactez-moi
          </Link>
        </div>
      </div>
    </div>
  );
}
