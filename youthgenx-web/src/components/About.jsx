import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16" style={{ background: 'var(--soft)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="eyebrow">About Us</p>
            <h2 className="section-title" style={{ fontSize: '2.4rem', marginBottom: '1.5rem' }}>Empowering Young Minds</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              YouthGenex is a youth leadership and civic capability-building organization founded in 2021 with the vision of empowering young minds through leadership, communication, and experiential learning.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              We believe today’s youth are tomorrow’s changemakers. Through conferences, workshops, public speaking training, and civic engagement initiatives, we create platforms where students can learn, lead, and grow with confidence.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="card" style={{ marginBottom: '1.5rem', background: 'var(--white)', borderLeft: '4px solid var(--red)' }}>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>Vision</h3>
              <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>To create a generation of confident, aware, and responsible young leaders who actively contribute towards building a better society.</p>
            </div>
            
            <div className="card" style={{ background: 'var(--white)', borderLeft: '4px solid var(--ink)' }}>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>Mission</h3>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                <li>To empower youth through leadership and communication programs</li>
                <li>To create experiential learning opportunities for students</li>
                <li>To encourage civic awareness and participation among young minds</li>
                <li>To build platforms that promote confidence, collaboration, and innovation</li>
              </ul>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
