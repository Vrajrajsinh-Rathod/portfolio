import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '40px' }}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
