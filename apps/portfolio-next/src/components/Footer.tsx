'use client';

import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';
import { useEffect } from 'react';
import { setupScrollAnimations } from '../utils/scroll-animate';
import { SocialLinks } from './SocialLinks';
import { socialLinks } from '../config/socialLinks';
import RateLimitedContactLink from './RateLimitedContactLink';
import { getDefaultEmailTemplates } from '../utils/emailUtils';

const contactInfo = [
  {
    icon: <FaEnvelope size={24} />,
    title: 'Email',
    value: 'boh.diarra92@gmail.com',
    link: 'mailto:boh.diarra92@gmail.com'
  },
  {
    icon: <FaPhone size={24} />,
    title: 'Téléphone',
    value: '+223 92 61 93 37',
    link: 'tel:+22392619337'
  },
  {
    icon: <FaLocationDot size={24} />,
    title: 'Localisation',
    value: 'Bamako, Mali',
    link: '#'
  }
];

const services = [
  'Développement Web',
  'Applications Mobiles',
  'Support IT',
  'Community Management'
];

const navigation = [
  { name: 'Accueil', href: '/#home' },
  { name: 'À propos', href: '/#about' },
  { name: 'Services', href: '/#service' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Expériences', href: '/#experience' },
  { name: 'Contact', href: '/#contact' }
];

export default function Footer() {
  useEffect(() => {
    setupScrollAnimations();
  }, []);

  const emailTemplates = getDefaultEmailTemplates();

  return (
    <footer id="contact" className="w-full bg-[#23272f] text-white pt-10 pb-4 border-t-2 border-orange-500 rounded-b-2xl dark:bg-[#18181b] dark:text-white dark:border-orange-500 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Présentation et Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] bg-clip-text text-transparent">Parlons de Votre Projet</h3>
            <p className="mb-6 leading-relaxed text-black dark:text-white">
            Décrivez votre vision et je vous proposerai une solution personnalisée
            </p>
            
            {/* Informations de contact */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                info.title === 'Email' ? (
                  <RateLimitedContactLink
                    key={index}
                    email="boh.diarra92@gmail.com"
                    subject={emailTemplates.contact.subject}
                    body={emailTemplates.contact.body}
                    variant="icon"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 group w-full"
                  >
                    <div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-sm font-medium">{info.title}</p>
                      <p>{info.value}</p>
                    </div>
                  </RateLimitedContactLink>
                ) : (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 group hover:text-orange-gradient"
                  >
                    <div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{info.title}</p>
                      <p>{info.value}</p>
                    </div>
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] bg-clip-text text-transparent">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={`/#service`}
                    className="footer-link transition-colors duration-300 relative group"
                  >
                    <span className="relative">
                      {service}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] bg-clip-text text-transparent">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="footer-link transition-colors duration-300 relative group"
                  >
                    <span className="relative">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
        </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#FD9800] to-[#ff6b35] bg-clip-text text-transparent">Suivez-moi</h3>
            <p className="mb-4">
              Restez connecté pour découvrir mes derniers projets et actualités.
            </p>
            <SocialLinks links={socialLinks} variant="footer" />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-500 dark:border-orange-500 mt-8 pt-6 text-center">
          <p>
            © 2025 Tous droits réservés. |
            <span className="text-orange-800 dark:text-[#ff6b35] ml-1">By Boh DIARRA</span>
          </p>
        </div>
      </div>
    </footer>
  );
} 