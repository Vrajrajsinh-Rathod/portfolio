import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <a href="#home" className="logo" aria-label="Vrajrajsinh Rathod — home">
          <span className="logo-caret">&gt;</span>
          <span className="logo-vsr">vsr</span>
          <span className="logo-cursor" aria-hidden="true"></span>
        </a>

        <div className="desktop-menu">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        <a
          href={`${process.env.PUBLIC_URL}/Vrajrajsinh_Rathod_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn desktop-only"
        >
          Resume
        </a>

        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href={`${process.env.PUBLIC_URL}/Vrajrajsinh_Rathod_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        )}
      </nav>

      <style>{`
        header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(11,13,18,0.92);
          backdrop-filter: blur(8px);
          z-index: 1000;
          border-bottom: 1px solid #1c2028;
        }

        nav {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 24px;
          position: relative;
        }

        .logo {
          display: inline-flex;
          align-items: baseline;
          gap: 2px;
          font-family: 'JetBrains Mono', monospace;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .logo:hover {
          opacity: 0.85;
        }

        .logo-caret {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2dd4bf;
        }

        .logo-vsr {
          font-size: 1.3rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #e8eaed;
        }

        .logo-cursor {
          width: 9px;
          height: 18px;
          background: #2dd4bf;
          margin-left: 3px;
          animation: logo-blink 1.1s step-end infinite;
        }

        @keyframes logo-blink {
          0%, 55% { opacity: 1; }
          56%, 100% { opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-cursor { animation: none; }
        }

        .nav-link {
          position: relative;
          color: #9aa3af;
          text-decoration: none;
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          margin: 0 18px;
          transition: color 0.2s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: #2dd4bf;
          transition: width 0.2s ease;
        }

        .nav-link:hover {
          color: #e8eaed;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
        }

        .resume-btn {
          color: #c7cbd3;
          text-decoration: none;
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          border: 1px solid #2d3340;
          border-radius: 8px;
          padding: 8px 16px;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .resume-btn:hover {
          border-color: #2dd4bf;
          color: #2dd4bf;
        }

        .mobile-menu-icon {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 22px;
          height: 16px;
          cursor: pointer;
        }

        .burger-line {
          height: 2px;
          background: #e8eaed;
          border-radius: 2px;
        }

        .mobile-menu {
          position: absolute;
          top: 54px;
          right: 20px;
          background: #12151c;
          border: 1px solid #1c2028;
          padding: 18px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
        }

        .mobile-menu .nav-link {
          margin: 8px 0;
        }

        @media (max-width: 768px) {
          nav { justify-content: space-between; }
          .desktop-menu { display: none; }
          .resume-btn.desktop-only { display: none; }
          .mobile-menu-icon { display: flex; }
        }

        @media (max-width: 480px) {
          .mobile-menu { right: 10px; padding: 14px; }
          .nav-link { font-size: 14px; }
        }
      `}</style>
    </header>
  );
};

const headerStyle = {};
const navStyle = {};

export default Header;
