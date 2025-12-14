/**
 * Utilitaires pour la gestion des emails
 */

/**
 * Formate le corps du message en remplaçant les \n par de vrais retours à la ligne
 * et encode correctement pour l'URL mailto:
 */
export const formatEmailBody = (body: string): string => {
  // Remplacer les \n par de vrais retours à la ligne
  const formattedBody = body.replace(/\\n/g, '\n');
  
  // Encoder pour l'URL mailto:
  return encodeURIComponent(formattedBody);
};

/**
 * Crée une URL mailto: complète avec encodage correct
 */
export const createMailtoUrl = (
  email: string, 
  subject: string, 
  body: string
): string => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = formatEmailBody(body);
  
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
};

/**
 * Messages prédéfinis pour différents services
 */
export const getDefaultEmailTemplates = () => ({
  contact: {
    subject: 'Contact Portfolio',
    body: `Bonjour Boh,

Je souhaite discuter d'un projet avec vous.

Cordialement,`
  },
  
  webDevelopment: {
    subject: 'Devis Développement Web',
    body: `Bonjour Boh,

Je suis intéressé par votre service de développement web sur mesure.

Pouvez-vous me contacter pour discuter de mon projet et obtenir un devis personnalisé ?

Merci !`
  },
  
  mobileDevelopment: {
    subject: 'Devis Application Mobile',
    body: `Bonjour Boh,

Je suis intéressé par votre service de développement d'applications mobiles.

Pouvez-vous me contacter pour discuter de mon projet et obtenir un devis personnalisé ?

Merci !`
  },
  
  itSupport: {
    subject: 'Devis Support IT',
    body: `Bonjour Boh,

Je suis intéressé par votre service de support IT et maintenance.

Pouvez-vous me contacter pour discuter de mes besoins et obtenir un devis personnalisé ?

Merci !`
  },
  
  socialMediaManager: {
    subject: 'Devis Social Media Manager',
    body: `Bonjour Boh,

Je suis intéressé(e) par votre service de Social Media Manager.

Pouvez-vous me contacter pour discuter de ma stratégie de contenu et obtenir un devis personnalisé ?

Merci !`
  },
  
  generalProject: {
    subject: 'Projet Digital Complet',
    body: `Bonjour Boh,

Je suis prêt à démarrer mon projet digital.

Pouvez-vous me contacter pour discuter de mes besoins et objectifs ?

Merci !`
  }
}); 