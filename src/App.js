import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavbarFile from './Component/NavbarFile';
import Home from './Component/Home';
import About from './Component/About';
import Resume from './Component/Resume';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {

  return (
    <>
      <NavbarFile />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
