import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Globe, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact-page" className="bg-soft" style={{ paddingTop: '100px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ paddingBottom: '4rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            background: 'var(--white)', 
            borderRadius: '24px', 
            boxShadow: 'var(--shadow)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            overflow: 'hidden'
          }}
        >
          {/* Left Side: Contact Form UI */}
          <div style={{ padding: '4rem 3rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--ink)', marginBottom: '1rem' }}>Let's Talk</h1>
            <p style={{ color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Whether you want to partner with us, register for an event, or just say hello, our team is always ready to connect.
            </p>

            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--ink)' }}>Full Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--line)', outline: 'none', background: 'var(--soft)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--ink)' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--line)', outline: 'none', background: 'var(--soft)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--ink)' }}>Message</label>
                <textarea rows="4" placeholder="How can we help?" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--line)', outline: 'none', background: 'var(--soft)', resize: 'none' }}></textarea>
              </div>
              <button className="button button-red" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '2rem' }}>Contact Information</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <MapPin size={28} color="var(--red)" />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>Headquarters</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Indore, Madhya Pradesh<br/>India</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <Mail size={28} color="var(--red)" />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>Email Us</h4>
                    <a href="mailto:youthgenex.org@gmail.com" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: '0.3rem' }}>youthgenex.org@gmail.com</a>
                    <a href="mailto:indoredemocraticsummit@gmail.com" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>indoredemocraticsummit@gmail.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <Phone size={28} color="var(--red)" />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>Call Us</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>+91 (Contact Number Here)</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '4rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Follow Our Journey</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ width: 45, height: 45, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', transition: 'background 0.3s' }} onMouseOver={e=>e.currentTarget.style.background='var(--red)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                  <Globe size={20} />
                </a>
                <a href="#" style={{ width: 45, height: 45, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', transition: 'background 0.3s' }} onMouseOver={e=>e.currentTarget.style.background='var(--red)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
