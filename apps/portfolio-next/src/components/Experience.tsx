import Timeline from './Timeline';
import CertificationBadges from './CertificationBadges';
import { professionalExperience, certifications } from '../data/experiences';

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
      <CertificationBadges />
    </section>
  );
}
