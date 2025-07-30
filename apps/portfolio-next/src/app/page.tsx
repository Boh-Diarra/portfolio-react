import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import EnSavoirPlus from '@/components/EnSavoirPlus';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <EnSavoirPlus />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Team />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
