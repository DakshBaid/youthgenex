import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryList from '../data/gallery-images.json';
import AfterMovies from './AfterMovies';

const rouletteEvents = [
  { id: 'genxmun', title: 'GENxMUN', icon: '/gxm-logo.png', images: galleryList.slice(0, 7) },
  { id: 'ids', title: 'Indore Democratic Summit', icon: '/ids-logo.png', images: galleryList.slice(28, 36) },
  { id: 'cwm', title: 'Coffee with Mayor', icon: '/cwm-logo.png', images: galleryList.slice(7, 14) },
  { id: 'kghk', title: 'Kho Gaye Hum Kahan?', icon: '/kghk-logo.png', images: galleryList.slice(14, 21) },
  { id: 'ah', title: 'About Her', icon: '/ah-logo.png', images: galleryList.slice(21, 28) }
];

// Circular progress SVG that wraps around the active logo
const CircularProgress = ({ progress }) => {
  const radius = 48; // Slightly larger than the 40px logo radius
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-90deg)', width: '100px', height: '100px', pointerEvents: 'none' }}>
      <circle
        cx="50" cy="50" r={radius}
        fill="transparent"
        stroke="rgba(192,0,26,0.15)"
        strokeWidth="3"
      />
      <circle
        cx="50" cy="50" r={radius}
        fill="transparent"
        stroke="var(--red)"
        strokeWidth="3"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
      />
    </svg>
  );
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const currentDuration = rouletteEvents[activeIndex].id === 'ids' ? 15000 : 10000;

  const goToNext = () => {
    setActiveIndex(prev => (prev + 1) % rouletteEvents.length);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const handleManualClick = (index) => {
    setActiveIndex(index);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  useEffect(() => {
    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      const newProgress = Math.min((elapsed / currentDuration) * 100, 100);
      setProgress(newProgress);

      if (elapsed >= currentDuration) {
        goToNext();
      } else {
        timerRef.current = requestAnimationFrame(updateProgress);
      }
    };

    timerRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [activeIndex, currentDuration]);

  const activeEvent = rouletteEvents[activeIndex];
  
  // Angle calculations for the massive wheel
  const itemsCount = rouletteEvents.length;
  const anglePerItem = 360 / itemsCount;
  
  // For Desktop: Active item is at 0 degrees (3 o'clock). The wheel is on the left (-X).
  // For Mobile: Active item is at 90 degrees (6 o'clock). The wheel is on the top (-Y).
  const targetRotation = isMobile 
    ? (90 - activeIndex * anglePerItem) 
    : (-activeIndex * anglePerItem);

  const wheelRadius = isMobile ? 300 : 400; // Size of the massive circle
  const itemRadius = isMobile ? 260 : 340;  // Distance of logos from the center of the massive circle

  return (
    <section id="gallery" style={{ 
      background: 'var(--soft)', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      overflow: 'hidden'
    }}>
      
      {/* LEFT / TOP: The Massive Rotating Wheel */}
      <div style={{ 
        position: isMobile ? 'relative' : 'fixed',
        left: 0, 
        top: isMobile ? 0 : '72px', // below navbar
        width: isMobile ? '100%' : '400px', 
        height: isMobile ? '280px' : 'calc(100vh - 72px)',
        zIndex: 10,
        overflow: 'hidden',
        borderRight: isMobile ? 'none' : '1px solid rgba(0,0,0,0.05)',
        borderBottom: isMobile ? '1px solid rgba(0,0,0,0.05)' : 'none',
        background: 'var(--white)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          
          <motion.div 
            animate={{ rotate: targetRotation }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            style={{
              position: 'absolute',
              width: `${wheelRadius * 2}px`,
              height: `${wheelRadius * 2}px`,
              borderRadius: '50%',
              border: '1px dashed rgba(0,0,0,0.1)',
              // Position the massive circle so its center is exactly on the left edge (desktop) or top edge (mobile)
              left: isMobile ? '50%' : '0px',
              top: isMobile ? '0px' : '50%',
              x: '-50%',
              y: '-50%'
            }}
          >
            {rouletteEvents.map((ev, i) => {
              const angleDeg = i * anglePerItem;
              const angleRad = angleDeg * (Math.PI / 180);
              
              const x = wheelRadius + itemRadius * Math.cos(angleRad) - 40; // 40 is half of logo size
              const y = wheelRadius + itemRadius * Math.sin(angleRad) - 40;
              
              const isActive = i === activeIndex;

              return (
                <div 
                  key={ev.id}
                  style={{
                    position: 'absolute',
                    left: `${x}px`,
                    top: `${y}px`,
                    width: '80px',
                    height: '80px',
                  }}
                >
                  {/* Counter-rotate the logos so they always stay perfectly upright */}
                  <motion.div
                    animate={{ rotate: -targetRotation }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onClick={() => handleManualClick(i)}
                  >
                    {isActive && <CircularProgress progress={progress} />}
                    
                    <motion.div
                      animate={{ 
                        scale: isActive ? 1.1 : 0.8,
                        opacity: isActive ? 1 : 0.5,
                        boxShadow: isActive ? '0 10px 25px rgba(192,0,26,0.3)' : '0 5px 10px rgba(0,0,0,0.1)'
                      }}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: '#FFF',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: isActive ? '2px solid var(--red)' : '1px solid rgba(0,0,0,0.1)'
                      }}
                    >
                      <img src={ev.icon} alt={ev.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>

                    {/* Show title dynamically near the active logo */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: isMobile ? 0 : -20, y: isMobile ? -20 : 0 }}
                          animate={{ opacity: 1, x: isMobile ? 0 : 70, y: isMobile ? 70 : 0 }}
                          exit={{ opacity: 0 }}
                          style={{
                            position: 'absolute',
                            whiteSpace: 'nowrap',
                            background: 'rgba(255,255,255,0.95)',
                            padding: '0.5rem 1rem',
                            borderRadius: '30px',
                            boxShadow: 'var(--shadow)',
                            fontFamily: '"Playfair Display"',
                            fontSize: '1.2rem',
                            color: 'var(--red)',
                            fontWeight: 700,
                            pointerEvents: 'none',
                            zIndex: 100
                          }}
                        >
                          {ev.title}
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>

      {/* RIGHT / BOTTOM: Scrollable Content Area */}
      <div style={{ 
        flex: 1, 
        marginLeft: isMobile ? 0 : '400px', // Push content past the fixed left bar
        padding: isMobile ? '2rem 1rem' : '4rem',
        overflowY: 'auto',
        height: isMobile ? 'auto' : 'calc(100vh - 72px)',
        paddingTop: isMobile ? '2rem' : '100px'
      }}>
        
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <motion.div 
            key={activeEvent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="masonry-gallery"
          >
            {activeEvent.images.map((filename, idx) => (
              <div key={filename} className="masonry-item">
                <img 
                  src={`/gallery/${filename}`} 
                  alt={`${activeEvent.title} highlight ${idx + 1}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow)',
                    objectFit: 'cover'
                  }}
                />
              </div>
            ))}
          </motion.div>

          {activeEvent.id === 'ids' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ marginTop: '4rem' }}
            >
              <AfterMovies />
            </motion.div>
          )}

          <div style={{ height: '4rem' }} /> {/* Spacer at bottom */}
        </div>

      </div>

    </section>
  );
}
