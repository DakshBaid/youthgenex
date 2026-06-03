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
const CircularProgress = ({ progress, size }) => {
  const radius = (size / 2) + 6; 
  const center = (size / 2) + 10;
  const svgSize = size + 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-90deg)', width: `${svgSize}px`, height: `${svgSize}px`, pointerEvents: 'none' }}>
      <circle
        cx={center} cy={center} r={radius}
        fill="transparent"
        stroke="rgba(192,0,26,0.15)"
        strokeWidth="3"
      />
      <circle
        cx={center} cy={center} r={radius}
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
  const [rotationIndex, setRotationIndex] = useState(0);
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
  
  const activeIndex = rotationIndex % rouletteEvents.length;
  const currentDuration = rouletteEvents[activeIndex].id === 'ids' ? 15000 : 10000;

  const goToNext = () => {
    setRotationIndex(prev => prev + 1);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const handleManualClick = (clickedIndex) => {
    // Determine shortest path to clicked index to maintain forward momentum if possible
    const currentMod = rotationIndex % rouletteEvents.length;
    let diff = clickedIndex - currentMod;
    if (diff < 0) diff += rouletteEvents.length; // Always rotate forward
    
    setRotationIndex(prev => prev + diff);
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
  }, [rotationIndex, currentDuration]);

  const activeEvent = rouletteEvents[activeIndex];
  
  const itemsCount = rouletteEvents.length;
  const anglePerItem = 360 / itemsCount;
  
  const targetRotation = isMobile 
    ? (90 - rotationIndex * anglePerItem) 
    : (-rotationIndex * anglePerItem);

  const wheelRadius = isMobile ? 220 : 300; 
  const itemRadius = isMobile ? 180 : 250;  
  const logoSize = isMobile ? 50 : 60;

  return (
    <section id="gallery" style={{ 
      background: 'var(--soft)', 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      position: 'relative'
    }}>
      
      {/* LEFT / TOP: The Massive Rotating Wheel (Sticky) */}
      <div style={{ 
        position: isMobile ? 'relative' : 'sticky',
        top: isMobile ? 0 : '120px', 
        left: 0,
        width: isMobile ? '100%' : '350px', 
        height: isMobile ? '240px' : '500px',
        zIndex: 10,
        overflow: 'hidden',
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
              // Glassmorphism beautiful wheel
              background: 'rgba(255,255,255,0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              left: isMobile ? '50%' : '0px',
              top: isMobile ? '0px' : '50%',
              x: '-50%',
              y: '-50%'
            }}
          >
            {rouletteEvents.map((ev, i) => {
              const angleDeg = i * anglePerItem;
              const angleRad = angleDeg * (Math.PI / 180);
              
              const x = wheelRadius + itemRadius * Math.cos(angleRad) - (logoSize/2); 
              const y = wheelRadius + itemRadius * Math.sin(angleRad) - (logoSize/2);
              
              const isActive = i === activeIndex;

              return (
                <div 
                  key={ev.id}
                  style={{
                    position: 'absolute',
                    left: `${x}px`,
                    top: `${y}px`,
                    width: `${logoSize}px`,
                    height: `${logoSize}px`,
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
                    {isActive && <CircularProgress progress={progress} size={logoSize} />}
                    
                    <motion.div
                      animate={{ 
                        scale: isActive ? 1.15 : 0.85,
                        opacity: isActive ? 1 : 0.6,
                        boxShadow: isActive ? '0 10px 25px rgba(192,0,26,0.3)' : '0 5px 15px rgba(0,0,0,0.08)'
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: '#FFF',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: isActive ? '2px solid var(--red)' : '2px solid #FFF'
                      }}
                    >
                      <img src={ev.icon} alt={ev.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>

                    {/* Show title dynamically near the active logo */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: isMobile ? 0 : -10, y: isMobile ? -10 : 0 }}
                          animate={{ opacity: 1, x: isMobile ? 0 : (logoSize + 15), y: isMobile ? (logoSize + 15) : 0 }}
                          exit={{ opacity: 0 }}
                          style={{
                            position: 'absolute',
                            whiteSpace: 'nowrap',
                            background: 'rgba(255,255,255,0.95)',
                            padding: '0.4rem 1rem',
                            borderRadius: '30px',
                            boxShadow: 'var(--shadow)',
                            fontFamily: '"Playfair Display"',
                            fontSize: '1.1rem',
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

      {/* RIGHT / BOTTOM: Natural Scroll Content Area */}
      <div style={{ 
        flex: 1, 
        padding: isMobile ? '1rem' : '3rem 4rem',
        paddingTop: isMobile ? '1rem' : '120px',
        paddingBottom: '6rem'
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

        </div>
      </div>

    </section>
  );
}
