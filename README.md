# Portfolio React - Monorepo

## 📋 Description

Ce monorepo contient mon portfolio personnel développé avec les technologies modernes. Le projet est structuré en monorepo pour une meilleure organisation et réutilisabilité du code.

## 🏗️ Architecture

```
Portfolio-react/
├── apps/
│   └── portfolio-next/          # Application Next.js principale
```

## 🚀 Technologies Utilisées

### Frontend
- **Next.js 15** - Framework React avec App Router
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **React Icons** - Icônes SVG
- **Swiper** - Carrousel interactif
- **Next Themes** - Gestion des thèmes (clair/sombre)

### Outils de Développement
- **ESLint** - Linting du code
- **PostCSS** - Traitement CSS
- **Autoprefixer** - Préfixes CSS automatiques

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Installation des dépendances

```bash
# Installation des dépendances du monorepo
npm install

# Ou avec yarn
yarn install
```

## 🛠️ Scripts Disponibles

### Monorepo (racine)
```bash
# Installation des dépendances
npm install

# Lancer tous les projets en développement
npm run dev
```

### Application Next.js (apps/portfolio-next)
```bash
# Aller dans le répertoire de l'application
cd apps/portfolio-next

# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm run start

# Linting
npm run lint

# Analyse du bundle
npm run analyze

# Export statique
npm run export
```

## 🌐 Déploiement

### Vercel (Recommandé)
```bash
# Déploiement automatique avec Vercel
vercel --prod
```

### Export Statique
```bash
npm run export
```

## 📁 Structure du Projet

### Apps
- **portfolio-next** : Application principale Next.js avec toutes les fonctionnalités modernes

### Composants Principaux
- `Header.tsx` - Navigation et header
- `Hero.tsx` - Section d'accueil
- `About.tsx` - Section à propos
- `Skills.tsx` - Compétences techniques
- `Portfolio.tsx` - Projets réalisés
- `Experience.tsx` - Expérience professionnelle
- `Contact.tsx` - Formulaire de contact

## 🎨 Fonctionnalités

### ✅ Implémentées
- [x] Design responsive et moderne
- [x] Mode sombre/clair
- [x] Animations fluides avec Framer Motion
- [x] Navigation fluide avec scroll
- [x] Portfolio interactif avec lightbox
- [x] Formulaire de contact fonctionnel
- [x] Optimisation SEO
- [x] Performance optimisée
- [x] Accessibilité (WCAG)

### 🔄 En Cours
- [ ] Tests unitaires
- [ ] Tests d'intégration
- [ ] CI/CD pipeline
- [ ] Documentation API

## 🧪 Tests

```bash
# Lancer les tests (à implémenter)
npm run test

# Tests de linting
npm run lint
```

## 📝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Boh Diarra**
- Portfolio: [boh-diarra.vercel.app]
- LinkedIn: [https://www.linkedin.com/in/boh-diarra/]
- GitHub: [https://github.com/Boh-Diarra]

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icônes

## 📊 Statistiques

![GitHub stars](https://img.shields.io/github/stars/Boh-Diarra/portfolio-react)
![GitHub forks](https://img.shields.io/github/forks/Boh-Diarra/portfolio-react)
![GitHub issues](https://img.shields.io/github/issues/Boh-Diarra/portfolio-react)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Boh-Diarra/portfolio-react)
![GitHub license](https://img.shields.io/github/license/Boh-Diarra/portfolio-react)

---

⭐ Si ce projet vous plaît, n'hésitez pas à le star sur GitHub ! 