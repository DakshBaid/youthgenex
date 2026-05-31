import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hi there! Welcome to YouthGenex. How can I help you today? Are you looking to register for IDS 2026?' }]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, I'm having trouble connecting right now." }]);
    }
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
            
            <div style={{ padding: '1rem', borderTop: '1px solid var(--line)', background: 'var(--white)', display: 'flex', gap: '0.5rem' }}>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..." 
                style={{ flex: 1, border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: '0.5rem 0.8rem', outline: 'none' }} 
              />
              <button onClick={handleSend} style={{ background: 'var(--red)', color: 'var(--white)', border: 'none', borderRadius: 'var(--radius)', width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
