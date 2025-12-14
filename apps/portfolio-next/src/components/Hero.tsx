'use client';

import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { setupParallaxEffect } from '../utils/parallax';
import { setupScrollAnimations } from '../utils/scroll-animate';

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setupParallaxEffect('hero-content');
    setupScrollAnimations();
  }, []);

  // Éviter le mismatch d'hydratation en attendant que le thème soit disponible
  if (!mounted) {
    return (
      <section
        id="home"
        className="hero-section min-h-[70vh] sm:min-h-screen flex items-center bg-gray-50 dark:bg-gray-900"
      >
        {/* Contenu de fallback pendant l'hydratation */}
        <div className="container mx-auto px-3 sm:px-6 py-4 sm:py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/3 text-center md:text-left">
              <div id="hero-content" className="hero-content">
                <h1 className="fade-in-start text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-2 sm:mb-4 leading-tight">
                  Transformons vos concepts en solutions numériques scalables pour propulser votre croissance.
                </h1>
                <p className="fade-in-start text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 leading-relaxed">Bonjour ! Je suis DIARRA Boh</p>
                <div className="fade-in-start text-base sm:text-lg md:text-xl lg:text-2xl font-bold h-6 sm:h-12 md:h-16 lg:h-auto">
                  <span className="inline-block bg-gradient-to-r from-[#FD9800] to-[#ff6b35] bg-clip-text text-transparent">
                    Full-Stack Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className={`hero-section min-h-[60vh] sm:min-h-screen flex items-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
              <div className="container mx-auto px-3 sm:px-6 py-4 sm:py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 lg:w-2/3 text-center md:text-left">
            <div id="hero-content" className="hero-content">
              <h1 className="fade-in-start text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-2 sm:mb-4 leading-tight">
              Transformons vos concepts en solutions numériques scalables pour propulser votre croissance.
              </h1>
              <p className="fade-in-start text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 leading-relaxed">Bonjour ! Je suis DIARRA Boh</p>
              <div className="fade-in-start text-base sm:text-lg md:text-xl lg:text-2xl font-bold h-6 sm:h-12 md:h-16 lg:h-auto">
                  <TypeAnimation
                    sequence={[
                      'Full-Stack Developer',
                    1500,
                      'Social Media Manager',
                    1500,
                    'Spécialist IT Support',
                    1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  className="inline-block bg-gradient-to-r from-[#FD9800] to-[#ff6b35] bg-clip-text text-transparent"
                  />
              </div>
              <div className="hero-btn mt-3 sm:mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 w-full">
                <a
                  href="/img/CV_Developer_web_fullstack_Boh_DIARRA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base bg-gradient-to-r from-[#FD9800] to-[#ff6b35] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg w-full sm:w-auto min-h-[40px] sm:min-h-[48px] focus-visible:ring-2 ring-orange-500 font-bold text-base sm:text-lg transition-all duration-300 hover:from-[#ff6b35] hover:to-[#FD9800]"
                >
                  Télécharger CV
                </a>
                <Link
                  href="#en-savoir-plus"
                  className="btn-base flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg w-full sm:w-auto min-h-[40px] sm:min-h-[48px] focus-visible:ring-2 ring-orange-500 transition-all duration-300 font-bold text-base sm:text-lg hover:bg-gradient-to-r hover:from-[#FD9800] hover:to-[#ff6b35] hover:text-white"
                >
                  En savoir plus... <FaArrowDown size={14} />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:w-1/2 lg:w-1/3 mt-8 md:mt-0 justify-center">
            <div className="hero-image relative flex items-end justify-center">
              {/* Halo orange 3D en arrière-plan */}
              <div className="absolute -inset-4 z-0 rounded-3xl bg-gradient-to-br from-[#FD9800]/30 to-[#ff6b35]/10 blur-2xl opacity-80 pointer-events-none animate-pulse"></div>
              <div className="relative flex items-end justify-center">
                {/* Bordure extérieure inférieure gradient orange */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[220px] h-5 sm:w-[260px] sm:h-6 md:w-[300px] md:h-7 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] rounded-b-3xl shadow-lg z-0"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-3xl ring-4 ring-white dark:ring-gray-900 w-[220px] h-[320px] sm:w-[260px] sm:h-[380px] md:w-[300px] md:h-[420px] z-10 flex items-end justify-center">
              <Image
                    src="/img/Profil2.webp"
                alt="Diarra Boh"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                    className="w-full h-full"
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 300px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 