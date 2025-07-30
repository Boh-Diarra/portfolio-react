'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaBrain, FaCloud, FaBullhorn } from 'react-icons/fa6';

interface LearningItem {
  name: string;
  description: string;
  progress: number;
  icon: React.ReactNode;
  status: 'learning' | 'practicing' | 'exploring' | 'researching';
}

const learningItems: LearningItem[] = [
  {
    name: 'AWS Cloud Technical Essentials',
    description: "Découverte des fondamentaux du cloud AWS : services, déploiement, sécurité et gestion d'infrastructure.",
    progress: 60,
    icon: <FaAws color="#FF9900" />,
    status: 'learning',
  },
  {
    name: 'Meta Social Media Marketing',
    description: "Formation sur les stratégies de marketing digital et l'utilisation professionnelle des réseaux sociaux (Meta, Facebook, Instagram).",
    progress: 50,
    icon: <FaBullhorn color="#4267B2" />,
    status: 'exploring',
  },
  {
    name: 'Veille IA pour développeur',
    description: "Suivi constant des tendances et outils IA pour accélérer le développement, automatiser et innover.",
    progress: 85,
    icon: <FaBrain color="#FF6B35" />,
    status: 'researching',
  },
];

const statusColors = {
  learning: 'from-green-500 to-emerald-500',
  practicing: 'from-blue-500 to-cyan-500',
  exploring: 'from-purple-500 to-pink-500',
  researching: 'from-orange-500 to-red-500'
};

const statusLabels = {
  learning: 'En apprentissage',
  practicing: 'En pratique',
  exploring: 'En exploration',
  researching: 'En veille'
};

const Learning: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] bg-clip-text text-transparent">
            En ce moment, j'apprends...
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez les technologies et concepts que j'explore actuellement pour enrichir mes compétences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {learningItems.map((item, index) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div
                className="bg-white dark:bg-[#23272f] border border-gray-200 dark:border-[#FD9800] rounded-xl p-8 transition-all duration-300 shadow-sm flex flex-col h-full"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#FD9800] transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium bg-gradient-to-r ${statusColors[item.status]} bg-clip-text text-transparent`}>
                      {statusLabels[item.status]}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className="h-3 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] rounded-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FD9800] to-[#ff6b35] opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            L'apprentissage continu est au cœur de ma passion pour le développement
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Learning; 