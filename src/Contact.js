import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle}>
      <div style={eyebrowStyle}>Contact</div>
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
          transition: color 0.2s ease, opacity 0.2s ease;
        }

        a:hover {
          color: #2dd4bf;
          opacity: 0.9;
        }

        .icon {
          transition: transform 0.2s ease;
        }

        a:hover .icon {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          h2 { font-size: 1.9rem !important; }
          p { font-size: 1rem !important; }
          .icon { width: 20px !important; height: 20px !important; }
          #contact { padding: 60px 15px 120px; }
          a[href^="mailto"] { display: inline-flex; flex-wrap: wrap; margin-top: 8px; gap: 5px; }
        }

        @media (max-width: 480px) {
          h2 { font-size: 1.6rem !important; }
          p { font-size: 0.95rem !important; }
          .icon { width: 18px !important; height: 18px !important; }
          #contact { padding: 50px 10px 100px; }
          a[href^="mailto"] { margin-top: 10px; gap: 4px; }
        }
      `}</style>
    </section>
  );
};

const sectionStyle = {
  position: 'relative',
  padding: '90px 20px 150px',
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#10131a',
  color: '#e8eaed',
  fontFamily: "'Inter', system-ui, sans-serif",
  textAlign: 'center',
  overflow: 'hidden',
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
  fontSize: '2.2rem',
  fontWeight: 800,
  letterSpacing: '-0.01em',
  marginBottom: '25px',
  color: '#e8eaed',
};

const textStyle = {
  fontSize: '1.1rem',
  marginBottom: '14px',
  color: '#aab0ba',
};

const highlightLink = {
  color: '#e8eaed',
  fontWeight: 700,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  flexWrap: 'wrap',
};

const socialLinks = {
  display: 'flex',
  justifyContent: 'center',
  gap: '36px',
  marginTop: '16px',
  flexWrap: 'wrap',
};

const socialLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
  fontSize: '1rem',
  color: '#c7cbd3',
  textDecoration: 'none',
  fontWeight: 600,
};

export default Contact;
