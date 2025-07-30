'use client';

import Image from 'next/image';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';

const teamMembers = [
  {
    image: '/img/team-1.webp',
    name: 'Koné Ibrahima',
    role: 'Senior Fullstack Developer & DevOps Engineer',
    description: 'Développe vos applications web et mobiles avec des technologies modernes et performantes.',
    social: {
      whatsapp: 'https://wa.me/22375358229',
      facebook: 'https://www.facebook.com/ibrahima.kone.21291',
      linkedin: 'https://www.linkedin.com/in/ibrahima-kon%C3%A9-632006a1/',
    },
  },
  {
    image: '/img/team-2.webp',
    name: 'Karambe Job',
    role: 'Graphic Designer & Brand Identity Specialist',
    description: 'Crée votre identité visuelle complète : logo, charte graphique et supports de communication.',
    social: {
      whatsapp: 'https://wa.me/22393598188',
      facebook: 'https://www.facebook.com/job.karambe',
      linkedin: 'https://www.linkedin.com/in/job-karamb%C3%A9-830b93231/',
    },
  },
  {
    image: '/img/team-3.webp',
    name: 'SANOGO Modibo',
    role: 'Community Manager & Content Creator',
    description: 'Anime votre communauté en ligne et crée du contenu engageant pour vos réseaux sociaux.',
    social: {
      whatsapp: 'https://wa.me/22394459442',
      facebook: 'https://www.facebook.com/profile.php?id=100008072359207',
      linkedin: 'https://www.linkedin.com/in/sanogo-modibo-136121248/',
    },
  },
  {
    image: '/img/team-4.webp',
    name: 'COULIBALY Oumar',
    role: 'Consultant en Communication, Digital & Personal Branding',
    description: 'Développe votre image de marque personnelle et optimise votre présence digitale.',
    social: {
      whatsapp: 'https://wa.me/22376289390',
      facebook: 'https://www.facebook.com/oumarcoulibaly22',
      linkedin: 'https://www.linkedin.com/in/oumar-coulibaly76289390/',
    },
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white dark:bg-gray-900 py-16 transition-colors">
      <div className="container mx-auto px-6">
        <div className="section-header text-center">
          <p className="subtitle-gradient">Mes collaborateurs</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-2">Mon Équipe</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-item card-base card-orange-shadow fade-in-start hover:ring-1 hover:ring-[#FD9800] transition-all duration-300 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 text-center min-h-[280px]"
            >
              <div className="team-img mx-auto h-32 sm:h-48 w-32 sm:w-48 relative mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full w-full h-full"
                />
              </div>
              <div className="team-text">
                <h2 className="text-[8px] sm:text-[10px] font-normal text-white bg-gradient-to-r from-[#FD9800] to-[#ff6b35] px-0.5 py-0.5 rounded-sm shadow w-fit mx-auto mb-1 leading-tight">{member.name}</h2>
                <h4 className="text-sm sm:text-md text-gray-500 dark:text-gray-300">{member.role}</h4>
                <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">{member.description}</p>
                <div className="team-social mt-4 flex justify-center space-x-3">
                  {/* Liens réseaux sociaux temporairement désactivés pour protéger le business model */}
                  {/* <Link href={member.social.whatsapp} target="_blank" className="icon-social text-green-500 hover:text-green-600">
                    <FaWhatsapp size={24} />
                  </Link>
                  <Link href={member.social.facebook} target="_blank" className="icon-social text-blue-600 hover:text-blue-700">
                    <FaFacebookF size={24} />
                  </Link>
                  <Link href={member.social.linkedin} target="_blank" className="icon-social text-blue-700 hover:text-blue-800">
                    <FaLinkedinIn size={24} />
                  </Link> */}
                  
                  {/* Icônes visuelles sans liens */}
                  <div className="text-gray-400">
                    <FaWhatsapp size={24} />
                  </div>
                  <div className="text-gray-400">
                    <FaFacebookF size={24} />
                  </div>
                  <div className="text-gray-400">
                    <FaLinkedinIn size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 