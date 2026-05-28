import { useLayoutEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import Projects from '../components/sections/Projects';
import Career from '../components/sections/Career';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import Rain from '../components/effects/Rain';
import { scrollTo } from '../utils/scroll';

const INITIAL_SCROLL_DELAY_MS = 500;

function HomePage() {
  useLayoutEffect(() => {
    const id = window.setTimeout(() => {
      const objectId = window.location.hash.replace('#', '');
      document.documentElement.style.setProperty(
        '--page-height',
        `${document.body.scrollHeight}px`
      );
      scrollTo(objectId);
    }, INITIAL_SCROLL_DELAY_MS);

    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <Rain />
      <Navbar />
      <HeroSection />
      <Projects />
      <Career />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
