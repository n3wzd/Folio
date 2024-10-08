import React, { useEffect, useRef } from "react";
import HeroSection from './pages/HeroSection.js';
import AboutSection from './pages/AboutSection.js';
import ProjectSection from './pages/ProjectSection.js';
import ContactSection from './pages/ContactSection.js';
import Navigation from './pages/Navigation.js';
import './styles/Common.css';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleWheel = (event) => {
    event.preventDefault();
    autoScroll(event);
  };

  const autoScroll = (event) => {
    const sections = [heroRef, aboutRef, projectRef, contactRef];
    const componentY = sections.map(ref => ref.current ? ref.current.getBoundingClientRect().top : 0);
    const findPos = () => componentY.findIndex(y => y >= 0) !== -1 
      ? componentY.findIndex(y => y + window.innerHeight / 2 >= 0) 
      : componentY.length - 1;
    const newPos = Math.max(0, Math.min(findPos() + (event.deltaY < 0 ? -1 : 1), componentY.length - 1));
    scrollToSection(sections[newPos]);
  }

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  });

  return (
    <div className="App">
      <Navigation/>
      <div ref={heroRef}>
        <HeroSection/>
      </div>
      <div ref={aboutRef}>
        <AboutSection/>
      </div>
      <div ref={projectRef}>
        <ProjectSection/>
      </div>
      <div ref={contactRef}>
        <ContactSection/>
      </div>
    </div>
  );
}

export default App;
