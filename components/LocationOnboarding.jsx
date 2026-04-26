import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const statesList = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Gujarat", "Haryana", 
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Odisha", 
  "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "West Bengal"
];

const LocationOnboarding = ({ onComplete, lang }) => {
  const [selectedState, setSelectedState] = useState('');
  const [district, setDistrict] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedState && district) {
      onComplete({ state: selectedState, district: district });
    }
  };

  return (
    <div className="onboarding-overlay" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
      backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 100, display: 'flex', 
      alignItems: 'center', justifyContent: 'center', padding: '1rem',
      backdropFilter: 'blur(5px)'
    }}>
      <div className="card animate-fade-in" style={{
        maxWidth: '500px', width: '100%', padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        {/* Subtle background decoration */}
        <div style={{
          position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', 
          backgroundColor: 'rgba(255, 107, 0, 0.1)', borderRadius: '50%', zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute', bottom: '-50px', left: '-50px', width: '150px', height: '150px', 
          backgroundColor: 'rgba(4, 106, 56, 0.1)', borderRadius: '50%', zIndex: 0
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '100px', height: '100px', margin: '0 auto 1.5rem', 
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <img src="/ashoka_stambh.png" alt="Ashoka Stambh" style={{maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))'}} />
          </div>
          
          <h2 className="text-gradient" style={{marginBottom: '1rem', fontSize: '1.75rem'}}>
            {lang === 'en' ? 'Welcome to Matdata Mitra!' : 'मतदाता मित्र में आपका स्वागत है!'}
          </h2>
          <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
            {lang === 'en' 
              ? "To provide you with the most relevant election news and local information, please tell us where you're from." 
              : "आपको सबसे प्रासंगिक चुनाव समाचार और स्थानीय जानकारी प्रदान करने के लिए, कृपया हमें बताएं कि आप कहां से हैं।"}
          </p>

          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div style={{textAlign: 'left'}}>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)'}}>
                {lang === 'en' ? 'Your State' : 'आपका राज्य'}
              </label>
              <select 
                value={selectedState} 
                onChange={(e) => setSelectedState(e.target.value)}
                style={{
                  width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', 
                  border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-card)', 
                  color: 'var(--text-primary)', fontFamily: 'inherit', fontSize: '1rem'
                }}
                required
              >
                <option value="">{lang === 'en' ? 'Select State...' : 'राज्य चुनें...'}</option>
                {statesList.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div style={{textAlign: 'left'}}>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)'}}>
                {lang === 'en' ? 'Your District/City' : 'आपका जिला/शहर'}
              </label>
              <input 
                type="text" 
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder={lang === 'en' ? 'e.g. Pune, Varanasi...' : 'उदा. पुणे, वाराणसी...'}
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{marginTop: '1rem', padding: '1rem', fontSize: '1.125rem'}}>
              {lang === 'en' ? 'Continue' : 'जारी रखें'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocationOnboarding;
