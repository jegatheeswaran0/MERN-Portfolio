// const express = require('express');
// const router = express.Router();

// router.get('/commands', (req, res) => {
//   res.json({
//     help: 'Available commands: skills, experience, contact, clear',
//     skills: 'Displays your skills',
//     experience: 'Shows your experience',
//     contact: 'Provides contact information',
//     clear: 'Clears the terminal',
//   });
// });

// router.get('/skills', (req, res) => {
//   res.json([
//     'Python',
//     'Node.js',
//     'JavaScript',
//     'React.js',    
//     'Express.js',
//     'MongoDB',
//     'Django',
//     'HTML',
//     'CSS',
//     'MySQL',
//   ]);
// });

// router.get('/experience', (req, res) => {
//   res.json([
//     {
//       company: 'Geons Logix Private Limited',
//       role: 'Python IoT Backend Developer',
//       duration: 'Sep 2023 - Jan 2024',
//     },
//     {
//       company: 'Maticz Technologies Private Limited',
//       role: 'Backend Developer (MERN)',
//       duration: 'May 2024 - Oct 2024',
//     },
//   ]);
// });

// router.get('/contact', (req, res) => {
//   res.json({
//     email: 'waranj47@gmail.com',
//     phone: '+919944626576',
//     linkedin: 'https://www.linkedin.com/in/jegatheeswaran-s-80104425b/',
//   });
// });

// module.exports = router;






// const express = require('express');
// const router = express.Router();

// router.get('/commands', (req, res) => {
//   res.json({
//     help: 'Available commands: skills, experience, education, achievements, projects, certifications, contact, clear',
//     skills: 'Displays your skills',
//     experience: 'Shows your work experience',
//     education: 'Displays your educational background',
//     achievements: 'Lists your achievements',
//     projects: 'Displays your projects',
//     certifications: 'Lists your certifications',
//     contact: 'Provides contact information',
//     clear: 'Clears the terminal',
//   });
// });

// router.get('/skills', (req, res) => {
//   res.json(['Python', 'Node.js', 'JavaScript', 'React.js', 'Express.js', 'MongoDB', 'Django', 'HTML', 'CSS', 'MySQL']);
// });

// router.get('/experience', (req, res) => {
//   res.json([
//     {
//       company: 'Geons Logix Private Limited',
//       role: 'Python IoT Backend Developer',
//       duration: 'Sep 2023 - Jan 2024',
//     },
//     {
//       company: 'Maticz Technologies Private Limited',
//       role: 'Backend Developer (MERN)',
//       duration: 'May 2024 - Oct 2024',
//     },
//   ]);
// });

// router.get('/education', (req, res) => {
//   res.json([
//     { degree: 'B.E.', institution: 'Your College Name', duration: '2019 - 2023', score: '8.5 CGPA' },
//     { degree: 'Higher Secondary', institution: 'Your School Name', duration: '2017 - 2019', score: '92%' },
//   ]);
// });

// router.get('/achievements', (req, res) => {
//   res.json(['Won Hackathon 2023', 'Published a research paper on AI and IoT integration']);
// });

// router.get('/projects', (req, res) => {
//   res.json([
//     { title: 'IoT Smart Home System', details: ['Developed a smart home automation system', 'Integrated cloud-based monitoring'] },
//     { title: 'E-commerce Website', details: ['Built a responsive e-commerce platform', 'Implemented secure payment gateways'] },
//   ]);
// });

// router.get('/certifications', (req, res) => {
//   res.json(['Certified Python Developer', 'Full-Stack Web Developer Certification', 'IoT Specialist']);
// });

// router.get('/contact', (req, res) => {
//   res.json({
//     email: 'waranj47@gmail.com',
//     phone: '+919944626576',
//     linkedin: 'https://www.linkedin.com/in/jegatheeswaran-s-80104425b/',
//     github: 'https://github.com/your-github-username',
//   });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();

