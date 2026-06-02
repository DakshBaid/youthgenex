import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Users, BookOpen, Coffee, Heart, Star } from 'lucide-react';

const allEvents = [
  {
    title: "GENxMUN",
    desc: "A dynamic Model United Nations platform designed to help students enhance diplomacy, debate, and communication skills while discussing global challenges and drafting impactful resolutions for tomorrow.",
    color: "linear-gradient(135deg, #0F172A, #1E3A8A)",
    icon: <img src="/gxm-logo.png" alt="GENxMUN" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
  },
  {
    title: "Indore Democratic Summit",
    desc: "Our premier youth initiative focused on leadership, governance, civic awareness, and youth participation. Successfully conducted across 3 impactful editions with thousands of delegates.",
    path: "/ids",
    color: "linear-gradient(135deg, #2A0800, #7F1D1D)",
    icon: <img src="/ids-logo.png" alt="IDS" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
  },
  {
    title: "Samvidhan Par Charcha",
    desc: "An initiative encouraging meaningful conversations around the Constitution, civic rights, responsibilities, and democratic values among youth, ensuring Constitutional literacy for everyone.",
    color: "linear-gradient(135deg, #271400, #78350F)",
    icon: <img src="/spc-logo.png" alt="Samvidhan Par Charcha" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
  },
  {
    title: "Coffee with Mayor",
    desc: "An interactive platform directly connecting students with leaders and policymakers to discuss progressive ideas, modern governance, and youth perspectives on local administration.",
    color: "linear-gradient(135deg, #1A1A1A, #451A03)",
    icon: <Coffee size={48} color="#fff" />
  },
  {
    title: "Kho Gaye Hum Kahan?",
    desc: "A youth-focused initiative creating open conversations around self-growth, managing emotions, personal identity, and navigating modern challenges like digital wellbeing.",
    color: "linear-gradient(135deg, #170F2E, #3B0764)",
    icon: <Heart size={48} color="#fff" />
  },
  {
    title: "About Her",
    desc: "An initiative celebrating women, leadership, empowerment, and inspiring stories that encourage immense confidence and monumental growth for young female changemakers.",
    color: "linear-gradient(135deg, #2D0614, #831843)",
    icon: <Star size={48} color="#fff" />
  }
];

export default function EventsPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Manual animation loop for the cylinder
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      if (!isHovered) {
        setRotation(prev => prev - 0.25); // Speed of rotation
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <section style={{ paddingTop: '120px', paddingBottom: '6rem', minHeight: '100vh', background: 'var(--soft)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3.5rem', fontFamily: '"Playfair Display"', color: 'var(--ink)', margin: '0 0 1rem' }}>
          Our Initiatives
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: 'var(--muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Hover over an initiative to stop the carousel and explore details.
        </motion.p>
      </div>

      <div 
        style={{ 
          height: '600px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          perspective: '1200px',
          marginTop: '2rem'
        }}
      >
        <div 
          style={{
            position: 'relative',
            width: '320px',
            height: '420px',
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotation}deg)`,
            transition: isHovered ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
          }}
        >
          {allEvents.map((ev, i) => {
            const angle = i * (360 / allEvents.length);
            return (
              <div 
                key={i}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="event-3d-card"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: ev.color,
                  borderRadius: '24px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: 'white',
                  transform: `rotateY(${angle}deg) translateZ(400px)`,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                {/* Default State */}
                <div className="event-3d-front" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '50%', backdropFilter: 'blur(10px)' }}>
                    {ev.icon}
                  </div>
                  <h2 style={{ fontSize: '2rem', fontFamily: '"Playfair Display"', margin: 0, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                    {ev.title}
                  </h2>
                </div>

                {/* Hover Details State */}
                <div className="event-3d-back" style={{ position: 'absolute', inset: 0, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: '"Playfair Display"', margin: '0 0 1rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                    {ev.title}
                  </h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.6, margin: '0 0 1.5rem', opacity: 0.9 }}>
                    {ev.desc}
                  </p>
                  {ev.path && (
                    <Link to={ev.path} className="button" style={{ background: '#fff', color: '#111', width: '100%', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                      Explore Event
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .event-3d-front {
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        .event-3d-back {
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .event-3d-card:hover .event-3d-front,
        .event-3d-card:active .event-3d-front {
          opacity: 0;
        }
        .event-3d-card:hover .event-3d-back,
        .event-3d-card:active .event-3d-back {
          opacity: 1;
          pointer-events: auto;
        }
        @media (max-width: 900px) {
          .event-3d-card {
            transform: rotateY(var(--angle)) translateZ(300px) !important;
          }
        }
        @media (max-width: 600px) {
          .event-3d-card {
            transform: rotateY(var(--angle)) translateZ(200px) !important;
            width: 260px !important;
            left: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
