import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Education from './components/education/Education';


const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
