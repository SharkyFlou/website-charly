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
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
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
