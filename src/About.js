import React from 'react';

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>About</h2>
      <div style={aboutContainer}>
        {/* <img
          src="C:\Vrajraj\my-portfolio\21004063.jpg"
          alt="About me"
          style={aboutImage}
        /> */}
        <p style={aboutText} >
        I’m Vrajrajsinh Rathod, a passionate and versatile Software Engineer with experience building scalable web and mobile applications across multiple industries and tech stacks.

        <br></br>I specialize in Python, PHP, Node.js, React, and RESTful API development, with hands-on experience in cloud platforms like Azure, AWS (S3), and Firebase. I’ve delivered impactful projects ranging from e-commerce platforms to machine learning-based healthcare applications.

        <br></br>With a strong academic foundation I hold an MSc in Computer Science from the University of East London (First Class with Distinction). I thrive in both independent and collaborative environments.

        <br></br>My goal is to create clean, efficient code and solve real-world problems through technology. I’m always excited to learn new frameworks, optimize performance, and bring ideas to life.
        </p>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '60px 20px',
  maxWidth: '900px',
  margin: '0 auto',
};

const aboutContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  flexWrap: 'wrap',
};

// const aboutImage = {
//   borderRadius: '10px',
//   width: '200px',
//   height: '200px',
//   objectFit: 'cover',
//   border: '3px solid #222',
// };

const aboutText = {
  flex: 1,
  fontSize: '1.1rem',
  lineHeight: '1.6',
  textAlign: 'justify'
};

export default About;
