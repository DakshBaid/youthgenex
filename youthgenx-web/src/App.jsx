import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Events from './components/Events';
import Gallery from './components/Gallery';
import AfterMovies from './components/AfterMovies';
import Partners from './components/Partners';
import AboutPage from './components/AboutPage';
import IDSPage from './components/IDSPage';
import EventsPage from './components/EventsPage';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Preloader from './components/Preloader';
import SEO from './components/SEO';
import { motion, useScroll, useSpring } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '4px',
        background: 'var(--red)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 5000
      }}
    />
  );
}

function Home() {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <About />
      <Impact />
      <Events />
      <Partners />
    </>
  );
}

function GalleryPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <SEO title="Gallery" description="Explore the vibrant journey of YouthGenex through our gallery and after-movies." />
      <Gallery />
      <AfterMovies />
    </div>
  );
}

function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ids" element={<IDSPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
