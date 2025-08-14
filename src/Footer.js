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
  padding: '2vw 1vw', // relative padding for responsiveness
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  boxShadow: '0 -5px 20px rgba(0, 212, 255, 0.3)',
  backdropFilter: 'blur(8px)',
  boxSizing: 'border-box',
};

const textStyle = {
  color: '#00d4ff',
  fontFamily: "'Fira Code', monospace",
  fontWeight: '500',
  fontSize: '1rem',
  maxWidth: '95%', // ensures text doesn't overflow
  margin: '0 auto',
  textShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff',
  wordWrap: 'break-word', // allows wrapping for long text
};

const highlightStyle = {
  color: '#ffcc00',
  fontWeight: 'bold',
  textShadow: '0 0 10px #ffcc00, 0 0 20px #ffcc00',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

// Optional: Add media queries for smaller screens
// Use inline style workaround with JS
const mediaQuery = window.matchMedia('(max-width: 480px)');
if (mediaQuery.matches) {
  textStyle.fontSize = '0.85rem';
  footerStyle.padding = '3vw 2vw';
}

export default Footer;
