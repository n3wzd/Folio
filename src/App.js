import HeroSection from './pages/HeroSection.js';
import AboutSection from './pages/AboutSection.js';
import ProjectSection from './pages/ProjectSection.js';
import ContactSection from './pages/ContactSection.js';
import Navigation from './pages/Navigation.js';
import './styles/Common.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
