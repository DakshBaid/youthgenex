import React from 'react';
import { motion } from 'framer-motion';

export default function Impact() {
  return (
    <section className="py-16" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Why Choose YouthGenex</h2>
            <ul style={{ marginTop: '2.5rem', listStyle: 'none', padding: 0, display: 'grid', gap: '2.5rem' }}>
              {["Impact-Driven Learning", "Student-Centered Approach", "Leadership Development", "Strong Community & Networking", "Experiential Learning"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: '1.55rem', fontWeight: 500 }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }} />
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
                  {[
                    { name: 'Indore Municipal Corp.', img: '/imc.png' },
                    { name: "SVKM's NMIMS", img: '/nmims.png' },
                    { name: 'Choithram School', img: '/choithram.png' },
                    { name: 'INIFD Indore', img: '/inifd.png' }
                  ].map((partner, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0,0,0,0.2)', padding: '0.8rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ width: 64, height: 64, borderRadius: '8px', background: '#fff', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                        <img 
                          src={partner.img} 
                          alt={partner.name} 
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                          onError={(e) => { 
                            e.target.style.display = 'none'; 
                            e.target.nextSibling.style.display = 'block'; 
                          }} 
                        />
                        <span style={{ display: 'none', color: 'var(--ink)', fontWeight: 900, fontSize: '1.1rem' }}>
                          {partner.name.split(' ').map(w => w[0]).join('').substring(0, 3)}
                        </span>
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3 }}>{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ marginTop: '1.5rem', fontWeight: 700, color: '#FFCED5' }}>Multiple Flagship Events Conducted</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
