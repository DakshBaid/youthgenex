
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const events = [
  {
    title: "GENxMUN",
    desc: "A dynamic Model United Nations platform designed to help students enhance diplomacy, debate, and communication skills while discussing global challenges.",
  },
  {
    title: "Indore Democratic Summit",
    desc: "One of our premier youth initiatives focused on leadership, governance, civic awareness, and youth participation. Successfully conducted across 3 impactful editions.",
    path: "/ids"
  },
  {
    title: "Samvidhan Par Charcha",
    desc: "An initiative encouraging meaningful conversations around the Constitution, civic rights, responsibilities, and democratic values among youth."
  },
  {
    title: "Coffee with Mayor",
    desc: "An interactive platform connecting students with leaders and policymakers to discuss ideas, governance, and youth perspectives."
  },
  {
    title: "Kho Gaye Hum Kahan?",
    desc: "A youth-focused initiative creating conversations around self-growth, emotions, identity, and navigating modern challenges."
  },
  {
    title: "About Her",
    desc: "An initiative celebrating women, leadership, empowerment, and inspiring stories that encourage confidence and growth."
  }
];

export default function Events() {
  return (
    <section id="events" className="py-16" style={{ background: 'var(--soft)' }}>
      <div className="container">
        <div className="section-heading center">
          <p className="eyebrow">Events & Initiatives</p>
          <h2 className="section-title">Platforms for Impact</h2>
        </div>
        
        {/* We use a custom grid to feature IDS in the center */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem'
        }}>
          {events.map((ev, i) => {
            const isIDS = ev.title === "Indore Democratic Summit";
            return (
              <motion.div 
                key={i} 
                className={`card ${isIDS ? 'mobile-order-first' : ''}`} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  border: isIDS ? '2px solid var(--red)' : '1px solid rgba(17,17,17,0.08)',
                  boxShadow: isIDS ? '0 20px 40px rgba(192,0,26,0.15)' : 'var(--shadow)',
                  position: 'relative',
                  transform: isIDS ? 'scale(1.02)' : 'none',
                  zIndex: isIDS ? 10 : 1
                }}
              >
                <h3 style={{ margin: '0 0 0.8rem', fontSize: '1.25rem', fontFamily: '"Playfair Display"', color: isIDS ? 'var(--red)' : 'var(--ink)', marginTop: isIDS ? '0.5rem' : '0' }}>{ev.title}</h3>
                <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6, flexGrow: 1 }}>{ev.desc}</p>
                
                {ev.path && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <a href={ev.path} style={{ display: 'inline-block', color: 'var(--red)', fontWeight: 700, textDecoration: 'none' }}>
                      View Event Details →
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
