import React, { useEffect, useRef } from "react";
import PreloadResources from './pages/Preload.js';
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
    const firstPositiveIndex = componentY.findIndex(n => n > 0);
    const idxP = firstPositiveIndex !== -1 ? firstPositiveIndex : componentY.length;
    const firstNegativeIndex = componentY.findLastIndex(n => n < 0);
    const idxN = firstNegativeIndex !== -1 ? firstNegativeIndex : 0;
    const newPos = Math.max(0, Math.min((event.deltaY < 0 ? idxN : idxP), componentY.length - 1));
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
      <PreloadResources/>
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
