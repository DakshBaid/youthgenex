
import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Mic, Award, LayoutDashboard } from 'lucide-react';

const programs = [
  { title: "Youth Parliament", icon: <Target size={24} /> },
  { title: "Model United Nations Conferences", icon: <Users size={24} /> },
  { title: "Community Building Events", icon: <Award size={24} /> },
  { title: "Public Speaking & Communication", icon: <Mic size={24} /> },
  { title: "Workshops & Skill Development", icon: <BookOpen size={24} /> },
  { title: "School & College Collaborations", icon: <LayoutDashboard size={24} /> },
];

export default function Programs() {
  return (
    <section id="programs" className="py-16" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div className="section-heading center">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title">Structured Experiences for Growth</h2>
          <p className="section-copy">We create impactful learning experiences beyond classrooms for students, schools, colleges, institutions, and young leaders.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
          {programs.map((prog, idx) => (
            <motion.div 
              key={idx} 
              className="card" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius)', background: 'rgba(192,0,26,0.1)', color: 'var(--red)', display: 'grid', placeItems: 'center' }}>
                {prog.icon}
              </div>
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>{prog.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
