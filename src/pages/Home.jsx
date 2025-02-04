// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      {/* Seção Hero */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Bem-vindo ao Portfólio de Wellington Barbosa</h1>
          <p>
            Olá! Meu nome é Wellington Barbosa de Carvalho, sou desenvolvedor
            full stack com experiência em React, Node.js e MySQL. Apaixonado por
            tecnologia e inovação, gosto de transformar ideias em soluções
            funcionais e intuitivas.
          </p>
          <a href="#projects" className="btn">
            Ver Projetos
          </a>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section id="projects" className="projects">
        <h2>Projetos Recentes</h2>
        <div className="project-cards">
          {/* Card: Trivia Game */}
          <div className="card">
            <h3>Trivia Game</h3>
            <p>Teste seus conhecimentos com nosso jogo Trivia interativo!</p>
            <Link to="/jogos/trivia" className="btn">
              Saiba Mais
            </Link>
            {/* Preview clicável */}
            <Link to="/jogos/trivia" className="preview">
              <img
                src="https://i.ibb.co/r2Mww1cY/image.png"
                alt="Prévia: Trivia Game"
              />
            </Link>
          </div>

          {/* Card: Aventura Cósmica */}
          <div className="card">
            <h3>Aventura Cósmica</h3>
            <p>Embarque em uma jornada intergaláctica para salvar a galáxia!</p>
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
          <div className="card">
            <h3>Corrida Infinita</h3>
            <p>Corra e desvie dos obstáculos para conquistar a vitória!</p>
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
          <div className="card">
            <h3>Quebra-Cabeça Mágico</h3>
            <p>Desafie sua mente com um puzzle deslizante encantado!</p>
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
      </section>
    </main>
  );
}

export default Home;
