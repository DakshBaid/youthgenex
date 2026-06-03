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
  
  const activeIndex = ((rotationIndex % rouletteEvents.length) + rouletteEvents.length) % rouletteEvents.length;
  const currentDuration = rouletteEvents[activeIndex].id === 'ids' ? 15000 : 10000;

  const goToNext = () => {
    setRotationIndex(prev => prev + 1);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const handleManualClick = (clickedIndex) => {
    const currentMod = rotationIndex % rouletteEvents.length;
    // Handle negative modulo correctly
    const normalizedMod = currentMod < 0 ? currentMod + rouletteEvents.length : currentMod;
    
    let diff = clickedIndex - normalizedMod;
    
    // Shortest path calculation
    const half = rouletteEvents.length / 2;
    if (diff > half) {
      diff -= rouletteEvents.length;
    } else if (diff < -half) {
      diff += rouletteEvents.length;
    }
    
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

  const wheelRadius = isMobile ? 260 : 360; 
  const itemRadius = isMobile ? 210 : 300;  
  const logoSize = isMobile ? 55 : 80;

  return (
    <section id="gallery" style={{ 
      background: 'var(--soft)', 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      position: 'relative'
    }}>
      
      {/* LEFT / TOP: The Massive Rotating Wheel (Sticky and perfectly centered vertically) */}
      <div style={{ 
        position: isMobile ? 'relative' : 'sticky',
        top: isMobile ? 0 : 'calc(50vh - 250px)', // Centers the 500px container perfectly vertically
        left: 0,
        width: isMobile ? '100%' : '420px', 
        height: isMobile ? '350px' : '500px',
        zIndex: 10,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          
          {/* DECORATIVE: Slow rotating inner dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: `${wheelRadius * 1.4}px`,
              height: `${wheelRadius * 1.4}px`,
              borderRadius: '50%',
              border: '2px dashed rgba(192,0,26,0.15)',
              left: isMobile ? '50%' : '0px',
              top: isMobile ? '20px' : '50%',
              x: '-50%',
              y: '-50%',
              pointerEvents: 'none'
            }}
          />

          {/* DECORATIVE: Pulsing gradient core */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              width: `${wheelRadius * 0.8}px`,
              height: `${wheelRadius * 0.8}px`,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(192,0,26,0.1) 0%, transparent 70%)',
              left: isMobile ? '50%' : '0px',
              top: isMobile ? '20px' : '50%',
              x: '-50%',
              y: '-50%',
              pointerEvents: 'none'
            }}
          />

          {/* DECORATIVE: Active Event Title inside the wheel's visible arc */}
          <div style={{
            position: 'absolute',
            left: isMobile ? '50%' : '20px',
            right: isMobile ? 'auto' : '160px',
            top: isMobile ? '160px' : '50%',
            transform: isMobile ? 'translate(-50%, -50%)' : 'translateY(-50%)',
            pointerEvents: 'none',
            zIndex: 5,
            textAlign: isMobile ? 'center' : 'right'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h4 style={{ margin: 0, color: 'var(--red)', fontFamily: '"Playfair Display"', fontSize: isMobile ? '1.4rem' : '1.8rem', lineHeight: 1.1 }}>
                  {activeEvent.title}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-end', gap: '6px', marginTop: '0.8rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)' }} />
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Gallery
                  </p>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)' }} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* THE MAIN WHEEL */}
          <motion.div 
            animate={{ rotate: targetRotation }}
            transition={{ type: "spring", stiffness: 45, damping: 14, mass: 1 }} // Smoother, slightly bouncy rotation
            style={{
              position: 'absolute',
              width: `${wheelRadius * 2}px`,
              height: `${wheelRadius * 2}px`,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              left: isMobile ? '50%' : '0px',
              top: isMobile ? '20px' : '50%',
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
                  <motion.div
                    animate={{ rotate: -targetRotation }}
                    transition={{ type: "spring", stiffness: 45, damping: 14, mass: 1 }}
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
                        scale: isActive ? 1.2 : 0.8,
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
