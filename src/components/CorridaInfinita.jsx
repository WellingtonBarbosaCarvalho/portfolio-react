// src/components/CorridaInfinita.jsx
import React, { useRef, useEffect, useState } from 'react';
import './CorridaInfinita.css';

function CorridaInfinita() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  // Estado interno que não precisa causar re-render a cada frame
  const gameState = useRef({
    runner: { x: 50, y: 300, width: 30, height: 30, vy: 0 },
    obstacles: [],
    lastObstacleTime: 0,
    score: 0,
    requestId: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    let lastTime = 0;
    const obstacleInterval = 2000; // intervalo para criar novos obstáculos (ms)
    const gravity = 0.7;
    const jumpVelocity = -12;

    // Reinicia o jogo
    function resetGame() {
      gameState.current.runner = {
        x: 50,
        y: 300, // posição inicial na "linha do chão"
        width: 30,
        height: 30,
        vy: 0,
      };
      gameState.current.obstacles = [];
      gameState.current.lastObstacleTime = 0;
      gameState.current.score = 0;
      setScore(0);
      setGameOver(false);
    }

    // Faz o personagem "pular" se estiver no chão
    function handleJump() {
      if (!started) {
        setStarted(true);
        resetGame();
        requestAnimationFrame(gameLoop);
      }
      if (gameState.current.runner.y >= 300) {
        gameState.current.runner.vy = jumpVelocity;
      }
    }

    // Permite usar a tecla espaço para pular
    function handleKeyDown(e) {
      if (e.code === "Space") {
        e.preventDefault();
        handleJump();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('click', handleJump);

    // Atualiza a física do jogo
    function update(deltaTime) {
      const state = gameState.current;
      // Atualiza a velocidade e posição do personagem
      state.runner.vy += gravity;
      state.runner.y += state.runner.vy;

      // Impede que o personagem caia abaixo do chão (definido em y = 300)
      if (state.runner.y > 300) {
        state.runner.y = 300;
        state.runner.vy = 0;
      }

      // Cria obstáculos periodicamente
      state.lastObstacleTime += deltaTime;
      if (state.lastObstacleTime > obstacleInterval) {
        state.lastObstacleTime = 0;
        // Define altura aleatória para o obstáculo
        const obstacleHeight = Math.random() * 20 + 20; // entre 20 e 40 pixels
        state.obstacles.push({
          x: canvasWidth,
          y: 300 + 30 - obstacleHeight, // alinhado com o "chão" (30px de altura de "chão")
          width: 20,
          height: obstacleHeight,
          scored: false,
        });
      }

      // Atualiza a posição dos obstáculos e remove os que já saíram da tela
      state.obstacles.forEach(obs => {
        obs.x -= 4; // velocidade dos obstáculos
      });
      state.obstacles = state.obstacles.filter(obs => obs.x + obs.width > 0);

      // Verifica colisões e pontua quando o personagem ultrapassa o obstáculo
      for (let obs of state.obstacles) {
        // Checa colisão
        if (
          state.runner.x < obs.x + obs.width &&
          state.runner.x + state.runner.width > obs.x &&
          state.runner.y < obs.y + obs.height &&
          state.runner.y + state.runner.height > obs.y
        ) {
          setGameOver(true);
          return;
        }
        // Incrementa a pontuação se o obstáculo for ultrapassado
        if (!obs.scored && obs.x + obs.width < state.runner.x) {
          obs.scored = true;
          state.score++;
          setScore(state.score);
        }
      }
    }

    // Desenha o jogo
    function draw() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Desenha o "chão"
      ctx.fillStyle = '#654321'; // marrom
      ctx.fillRect(0, 330, canvasWidth, canvasHeight - 330);

      // Desenha o personagem (runner)
      ctx.fillStyle = 'blue';
      const r = gameState.current.runner;
      ctx.fillRect(r.x, r.y, r.width, r.height);

      // Desenha os obstáculos
      ctx.fillStyle = 'red';
      gameState.current.obstacles.forEach(obs => {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
      });

      // Exibe a pontuação
      ctx.fillStyle = 'black';
      ctx.font = '24px Arial';
      ctx.fillText(`Score: ${gameState.current.score}`, 10, 30);
    }

    // Loop principal do jogo
    function gameLoop(timestamp) {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      update(deltaTime);
      draw();

      if (!gameOver) {
        gameState.current.requestId = requestAnimationFrame(gameLoop);
      }
    }

    // Limpeza dos eventos quando o componente desmontar
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('click', handleJump);
      cancelAnimationFrame(gameState.current.requestId);
    };
  }, [started, gameOver]);

  return (
    <main className="corrida-infinita-game">
      <h1>Corrida Infinita</h1>
      <canvas 
        ref={canvasRef}
        width="800"
        height="400"
        style={{ border: '1px solid #000', backgroundColor: '#d0e7f9' }}
      />
      {gameOver && (
        <div className="game-over">
          <h2>Game Over</h2>
          <p>Pontuação: {score}</p>
          <button className="btn" onClick={() => window.location.reload()}>
            Reiniciar
          </button>
        </div>
      )}
      {!started && !gameOver && (
        <div className="start-instructions">
          <p>Clique ou pressione a barra de espaço para começar!</p>
        </div>
      )}
    </main>
  );
}

export default CorridaInfinita;
