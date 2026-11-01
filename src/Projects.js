import React from 'react';

const projects = [
  {
    title: 'TradeVest: AI Stock Prediction Platform',
    year: '2025–2026',
    role: 'Full Stack Developer',
    description:
      'Built an AI-powered stock prediction platform combining a React frontend, Node.js middleware and a FastAPI machine-learning service, backed by MongoDB Atlas and streaming live data via WebSockets.',
    highlights: [
      'Engineered an XGBoost-powered prediction engine trained on 10 years of market data across 9,457+ global equities, achieving 73.42% directional accuracy.',
      'Deployed a decoupled microservice architecture across Vercel and Render with JWT authentication, achieving sub-100ms latency.',
      'Designed the full data pipeline from ingestion through model inference to real-time client updates over WebSockets.',
    ],
    repo: 'https://github.com/Vrajrajsinh-Rathod/tradevest',
  },
  {
    title: 'LetMeKnow: Mobile Application',
    year: '2024',
    role: 'Full Stack Developer',
    description:
      'Developed a cross-platform mobile app enabling users to buy and sell used goods across multiple categories (cars, electronics, furniture, clothing).',
    highlights: [
      'Engineered features for secure image and video uploads with compression and format validation, improving media handling performance by 40%.',
      'Implemented advanced search filters and keyword-based product discovery, enhancing user experience and increasing session duration.',
      'Built a scalable backend with Python, Flask and MongoDB to manage user data, product listings, and video ads with low latency.',
      'Integrated third-party payment gateways with end-to-end encryption to ensure secure and seamless transactions.',
      'Conducted extensive unit and integration testing, leading to a 30% reduction in post-release bugs.',
    ],
  },
  {
    title: 'Detecting Alzheimer’s Syndrome using Machine Learning (Dissertation)',
    year: '2024',
    role: 'Lead Researcher',
    description:
      "Researched machine learning applications for early Alzheimer's detection using neuroimaging datasets (brain MRI scans).",
    highlights: [
      'Designed and implemented machine learning pipelines using Python (scikit-learn, TensorFlow) for early detection of Alzheimer\'s from brain MRI scans.',
      'Pre-processed large neuroimaging datasets for noise reduction and feature extraction, improving model accuracy by 15%.',
      'Developed predictive models using convolutional neural networks (CNN), achieving high sensitivity and specificity metrics.',
      'Created an interactive UI prototype to visualise diagnostic results, facilitating easier interpretation by clinicians.',
      'Authored a research paper highlighting novel approaches to neurodegenerative disease diagnosis, receiving positive academic feedback.',
    ],
  },
  {
    title: 'Shoptronics: eCommerce Web Portal',
    year: '',
    role: 'Lead Full Stack Developer',
    description:
      'Designed and developed a responsive eCommerce website with ReactJS frontend and PHP backend, supporting product catalogues, user accounts, and order management.',
    highlights: [
      'Integrated Shopify APIs for real-time product synchronization and inventory updates, streamlining store operations.',
      'Implemented a secure payment gateway with SSL encryption and multi-factor authentication, enhancing transaction security.',
      'Optimised site load times by 35% through code splitting, lazy loading, and database indexing.',
      'Conducted user acceptance testing (UAT) and gathered feedback to iteratively improve UI/UX design, resulting in a 20% boost in user retention.',
    ],
  },
];

const highlightKeywords = ['Python', 'PHP', 'Node.js', 'React', 'Flask', 'FastAPI', 'MongoDB', 'TensorFlow', 'XGBoost', 'WebSockets', 'eCommerce'];

const highlightText = (text) => {
  const regex = new RegExp(`\\b(${highlightKeywords.join('|')})\\b`, 'g');
  return text.replace(regex, '<span class="highlight">$1</span>');
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-eyebrow">Projects</div>
      <h2 className="projects-heading">Things I've built</h2>

      <div className="projects-wrapper">
        {projects.map(({ title, year, role, description, highlights, repo }) => (
          <div key={title} className="project-card">
            <h3>
              {title} {year && <span className="project-year">({year})</span>}
            </h3>
            <h4>{role}</h4>
            <p dangerouslySetInnerHTML={{ __html: highlightText(description) }} />
            <ul>
              {highlights.map((point, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: highlightText(point) }} />
              ))}
            </ul>
            {repo && (
              <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .projects-section {
          padding: 90px 20px;
          background: #0b0d12;
          color: #e8eaed;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .projects-eyebrow {
          text-align: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #2dd4bf;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .projects-heading {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin-bottom: 50px;
          color: #e8eaed;
        }

        .projects-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .project-card {
          position: relative;
          background: #12151c;
          border: 1px solid #1c2028;
          padding: 32px 40px;
          border-radius: 12px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .project-card:hover {
          border-color: #2dd4bf;
          transform: translateY(-2px);
        }

        .project-card h3 {
          color: #e8eaed;
          margin-bottom: 5px;
          font-size: 1.3rem;
          font-weight: 700;
        }

        .project-year {
          font-weight: 500;
          color: #7d8594;
          font-size: 0.85rem;
        }

        .project-card h4 {
          margin-top: 0;
          margin-bottom: 16px;
          color: #7d8594;
          font-size: 0.88rem;
          font-weight: 500;
        }

        .project-card p,
        .project-card li {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 12px;
          color: #aab0ba;
        }

        .project-card ul {
          padding-left: 20px;
          margin: 0 0 8px;
        }

        .project-card li::marker {
          color: #2dd4bf;
        }

        .highlight {
          color: #e8eaed;
          font-weight: 600;
        }

        .project-link {
          display: inline-block;
          margin-top: 4px;
          color: #2dd4bf;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: opacity 0.2s ease;
        }

        .project-link:hover {
          opacity: 0.75;
        }

        @media (max-width: 1024px) {
          .projects-heading { font-size: 1.9rem; }
          .project-card { padding: 26px 30px; }
        }

        @media (max-width: 768px) {
          .projects-heading { font-size: 1.7rem; margin-bottom: 30px; }
          .project-card { padding: 20px 22px; }
        }

        @media (max-width: 480px) {
          .project-card h3 { font-size: 1.15rem; }
          .project-card p,
          .project-card li { font-size: 0.92rem; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
