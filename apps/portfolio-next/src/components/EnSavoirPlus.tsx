'use client';

import { FaGraduationCap, FaLightbulb, FaBullseye, FaUserCheck, FaHandshake, FaChartLine, FaAward } from 'react-icons/fa6';

const cards = [
  {
    icon: <FaGraduationCap size={36} color="#FD9800" />,
    title: 'Mon Parcours',
    content: (
      <>
        <p className="text-center">Mon aventure dans le numérique est née d'une passion pour la technologie et la résolution de problèmes concrets. Une formation en génie informatique m'a donné des fondations techniques solides, que j'ai enrichies année après année, du développement web et mobile jusqu'au marketing digital. C'est cette double expertise, encore rare, qui me permet aujourd'hui de piloter un projet de bout en bout, sans intermédiaire.</p>
        <ul className="flex flex-wrap gap-3 mt-4 justify-center text-sm text-gray-700 dark:text-gray-300">
          <li className="bg-gradient-to-r from-[#E8732A] to-[#C2410C] text-white px-3 py-1 rounded-full">5+ années d'expérience</li>
          <li className="bg-gradient-to-r from-[#E8732A] to-[#C2410C] text-white px-3 py-1 rounded-full">10+ certifications pro (Meta, Google)</li>
          <li className="bg-gradient-to-r from-[#E8732A] to-[#C2410C] text-white px-3 py-1 rounded-full">10+ projets livrés</li>
          <li className="bg-gradient-to-r from-[#E8732A] to-[#C2410C] text-white px-3 py-1 rounded-full">Une double casquette : développement + marketing</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FaLightbulb size={36} color="#FD9800" />,
    title: 'Ma Philosophie',
    content: (
      <>
        <p className="text-center">Pour moi, la technologie n'a de valeur que si elle sert l'humain et crée un impact réel. Un beau site ou une application performante ne sont jamais une fin en soi : ce sont des outils au service de vos clients et de votre croissance. Je conçois donc chaque solution en partant de l'utilisateur final et du résultat attendu, jamais de la prouesse technique pour elle-même.</p>
        <ul className="mt-4 space-y-1 text-sm text-gray-700 dark:text-gray-300 w-fit mx-auto text-left">
          <li className="flex items-start gap-2"><FaUserCheck color="#FD9800" className="mt-1 shrink-0" /><span>L'utilisateur final au centre de chaque décision</span></li>
          <li className="flex items-start gap-2"><FaChartLine color="#FD9800" className="mt-1 shrink-0" /><span>Le résultat business comme boussole</span></li>
          <li className="flex items-start gap-2"><FaHandshake color="#FD9800" className="mt-1 shrink-0" /><span>Des solutions durables, pas des effets de mode</span></li>
          <li className="flex items-start gap-2"><FaAward color="#FD9800" className="mt-1 shrink-0" /><span>Une veille technologique permanente</span></li>
        </ul>
      </>
    ),
  },
  {
    icon: <FaBullseye size={36} color="#FD9800" />,
    title: 'Ma Mission',
    content: (
      <>
        <p className="text-center">Ma mission : accompagner entreprises et entrepreneurs dans une transformation digitale qui porte réellement ses fruits. Je m'engage à comprendre vos enjeux, à tenir mes délais et à livrer des solutions qui vous rapportent, pas simplement des projets « terminés ».</p>
        <ul className="flex flex-wrap gap-3 mt-4 justify-center text-sm text-gray-700 dark:text-gray-300">
          <li className="bg-gradient-to-r from-[#E8732A] to-[#C2410C] text-white px-3 py-1 rounded-full">98 % de satisfaction client</li>
          <li className="bg-gradient-to-r from-[#E8732A] to-[#C2410C] text-white px-3 py-1 rounded-full">Réponse sous 24h</li>
          <li className="bg-gradient-to-r from-[#E8732A] to-[#C2410C] text-white px-3 py-1 rounded-full">100 % des projets livrés</li>
          <li className="bg-gradient-to-r from-[#E8732A] to-[#C2410C] text-white px-3 py-1 rounded-full">Un suivi assuré après la livraison</li>
        </ul>
      </>
    ),
  }
];

export default function EnSavoirPlus() {
  return (
    <section id="en-savoir-plus" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6 sm:px-4 xs:px-2 max-w-screen-xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 sm:mb-12">
          <p className="subtitle-gradient">En Savoir Plus</p>
        </h2>
        <div className="grid gap-4 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="about-card card-base fade-in-start card-orange-shadow hover:ring-1 hover:ring-[#FD9800] bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col items-center text-center transition-all duration-300 min-h-[320px]"
            >
              {card.icon}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 mt-2">
                {card.title}
              </h3>
              <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mt-2">{card.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 