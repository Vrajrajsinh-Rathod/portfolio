import React, { useEffect, useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || 'dark';
    }
    return 'dark';
  });
  const menuItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore storage errors (private browsing, etc.)
    }
  }, [theme]);

  useEffect(() => {
    const sectionIds = menuItems.map((item) => item.toLowerCase());
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <a href="#home" className="logo" aria-label="Vrajrajsinh Rathod — home">
          <span className="logo-caret">&gt;</span>
          <span className="logo-vsr">vsr</span>
          <span className="logo-cursor" aria-hidden="true"></span>
        </a>

        <div className="desktop-menu">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`nav-link${activeSection === id ? ' active' : ''}`}
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className="nav-right">
          <a
            href={`${process.env.PUBLIC_URL}/Vrajrajsinh_Rathod_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn desktop-only"
          >
            Resume
          </a>

          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {menuItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`nav-link${activeSection === id ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}
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
          background: var(--header-bg);
          backdrop-filter: blur(8px);
          z-index: 1000;
          border-bottom: 1px solid var(--border);
          transition: background-color 0.25s ease, border-color 0.25s ease;
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
          color: var(--accent);
        }

        .logo-vsr {
          font-size: 1.3rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--text-0);
        }

        .logo-cursor {
          width: 9px;
          height: 18px;
          background: var(--accent);
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
          color: var(--text-3);
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
          background: var(--accent);
          transition: width 0.2s ease;
        }

        .nav-link:hover {
          color: var(--text-0);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active {
          color: var(--text-0);
        }

        .nav-link.active::after {
          width: 100%;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .resume-btn {
          color: var(--text-1);
          text-decoration: none;
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          padding: 8px 16px;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .resume-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .theme-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid var(--border-strong);
          background: transparent;
          color: var(--text-1);
          cursor: pointer;
          padding: 0;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .theme-toggle:hover {
          border-color: var(--accent);
          color: var(--accent);
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
          background: var(--text-0);
          border-radius: 2px;
        }

        .mobile-menu {
          position: absolute;
          top: 54px;
          right: 20px;
          background: var(--bg-2);
          border: 1px solid var(--border);
          padding: 18px;
          border-radius: 10px;
          box-shadow: 0 10px 30px var(--shadow-soft);
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
