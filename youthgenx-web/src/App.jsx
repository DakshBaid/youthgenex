import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Events from './components/Events';
import Register from './components/Register';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Preloader from './components/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Events />
        <Register />
        <Partners />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
