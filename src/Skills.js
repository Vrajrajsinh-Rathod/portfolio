import React from 'react';

const skillsData = [
  { title: 'Front-End Development', items: ['ReactJS', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Back-End Development', items: ['Node.js', 'PHP', 'Python', 'Flask', 'RESTful APIs'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB', 'SQLite', 'PostgreSQL'] },
  { title: 'Cloud & Hosting', items: ['Microsoft Azure', 'AWS (S3)', 'Firebase'] },
  { title: 'Developer Tools', items: ['Git', 'Docker', 'VSCode', 'PyCharm', 'Postman', 'WordPress'] },
];

const Skills = () => {
  return (
    <section style={sectionStyle} id="skills">
      <h2 style={headingStyle}>Technical Skills</h2>
      <div style={gridStyle}>
        {skillsData.map((skillGroup) => (
          <div
            key={skillGroup.title}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 25px #00d4ff, 0 0 40px #00d4ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.3)';
            }}
          >
            <h3 style={cardHeadingStyle}>{skillGroup.title}</h3>
            <ul style={listStyle}>
              {skillGroup.items.map((item) => (
                <li key={item} style={listItemStyle}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '60px 20px',
  backgroundColor: '#1f1f3a',
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: "'Fira Code', monospace",
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '3rem',
  marginBottom: '50px',
  color: '#00d4ff',
  textShadow: '0 0 15px #00d4ff, 0 0 30px #00d4ff',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '25px',
  maxWidth: '1000px',
  width: '100%',
};

const cardStyle = {
  background: 'linear-gradient(135deg, rgba(33,33,60,0.95), rgba(25,25,45,0.95))',
  padding: '25px',
  borderRadius: '15px',
  boxShadow: '0 0 15px rgba(0,212,255,0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  color: '#f0f0f0',
};

const cardHeadingStyle = {
  color: '#00d4ff',
  fontSize: '1.4rem',
  marginBottom: '12px',
};

const listStyle = {
  listStyle: 'none',
  paddingLeft: 0,
};

const listItemStyle = {
  marginBottom: '8px',
  color: '#ffcc00',
};

export default Skills;
