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
import { withTranslation } from 'react-i18next';
import { useLayoutEffect } from 'react';
import { scrollTo } from './components/Scroll';


function App({ t }) {
  useLayoutEffect(() => {
    const scrollToSomething = () => {
      setTimeout(() => {
        const objectId = window.location.hash.replace('#', '');
        console.log('objectId', objectId);
        scrollTo(objectId);
      }, 100); 
    };

    scrollToSomething();
  }, []);


  return (
    <>
      <Router>
        <Rain />
        <Navbar t={t} />
        <HeroSection t={t} />
        <Projects t={t} />
        <Career t={t} />
        <Skills t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </Router>
    </>
  );
}

export default withTranslation()(App);
