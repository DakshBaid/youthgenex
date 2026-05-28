import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const categories = ["Authorities", "Students", "School Teachers", "Delegates", "Partners"];
  
  return (
    <section className="py-16" style={{ background: 'var(--soft)' }}>
      <div className="container">
        <div className="section-heading center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title">What People Say</h2>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ 
                background: 'var(--white)', 
                padding: '1rem 2rem', 
                borderRadius: 999, 
                border: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 700,
                color: 'var(--ink)',
                boxShadow: 'var(--shadow)'
              }}
            >
              <MessageSquare size={18} color="var(--red)" />
              {cat}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
