import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from './SEO';
import galleryList from '../data/gallery-images.json';
import { ArrowLeft } from 'lucide-react';

const eventDetails = {
  'genxmun': {
    title: 'GENxMUN Gallery',
    desc: 'Moments from our Model United Nations platform.',
    images: galleryList.slice(0, 7)
  },
  'coffee-with-mayor': {
    title: 'Coffee with Mayor Gallery',
    desc: 'Interactive sessions connecting students with policymakers.',
    images: galleryList.slice(7, 14)
  },
  'kho-gaye-hum-kahan': {
    title: 'Kho Gaye Hum Kahan? Gallery',
    desc: 'Open conversations around self-growth and personal identity.',
    images: galleryList.slice(14, 21)
  },
  'about-her': {
    title: 'About Her Gallery',
    desc: 'Celebrating women, leadership, and empowerment.',
    images: galleryList.slice(21, 28)
  }
};

export default function EventGalleryPage() {
  const { eventId } = useParams();
  const eventInfo = eventDetails[eventId];

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

        <div className="masonry-gallery">
          <AnimatePresence>
            {eventInfo.images.map((filename, index) => (
              <motion.div 
                key={filename} 
                className="masonry-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
              >
                <img 
                  src={`/gallery/${filename}`} 
                  alt={`${eventInfo.title} - ${index + 1}`} 
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
      </div>
    </section>
  );
}
