import type { Metadata } from 'next';
import CompetencesClient from '@/components/CompetencesClient';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Compétences & formations',
  description:
    "Compétences techniques de Boh DIARRA, développeur fullstack & WordPress à Bamako : frontend, backend, CMS, IT Support & Admin, IA & Cloud (AWS) et formations en cours.",
  alternates: {
    canonical: '/competences',
  },
};

export default function CompetencesPage() {
  return (
    <>
      <CompetencesClient />
      <Footer />
      <ScrollToTop />
    </>
  );
} 