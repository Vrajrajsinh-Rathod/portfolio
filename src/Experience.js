import React from 'react';

const experience = [
  {
    title: 'Senior Python Developer',
    company: 'Roboyo',
    dates: 'Sept 2026 – Present',
    location: 'London, UK · Contract',
    highlights: [
      'Build scalable Python microservices and REST APIs for a loan application platform used by major US fintech clients, covering the full flow from origination to decisioning.',
      'Develop batch and real-time financial data pipelines using Pandas, NumPy and PySpark for processing and reporting.',
      'Containerise services with Docker and deploy via Kubernetes and CI/CD pipelines on AWS/Azure.',
      'Contribute to early-stage agentic AI and LLM-aware automation initiatives within compliance-sensitive loan workflows.',
      'Lead code reviews and mentor junior developers on secure, maintainable coding practices.',
    ],
  },
  {
    title: 'Full Stack Engineer',
    company: 'ROI e-Solutions Ltd',
    dates: 'Jan 2024 – Mar 2025',
    location: 'London, UK',
    highlights: [
      'Architected and maintained RESTful APIs in Python and PHP for high-volume production applications processing 50k+ daily requests, maintaining 99.9% uptime.',
      'Designed asynchronous workflows with Celery and Redis for background data processing, cutting job processing time by 35%.',
      'Optimised backend performance through refined database queries and caching, improving response times by 30%.',
      'Automated deployment pipelines on AWS using Docker and GitHub Actions, cutting manual deployment effort by 50%.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Simprosys Infomedia',
    dates: 'Jan 2023 – Sept 2023',
    location: 'Ahmedabad, India',
    highlights: [
      'Built backend integrations with Shopify and Wix APIs, enabling seamless product sync, order management and webhook event handling.',
      'Improved API throughput by 28% through asynchronous programming with asyncio, Redis caching and targeted SQL optimisation.',
      'Automated build and deployment workflows using Docker and GitLab CI/CD, cutting release time to under 20 minutes.',
    ],
  },
  {
    title: 'Python Developer',
    company: 'Vinara Solutions',
    dates: 'Jan 2020 – Dec 2022',
    location: 'Ahmedabad, India',
    highlights: [
      'Developed Python backend services supporting order lifecycle, catalogue management and user operations for B2B platforms with 20k+ active users.',
      'Designed RESTful endpoints and relational database schemas; optimised SQL queries, cutting average execution time by 20%.',
      'Participated actively in code reviews, debugging and production support, helping reduce recurring bug rates by 15%.',
    ],
  },
];

const highlightKeywords = ['Python', 'PHP', 'React', 'Node.js', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Pandas', 'NumPy', 'PySpark', 'Celery', 'Redis'];

const highlightText = (text) => {
  const regex = new RegExp(`\\b(${highlightKeywords.join('|')})\\b`, 'g');
  return text.replace(regex, '<span class="exp-highlight">$1</span>');
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">Experience</h2>

      <div className="experience-wrapper">
        {experience.map(({ title, company, dates, location, highlights }) => (
          <div key={`${title}-${company}`} className="experience-card">
            <h3>
              {title} <span className="experience-company">— {company}</span>
            </h3>
            <h4>
              {location} <span className="experience-dates">· {dates}</span>
            </h4>
            <ul>
              {highlights.map((point, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: highlightText(point) }} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        .experience-section {
          padding: 60px 20px;
          min-height: 100vh;
          background: linear-gradient(to bottom, #1b1b34 0%, #262642 100%);
          color: #f0f0f0;
          font-family: 'Fira Code', monospace;
        }

        .experience-heading {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 50px;
          color: #00d4ff;
          text-shadow: 0 0 20px #00d4ff, 0 0 30px #00d4ff;
        }

        .experience-wrapper {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .experience-card {
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

        .experience-card::before {
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

        .experience-card:hover::before {
          width: 10px;
          box-shadow: 0 0 15px #00d4ff, 0 0 30px #66fcf1;
        }

        .experience-card:hover {
          transform: scale(1.01);
          box-shadow: 0 0 40px #00d4ff;
        }

        .experience-card h3 {
          color: #00d4ff;
          margin-bottom: 5px;
          font-size: 1.6rem;
        }

        .experience-company {
          font-weight: normal;
          color: #66fcf1;
        }

        .experience-card h4 {
          margin-top: 0;
          margin-bottom: 15px;
          color: #aaa;
          font-size: 0.95rem;
          font-weight: normal;
        }

        .experience-dates {
          color: #aaa;
        }

        .experience-card ul {
          padding-left: 20px;
          color: #ccc;
        }

        .experience-card li {
          font-size: 1.05rem;
          margin-bottom: 12px;
          color: #ccc;
        }

        .experience-card li::before {
          content: "•";
          position: absolute;
          left: -20px;
          color: #00d4ff;
          font-weight: bold;
        }

        .exp-highlight {
          color: #ffcc00;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .exp-highlight:hover {
          text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00, 0 0 30px #ffcc00;
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .experience-heading { font-size: 2.5rem; }
          .experience-card { padding: 30px 40px; }
        }

        @media (max-width: 768px) {
          .experience-heading { font-size: 2rem; margin-bottom: 30px; }
          .experience-card { padding: 20px 25px; }
        }

        @media (max-width: 480px) {
          .experience-heading { font-size: 1.8rem; }
          .experience-card h3 { font-size: 1.3rem; }
          .experience-card li { font-size: 0.95rem; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
