import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Jogos from './pages/Jogos';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato'; // Certifique-se de ter criado esse componente

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
}

export default App;
