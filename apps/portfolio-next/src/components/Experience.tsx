import Timeline, { TimelineItemProps } from './Timeline';

const professionalExperience: TimelineItemProps[] = [
  {
    date: 'Octobre 2025 - Maintenant',
    title: 'Responsable marketing digital',
    subtitle: 'Akxa Digital SARL',
    description: `**Réalisations principales :**\n• Pilotage de la stratégie digitale complète pour booster la visibilité en ligne de nos clients\n• Création de sites web optimisés SEO et gestion de campagnes sur réseaux sociaux (Facebook, Instagram, LinkedIn et TikTok)\n• Coordination d'équipe (Community Manager et Web Designer) pour une approche cohérente\n• Résultat : Augmentation significative de la visibilité en ligne et amélioration de l'acquisition clients pour chaque projet`,
    siteUrl: '#', // TODO: Ajouter le lien du site
  },
  {
    date: 'Juillet 2025 - Octobre 2025',
    title: 'Refonte de la page vitrine de "Timaro Conseil"',
    subtitle: 'Timaro Conseil',
    description: `**Réalisations principales :**\n• Refonte complète du site vitrine pour un cabinet de recrutement spécialisé\n• Design moderne responsive et intégration d'un chatbot IA pour l'assistance instantanée\n• Intégration de Google Analytics 4 pour le suivi des performances et l'analyse du comportement utilisateur\n• Résultat : Meilleur engagement des candidats et des entreprises, avec un site performant et moderne`,
    siteUrl: 'https://www.timaroconseil.com/',
  },
  {
    date: 'Mai 2025',
    title: 'Projet Capstone',
    subtitle: 'Coursera (Meta) - Certificat Professionnel Développeur Front-End',
    description: `**Réalisations principales :**\n• Développement d'une application web complète pour le restaurant fictif Little Lemon\n• Système de commande en ligne avec panier d'achat interactif et gestion des articles\n• Module de réservation de tables avec calendrier dynamique et gestion des créneaux\n• Interface de gestion de menu avec filtres avancés et recherche intelligente\n• Résultat : Démonstration concrète des compétences front-end avec interfaces réactives, gestion d'état et optimisation des performances`,
    siteUrl: 'https://github.com/Boh-Diarra/little-lemon',
  },
  {
    date: 'Avril 2025 - Juin 2025',
    title: "Création du site corporate des Nouvelles Brasseries Bamakoises",
    subtitle: 'NBB-MALI',
    description: `**Réalisations principales :**\n• Création d'une section produits avec catalogue des différentes marques de boissons et page produit dédiée\n• Intégration d'une page actualités et événements de l'entreprise\n• Optimisation SEO et responsive design pour tous les appareils\n• Intégration d'un chatbot IA pour la messagerie instantanée et le support client\n• Intégration complète de Google Analytics 4 pour le suivi des performances\n• <span class="bonus-gradient">BONUS : Formation complète de l'équipe NBB-Mali</span> sur l'utilisation et l'administration du site (offert gratuitement)\n• Résultat : <strong>Amélioration de 70% de la visibilité en ligne</strong> et <strong>augmentation de 45% des demandes commerciales</strong>`,
    siteUrl: 'https://www.nbb-mali.com',
  },
  {
    date: 'Mai 2025 - Juin 2025',
    title: 'Conception du site d\'un Institut Agropastoral ',
    subtitle: 'IFAK-SENOU',
    description: `**Réalisations principales :**\n• Conception et développement d'un site web moderne pour l'institut de formation agropastorale\n• Création d'une page de présentation des formations et programmes d'études\n• Optimisation SEO et responsive design pour tous les appareils\n• Mise en place d'une galerie photos et vidéos des activités de l'institut\n• Intégration d'un chatbot IA pour la messagerie instantanée et l'assistance aux visiteurs\n• Intégration de Google Analytics 4 pour analyser l'intérêt des formations et optimiser les parcours d'inscription\n• Résultat : <strong>Amélioration de 80% de la visibilité en ligne</strong> et <strong>augmentation de 60% des inscriptions</strong>`,
    siteUrl: 'https://ifak-senou.com',
  },
  {
    date: 'Octobre 2023 - Maintenant',
    title: 'Site E-commerce',
    subtitle: 'Tech Sugu',
    description: `**Réalisations principales :**\n• Conception et développement complet d'une plateforme e-commerce spécialisée dans les PC reconditionnés\n• Intégration de systèmes de paiement sécurisés et gestion des stocks en temps réel\n• Optimisation SEO et marketing digital intégré\n• Résultat : <strong>+70% de trafic organique en 6 mois</strong>, <strong>+30% de ventes</strong> et <strong>98% de satisfaction client</strong>`,
    siteUrl: 'https://techsugu.com',
  },
  {
    date: 'Janvier 2023 - Maintenant',
    title: 'Responsable informatique',
    subtitle: 'Akxa Digital SARL',
    description: `**Réalisations principales :**\n• Supervision proactive des infrastructures informatiques avec réduction des incidents\n• Formation et accompagnement de plus de 20 utilisateurs pour booster leur productivité\n• Mise en œuvre de procédures de sécurité et optimisation des performances\n• Résultat : <strong>Réduction de 30% des incidents critiques</strong>, <strong>augmentation de 40% de la productivité</strong> des équipes et <strong>diminution de 25% des vulnérabilités</strong> système`,
    // siteUrl: 'https://akxadigital.com',
  },
  // {
  //   date: 'Juin 2023 - Maintenant',
  //   title: 'Développeur Web',
  //   subtitle: 'Akxa Digital SARL',
  //   description: `**Réalisations principales :**\n• Création de sites web personnalisés, +30% de visibilité en ligne pour les clients\n• Optimisation continue des performances, -20% sur les temps de chargement\n• Intégration de contenus SEO pour un meilleur positionnement\n• Collaboration étroite avec les équipes pour aligner technique et besoins business\n• Résultat : satisfaction client atteignant 95%`,
  // },
];

