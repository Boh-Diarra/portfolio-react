import React from 'react';
import { motion } from 'framer-motion';

interface SkillProgressBarProps {
  level: number;
  index: number;
  colorFrom?: string;
  colorTo?: string;
}

export const SkillProgressBar: React.FC<SkillProgressBarProps> = ({ level, index, colorFrom = '#FD9800', colorTo = '#ff6b35' }) => (
  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${level}%` }}
      transition={{ duration: 1, delay: index * 0.1 }}
      className={`h-2 rounded-full relative overflow-hidden`}
      style={{ background: `linear-gradient(to right, ${colorFrom}, ${colorTo})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
    </motion.div>
  </div>
); 