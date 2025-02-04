// src/components/Contato.jsx
import React, { useState } from 'react';
import './Contato.css';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de envio (API, email, etc.)
    setSubmitted(true);
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    });
  };

  return (
    <main className="contato-page">
      <h1>Entre em Contato</h1>
      <div className="contato-container">
        {/* Seção do Formulário */}
        <div className="form-section">
          <h2>Envie sua Mensagem</h2>
          {submitted && (
            <div className="success-message">
              Sua mensagem foi enviada com sucesso!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="assunto">Assunto</label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                placeholder="Assunto da mensagem"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Digite sua mensagem aqui"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn submit-btn">
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Seção WhatsApp */}
        <div className="whatsapp-section">
          <h2>Ou fale direto pelo WhatsApp</h2>
          <p>
            Clique no botão abaixo para iniciar uma conversa e tirar suas
            dúvidas instantaneamente.
          </p>
          <a
            href="https://wa.me/5511983108110"
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp-btn"
          >
            Iniciar Conversa
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contato;
