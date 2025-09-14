'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import TiltOrig from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tilt = TiltOrig as unknown as React.FC<React.ComponentProps<any>>;

const portfolioItems = [
  { category: 'Sites Web', title: 'Nbb-Mali', image: '/img/maquette_nbb.webp', lightboxImage: '/img/maquette_nbb.webp', link: 'https://www.nbb-mali.com/' },
  { category: 'Sites Web', title: 'Ifak-Senou', image: '/img/maquette_ifak.webp', lightboxImage: '/img/maquette_ifak.webp', link: 'https://www.ifak-senou.com/' },
  { category: 'Sites Web', title: 'TechSugu', image: '/img/portfolio_0.webp', lightboxImage: '/img/portfolio_0.webp', link: 'https://techsugu.com/' },
  { category: 'Applications Mobiles', title: 'Events', image: '/img/mobile_3.webp', lightboxImage: '/img/mobile_3.webp' },
  // { category: 'Gestion de Communauté', title: 'Conception de Logo', image: '/img/portfolio_logo_0.png', lightboxImage: '/img/portfolio_logo_0.png' },
  { category: 'Sites Web', title: 'Akxa Digital', image: '/img/portfolio_4.webp', lightboxImage: '/img/portfolio_4.webp', link: 'https://akxadigital.com' },
  { category: 'Sites Web', title: 'AfroCuisine', image: '/img/portfolio_3.webp', lightboxImage: '/img/portfolio_3.webp', link: 'https://www.afrocuisinemagazine.com/' },
  { category: 'Applications Mobiles', title: 'Clone Instagram', image: '/img/mobile_5.webp', lightboxImage: '/img/mobile_5.webp' },
  { category: 'Applications Mobiles', title: 'Fruit Store', image: '/img/mobile_4.webp', lightboxImage: '/img/mobile_4.webp' },
  { category: 'Gestion de Communauté', title: 'Page Techsugu', image: '/img/portfolio_rs_1.webp', lightboxImage: '/img/portfolio_rs_1.webp' },
  { category: 'Gestion de Communauté', title: 'Page Akxa Digital', image: '/img/portfolio_rs_2.webp', lightboxImage: '/img/portfolio_rs_2.webp' },
];

const filters = ['Tout', 'Sites Web', 'Applications Mobiles', 'Gestion de Communauté'];

export default function Portfolio() {
  const [filter, setFilter] = useState('Tout');
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const filteredItems = React.useMemo(() => {
    if (filter === 'Tout') {
      return portfolioItems;
    }
    return portfolioItems.filter(item => item.category === filter);
  }, [filter]);

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setOpen(true);
  };

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  return (
    <section id="portfolio" className="bg-white dark:bg-gray-900 py-16 transition-colors">
      <div className="container mx-auto px-6 sm:px-4 xs:px-2 max-w-screen-xl">
        <div className="section-header text-center">
          <p className="text-base sm:text-lg md:text-xl subtitle-gradient font-semibold">Mon Portfolio</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-2">Mes Réalisations</h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mt-8 gap-2 sm:gap-4">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`w-full sm:w-auto mx-0 sm:mx-2 py-3 px-6 rounded-full font-semibold btn-base hover:scale-105 min-h-[44px] focus-visible:ring-2 ring-orange-500 transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white shadow-xl'
                  : 'bg-white/20 backdrop-blur-xl border border-white/60 shadow-xl text-black hover:bg-gradient-to-r hover:from-[#FD9800] hover:to-[#ff6b35] hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-12" key={filter}>
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${item.category}`}
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
                    <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-110 w-full h-full" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center">
                      <div className="backdrop-blur-sm bg-black/60 rounded-xl px-4 py-3 sm:px-6 sm:py-4 opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-auto flex flex-col items-center shadow-xl w-[90%] max-w-[95vw] sm:w-auto">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white text-center portfolio-title-force-white">
                          {item.title}
                        </h3>
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
                        <button
                          onClick={() => openLightbox(item.lightboxImage)}
                          className="mt-4 w-full sm:w-auto btn-base bg-gradient-to-r from-[#FD9800] to-[#ff6b35] py-2 px-6 rounded-full shadow-xl text-white font-bold text-lg relative overflow-hidden hover:from-[#ff6b35] hover:to-[#FD9800] focus-visible:ring-2 focus-visible:ring-orange-400 transition-all duration-300"
                        >
                          <span className="relative z-10">Voir l'image</span>
                          <span className="absolute inset-0 rounded-full opacity-0 group-active:opacity-30 bg-white animate-pulse"></span>
                      </button>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: currentImage }]}
      />
    </section>
  );
} 