// ---------------------------------------------------------------------------
// NIVEAU 1 — Études de cas détaillées
// ---------------------------------------------------------------------------
export interface CaseStudy {
  title: string;
  tagline: string;
  image: string;
  context: string;
  challenge: string;
  solution: string[];
  result: string;
  siteLabel?: string;
  siteUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'FOAPI',
    tagline: 'Plateforme événementielle institutionnelle · Philanthropie internationale',
    image: '/img/FOAPI.webp',
    context:
      "FOAPI réunit des leaders philanthropes africains autour d'un forum d'envergure internationale, co-organisé par trois grandes institutions (Fondation BOAD, Atlantic Group, Future Africa). L'enjeu : une plateforme web à la hauteur du prestige de l'événement, capable de gérer les inscriptions des participants.",
    challenge:
      "Livrer une plateforme institutionnelle complète, multilingue et irréprochable dans un délai très court (moins de 30 jours), avec un système d'inscription fiable.",
    solution: [
      "Conception et développement complet de la plateforme, dans le respect de l'identité des trois institutions partenaires",
      "Système d'inscription en ligne avec collecte, suivi et traitement des participants",
      'Site multilingue et optimisé SEO, pensé pour une audience internationale',
      'Livraison intégrale en moins de 30 jours, sous forte contrainte de temps',
    ],
    result:
      "Une plateforme à la hauteur d'un forum réunissant l'élite philanthropique du continent, livrée dans un délai serré et pleinement opérationnelle pour la gestion des inscriptions.",
    siteLabel: 'foapi.org',
    siteUrl: 'https://foapi.org',
  },
  {
    title: 'LAC de Lassa',
    tagline: 'Plateforme institutionnelle & archives vivantes · Culture / Artisanat',
    image: '/img/lacdelassa.webp',
    context:
      "Le LAC de Lassa est un centre culturel majeur de Bamako, fondé en 2015, dédié à l'artisanat, la création, la recherche et la transmission des savoirs. Le centre fait vivre six ateliers permanents et documente ses projets depuis 2018.",
    challenge:
      "Donner à un lieu d'une richesse éditoriale rare une plateforme capable d'organiser et de préserver une mémoire vivante, sans jamais sacrifier la clarté de navigation.",
    solution: [
      'Architecture autour de 6 ateliers permanents (Terre, Forge, Menuiserie métallique, Matériaux naturels & recyclés, Textile, Jardin agroécologique)',
      "Système de documentation et d'archives vivantes des projets menés depuis 2018",
      'Modules dédiés : Projets, Transmissions, Résidences artistiques',
      "Boutique e-commerce d'objets artisanaux",
      'Agenda événementiel, actualités, newsletter et espace mécénat / partenariats',
      'Taxonomie rigoureuse (ateliers × projets × matières × statuts × résidences) avec navigation multi-niveaux et archivage pérenne',
    ],
    result:
      "L'un des projets les plus structurés de mon portfolio : une plateforme institutionnelle dense mais limpide, qui préserve la mémoire du centre tout en restant simple à parcourir et à enrichir.",
    siteLabel: 'lacdelassa.org',
    siteUrl: 'https://lacdelassa.org',
  },
  {
    title: 'NBB-Mali',
    tagline: 'Site corporate & catalogue produits · Industrie / Boisson',
    image: '/img/maquette_nbb.webp',
    context:
      "Les Nouvelles Brasseries Bamakoises, acteur industriel de la boisson au Mali, avaient besoin d'un site corporate à la hauteur de leur image de marque, capable de présenter leurs gammes et de générer des contacts commerciaux.",
    challenge:
      'Créer un site corporate complet, professionnel et générateur de demandes commerciales dans un délai court.',
    solution: [
      'Section produits avec catalogue des marques de boissons et pages produit dédiées',
      "Page actualités et événements de l'entreprise",
      'Optimisation SEO et responsive design',
      'Chatbot IA pour la messagerie instantanée et le support client',
      'Intégration de Google Analytics 4 pour le suivi des performances',
      "Bonus : formation complète de l'équipe NBB à l'administration du site (offerte)",
    ],
    result: '+70 % de visibilité en ligne et +45 % de demandes commerciales, pour un site livré en deux semaines.',
    siteLabel: 'nbb-mali.com',
    siteUrl: 'https://nbb-mali.com',
  },
  {
    title: 'SMCPH-Mali',
    tagline: 'Site B2B & tunnel de devis · Filière halieutique',
    image: '/img/smcph.webp',
    context:
      "SMCPH-Mali structure la filière du poisson congelé au Mali, du fleuve à la table. L'entreprise avait besoin d'un site B2B capable de présenter produits et services, et de générer des demandes de devis qualifiées.",
    challenge:
      'Traduire une chaîne de valeur complexe (du transport frigorifique à la production de glace) en un site clair, et transformer les visiteurs en demandes de devis concrètes.',
    solution: [
      'Site vitrine B2B complet avec catalogue de produits (Denté, Pargo, Sargo, Courbine…)',
      'Architecture par 6 services intégrés : Transport frigorifique, Traitement, Transformation & Congélation, Stockage, Commercialisation, Production de glace',
      'Intégration WhatsApp Business intelligente : devis pré-rempli automatiquement par produit, avec parcours distinct grossiste / restaurateur / particulier',
      'Tunnel de conversion optimisé (devis sous 24h)',
      'Section blog éditoriale et SEO local',
    ],
    result:
      'Un site B2B opérationnel qui positionne SMCPH comme un acteur structurant de la filière halieutique malienne, avec un tunnel de demande de devis fluide et une chaîne du froid clairement valorisée.',
    siteLabel: 'smcph-mali.com',
    siteUrl: 'https://smcph-mali.com',
  },
  {
    title: 'Akxa Digital',
    tagline: "Site vitrine & plateforme d'agence · Marketing digital / Formation",
    image: '/img/Akxadigital.webp',
    context:
      "Akxa Digital est une agence de marketing digital basée à Bamako et active à l'international, qui aide les entreprises à gagner en visibilité, générer des leads et former leurs équipes au marketing et à l'IA. En tant que responsable marketing digital et IT de l'agence, j'ai pris en charge sa plateforme web.",
    challenge:
      "Doter l'agence d'un site à la hauteur de son propre discours : une vitrine crédible de son expertise et un véritable outil de génération de leads et de ventes de formations.",
    solution: [
      'Refonte complète du site, puis évolution continue de la plateforme',
      "Présentation structurée des services de l'agence",
      'Page dédiée aux formations, pensée comme un levier de vente',
      "Blog éditorial pour le référencement et l'autorité de la marque",
      'Système de prise de contact et de captation de leads',
    ],
    result:
      "+20 % de visibilité en ligne et une hausse des achats de formations, pour une plateforme devenue un véritable outil commercial de l'agence.",
    siteLabel: 'akxadigital.com',
    siteUrl: 'https://akxadigital.com',
  },
];

