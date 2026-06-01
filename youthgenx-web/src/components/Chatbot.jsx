import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { 
    q: "Tell me about Indore Democratic Summit (IDS)", 
    a: "The Indore Democratic Summit (IDS) is our flagship youth initiative! It focuses on leadership, governance, and civic awareness, bringing together students and leaders for impactful discussions.",
    isSpecial: true
  },
  { 
    q: "What is YouthGenex?", 
    a: "We are a youth leadership and civic capability-building organization. We empower young minds through experiential learning, communication, and leadership programs.",
    isSpecial: false
  },
  { 
    q: "Who can participate in programs?", 
    a: "Our programs are open to all students from schools and colleges, as well as young leaders looking to build confidence and civic awareness.",
    isSpecial: false
  },
  { 
    q: "How do I contact the team?", 
    a: "Just scroll down to the bottom of the page and click the 'Email YouthGenex' button to reach us directly!",
    isSpecial: false
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hi there! Welcome to YouthGenex. How can I help you today?' }]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuestionClick = (faq) => {
    setMessages(prev => [
      ...prev, 
      { sender: 'user', text: faq.q },
      { sender: 'bot', text: faq.a }
    ]);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--red)',
          color: 'var(--white)',
          border: 'none',
          boxShadow: '0 10px 25px rgba(192,0,26,0.3)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 999,
          transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            style={{
              position: 'fixed',
              bottom: '5.5rem',
              right: '2rem',
              width: '350px',
              height: '520px',
              background: 'var(--white)',
              borderRadius: '16px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              border: '1px solid rgba(17,17,17,0.08)'
            }}
          >
            {/* Header */}
            <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={16} color="var(--white)" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', lineHeight: 1 }}>YouthGenex</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Automated Assistant</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                <X size={16} />
              </button>
            </div>
            
            {/* Chat History */}
            <div style={{ flex: 1, padding: '1.2rem', background: '#FAFAFA', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{
                  background: msg.sender === 'bot' ? 'var(--white)' : 'var(--red)',
                  color: msg.sender === 'bot' ? 'var(--ink)' : 'var(--white)',
                  padding: '0.85rem 1.1rem',
                  borderRadius: '14px',
                  alignSelf: msg.sender === 'bot' ? 'flex-start' : 'flex-end',
                  maxWidth: '85%',
                  fontSize: '0.92rem',
                  lineHeight: 1.5,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  borderBottomLeftRadius: msg.sender === 'bot' ? 4 : 14,
                  borderBottomRightRadius: msg.sender === 'user' ? 4 : 14,
                  border: msg.sender === 'bot' ? '1px solid rgba(17,17,17,0.05)' : 'none',
                }}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* FAQ Buttons Area */}
            <div style={{ padding: '1.2rem', borderTop: '1px solid rgba(17,17,17,0.08)', background: 'var(--white)' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', margin: '0 0 0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Frequently Asked Questions</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxHeight: '180px', overflowY: 'auto', paddingRight: '4px' }}>
                {faqs.map((faq, index) => (
                  <button 
                    key={index} 
                    onClick={() => handleQuestionClick(faq)}
                    style={{
                      background: faq.isSpecial ? 'var(--red)' : 'var(--white)',
                      color: faq.isSpecial ? 'var(--white)' : 'var(--ink)',
                      border: faq.isSpecial ? 'none' : '1px solid rgba(17,17,17,0.12)',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      fontSize: '0.88rem',
                      fontWeight: faq.isSpecial ? 700 : 500,
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      lineHeight: 1.4,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      boxShadow: faq.isSpecial ? '0 4px 12px rgba(192,0,26,0.2)' : 'none'
                    }}
                    onMouseOver={(e) => { 
                      if(!faq.isSpecial) {
                        e.currentTarget.style.borderColor = 'var(--red)'; 
                        e.currentTarget.style.background = '#FFF5F6'; 
                      } else {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }
                    }}
                    onMouseOut={(e) => { 
                      if(!faq.isSpecial) {
                        e.currentTarget.style.borderColor = 'rgba(17,17,17,0.12)'; 
                        e.currentTarget.style.background = 'var(--white)'; 
                      } else {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    <span>{faq.q}</span>
                    <ArrowRight size={16} opacity={0.7} style={{ flexShrink: 0, marginLeft: '8px' }} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
