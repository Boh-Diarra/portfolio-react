#!/bin/bash

# Script de déploiement pour le portfolio
# Usage: ./scripts/deploy.sh [production|staging]

set -e

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages
print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérifier les arguments
ENVIRONMENT=${1:-production}

if [[ "$ENVIRONMENT" != "production" && "$ENVIRONMENT" != "staging" ]]; then
    print_error "Environnement invalide. Utilisez 'production' ou 'staging'"
    exit 1
fi

print_message "Déploiement en cours pour l'environnement: $ENVIRONMENT"

# Vérifier que nous sommes dans le bon répertoire
if [[ ! -f "package.json" ]]; then
    print_error "Ce script doit être exécuté depuis la racine du projet"
    exit 1
fi

# Vérifier que Git est propre
if [[ -n $(git status --porcelain) ]]; then
    print_warning "Il y a des changements non commités. Voulez-vous continuer? (y/N)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        print_message "Déploiement annulé"
        exit 1
    fi
fi

# Installer les dépendances
print_message "Installation des dépendances..."
npm install

# Aller dans le répertoire de l'application
cd apps/portfolio-next

# Installer les dépendances de l'application
print_message "Installation des dépendances de l'application..."
npm install

# Linting
print_message "Exécution du linting..."
npm run lint

# Vérification des types
print_message "Vérification des types TypeScript..."
npm run type-check

# Build de production
print_message "Build de production..."
npm run build

# Déploiement avec Vercel
if [[ "$ENVIRONMENT" == "production" ]]; then
    print_message "Déploiement en production avec Vercel..."
    vercel --prod
else
    print_message "Déploiement en staging avec Vercel..."
    vercel
fi

print_message "Déploiement terminé avec succès!"
print_message "URL: https://votre-portfolio.vercel.app"

# Retourner à la racine
cd ../..

print_message "Script de déploiement terminé" 