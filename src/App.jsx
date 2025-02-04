// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importando os componentes
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jogos from './pages/Jogos';
import AventuraCosmica from './components/AventuraCosmica';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import CorridaInfinita from './components/CorridaInfinita';
import QuebraCabecaMagico from './components/QuebraCabecaMagico';
import Trivia from './components/Trivia';
import WhatsappButton from './components/WhatsappButton';

function App() {
  return (
    <>
      <Navbar />
      <WhatsappButton />
      <Routes>
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/" element={<Home />} />
        <Route path="/jogos/aventura-cosmica" element={<AventuraCosmica />} />
        <Route path="/jogos/corrida-infinita" element={<CorridaInfinita />} />
        <Route path="/jogos/quebra-cabeca-magico" element={<QuebraCabecaMagico />} />
        <Route path="/jogos/trivia" element={<Trivia />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
}

export default App;
