import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, MapPin } from 'lucide-react';
import SEO from './SEO';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Rotate every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return <div style={{ height: '300px', background: 'var(--line)', borderRadius: '12px' }} />;

  return (
    <div style={{ position: 'relative', width: '100%', height: '350px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
          alt="IDS Event Slider"
        />
      </AnimatePresence>
    </div>
  );
};

export default function IDSPage() {
  const data2025 = ['/gallery/1.JPG', '/gallery/2.JPG', '/gallery/3.JPG'];
  const data2024 = ['/gallery/4.JPG', '/gallery/5.JPG', '/gallery/6.JPG'];
  const data2023 = ['/gallery/7.JPG', '/gallery/8.JPG', '/gallery/9.JPG'];

  return (
    <div style={{ paddingTop: '80px', background: 'var(--soft)', minHeight: '100vh', paddingBottom: '6rem', overflowX: 'hidden' }}>
      <SEO title="Indore Democratic Summit" description="A premier platform for young minds to engage in diplomatic discourse, civic awareness, and impactful debates. Bringing together youth from across the nation to shape the future." />

      {/* Header */}
      <section style={{ padding: '6rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 0 1.5rem' }}>
            <img src="/ids-logo.png" alt="IDS Logo" style={{ height: '180px', marginBottom: '1rem', objectFit: 'contain' }} />
            <h2 style={{ color: 'var(--red)', fontWeight: 900, fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
              Indore Democratic Summit
            </h2>
          </motion.div>
          <motion.h1
            className="ids-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontWeight: 900, fontFamily: '"Playfair Display"', color: 'var(--ink)', margin: '0 0 1.5rem', lineHeight: 1.1 }}
          >
            Empowering the Next Generation<br />of Leaders and Policymakers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'var(--muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, textAlign: 'justify' }}
          >
            A premier platform for young minds to engage in diplomatic discourse, civic awareness, and impactful debates. Bringing together youth from across the nation to shape the future.
          </motion.p>
        </div>
      </section>

      {/* 2026 Section */}
      <section className="container" style={{ marginBottom: '5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: 'var(--ink)', color: 'var(--white)', padding: '4rem', borderRadius: '24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display"', marginBottom: '1rem' }}>IDS 2026: Coming Soon</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Get ready for our biggest and most impactful edition yet. Stay tuned for dates, venue, and delegate registration details.
          </p>
          <button className="button button-red" style={{ gap: '0.8rem', padding: '1rem 2rem', fontSize: '1.1rem' }}>
            <FileText size={20} /> Download Brochure (Soon)
          </button>
        </motion.div>
      </section>

      {/* 2025 Section */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display"', color: 'var(--ink)', margin: 0 }}>IDS 2025</h2>
          <div style={{ height: '2px', background: 'var(--line)', flexGrow: 1 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <ImageSlider images={data2025} />
          </div>
          <div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/KUlO88KciPs"
                title="IDS 2025 AfterMovie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 600, color: 'var(--ink)' }}>Watch the Official AfterMovie</p>
          </div>
        </div>
      </section>

      {/* 2024 Section */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexDirection: 'row-reverse' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display"', color: 'var(--ink)', margin: 0 }}>IDS 2024</h2>
          <div style={{ height: '2px', background: 'var(--line)', flexGrow: 1 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div style={{ order: 2 }}>
            <ImageSlider images={data2024} />
          </div>
          <div style={{ order: 1 }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/VVFfbHWWAUw"
                title="IDS 2024 AfterMovie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 600, color: 'var(--ink)' }}>Watch the Official AfterMovie</p>
          </div>
        </div>
      </section>

      {/* 2023 Section */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display"', color: 'var(--ink)', margin: 0 }}>IDS 2023</h2>
          <div style={{ height: '2px', background: 'var(--line)', flexGrow: 1 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <ImageSlider images={data2023} />
          </div>
          <div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/XhHmRZW2Rck"
                title="IDS 2023 AfterMovie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 600, color: 'var(--ink)' }}>Watch the Official AfterMovie</p>
          </div>
        </div>
      </section>

      <style>{`
        .ids-hero-title { font-size: 4rem; }
        @media (max-width: 768px) {
          .ids-hero-title { font-size: 2.5rem; }
          section { padding: 3rem 0 !important; }
        }
      `}</style>
    </div>
  );
}
