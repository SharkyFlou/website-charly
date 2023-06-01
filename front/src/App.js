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


function App() {
    const handleClickScroll = (name) => {
      const element = document.getElementById(name);
      if (element) {
          const offsetTop = element.offsetTop;
          const scrollPosition = offsetTop - 60;
          window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  };
  return (
    <>
      <Router>
        <Navbar scrollFunc={handleClickScroll}/>
        <HeroSection scrollFunc={handleClickScroll}/>
        <Projects />
        <Career />
        <Skills />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
