// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          Wellington Barbosa
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/jogos" className="nav-link" onClick={() => setMenuOpen(false)}>
              Jogos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-link" onClick={() => setMenuOpen(false)}>
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
