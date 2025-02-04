// src/components/QuebraCabecaMagico.jsx
import React, { useState, useEffect } from 'react';
import './QuebraCabecaMagico.css';

function QuebraCabecaMagico() {
  const solvedBoard = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  const [board, setBoard] = useState([]);
  const [moves, setMoves] = useState(0);
  const [solved, setSolved] = useState(false);

  // Função para embaralhar o tabuleiro a partir do estado resolvido,
  // realizando movimentos válidos para garantir que o quebra-cabeça seja solucionável.
  const shuffleBoard = () => {
    let newBoard = [...solvedBoard];
    // Realiza 100 movimentos aleatórios válidos
    for (let i = 0; i < 100; i++) {
      const emptyIndex = newBoard.indexOf(0);
      const row = Math.floor(emptyIndex / 3);
      const col = emptyIndex % 3;
      let validMoves = [];
      if (row > 0) validMoves.push(emptyIndex - 3); // mover peça de cima para baixo
      if (row < 2) validMoves.push(emptyIndex + 3); // mover peça de baixo para cima
      if (col > 0) validMoves.push(emptyIndex - 1); // mover peça da esquerda para direita
      if (col < 2) validMoves.push(emptyIndex + 1); // mover peça da direita para esquerda
      const moveIndex = validMoves[Math.floor(Math.random() * validMoves.length)];
      // Troca a peça com o espaço vazio
      [newBoard[emptyIndex], newBoard[moveIndex]] = [newBoard[moveIndex], newBoard[emptyIndex]];
    }
    return newBoard;
  };

  // Inicializa o tabuleiro embaralhado ao montar o componente
  useEffect(() => {
    setBoard(shuffleBoard());
    setMoves(0);
    setSolved(false);
  }, []);

  // Verifica se o tabuleiro está resolvido
  useEffect(() => {
    if (board.length > 0 && board.every((val, idx) => val === solvedBoard[idx])) {
      setSolved(true);
    }
  }, [board]);

  // Função para processar o clique em uma peça
  const handleTileClick = (index) => {
    if (solved) return;
    const emptyIndex = board.indexOf(0);
    const rowEmpty = Math.floor(emptyIndex / 3);
    const colEmpty = emptyIndex % 3;
    const rowClick = Math.floor(index / 3);
    const colClick = index % 3;
    // Calcula a distância de Manhattan entre a peça clicada e o espaço vazio
    const distance = Math.abs(rowEmpty - rowClick) + Math.abs(colEmpty - colClick);
    if (distance === 1) {
      // Movimento válido: troca a peça clicada com o espaço vazio
      let newBoard = [...board];
      [newBoard[emptyIndex], newBoard[index]] = [newBoard[index], newBoard[emptyIndex]];
      setBoard(newBoard);
      setMoves(moves + 1);
    }
  };

  // Reinicia o quebra-cabeça embaralhando o tabuleiro
  const handleRestart = () => {
    setBoard(shuffleBoard());
    setMoves(0);
    setSolved(false);
  };

  return (
    <main className="quebra-cabeca-magico">
      <h1>Quebra-Cabeça Mágico</h1>
      <div className="puzzle-container">
        {board.map((tile, index) => (
          <div
            key={index}
            className={`puzzle-tile ${tile === 0 ? 'empty' : ''}`}
            onClick={() => handleTileClick(index)}
          >
            {tile !== 0 ? tile : ''}
          </div>
        ))}
      </div>
      <div className="stats">
        <p>Movimentos: {moves}</p>
        {solved && <p className="congrats">Parabéns! Você resolveu o quebra-cabeça!</p>}
      </div>
      <button className="btn" onClick={handleRestart}>Reiniciar Puzzle</button>
    </main>
  );
}

export default QuebraCabecaMagico;
