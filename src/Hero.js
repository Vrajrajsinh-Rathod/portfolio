import React, { useEffect, useState } from 'react';

const accent = '#2dd4bf';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <section id="home" style={sectionStyle}>
        <div
          style={{
            ...contentStyle,
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <div style={badgeStyle}>
            <span style={badgeDotStyle}></span>
            <span style={badgeTextStyle}>Open to contract &amp; full-time roles</span>
          </div>

          <h1 style={headingStyle}>Vrajrajsinh Rathod</h1>

          <p style={roleStyle}>
            Senior Python Developer <span style={{ color: '#4a5160' }}>·</span> Full Stack Engineer
          </p>

          <p style={bioStyle}>
            5+ years building backend systems and APIs for fintech, e-commerce and healthcare —
            currently contracting at Roboyo on a loan origination-to-decisioning platform used by
            major US fintech clients.
          </p>

          <div style={ctaRowStyle}>
            <a
              href={`${process.env.PUBLIC_URL}/Vrajrajsinh_Rathod_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              style={primaryBtnStyle}
            >
              View Resume
            </a>
            <a href="#contact" style={secondaryBtnStyle}>
              Get in Touch
            </a>
          </div>
        </div>

        <div
          style={{
            ...photoWrapStyle,
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s',
          }}
        >
          <div style={glowStyle}></div>
          <img
            src={`${process.env.PUBLIC_URL}/Vrajrajsinh_Rathod_Profile.jpg`}
            alt="Vrajrajsinh Rathod"
            style={imageStyle}
          />
        </div>
      </section>

      <section style={statSectionStyle}>
        <div className="stat-grid" style={statGridStyle}>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>5+ yrs</div>
            <div style={statLabelStyle}>backend &amp; full-stack experience</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>99.9%</div>
            <div style={statLabelStyle}>uptime on production APIs</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>50k+</div>
            <div style={statLabelStyle}>daily requests served</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>35%</div>
            <div style={statLabelStyle}>faster background processing</div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          #home {
            flex-direction: column-reverse;
            text-align: center;
            padding: 48px 24px !important;
          }
          #home h1 {
            font-size: 2.2rem !important;
          }
        }
        @media (max-width: 480px) {
          #home h1 {
            font-size: 1.9rem !important;
          }
        }
        @media (max-width: 640px) {
          .stat-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </>
  );
};

const sectionStyle = {
  minHeight: '72vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '72px',
  flexWrap: 'wrap',
  backgroundColor: '#0b0d12',
  padding: '96px 64px 72px',
  color: '#e8eaed',
};

const contentStyle = {
  flex: '1 1 480px',
  minWidth: 0,
  maxWidth: '560px',
};

const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  border: `1px solid ${accent}44`,
  background: `${accent}14`,
  borderRadius: '999px',
  padding: '6px 14px',
  marginBottom: '24px',
};

const badgeDotStyle = {
  width: '7px',
  height: '7px',
  borderRadius: '999px',
  background: accent,
  display: 'inline-block',
};

const badgeTextStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.72rem',
  fontWeight: 600,
  letterSpacing: '0.06em',
  color: accent,
  textTransform: 'uppercase',
};

const headingStyle = {
  margin: '0 0 14px',
  fontSize: '3.2rem',
  lineHeight: 1.08,
  fontWeight: 800,
  letterSpacing: '-0.02em',
  fontFamily: "'Inter', system-ui, sans-serif",
};

const roleStyle = {
  margin: '0 0 20px',
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#c7cbd3',
};

const bioStyle = {
  margin: '0 0 36px',
  fontSize: '1.02rem',
  lineHeight: 1.7,
  color: '#9aa3af',
  maxWidth: '480px',
};

const ctaRowStyle = {
  display: 'flex',
  gap: '14px',
  flexWrap: 'wrap',
};

const primaryBtnStyle = {
  background: accent,
  color: '#0b0d12',
  borderRadius: '8px',
  padding: '13px 26px',
  fontSize: '0.95rem',
  fontWeight: 700,
  display: 'inline-block',
  textDecoration: 'none',
  transition: 'opacity 0.15s ease, transform 0.15s ease',
};

const secondaryBtnStyle = {
  border: '1px solid #2d3340',
  color: '#c7cbd3',
  borderRadius: '8px',
  padding: '13px 26px',
  fontSize: '0.95rem',
  fontWeight: 600,
  display: 'inline-block',
  textDecoration: 'none',
  transition: 'border-color 0.15s ease, color 0.15s ease',
};

const photoWrapStyle = {
  flex: '0 0 auto',
  position: 'relative',
  width: '280px',
  height: '280px',
};

const glowStyle = {
  position: 'absolute',
  inset: '-28px',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${accent}26 0%, transparent 70%)`,
};

const imageStyle = {
  position: 'relative',
  width: '280px',
  height: '280px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: `3px solid ${accent}`,
  boxShadow: '0 20px 50px rgba(0,0,0,0.55)',
  display: 'block',
};

const statSectionStyle = {
  borderTop: '1px solid #1c2028',
  borderBottom: '1px solid #1c2028',
  padding: '44px 64px',
  backgroundColor: '#0b0d12',
};

const statGridStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: '32px',
  textAlign: 'center',
};

const statItemStyle = {};

const statNumberStyle = {
  fontSize: '2rem',
  fontWeight: 800,
  color: accent,
};

const statLabelStyle = {
  marginTop: '6px',
  fontSize: '0.82rem',
  color: '#7d8594',
  fontWeight: 500,
};

export default Hero;
