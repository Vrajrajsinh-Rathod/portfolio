import React from 'react';

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      <h2 style={headingStyle}>About Me</h2>

      <div style={aboutContainer}>
        <p style={aboutText}>
          I’m <span style={highlight}>Vrajrajsinh Rathod</span>, a passionate and versatile Software Engineer with experience building scalable web and mobile applications across multiple industries and tech stacks.
          <br /><br />
          I specialize in <span style={highlight}>Python, PHP, Node.js, React, and RESTful API development</span>, with hands-on experience in cloud platforms like <span style={highlight}>Azure, AWS (S3), and Firebase</span>. I’ve delivered impactful projects ranging from e-commerce platforms to machine learning-based healthcare applications.
          <br /><br />
          With a strong academic foundation, I hold an <span style={highlight}>MSc in Computer Science</span> from the University of East London (Distinction). I thrive in both independent and collaborative environments.
          <br /><br />
          My goal is to create clean, efficient code and solve real-world problems through technology. I’m always excited to learn new frameworks, optimize performance, and bring ideas to life.
        </p>
      </div>

      <style>{`
        p span {
          transition: all 0.3s ease;
        }

        p span:hover {
          text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00, 0 0 30px #ffcc00;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

const sectionStyle = {
  position: 'relative',
  padding: '60px 20px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#262642',
  color: '#f0f0f0',
  fontFamily: "'Fira Code', monospace",
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '3rem',
  marginBottom: '50px',
  color: '#00d4ff',
  textShadow: '0 0 20px #00d4ff, 0 0 30px #00d4ff',
};

const aboutContainer = {
  display: 'flex',
  justifyContent: 'center', 
};

const aboutText = {
  fontSize: '1.15rem',
  lineHeight: '1.8',
  borderLeft: '5px solid #00d4ff',
  paddingLeft: '20px',
  fontFamily: "'Fira Code', monospace",
  backgroundColor: 'rgba(42,42,64,0.9)',
  padding: '30px',
  borderRadius: '15px',
  boxShadow: '0 0 25px rgba(0,212,255,0.4)',
};

const highlight = {
  color: '#ffcc00',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default About;
