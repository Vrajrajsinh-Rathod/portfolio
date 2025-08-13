import React from 'react';

const Hero = () => {
  const heroStyle = {
    minHeight: '70vh',
    padding: '50px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f5f5f5',
    flexWrap: 'wrap-reverse', // image goes above text on small screens
    gap: '20px',
  };

  const textContainerStyle = {
    maxWidth: '600px',
    textAlign: 'center',
  };

  const imageStyle = {
    borderRadius: '50%',
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    border: '4px solid #222',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = '#0056b3';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = '#007BFF';
  };

  return (
    <section id="hero" style={heroStyle}>
      <div style={textContainerStyle}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
          Hi, I'm Vrajrajsinh Rathod
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#666' }}>
          Software Engineer | Cloud & API Specialist | Python, PHP, Node.js
        </p>
        <a
          href="https://drive.google.com/file/d/1GbHZGvZuHIoxdkqplFbKxyhMbRniEIlc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            See My Resume
          </button>
        </a>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/21004063.jpg`}
        alt="Vrajrajsinh Rathod"
        style={imageStyle}
      />
    </section>
  );
};

export default Hero;
