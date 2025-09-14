# Déploiement sur AWS Amplify

Ce guide explique comment déployer ce portfolio Next.js sur AWS Amplify.

## 🚀 Configuration requise

### 1. Prérequis
- Compte AWS avec accès à Amplify
- Repository Git (GitHub, GitLab, ou Bitbucket)
- Node.js 18+ installé localement

### 2. Fichiers de configuration créés
- `amplify.yml` - Configuration de build principal
- `amplify/backend/backend-config.json` - Configuration backend
- `amplify/env/production.env` - Variables d'environnement
- `amplify/redirects` - Redirections personnalisées
- `amplify/headers` - Headers de sécurité et cache

## 📋 Étapes de déploiement

### 1. Connecter le repository
1. Aller sur [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Cliquer sur "New app" > "Host web app"
3. Connecter votre repository Git
4. Sélectionner la branche principale (main/master)

### 2. Configuration du build
- **Build command**: `npm run amplify-build`
- **Base directory**: `apps/portfolio-next`
- **Output directory**: `.next`

### 3. Variables d'environnement
Configurer dans la console Amplify :
```
NEXT_PUBLIC_SITE_URL=https://votre-domaine.amplifyapp.com
NODE_ENV=production
CONTACT_EMAIL=boh.diarra92@gmail.com
CONTACT_PHONE=+223 92 61 93 37
CONTACT_LOCATION=Bamako, Mali
REPO_PUBLIC=false
NEXT_TELEMETRY_DISABLED=1
```

### 4. Configuration avancée
- **Node.js version**: 18.x ou 20.x
- **Build timeout**: 30 minutes
- **Cache**: Activé pour node_modules et .next

## 🔧 Optimisations incluses

### Performance
- ✅ Compression gzip/brotli
- ✅ Images optimisées (WebP, AVIF)
- ✅ Bundle splitting optimisé
- ✅ Cache headers configurés
- ✅ CDN CloudFront intégré

### Sécurité
- ✅ Headers de sécurité
- ✅ HTTPS obligatoire
- ✅ CSP (Content Security Policy)
- ✅ Protection XSS

### SEO
- ✅ Métadonnées complètes
- ✅ Sitemap automatique
- ✅ Redirections configurées
- ✅ URLs canoniques

## 📊 Monitoring

### Métriques disponibles
- Performance Core Web Vitals
- Taux d'erreur
- Temps de réponse
- Utilisation de la bande passante

### Alertes recommandées
- Erreurs 5xx > 1%
- Temps de réponse > 3s
- Disponibilité < 99.9%

## 🚨 Dépannage

### Problèmes courants
1. **Build échoue**: Vérifier la version Node.js
2. **Images ne se chargent pas**: Vérifier les permissions S3
3. **Redirections ne fonctionnent pas**: Vérifier le fichier redirects
4. **Variables d'environnement**: Vérifier la configuration dans la console

### Logs utiles
- Build logs: Console Amplify > Build history
- Runtime logs: CloudWatch Logs
- Performance: CloudWatch Metrics

## 🔄 Mise à jour

### Déploiement automatique
- Push sur la branche principale = déploiement automatique
- Pull requests = preview deployments

### Déploiement manuel
```bash
# Local
npm run build
npm run start

# Amplify
# Utiliser la console ou l'API
```

## 📈 Optimisations futures

### Recommandations
1. **Edge Functions**: Pour la personnalisation
2. **Image Optimization**: Service d'images personnalisé
3. **Analytics**: Intégration Google Analytics 4
4. **Monitoring**: Sentry pour le monitoring d'erreurs
5. **CDN**: CloudFront avec cache intelligent

## 🆘 Support

Pour toute question ou problème :
- Documentation AWS Amplify
- Console AWS Support
- GitHub Issues du projet

---
**Note**: Ce portfolio est optimisé pour AWS Amplify avec toutes les meilleures pratiques de performance et de sécurité.
