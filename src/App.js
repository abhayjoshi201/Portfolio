import { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Summary from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Cards/Achievements";
import SystemsArchitecture from "./components/SystemsArchitecture";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const DotGrid = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 30px 30px;
`;

const GlowOrb = styled.div`
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.15;
  filter: blur(120px);

  &.orb-1 {
    top: -200px;
    right: -100px;
    background: radial-gradient(circle, #00e5a0, transparent 70%);
  }

  &.orb-2 {
    bottom: 30%;
    left: -200px;
    background: radial-gradient(circle, #7b61ff, transparent 70%);
    opacity: 0.08;
  }
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <DotGrid />
          <GlowOrb className="orb-1" />
          <GlowOrb className="orb-2" />
          <HeroSection />
          <Summary />
          <Experience />
          <Projects />
          <SystemsArchitecture />
          <Skills />
          <Achievements />
          <Education />
          <Philosophy />
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
