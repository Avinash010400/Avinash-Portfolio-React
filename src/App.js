import React from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoTotop from './components/GoTotop';

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <GoTotop />
      <Footer />
      <SocialLinks />
    </div>
  )
}

export default App
