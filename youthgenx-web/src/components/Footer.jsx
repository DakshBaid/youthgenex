import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {

  const handleEmailClick = (e, email, subject, body) => {
    e.preventDefault();
    // Check if user is on a mobile OS via User Agent strictly (to prevent resized desktop windows from triggering mailto)
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem' }}>

          <div style={{ flex: '2 1 500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
              <div style={{ flex: '1 1 250px' }}>
                <h2 style={{ fontFamily: '"Playfair Display"', fontSize: '1.8rem', margin: '0 0 1rem' }}>Youth<span style={{ color: 'var(--red)' }}>Genex</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontSize: '1.1rem' }}>Join the YouthGenex community and become a part of a growing network of young leaders, changemakers, and innovators.</p>
              </div>

              <div style={{ flex: '1 1 200px' }}>
                <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem' }}>Social Media</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <a href="https://www.instagram.com/youthgenex.in/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> YouthGenex
                  </a>
                  <a href="https://www.instagram.com/indoredemocraticsummit/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> Indore Democratic Summit
                  </a>
                  <a href="https://in.linkedin.com/company/youthgenex" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <h4 style={{ color: 'var(--white)', fontSize: '1.8rem', marginBottom: '0.5rem', fontFamily: '"Playfair Display"' }}>Youth<span style={{ color: 'var(--red)' }}>Genex</span> Office</h4>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={20} color="var(--red)" /> 307, The View, 1 Laad Colony, YN Road- Indore (MP)- 452001
              </p>
            </div>
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem' }}>Connect with Us!</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1.5rem' }}>Let’s build impactful experiences together.</p>
            <p> Click below to reach out to our team directly.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#" onClick={(e) => handleEmailClick(e, 'youthgenex.org@gmail.com', 'Hello YouthGenex Team', 'Hi there,\n\nI was browsing your website and wanted to connect with you regarding...')} className="button button-red" style={{ width: '100%', justifyContent: 'flex-start' }}>
                <Mail size={18} /> Email YouthGenex
              </a>
              <a href="#" onClick={(e) => handleEmailClick(e, 'indoredemocraticsummit@gmail.com', 'IDS 2026 Inquiry', 'Hi IDS Team,\n\nI am interested in the Indore Democratic Summit and have a query about...')} className="button button-outline" style={{ width: '100%', justifyContent: 'flex-start', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}>
                <Mail size={18} /> Email IDS Team
              </a>
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} YouthGenex. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
