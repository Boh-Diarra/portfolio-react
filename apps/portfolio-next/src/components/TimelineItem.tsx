import React from 'react';
import type { TimelineItemProps } from './Timeline';
import { TimelineAchievementsSection } from './TimelineAchievementsSection';
import { TimelineSkillsSection } from './TimelineSkillsSection';

export const TimelineItem: React.FC<{ item: TimelineItemProps; index: number }> = ({ item, index }) => {
  // Helpers pour le parsing de la description
  const renderDescription = () => {
    if (item.description.startsWith('**Réalisations principales :**')) {
      const points = item.description.split('\n').slice(1).filter(point => !/^([•\-*]|\u2022)\s*Résultat/.test(point)).map(point => point.replace(/^([•\-*]|\u2022)\s*/, ''));
      const result = item.description.split('\n').find(p => /^([•\-*]|\u2022)\s*Résultat/.test(p));
      return <TimelineAchievementsSection points={points} result={result ? result.replace(/^([•\-*]|\u2022)\s*/, '') : undefined} />;
    } else if (item.description.startsWith('**Compétences acquises :**')) {
      const points = item.description.split('\n').slice(1).filter(point => !/^([•\-*]|\u2022)?\s*Bénéfice\s*:/i.test(point)).map(point => point.replace(/^([•\-*]|\u2022)\s*/, ''));
      const benefit = item.description.split('\n').find(p => /^([•\-*]|\u2022)?\s*Bénéfice\s*:/i.test(p));
      return <TimelineSkillsSection points={points} benefit={benefit ? benefit.replace(/^([•\-*]|\u2022)?\s*Bénéfice\s*:/i, '').trim() : undefined} />;
    } else {
      return <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>;
    }
  };

  return (
    <React.Fragment>
      {/* Mobile */}
      <div className="flex sm:hidden flex-row items-start fade-in-start mb-8 w-full">
        <div className="w-8 flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="bg-gradient-to-b from-[#FD9800] to-[#ff6b35] shadow-xl w-8 h-8 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="ml-4 flex-1">
          <div className="flex flex-col gap-2">
            <div className="self-end w-fit px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#FD9800] to-[#ff6b35] mb-1">
              {item.date}
            </div>
            <div className="timeline-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-[#FD9800] hover:bg-orange-50 dark:hover:bg-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-1">{item.title}</h3>
              <h4 className="text-md font-semibold text-white bg-gradient-to-r from-[#FD9800] to-[#ff6b35] w-fit px-3 py-1 rounded-full mb-2">{item.subtitle}</h4>
              {renderDescription()}
              <div className="flex flex-wrap gap-2 mt-3">
                {item.credlyUrl && (
                  <a
                    href={item.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform"
                  >
                    Voir sur Credly
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7h-6a4 4 0 00-4 4v6" />
                    </svg>
                  </a>
                )}
                {item.siteUrl && (
                  <a
                    href={item.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform"
                  >
                    Voir le site
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7h-6a4 4 0 00-4 4v6" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop/tablette : alternance classique, pastille orange, date alignée au-dessus de la carte, du côté de la timeline */}
      <div className={`hidden sm:flex fade-in-start mb-12 w-full justify-between items-center`}>
        {index % 2 === 0 ? (
          // Card à gauche
          <>
            <div className="w-full sm:w-5/12 flex flex-col gap-2">
              <div className="self-start w-fit px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#FD9800] to-[#ff6b35] mb-2">
                {item.date}
              </div>
              <div className="timeline-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-[#FD9800] hover:bg-orange-50 dark:hover:bg-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-1">{item.title}</h3>
                <h4 className="text-md font-semibold text-white bg-gradient-to-r from-[#FD9800] to-[#ff6b35] w-fit px-3 py-1 rounded-full mb-2">{item.subtitle}</h4>
                {renderDescription()}
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.credlyUrl && (
                    <a
                      href={item.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform"
                    >
                      Voir sur Credly
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7h-6a4 4 0 00-4 4v6" />
                      </svg>
                    </a>
                  )}
                  {item.siteUrl && (
                    <a
                      href={item.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform"
                    >
                      Voir le site
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7h-6a4 4 0 00-4 4v6" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="z-10 flex items-center bg-gradient-to-b from-[#FD9800] to-[#ff6b35] shadow-xl w-8 h-8 rounded-full mb-4 sm:mb-0">
              <div className="w-4 h-4 bg-white mx-auto rounded-full"></div>
            </div>
            <div className="w-5/12"></div>
          </>
        ) : (
          // Card à droite
          <>
            <div className="w-5/12"></div>
            <div className="z-10 flex items-center bg-gradient-to-b from-[#FD9800] to-[#ff6b35] shadow-xl w-8 h-8 rounded-full mb-4 sm:mb-0">
              <div className="w-4 h-4 bg-white mx-auto rounded-full"></div>
            </div>
            <div className="w-full sm:w-5/12 flex flex-col gap-2">
              <div className="self-end w-fit px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#FD9800] to-[#ff6b35] mb-2">
                {item.date}
              </div>
              <div className="timeline-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-[#FD9800] hover:bg-orange-50 dark:hover:bg-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-1">{item.title}</h3>
                <h4 className="text-md font-semibold text-white bg-gradient-to-r from-[#FD9800] to-[#ff6b35] w-fit px-3 py-1 rounded-full mb-2">{item.subtitle}</h4>
                {renderDescription()}
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.credlyUrl && (
                    <a
                      href={item.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform"
                    >
                      Voir sur Credly
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7h-6a4 4 0 00-4 4v6" />
                      </svg>
                    </a>
                  )}
                  {item.siteUrl && (
                    <a
                      href={item.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform"
                    >
                      Voir le site
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7h-6a4 4 0 00-4 4v6" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
}; 