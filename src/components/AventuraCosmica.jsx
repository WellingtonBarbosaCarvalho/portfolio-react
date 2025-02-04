// src/components/AventuraCosmica.jsx
import React, { useRef, useEffect, useState } from 'react';
import './AventuraCosmica.css';

function AventuraCosmica() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  // Usaremos um objeto ref para armazenar o estado do jogo (não causa re-renderização a cada frame)
  const gameState = useRef({
    spaceship: { x: 50, y: 200, width: 20, height: 20, vy: 0 },
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
    const obstacleInterval = 1500; // intervalo (ms) para criar novos obstáculos
    const gravity = 0.5;
    const jumpVelocity = -8;

    // Reinicia o jogo
    function resetGame() {
      gameState.current.spaceship = {
        x: 50,
        y: canvasHeight / 2,
        width: 20,
        height: 20,
        vy: 0,
      };
      gameState.current.obstacles = [];
      gameState.current.lastObstacleTime = 0;
      gameState.current.score = 0;
      setScore(0);
      setGameOver(false);
    }

    // Faz a nave "pular"
    function handleJump() {
      if (!started) {
        setStarted(true);
        resetGame();
        requestAnimationFrame(gameLoop);
      }
      gameState.current.spaceship.vy = jumpVelocity;
    }

    // Permite iniciar com a tecla espaço
    function handleKeyDown(e) {
      if (e.code === "Space") {
        e.preventDefault();
        handleJump();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('click', handleJump);

    // Atualiza a lógica do jogo
    function update(deltaTime) {
      const state = gameState.current;
      // Atualiza a física da nave
      state.spaceship.vy += gravity;
      state.spaceship.y += state.spaceship.vy;

      // Impede que a nave saia do topo
      if (state.spaceship.y < 0) {
        state.spaceship.y = 0;
        state.spaceship.vy = 0;
      }
      // Se a nave bater no chão, finaliza o jogo
      if (state.spaceship.y + state.spaceship.height > canvasHeight) {
        state.spaceship.y = canvasHeight - state.spaceship.height;
        setGameOver(true);
        return;
      }

      // Cria novos obstáculos periodicamente
      state.lastObstacleTime += deltaTime;
      if (state.lastObstacleTime > obstacleInterval) {
        state.lastObstacleTime = 0;
        const gapHeight = 100; // tamanho do espaço para a nave passar
        const gapY = Math.random() * (canvasHeight - gapHeight);
        state.obstacles.push({
          x: canvasWidth,
          gapY: gapY,
          gapHeight: gapHeight,
          width: 40,
          scored: false,
        });
      }

      // Atualiza a posição dos obstáculos e remove os que saíram da tela
      state.obstacles.forEach((obs) => {
        obs.x -= 2; // velocidade dos obstáculos
      });
      state.obstacles = state.obstacles.filter((obs) => obs.x + obs.width > 0);

      // Verifica colisões e pontua quando a nave passa pelos obstáculos
      for (let obs of state.obstacles) {
        // Se a nave estiver na faixa horizontal do obstáculo
        if (
          state.spaceship.x < obs.x + obs.width &&
          state.spaceship.x + state.spaceship.width > obs.x
        ) {
          // Colisão: se a nave estiver acima do gap ou abaixo dele
          if (
            state.spaceship.y < obs.gapY ||
            state.spaceship.y + state.spaceship.height > obs.gapY + obs.gapHeight
          ) {
            setGameOver(true);
            return;
          }
        }
        // Se a nave passar pelo obstáculo, incrementa a pontuação (apenas uma vez)
        if (!obs.scored && obs.x + obs.width < state.spaceship.x) {
          obs.scored = true;
          state.score++;
          setScore(state.score);
        }
      }
    }

    // Desenha o jogo
    function draw() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Desenha a nave (em amarelo)
      ctx.fillStyle = 'yellow';
      const s = gameState.current.spaceship;
      ctx.fillRect(s.x, s.y, s.width, s.height);

      // Desenha os obstáculos (em verde)
      ctx.fillStyle = 'green';
      gameState.current.obstacles.forEach((obs) => {
        // Obstáculo superior
        ctx.fillRect(obs.x, 0, obs.width, obs.gapY);
        // Obstáculo inferior
        ctx.fillRect(obs.x, obs.gapY + obs.gapHeight, obs.width, canvasHeight - obs.gapY - obs.gapHeight);
      });

      // Desenha a pontuação
      ctx.fillStyle = 'white';
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

      // Se o jogo não acabou, continua o loop
      if (!gameOver) {
        gameState.current.requestId = requestAnimationFrame(gameLoop);
      }
    }

    // Limpeza de eventos quando o componente desmontar
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('click', handleJump);
      cancelAnimationFrame(gameState.current.requestId);
    };
  }, [started, gameOver]);

  return (
    <main className="aventura-cosmica-game">
      <h1>Aventura Cósmica</h1>
      <canvas
        ref={canvasRef}
        width="800"
        height="400"
        style={{ border: '1px solid #fff', backgroundColor: '#000' }}
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

export default AventuraCosmica;
