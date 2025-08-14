import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle}>
      <h2 style={headingStyle}>Let's Connect</h2>

      <p style={textStyle}>
        You can reach me via email at{' '}
        <a href="mailto:rvrajrajsinh@gmail.com" style={highlightLink}>
          <FaEnvelope className="icon" />
          rvrajrajsinh@gmail.com
        </a>
      </p>

      <p style={textStyle}>Or follow me on social media:</p>

      <div style={socialLinks}>
        <a
          href="https://github.com/Vrajrajsinh-Rathod"
          target="_blank"
          rel="noopener noreferrer"
          style={socialLinkStyle}
        >
          <FaGithub className="icon" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/vrajrajsinh-rathod-894b731b5/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialLinkStyle}
        >
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
      </div>

      <style>{`
        a {
          transition: all 0.3s ease;
        }

        a:hover {
          color: #ffcc00;
          text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00;
        }

        .icon {
          transition: all 0.3s ease;
        }

        a:hover .icon {
          transform: scale(1.2);
          filter: drop-shadow(0 0 6px #ffcc00);
        }

        @media (max-width: 768px) {
          h2 { font-size: 2.2rem !important; }
          p { font-size: 1rem !important; }
          .icon { width: 22px !important; height: 22px !important; }
          #contact { padding: 40px 15px 100px; }
          a[href^="mailto"] { display: inline-flex; flex-wrap: wrap; margin-top: 8px; gap: 5px; }
        }

        @media (max-width: 480px) {
          h2 { font-size: 1.8rem !important; }
          p { font-size: 0.95rem !important; }
          .icon { width: 18px !important; height: 18px !important; }
          #contact { padding: 30px 10px 80px; }
          a[href^="mailto"] { margin-top: 10px; gap: 4px; }
        }
      `}</style>
    </section>
  );
};

const sectionStyle = {
  position: 'relative',
  padding: '60px 20px 150px',
  minHeight: '70vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1f1f3a',
  color: '#f0f0f0',
  fontFamily: "'Fira Code', monospace",
  textAlign: 'center',
  overflow: 'hidden',
};

const headingStyle = {
  fontSize: '3rem',
  marginBottom: '25px',
  color: '#00d4ff',
  textShadow: '0 0 20px #00d4ff, 0 0 30px #00d4ff',
};

const textStyle = {
  fontSize: '1.2rem',
  marginBottom: '15px',
  color: '#ccc',
};

const highlightLink = {
  color: '#ffcc00',
  fontWeight: 'bold',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  flexWrap: 'wrap',
};

const socialLinks = {
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  marginTop: '20px',
  flexWrap: 'wrap',
};

const socialLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '1.2rem',
  color: '#00d4ff',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
};

export default Contact;
