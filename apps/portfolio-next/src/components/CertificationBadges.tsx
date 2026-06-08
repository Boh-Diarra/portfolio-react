'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWordpress, FaHtml5, FaCss3Alt, FaGoogle, FaGraduationCap, FaAngleDown } from 'react-icons/fa6';

interface Badge {
  icon: ReactNode;
  title: string;
  org: string;
  date: string;
  desc: string;
  credlyUrl?: string;
}

const badges: Badge[] = [
  {
    icon: <FaWordpress color="#21759B" size={30} />,
    title: 'Formation WordPress',
    org: 'OpenClassrooms',
    date: '2023',
    desc: 'Création de sites professionnels, sécurisés et optimisés sous WordPress.',
  },
  {
    icon: (
      <span className="flex items-center gap-1">
        <FaHtml5 color="#E34F26" size={30} />
        <FaCss3Alt color="#1572B6" size={30} />
      </span>
    ),
    title: 'HTML5 & CSS3',
    org: 'OpenClassrooms',
    date: '2022',
    desc: 'Les fondamentaux du web : structuration, stylisation et responsive design.',
  },
  {
    icon: <FaGraduationCap color="#FD9800" size={30} />,
    title: 'Génie Informatique',
    org: 'Expert-Lab Technologie',
    date: '2021–2023',
    desc: 'Socle technique complet : développement, réseaux, sécurité et maintenance.',
  },
  {
    icon: <FaGoogle color="#4285F4" size={30} />,
    title: 'Google AI Essentials',
    org: 'Google',
    date: '2024',
    desc: "Intégrer concrètement l'IA pour automatiser et optimiser les processus métier.",
    credlyUrl: 'https://www.credly.com/badges/b567815f-2126-4c62-b659-7709911f8726/public_url',
  },
];

export default function CertificationBadges() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 pb-12 -mt-4">
      <div className="text-center">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="all-certifications"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#E8732A] to-[#C2410C] shadow-lg hover:scale-105 focus-visible:ring-2 focus-visible:ring-orange-400 transition-all duration-300"
        >
          {open ? 'Masquer les certifications' : 'Voir toutes mes certifications'}
          <FaAngleDown className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="all-certifications"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
              {badges.map((badge) => (
                <div
                  key={badge.title}
                  className="card-base card-orange-shadow hover:ring-1 hover:ring-[#FD9800] transition-all duration-300 rounded-lg shadow-lg bg-white dark:bg-gray-800 p-5 flex flex-col items-center text-center"
                >
                  <div className="mb-3 h-8 flex items-center">{badge.icon}</div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-100">{badge.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{badge.org} · {badge.date}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-1">{badge.desc}</p>
                  {badge.credlyUrl && (
                    <a
                      href={badge.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-[#FD9800] font-semibold text-sm hover:underline focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
                    >
                      Voir sur Credly →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