const certifications: TimelineItemProps[] = [
  {
    date: 'Octobre 2025 - Octobre 2027',
    title: 'Meta Certified Digital Marketing Associate',
    subtitle: 'Coursera - Meta',
    description: `**Compétences acquises :**\n• Maîtrise des plateformes publicitaires Meta (Facebook, Instagram, Messenger)\n• Planification et exécution de campagnes publicitaires ciblées et performantes\n• Optimisation du budget publicitaire et amélioration du ROI\n• Analyse des performances avec Facebook Business Manager et Meta Analytics\n• Audience targeting et segmentation avancée avec funnels de conversion\n• Bénéfice : Capacité à transformer votre budget pub en résultats mesurables avec un retour sur investissement optimal et des stratégies de conversion éprouvées`,
    credlyUrl: 'https://www.credly.com/badges/d444721b-3fff-407e-b6c8-6762181480a2/public_url',
  },
  {
    date: 'Novembre 2024 - Septembre 2025',
    title: 'Meta Full-Stack Developer Certificate',
    subtitle: 'Coursera - Meta',
    description: `**Compétences acquises :**\n• Maîtrise complète du développement full-stack avec React.js et Node.js\n• Développement d'applications web complètes (frontend + backend + base de données)\n• Création d'APIs RESTful pour applications web modernes\n• Gestion de bases de données (SQL, MySQL, MongoDB) et optimisation des performances\n• Déploiement et maintenance d'applications sur serveurs cloud (AWS, Vercel)\n• Sécurité des applications web et bonnes pratiques de développement\n• Bénéfice : Capacité à livrer des applications web complètes de la conception à la production, avec une compétence technique solide et fiable`,
    credlyUrl: 'https://www.credly.com/badges/7f0dc040-2f43-4001-a1f6-8df54acb15ab/public_url',
  },
  {
    date: 'Mai 2025 - Septembre 2025',
    title: 'Meta Back-End Developer Certificate',
    subtitle: 'Coursera - Meta',
    description: `**Compétences acquises :**\n• Maîtrise des langages de programmation backend (Python, Node.js, Django)\n• Développement d'APIs RESTful performantes pour applications web\n• Gestion de bases de données (SQL, MySQL, NoSQL) et optimisation des performances\n• Sécurité des applications web et authentification utilisateur\n• Déploiement et maintenance d'applications sur serveurs cloud\n• Bénéfice : Architecture backend robuste et scalable pour garantir la performance et la sécurité de vos applications`,
    credlyUrl: 'https://www.credly.com/badges/3fe90606-0881-4c5e-bb8a-be640cb67827/public_url',
  },
  {
    date: 'Novembre 2024 - Mai 2025',
    title: 'Meta Front-End Developer Certificate',
    subtitle: 'Coursera - Meta',
    description: `**Compétences acquises :**\n• Maîtrise complète de HTML5 sémantique et CSS3 avancé (Flexbox, Grid, animations)\n• Développement JavaScript moderne (ES6+, async/await, modules)\n• Création d'applications React.js avec hooks, context API et state management\n• Optimisation des performances et accessibilité web (WCAG)\n• Responsive design et Progressive Web Apps (PWA)\n• Bénéfice : Capacité à créer des expériences utilisateur fluides et performantes qui convertissent`,
    credlyUrl: 'https://www.credly.com/badges/5b7a0e1a-af2c-4618-a087-3de9dabdb4cf/public_url',
  },
  {
    date: 'Octobre 2024 - Novembre 2024',
    title: 'Certificat Google AI Essentials',
    subtitle: 'Coursera - Google',
    description: `**Compétences acquises :**\n• Fondamentaux de l'intelligence artificielle et du machine learning\n• Compréhension des différents types d'IA (supervisée, non-supervisée, renforcement)\n• Intégration d'APIs d'IA dans des applications existantes\n• Compréhension des enjeux éthiques et de la responsabilité en IA\n• Bénéfice : Capacité à ajouter de l'intelligence artificielle à vos projets pour automatiser et optimiser vos processus métier avec une approche éthique et responsable`,
    credlyUrl: 'https://www.credly.com/badges/b567815f-2126-4c62-b659-7709911f8726/public_url',
  },
  {
    date: 'Octobre 2024 - Decembre 2024',
    title: 'Google IT Support Professional Certificate',
    subtitle: 'Coursera - Google',
    description: `**Compétences acquises :**\n• Administration système Windows et Linux (gestion des utilisateurs, permissions)\n• Configuration et maintenance de réseaux (TCP/IP, DNS, DHCP, VPN)\n• Résolution de problèmes matériels et logiciels (diagnostic, dépannage)\n• Sécurité informatique (pare-feu, antivirus, chiffrement, authentification)\n• Gestion de services cloud (Google Workspace, AWS, Azure)\n• Support utilisateur et documentation technique\n• Bénéfice : Capacité à assurer la stabilité, la sécurité et l'efficacité des infrastructures informatiques pour que votre activité ne s'arrête jamais`,
    credlyUrl: 'https://www.credly.com/badges/b65e022a-d561-430c-a788-5b4b9d20e40d/public_url',
  },
  {
    date: 'Juin 2023 - Septembre 2023',
    title: 'Formation en création de sites web modernes et professionnels avec WordPress',
    subtitle: 'OpenClassrooms',
    description: `**Compétences acquises :**\n• Installation et configuration avancée de WordPress (multisite, sécurité)\n• Développement de thèmes personnalisés avec PHP, HTML, CSS et JavaScript\n• Optimisation SEO (Yoast SEO, structure des données, performance)\n• Sécurisation des sites (SSL, pare-feu, sauvegardes automatiques)\n• Responsive design et optimisation mobile\n• Intégration d'APIs et services tiers (paiement, analytics)\n• Bénéfice : Capacité à créer des sites web professionnels, sécurisés et optimisés pour répondre précisément aux besoins de votre activité`,
  },
  {
    date: 'Aout 2021- Septembre 2023',
    title: 'Formation Professionnelle en Génie Informatique',
    subtitle: 'Expert-Lab Technologie',
    description: `**Compétences acquises :**\n• Développement web et gestion de systèmes\n• Réseaux, sécurité et maintenance informatique\n• Adaptation des solutions aux besoins utilisateurs\n• Bénéfice : Capacité à développer des solutions informatiques fiables et sur-mesure adaptées à vos contraintes techniques et business`,
  },
  {
    date: 'Juin 2022 - Décembre 2022',
    title: 'Formation sur la création de site web avec HTML5 et CSS3',
    subtitle: 'OpenClassrooms',
    description: `**Compétences acquises :**\n• Structuration et stylisation avancée de pages web\n• Techniques modernes de responsive design\n• Optimisation des performances et accessibilité\n• Bénéfice : Capacité à créer des sites web attrayants, performants et accessibles sur tous les appareils pour maximiser votre présence en ligne`,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-gray-900 py-16 transition-colors">
      <Timeline 
        subtitle="Mon Parcours" 
        title="Expériences professionnelles" 
        items={professionalExperience} 
      />
      <Timeline
        subtitle="Mes Certifications"
        title="Certifications et Formations"
        items={certifications}
      />
    </section>
  );
}