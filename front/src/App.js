import { useLayoutEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Career from './components/Career';
import Rain from './components/Rain';
import { scrollTo } from './components/Scroll';

const INITIAL_SCROLL_DELAY_MS = 500;

function App() {
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
    <Router>
      <Rain />
      <Navbar />
      <HeroSection />
      <Projects />
      <Career />
      <Skills />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
