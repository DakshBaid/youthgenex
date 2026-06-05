import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from './SEO';
import galleryData from '../data/gallery-images.json';
import { ArrowLeft } from 'lucide-react';

const eventDetails = {
  'genxmun': {
    title: 'GENxMUN Gallery',
    desc: 'Moments from our Model United Nations platform.',
    images: galleryData.genxmun || []
  },
  'coffee-with-mayor': {
    title: 'Coffee with Mayor Gallery',
    desc: 'Interactive sessions connecting students with policymakers.',
    images: galleryData.cwm || []
  },
  'kho-gaye-hum-kahan': {
    title: 'Kho Gaye Hum Kahan? Gallery',
    desc: 'Open conversations around self-growth and personal identity.',
    images: galleryData.kghk || []
  },
  'about-her': {
    title: 'About Her Gallery',
    desc: 'Celebrating women, leadership, and empowerment.',
    images: galleryData.ah || []
  },
  'ids': {
    title: 'Indore Democratic Summit Gallery',
    desc: 'Moments from Central India\'s premier youth conference.',
    sections: [
      { title: 'IDS 2025', images: galleryData.ids['2025'] || [] },
      { title: 'IDS 2024', images: galleryData.ids['2024'] || [] },
      { title: 'IDS 2023', images: galleryData.ids['2023'] || [] }
    ]
  }
};

export default function EventGalleryPage() {
  const { eventId } = useParams();
  const eventInfo = eventDetails[eventId];
  const [selectedImage, setSelectedImage] = useState(null);

  if (!eventInfo) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '100vh', background: 'var(--soft)' }}>
        <h2>Event not found</h2>
        <Link to="/events" className="button button-red" style={{ marginTop: '2rem' }}>Back to Events</Link>
      </div>
    );
  }

  return (
    <section style={{ paddingTop: '120px', paddingBottom: '6rem', minHeight: '100vh', background: 'var(--soft)' }}>
      <SEO title={eventInfo.title} description={eventInfo.desc} />
      
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/events" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--red)', fontWeight: 600 }}>
            <ArrowLeft size={20} /> Back to Initiatives
          </Link>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', fontFamily: '"Playfair Display"', color: 'var(--ink)', margin: '0 0 1rem' }}>
            {eventInfo.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: 'var(--muted)', fontSize: '1.2rem' }}>
            {eventInfo.desc}
          </motion.p>
        </div>

        {eventInfo.sections ? (
          eventInfo.sections.map((section, secIdx) => (
            section.images.length > 0 && (
              <div key={section.title} style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display"', color: 'var(--ink)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {section.title}
                  <div style={{ height: '2px', background: 'var(--line)', flexGrow: 1 }} />
                </h2>
                <div className="masonry-gallery">
                  <AnimatePresence>
                    {section.images.map((filename, index) => (
                      <motion.div 
                        key={filename} 
                        className="masonry-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
                        onClick={() => setSelectedImage(`/gallery/${filename}`)}
                      >
                        <img 
                          src={`/gallery/${filename}`} 
                          alt={`${section.title} - ${index + 1}`} 
                          loading="lazy"
                          style={{
                            width: '100%',
                            borderRadius: '12px',
                            display: 'block'
                          }}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )
          ))
        ) : (
          <div className="masonry-gallery">
            <AnimatePresence>
              {eventInfo.images.map((filename, index) => (
                <motion.div 
                  key={filename} 
                  className="masonry-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
                  onClick={() => setSelectedImage(`/gallery/${filename}`)}
                >
                  <img 
                    src={`/gallery/${filename}`} 
                    alt={`${eventInfo.title} - ${index + 1}`} 
                    loading="lazy"
                    style={{
                      width: '100%',
                      borderRadius: '12px',
                      display: 'block'
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(5px)',
              zIndex: 99999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
              cursor: 'zoom-out'
            }}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage}
              alt="Zoomed highlight"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
