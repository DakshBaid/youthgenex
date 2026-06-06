import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useTransform } from 'framer-motion';
import { Mic, Building2, Users, Rocket, ArrowDown, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import SEO from './SEO';

// Word-by-word text reveal component
const RevealText = ({ text }) => {
  const words = text.split(" ");
  return (
    <motion.span initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Counter animation component
const Counter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Mouse Glow Component
const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = ev => setMousePosition({ x: ev.clientX, y: ev.clientY });
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(192,0,26,0.15) 0%, rgba(192,0,26,0) 70%)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default function AboutPage() {
  useEffect(() => {
    let animationFrameId;
    let isAutoScrolling = true;

    const autoScroll = () => {
      if (!isAutoScrolling) return;
      // Scroll exactly 1 pixel per frame for a smooth, slow descent
      window.scrollBy({ top: 1, behavior: 'auto' });

      // Stop automatically if we reach the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        isAutoScrolling = false;
        return;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    const stopAutoScroll = () => {
      isAutoScrolling = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };

    // Wait 2.5 seconds before starting the cinematic scroll
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(autoScroll);
    }, 2500);

    // Immediately stop auto-scrolling if the user attempts to take control
    window.addEventListener('wheel', stopAutoScroll, { passive: true });
    window.addEventListener('touchmove', stopAutoScroll, { passive: true });
    window.addEventListener('mousedown', stopAutoScroll, { passive: true });
    window.addEventListener('keydown', stopAutoScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      stopAutoScroll();
      window.removeEventListener('wheel', stopAutoScroll);
      window.removeEventListener('touchmove', stopAutoScroll);
      window.removeEventListener('mousedown', stopAutoScroll);
      window.removeEventListener('keydown', stopAutoScroll);
    };
  }, []);

  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh', overflow: 'hidden' }}>
      <SEO title="About Us" description="YouthGenex started with a simple belief — young people deserve platforms that help them grow beyond academics. Learn more about our story and mission." />

      {/* Dynamic Red Gradient Flow Element */}

      <MouseGlow />

      {/* Section 1 - Hero */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#0a0a0a' }}>
        {/* Subtly animated floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -Math.random() * 200 - 100],
              x: [0, (Math.random() - 0.5) * 200],
              opacity: [0, Math.random() * 0.5, 0]
            }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              bottom: '-10%',
              left: `${Math.random() * 100}%`,
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              background: 'rgba(255,255,255,0.4)',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(192,0,26,0.8)'
            }}
          />
        ))}
        {/* Red Gradient Glow */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(192,0,26,0.15) 0%, transparent 60%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'var(--white)' }}>
          <h1 className="about-hero-title" style={{ fontFamily: '"Playfair Display"', margin: '0 0 2rem', lineHeight: 1.1 }}>
            <RevealText text="Youth on the Move" />
          </h1>
          <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '1.5rem' }}><RevealText text="YouthGenex is a youth empowerment organization dedicated to connecting and strengthening young individuals through events, workshops, and activism. Founded in May 2021, we have grown from a small virtual platform into one of Central India's most recognized youth-driven movements." /></p>
            <p><RevealText text="We believe every young individual holds the power to ignite positive change. We create the space, skills, and community to help them realize it." /></p>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={{ marginTop: '4rem' }}>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Who We Are */}
      <section id="who-we-are" style={{ padding: '8rem 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div>
            <h2 className="about-section-title" style={{ fontFamily: '"Playfair Display"', margin: '0 0 2rem' }}><RevealText text="Who Are We" /></h2>
            <div style={{ fontSize: '1.25rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              <p><RevealText text="We bring together aspiring leaders, student changemakers, and young professionals through experiences designed to spark curiosity, build confidence, and develop the next generation of civic and social leaders — from Model UN conferences and youth summits to open mics, health dialogues, and community events." /></p>
              <p style={{ marginTop: '1.5rem', fontWeight: 600, color: 'var(--ink)' }}><RevealText text="Based in Indore, our work spans across states — and our ambitions are global." /></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Vision, Mission & Values */}
      <section style={{ padding: '8rem 0', background: 'var(--soft)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="about-section-title" style={{ fontFamily: '"Playfair Display"', textAlign: 'center', margin: '0 0 4rem' }}>Our Purpose</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Rocket size={32} color="var(--red)" />, title: 'Our Vision', text: 'To become a global leader in youth empowerment, offering life-changing opportunities that enable young individuals to confront real-world challenges and drive positive societal impact.' },
              { icon: <Users size={32} color="var(--red)" />, title: 'Our Mission', text: 'We inspire, educate, mentor, and develop future leaders. We equip young individuals with the tools, confidence, and community to thrive — and the courage to make a difference.' },
              { icon: <Building2 size={32} color="var(--red)" />, title: 'Our Values', text: 'Integrity \n· Inclusivity \n· Collaboration \n· Innovation \n· Passion' }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: 5, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
                style={{
                  background: 'var(--white)',
                  padding: '3rem 2rem',
                  borderRadius: '24px',
                  boxShadow: 'var(--shadow)',
                  border: '1px solid rgba(0,0,0,0.03)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div style={{ marginBottom: '1.5rem', background: 'rgba(192,0,26,0.05)', display: 'inline-block', padding: '1rem', borderRadius: '16px' }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: '"Playfair Display"', margin: '0 0 1rem' }}>{card.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, fontWeight: card.title === 'Our Values' ? 600 : 400 }}>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Numbers That Matter */}
      <section style={{ padding: '8rem 0', background: '#111', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
            <div>
              <div className="about-counter-num"><Counter to={5000} suffix="+" /></div>
              <div style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Students Engaged</div>
            </div>
            <div>
              <div className="about-counter-num"><Counter to={25} suffix="+" /></div>
              <div style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Events Conducted</div>
            </div>
            <div>
              <div className="about-counter-num"><Counter to={5} suffix="+" /></div>
              <div style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Partner Institutions</div>
            </div>
            <div>
              <div className="about-counter-num"><Counter to={1} /></div>
              <div style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Mission</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Why We Exist (Emotional Quote) */}
      <section style={{ padding: '10rem 0', background: 'var(--white)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="about-section-title" style={{ fontFamily: '"Playfair Display"', lineHeight: 1.3, margin: '0 0 3rem' }}>
            <RevealText text="&quot;The future is not built by waiting for opportunities. It is built by creating them.&quot;" />
          </h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1 }} style={{ fontSize: '1.3rem', color: 'var(--muted)', lineHeight: 1.8 }}>
            YouthGenex exists to create spaces where young people can discover their strengths, express their ideas, and develop the confidence to take initiative.
          </motion.p>
        </div>
      </section>

      {/* Section 6 - Interactive Timeline */}
      <section style={{ padding: '8rem 0', background: 'var(--soft)', position: 'relative' }}>
        <div className="container">
          <h2 className="about-section-title" style={{ fontFamily: '"Playfair Display"', textAlign: 'center', margin: '0 0 6rem' }}><RevealText text="Our Journey" /></h2>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* The Drawing Line */}
            <motion.div
              initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 2, ease: "easeInOut" }}
              style={{ position: 'absolute', left: '0px', top: 0, width: '2px', background: 'var(--red)' }}
            />

            {[
              { year: '2021', text: 'Founded with Polity, a virtual open mic, followed by webinars, the Liberture Independence Day celebration, and the Youth Edge Series.' },
              { year: '2022', text: 'First offline event (About Her), youth magazine launch (RevolYuva), and first Model UN (LedXMUN 2022).' },
              { year: '2023', text: 'GENxMUN Edition 1 drew 200+ participants across three states. Indore Democratic Summit 2023 (Edition 1) — the country\'s first Urban Local Body Collaborated Conference — hosted with the Indore Municipal Corporation.' },
              { year: '2024', text: 'Indore Democratic Summit 2024 (Edition 2) at SVKM\'s NMIMS Indore became Central India\'s biggest youth parliament. Coffee with Mayor connected young individuals directly with Indore\'s Mayor Shri Pushyamitra Bhargav.' },
              { year: '2025', text: 'Indore Democratic Summit 2025 (Edition 3) — continuing to grow India\'s most impactful youth governance platform.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.2 + 0.5, duration: 0.6 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '3rem', marginBottom: '4rem', paddingLeft: '40px', position: 'relative' }}
              >
                {/* Dot */}
                <div style={{ position: 'absolute', left: '-5px', top: '15px', width: '12px', height: '12px', background: 'var(--red)', borderRadius: '50%', border: '4px solid var(--soft)' }} />

                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--ink)', lineHeight: 1 }}>{item.year}</div>
                <div style={{ fontSize: '1.25rem', color: 'var(--muted)', marginTop: '-3px' }}>{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Section 8 - Get Involved */}
      <section style={{ padding: '10rem 0', background: 'linear-gradient(135deg, #0a0a0a, #300005)', color: 'var(--white)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <h2 className="about-hero-title" style={{ fontFamily: '"Playfair Display"', margin: 0 }}>
            <RevealText text="This journey is just the beginning." />
          </h2>
        </div>
      </section>

      <style>{`
        .team-card .hover-content {
          transform: translateY(10px);
        }
        .about-hero-title { font-size: 4.5rem; }
        .about-huge-year { font-size: 12rem; text-align: left; }
        .about-section-title { font-size: 3.5rem; }
        .about-counter-num { font-size: 5rem; font-weight: 900; color: var(--red); font-family: "Playfair Display"; line-height: 1; }
        
        @media (max-width: 768px) {
          .about-hero-title { font-size: 2.8rem; }
          .about-huge-year { font-size: 7rem; text-align: center; }
          .about-section-title { font-size: 2.2rem; }
          .about-counter-num { font-size: 3.5rem; }
          section { padding: 4rem 0 !important; }
        }
      `}</style>
    </div>
  );
}
