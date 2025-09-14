'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Learning from '@/components/Learning';
import Image from 'next/image';
import { FaJs, FaReact, FaNode, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaDatabase, FaWordpress, FaWindows, FaLinux, FaUserShield, FaTerminal,FaCloud, FaBootstrap, FaWix, FaShopify } from 'react-icons/fa6';
import { SkillCategorySection } from './SkillCategorySection';
export interface Skill {
  name: string;
  level: number;
  years: number;
  logo: React.ReactNode;
  description: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'mobile' | 'cms' | 'it';
}

const skills: Skill[] = [
  {
    name: 'JavaScript',
    level: 85,
    years: 2,
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
    name: 'Next.js',
    level: 75,
    years: 2,
    logo: <Image src="/img/nextjs.svg" alt="Next.js" width={32} height={32} className="object-contain aspect-square mx-auto" />,
    description: "Framework React pour le développement d'applications web performantes, avec rendu côté serveur et génération statique.",
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
  {
    name: 'Python',
    level: 70,
    years: 2,
    logo: <FaPython color="#3776AB" />,
    description: "Langage polyvalent, idéal pour l'automatisation, la data science, l'IA et le développement web (Django, Flask).",
    category: 'backend',
  },
  {
    name: 'Django',
    level: 75,
    years: 2,
    logo: <Image src="/img/django.svg" alt="Django" width={32} height={32} className="object-contain aspect-square mx-auto" />,
    description: "Framework Python robuste pour créer des applications web sécurisées et évolutives rapidement.",
    category: 'backend',
  },
  {
    name: 'HTML & CSS',
    level: 90,
    years: 5,
    logo: <><FaHtml5 color="#E34F26" /> <FaCss3Alt color="#1572B6" /></>,
    description: "Les langages de base du web pour structurer et styliser les pages, essentiels à toute interface utilisateur.",
    category: 'frontend',
  },
  {
    name: 'React Native',
    level: 65,
    years: 1,
    logo: <Image src="/img/react-native.svg" alt="React Native" width={32} height={32} className="object-contain aspect-square mx-auto" />,
    description: "Framework pour créer des applications mobiles natives avec React et JavaScript.",
    category: 'mobile',
  },
  {
    name: 'Tailwind CSS',
    level: 85,
    years: 2,
    logo: <Image src="/img/tailwindcss.svg" alt="Tailwind CSS" width={32} height={32} className="object-contain aspect-square mx-auto" />,
    description: "Framework CSS utilitaire pour un design rapide, moderne et responsive.",
    category: 'tools',
  },
  {
    name: 'Bootstrap',
    level: 80,
    years: 2,
    logo: <FaBootstrap color="#6F42C1" />,
    description: "Framework CSS populaire pour créer des interfaces web réactives et élégantes rapidement.",
    category: 'tools',
  },
  {
    name: 'Git & GitHub',
    level: 85,
    years: 2,
    logo: <FaGitAlt color="#F05032" />,
    description: "Outils essentiels pour la gestion de version, la collaboration et le suivi de projets de développement.",
    category: 'tools',
  },
  {
    name: 'Figma',
    level: 75,
    years: 1,
    logo: <FaFigma color="#F24E1E" />,
    description: "Outil de design collaboratif pour la création de maquettes, prototypes et interfaces UI/UX.",
    category: 'tools',
  },
  {
    name: 'MySQL',
    level: 75,
    years: 2,
    logo: <FaDatabase color="#4479A1" />,
    description: "Système de gestion de base de données relationnelle, utilisé pour stocker et organiser les données des applications.",
    category: 'database',
  },
  {
    name: 'WordPress',
    level: 85,
    years: 3,
    logo: <FaWordpress color="#21759B" />,
    description: "CMS leader pour la création de sites web, blogs et boutiques en ligne, facile à personnaliser.",
    category: 'cms',
  },
  {
    name: 'Wix',
    level: 90,
    years: 2,
    logo: <FaWix color="#FAAD4D" />,
    description: "Plateforme de création de sites web par glisser-déposer, idéale pour les projets rapides et sans code.",
    category: 'cms',
  },
  {
    name: 'Shopify',
    level: 70,
    years: 1,
    logo: <FaShopify color="#96BF48" />,
    description: "Solution e-commerce clé en main pour lancer et gérer une boutique en ligne facilement.",
    category: 'cms',
  },
  {
    name: 'Windows Server',
    level: 75,
    years: 2,
    logo: <FaWindows color="#0078D6" />,
    description: "Système d'exploitation serveur de Microsoft, utilisé pour l'administration réseau et la gestion des services IT.",
    category: 'it',
  },
  {
    name: 'Linux',
    level: 70,
    years: 2,
    logo: <FaLinux color="#FCC624" />,
    description: "Système d'exploitation open source, incontournable pour les serveurs, le développement et l'administration système.",
    category: 'it',
  },
  {
    name: 'Active Directory',
    level: 70,
    years: 2,
    logo: <FaUserShield color="#0078D6" />,
    description: "Service d'annuaire Microsoft pour la gestion centralisée des utilisateurs, groupes et ressources réseau.",
    category: 'it',
  },
  {
    name: 'PowerShell',
    level: 65,
    years: 1,
    logo: <FaTerminal color="#012456" />,
    description: "Shell et langage de script puissant pour l'automatisation et l'administration système sous Windows.",
    category: 'it',
  },
  {
    name: 'VMware',
    level: 60,
    years: 1,
    logo: <FaCloud color="#607078" />,
    description: "Plateforme de virtualisation pour créer, gérer et déployer des machines virtuelles et infrastructures cloud.",
    category: 'it',
  },
];

const categories = {
  frontend: { title: 'Frontend', color: 'from-blue-500 to-cyan-500' },
  backend: { title: 'Backend', color: 'from-green-500 to-emerald-500' },
  database: { title: 'Base de données', color: 'from-purple-500 to-pink-500' },
  tools: { title: 'Outils & Frameworks', color: 'from-gray-500 to-slate-500' },
  mobile: { title: 'Mobile', color: 'from-orange-500 to-red-500' },
  cms: { title: 'CMS', color: 'from-indigo-500 to-blue-500' },
  it: { title: 'IT Support & Admin', color: 'from-teal-500 to-green-500' },
};

const CompetencesClient = () => {
  const { theme, resolvedTheme } = useTheme();
  
  useEffect(() => {
    console.log('CompetencesClient - Current theme:', theme, 'Resolved:', resolvedTheme);
  }, [theme, resolvedTheme]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <main className="competences-page min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] bg-clip-text text-transparent">
            Toutes mes compétences & formations
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez en détail l'ensemble de mes compétences techniques, outils, CMS, et mon parcours de formation continue.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <SkillCategorySection
              key={category}
              category={category}
              categorySkills={categorySkills}
              categories={categories}
              cardVariants={cardVariants}
            />
          ))}
        </motion.div>
        <div className="mt-20">
          <Learning />
        </div>
      </div>
    </main>
  );
};

export default CompetencesClient; 