'use client';

import { FaGraduationCap, FaLightbulb, FaBullseye, FaUserCheck, FaHandshake, FaChartLine, FaAward } from 'react-icons/fa6';

const cards = [
  {
    icon: <FaGraduationCap size={36} color="#FD9800" />,
    title: 'Mon Parcours',
    content: (
      <>
        <p className="text-center">Mon parcours dans le numérique a commencé par une passion pour la technologie et l'innovation. J'ai suivi une formation solide en génie informatique qui m'a donné les bases techniques nécessaires, puis j'ai constamment évolué en suivant les dernières tendances du développement web et mobile.</p>
        <ul className="flex flex-wrap gap-3 mt-4 justify-center text-sm text-gray-700 dark:text-gray-300">
          <li className="bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white px-3 py-1 rounded-full">5+ années d'expérience</li>
          <li className="bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white px-3 py-1 rounded-full">10+ certifications</li>
          <li className="bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white px-3 py-1 rounded-full">10+ projets réalisés</li>
          <li className="bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white px-3 py-1 rounded-full">10+ clients satisfaits</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FaLightbulb size={36} color="#FD9800" />,
    title: 'Ma Philosophie',
    content: (
      <>
        <p className="text-center">Je crois que la technologie doit servir l'humain et créer de la valeur réelle. Chaque projet que j'entreprends est guidé par cette conviction : créer des solutions qui non seulement fonctionnent parfaitement, mais qui améliorent la vie des utilisateurs et contribuent au succès des entreprises.</p>
        <ul className="mt-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex items-center gap-2 justify-center"><FaUserCheck color="#FD9800" /> Innovation centrée sur l'utilisateur</li>
          <li className="flex items-center gap-2 justify-center"><FaChartLine color="#FD9800" /> Qualité et performance optimales</li>
          <li className="flex items-center gap-2 justify-center"><FaHandshake color="#FD9800" /> Collaboration et transparence</li>
          <li className="flex items-center gap-2 justify-center"><FaAward color="#FD9800" /> Apprentissage continu</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FaBullseye size={36} color="#FD9800" />,
    title: 'Ma Mission',
    content: (
      <>
        <p className="text-center">Ma mission est d'accompagner les entreprises et entrepreneurs dans leur transformation digitale en créant des solutions innovantes, performantes et durables. Je m'engage à être un partenaire de confiance qui comprend vos enjeux et vous aide à atteindre vos objectifs grâce à la technologie.</p>
        <ul className="flex flex-wrap gap-3 mt-4 justify-center text-sm text-gray-700 dark:text-gray-300">
          <li className="bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white px-3 py-1 rounded-full">98% Satisfaction client</li>
          <li className="bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white px-3 py-1 rounded-full">24h Temps de réponse</li>
          <li className="bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white px-3 py-1 rounded-full">100% projets livrés</li>
          <li className="bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white px-3 py-1 rounded-full">5+ années d'expérience</li>
        </ul>
      </>
    ),
  }
];

export default function EnSavoirPlus() {
  return (
    <section id="en-savoir-plus" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6 sm:px-4 xs:px-2 max-w-screen-xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 sm:mb-12">
          <p className="subtitle-gradient">En Savoir Plus</p>
        </h2>
        <div className="grid gap-4 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="about-card card-base fade-in-start card-orange-shadow hover:ring-1 hover:ring-[#FD9800] bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col items-center text-center transition-all duration-300 min-h-[320px]"
            >
              {card.icon}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 mt-2">
                {card.title}
              </h3>
              <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mt-2">{card.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 