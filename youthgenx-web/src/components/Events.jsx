
import { motion } from 'framer-motion';

const events = [
  {
    title: "Indore Democratic Summit",
    desc: "One of our flagship youth initiatives focused on leadership, governance, civic awareness, and youth participation. Successfully conducted across 3 impactful editions."
  },
  {
    title: "GENxMUN",
    desc: "A dynamic Model United Nations platform designed to help students enhance diplomacy, debate, and communication skills while discussing global challenges."
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
    <section id="events" className="py-16" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <div className="section-heading center">
          <p className="eyebrow">Events & Initiatives</p>
          <h2 className="section-title">Platforms for Impact</h2>
        </div>
        
        <div className="events-grid">
          {events.map((ev, i) => (
            <motion.div 
              key={i} 
              className="card" 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 style={{ margin: '0 0 0.8rem', fontSize: '1.25rem', fontFamily: '"Playfair Display"' }}>{ev.title}</h3>
              <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>{ev.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
