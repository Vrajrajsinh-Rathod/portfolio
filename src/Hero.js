import React, { useEffect, useState } from 'react';

const Hero = () => {
  const fullSkill = "Software Engineer | Cloud & API Specialist";
  const [skillText, setSkillText] = useState("");
  const [animate, setAnimate] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setAnimate(true);

    let skillIndex = 0;
    let forward = true;
    let typingTimeout;

    const type = () => {
      const delay = Math.floor(Math.random() * 80) + 100; // 100-180ms per char

      if (forward) {
        setSkillText(fullSkill.slice(0, skillIndex + 1));
        skillIndex++;
        if (skillIndex === fullSkill.length) {
          forward = false;
          typingTimeout = setTimeout(type, 1000); // pause at full text
          return;
        }
      } else {
        setSkillText(fullSkill.slice(0, skillIndex - 1));
        skillIndex--;
        if (skillIndex === 0) {
          forward = true;
          typingTimeout = setTimeout(type, 500); // pause at empty
          return;
        }
      }
      typingTimeout = setTimeout(type, delay);
    };

    type();

    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <section id="home" style={sectionStyle}>
      <div
        style={{
          ...contentStyle,
          opacity: animate ? 1 : 0,
          transform: animate ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 1s ease-out'
        }}
      >
        <h1 style={headingStyle}>
          Hi, I'm <span style={{ color: '#00d4ff' }}>Vrajrajsinh Rathod</span>
        </h1>
        <p style={subHeadingStyle}>
          {skillText}<span style={cursorStyle}>|</span>
        </p>
        <a
          href="https://drive.google.com/file/d/1ups1zzmjEDdAvKL7gUUbFfXNMF7bJEc1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{ ...buttonStyle, ...(hover ? buttonHoverStyle : {}) }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <span style={glitchTextStyle}>See My Resume</span>
          </button>
        </a>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/21004063.jpg`}
        alt="Vrajraj"
        style={{
          ...imageStyle,
          opacity: animate ? 1 : 0,
          transform: animate ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 1s ease-out 0.3s'
        }}
      />
      <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes glitch {
          0% { transform: translate(0); opacity: 1; }
          20% { transform: translate(-2px, 2px); opacity: 0.8; }
          40% { transform: translate(2px, -2px); opacity: 0.6; }
          60% { transform: translate(-2px, -2px); opacity: 0.8; }
          80% { transform: translate(2px, 2px); opacity: 1; }
          100% { transform: translate(0); opacity: 1; }
        }

        /* RESPONSIVE STYLES */
        @media (max-width: 768px) {
          #home {
            flex-direction: column;
            text-align: center;
            padding: 40px 20px;
          }
          #home img {
            width: 200px;
            height: 200px;
            margin-top: 20px;
          }
          #home h1 {
            font-size: 2rem !important;
          }
          #home p {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          #home h1 {
            font-size: 1.6rem !important;
          }
          #home p {
            font-size: 0.9rem !important;
          }
          #home img {
            width: 150px;
            height: 150px;
          }
          #home button {
            padding: 10px 18px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

const sectionStyle = {
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  backgroundColor: '#1f1f3a',
  padding: '20px',
  color: '#f0f0f0',
};

const contentStyle = {
  maxWidth: '500px',
};

const headingStyle = {
  fontSize: '3rem',
  marginBottom: '20px',
  textShadow: '1px 1px 5px rgba(0,0,0,0.5)',
  fontFamily: "'Fira Code', monospace",
};

const subHeadingStyle = {
  fontSize: '1.5rem',
  marginBottom: '20px',
  color: '#ffcc00',
  fontFamily: "'Fira Code', monospace",
};

const cursorStyle = {
  color: '#00d4ff',
  fontWeight: 'bold',
  animation: 'blink 1s infinite',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  padding: '12px 25px',
  border: '2px solid #00d4ff',
  borderRadius: '10px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 0 5px rgba(0,212,255,0.6)',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  position: 'relative',
  overflow: 'hidden',
  textDecoration: 'none',
};

const buttonHoverStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff',
  backgroundColor: '#0056b3',
};

const glitchTextStyle = {
  display: 'inline-block',
  animation: 'glitch 1s infinite',
};

const imageStyle = {
  borderRadius: '50%',
  width: '300px',
  height: '300px',
  objectFit: 'cover',
  border: '4px solid #00d4ff',
  boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
  animation: 'float 3s ease-in-out infinite',
};

export default Hero;
