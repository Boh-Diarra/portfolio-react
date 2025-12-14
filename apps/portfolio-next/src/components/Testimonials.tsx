'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaQuoteLeft } from 'react-icons/fa6';
import TiltOrig from 'react-parallax-tilt';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tilt = TiltOrig as unknown as React.FC<React.ComponentProps<any>>;

const testimonials = [
  {
    image: '/img/testimonial-4.webp',
    text: "Je suis très satisfait du travail de Boh. Il a réalisé la refonte de la page vitrine de mon site avec beaucoup de professionnalisme et de créativité. Il a pris le temps de comprendre mon contexte, m'a fait de très bonnes suggestions et a su apporter des idées pertinentes. Le résultat est vraiment à la hauteur. Un vrai pro, que je recommande à 100 % !",
    name: 'Madani Diakite',
    title: 'Talent Acquisition Specialist | Recruiter | Chasseur de têtes',
  },
  {
    image: '/img/team-4.webp',
    text: "Boh a créé mon portfolio personnel avec un résultat au-delà de mes attentes. Grâce à son expertise, j'ai pu valoriser mes compétences en ligne et recevoir de nouvelles opportunités professionnelles. Je suis grandement satisfait de la qualité et du professionnalisme apportés à ce projet !",
    name: 'COULIBALY Oumar',
    title: 'Consultant en Communication & Marketing | Personal Branding',
  },
  {
    image: '/img/testimonial-1.webp',
    text: "Grâce à Boh, notre site a généré 80% de visibilité en plus et 60% d'inscriptions supplémentaires. Son professionnalisme et sa maîtrise technique ont dépassé toutes nos attentes. Un partenaire de confiance !",
    name: 'Mendie Traoré',
    title: 'Directeur des études - IFAK-SENOU',
  },
  {
    image: '/img/testimonial-2.webp',
    text: "Boh a livré notre site corporate en seulement 2 semaines avec une qualité exceptionnelle. Résultat : 70% d'augmentation de notre visibilité en ligne et 45% de demandes commerciales en plus. Un développeur qui comprend les enjeux business !",
    name: 'Mahamadou Tounkara',
    title: 'Digital communication and Marketing Manager at the NBB-Mali',
  },
];

export default function Testimonials() {
  return (
    <section id="review" className="bg-white dark:bg-gray-900 py-16 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <div className="text-blue-600 dark:text-blue-400 text-3xl sm:text-5xl inline-block mb-4">
                <FaQuoteLeft />
            </div>
        </div>
        <p className="subtitle-gradient">Témoignages</p>
        <div className="testimonials-section">
          <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="text-center pb-12">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.25}
                glareColor="#FD9800"
                glarePosition="all"
                scale={1.04}
                transitionSpeed={700}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1200}
                gyroscope={true}
                className="testimonial-item group card-base card-orange-shadow glassmorphism fade-in-start hover:ring-2 hover:ring-[#FD9800] transition-all duration-500 p-4 sm:p-8 min-h-[280px] flex flex-col items-center relative overflow-visible bg-white dark:bg-gray-800"
              >
                {/* Halo orange animé */}
                <div className="absolute -inset-2 z-0 rounded-3xl pointer-events-none animate-pulse bg-gradient-to-br from-[#FD9800]/20 to-[#ff6b35]/10 blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
                {/* Avatar en relief */}
                <div className="testimonial-img mx-auto mb-4 h-24 w-24 relative z-10 shadow-2xl ring-4 ring-white dark:ring-gray-900 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                  />
                </div>
                {/* Citation en surimpression */}
                <div className="absolute left-2 top-2 text-orange-400/70 text-4xl sm:text-5xl z-0 pointer-events-none select-none"><FaQuoteLeft /></div>
                <div className="testimonial-text z-10 flex flex-col items-center">
                  <p className="italic px-2 sm:px-12 text-base sm:text-lg text-gray-900 dark:text-gray-100 font-medium drop-shadow-lg bg-white/70 dark:bg-gray-800/70 rounded-xl py-3 px-4 mb-2 max-w-xl transition-all duration-500">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#FD9800] to-[#ff6b35] bg-clip-text text-transparent mt-4 drop-shadow-lg">{testimonial.name}</h3>
                  <h4 className="text-sm sm:text-md text-gray-500 dark:text-gray-300">{testimonial.title}</h4>
                </div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
}