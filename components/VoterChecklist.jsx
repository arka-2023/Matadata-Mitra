import React, { useState } from 'react';
import { checklistData } from '../data/civicData';
import { Check, ExternalLink } from 'lucide-react';

const VoterChecklist = ({ lang }) => {
  const [completed, setCompleted] = useState(new Set());

  const toggleCheck = (id) => {
    const newCompleted = new Set(completed);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setCompleted(newCompleted);
  };

  const progress = Math.round((completed.size / checklistData.length) * 100);

  return (
    <div className="container animate-fade-in">
      <div className="checklist-container">
        <h2 className="text-gradient" style={{marginBottom: '1rem', textAlign: 'center'}}>
          {lang === 'en' ? 'Am I ready to vote?' : 'क्या मैं मतदान के लिए तैयार हूँ?'}
        </h2>
        
        <div style={{marginBottom: '2rem', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-xl)', padding: '0.25rem'}}>
          <div style={{
            height: '8px', 
            borderRadius: 'var(--radius-xl)', 
            backgroundColor: 'var(--saffron)', 
            width: `${progress}%`,
            transition: 'width 0.3s ease'
          }}></div>
        </div>
        <p style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)', fontWeight: 600}}>
          {progress}% {lang === 'en' ? 'Complete' : 'पूरा हुआ'}
        </p>

        <div>
          {checklistData.map((item) => {
            const isCompleted = completed.has(item.id);
            return (
              <div 
                key={item.id} 
                className={`card check-item ${isCompleted ? 'completed' : ''}`}
                onClick={() => toggleCheck(item.id)}
              >
                <div className="checkbox">
                  {isCompleted && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="check-content">
                  <h3>{item.task[lang]}</h3>
                  <p>{item.desc[lang]}</p>
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="check-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {lang === 'en' ? 'Visit Link' : 'लिंक पर जाएं'} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {progress === 100 && (
          <div className="card animate-fade-in" style={{
            marginTop: '2rem', 
            padding: '2rem', 
            textAlign: 'center', 
            backgroundColor: 'rgba(4, 106, 56, 0.05)',
            borderColor: 'var(--india-green)'
          }}>
            <h3 style={{color: 'var(--india-green)', marginBottom: '0.5rem'}}>
              {lang === 'en' ? 'You are ready!' : 'आप तैयार हैं!'}
            </h3>
            <p style={{color: 'var(--text-secondary)'}}>
              {lang === 'en' 
                ? 'Great job completing your voter checklist. Make your voice heard!' 
                : 'अपनी मतदाता चेकलिस्ट को पूरा करने का शानदार काम। अपनी आवाज़ सुनाएं!'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoterChecklist;
