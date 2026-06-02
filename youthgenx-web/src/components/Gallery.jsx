import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryList from '../data/gallery-images.json';

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  
  // Show 9 initially for a perfect 3x3 grid, or all if expanded
  const images = showAll ? galleryList : galleryList.slice(0, 9);

  return (
    <section id="gallery" className="section-padding bg-soft" style={{ paddingBottom: '6rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">Moments of Impact</h2>
          <p className="section-copy" style={{ margin: '1rem auto 0' }}>Glimpses from our events, summits, and initiatives where young leaders come together.</p>
        </div>

        <div className="masonry-gallery">
          <AnimatePresence>
            {images.map((filename, index) => (
              <motion.div 
                key={filename} 
                className="masonry-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
              >
                <img 
                  src={`/gallery/${filename}`} 
                  alt={`YouthGenex Event Highlight ${index + 1}`} 
                  loading="lazy"
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    display: 'block',
                    boxShadow: 'var(--shadow)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {galleryList.length > 9 && (
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="button button-red"
              style={{ padding: '1rem 3rem', fontSize: '1.1rem', cursor: 'pointer' }}
            >
              {showAll ? 'View Less' : 'View More Photos'}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
