import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';

interface TimelineSkillsSectionProps {
  points: string[];
  benefit?: string;
}

export const TimelineSkillsSection: React.FC<TimelineSkillsSectionProps> = ({ points, benefit }) => (
  <div className="mt-2">
    <strong className="text-gray-800 dark:text-gray-100">Compétences acquises :</strong>
    <div className="flex flex-col gap-1 mt-1">
      {points.map((point, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="mt-1"><FaAngleRight color="#FD9800" /></span>
          <span className="text-gray-700 dark:text-gray-300">{point}</span>
        </div>
      ))}
    </div>
    {benefit && (
      <div className="mt-2">
        <strong className="text-gray-800 dark:text-gray-100">Bénéfice :</strong>
        <span className="text-gray-700 dark:text-gray-300"> {benefit}</span>
      </div>
    )}
  </div>
); 