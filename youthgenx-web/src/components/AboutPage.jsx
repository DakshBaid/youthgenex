import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '6rem', minHeight: '100vh', background: 'var(--white)' }}>
      {/* Hero Section of About */}
      <div className="container" style={{ marginBottom: '5rem' }}>
        <div style={{ maxWidth: '800px' }}>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ color: 'var(--red)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 1rem' }}>
            Building the Leaders of Tomorrow
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontSize: '4rem', fontFamily: '"Playfair Display"', color: 'var(--ink)', margin: '0 0 2rem', lineHeight: 1.1 }}>
            About YouthGenex
          </motion.h1>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
          <div>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--muted)', margin: '0 0 1.5rem' }}>
              <strong>YouthGenex</strong> is a youth-driven organization dedicated to empowering the next generation of leaders, innovators, and changemakers. Founded with the vision of creating meaningful opportunities for young minds, we believe that leadership is not just about positions—it's about purpose, responsibility, and the courage to create impact.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--muted)', margin: 0 }}>
              We provide platforms where students can develop critical thinking, communication skills, civic awareness, and leadership capabilities through experiential learning. From youth parliaments and leadership summits to workshops, training programs, and community initiatives, every experience is designed to inspire confidence and encourage action.
            </p>
          </div>
          <div style={{ background: 'var(--soft)', padding: '3rem', borderRadius: '16px', borderLeft: '4px solid var(--red)' }}>
             <h3 style={{ fontSize: '1.8rem', fontFamily: '"Playfair Display"', margin: '0 0 1rem' }}>Our Goal</h3>
             <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--ink)' }}>
               We envision a future where every young individual has access to opportunities that help them discover their potential, amplify their voice, and contribute positively to society. Through collaboration, innovation, and inclusivity, we are building a community of young leaders who are prepared to tackle the challenges of tomorrow.
             </p>
          </div>
        </motion.div>
      </div>

      {/* Vision & Mission */}
      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display"', color: 'var(--red)', marginBottom: '1.5rem' }}>Our Vision</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                To create a generation of confident, socially conscious, and purpose-driven leaders who contribute meaningfully to society and drive positive change at local, national, and global levels.
              </p>
            </div>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display"', color: 'var(--red)', marginBottom: '1.5rem' }}>Our Mission</h2>
              <ul style={{ paddingLeft: '1.2rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>Empower youth through leadership development and experiential learning.</li>
                <li>Foster critical thinking, public speaking, and problem-solving skills.</li>
                <li>Promote civic engagement and democratic participation.</li>
                <li>Create opportunities for collaboration, innovation, and personal growth.</li>
                <li>Build a community that inspires young people to lead with integrity and purpose.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What We Stand For */}
      <div className="container" style={{ paddingTop: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: '"Playfair Display"', margin: 0 }}>What We Stand For</h2>
          <div style={{ width: '60px', height: '3px', background: 'var(--red)', margin: '1.5rem auto 0' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {[
            { title: 'Leadership', text: 'We inspire young minds to take initiative, embrace responsibility, and lead with confidence.' },
            { title: 'Excellence', text: 'We strive to deliver impactful experiences that encourage continuous growth and learning.' },
            { title: 'Inclusivity', text: 'We believe every young person deserves an opportunity to learn, contribute, and succeed.' },
            { title: 'Innovation', text: 'We encourage creative thinking and fresh perspectives to solve real-world challenges.' },
            { title: 'Impact', text: 'Everything we do is focused on creating meaningful and lasting change.' }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ background: 'var(--soft)', padding: '2.5rem', borderRadius: '16px', boxShadow: 'var(--shadow)', borderTop: '4px solid var(--red)' }}>
              <h3 style={{ fontSize: '1.6rem', fontFamily: '"Playfair Display"', margin: '0 0 1rem', color: 'var(--ink)' }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <div style={{ background: 'linear-gradient(135deg, #111, #222)', color: 'var(--white)', padding: '4rem', borderRadius: '24px', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display"', margin: '0 0 1.5rem' }}>Why YouthGenex?</h2>
          <p style={{ fontSize: '1.4rem', color: 'var(--red)', fontWeight: 800, marginBottom: '2rem' }}>Because the future belongs to those who are prepared to lead it.</p>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
            At YouthGenex, we don't just organize events—we create experiences that shape perspectives, build confidence, and empower young people to become the leaders their communities need.
          </p>
          <h3 style={{ fontSize: '1.6rem', fontFamily: '"Playfair Display"', margin: 0, color: 'var(--white)' }}>
            YouthGenex is where potential meets opportunity, and leaders are born.
          </h3>
        </div>
      </div>
    </div>
  );
}
