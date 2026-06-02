import { motion } from 'framer-motion';

export default function ProgramsPage() {
  return (
    <section className="bg-soft" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ background: 'var(--white)', padding: '4rem', borderRadius: '24px', boxShadow: 'var(--shadow)', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontFamily: '"Playfair Display"', color: 'var(--ink)' }}>Our Programs</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.2rem', marginTop: '1.5rem' }}>Detailed content coming soon.</p>
        </motion.div>
      </div>
    </section>
  );
}
