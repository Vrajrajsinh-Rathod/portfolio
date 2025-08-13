import React from 'react';
const Hero = () => {
  return (
    <section id="hero" style={heroStyle}>
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Hi, I'm Vrajrajsinh Rathod</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#666' }}>
          Software Engineer | Cloud & API Specialist
        </p>
        <a href="https://drive.google.com/file/d/1GbHZGvZuHIoxdkqplFbKxyhMbRniEIlc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button
            style={{
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
        >
            See My Resume
        </button>
        </a>
      </div>
      <img
        src="/21004063.jpg"
        alt="Vrajraj"
        style={imageStyle}
      />
    </section>
  );
};

const heroStyle = {
  minHeight: '70vh',
  paddingTop: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: '#f5f5f5',
  flexWrap: 'wrap',
  gap: '20px',
};

const imageStyle = {
  borderRadius: '50%',
  width: '300px',
  height: '300px',
  objectFit: 'cover',
  border: '4px solid #222',
};

const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#222',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
};

export default Hero;
