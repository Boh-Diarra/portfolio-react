'use client';

import Image from 'next/image';
import { FaTrophy, FaLightbulb, FaHandshake, FaComments } from 'react-icons/fa6';
import { useEffect } from 'react';
import { setupScrollAnimations } from '../utils/scroll-animate';

const values = [
  {
    icon: <FaTrophy color="#FD9800" size={32} />,
    title: 'Excellence',
    description: "Chaque ligne de code, chaque design, chaque interaction est pensée pour l'excellence.",
  },
  {
    icon: <FaLightbulb color="#FD9800" size={32} />,
    title: 'Innovation',
    description: 'Je reste constamment à jour avec les dernières technologies et tendances.',
  },
  {
    icon: <FaHandshake color="#FD9800" size={32} />,
    title: 'Collaboration',
    description: 'Je travaille en étroite collaboration avec mes clients pour des résultats optimaux.',
  },
  {
    icon: <FaComments color="#FD9800" size={32} />,
    title: 'Transparence',
    description: 'Communication claire et honnête tout au long du projet.',
  },
];

const stats = [
    { value: '+150%', label: 'de trafic généré' },
    { value: '98%', label: 'de satisfaction client' },
    { value: '40%', label: 'd\'amélioration de productivité' },
]

export default function About() {
  useEffect(() => {
    setupScrollAnimations();
  }, []);
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Main intro section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 w-full">
            <div className="relative flex items-end justify-center group">
              {/* Bordure extérieure inférieure gradient orange (toujours visible) */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[220px] h-5 sm:w-[260px] sm:h-6 md:w-[320px] md:h-7 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] rounded-b-3xl shadow-lg z-0"></div>
              {/* Bordure supérieure gradient orange (apparaît au survol) */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 group-hover:w-[220px] sm:group-hover:w-[260px] md:group-hover:w-[320px] h-5 sm:h-6 md:h-7 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] rounded-t-3xl rounded-b-3xl shadow-lg z-0 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-3xl ring-4 ring-white dark:ring-gray-900 w-[220px] h-[320px] sm:w-[260px] sm:h-[380px] md:w-[320px] md:h-[460px] z-10 flex items-end justify-center">
              <Image
                  src="/img/about_img.webp"
                alt="Image Diarra Boh"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="text-left">
              <p className="subtitle-gradient">Qui suis-je ?</p>
              <h2 className="fade-in-start text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-2 leading-tight">Plus de 5 ans d'expérience</h2>
              <p className="fade-in-start mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Je développe vos applications web et mobiles avec des technologies modernes pour maximiser votre visibilité en ligne. Mon savoir-faire en développement fullstack et design UX me permet de créer des solutions sur mesure qui génèrent des résultats concrets : augmentation du trafic, amélioration de l'engagement utilisateur et croissance de votre business.
              </p>
            </div>
          </div>
        </div>

        {/* Approach section */}
        <div className="text-center mt-20 p-8 bg-white dark:bg-gray-800/50 rounded-lg shadow-xl card-base card-orange-shadow fade-in-start hover:ring-1 hover:ring-[#FD9800] transition-all duration-300">
            <h3 className="fade-in-start text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">Mon Approche</h3>
            <p className="fade-in-start mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Je crois fermement que chaque projet est une opportunité de créer quelque chose d'unique. Mon approche est centrée sur la compréhension profonde de vos besoins, la créativité technique et la livraison de résultats qui dépassent vos attentes. Je m'engage à être votre partenaire de confiance dans votre transformation digitale.
            </p>
                  </div>


        {/* Values section */}
        <div className="mt-20">
          <h3 className="fade-in-start text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-100">Mes Valeurs Fondamentales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value) => (
              <div
                key={value.title}
                className="about-card card-base card-orange-shadow fade-in-start hover:ring-1 hover:ring-[#FD9800] transition-all duration-300 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">{value.title}</h4>
                <p className="mt-2 text-base sm:text-sm text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
                  </div>
        </div>

        {/* Why me section */}
        <div className="mt-20 text-center bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 sm:p-12 rounded-lg shadow-2xl">
            <h3 className="fade-in-start text-xl sm:text-2xl md:text-3xl font-bold">Pourquoi me choisir ?</h3>
            <p className="fade-in-start mt-4 max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-orange-100 leading-relaxed font-semibold">
                Pour bâtir un écosystème digital complet, sans friction. Je ne me contente pas de créer votre outil ; je lui donne vie et je garantis sa performance.
            </p>
            
            {/* Services cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
                <div className="fade-in-start bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="font-bold text-lg mb-2 text-white">Développement</h4>
                    <p className="text-orange-100 text-sm leading-relaxed">
                        Je conçois et bâtis votre plateforme (web ou mobile), en créant une solution technique robuste et parfaitement adaptée à vos ambitions.
                    </p>
                </div>
                
                <div className="fade-in-start bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="font-bold text-lg mb-2 text-white">Engagement</h4>
                    <p className="text-orange-100 text-sm leading-relaxed">
                        Je connecte votre projet à votre public cible, en créant l'engagement nécessaire pour générer des résultats visibles et concrets.
                    </p>
                </div>
                
                <div className="fade-in-start bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="font-bold text-lg mb-2 text-white">Performance</h4>
                    <p className="text-orange-100 text-sm leading-relaxed">
                        Je veille à ce que l'ensemble de votre infrastructure reste performante, sécurisée et fiable au quotidien, pour que votre activité ne s'arrête jamais.
                    </p>
                </div>
            </div>

            {/* Final advantage */}
            <div className="fade-in-start mt-8 max-w-3xl mx-auto">
                <p className="text-orange-50 font-semibold text-base sm:text-lg md:text-xl leading-relaxed">
                    Votre avantage : <span className="text-white">Un seul partenaire stratégique qui pilote votre projet de la première ligne de code jusqu'au client final, assurant une cohérence totale et une performance mesurable.</span>
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8">
                {stats.map(stat => (
                    <div key={stat.label} className="fade-in-start">
                        <p className="text-5xl font-extrabold">{stat.value}</p>
                        <p className="text-orange-200">{stat.label}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
} 