// Configuration des informations de contact
// Pour un repository public, remplacez ces valeurs par des exemples

export const contactInfo = {
  // Version publique (exemples)
  public: {
    email: 'contact@example.com',
    phone: '+123 456 789 012',
    location: 'Ville, Pays',
    whatsapp: '+123456789012',
    address: 'Adresse exemple, Ville, Pays'
  },
  
  // Version privée (vos vraies données)
  private: {
    email: 'boh.diarra92@gmail.com',
    phone: '+223 92 61 93 37',
    location: 'Bamako, Mali',
    whatsapp: '+22392619337',
    address: 'Baco Djicoroni ACI, Bamako, Mali'
  }
};

// Choisir quelle version utiliser
export const USE_PUBLIC_CONTACT = process.env.NODE_ENV === 'production' && process.env.REPO_PUBLIC === 'true';

export const getContactInfo = () => {
  return USE_PUBLIC_CONTACT ? contactInfo.public : contactInfo.private;
}; 