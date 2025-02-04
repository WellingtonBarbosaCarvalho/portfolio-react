import React, { useState } from 'react';
import './AventuraCosmica.css';

function AventuraCosmica() {
  const [distance, setDistance] = useState(0);

  const handleFly = () => {
    // Incrementa a distância com um valor aleatório para simular a "viagem"
    setDistance(distance + Math.floor(Math.random() * 100) + 50);
  };

  return (
    <main className="aventura-cosmica">
      <h1>Aventura Cósmica</h1>
      <p>
        Embarque nessa aventura intergaláctica e veja até onde sua nave pode chegar!
      </p>
      <div className="game-container">
        <p>
          Distância percorrida: <span>{distance}</span> km
        </p>
        <button className="btn" onClick={handleFly}>Voar</button>
      </div>
    </main>
  );
}

export default AventuraCosmica;
