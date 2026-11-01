import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        © {new Date().getFullYear()}. All rights reserved.{' '}
        <span style={highlightStyle}>Built with React</span>
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#0b0d12',
  borderTop: '1px solid #1c2028',
  padding: '18px 16px',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backdropFilter: 'blur(8px)',
  boxSizing: 'border-box',
};

const textStyle = {
  color: '#7d8594',
  fontFamily: "'Inter', system-ui, sans-serif",
  fontWeight: 500,
  fontSize: '0.9rem',
  maxWidth: '95%',
  margin: '0 auto',
  wordWrap: 'break-word',
};

const highlightStyle = {
  color: '#2dd4bf',
  fontWeight: 600,
};

export default Footer;
