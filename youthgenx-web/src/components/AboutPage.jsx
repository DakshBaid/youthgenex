import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem', minHeight: '100vh', background: 'var(--soft)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontFamily: '"Playfair Display"', color: 'var(--ink)', margin: '0 0 1rem' }}>
            About YouthGenex
          </h1>
          <p style={{ color: 'var(--red)', fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Building the Leaders of Tomorrow
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ background: 'var(--white)', padding: '3.5rem', borderRadius: '16px', boxShadow: 'var(--shadow)', lineHeight: 1.8, color: 'var(--ink)' }}>
          
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            YouthGenex is a youth-driven organization dedicated to empowering the next generation of leaders, innovators, and changemakers. Founded with the vision of creating meaningful opportunities for young minds, we believe that leadership is not just about positions—it's about purpose, responsibility, and the courage to create impact.
          </p>
          
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            At YouthGenex, we provide platforms where students can develop critical thinking, communication skills, civic awareness, and leadership capabilities through experiential learning. From youth parliaments and leadership summits to workshops, training programs, and community initiatives, every experience is designed to inspire confidence and encourage action.
          </p>

          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            We envision a future where every young individual has access to opportunities that help them discover their potential, amplify their voice, and contribute positively to society. Through collaboration, innovation, and inclusivity, we are building a community of young leaders who are prepared to tackle the challenges of tomorrow.
          </p>
          
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem' }}>
            Today, YouthGenex continues to bring together students, educators, professionals, and institutions to create experiences that transform learning into leadership and ideas into impact.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontFamily: '"Playfair Display"', color: 'var(--red)', marginBottom: '1rem' }}>Our Vision</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--muted)' }}>To create a generation of confident, socially conscious, and purpose-driven leaders who contribute meaningfully to society and drive positive change at local, national, and global levels.</p>
            </div>
            <div>
              <h2 style={{ fontSize: '2rem', fontFamily: '"Playfair Display"', color: 'var(--red)', marginBottom: '1rem' }}>Our Mission</h2>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--muted)', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Empower youth through leadership development and experiential learning.</li>
                <li>Foster critical thinking, public speaking, and problem-solving skills.</li>
                <li>Promote civic engagement and democratic participation.</li>
                <li>Create opportunities for collaboration, innovation, and personal growth.</li>
                <li>Build a community that inspires young people to lead with integrity and purpose.</li>
              </ul>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '3rem 0' }} />

          <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display"', textAlign: 'center', marginBottom: '2.5rem' }}>What We Stand For</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <div style={{ background: 'var(--soft)', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--red)', margin: '0 0 0.5rem' }}>Leadership</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>We inspire young minds to take initiative, embrace responsibility, and lead with confidence.</p>
            </div>
            <div style={{ background: 'var(--soft)', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--red)', margin: '0 0 0.5rem' }}>Excellence</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>We strive to deliver impactful experiences that encourage continuous growth and learning.</p>
            </div>
            <div style={{ background: 'var(--soft)', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--red)', margin: '0 0 0.5rem' }}>Inclusivity</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>We believe every young person deserves an opportunity to learn, contribute, and succeed.</p>
            </div>
            <div style={{ background: 'var(--soft)', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--red)', margin: '0 0 0.5rem' }}>Innovation</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>We encourage creative thinking and fresh perspectives to solve real-world challenges.</p>
            </div>
            <div style={{ background: 'var(--soft)', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--red)', margin: '0 0 0.5rem' }}>Impact</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>Everything we do is focused on creating meaningful and lasting change.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', background: 'var(--ink)', color: 'var(--white)', padding: '3rem', borderRadius: '16px' }}>
            <h2 style={{ fontSize: '2.2rem', fontFamily: '"Playfair Display"', margin: '0 0 1rem' }}>Why YouthGenex?</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--red)', fontWeight: 700, marginBottom: '1.5rem' }}>Because the future belongs to those who are prepared to lead it.</p>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
              At YouthGenex, we don't just organize events—we create experiences that shape perspectives, build confidence, and empower young people to become the leaders their communities need.
            </p>
            <p style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
              YouthGenex is where potential meets opportunity, and leaders are born.
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
