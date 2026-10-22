# Portfolio — Boh DIARRA

Portfolio de Boh DIARRA, développeur Fullstack & WordPress à Bamako (Mali) : études de cas, réalisations, expériences, certifications et compétences.

**Site en ligne : [bohdiarra.vercel.app](https://bohdiarra.vercel.app)**

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) et React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion, Swiper, next-themes (thème clair / sombre)
- Vercel (hébergement et Vercel Analytics), Web3Forms (formulaire de suggestion)

## Structure

```
.
├── apps/portfolio-next/     # Application Next.js
│   ├── public/img/          # Images et CV
│   └── src/
│       ├── app/             # Pages, layout, métadonnées SEO, robots, sitemap
│       ├── components/      # Composants React
│       ├── config/          # Coordonnées et réseaux sociaux
│       ├── data/            # Contenus : projets, expériences, certifications
│       ├── hooks/           # Hooks React
│       └── utils/           # Utilitaires
└── .github/workflows/       # CI : lint, types et build
```

## Lancer le projet en local

Prérequis : Node.js 22 ou plus récent, npm.

```bash
git clone https://github.com/Boh-Diarra/portfolio-react.git
cd portfolio-react
npm ci
npm run dev
```

Le site est alors disponible sur http://localhost:3000.

Variables d'environnement (facultatives) : copier `env.example` vers `apps/portfolio-next/.env.local`. Sans clé Web3Forms, le formulaire de suggestion bascule sur un envoi par e-mail.

### Scripts (à la racine)

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production (après `build`) |
| `npm run lint` | ESLint |
| `npm run type-check` | Vérification TypeScript |

### Commits

Les messages suivent [Conventional Commits](https://www.conventionalcommits.org/) (`feat`, `fix`, `docs`, `chore`, `ci`…), vérifiés par commitlint. Avant chaque commit, Husky lance le lint et la vérification des types.

## Déploiement

Le déploiement est automatique : chaque push sur `master` est mis en production sur Vercel, et chaque autre branche ou pull request reçoit une URL de preview. La CI GitHub Actions vérifie le lint, les types et le build sur `master` et sur les pull requests.

## Licence

Le **code source** est publié sous licence [MIT](LICENSE).

Les photos, les témoignages, les captures de projets clients, le CV et les textes du site sont **tous droits réservés** et ne peuvent pas être réutilisés sans autorisation écrite. Voir [LICENSE](LICENSE).

## Contact

- LinkedIn : [linkedin.com/in/boh-diarra](https://www.linkedin.com/in/boh-diarra/)
- GitHub : [github.com/Boh-Diarra](https://github.com/Boh-Diarra)
