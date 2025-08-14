import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        {/* Desktop Menu */}
        <div className="desktop-menu">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>

        {/* Mobile Menu */}
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
          </div>
        )}
      </nav>

      <style>{`
        header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(17,17,34,0.95);
          backdrop-filter: blur(8px);
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0,212,255,0.3);
        }

        nav {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center; /* Center menu on large screens */
          align-items: center;
          padding: 10px 20px;
          position: relative;
        }

        .nav-link {
          position: relative;
          color: #fff;
          text-decoration: none;
          font-family: 'Fira Code', monospace;
          font-weight: bold;
          margin: 0 25px; /* spacing between links */
          transition: all 0.3s ease;
          animation: neonPulse 2s infinite alternate;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: #00d4ff;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #00d4ff;
          text-shadow: 0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 20px #00d4ff;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        @keyframes neonPulse {
          0%, 100% { text-shadow: 0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 20px #00d4ff; }
          50% { text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff; }
        }

        /* Desktop Menu */
        .desktop-menu {
          display: flex;
          align-items: center;
        }

        /* Hamburger */
        .mobile-menu-icon {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 25px;
          height: 20px;
          cursor: pointer;
        }

        .burger-line {
          height: 3px;
          background: #00d4ff;
          border-radius: 2px;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: absolute;
          top: 60px;
          right: 20px;
          background: rgba(17,17,34,0.95);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0,212,255,0.5);
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          nav {
            justify-content: space-between; /* keep hamburger on right */
          }
          .desktop-menu { display: none; }
          .mobile-menu-icon { display: flex; }
        }

        @media (max-width: 480px) {
          .mobile-menu {
            right: 10px;
            padding: 15px;
          }
          .nav-link {
            font-size: 14px;
            margin: 10px 0;
          }
        }
      `}</style>
    </header>
  );
};

// Inline styles
const headerStyle = {};
const navStyle = {};

export default Header;
