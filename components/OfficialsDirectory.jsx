import React from 'react';
import { officialsData } from '../data/civicData';
import * as Icons from 'lucide-react';

const OfficialsDirectory = ({ lang }) => {
  return (
    <div className="container animate-fade-in">
      <h2 className="text-gradient" style={{marginBottom: '1rem'}}>
        {lang === 'en' ? 'Key Officials & Bodies' : 'प्रमुख अधिकारी और निकाय'}
      </h2>
      <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
        {lang === 'en' 
          ? 'Learn about the important constitutional figures in the Indian government.' 
          : 'भारत सरकार में महत्वपूर्ण संवैधानिक हस्तियों के बारे में जानें।'}
      </p>

      <div className="grid-cards">
        {officialsData.map((official) => {
          const IconComponent = Icons[official.icon];
          return (
            <div key={official.id} className="card" style={{padding: '1.5rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                <img 
                  src={official.image || "/politician_avatar.png"} 
                  alt={official.name[lang]} 
                  style={{
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--border-color)'
                  }} 
                />
                <div>
                  <h3 style={{fontSize: '1.125rem', margin: 0}}>{official.title[lang]}</h3>
                  <span style={{color: 'var(--saffron)', fontWeight: '600', fontSize: '0.875rem'}}>
                    {official.name[lang]}
                  </span>
                </div>
              </div>
              <p style={{fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0}}>
                {official.role[lang]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OfficialsDirectory;
