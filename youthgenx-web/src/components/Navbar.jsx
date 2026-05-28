import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="glass-nav" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#top" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.7rem', fontWeight: 900, color: 'var(--ink)' }}>
          <img src="/logo.png" alt="YouthGenex Logo" style={{ height: '70px', objectFit: 'contain' }} />
          <span style={{ fontFamily: '"Playfair Display"', fontSize: '1.35rem' }}>Youth<span style={{ color: 'var(--red)' }}>Genex</span></span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="nav-desktop">
          {['About', 'Programs', 'Events', 'Contact'].map(item => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
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
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'none' }}>
          {isOpen ? <X color="var(--ink)" /> : <Menu color="var(--ink)" />}
        </button>

      </div>
    </header>
  );
}
