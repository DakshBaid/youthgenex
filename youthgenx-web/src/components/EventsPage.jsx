import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const allEvents = [
  {
    title: "GENxMUN",
    desc: "A dynamic Model United Nations platform designed to help students enhance diplomacy, debate, and communication skills while discussing global challenges. Participants step into the shoes of global leaders to draft resolutions."
  },
  {
    title: "Indore Democratic Summit (IDS)",
    desc: "Our premier youth initiative focused on leadership, governance, civic awareness, and youth participation. Successfully conducted across 3 impactful editions, IDS brings together hundreds of delegates, prominent speakers, and changemakers.",
    path: "/ids",
    isFeatured: true
  },
  {
    title: "Samvidhan Par Charcha",
    desc: "An initiative encouraging meaningful conversations around the Constitution, civic rights, responsibilities, and democratic values among youth. We aim to make constitutional knowledge accessible to every student."
  },
  {
    title: "Coffee with Mayor",
    desc: "An interactive platform connecting students with leaders and policymakers to discuss ideas, governance, and youth perspectives. A direct bridge between the youth and local government."
  },
  {
    title: "Kho Gaye Hum Kahan?",
    desc: "A youth-focused initiative creating conversations around self-growth, emotions, identity, and navigating modern challenges like digital wellbeing and mental health."
  },
  {
    title: "About Her",
    desc: "An initiative celebrating women, leadership, empowerment, and inspiring stories that encourage confidence and growth. We highlight the stories of remarkable women breaking barriers."
  }
];

export default function EventsPage() {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate events to create infinite scrolling effect
  const marqueeItems = [...allEvents, ...allEvents];

  return (
    <section className="bg-soft" style={{ paddingTop: '120px', paddingBottom: '6rem', minHeight: '100vh', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3.5rem', fontFamily: '"Playfair Display"', color: 'var(--ink)', margin: '0 0 1rem' }}>
          Our Initiatives
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: 'var(--muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          YouthGenex organizes diverse events ranging from policy debates to mental health discussions, ensuring holistic development for students. Hover over an initiative to learn more.
        </motion.p>
      </div>

      {/* Infinite Carousel */}
      <div 
        style={{ position: 'relative', width: '100vw', left: 'calc(-50vw + 50%)', padding: '2rem 0' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          animate={{ x: isHovered ? undefined : ['0%', '-50%'] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          style={{ display: 'flex', width: 'max-content', gap: '2rem', paddingLeft: '2rem' }}
        >
          {marqueeItems.map((ev, i) => (
            <motion.div 
              key={i} 
              className="event-card-hover"
              whileHover={{ scale: 1.05, zIndex: 10 }}
              style={{ 
                width: '400px',
                height: '450px',
                background: 'var(--white)', 
                borderRadius: '24px', 
                boxShadow: ev.isFeatured ? '0 20px 40px rgba(192,0,26,0.15)' : 'var(--shadow)',
                border: ev.isFeatured ? '2px solid var(--red)' : '1px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '2.5rem',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              {/* Default State (Title) */}
              <div className="event-title-wrap" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', background: 'var(--white)', transition: 'opacity 0.4s ease', zIndex: 2 }}>
                {ev.isFeatured && (
                   <div style={{ background: 'var(--red)', color: 'var(--white)', padding: '6px 18px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>
                     Premier Initiative
                   </div>
                )}
                <h2 style={{ fontSize: '2.2rem', fontFamily: '"Playfair Display"', color: ev.isFeatured ? 'var(--red)' : 'var(--ink)', margin: 0 }}>
                  {ev.title}
                </h2>
              </div>

              {/* Hover State (Details) */}
              <div className="event-desc-wrap" style={{ opacity: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', transition: 'opacity 0.4s ease', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.6rem', fontFamily: '"Playfair Display"', color: 'var(--ink)', margin: '0 0 1rem' }}>
                  {ev.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '1.05rem', margin: '0 0 2rem' }}>
                  {ev.desc}
                </p>
                {ev.path && (
                  <Link to={ev.path} className="button button-red" style={{ width: '100%', padding: '0.8rem' }}>
                    Explore IDS
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .event-card-hover:hover .event-title-wrap {
          opacity: 0 !important;
          pointer-events: none;
        }
        .event-card-hover:hover .event-desc-wrap {
          opacity: 1 !important;
          z-index: 3 !important;
        }
      `}</style>
    </section>
  );
}
