import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
