
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" style={{
      minHeight: '80svh',
      padding: '8.25rem 0 4rem',
      display: 'grid',
      alignItems: 'center',
      color: 'var(--white)',
      background: 'linear-gradient(90deg, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.76) 45%, rgba(192,0,26,0.22) 100%), url("https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1800&q=82") center/cover no-repeat, var(--ink)',
      position: 'relative'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 840 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.4rem', fontWeight: 800, color: 'rgba(255,255,255,0.9)' }}>
            <span style={{ width: 42, height: 3, borderRadius: 999, background: 'var(--red)' }}></span>
            Est. 2021 in Indore, Madhya Pradesh
          </div>
          <h1 className="hero-h1" style={{ fontFamily: '"Playfair Display"', fontSize: '4.55rem', lineHeight: 1.04, margin: 0 }}>
            YouthGenex builds young leaders who can <span style={{ color: '#FFCED5' }}>speak, think and act</span>.
          </h1>
          <p style={{ maxWidth: 680, margin: '1.35rem 0 0', color: 'rgba(255,255,255,0.82)', fontSize: '1.13rem', lineHeight: 1.76 }}>
            A youth leadership and civic capability-building organization founded with the vision of empowering young minds through leadership, communication, and experiential learning. We believe today’s youth are tomorrow’s changemakers.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginTop: '2rem' }}>
            <a className="button button-red" href="#programs">Explore Programs</a>
            <a className="button button-light" href="#contact">Contact Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
