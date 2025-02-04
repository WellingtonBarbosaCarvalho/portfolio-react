// src/components/Trivia.jsx
import React from 'react';
import './Trivia.css';

function Trivia() {
  return (
    <main className="trivia-page">
      <h1>Trivia Game</h1>
      <div className="iframe-container">
        <iframe
          src="https://trivia-game-nufb.vercel.app/"
          title="Trivia Game"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}

export default Trivia;
