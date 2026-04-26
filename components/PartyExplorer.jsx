import React, { useState } from 'react';
import { partiesData } from '../data/civicData';
import { Search, Info } from 'lucide-react';

const PartyExplorer = ({ lang, onAskAi }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredParties = partiesData.filter(party => 
    party.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    party.leader.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container animate-fade-in">
      <h2 className="text-gradient" style={{marginBottom: '1rem'}}>
        {lang === 'en' ? 'Political Parties' : 'राजनीतिक दल'}
      </h2>
      
      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input 
          type="text" 
          className="search-input"
          placeholder={lang === 'en' ? "Search parties by name or leader..." : "नाम या नेता द्वारा पार्टियों की खोज करें..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid-cards">
        {filteredParties.map((party) => (
          <div key={party.id} className="card party-card">
            <div className="party-banner" style={{height: '100px', width: '100%', overflow: 'hidden', position: 'relative', backgroundColor: 'var(--bg-main)'}}>
              <img 
                src={party.image || "/election_banner.png"} 
                alt="Party Logo or Banner" 
                style={{width: '100%', height: '100%', objectFit: 'contain', padding: '0.5rem', opacity: 0.9}} 
              />
              <div className="party-stripe" style={{backgroundColor: party.color, position: 'absolute', bottom: 0, width: '100%', height: '6px'}}></div>
            </div>
            <div className="party-content">
              <h3 className="party-name">{party.name}</h3>
              <span className="ideology-tag">{party.ideology}</span>
              
              <div className="party-meta">
                <div className="meta-item">
                  <span style={{fontWeight: 600}}>{lang === 'en' ? 'Founded:' : 'स्थापित:'}</span> {party.founded}
                </div>
                <div className="meta-item">
                  <span style={{fontWeight: 600}}>{lang === 'en' ? 'Leader:' : 'नेता:'}</span> {party.leader}
                </div>
              </div>

              <button 
                className="btn-outline" 
                style={{marginTop: '1.5rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}
                onClick={() => onAskAi(`Tell me about ${party.name}`)}
              >
                <Info size={16} />
                {lang === 'en' ? 'Ask AI about this party' : 'इस पार्टी के बारे में AI से पूछें'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredParties.length === 0 && (
        <div style={{textAlign: 'center', padding: '3rem', color: 'var(--text-muted)'}}>
          {lang === 'en' ? 'No parties found matching your search.' : 'आपकी खोज से मेल खाने वाली कोई पार्टी नहीं मिली।'}
        </div>
      )}
    </div>
  );
};

export default PartyExplorer;
