import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css';

import Header from './components/Header';
import ChatAssistant from './components/ChatAssistant';
import TimelineExplorer from './components/TimelineExplorer';
import OfficialsDirectory from './components/OfficialsDirectory';
import PartyExplorer from './components/PartyExplorer';
import PoliticianProfiles from './components/PoliticianProfiles';
import VoterChecklist from './components/VoterChecklist';
import Quiz from './components/Quiz';

import LocationOnboarding from './components/LocationOnboarding';
import NewsArea from './components/NewsArea';

import { MessageSquare, Calendar, Users, Flag, UserSearch, ListChecks, HelpCircle, Newspaper } from 'lucide-react';

function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('news');
  const [userLocation, setUserLocation] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatKey, setChatKey] = useState(0); // Used to trigger navigation to chat with a query
  const [aiQuery, setAiQuery] = useState('');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const tabs = [
    { id: 'news', icon: Newspaper, label: { en: 'Local News', hi: 'स्थानीय समाचार' } },
    { id: 'timeline', icon: Calendar, label: { en: 'Timeline', hi: 'समयरेखा' } },
    { id: 'officials', icon: Users, label: { en: 'Officials', hi: 'अधिकारी' } },
    { id: 'parties', icon: Flag, label: { en: 'Parties', hi: 'पार्टियां' } },
    { id: 'politicians', icon: UserSearch, label: { en: 'Politicians', hi: 'राजनेता' } },
    { id: 'checklist', icon: ListChecks, label: { en: 'Checklist', hi: 'चेकलिस्ट' } },
    { id: 'quiz', icon: HelpCircle, label: { en: 'Quiz', hi: 'प्रश्नोत्तरी' } }
  ];

  // Handler for "Ask AI" buttons in other components
  const handleAskAi = (query) => {
    // In a full implementation, we would pass this query down to the ChatAssistant 
    // to automatically send it. For this prototype, we switch to the chat tab.
    // To implement the auto-send, we would need to lift the state of the chat messages up to App.jsx
    // or use a context. For now, switching context is sufficient to demonstrate the flow.
    alert(`In a production environment, this would open the chat widget and automatically ask: "${query}"`);
    setIsChatOpen(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'news': return <NewsArea lang={lang} location={userLocation} />;
      case 'timeline': return <TimelineExplorer lang={lang} />;
      case 'officials': return <OfficialsDirectory lang={lang} />;
      case 'parties': return <PartyExplorer lang={lang} onAskAi={handleAskAi} />;
      case 'politicians': return <PoliticianProfiles lang={lang} onAskAi={handleAskAi} />;
      case 'checklist': return <VoterChecklist lang={lang} />;
      case 'quiz': return <Quiz lang={lang} />;
      default: return <NewsArea lang={lang} location={userLocation} />;
    }
  };

  return (
    <div className="app-container">
      {/* Dynamic Background Graphics */}
      <div className="bg-graphics">
        <div className="blob blob-saffron"></div>
        <div className="blob blob-green"></div>
        <div className="blob blob-blue"></div>
      </div>

      {!userLocation && <LocationOnboarding onComplete={setUserLocation} lang={lang} />}
      <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      
      <main className="main-content">
        <div className="container">
          <div className="nav-scroll">
            <div className="nav-tabs">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <Icon size={18} />
                    <span>{tab.label[lang]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {renderContent()}
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>
            {lang === 'en' 
              ? 'Matdata Mitra is a nonpartisan civic education tool. It does not represent the Election Commission of India or any political party.' 
              : 'मतदाता मित्र एक गैर-पक्षपाती नागरिक शिक्षा उपकरण है। यह भारत निर्वाचन आयोग या किसी राजनीतिक दल का प्रतिनिधित्व नहीं करता है।'}
          </p>
        </div>
      </footer>

      {/* Floating Chat Widget */}
      <ChatAssistant 
        lang={lang} 
        location={userLocation} 
        isOpen={isChatOpen} 
        setIsOpen={setIsChatOpen} 
      />
    </div>
  );
}

export default App;
