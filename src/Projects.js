import React from 'react';

const projects = [
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
    year: '2021–2022',
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

const highlightKeywords = ['Python', 'PHP', 'Node.js', 'React', 'Flask', 'MongoDB', 'TensorFlow', 'eCommerce'];

const highlightText = (text) => {
  const regex = new RegExp(`\\b(${highlightKeywords.join('|')})\\b`, 'g');
  return text.replace(regex, '<span class="highlight">$1</span>');
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>

      <div className="projects-wrapper">
        {projects.map(({ title, year, role, description, highlights }) => (
          <div key={title} className="project-card">
            <h3>
              {title} <span className="project-year">({year})</span>
            </h3>
            <h4>{role}</h4>
            <p dangerouslySetInnerHTML={{ __html: highlightText(description) }} />
            <ul>
              {highlights.map((point, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: highlightText(point) }} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        .projects-section {
          padding: 60px 20px;
          min-height: 100vh;
          background: linear-gradient(to bottom, #262642 0%, #1b1b34 100%);
          color: #f0f0f0;
          font-family: 'Fira Code', monospace;
        }

        .projects-heading {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 50px;
          color: #00d4ff;
          text-shadow: 0 0 20px #00d4ff, 0 0 30px #00d4ff;
        }

        .projects-wrapper {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .project-card {
          position: relative;
          width: 90%;
          background-color: rgba(42,42,64,0.95);
          padding: 40px 60px;
          border-radius: 10px;
          box-shadow: 0 0 25px rgba(0,212,255,0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          will-change: transform, box-shadow;
          margin: 0 auto;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: linear-gradient(180deg, #00d4ff, #66fcf1, #00d4ff);
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .project-card:hover::before {
          width: 10px;
          box-shadow: 0 0 15px #00d4ff, 0 0 30px #66fcf1;
        }

        .project-card:hover {
          transform: scale(1.01);
          box-shadow: 0 0 40px #00d4ff;
        }

        .project-card h3 {
          color: #00d4ff;
          margin-bottom: 5px;
          font-size: 1.6rem;
        }

        .project-year {
          font-weight: normal;
          color: #aaa;
          font-size: 0.9rem;
        }

        .project-card h4 {
          margin-top: 0;
          margin-bottom: 15px;
          color: #66fcf1;
        }

        /* Justify all text in project card */
        .project-card p,
        .project-card li {
          font-size: 1.05rem;
          margin-bottom: 15px;
          color: #ccc;
          text-align: justify;
        }

        .project-card ul {
          padding-left: 20px;
          color: #ccc;
        }

        .project-card li::before {
          content: "•";
          position: absolute;
          left: -20px;
          color: #00d4ff;
          font-weight: bold;
        }

        .highlight {
          color: #ffcc00;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .highlight:hover {
          text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00, 0 0 30px #ffcc00;
          transform: scale(1.05);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .projects-heading { font-size: 2.5rem; }
          .project-card { padding: 30px 40px; }
        }

        @media (max-width: 768px) {
          .projects-heading { font-size: 2rem; margin-bottom: 30px; }
          .project-card { padding: 20px 25px; }
        }

        @media (max-width: 480px) {
          .projects-heading { font-size: 1.8rem; }
          .project-card h3 { font-size: 1.3rem; }
          .project-card p,
          .project-card li { font-size: 0.95rem; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
