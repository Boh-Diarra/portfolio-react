'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNode } from 'react-icons/fa6';

interface Skill {
  name: string;
  level: number;
  years: number;
  logo: React.ReactNode;
  description: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'mobile' | 'cms' | 'it';
}

const mainSkills: Skill[] = [
  {
    name: 'JavaScript',
    level: 90,
    years: 3,
    logo: <FaJs color="#F7DF1E" />,
    description: "Langage de programmation incontournable pour le web, utilisé côté client et serveur. Permet de créer des interfaces dynamiques et interactives.",
    category: 'frontend',
  },
  {
    name: 'React.js',
    level: 85,
    years: 2,
    logo: <FaReact color="#61DAFB" />,
    description: "Bibliothèque JavaScript pour construire des interfaces utilisateur modernes, réactives et modulaires. Idéale pour les applications web complexes.",
    category: 'frontend',
  },
  {
    name: 'Node.js',
    level: 75,
    years: 2,
    logo: <FaNode color="#339933" />,
    description: "Environnement d'exécution JavaScript côté serveur, permettant de créer des API performantes et des applications backend évolutives.",
    category: 'backend',
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] bg-clip-text text-transparent">
            Mes Compétences principales
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Voici un aperçu de mes compétences clés. <br />
            <span className="font-semibold text-[#FD9800]">Découvrez l'ensemble de mes compétences et formations sur la page dédiée.</span>
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mainSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="about-card bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/40 hover:border-[#FD9800]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#FD9800]/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{skill.logo}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-[#FD9800] transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.years} an{skill.years > 1 ? 's' : ''} d'expérience
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {/* Section niveau et pourcentages commentée
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300">Niveau</span>
                    <span className="text-[#FD9800] font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] rounded-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </motion.div>
                  </div>
                  */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="/competences"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white font-bold shadow-lg hover:scale-105 hover:shadow-[#FD9800]/40 transition-all duration-300"
          >
            Découvrir toutes mes compétences & formations
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills; 