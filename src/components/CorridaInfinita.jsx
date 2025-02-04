// src/components/CorridaInfinita.jsx
import React, { useRef, useEffect, useState } from 'react';
import './CorridaInfinita.css';

function CorridaInfinita() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const [restartKey, setRestartKey] = useState(0); // usado para reinicializar o efeito

  // Armazena o estado interno do jogo
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
    const canvasWidth = 800;
    const canvasHeight = 400;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    let lastTime = 0;
    const obstacleInterval = 2000; // em milissegundos
    const gravity = 0.7;
    const jumpVelocity = -12;

    // Reinicializa o estado interno sempre que reiniciamos
    gameState.current.runner = { x: 50, y: 300, width: 30, height: 30, vy: 0 };
    gameState.current.obstacles = [];
    gameState.current.lastObstacleTime = 0;
    gameState.current.score = 0;
    setScore(0);
    setGameOver(false);

    // Se o jogo ainda não foi iniciado, não inicia o loop
    if (!started) return;

    function update(deltaTime) {
      const state = gameState.current;
      // Atualiza a física do runner
      state.runner.vy += gravity;
      state.runner.y += state.runner.vy;
      if (state.runner.y > 300) {
        state.runner.y = 300;
        state.runner.vy = 0;
      }
      // Cria obstáculos periodicamente
      state.lastObstacleTime += deltaTime;
      if (state.lastObstacleTime > obstacleInterval) {
        state.lastObstacleTime = 0;
        const obstacleHeight = Math.random() * 20 + 20; // altura entre 20 e 40
        state.obstacles.push({
          x: canvasWidth,
          y: 300 + 30 - obstacleHeight,
          width: 20,
          height: obstacleHeight,
          scored: false,
        });
      }
      // Atualiza posição dos obstáculos
      state.obstacles.forEach(obs => { obs.x -= 4; });
      state.obstacles = state.obstacles.filter(obs => obs.x + obs.width > 0);
      // Verifica colisões e pontua
      for (let obs of state.obstacles) {
        if (
          state.runner.x < obs.x + obs.width &&
          state.runner.x + state.runner.width > obs.x &&
          state.runner.y < obs.y + obs.height &&
          state.runner.y + state.runner.height > obs.y
        ) {
          setGameOver(true);
          return;
        }
        if (!obs.scored && obs.x + obs.width < state.runner.x) {
          obs.scored = true;
          state.score++;
          setScore(state.score);
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      // Desenha o chão
      ctx.fillStyle = '#654321';
      ctx.fillRect(0, 330, canvasWidth, canvasHeight - 330);
      // Desenha o runner
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

    if (started && !gameOver) {
      gameState.current.requestId = requestAnimationFrame(gameLoop);
    }

    return () => {
      cancelAnimationFrame(gameState.current.requestId);
    };
  }, [started, gameOver, restartKey]);

  // Função de pulo (dispara em clique ou toque)
  function handleJump(e) {
    e.preventDefault();
    if (!started) {
      setStarted(true);
    }
    if (gameState.current.runner.y >= 300) {
      gameState.current.runner.vy = -12;
    }
  }

  // Reinicia o jogo sem recarregar a página
  function handleRestart(e) {
    e.preventDefault();
    setStarted(false);
    setGameOver(false);
    setScore(0);
    setRestartKey(prev => prev + 1);
  }

  return (
    <main className="corrida-infinita-game">
      <h1>Corrida Infinita</h1>
      <canvas
        ref={canvasRef}
        onClick={handleJump}
        onTouchStart={handleJump}
      />
      {gameOver && (
        <div className="game-over">
          <h2>Game Over</h2>
          <p>Pontuação: {score}</p>
          <button className="btn" onClick={handleRestart}>
            Reiniciar
          </button>
        </div>
      )}
    </main>
  );
}

export default CorridaInfinita;
