import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact-page" className="section-padding bg-soft" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', background: 'var(--white)', padding: '4rem 2rem', borderRadius: '16px', boxShadow: 'var(--shadow)' }}
        >
          <h1 className="hero-h1" style={{ fontSize: '3rem', color: 'var(--ink)' }}>Wanna Connect?</h1>
          <p className="section-copy" style={{ margin: '1.5rem auto 3rem', maxWidth: '600px' }}>
            Whether you want to partner with us, register for an event, or just say hello, our team is always ready to talk.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=youthgenex.org@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-red"
              style={{ width: '100%', justifyContent: 'center', padding: '1.2rem', fontSize: '1.1rem' }}
            >
              Email YouthGenex
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=indoredemocraticsummit@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-light"
              style={{ width: '100%', justifyContent: 'center', padding: '1.2rem', fontSize: '1.1rem', background: '#f5f5f5', color: 'var(--ink)' }}
            >
              Email IDS Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
