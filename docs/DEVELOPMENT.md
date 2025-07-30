# Guide de Développement

Ce document contient toutes les informations nécessaires pour contribuer au développement de ce portfolio.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ 
- npm, yarn, pnpm ou bun
- Git

### Installation
```bash
# Cloner le repository
git clone https://github.com/votre-username/portfolio-react.git
cd portfolio-react

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

## 📁 Structure du Projet

```
Portfolio-react/
├── apps/
│   └── portfolio-next/          # Application Next.js principale
│       ├── src/
│       │   ├── app/            # Pages et layouts Next.js 13+
│       │   ├── components/     # Composants React réutilisables
│       │   ├── hooks/          # Hooks React personnalisés
│       │   ├── utils/          # Utilitaires et helpers
│       │   └── styles/         # Styles globaux
│       ├── public/             # Assets statiques
│       └── package.json        # Dépendances de l'app
├── packages/
│   └── portfolio-legacy/       # Version legacy
├── .github/                    # Configuration GitHub
├── scripts/                    # Scripts de déploiement
└── docs/                       # Documentation
```

## 🛠️ Scripts Disponibles

### Monorepo (racine)
```bash
npm run dev          # Lancer le développement
npm run build        # Build de production
npm run start        # Démarrer en production
npm run lint         # Linting
npm run test         # Tests
npm run test:watch   # Tests en mode watch
npm run test:coverage # Tests avec couverture
npm run type-check   # Vérification TypeScript
npm run clean        # Nettoyer les node_modules
```

### Application Next.js
```bash
cd apps/portfolio-next
npm run dev          # Développement
npm run build        # Build
npm run start        # Production
npm run lint         # Linting
npm run analyze      # Analyse du bundle
npm run export       # Export statique
```

## 🧪 Tests

### Structure des Tests
```
apps/portfolio-next/
├── src/
│   ├── components/
│   │   └── __tests__/         # Tests des composants
│   ├── hooks/
│   │   └── __tests__/         # Tests des hooks
│   └── utils/
│       └── __tests__/         # Tests des utilitaires
```

### Exécution des Tests
```bash
# Tous les tests
npm run test

# Tests en mode watch
npm run test:watch

# Tests avec couverture
npm run test:coverage

# Tests spécifiques
npm test -- --testNamePattern="Header"
```

### Écriture de Tests
```typescript
import { render, screen } from '@testing-library/react'
import { Header } from '@/components/Header'

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Accueil')).toBeInTheDocument()
  })
})
```

## 📝 Conventions de Code

### TypeScript
- Utilisez TypeScript pour tous les nouveaux fichiers
- Définissez des interfaces pour les props des composants
- Utilisez des types stricts

```typescript
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick 
}) => {
  // ...
}
```

### React/Next.js
- Utilisez les hooks React appropriés
- Suivez les conventions Next.js 13+ avec App Router
- Optimisez les performances

```typescript
// ✅ Bon
const Component = () => {
  const [state, setState] = useState()
  const memoizedValue = useMemo(() => expensiveCalculation(), [])
  
  return <div>...</div>
}

// ❌ Éviter
const Component = () => {
  const expensiveValue = expensiveCalculation() // Recalculé à chaque render
  return <div>...</div>
}
```

### CSS/Styling
- Utilisez Tailwind CSS pour le styling
- Privilégiez les classes utilitaires
- Utilisez des composants pour la réutilisabilité

```typescript
// ✅ Bon
<div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800">
  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
    Titre
  </h1>
</div>

// ❌ Éviter
<div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
  <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Titre</h1>
</div>
```

## 🔧 Configuration

### ESLint
Le projet utilise ESLint avec des règles personnalisées pour :
- TypeScript
- React
- Next.js
- Accessibilité

### Prettier
Formatage automatique du code avec Prettier.

### Husky
Hooks Git pour :
- Validation des messages de commit
- Linting automatique
- Tests avant push

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Déploiement automatique
vercel --prod

# Ou via le script
./scripts/deploy.sh production
```

### Export Statique
```bash
cd apps/portfolio-next
npm run export
```

## 📊 Performance

### Métriques à Surveiller
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)

### Optimisations
- Images optimisées avec Next.js Image
- Code splitting automatique
- Lazy loading des composants
- Bundle analysis

## 🔍 Debugging

### Outils de Développement
- React Developer Tools
- Next.js DevTools
- Chrome DevTools
- Lighthouse

### Logs
```bash
# Logs de développement
npm run dev

# Logs de production
npm run start
```

## 🤝 Contribution

### Workflow Git
1. Fork le repository
2. Créer une branche feature
3. Développer et tester
4. Commit avec des messages conventionnels
5. Push et Pull Request

### Messages de Commit
```bash
feat(component): add new button component
fix(navigation): resolve mobile menu issue
docs(readme): update installation instructions
style(header): improve responsive design
refactor(hooks): optimize useActiveSection
test(button): add unit tests
chore(deps): update dependencies
```

## 📚 Ressources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Outils
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Testing Library](https://testing-library.com/)

## 🆘 Support

Si vous rencontrez des problèmes :
1. Vérifiez la documentation
2. Consultez les issues existantes
3. Créez une nouvelle issue avec les détails
4. Contactez l'équipe de développement

---

Merci de contribuer à ce projet ! 🎉 