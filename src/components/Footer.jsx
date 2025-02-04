// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Gabriel Santos. Todos os direitos reservados.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/gabriel-santos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/gabrielsantos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/icons/github.png" alt="GitHub" />
          </a>
          {/* Você pode adicionar mais redes sociais se desejar */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
