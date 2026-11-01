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
      <div className="experience-eyebrow">Experience</div>
      <h2 className="experience-heading">Where I've worked</h2>

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
          padding: 90px 20px;
          background: #10131a;
          color: #e8eaed;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .experience-eyebrow {
          text-align: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #2dd4bf;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .experience-heading {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin-bottom: 50px;
          color: #e8eaed;
        }

        .experience-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        .experience-card {
          position: relative;
          background: #12151c;
          border: 1px solid #1c2028;
          padding: 32px 40px;
          border-radius: 12px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .experience-card:hover {
          border-color: #2dd4bf;
          transform: translateY(-2px);
        }

        .experience-card h3 {
          color: #e8eaed;
          margin-bottom: 5px;
          font-size: 1.3rem;
          font-weight: 700;
        }

        .experience-company {
          font-weight: 500;
          color: #7d8594;
        }

        .experience-card h4 {
          margin-top: 0;
          margin-bottom: 18px;
          color: #7d8594;
          font-size: 0.88rem;
          font-weight: 500;
        }

        .experience-dates {
          color: #7d8594;
        }

        .experience-card ul {
          padding-left: 20px;
          margin: 0;
        }

        .experience-card li {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 12px;
          color: #aab0ba;
        }

        .experience-card li::marker {
          color: #2dd4bf;
        }

        .exp-highlight {
          color: #e8eaed;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .experience-heading { font-size: 1.9rem; }
          .experience-card { padding: 26px 30px; }
        }

        @media (max-width: 768px) {
          .experience-heading { font-size: 1.7rem; margin-bottom: 30px; }
          .experience-card { padding: 20px 22px; }
        }

        @media (max-width: 480px) {
          .experience-card h3 { font-size: 1.15rem; }
          .experience-card li { font-size: 0.92rem; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
