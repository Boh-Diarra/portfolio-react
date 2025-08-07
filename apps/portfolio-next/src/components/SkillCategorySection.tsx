import React from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';
import type { Skill } from './CompetencesClient';

interface SkillCategorySectionProps {
  category: string;
  categorySkills: Skill[];
  categories: Record<string, { title: string; color: string }>;
  cardVariants: any;
}

export const SkillCategorySection: React.FC<SkillCategorySectionProps> = ({ category, categorySkills, categories, cardVariants }) => (
  <motion.div key={category} variants={cardVariants} className="space-y-6">
    <div className="text-center">
      <h2 className={`text-3xl font-bold bg-gradient-to-r ${categories[category as keyof typeof categories].color} bg-clip-text text-transparent mb-6`}>
        {categories[category as keyof typeof categories].title}
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categorySkills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} cardVariants={cardVariants} />
      ))}
    </div>
  </motion.div>
); 