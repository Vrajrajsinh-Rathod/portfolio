import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <a href="#hero" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </nav>
    </header>
  );
};

const headerStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: '#222',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 1000,
};

const navStyle = {
  display: 'flex',
  gap: '25px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
};

export default Header;
