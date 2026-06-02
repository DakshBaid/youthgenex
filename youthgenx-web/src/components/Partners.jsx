
import { motion } from 'framer-motion';

export default function Partners() {
  const partners = ["Schools", "Universities", "Brands", "NGOs", "Youth Organizations"];
  
  return (
    <section className="py-16" style={{ background: 'var(--soft)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="eyebrow">Collaborations & Partnerships</p>
            <h2 className="section-title">Let's Create Impact Together</h2>
            <p className="section-copy" style={{ marginBottom: '2rem' }}>
              We aim to create impactful partnerships that empower students through leadership, learning, and experiential opportunities. YouthGenex welcomes collaborations.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {partners.map((p, i) => (
                <span key={i} style={{ padding: '0.5rem 1rem', background: 'rgba(192,0,26,0.1)', color: 'var(--red)', borderRadius: 999, fontWeight: 700, fontSize: '0.9rem' }}>
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <img src="/partners-bg.jpg" alt="Partnership and collaboration" style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', width: '100%', height: 'auto' }} />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
