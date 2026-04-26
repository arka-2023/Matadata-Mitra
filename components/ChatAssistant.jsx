import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { mockAiResponses } from '../data/politiciansData';

import { stateGreetings } from '../data/civicData';

const initialSuggestions = [
  "How do I register to vote?",
  "Explain the Lok Sabha election process",
  "What is the Model Code of Conduct?",
  "Tell me about major political parties",
  "Who is the Chief Election Commissioner?",
  "How are EVMs used?"
];

import { X, MessageSquare } from 'lucide-react';

const ChatAssistant = ({ lang, location, isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messages.length === 0) {
      const greetingObj = location && location.state && stateGreetings[location.state] 
        ? stateGreetings[location.state] 
        : stateGreetings["Default"];
      
      const localGreeting = greetingObj ? greetingObj.greeting : "Namaste";
      const districtText = location && location.district ? ` I see you are from ${location.district}.` : "";
      const districtTextHi = location && location.district ? ` मैं देख रहा हूँ कि आप ${location.district} से हैं।` : "";

      setMessages([
        { 
          role: 'bot', 
          text: {
            en: `${localGreeting}! I am Matdata Mitra, your friendly Indian civic education assistant.${districtText} I can help you understand the election process, voter registration, parties, and more. How can I help you today?`,
            hi: `${localGreeting}! मैं मतदाता मित्र हूं, आपका भारतीय नागरिक शिक्षा सहायक।${districtTextHi} मैं आपको चुनाव प्रक्रिया, मतदाता पंजीकरण, पार्टियों और बहुत कुछ समझने में मदद कर सकता हूं। आज मैं आपकी कैसे मदद कर सकता हूं?`
          }
        }
      ]);
    }
  }, [location]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', text: { en: text, hi: text } }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // Mock AI Response Delay
    setTimeout(() => {
      // Find a mock response if it matches exactly, otherwise give a generic response
      const matchedResponse = mockAiResponses[text];
      
      const botResponseText = matchedResponse || {
        en: "I am a prototype Matdata Mitra. Currently, I can only answer the specific suggested questions. Once connected to the Claude/Gemini API, I will be able to answer any question about Indian elections!",
        hi: "मैं एक प्रोटोटाइप मतदाता मित्र हूँ। वर्तमान में, मैं केवल विशिष्ट सुझाये गए प्रश्नों का उत्तर दे सकता हूँ। एक बार क्लॉड/जेमिनी एपीआई से जुड़ जाने के बाद, मैं भारतीय चुनावों के बारे में किसी भी प्रश्न का उत्तर दे सकूंगा!"
      };

      setMessages([...newMessages, { role: 'bot', text: botResponseText }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <button 
          className="floating-chat-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open Chat Assistant"
        >
          <MessageSquare size={28} />
        </button>
      )}

      {isOpen && (
        <div className="chat-container floating-chat-container animate-fade-in">
          <div className="chat-header">
            <div className="bot-avatar">
              <Bot size={24} />
            </div>
            <div style={{flex: 1}}>
              <h2 style={{margin: 0, fontSize: '1.25rem', color: 'white'}}>Matdata Mitra</h2>
              <span style={{fontSize: '0.875rem', opacity: 0.9}}>
                {lang === 'en' ? 'AI Civic Assistant' : 'AI नागरिक सहायक'}
              </span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              style={{color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem'}}
              aria-label="Close Chat"
            >
              <X size={24} />
            </button>
          </div>
      
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            {msg.text[lang]}
          </div>
        ))}
        {isTyping && (
          <div className="message bot">
            <span className="typing-indicator">...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length < 3 && (
        <div className="suggestions-container">
          {initialSuggestions.map((sug, idx) => (
            <button 
              key={idx} 
              className="suggestion-chip"
              onClick={() => handleSend(sug)}
            >
              <Sparkles size={14} style={{display: 'inline', marginRight: '4px'}} />
              {sug}
            </button>
          ))}
        </div>
      )}

      <div className="chat-input-area">
        <form 
          className="chat-form"
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
        >
          <input 
            type="text" 
            placeholder={lang === 'en' ? "Ask about Indian elections..." : "भारतीय चुनावों के बारे में पूछें..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn-primary" disabled={!input.trim() || isTyping}>
            <Send size={20} />
          </button>
        </form>
      </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
