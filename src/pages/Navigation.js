import React, { useEffect, useState } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('hero-section');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? setIsVisible(true) : setIsVisible(false)
      }, {
        threshold: 0.1,
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <nav className={`navigation ${isVisible ? 'visible' : ''}`}>
      <ul>
        <li><a href="#hero-section">Intro</a></li>
        <li><a href="#about-section">About</a></li>
        <li><a href="#project-section">Project</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
