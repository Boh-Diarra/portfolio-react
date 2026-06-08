'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import TiltOrig from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { caseStudies, gridProjects, demos, type CaseStudy } from '../data/projects';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tilt = TiltOrig as unknown as React.FC<React.ComponentProps<any>>;

const filters = ['Tout', 'Sites Web', 'Applications Mobiles'];

// ---------------------------------------------------------------------------
// Modale d'étude de cas
// ---------------------------------------------------------------------------
function CaseStudyModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(panelRef, true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <motion.div
        ref={panelRef}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-800 shadow-2xl"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fermer l'étude de cas"
          autoFocus
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white text-xl leading-none hover:bg-black/70 focus-visible:ring-2 focus-visible:ring-orange-400 transition-colors"
        >
          ×
        </button>

        <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-t-2xl">
          <Image
            src={study.image}
            alt={study.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </div>

        <div className="p-6 sm:p-8">
          <h3 id="case-study-title" className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {study.title}
          </h3>
          <p className="subtitle-gradient mt-1 text-sm font-semibold">{study.tagline}</p>

          <div className="mt-6 space-y-5 text-left">
            <div>
              <h4 className="text-[#FD9800] text-sm font-bold uppercase tracking-wide">Le contexte</h4>
              <p className="mt-1 text-gray-600 dark:text-gray-300 leading-relaxed">{study.context}</p>
            </div>
            <div>
              <h4 className="text-[#FD9800] text-sm font-bold uppercase tracking-wide">Le défi</h4>
              <p className="mt-1 text-gray-600 dark:text-gray-300 leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h4 className="text-[#FD9800] text-sm font-bold uppercase tracking-wide">La solution</h4>
              <ul className="mt-2 space-y-2">
                {study.solution.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#E8732A] to-[#C2410C]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-[#FD9800]/10 p-4">
              <h4 className="text-[#FD9800] text-sm font-bold uppercase tracking-wide">Le résultat</h4>
              <p className="mt-1 font-semibold text-gray-800 dark:text-gray-100 leading-relaxed">{study.result}</p>
            </div>
          </div>

          {study.siteUrl && (
            <Link
              href={study.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#E8732A] to-[#C2410C] text-white rounded-full font-semibold shadow hover:scale-105 focus-visible:ring-2 focus-visible:ring-orange-400 transition-transform"
            >
              Voir le site : {study.siteLabel}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7h-6a4 4 0 00-4 4v6" />
              </svg>
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState('Tout');
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  const filteredProjects =
    filter === 'Tout' ? gridProjects : gridProjects.filter((p) => p.category === filter);
  const showGrid = filteredProjects.length > 0;
  const showDemos = filter === 'Tout' || filter === 'Applications Mobiles';

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setOpen(true);
  };

  return (
    <section id="portfolio" className="bg-white dark:bg-gray-900 py-16 transition-colors">
      <div className="container mx-auto px-6 sm:px-4 xs:px-2 max-w-screen-xl">
        {/* En-tête de section */}
        <div className="section-header text-center">
          <p className="text-base sm:text-lg md:text-xl subtitle-gradient font-semibold">Mon Travail</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-2">Mes Réalisations</h2>
        </div>

        {/* NIVEAU 1 — Études de cas */}
        <p className="text-center mt-12 subtitle-gradient font-semibold">Études de cas</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-base card-orange-shadow hover:ring-1 hover:ring-[#FD9800] transition-all duration-300 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 flex flex-col"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{study.title}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{study.tagline}</p>
                <button
                  onClick={() => setActiveCase(study)}
                  className="mt-4 self-start inline-flex items-center btn-base bg-gradient-to-r from-[#E8732A] to-[#C2410C] py-2 px-5 rounded-full shadow text-white font-semibold hover:from-[#C2410C] hover:to-[#E8732A] focus-visible:ring-2 focus-visible:ring-orange-400 transition-all duration-300"
                >
                  Lire l&apos;étude de cas
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filtres */}
        <div className="flex flex-col sm:flex-row justify-center mt-16 gap-2 sm:gap-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`w-full sm:w-auto mx-0 sm:mx-2 py-3 px-6 rounded-full font-semibold btn-base hover:scale-105 min-h-[44px] focus-visible:ring-2 ring-orange-500 transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-[#E8732A] to-[#C2410C] text-white shadow-xl'
                  : 'bg-[var(--surface-muted)] text-[var(--text)] border border-[var(--border)] shadow-md hover:bg-gradient-to-r hover:from-[#E8732A] hover:to-[#C2410C] hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* NIVEAU 2 — Grille filtrable (sites web & apps mobiles clients) */}
        {showGrid && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-12" key={filter}>
            {filteredProjects.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="portfolio-item"
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  glareColor="#FD9800"
                  glarePosition="all"
                  scale={1.05}
                  transitionSpeed={700}
                  tiltMaxAngleX={12}
                  tiltMaxAngleY={12}
                  perspective={1200}
                  gyroscope={true}
                  className="group card-base card-orange-shadow glassmorphism hover:ring-1 hover:ring-[#FD9800] transition-all duration-300 rounded-lg shadow-lg p-4 sm:p-8 min-h-[320px] bg-white dark:bg-gray-800"
                >
                  <div className="relative h-48 sm:h-64 overflow-hidden rounded-lg shadow-lg w-full">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#E8732A] to-[#C2410C]">
                        <span className="text-white text-xl font-bold text-center px-4">{item.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center">
                      <div className="backdrop-blur-sm bg-black/60 rounded-xl px-4 py-3 sm:px-6 sm:py-4 opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-auto flex flex-col items-center shadow-xl w-[90%] max-w-[95vw] sm:w-auto">
                        <span className="mb-2 px-3 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#E8732A] to-[#C2410C]">
                          {item.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white text-center portfolio-title-force-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white/90 text-center mb-1">{item.description}</p>
                        {item.link ? (
                          <Link
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 font-semibold text-lg shadow-lg bg-gradient-to-r from-[#FD9800] to-[#ff6b35] bg-clip-text text-transparent hover:underline focus-visible:ring-2 focus-visible:ring-orange-400 rounded transition-all duration-300 text-center"
                          >
                            Voir le site
                          </Link>
                        ) : null}
                        {item.image && (
                          <button
                            onClick={() => openLightbox(item.image as string)}
                            className="mt-4 w-full sm:w-auto btn-base bg-gradient-to-r from-[#E8732A] to-[#C2410C] py-2 px-6 rounded-full shadow-xl text-white font-bold text-lg relative overflow-hidden hover:from-[#C2410C] hover:to-[#E8732A] focus-visible:ring-2 focus-visible:ring-orange-400 transition-all duration-300"
                          >
                            <span className="relative z-10">Voir l&apos;image</span>
                            <span className="absolute inset-0 rounded-full opacity-0 group-active:opacity-30 bg-white animate-pulse"></span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        )}

        {/* NIVEAU 3 — Projets perso / démos */}
        {showDemos && (
          <div className="mt-16">
            <p className="text-center subtitle-gradient font-semibold">Projets personnels & démos</p>
            <p className="text-center mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Projets personnels réalisés pour explorer et pratiquer de nouvelles technologies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8">
              {demos.map((demo, index) => (
                <motion.div
                  key={demo.title}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="card-base card-orange-shadow hover:ring-1 hover:ring-[#FD9800] transition-all duration-300 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
                >
                  <button
                    onClick={() => openLightbox(demo.image)}
                    className="block relative h-44 w-full overflow-hidden focus-visible:ring-2 focus-visible:ring-orange-400"
                    aria-label={`Voir l'image du projet ${demo.title}`}
                  >
                    <Image
                      src={demo.image}
                      alt={demo.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </button>
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">{demo.title}</h4>
                    <span className="mt-2 inline-block px-3 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#E8732A] to-[#C2410C]">
                      {demo.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Lightbox open={open} close={() => setOpen(false)} slides={[{ src: currentImage }]} />

      <AnimatePresence>
        {activeCase && <CaseStudyModal study={activeCase} onClose={() => setActiveCase(null)} />}
      </AnimatePresence>
    </section>
  );
}
