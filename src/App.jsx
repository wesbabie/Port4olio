import './App.css';
import Hero from './components/hero/hero';
import About from './components/About/about';
import Skills from './components/skills/skills';
import Project from './components/projects/project';
import CTA from './components/Cta/Cta';
function App() {
  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <CTA/>
    </>
  );
}

export default App;
