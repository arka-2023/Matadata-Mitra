import React, { useState } from 'react';
import { politiciansData } from '../data/politiciansData';
import { Search, User, MapPin, Sparkles } from 'lucide-react';

const PoliticianProfiles = ({ lang, onAskAi }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPoliticians = politiciansData.filter(pol => 
    pol.name.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pol.name.hi.includes(searchTerm) ||
    pol.party.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container animate-fade-in">
      <h2 className="text-gradient" style={{marginBottom: '1rem'}}>
        {lang === 'en' ? 'Politician Profiles' : 'राजनेताओं के प्रोफाइल'}
      </h2>
      
      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input 
          type="text" 
          className="search-input"
          placeholder={lang === 'en' ? "Search a politician or party..." : "किसी राजनेता या पार्टी की खोज करें..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid-cards">
        {filteredPoliticians.map((pol) => (
          <div key={pol.id} className="card politician-card">
            <div className="pol-header">
              <div className="pol-avatar" style={{overflow: 'hidden'}}>
                <img 
                  src={pol.image || "/politician_avatar.png"} 
                  alt={pol.name[lang]} 
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </div>
              <div className="pol-info">
                <h3>{pol.name[lang]}</h3>
                <span>{pol.party}</span>
              </div>
            </div>
            
            <div className="pol-details">
              <div style={{display: 'flex', gap: '0.5rem', alignItems: 'flex-start'}}>
                <span style={{color: 'var(--saffron)'}}>Role:</span>
                <span style={{color: 'var(--text-primary)'}}>{pol.role[lang]}</span>
              </div>
              <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                <MapPin size={14} style={{color: 'var(--india-green)'}}/>
                <span>{pol.state[lang]}</span>
              </div>
              <div style={{display: 'flex', gap: '0.5rem'}}>
                <span>Years active:</span>
                <span>{pol.years}</span>
              </div>
            </div>

            <button 
              className="btn-outline" 
              style={{marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}
              onClick={() => onAskAi(`Tell me about ${pol.name.en}`)}
            >
              <Sparkles size={16} style={{color: 'var(--saffron)'}}/>
              {lang === 'en' ? `Ask AI about ${pol.name.en}` : `${pol.name.hi} के बारे में AI से पूछें`}
            </button>
          </div>
        ))}
      </div>
      
      {filteredPoliticians.length === 0 && (
        <div style={{textAlign: 'center', padding: '3rem', color: 'var(--text-muted)'}}>
          {lang === 'en' ? 'No politicians found matching your search.' : 'आपकी खोज से मेल खाने वाला कोई राजनेता नहीं मिला।'}
        </div>
      )}
    </div>
  );
};

export default PoliticianProfiles;
