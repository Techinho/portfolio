export const personalInfo = {
  name: "Ilyass Ezzaouya",
  title: "Full Stack Developer",
  tagline: "Transforming ideas into impactful digital solutions. I build robust, user-focused web applications that empower businesses and inspire people.",
  location: "Rabat, Morocco",
  age: 20,
  email: "ilyassezzaouya4@gmail.com",
  phone: "+212682146122",
  description: "Passionate Full Stack MERN & Laravel developer who creates modern web applications by mastering Front-End (HTML, CSS, JavaScript, React) and Back-End (Node.js, Express, MongoDB, Laravel, MySQL). Curious and autonomous, I continuously learn new technologies to improve the quality of my projects.",
  resumeUrl: "/resume.pdf" // You can add your PDF resume here
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ezzaouyailyass/", // Update with your actual LinkedIn
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/Techinho", // Update with your actual GitHub
    icon: "github"
  },
  {
    name: "Email",
    url: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`, // Opens Gmail compose window
    icon: "mail"
  }
];

export const skills = [
  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    description: "Modern JavaScript library for building user interfaces",
    icon: "SiReact",
    color: "#61DAFB"
  },
  {
    name: "JavaScript",
    category: "Frontend", 
    description: "Dynamic programming language for web development",
    icon: "SiJavascript",
    color: "#F7DF1E"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Statically typed superset of JavaScript",
    icon: "SiTypescript", 
    color: "#3178C6"
  },
  {
    name: "HTML5",
    category: "Frontend",
    description: "Semantic markup language for web structure",
    icon: "SiHtml5",
    color: "#E34F26"
  },
  {
    name: "CSS",
    category: "Frontend",
    description: "Styling language for web presentation",
    icon: "SiCss3",
    color: "#1572B6"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first CSS framework for rapid development",
    icon: "SiTailwindcss",
    color: "#06B6D4"
  },
  {
    name: "Bootstrap",
    category: "Frontend", 
    description: "CSS framework for responsive web design",
    icon: "SiBootstrap",
    color: "#7952B3"
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    description: "JavaScript runtime for server-side development",
    icon: "SiNodedotjs",
    color: "#339933"
  },
  {
    name: "Express.js", 
    category: "Backend",
    description: "Fast, minimalist web framework for Node.js",
    icon: "SiExpress",
    color: "#000000"
  },
  {
    name: "Laravel",
    category: "Backend",
    description: "Elegant PHP framework for web artisans", 
    icon: "SiLaravel",
    color: "#FF2D20"
  },
  {
    name: "PHP",
    category: "Backend",
    description: "Server-side scripting language for web development",
    icon: "SiPhp",
    color: "#777BB4"
  },
  {
    name: "Python",
    category: "Backend",
    description: "Versatile programming language for various applications",
    icon: "SiPython", 
    color: "#3776AB"
  },

  // Database
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL document database for modern applications",
    icon: "SiMongodb",
    color: "#47A248"
  },
  {
    name: "MySQL",
    category: "Database", 
    description: "Reliable relational database management system",
    icon: "SiMysql",
    color: "#4479A1"
  },

  // Tools & DevOps
  {
    name: "Git",
    category: "Tools & DevOps",
    description: "Distributed version control system",
    icon: "SiGit",
    color: "#F05032"
  },
  {
    name: "GitHub",
    category: "Tools & DevOps",
    description: "Web-based Git repository hosting service",
    icon: "SiGithub", 
    color: "#181717"
  },
  {
    name: "Docker",
    category: "Tools & DevOps",
    description: "Platform for developing and deploying applications in containers",
    icon: "SiDocker",
    color: "#2496ED"
  },
  {
    name: "VS Code",
    category: "Tools & DevOps",
    description: "Powerful source code editor with rich ecosystem",
    icon: "SiVisualstudiocode",
    color: "#007ACC"
  },
  {
    name: "Figma", 
    category: "Tools & DevOps",
    description: "Collaborative design tool for UI/UX",
    icon: "SiFigma",
    color: "#F24E1E"
  },
  {
    name: "Jira",
    category: "Tools & DevOps", 
    description: "Project management and issue tracking tool",
    icon: "SiJira",
    color: "#0052CC"
  }
];

export const projects = [
  {
    id: 1,
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
    image: "/Minimalist Website Launch Computer Mockup Instagram Post .png",
    liveUrl: "https://edufy-five.vercel.app/",
    githubUrl: "https://github.com/Techinho/Edufy",
    category: "Frontend"
  },
  {
    id: 2,
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
    image: "/tgr.png", // You can replace with actual screenshots
    liveUrl: "#", // Add live demo URL if available
    githubUrl: "#", // Add GitHub repo URL if available
    category: "Full Stack"
  },
  {
    id: 3,
    title: "NutriVibe - E-commerce Platform",
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
    image: "/ecom.png",
    liveUrl: "https://nutrivibe-liart.vercel.app/",
    githubUrl: "https://github.com/Techinho/nutrivibe",
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