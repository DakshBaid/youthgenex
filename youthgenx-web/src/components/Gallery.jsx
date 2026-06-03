import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryList from '../data/gallery-images.json';
import AfterMovies from './AfterMovies';

const rouletteEvents = [
  { id: 'genxmun', title: 'GENxMUN', images: galleryList.slice(0, 7) },
  { id: 'ids', title: 'Indore Democratic Summit', images: galleryList.slice(28, 36) },
  { id: 'cwm', title: 'Coffee with Mayor', images: galleryList.slice(7, 14) },
  { id: 'kghk', title: 'Kho Gaye Hum Kahan?', images: galleryList.slice(14, 21) },
  { id: 'ah', title: 'About Her', images: galleryList.slice(21, 28) }
];

// Circular progress SVG
const CircularProgress = ({ progress, isActive }) => {
  if (!isActive) return null;
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg style={{ position: 'absolute', top: '50%', left: '-40px', transform: 'translateY(-50%) rotate(-90deg)', width: '60px', height: '60px', pointerEvents: 'none' }}>
      <circle
        cx="30" cy="30" r={radius}
        fill="transparent"
        stroke="rgba(192,0,26,0.1)"
        strokeWidth="4"
      />
      <circle
        cx="30" cy="30" r={radius}
        fill="transparent"
        stroke="var(--red)"
        strokeWidth="4"
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
    // Animation loop for progress bar
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
  }, [activeIndex, currentDuration]); // Re-run when index changes

  const activeEvent = rouletteEvents[activeIndex];

  // Calculate positions for Roulette (Previous, Current, Next)
  const getVisibleEvents = () => {
    const prev = (activeIndex - 1 + rouletteEvents.length) % rouletteEvents.length;
    const next = (activeIndex + 1) % rouletteEvents.length;
    return [
      { ...rouletteEvents[prev], pos: -1, origIndex: prev },
      { ...rouletteEvents[activeIndex], pos: 0, origIndex: activeIndex },
      { ...rouletteEvents[next], pos: 1, origIndex: next }
    ];
  };

  const visibleEvents = getVisibleEvents();

  return (
    <section id="gallery" className="section-padding bg-soft" style={{ paddingBottom: '6rem', overflow: 'hidden' }}>
      <div className="container">
        
        <div className="gallery-layout">
          {/* Left Column - Roulette */}
          <div className="gallery-roulette-column">
            <div className="roulette-container">
              <AnimatePresence initial={false}>
                {visibleEvents.map((ev) => {
                  const isActive = ev.pos === 0;
                  return (
                    <motion.div
                      key={ev.id}
                      initial={{ opacity: 0, y: ev.pos > 0 ? 50 : -50, scale: 0.8 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.4, 
                        y: ev.pos * 80, // Vertical spacing
                        scale: isActive ? 1.1 : 0.9,
                        x: isActive ? 20 : 0 // Push active item slightly to right
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="roulette-item"
                      onClick={() => handleManualClick(ev.origIndex)}
                    >
                      <CircularProgress progress={progress} isActive={isActive} />
                      <h3 style={{ 
                        margin: 0, 
                        fontFamily: '"Playfair Display"', 
                        fontSize: isActive ? '1.8rem' : '1.3rem',
                        color: isActive ? 'var(--red)' : 'var(--ink)',
                        transition: 'all 0.3s ease'
                      }}>
                        {ev.title}
                      </h3>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            <p style={{ marginTop: '2rem', color: 'var(--muted)', fontSize: '0.9rem', textAlign: 'center' }}>
              Click an event or wait to explore.
            </p>
          </div>

          {/* Right Column - Content */}
          <div className="gallery-content-column">
            <h2 className="section-title mobile-only-title" style={{ marginBottom: '2rem', textAlign: 'center', display: 'none' }}>
              {activeEvent.title}
            </h2>
            
            <motion.div 
              key={activeEvent.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
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

      </div>

      <style>{`
        .gallery-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .gallery-roulette-column {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 400px;
          border-right: 1px solid rgba(0,0,0,0.05);
        }

        .roulette-container {
          position: relative;
          height: 240px; /* Space for 3 items (80px each) */
          display: flex;
          align-items: center;
        }

        .roulette-item {
          position: absolute;
          left: 40px;
          width: 100%;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        @media (max-width: 900px) {
          .gallery-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .gallery-roulette-column {
            position: relative;
            top: 0;
            height: auto;
            border-right: none;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            padding-bottom: 2rem;
          }
          .roulette-container {
            height: 200px;
            justify-content: center;
          }
          .roulette-item {
            left: auto;
            justify-content: center;
          }
          .roulette-item svg {
            left: 50% !important;
            transform: translate(-50%, -50%) rotate(-90deg) !important;
            width: 80px !important;
            height: 80px !important;
          }
          .roulette-item h3 {
            text-align: center;
            background: rgba(255,255,255,0.8);
            padding: 5px 15px;
            border-radius: 20px;
            z-index: 10;
          }
          .mobile-only-title {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
