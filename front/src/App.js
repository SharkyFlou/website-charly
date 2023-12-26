import React from 'react';
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
import { withTranslation  } from 'react-i18next';

function App({t}) {
    const handleClickScroll = (idName) => {
      if (!idName || typeof idName != 'string') {
        return;
      }
      const element = document.getElementById(idName);
      if (element) {
          const offsetTop = element.offsetTop;
          const scrollPosition = offsetTop - 10;
          window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
          //wait 0.1s, very bad solution, but it works : fix a problem when it
          // stop scrolling because of the navbar hiding
          setTimeout(() => {
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
          }, 100);

      } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  };
  return (
    <>
      <Router>
        <Rain/>
        <Navbar scrollFunc={handleClickScroll}  t={t}/>
        <HeroSection scrollFunc={handleClickScroll}  t={t}/>
        <Projects t={t} />
        <Career  t={t}/>
        <Skills  t={t}/>
        <Contact  t={t}/>
        <Footer  t={t}/>
      </Router>
    </>
  );
}

export default withTranslation()(App);