// ---------------------------------------------------------------------------
// NIVEAU 2 — Grille filtrable
// ---------------------------------------------------------------------------
export interface GridProject {
  title: string;
  description: string;
  category: 'Sites Web' | 'Applications Mobiles';
  image?: string;
  link?: string;
}

export const gridProjects: GridProject[] = [
  {
    title: 'Tech Sugu',
    description: 'Boutique e-commerce de PC reconditionnés, du catalogue jusqu’au paiement en ligne.',
    category: 'Sites Web',
    image: '/img/portfolio_0.webp',
    link: 'https://techsugu.com/',
  },
  {
    title: 'IFAK-Senou',
    description: 'Site institutionnel d’un institut de formation agropastorale, pensé pour attirer de nouveaux étudiants.',
    category: 'Sites Web',
    image: '/img/Ifak-Senou.webp',
    link: 'https://ifak-senou.com/',
  },
  {
    title: 'Timaro Conseil',
    description: 'Site moderne d’un cabinet de recrutement, avec assistance intelligente intégrée.',
    category: 'Sites Web',
    image: '/img/timaro-conseil.webp',
    link: 'https://www.timaroconseil.com/',
  },
  {
    title: "Virtuo'z Concept",
    description: 'Site et catalogue d’une agence de marketing terrain et publicité par l’objet, présente sur 3 pays.',
    category: 'Sites Web',
    image: '/img/virtuozconcept.webp',
  },
  {
    title: 'AfroCuisine Magazine',
    description: 'Média culinaire complet : émissions par saisons, awards et espace abonnés.',
    category: 'Sites Web',
    image: '/img/AfroCuisine-mag.webp',
    link: 'https://www.afrocuisinemagazine.com/',
  },
  {
    title: 'Djoliba Show',
    description: 'Billetterie événementielle en ligne avec QR codes scannables et paiement intégré.',
    category: 'Sites Web',
    image: '/img/Djoliba_show.webp',
    link: 'https://djoliba-show.com/',
  },
];

// ---------------------------------------------------------------------------
// NIVEAU 3 — Projets perso / démos
// ---------------------------------------------------------------------------
export interface Demo {
  title: string;
  tag: string;
  image: string;
}

export const demos: Demo[] = [
  { title: 'Clone Instagram', tag: 'Démo · React', image: '/img/mobile_5.webp' },
  { title: 'Fruit Store', tag: 'Démo · E-commerce', image: '/img/mobile_4.webp' },
  { title: 'Events', tag: 'Démo · Application', image: '/img/mobile_3.webp' },
];
