import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "What is YouthGenex?", a: "YouthGenex is a youth leadership and civic capability-building organization that empowers young minds through leadership, communication, and experiential learning." },
  { q: "How can I join the events?", a: "You can explore our upcoming events like the Indore Democratic Summit or GENxMUN in the 'Programs' section of our website!" },
  { q: "Who can participate?", a: "Our programs are open to students from schools, colleges, and young leaders who want to build their civic and leadership capabilities." },
  { q: "How do I contact you?", a: "Scroll down to the footer and click on our email buttons to reach out directly to the team!" }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hi there! Welcome to YouthGenex. Please select a question below:' }]);
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
          transition: 'transform 0.2s ease',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            style={{
              position: 'fixed',
              bottom: '5.5rem',
              right: '2rem',
              width: '320px',
              height: '450px',
              background: 'var(--white)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              border: '1px solid var(--line)'
            }}
          >
            <div style={{ background: 'var(--red)', color: 'var(--white)', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontWeight: 800 }}>YouthGenex Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--white)', cursor: 'pointer', padding: 0 }}>
                <X size={20} />
              </button>
            </div>
            
            <div style={{ flex: 1, padding: '1rem', background: 'var(--soft)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{
                  background: msg.sender === 'bot' ? 'var(--white)' : 'var(--red)',
                  color: msg.sender === 'bot' ? 'var(--ink)' : 'var(--white)',
                  padding: '0.8rem',
                  borderRadius: 'var(--radius)',
                  alignSelf: msg.sender === 'bot' ? 'flex-start' : 'flex-end',
                  maxWidth: '85%',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  borderBottomLeftRadius: msg.sender === 'bot' ? 0 : 'var(--radius)',
                  borderBottomRightRadius: msg.sender === 'user' ? 0 : 'var(--radius)',
                }}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <div style={{ padding: '1rem', borderTop: '1px solid var(--line)', background: 'var(--white)', display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '180px', overflowY: 'auto' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: '0 0 0.3rem', fontWeight: 600 }}>Choose a question:</p>
              {faqs.map((faq, index) => (
                <button 
                  key={index} 
                  onClick={() => handleQuestionClick(faq)}
                  style={{
                    background: 'var(--soft)',
                    border: '1px solid rgba(17,17,17,0.1)',
                    color: 'var(--ink)',
                    padding: '0.6rem 0.8rem',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.85rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    lineHeight: 1.3
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(192,0,26,0.05)'; e.currentTarget.style.borderColor = 'var(--red)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'var(--soft)'; e.currentTarget.style.borderColor = 'rgba(17,17,17,0.1)'; }}
                >
                  {faq.q}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
