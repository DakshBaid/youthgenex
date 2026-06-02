import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { startBackgroundMusic } from '../utils/sound';

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    startBackgroundMusic();
    setIsVisible(false);
    if (onComplete) setTimeout(onComplete, 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          onClick={handleEnter}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--white)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <motion.img 
            src="/logo.jpeg" 
            alt="YouthGenex Loading..."
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ height: '220px', objectFit: 'contain', marginBottom: '1.5rem' }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontFamily: '"Playfair Display"', fontSize: '2.5rem', fontWeight: 900, color: 'var(--ink)', marginBottom: '3rem' }}
          >
            Youth<span style={{ color: 'var(--red)' }}>Genex</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ fontSize: '1rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}
          >
            Click to enter
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
