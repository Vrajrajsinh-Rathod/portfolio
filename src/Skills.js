import React from 'react';

const skillsData = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'Bash/Shell'] },
  { title: 'Backend & APIs', items: ['Flask', 'Django', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets'] },
  { title: 'Front-End Development', items: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Data & Pipelines', items: ['Pandas', 'NumPy', 'PySpark', 'ETL Pipelines'] },
  { title: 'Databases & Caching', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { title: 'Cloud & DevOps', items: ['AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'GitLab CI/CD'] },
  { title: 'AI & Automation', items: ['Agentic AI & LLM Workflows', 'TensorFlow', 'scikit-learn'] },
  { title: 'Tools & Practices', items: ['Git', 'Postman', 'Jira', 'TDD', 'Agile/Scrum'] },
];

const Skills = () => {
  return (
    <section style={sectionStyle} id="skills">
      <div style={eyebrowStyle}>Skills</div>
      <h2 style={headingStyle}>Technical Skills</h2>
      <div style={gridStyle}>
        {skillsData.map((skillGroup) => (
          <div
            key={skillGroup.title}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h3 style={cardHeadingStyle}>{skillGroup.title}</h3>
            <ul style={listStyle}>
              {skillGroup.items.map((item) => (
                <li key={item} style={listItemStyle}>
                  <span style={dotStyle}></span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '90px 20px',
  backgroundColor: 'var(--bg-0)',
  borderTop: '1px solid var(--border)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'var(--text-0)',
  fontFamily: "'Inter', system-ui, sans-serif",
};

const eyebrowStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.78rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  color: 'var(--accent)',
  textTransform: 'uppercase',
  marginBottom: '12px',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '2.2rem',
  fontWeight: 800,
  letterSpacing: '-0.01em',
  marginBottom: '50px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '20px',
  maxWidth: '1100px',
  width: '100%',
};

const cardStyle = {
  background: 'var(--bg-2)',
  border: '1px solid var(--border)',
  padding: '26px',
  borderRadius: '12px',
  transition: 'border-color 0.2s ease, transform 0.2s ease, background-color 0.25s ease',
  color: 'var(--text-0)',
};

const cardHeadingStyle = {
  color: 'var(--text-0)',
  fontSize: '1.1rem',
  fontWeight: 700,
  marginBottom: '14px',
};

const listStyle = {
  listStyle: 'none',
  paddingLeft: 0,
  margin: 0,
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  color: 'var(--text-2)',
  fontSize: '0.95rem',
};

const dotStyle = {
  width: '5px',
  height: '5px',
  borderRadius: '50%',
  background: 'var(--accent)',
  display: 'inline-block',
  marginRight: '10px',
  flexShrink: 0,
};

export default Skills;
