import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const allEvents = [
  {
    title: "GENxMUN",
    desc: "A dynamic Model United Nations platform designed to help students enhance diplomacy, debate, and communication skills while discussing global challenges. Participants step into the shoes of global leaders to draft resolutions."
  },
  {
    title: "Indore Democratic Summit (IDS)",
    desc: "Our premier youth initiative focused on leadership, governance, civic awareness, and youth participation. Successfully conducted across 3 impactful editions, IDS brings together hundreds of delegates, prominent speakers, and changemakers to deliberate on policy making and nation-building.",
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
  return (
    <section className="bg-soft" style={{ paddingTop: '120px', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3.5rem', fontFamily: '"Playfair Display"', color: 'var(--ink)', margin: '0 0 1rem' }}>
            Our Initiatives
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: 'var(--muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            YouthGenex organizes diverse events ranging from policy debates to mental health discussions, ensuring holistic development for students.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {allEvents.map((ev, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ 
                background: 'var(--white)', 
                padding: '2.5rem', 
                borderRadius: '16px', 
                boxShadow: ev.isFeatured ? '0 20px 40px rgba(192,0,26,0.15)' : 'var(--shadow)',
                border: ev.isFeatured ? '2px solid var(--red)' : '1px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              {ev.isFeatured && (
                 <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--red)', color: 'var(--white)', padding: '4px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                   Premier Initiative
                 </div>
              )}
              <h2 style={{ fontSize: '1.6rem', fontFamily: '"Playfair Display"', color: ev.isFeatured ? 'var(--red)' : 'var(--ink)', margin: '0 0 1rem' }}>
                {ev.title}
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, flexGrow: 1 }}>
                {ev.desc}
              </p>
              {ev.path && (
                <div style={{ marginTop: '2rem' }}>
                  <Link to={ev.path} className="button button-red" style={{ width: '100%', padding: '0.8rem' }}>
                    Explore IDS
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
