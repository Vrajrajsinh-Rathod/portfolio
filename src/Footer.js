import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#222',
  color: '#fff',
  textAlign: 'center',
  padding: '15px 10px',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

export default Footer;
