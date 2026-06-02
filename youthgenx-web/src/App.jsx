import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Events from './components/Events';
import Gallery from './components/Gallery';
import AfterMovies from './components/AfterMovies';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Preloader from './components/Preloader';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Events />
      <Partners />
    </>
  );
}

function GalleryPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Gallery />
      <AfterMovies />
    </div>
  );
}

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
