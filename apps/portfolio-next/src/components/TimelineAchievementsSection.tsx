import React from 'react';
import { FaCheck } from 'react-icons/fa6';

interface TimelineAchievementsSectionProps {
  points: string[];
  result?: string;
}

export const TimelineAchievementsSection: React.FC<TimelineAchievementsSectionProps> = ({ points, result }) => (
  <div className="mt-2">
    <strong className="text-gray-800 dark:text-gray-100">Réalisations principales :</strong>
    <div className="flex flex-col gap-1 mt-1">
      {points.map((point, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="mt-1"><FaCheck color="#FD9800" size={20} /></span>
          <span className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: point }}></span>
        </div>
      ))}
    </div>
    {result && (
      <div className="mt-2"><strong className="text-gray-800 dark:text-gray-100">{result}</strong></div>
    )}
  </div>
); 