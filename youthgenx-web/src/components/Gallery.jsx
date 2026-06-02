import { motion } from 'framer-motion';

export default function Gallery() {
  // We have 11 images named 1.jpeg to 11.jpeg
  const images = Array.from({ length: 11 }, (_, i) => `/gallery/${i + 1}.jpeg`);

  return (
    <section id="gallery" className="section-padding bg-soft">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">Moments of Impact</h2>
          <p className="section-copy" style={{ margin: '1rem auto 0' }}>Glimpses from our events, summits, and initiatives where young leaders come together.</p>
        </div>

        <div className="masonry-gallery">
          {images.map((src, index) => (
            <motion.div 
              key={index} 
              className="masonry-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img 
                src={src} 
                alt={`YouthGenex Event Highlight ${index + 1}`} 
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
        </div>
      </div>
    </section>
  );
}
