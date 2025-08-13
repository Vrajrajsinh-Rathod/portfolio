import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle}>
      <h2>Lets Connect</h2>
      <p>You can reach me via email at <a href="rvrajrajsinh@gmail.com">rvrajrajsinh@gmail.com</a></p>
      <p>Or follow me on social media:</p>
      <div style={socialLinks}>
        <a href="#" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
        <a href="https://www.linkedin.com/in/vrajrajsinh-rathod-894b731b5/" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '60px 20px',
  maxWidth: '900px',
  margin: '0 auto 60px',
  textAlign: 'center',
};

const socialLinks = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '10px',
};

const linkStyle = {
  color: '#222',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Contact;
