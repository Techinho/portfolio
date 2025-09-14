export const personalInfo = {
  name: "Ilyass Ezzaouya",
  title: "Full Stack Developer",
  tagline: "Creating modern web experiences with React, Node.js & Laravel",
  location: "Rabat, Morocco",
  age: 20,
  email: "ilyassezzaouya4@gmail.com",
  phone: "06 82 14 61 22",
  description: "Passionate Full Stack MERN & Laravel developer who creates modern web applications by mastering Front-End (HTML, CSS, JavaScript, React) and Back-End (Node.js, Express, MongoDB, Laravel, MySQL). Curious and autonomous, I continuously learn new technologies to improve the quality of my projects.",
  resumeUrl: "/resume.pdf" // You can add your PDF resume here
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ilyass-ezzaouya", // Update with your actual LinkedIn
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/ilyassezzaouya", // Update with your actual GitHub
    icon: "github"
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "mail"
  }
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Bootstrap", level: 80 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "Laravel", level: 85 },
    { name: "PHP", level: 80 },
    { name: "Python", level: 70 }
  ],
  database: [
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 85 },
    { name: "NoSQL", level: 75 }
  ],
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 70 },
    { name: "Jira", level: 75 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "SGRF - Public Revenue Management System",
    description: "Web application for centralizing and automating public revenue management for TGR (Treasury General of the Kingdom). Features multiple dashboards, secure authentication, and comprehensive reporting modules.",
    longDescription: "Developed during my internship at TGR, this comprehensive system centralizes public revenue management through intuitive dashboards tailored to different user profiles. Built with React.js frontend and Laravel backend, featuring OAuth2/JWT authentication and advanced reporting capabilities.",
    technologies: ["React.js", "Laravel", "MySQL", "OAuth2", "JWT"],
    features: [
      "Multi-profile dashboards",
      "Secure authentication (OAuth2, JWT)",
      "Revenue tracking and monitoring",
      "Automated reminder system",
      "Comprehensive reporting"
    ],
    image: "/project-sgrf.jpg", // You can replace with actual screenshots
    liveUrl: "#", // Add live demo URL if available
    githubUrl: "#", // Add GitHub repo URL if available
    category: "Full Stack"
  },
  {
    id: 2,
    title: "TECHEDU - Learning Platform",
    description: "Responsive web platform for technology learning with integrated YouTube videos and dedicated books section. Features smooth navigation and modern design.",
    longDescription: "A comprehensive educational platform that combines video content from YouTube API v3 with curated book resources. Built with React and Redux for optimal state management and user experience.",
    technologies: ["React.js", "Redux", "YouTube API v3", "Tailwind CSS"],
    features: [
      "YouTube API v3 integration",
      "Responsive design",
      "Book resources section",
      "Redux state management",
      "Smooth navigation"
    ],
    image: "/project-techedu.jpg",
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend"
  },
  {
    id: 3,
    title: "FOREVER - E-commerce Platform",
    description: "Modern responsive e-commerce platform with dynamic product management, advanced filtering, shopping cart, and order system.",
    longDescription: "A full-featured e-commerce solution with modern UI/UX design. Includes product catalog with advanced filtering, shopping cart functionality, and complete order management system.",
    technologies: ["React.js", "Tailwind CSS", "Context API", "Local Storage"],
    features: [
      "Dynamic product management",
      "Advanced filtering and sorting",
      "Shopping cart functionality",
      "Order management system",
      "Responsive design"
    ],
    image: "/project-forever.jpg",
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend"
  }
];

export const experience = [
  {
    title: "Full Stack Web Development Intern (MERN)",
    company: "Ark-x Talent Solutions",
    location: "Rabat, Morocco",
    period: "July 2025 - Present",
    description: [
      "Participated in intensive Full Stack development bootcamp (MongoDB, Express.js, React.js, Node.js)",
      "Completed collaborative team projects using HTML, CSS, JavaScript, and React",
      "Enhanced back-end and front-end development skills",
      "Developed best practices in Git/GitHub and agile team collaboration"
    ]
  },
  {
    title: "Full Stack Web Development Intern",
    company: "Treasury General of the Kingdom (TGR)",
    location: "Rabat, Morocco",
    period: "March 2025 - April 2025",
    description: [
      "Developed SGRF web application for centralized public revenue management",
      "Created multiple dashboards based on user profiles using React.js and Laravel",
      "Implemented secure authentication (OAuth2, JWT) and MySQL database management",
      "Built tracking, reminder, and reporting modules"
    ]
  }
];

export const education = [
  {
    degree: "Specialized Technician in Digital Development",
    institution: "Institut Spécialisé de Technologie Appliquée Hay Riad",
    location: "Rabat, Morocco",
    period: "September 2023 - July 2025",
    status: "In Progress"
  },
  {
    degree: "AI Career Essentials",
    institution: "ALX",
    location: "Online",
    period: "September 2024 - November 2024"
  },
  {
    degree: "Baccalauréat in Experimental Sciences",
    institution: "Lycée Ibn Batouta",
    location: "Rabat, Morocco",
    period: "September 2022 - June 2023"
  }
];

export const certificates = [
  "AI Career Essentials - ALX",
  "PHP & MySQL Certification Course For Beginners - Udemy",
  "The Ultimate MySQL Crash Course - Udemy",
  "Advanced Git & GitHub - Arkx-Talents",
  "JavaScript Module - Arkx-Talents",
  "Advanced NodeJs - Arkx-Talents",
  "MongoDB Module - Arkx-Talents",
  "Learn Node.js - Codecademy",
  "Learn Express - Codecademy",
  "Learn TypeScript - Codecademy"
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" }
];