// Available commands
router.get('/commands', (req, res) => {
  res.json({
    help: 'Available commands: aboutme, skills, experience, education, achievements, projects, certifications, contact, clear',
    aboutme: 'Displays information about me',
    skills: 'Displays your skills',
    experience: 'Shows your professional experience',
    education: 'Shows your educational background',
    achievements: 'Displays key achievements',
    projects: 'Details of major projects',
    certifications: 'Lists certifications',
    contact: 'Provides contact information',
    clear: 'Clears the terminal',
  });
});

// About route
router.get('/aboutme', (req, res) => {
  res.json(
    'Motivated software developer with a strong foundation in programming and software design, seeking to apply technical skills and creative problem-solving abilities to develop innovative software solutions. Committed to continuous learning and collaboration to drive project success.'
  );
});

// Skills route
router.get('/skills', (req, res) => {
  res.json([
    'C/C++ - Proficient',
    'Python - Proficient',
    'Django - Advanced',
    'HTML - Proficient',
    'CSS - Advanced',
    'JavaScript - Advanced',
    'MySQL - Advanced',
    'IoT - Advanced',
    'Node.js - Proficient',
    'Express.js - Proficient',
    'React.js - Intermediate',
    'MongoDB - Proficient',
    'Machine Learning - Intermediate',
  ]);
});

// Experience route
router.get('/experience', (req, res) => {
  res.json([
    {
      company: 'Maticz Technologies Pvt Ltd',
      role: 'Software Trainee',
      duration: 'May 2024 - Oct 2024',
      // details: [
      //   'Backend API Development',
      //   'Integrating with Front-End (React)',
      //   'Worked on Blockchain, Trading & Exchange, Web3, and NFT projects',
      // ],
    },
    {
      company: 'Geons Logix Pvt Ltd',
      role: 'Trainee Software Engineer',
      duration: 'Sep 2023 - Jan 2024',
      // details: [
      //   'Worked on Internet of Things',
      //   'Embedded Development',
      //   'Python Backend Development',
      // ],
    },
  ]);
});

// Education route
router.get('/education', (req, res) => {
  res.json([
    {
      degree: 'B.E (ECE)',
      institution: 'Mangayarkarasi College of Engineering',
      score: '8.2 CGPA',
      duration: 'Jul 2019 - May 2023',
    },
    {
      degree: 'HSC',
      institution: 'Madurai Meenakshi Matriculation Higher Secondary School',
      score: '61%',
      duration: 'Jun 2018 - May 2019',
    },
    {
      degree: 'SSLC',
      institution: 'Madurai Meenakshi Matriculation Higher Secondary School',
      score: '92.4%',
      duration: 'Jun 2016 - Apr 2017',
    },
  ]);
});

// Achievements route
router.get('/achievements', (req, res) => {
  res.json([
    'Won First Prize in Regional Level Project Competition.',
    'Participated in "Top Twelve State Level Project Showcase" at Umagine Chennai 2023.',
    'Completed Experiential Learning under Tamil Nadu Skill Development programs.',
  ]);
});

// Projects route
router.get('/projects', (req, res) => {
  res.json([
    {
      title: 'Smart Waste Management Systems for Metropolitan Cities',
      domain: 'Internet of Things',
      duration: 'Aug 2022 - Mar 2023',
      details: [
        'Detects harmful gases in waste and sends alerts to corporations.',
        'Provides information to users via a mobile application.',
      ],
    },
  ]);
});

// Certifications route
router.get('/certifications', (req, res) => {
  res.json(['Python Full-Stack Development - Shikshaa Simple Learn']);
});

// Contact route
router.get('/contact', (req, res) => {
  res.json({
    email: 'waranj47@gmail.com',
    phone: '+919944626576',
    linkedin: 'https://www.linkedin.com/in/jegatheeswaran-s-80104425b/',
    github: 'https://github.com/jegatheeswaran0',
  });
});

module.exports = router;
