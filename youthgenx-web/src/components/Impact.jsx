import React from 'react';
import { motion } from 'framer-motion';

export default function Impact() {
  return (
    <section className="py-16" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Why Choose YouthGenex</h2>
            <ul style={{ marginTop: '2rem', listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
              {["Impact-Driven Learning", "Student-Centered Approach", "Leadership Development", "Strong Community & Networking", "Experiential Learning"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--red)' }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="eyebrow" style={{ color: '#FFCED5' }}>Impact & Achievements</p>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontFamily: '"Playfair Display"', fontSize: '3.5rem', fontWeight: 900, color: 'var(--white)', lineHeight: 1 }}>10,000+</div>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginTop: '0.5rem' }}>Students Impacted</p>
              
              <div style={{ marginTop: '2.5rem' }}>
                <h4 style={{ margin: '0 0 1rem', fontSize: '1.2rem' }}>Partner Institutions</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'rgba(255,255,255,0.8)', display: 'grid', gap: '0.5rem' }}>
                  <li>Indore Municipal Corporation</li>
                  <li>SVKM’s NMIMS, Indore</li>
                  <li>Choithram North Campus</li>
                  <li>INIFD Indore</li>
                </ul>
              </div>
              <p style={{ marginTop: '1.5rem', fontWeight: 700, color: '#FFCED5' }}>Multiple Flagship Events Conducted</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
