import React from 'react';
import { motion, type Variants } from 'framer-motion';
import type { Skill } from './CompetencesClient';

interface SkillCardProps {
  skill: Skill;
  index: number;
  cardVariants: Variants;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index, cardVariants }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      scale: 1.05,
      rotateY: 5,
      transition: { duration: 0.3 },
    }}
    className="group relative"
  >
    <div
      className="bg-white dark:bg-[#23272f] border border-gray-200 dark:border-[#FD9800] rounded-xl p-6 transition-all duration-300 shadow-sm flex flex-col h-full hover:shadow-lg dark:hover:shadow-orange-500/20"
    >
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex-shrink-0 text-3xl">{skill.logo}</div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 dark:text-[#FD9800] mb-1 group-hover:text-[#FD9800] dark:group-hover:text-[#ff6b35] transition-colors">{skill.name}</h4>
          <p className="text-xs text-gray-700 dark:text-gray-300 mb-1">{skill.description}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{skill.years} an{skill.years > 1 ? 's' : ''} d'expérience</p>
        </div>
      </div>
      {/* Barre de progression commentée */}
      {/* <div className="space-y-2 mt-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-700 dark:text-gray-300">Niveau</span>
          <span className="text-[#FD9800] font-semibold">{skill.level}%</span>
        </div>
        <SkillProgressBar level={skill.level} index={index} />
      </div> */}
    </div>
  </motion.div>
); 