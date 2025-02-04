// src/components/WhatsappButton.jsx
import React from 'react';
import './WhatsappButton.css';

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5511983108110"  
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
}

export default WhatsappButton;
