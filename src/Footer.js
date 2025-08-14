import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        © {new Date().getFullYear()}. All rights reserved.{' '}
        <span style={highlightStyle}>Built with React ⚡</span>
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#111',
  padding: '20px 10px',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  boxShadow: '0 -5px 20px rgba(0, 212, 255, 0.3)',
  backdropFilter: 'blur(8px)',
};

const textStyle = {
  color: '#00d4ff',
  fontFamily: "'Fira Code', monospace",
  fontWeight: '500',
  fontSize: '1rem',
  textShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff',
};

const highlightStyle = {
  color: '#ffcc00',
  fontWeight: 'bold',
  textShadow: '0 0 10px #ffcc00, 0 0 20px #ffcc00',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

export default Footer;
