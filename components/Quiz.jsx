import React, { useState } from 'react';
import { quizData } from '../data/civicData';
import { Award, RefreshCcw } from 'lucide-react';

const Quiz = ({ lang }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (index) => {
    if (selectedOption !== null) return; // Prevent multiple clicks

    setSelectedOption(index);
    if (index === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="container animate-fade-in">
        <div className="quiz-container card score-card">
          <Award size={64} style={{color: 'var(--saffron)', margin: '0 auto 1.5rem', display: 'block'}} />
          <h2 className="text-gradient" style={{marginBottom: '2rem'}}>
            {lang === 'en' ? 'Quiz Completed!' : 'प्रश्नोत्तरी पूरी हुई!'}
          </h2>
          
          <div className="score-circle">
            {score}/{quizData.length}
          </div>
          
          <p style={{fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem'}}>
            {score >= 4 
              ? (lang === 'en' ? "Excellent! You are a highly informed citizen." : "बहुत बढ़िया! आप एक उच्च जागरूक नागरिक हैं।")
              : (lang === 'en' ? "Good try! Keep learning about the election process." : "अच्छा प्रयास! चुनाव प्रक्रिया के बारे में सीखते रहें।")
            }
          </p>
          
          <button className="btn-primary" onClick={restartQuiz} style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.125rem', padding: '0.75rem 2rem'}}>
            <RefreshCcw size={20} />
            {lang === 'en' ? 'Try Again' : 'पुनः प्रयास करें'}
          </button>
        </div>
      </div>
    );
  }

  const q = quizData[currentQuestion];
  const isAnswered = selectedOption !== null;

  return (
    <div className="container animate-fade-in">
      <div className="quiz-container card">
        <div className="quiz-header">
          <span style={{fontWeight: 600, color: 'var(--text-secondary)'}}>
            {lang === 'en' ? `Question ${currentQuestion + 1} of ${quizData.length}` : `प्रश्न ${currentQuestion + 1} / ${quizData.length}`}
          </span>
          <span style={{fontWeight: 600, color: 'var(--saffron)'}}>
            {lang === 'en' ? `Score: ${score}` : `स्कोर: ${score}`}
          </span>
        </div>

        <h3 className="question-text">{q.q[lang]}</h3>

        <div className="options-grid">
          {q.options[lang].map((opt, index) => {
            let className = "btn-outline option-btn";
            if (isAnswered) {
              if (index === q.answer) {
                className += " correct";
              } else if (index === selectedOption) {
                className += " wrong";
              }
            }

            return (
              <button 
                key={index} 
                className={className}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="explanation animate-fade-in">
            <p style={{margin: 0, color: 'var(--text-primary)', fontWeight: 500}}>
              {q.explanation[lang]}
            </p>
          </div>
        )}

        {isAnswered && (
          <div style={{marginTop: '2rem', textAlign: 'right'}}>
            <button className="btn-primary" onClick={handleNext}>
              {currentQuestion < quizData.length - 1 
                ? (lang === 'en' ? 'Next Question' : 'अगला प्रश्न') 
                : (lang === 'en' ? 'See Results' : 'परिणाम देखें')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
