// src/components/Jogos.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Jogos.css';

function Jogos() {
  return (
    <main className="jogos-page">
      <h1>Projetos de Jogos</h1>
      <p>
        Confira abaixo os jogos que desenvolveremos juntos, demonstrando inovação,
        criatividade e tecnologia.
      </p>
      <div className="project-list">
        {/* Card: Aventura Cósmica */}
        <div className="project-item">
          <h3>Aventura Cósmica</h3>
          <p>
            Embarque em uma jornada intergaláctica onde o herói enfrenta desafios
            em planetas distantes para salvar a galáxia.
          </p>
          <Link to="/jogos/aventura-cosmica" className="btn">
            Saiba Mais
          </Link>
          {/* Preview clicável */}
          <Link to="/jogos/aventura-cosmica" className="preview">
            <img
              src="https://i.ibb.co/6RtWMLWB/aventura-cosmica.png"
              alt="Prévia: Aventura Cósmica"
            />
          </Link>
        </div>

        {/* Card: Corrida Infinita */}
        <div className="project-item">
          <h3>Corrida Infinita</h3>
          <p>
            Um jogo de corrida dinâmico e cheio de ação, onde o jogador deve desviar
            de obstáculos e conquistar a vitória.
          </p>
          <Link to="/jogos/corrida-infinita" className="btn">
            Saiba Mais
          </Link>
          {/* Preview clicável */}
          <Link to="/jogos/corrida-infinita" className="preview">
            <img
              src="https://i.ibb.co/HLBYtdqn/corrida-inifinita.png"
              alt="Prévia: Corrida Infinita"
            />
          </Link>
        </div>

        {/* Card: Quebra-Cabeça Mágico */}
        <div className="project-item">
          <h3>Quebra-Cabeça Mágico</h3>
          <p>
            Desafie sua mente com enigmas e puzzles em um mundo encantado repleto de
            surpresas e desafios.
          </p>
          <Link to="/jogos/quebra-cabeca-magico" className="btn">
            Saiba Mais
          </Link>
          {/* Preview clicável */}
          <Link to="/jogos/quebra-cabeca-magico" className="preview">
            <img
              src="https://i.ibb.co/dhmw2Vx/quebra-cabeca-magico.png"
              alt="Prévia: Quebra-Cabeça Mágico"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Jogos;
