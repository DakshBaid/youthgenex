import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EventDetail() {
  const { eventId } = useParams();

  // Temporary mock data. You can expand this or move it to a JSON file later.
  const eventData = {
    ids: {
      title: "Indore Democratic Summit",
      subtitle: "The Flagship Event",
      description: "A premier platform for young leaders to engage in diplomatic discourse, policy-making, and impactful debates.",
      date: "July 2023",
      images: [] // Placeholder for specific event images
    },
    genxmun: {
      title: "GENxMUN",
      subtitle: "Model United Nations",
      description: "Fostering global awareness and diplomatic skills through simulated United Nations committees.",
      date: "Upcoming",
      images: []
    }
  };

  const data = eventData[eventId] || { title: "Event Not Found", description: "" };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--soft)' }}>
      
      {/* Hero Section */}
      <section style={{ background: 'var(--ink)', color: 'var(--white)', padding: '6rem 0', position: 'relative' }}>
        <div className="container">
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--red)', textDecoration: 'none', fontWeight: 600, marginBottom: '2rem' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '3.5rem', fontWeight: 900, fontFamily: '"Playfair Display"', margin: 0 }}
          >
            {data.title}
          </motion.h1>
          {data.subtitle && <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>{data.subtitle}</p>}
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ background: 'var(--white)', padding: '3rem', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>About the Event</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', marginBottom: '2rem' }}>
              {data.description}
            </p>
            {data.date && <p style={{ fontWeight: 700, color: 'var(--red)' }}>Date: {data.date}</p>}
          </div>

          {/* Placeholder for Event Images */}
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2rem', textAlign: 'center' }}>Event Highlights</h3>
            {data.images.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--white)', borderRadius: '16px', border: '2px dashed var(--line)' }}>
                <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Event images will be uploaded here soon.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {/* Map over data.images here later */}
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
