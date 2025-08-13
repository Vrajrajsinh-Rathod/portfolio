// import React from 'react';

// const Projects = () => {
//   const projects = [
//     {
//       name: 'Project One',
//       description: 'A React app that does amazing things.',
//       link: 'https://github.com/yourusername/project-one',
//     },
//     {
//       name: 'Project Two',
//       description: 'Another cool project built with JavaScript.',
//       link: 'https://github.com/yourusername/project-two',
//     },
//   ];

//   return (
//     <section id="projects" style={sectionStyle}>
//       <h2>Projects</h2>
//       <div style={projectsContainer}>
//         {projects.map(({ name, description, link }) => (
//           <div key={name} style={projectCard}>
//             <h3>{name}</h3>
//             <p>{description}</p>
//             <a href={link} target="_blank" rel="noopener noreferrer" style={projectLink}>
//               View on GitHub
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const sectionStyle = {
//   padding: '60px 20px',
//   maxWidth: '900px',
//   margin: '0 auto',
//   textAlign: 'center',
// };

// const projectsContainer = {
//   display: 'flex',
//   flexWrap: 'wrap',
//   justifyContent: 'center',
//   gap: '20px',
//   marginTop: '20px',
// };

// const projectCard = {
//   backgroundColor: '#f5f5f5',
//   padding: '20px',
//   borderRadius: '10px',
//   width: '280px',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//   textAlign: 'left',
// };

// const projectLink = {
//   display: 'inline-block',
//   marginTop: '10px',
//   color: '#222',
//   textDecoration: 'none',
//   fontWeight: 'bold',
// };

// export default Projects;
import React from 'react';

const projects = [
  {
    title: 'LetMeKnow: Mobile Application',
    year: '2024',
    role: 'Full Stack Developer',
    description: 'Developed a cross-platform mobile app enabling users to buy and sell used goods across multiple categories (cars, electronics, furniture, clothing).',
    highlights: [
      'Engineered features for secure image and video uploads with compression and format validation,improving media handling performance by 40%.',
      'Implemented advanced search filters and keyword-based product discovery, enhancing user experience and increasing session duration.',
      'Built a scalable backend with Python Flask and MongoDB to manage user data, product listings, and video ads with low latency.',
      'Integrated third-party payment gateways with end-to-end encryption to ensure secure and seamless transactions.',
      'Conducted extensive unit and integration testing, leading to a 30% reduction in post-release bugs.',
    ],
  },
  {
    title: 'Detecting Alzheimer’s Syndrome using Machine Learning (Dissertation)',
    year: '2024',
    role: 'Lead Researcher',
    description: 'Researched machine learning applications for early Alzheimer\'s detection using neuroimaging datasets (brain MRI scans).',
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
    description: 'Designed and developed a responsive eCommerce website with ReactJS frontend and PHP backend,supporting product catalogues, user accounts, and order management.',
    highlights: [
      'Integrated Shopify APIs for real-time product synchronization and inventory updates, streamlining store operations.',
      'Implemented a secure payment gateway with SSL encryption and multi-factor authentication, enhancing transaction security.',
      'Optimised site load times by 35% through code splitting, lazy loading, and database indexing.',
      'Conducted user acceptance testing (UAT) and gathered feedback to iteratively improve UI/UX design, resulting in a 20% boost in user retention.',
    ],
  },
];

const Projects = () => {
  return (
    <section style={{ padding: '20px', backgroundColor: '#f7f9fc' }} id="projects">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Projects</h2>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {projects.map(({ title, year, role, description, highlights }) => (
          <div
            key={title}
            style={{
              backgroundColor: '#fff',
              padding: '30px 25px',
              borderRadius: '15px',
              marginBottom: '30px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              textAlign: 'justify'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h3 style={{ color: '#007BFF', marginBottom: '5px' }}>{title} <span style={{ fontWeight: 'normal', color: '#666', fontSize: '0.9rem' }}>({year})</span></h3>
            <h4 style={{ marginTop: 0, marginBottom: '10px', color: '#555' }}>{role}</h4>
            <p style={{ fontSize: '1rem', marginBottom: '15px', color: '#333' }}>{description}</p>
            <ul style={{ color: '#444', paddingLeft: '20px' }}>
              {highlights.map((point, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
