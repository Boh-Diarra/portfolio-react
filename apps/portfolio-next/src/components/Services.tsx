'use client';

import { FaLaptopCode, FaWrench, FaMobile, FaUsers, FaCheck } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { setupScrollAnimations } from '../utils/scroll-animate';
import RateLimitedContactLink from './RateLimitedContactLink';
import { getDefaultEmailTemplates } from '../utils/emailUtils';

const services = [
  {
    icon: <FaLaptopCode size={44} color="#FD9800" />,
    title: 'Sites & Plateformes Web sur mesure',
    accroche: 'Votre meilleure vitrine commerciale, ouverte 24h/24.',
    description:
      "Votre site est souvent le premier contact entre vous et vos clients. Je le conçois pour qu'il soit rapide, rassurant et convaincant, un site qui ne se contente pas d'exister, mais qui attire des visiteurs et les transforme en clients.",
    features: [
      'Design personnalisé, moderne et à votre image',
      'Visible sur Google dès le lancement (SEO de base intégré)',
      'Parfaitement adapté au mobile et à la tablette',
      'Évolutif et facile à maintenir dans le temps',
    ],
  },
  {
    icon: <FaUsers size={44} color="#FD9800" />,
    title: 'Marketing Digital & Social Media',
    accroche: 'Transformez votre audience en clients, pas seulement en likes.',
    description:
      "Une présence en ligne, ce n'est pas publier pour publier : c'est convertir une audience en clients. Je pilote votre stratégie de contenu, votre communauté et vos campagnes pour transformer votre visibilité en résultats concrets et mesurables.",
    features: [
      'Stratégie de contenu adaptée à vos objectifs',
      'Création de visuels et identité graphique',
      'Publication et animation au quotidien (community management)',
      'Suivi des performances et du retour sur investissement (ROI)',
    ],
  },
  {
    icon: <FaMobile size={44} color="#FD9800" />,
    title: 'Applications Mobiles iOS & Android',
    accroche: 'Votre marque dans la poche de vos clients.',
    description:
      'Restez dans la poche de vos clients. Je crée des applications mobiles fluides et intuitives, sur Android et iOS, qui renforcent votre relation client et vous démarquent de la concurrence.',
    features: [
      'Applications hybrides ou natives selon vos besoins',
      'Une expérience utilisateur fluide et soignée',
      'Notifications push pour garder le contact',
      'Publication et accompagnement sur les stores',
    ],
  },
  {
    icon: <FaWrench size={44} color="#FD9800" />,
    title: 'Infogérance & Support IT',
    accroche: "Votre informatique tourne, vous vous concentrez sur l'essentiel.",
    description:
      "Votre activité ne peut pas s'arrêter. J'assure la gestion proactive de vos systèmes, un dépannage réactif et la formation de vos équipes, pour que la technique reste un atout, jamais un frein.",
    features: [
      'Administration système et supervision proactive',
      'Assistance technique réactive en cas de problème',
      'Sécurité, sauvegardes et mises à jour régulières',
      'Formation de vos utilisateurs pour les rendre autonomes',
    ],
  },
];

export default function Services() {
  useEffect(() => {
    setupScrollAnimations();
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const emailTemplates = getDefaultEmailTemplates();

  const getServiceSubject = (title: string) => {
    switch (title) {
      case 'Sites & Plateformes Web sur mesure':
        return emailTemplates.webDevelopment.subject;
      case 'Marketing Digital & Social Media':
        return emailTemplates.marketingDigital.subject;
      case 'Applications Mobiles iOS & Android':
        return emailTemplates.mobileDevelopment.subject;
      case 'Infogérance & Support IT':
        return emailTemplates.itSupport.subject;
      default:
        return 'Devis Service Digital';
    }
  };

  const getServiceBody = (title: string) => {
    switch (title) {
      case 'Sites & Plateformes Web sur mesure':
        return emailTemplates.webDevelopment.body;
      case 'Marketing Digital & Social Media':
        return emailTemplates.marketingDigital.body;
      case 'Applications Mobiles iOS & Android':
        return emailTemplates.mobileDevelopment.body;
      case 'Infogérance & Support IT':
        return emailTemplates.itSupport.body;
      default:
        return emailTemplates.contact.body;
    }
  };

  return (
    <section id="service" className="bg-white dark:bg-gray-900 py-16 transition-colors">
      <div className="container mx-auto px-6">
        <div className="section-header text-center">
          <p className="fade-in-start subtitle-gradient">Ce que je fais</p>
          <h2 className="fade-in-start text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-2">Des services pensés pour un seul résultat : votre croissance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-12 items-start">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const panelId = `service-panel-${index}`;
            return (
              <div
                key={index}
                className="fade-in-start card-base card-orange-shadow hover:ring-1 hover:ring-[#FD9800] rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 overflow-hidden transition-all duration-300"
              >
                <div className="flex items-start gap-4 p-5 sm:p-6">
                  <span className="service-icon shrink-0">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{service.title}</h3>
                    <p className="text-[#FD9800] font-semibold italic mt-1">{service.accroche}</p>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="mt-3 inline-flex items-center gap-1 text-[#FD9800] font-semibold hover:underline focus-visible:ring-2 focus-visible:ring-orange-400 rounded transition-colors"
                    >
                      {isOpen ? 'Réduire' : 'En savoir plus'}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6">
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                        <h4 className="mt-4 text-[#FD9800] text-base sm:text-lg font-semibold">Ce que j'inclus :</h4>
                        <ul className="mt-2 flex flex-col gap-2 bg-[#FD9800]/10 rounded-lg px-4 py-3">
                          {service.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-left text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                            >
                              <FaCheck color="#FD9800" className="mt-1 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5">
                          <RateLimitedContactLink
                            email="boh.diarra92@gmail.com"
                            subject={getServiceSubject(service.title)}
                            body={getServiceBody(service.title)}
                            variant="primary"
                            className="inline-flex items-center px-6 py-3 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                          >
                            Demander un devis gratuit
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </RateLimitedContactLink>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA global après tous les services */}
        <div className="text-center mt-16 fade-in-start">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Et si on parlait de votre projet ?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            En 30 minutes, je vous propose une approche concrète et un devis clair — sans engagement.
          </p>
          <RateLimitedContactLink
            email="boh.diarra92@gmail.com"
            subject={emailTemplates.generalProject.subject}
            body={emailTemplates.generalProject.body}
            variant="primary"
            className="inline-flex items-center px-8 py-4 font-bold text-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            Réserver mon échange gratuit
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </RateLimitedContactLink>
        </div>
      </div>
    </section>
  );
}
