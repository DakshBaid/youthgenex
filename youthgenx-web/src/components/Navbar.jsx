import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header className="glass-nav" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.7rem', fontWeight: 900, color: 'var(--ink)' }}>
          <img src="/logo.png" alt="YouthGenex Logo" style={{ height: '70px', objectFit: 'contain' }} />
          <span style={{ fontFamily: '"Playfair Display"', fontSize: '1.35rem' }}>Youth<span style={{ color: 'var(--red)' }}>Genex</span></span>
        </a>

        {/* Navigation */}
        <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className={`nav-desktop ${isOpen ? 'nav-mobile-open' : ''}`}>
          {links.map(item => (
            <motion.a 
              key={item.name} 
              href={item.path}
              onClick={() => setIsOpen(false)} 
              whileHover={{ scale: 1.05, backgroundColor: 'var(--red)', color: 'var(--white)' }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                fontWeight: 700, 
                color: 'var(--ink)',
                padding: '0.5rem 1.2rem',
                borderRadius: '99px',
                textDecoration: 'none',
                border: '1px solid transparent',
                transition: 'border-color 0.2s ease'
              }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="/ids"
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontWeight: 800,
              color: 'var(--white)',
              backgroundColor: 'var(--red)',
              padding: '0.7rem 1.5rem',
              borderRadius: '99px',
              textDecoration: 'none',
              marginLeft: '0.5rem',
              boxShadow: '0 4px 15px rgba(192,0,26,0.3)',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              letterSpacing: '0.5px'
            }}
          >
            Indore Democratic Summit
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'none' }}>
          {isOpen ? <X color="var(--ink)" /> : <Menu color="var(--ink)" />}
        </button>

      </div>
    </header>
  );
}
