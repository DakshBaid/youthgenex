import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.status === 'success') {
        setStatus('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error connecting to server.');
    }
  };

  const handleEmailClick = (e, email, subject, body) => {
    e.preventDefault();
    // Check if user is on mobile via User Agent or Screen Size
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    if (isMobile) {
      // Mobile: Open native mail app flawlessly
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      // Desktop: Open Gmail in a new tab (prevents Outlook from opening)
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    }
  };

  return (
    <footer id="contact" style={{ background: 'var(--ink)', color: 'var(--white)', padding: '5.5rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem' }}>
          
          <div>
            <h2 style={{ fontFamily: '"Playfair Display"', fontSize: '1.8rem', margin: '0 0 1rem' }}>Youth<span style={{ color: 'var(--red)' }}>Genex</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Join the YouthGenex community and become a part of a growing network of young leaders, changemakers, and innovators.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem' }}>Social Media</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="https://www.instagram.com/youthgenex.in/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Youth Genex
              </a>
              <a href="https://www.instagram.com/indoredemocraticsummit/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> IDS
              </a>
              <a href="https://in.linkedin.com/company/youthgenex" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> LinkedIn
              </a>
              <a href="#" onClick={(e) => handleEmailClick(e, 'youthgenex.org@gmail.com', 'Hello YouthGenex Team', 'Hi there,\n\nI was browsing your website and wanted to connect with you regarding...')} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                <Mail size={20} color="var(--red)" /> Youth Genex Email
              </a>
              <a href="#" onClick={(e) => handleEmailClick(e, 'indoredemocraticsummit@gmail.com', 'IDS 2026 Inquiry', 'Hi IDS Team,\n\nI am interested in the Indore Democratic Summit and have a query about...')} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                <Mail size={20} color="var(--red)" /> IDS Email
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem' }}>Contact Us</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1rem' }}>Let’s build impactful experiences together. Connect with us to partner, participate, or learn more.</p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <input required type="text" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ padding: '0.6rem', borderRadius: '4px', border: 'none' }} />
              <input required type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ padding: '0.6rem', borderRadius: '4px', border: 'none' }} />
              <textarea required placeholder="Message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ padding: '0.6rem', borderRadius: '4px', border: 'none', resize: 'vertical' }} rows="3" />
              <button type="submit" className="button button-red" style={{ width: '100%', padding: '0.6rem', border: 'none', cursor: 'pointer' }}>
                <Mail size={18} /> Send Message
              </button>
              {status && <p style={{ color: status.includes('Success') ? 'lightgreen' : '#FFCED5', fontSize: '0.9rem', margin: '0.5rem 0 0' }}>{status}</p>}
            </form>
          </div>

        </div>
        
        <div style={{ textAlign: 'center', paddingTop: '2rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} YouthGenex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
