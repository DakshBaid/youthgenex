import { motion } from 'framer-motion';

export default function AfterMovies() {
  const movies = [
    { year: "2025", id: "KUlO88KciPs", title: "IDS 2025 After Movie" },
    { year: "2024", id: "VVFfbHWWAUw", title: "IDS 2024 After Movie" },
    { year: "2023", id: "XhHmRZW2Rck", title: "IDS 2023 After Movie" }
  ];

  return (
    <section id="after-movies" style={{ padding: '5rem 0', background: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">IDS After Movies</h2>
          <p className="section-copy" style={{ margin: '1rem auto 0' }}>Relive the memories, the debates, and the massive impact of our past Indore Democratic Summits.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
          {movies.map((movie, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                background: 'var(--soft)',
                padding: '1rem',
                borderRadius: '16px',
                boxShadow: 'var(--shadow)',
                border: '1px solid var(--line)'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 800, textAlign: 'center' }}>Edition {movie.year}</h3>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
                <iframe 
                  src={`https://www.youtube.com/embed/${movie.id}?rel=0`} 
                  title={movie.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
