import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-eyebrow">Contact</div>
      <h2 className="contact-heading">Let's build something</h2>
      <p className="contact-sub">
        Open to contract and full-time Senior Python / backend roles in the UK.
        Email is the fastest way to reach me — I usually reply within a day.
      </p>

      <div className="contact-card">
        <a href="mailto:rvrajrajsinh@gmail.com" className="contact-email-btn">
          <FaEnvelope />
          rvrajrajsinh@gmail.com
        </a>

        <div className="contact-divider">
          <span>or find me on</span>
        </div>

        <div className="contact-social-row">
          <a
            href="https://github.com/Vrajrajsinh-Rathod"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vrajrajsinh-rathod-894b731b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 90px 20px 110px;
          background: #10131a;
          border-top: 1px solid #1c2028;
          color: #e8eaed;
          font-family: 'Inter', system-ui, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .contact-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #2dd4bf;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .contact-heading {
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
          color: #e8eaed;
        }

        .contact-sub {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #9aa3af;
          max-width: 520px;
          margin: 0 0 44px;
        }

        .contact-card {
          background: #12151c;
          border: 1px solid #1c2028;
          border-radius: 16px;
          padding: 40px 44px;
          max-width: 460px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 26px;
        }

        .contact-email-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background: #2dd4bf;
          color: #0b0d12;
          font-weight: 700;
          font-size: 1rem;
          padding: 15px 20px;
          border-radius: 8px;
          text-decoration: none;
          transition: opacity 0.15s ease, transform 0.15s ease;
        }

        .contact-email-btn:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .contact-divider {
          display: flex;
          align-items: center;
          width: 100%;
          color: #5b6472;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .contact-divider::before,
        .contact-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #1c2028;
        }

        .contact-divider span {
          padding: 0 14px;
          white-space: nowrap;
        }

        .contact-social-row {
          display: flex;
          gap: 14px;
          width: 100%;
        }

        .contact-social-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: 1px solid #2d3340;
          border-radius: 8px;
          padding: 12px 14px;
          color: #c7cbd3;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.92rem;
          transition: border-color 0.15s ease, color 0.15s ease;
        }

        .contact-social-btn:hover {
          border-color: #2dd4bf;
          color: #2dd4bf;
        }

        @media (max-width: 480px) {
          .contact-heading { font-size: 1.9rem; }
          .contact-sub { font-size: 1rem; }
          .contact-card { padding: 30px 24px; }
          .contact-section { padding: 70px 16px 90px; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
