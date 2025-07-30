'use client';

import { FaLaptopCode, FaWrench, FaMobile, FaUsers, FaCheck } from 'react-icons/fa6';
import { useEffect } from 'react';
import { setupScrollAnimations } from '../utils/scroll-animate';
import RateLimitedContactLink from './RateLimitedContactLink';
import { getDefaultEmailTemplates } from '../utils/emailUtils';

const services = [
  {
    icon: <FaLaptopCode size={48} color="#FD9800" />,
    title: 'Développement Web sur mesure',
    description: "Je conçois et développe des sites web performants, sécurisés et évolutifs, adaptés à vos besoins spécifiques. J'utilise les dernières technologies pour garantir une expérience utilisateur optimale et un référencement naturel efficace.",
    features: [
      'Design personnalisé et moderne',
      'Optimisation SEO de base',
      'Intégration responsive (mobile/tablette)',
      'Maintenance et évolutivité',
    ],
  },
  {
    icon: <FaMobile size={48} color="#FD9800" />,
    title: "Développement d'applications mobiles",
    description: "Je crée des applications mobiles intuitives et performantes pour Android et iOS, avec une interface soignée et des fonctionnalités adaptées à vos objectifs business.",
    features: [
      'Applications hybrides ou natives',
      'Expérience utilisateur fluide',
      'Notifications push',
      'Déploiement sur stores',
    ],
  },
  {
    icon: <FaWrench size={48} color="#FD9800" />,
    title: 'Support IT & Maintenance',
    description: "J'assure la gestion proactive de vos systèmes informatiques, le dépannage rapide et la formation des utilisateurs pour garantir la continuité de votre activité.",
    features: [
      'Administration système',
      'Assistance technique réactive',
      'Sécurité et sauvegardes',
      'Mises à jour régulières',
      'Formation utilisateurs',
    ],
  },
  {
    icon: <FaUsers size={48} color="#FD9800" />,
    title: 'Community Management',
    description: "Je développe votre présence en ligne grâce à la création de contenus engageants et à l'animation de vos réseaux sociaux, pour fédérer et dynamiser votre communauté.",
    features: [
      'Stratégie éditoriale',
      'Création de visuels et vidéos',
      'Animation et modération',
      'Analyse des performances',
    ],
  },
];

export default function Services() {
  useEffect(() => {
    setupScrollAnimations();
  }, []);

  const emailTemplates = getDefaultEmailTemplates();

  const getServiceSubject = (title: string) => {
    switch (title) {
      case 'Développement Web sur mesure':
        return emailTemplates.webDevelopment.subject;
      case "Développement d'applications mobiles":
        return emailTemplates.mobileDevelopment.subject;
      case 'Support IT & Maintenance':
        return emailTemplates.itSupport.subject;
      case 'Community Management':
        return emailTemplates.communityManagement.subject;
      default:
        return 'Devis Service Digital';
    }
  };

  const getServiceBody = (title: string) => {
    switch (title) {
      case 'Développement Web sur mesure':
        return emailTemplates.webDevelopment.body;
      case "Développement d'applications mobiles":
        return emailTemplates.mobileDevelopment.body;
      case 'Support IT & Maintenance':
        return emailTemplates.itSupport.body;
      case 'Community Management':
        return emailTemplates.communityManagement.body;
      default:
        return emailTemplates.contact.body;
    }
  };

  const getServiceCTA = (title: string) => {
    switch (title) {
      case 'Développement Web sur mesure':
        return 'Demander un devis gratuit';
      case "Développement d'applications mobiles":
        return 'Demander un devis gratuit';
      case 'Support IT & Maintenance':
        return 'Demander un devis gratuit';
      case 'Community Management':
        return 'Demander un devis gratuit';
      default:
        return 'Demander un devis gratuit';
    }
  };

  return (
    <section id="service" className="bg-white dark:bg-gray-900 py-16 transition-colors">
      <div className="container mx-auto px-6">
        <div className="section-header text-center">
          <p className="fade-in-start subtitle-gradient">Ce que je fais</p>
          <h2 className="fade-in-start text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-2">Mes Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`fade-in-start card-base card-orange-shadow hover:ring-1 hover:ring-[#FD9800] transition-all duration-300 service-item p-4 sm:p-6 rounded-lg shadow-lg text-center min-h-[380px] group bg-gray-50 dark:bg-gray-800 flex flex-col`}
            >
              <div className="service-icon mb-4 inline-block text-4xl">
                {service.icon}
              </div>
              <div className="service-text flex-1">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{service.title}</h3>
                <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                <h4 className="mt-4 text-[#FD9800] text-base sm:text-lg font-semibold">Ce que j'inclus :</h4>
                <ul className="mt-2 flex flex-col gap-1 items-start bg-[#FD9800]/10 rounded-lg px-4 py-2 w-full max-w-sm mx-auto">
                  {service.features && service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                      <FaCheck color="#FD9800" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {/* CTA individuel par service */}
              <div className="mt-6">
                <RateLimitedContactLink
                  email="boh.diarra92@gmail.com"
                  subject={getServiceSubject(service.title)}
                  body={getServiceBody(service.title)}
                  variant="primary"
                  className="inline-flex items-center px-6 py-3 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:shadow-xl"
                >
                  {getServiceCTA(service.title)}
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </RateLimitedContactLink>
              </div>
            </div>
          ))}
        </div>

        {/* CTA global après tous les services */}
        <div className="text-center mt-16 fade-in-start">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Prêt à transformer votre vision en réalité ?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Discutons de votre projet et découvrez comment je peux vous aider à atteindre vos objectifs digitaux.
          </p>
          <RateLimitedContactLink
            email="boh.diarra92@gmail.com"
            subject={emailTemplates.generalProject.subject}
            body={emailTemplates.generalProject.body}
            variant="primary"
            className="inline-flex items-center px-8 py-4 font-bold text-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            Démarrer votre projet maintenant
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </RateLimitedContactLink>
        </div>
      </div>
    </section>
  );
} 