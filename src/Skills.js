import React from 'react';

const skillsData = [
  {
    title: 'Front-End Development',
    items: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Back-End Development',
    items: ['Node.js', 'PHP', 'Python', 'Flask', 'RESTful APIs'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB', 'SQLite','PostgreSQL'],
  },
  {
    title: 'Cloud & Hosting',
    items: ['Microsoft Azure', 'AWS (S3)', 'Firebase'],
  },
  {
    title: 'Developer Tools',
    items: ['Git', 'Docker', 'VSCode', 'PyCharm', 'Postman', 'WordPress'],
  },
];

const Skills = () => {
  return (
    <section style={{ padding: '20px', backgroundColor: '#f8f8f8' }} id="skills">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>Technical Skills</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {skillsData.map((skillGroup) => (
          <div
            key={skillGroup.title}
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ color: '#007BFF', fontSize: '1.25rem', marginBottom: '12px' }}>{skillGroup.title}</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              {skillGroup.items.map((item) => (
                <li key={item} style={{ marginBottom: '8px', color: '#444' }}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
