import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: 'IDS 2026' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.status === 'success') {
        setStatus('Registration Successful!');
        setFormData({ name: '', email: '', phone: '', program: 'IDS 2026' });
      } else {
        setStatus('Failed to register. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error connecting to server.');
    }
  };

  return (
    <section id="register" className="py-16" style={{ background: 'var(--soft)', backgroundImage: 'radial-gradient(var(--line) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
      <div className="container">
        <motion.div 
          className="card" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', padding: '4rem 2rem', background: 'var(--white)', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', borderRadius: '24px' }}
        >
          <p className="eyebrow">IDS 2026 Registration</p>
          <img src="/ids-logo.png" alt="IDS Logo" style={{ height: '80px', objectFit: 'contain', margin: '1rem auto' }} />
          <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2.2rem' }}>Secure Your Spot at the Summit</h2>
          <p className="section-copy" style={{ marginBottom: '2.5rem' }}>
            Ready to enhance your diplomacy, debate, and communication skills? Register now for the upcoming Indore Democratic Summit 2026 and join young leaders from across the state.
          </p>
          
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
            <input required type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ padding: '0.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--line)' }} />
            <input required type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ padding: '0.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--line)' }} />
            <input required type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ padding: '0.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--line)' }} />
            <button type="submit" className="button button-red" style={{ padding: '1rem 2rem', fontSize: '1.1rem', marginTop: '1rem' }}>
              Register Now
            </button>
            {status && <p style={{ color: status.includes('Success') ? 'green' : 'var(--red)', textAlign: 'center', fontWeight: 'bold' }}>{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
