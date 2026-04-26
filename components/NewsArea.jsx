import React from 'react';
import { Newspaper, Megaphone, MapPin } from 'lucide-react';

const NewsArea = ({ lang, location }) => {
  const stateName = location ? location.state : "Your State";
  const districtName = location ? location.district : "Your District";

  const localNews = [
    {
      id: 1,
      headline: {
        en: `Major political rally scheduled at ${districtName} central ground this Sunday.`,
        hi: `इस रविवार को ${districtName} के केंद्रीय मैदान में एक बड़ी राजनीतिक रैली निर्धारित है।`
      },
      time: "2 hours ago",
      source: "Local Reporter"
    },
    {
      id: 2,
      headline: {
        en: `Voter registration drive launched across ${stateName} for college students.`,
        hi: `${stateName} भर में कॉलेज के छात्रों के लिए मतदाता पंजीकरण अभियान शुरू किया गया।`
      },
      time: "5 hours ago",
      source: "State Election Office"
    },
    {
      id: 3,
      headline: {
        en: `Police increase security checks in ${districtName} ahead of the silence period.`,
        hi: `मौन अवधि से पहले ${districtName} में पुलिस ने सुरक्षा जांच बढ़ा दी है।`
      },
      time: "1 day ago",
      source: "District Administration"
    }
  ];

  const nationalNews = [
    {
      id: 4,
      headline: {
        en: `Election Commission announces new guidelines for EVM tracking nationwide.`,
        hi: `चुनाव आयोग ने देश भर में ईवीएम ट्रैकिंग के लिए नए दिशा-निर्देशों की घोषणा की।`
      },
      time: "3 hours ago",
      source: "ECI Press Release"
    },
    {
      id: 5,
      headline: {
        en: `Supreme Court upholds VVPAT verification process for the upcoming general elections.`,
        hi: `सुप्रीम कोर्ट ने आगामी आम चुनावों के लिए वीवीपीएटी सत्यापन प्रक्रिया को बरकरार रखा।`
      },
      time: "12 hours ago",
      source: "National News"
    }
  ];

  return (
    <div className="container animate-fade-in">
      <h2 className="text-gradient" style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
        <Newspaper /> {lang === 'en' ? 'Election Updates' : 'चुनाव अद्यतन'}
      </h2>
      <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
        {lang === 'en' ? `Latest news and updates for ${districtName}, ${stateName} and the nation.` : `${districtName}, ${stateName} और राष्ट्र के लिए नवीनतम समाचार और अपडेट।`}
      </p>

      <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        {/* Local News Section */}
        <section>
          <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--saffron)'}}>
            <MapPin size={20}/> {lang === 'en' ? `Local News: ${districtName}` : `स्थानीय समाचार: ${districtName}`}
          </h3>
          <div className="grid-cards">
            {localNews.map(news => (
              <div key={news.id} className="card" style={{padding: '1.5rem', display: 'flex', flexDirection: 'column'}}>
                <h4 style={{fontSize: '1.125rem', marginBottom: '1rem', lineHeight: 1.4}}>{news.headline[lang]}</h4>
                <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)'}}>
                  <span>{news.source}</span>
                  <span>{news.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr style={{border: 'none', borderTop: '1px solid var(--border-color)'}} />

        {/* National News Section */}
        <section>
          <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--navy-blue)'}}>
            <Megaphone size={20}/> {lang === 'en' ? 'National Updates' : 'राष्ट्रीय अद्यतन'}
          </h3>
          <div className="grid-cards">
            {nationalNews.map(news => (
              <div key={news.id} className="card" style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', borderLeft: '4px solid var(--navy-blue)'}}>
                <h4 style={{fontSize: '1.125rem', marginBottom: '1rem', lineHeight: 1.4}}>{news.headline[lang]}</h4>
                <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)'}}>
                  <span>{news.source}</span>
                  <span>{news.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsArea;
