import React from 'react';
import { Settings2, Moon, Sun, Languages } from 'lucide-react';

const Header = ({ lang, setLang, theme, setTheme }) => {
  return (
    <header className="app-header">
      <div className="container header-content">
        <div className="logo-section">
          {/* Subtle Ashoka Chakra Representation */}
          <svg className="chakra-icon" width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4"/>
            <circle cx="50" cy="50" r="3" fill="currentColor"/>
            {/* 24 spokes */}
            {[...Array(24)].map((_, i) => (
              <line 
                key={i}
                x1="50" y1="50" 
                x2="50" y2="5" 
                stroke="currentColor" 
                strokeWidth="1.5"
                transform={`rotate(${i * 15} 50 50)`}
              />
            ))}
          </svg>
          <div className="app-title">
            <span className="en">Matdata Mitra</span>
            <span className="hi">मतदाता मित्र</span>
          </div>
        </div>
        
        <div className="header-controls">
          <button 
            className="icon-btn" 
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            aria-label="Toggle Language"
            title="Toggle English/Hindi"
          >
            <Languages size={20} />
            <span style={{fontSize: '0.75rem', fontWeight: 'bold', marginLeft: '2px'}}>{lang.toUpperCase()}</span>
          </button>
          
          <button 
            className="icon-btn" 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle Dark Mode"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
