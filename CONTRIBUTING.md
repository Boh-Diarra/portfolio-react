# Guide de Contribution

Merci de votre intérêt pour contribuer à ce projet ! Ce document vous guidera à travers le processus de contribution.

## 🚀 Comment Contribuer

### 1. Fork et Clone

1. Fork ce repository
2. Clone votre fork localement :
   ```bash
   git clone https://github.com/votre-username/portfolio-react.git
   cd portfolio-react
   ```

### 2. Configuration de l'Environnement

1. Installer les dépendances :
   ```bash
   npm install
   ```

2. Lancer le projet en mode développement :
   ```bash
   cd apps/portfolio-next
   npm run dev
   ```

### 3. Créer une Branche

Créer une branche pour votre feature ou correction :

```bash
git checkout -b feature/nom-de-votre-feature
# ou
git checkout -b fix/nom-de-votre-fix
```

### 4. Développement

- Suivez les conventions de code existantes
- Ajoutez des tests si applicable
- Vérifiez que le code fonctionne correctement
- Testez sur différents navigateurs

### 5. Commit

Utilisez des messages de commit conventionnels :

```bash
# Format : type(scope): description

# Exemples :
git commit -m "feat(portfolio): add new project showcase"
git commit -m "fix(navigation): resolve mobile menu issue"
git commit -m "docs(readme): update installation instructions"
git commit -m "style(components): improve button styling"
git commit -m "refactor(hooks): optimize useActiveSection hook"
```

### Types de Commit
- `feat` : Nouvelle fonctionnalité
- `fix` : Correction de bug
- `docs` : Documentation
- `style` : Formatage, point-virgules manquants, etc.
- `refactor` : Refactoring du code
- `test` : Ajout de tests
- `chore` : Mise à jour des dépendances, etc.

### 6. Push et Pull Request

1. Pousser votre branche :
   ```bash
   git push origin feature/nom-de-votre-feature
   ```

2. Créer une Pull Request sur GitHub

## 📋 Template de Pull Request

```markdown
## Description
Brève description des changements apportés.

## Type de Changement
- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Amélioration de performance
- [ ] Refactoring
- [ ] Documentation
- [ ] Autre

## Tests
- [ ] J'ai testé localement
- [ ] J'ai ajouté des tests si applicable
- [ ] Tous les tests passent

## Checklist
- [ ] Mon code suit les conventions du projet
- [ ] J'ai auto-révisé mon code
- [ ] J'ai commenté mon code si nécessaire
- [ ] J'ai mis à jour la documentation si nécessaire
- [ ] Mes changements ne génèrent pas de nouveaux warnings
- [ ] J'ai ajouté des tests qui prouvent que ma correction fonctionne
- [ ] Les tests unitaires et d'intégration passent avec mes changements
- [ ] J'ai testé sur différents navigateurs

## Screenshots (si applicable)
Ajoutez des captures d'écran pour les changements visuels.
```

## 🎯 Standards de Code

### TypeScript/JavaScript
- Utilisez TypeScript pour tous les nouveaux fichiers
- Respectez les règles ESLint
- Utilisez des noms de variables/fonctions explicites
- Ajoutez des types TypeScript appropriés

### CSS/Styling
- Utilisez Tailwind CSS pour le styling
- Suivez les conventions BEM si CSS personnalisé
- Privilégiez les classes utilitaires Tailwind

### React/Next.js
- Utilisez les hooks React appropriés
- Suivez les conventions Next.js
- Optimisez les performances (memo, useMemo, etc.)

## 🐛 Signaler un Bug

Utilisez le template d'issue GitHub :

```markdown
## Description du Bug
Description claire et concise du bug.

## Étapes pour Reproduire
1. Aller à '...'
2. Cliquer sur '...'
3. Faire défiler jusqu'à '...'
4. Voir l'erreur

## Comportement Attendu
Description claire de ce qui devrait se passer.

## Screenshots
Si applicable, ajoutez des captures d'écran.

## Environnement
- OS: [ex: iOS]
- Navigateur: [ex: chrome, safari]
- Version: [ex: 22]

## Informations Supplémentaires
Toute autre information contextuelle.
```

## 💡 Proposer une Fonctionnalité

Utilisez le template d'issue GitHub :

```markdown
## Problème
Description claire et concise du problème que cette fonctionnalité résoudrait.

## Solution Proposée
Description claire et concise de ce que vous voulez qu'il se passe.

## Alternatives Considérées
Description claire et concise de toutes les solutions alternatives que vous avez considérées.

## Informations Supplémentaires
Ajoutez tout autre contexte ou captures d'écran sur la fonctionnalité ici.
```

## 📞 Contact

Si vous avez des questions, n'hésitez pas à :
- Ouvrir une issue sur GitHub
- Contacter l'auteur principal

Merci de contribuer à ce projet ! 🎉 