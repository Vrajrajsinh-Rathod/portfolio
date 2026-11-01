import React from 'react';

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      <div style={eyebrowStyle}>About</div>
      <h2 style={headingStyle}>Backend-focused engineer, comfortable end to end</h2>

      <div style={aboutContainer}>
        <p style={aboutText}>
          I'm <span style={highlight}>Vrajrajsinh Rathod</span>, a Senior Python Developer and Full Stack Engineer with 5+ years' experience designing and deploying scalable backend systems and web applications across fintech, e-commerce and healthcare.
          <br /><br />
          I'm currently contracting at <span style={highlight}>Roboyo</span>, building Python microservices and REST APIs for a loan origination-to-decisioning platform used by major US fintech clients.
          <br /><br />
          I specialize in Python, PHP, Node.js, React, and RESTful API development, with hands-on experience in cloud platforms like AWS, Microsoft Azure, and Firebase. I've delivered impactful projects ranging from e-commerce platforms to machine learning-based healthcare applications.
          <br /><br />
          With a strong academic foundation, I hold an <span style={highlight}>MSc in Computer Science (Distinction)</span> from the University of East London, building on a <span style={highlight}>BEng in Computer Engineering (Distinction)</span> from Gujarat Technological University. I thrive in both independent and collaborative environments.
          <br /><br />
          My goal is to create clean, efficient code and solve real-world problems through technology. I'm always excited to learn new frameworks, optimize performance, and bring ideas to life.
        </p>
      </div>
    </section>
  );
};

const sectionStyle = {
  position: 'relative',
  padding: '100px 20px',
  borderTop: '1px solid #1c2028',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#10131a',
  color: '#e8eaed',
  fontFamily: "'Inter', system-ui, sans-serif",
};

const eyebrowStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.78rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  color: '#2dd4bf',
  textTransform: 'uppercase',
  marginBottom: '12px',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '2.2rem',
  fontWeight: 800,
  letterSpacing: '-0.01em',
  marginBottom: '40px',
  maxWidth: '680px',
};

const aboutContainer = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};

const aboutText = {
  fontSize: '1.08rem',
  lineHeight: 1.85,
  maxWidth: '780px',
  color: '#aab0ba',
};

const highlight = {
  color: '#e8eaed',
  fontWeight: 700,
};

export default About;
