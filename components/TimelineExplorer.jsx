import React, { useState } from 'react';
import { timelineData } from '../data/civicData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TimelineExplorer = ({ lang }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container animate-fade-in">
      <h2 className="text-gradient" style={{marginBottom: '1rem'}}>
        {lang === 'en' ? 'Election Timeline' : 'चुनाव समयरेखा'}
      </h2>
      <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
        {lang === 'en' 
          ? 'Follow the step-by-step process of a general election in India.' 
          : 'भारत में आम चुनाव की चरण-दर-चरण प्रक्रिया का पालन करें।'}
      </p>

      <div className="timeline-wrapper">
        {timelineData.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div 
              className="card timeline-card" 
              onClick={() => toggleExpand(item.id)}
            >
              <div className="timeline-header">
                <span className="timeline-phase">{item.phase[lang]}</span>
                {expandedId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              <span className="timeline-duration">{item.duration[lang]}</span>
              
              {expandedId === item.id && (
                <div className="timeline-details animate-fade-in">
                  {item.details[lang]}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineExplorer;
