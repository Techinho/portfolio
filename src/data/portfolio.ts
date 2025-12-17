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
    name: "Next.js",
    category: "Frontend",
    description: "The React Framework for the Web",
    icon: "SiNextdotjs",
    color: "#000000"
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
    name: "CSS3",
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
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Powerful, open source object-relational database system",
    icon: "SiPostgresql",
    color: "#336791"
  },
  {
    name: "Supabase",
    category: "Database",
    description: "Open source Firebase alternative — Postgres, Auth, Realtime and storage",
    icon: "SiSupabase",
    color: "#3ECF8E"
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
    name: "GitLab",
    category: "Tools & DevOps",
    description: "Web-based DevOps lifecycle tool",
    icon: "SiGitlab",
    color: "#FC6D26"
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
    name: "Postman",
    category: "Tools & DevOps",
    description: "API platform for building and using APIs",
    icon: "SiPostman",
    color: "#FF6C37"
  },
  {
    name: "Jira",
    category: "Tools & DevOps", 
    description: "Project management and issue tracking tool",
    icon: "SiJira",
    color: "#0052CC"
  },
  {
    name: "SonarQube",
    category: "Tools & DevOps",
    description: "Code quality and security tool",
    icon: "SiSonarqube",
    color: "#4E9BCD"
  },
  {
    name: "CI/CD",
    category: "Tools & DevOps",
    description: "Continuous Integration and Continuous Delivery",
    icon: "SiGithubactions",
    color: "#2088FF"
  },

  // Methodologies & AI
  {
    name: "Agile Scrum",
    category: "Methodologies",
    description: "Agile framework for developing complex products",
    icon: "Workflow",
    color: "#0052CC"
  },
  {
    name: "UML",
    category: "Methodologies",
    description: "Unified Modeling Language",
    icon: "FileText",
    color: "#000000"
  },
  {
    name: "Merise",
    category: "Methodologies",
    description: "Modeling methodology for information systems",
    icon: "Database",
    color: "#000000"
  },
  {
    name: "AI Integration",
    category: "AI",
    description: "Integrating AI tools into workflows",
    icon: "SiOpenai",
    color: "#412991"
  }
];

export const projects = [
  {
    id: 1,
    title: "Contract IQ",
    description: "AI-powered contract analysis and insights platform.",
    longDescription: "Contract IQ is a SaaS platform that uses natural language processing and machine learning to analyze contracts, extract clauses, surface risky terms, and generate concise summaries to accelerate legal review and decision-making.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "OpenAI"],
    features: [
      "AI-powered clause extraction and tagging",
      "Risk scoring and automated flagging",
      "Summarization and smart highlights",
      "Document collaboration and versioning",
      "Secure storage with role-based access"
    ],
    image: "/ContractIQ.png",
    image2: "/pngIQ.png",
    previewImages: ["/ContractIQ.png", "/pngIQ.png"],
    liveUrl: "https://doc-analyser-eta.vercel.app/",
    githubUrl: "",
    category: "SaaS",

    // Case Study Fields
    summary: "Speed up contract review by surfacing key clauses and risks using ML.",
    role: "Full Stack Developer",
    context: "Legal teams and contract managers need faster ways to triage and understand large volumes of contracts. Manual review is slow and error-prone.",
    problem: "Contract review is time-consuming and often misses subtle risky language across many documents.",
    approach: "Built a pipeline to ingest documents, run NLP models to extract clauses and score risk, and present an intuitive UI for reviewers with highlights, comments, and versioning.",
    outcome: "Reduced average review time in pilot tests and improved risk detection accuracy compared to manual review.",
    reflection: "Next steps include deeper model fine-tuning, audit logging, and richer collaboration features for legal teams.",
    artifacts: ["Model Training Notes", "Security Architecture", "UX Wireframes"]
  },
  {
    id: 2,
    title: "TECHEDU - Learning Platform",
    description: "Responsive web platform for technology learning with integrated YouTube videos and dedicated books section.",
    longDescription: "A comprehensive educational platform that combines video content from YouTube API v3 with curated book resources. Built with React and Redux for optimal state management and user experience.",
    technologies: ["React.js", "Redux", "YouTube API v3", "Tailwind CSS"],
    features: [
      "YouTube API v3 integration",
      "Responsive design",
      "Book resources section",
      "Redux state management",
      "Smooth navigation"
    ],
    image: "/Macbook-Air-1559x975.png",
    image2: "/Minimalist Website Launch Computer Mockup Instagram Post .png",
    previewImages: [
      "/images/edufy/edufy0.webp",
      "/images/edufy/edufy1.webp",
      "/images/edufy/edufy2.webp",
      "/images/edufy/edufy3.webp",
      "/images/edufy/edufy4.webp",
      "/images/edufy/edufy5.webp",
      "/images/edufy/edufy6.webp",
      "/images/edufy/edufy7.webp"
    ],
    liveUrl: "https://edufy-five.vercel.app/",
    githubUrl: "https://github.com/Techinho/Edufy",
    category: "Frontend",
    
    // Case Study Fields
    summary: "Centralized learning resources to reduce student search time by 40%.",
    role: "Frontend Developer",
    context: "Students often struggle to find organized, high-quality learning resources across scattered platforms. This project aimed to unify video and text resources in one intuitive interface.",
    problem: "Fragmentation of educational content leads to inefficient learning paths and distraction.",
    approach: "I focused on a clean, distraction-free UI using Tailwind CSS. I integrated the YouTube API to fetch relevant playlists dynamically and used Redux to manage the state of bookmarked resources and user preferences.",
    outcome: "Created a unified platform where users can access curated videos and books. Early user testing showed a significant reduction in time spent searching for materials.",
    reflection: "I would implement a backend to allow user accounts and progress tracking, making the platform more personalized.",
    artifacts: ["User Flow Diagram", "Wireframes", "API Integration Schema"]
  },
  {
  id: 3,
    title: "NutriVibe - E-commerce Platform",
    description: "Modern responsive e-commerce platform with dynamic product management and shopping cart.",
    longDescription: "A full-featured e-commerce solution with modern UI/UX design. Includes product catalog with advanced filtering, shopping cart functionality, and complete order management system.",
    technologies: ["React.js", "Tailwind CSS", "Context API", "Local Storage"],
    features: [
      "Dynamic product management",
      "Advanced filtering and sorting",
      "Shopping cart functionality",
      "Order management system",
      "Responsive design"
    ],
    image: "/ecom2.png",
    image2: "/ecom.png",
    previewImages: ["/ecom.png", "/ecom.png"],
    liveUrl: "https://nutrivibe-liart.vercel.app/",
    githubUrl: "https://github.com/Techinho/nutrivibe",
    category: "Frontend",

    // Case Study Fields
    summary: "Streamlined shopping experience to increase conversion rates through intuitive navigation.",
    role: "Frontend Developer",
    context: "Small businesses need affordable, performant e-commerce solutions that offer a great user experience without the bloat of massive platforms.",
    problem: "Many template-based e-commerce sites are slow and hard to customize, leading to poor user retention.",
    approach: "I built a custom, lightweight e-commerce frontend using React and Context API for state management. I prioritized performance and mobile responsiveness to ensure a smooth shopping experience on all devices.",
    outcome: "Developed a highly responsive store interface with instant filtering and cart updates. The clean design focuses entirely on the products, reducing friction in the buying process.",
    reflection: "Using a headless CMS for product management would make this easier for non-technical store owners to update.",
    artifacts: ["Component Hierarchy", "State Management Flow", "UI Style Guide"]
  },
  {
    id: 4,
    title: "SGRF - Public Revenue Management System",
    description: "Web application for centralizing and automating public revenue management for TGR.",
    longDescription: "Developed during my internship at TGR, this comprehensive system centralizes public revenue management through intuitive dashboards tailored to different user profiles. Built with React.js frontend and Laravel backend, featuring OAuth2/JWT authentication and advanced reporting capabilities.",
    technologies: ["React.js", "Laravel", "MySQL", "OAuth2", "JWT"],
    features: [
      "Multi-profile dashboards",
      "Secure authentication (OAuth2, JWT)",
      "Revenue tracking and monitoring",
      "Automated reminder system",
      "Comprehensive reporting"
    ],
    image: "/admin.png", 
    image2: "/tgr.png",
    previewImages: [
      "/images/tgr/tgr0.webp",
      "/images/tgr/tgr1.webp",
      "/images/tgr/tgr2.webp",
      "/images/tgr/tgr3.webp",
      "/images/tgr/tgr4.webp",
      "/images/tgr/tgr5.webp",
      "/images/tgr/tgr7.webp",
      "/images/tgr/tgr8.webp",
      "/images/tgr/tgr9.webp",
      "/images/tgr/tgr12.webp",
      "/images/tgr/tgr13.webp"
    ],
    liveUrl: "", 
    githubUrl: "", 
    category: "Full Stack",
    note: "Disclaimer: All data shown in this project is for testing purposes only and does not represent real public revenue data.",

    // Case Study Fields
    summary: "Automated revenue tracking to eliminate manual data entry errors and improve reporting speed.",
    role: "Full Stack Developer (Intern)",
    context: "The Treasury General of the Kingdom (TGR) needed a modern solution to replace legacy manual processes for tracking public revenue.",
    problem: "Manual data entry was error-prone and time-consuming, leading to delays in financial reporting and lack of real-time visibility.",
    approach: "I designed a multi-role system with Laravel for robust backend logic and React for a responsive frontend. I implemented OAuth2 for secure access control and created dynamic dashboards for real-time data visualization.",
    outcome: "Delivered a functional prototype that demonstrated the potential to reduce reporting time by 50% and significantly improve data accuracy.",
    reflection: "I learned the importance of rigorous testing when dealing with financial data. In the future, I would add more granular audit logs for every user action.",
    artifacts: ["Database Schema", "Role-Based Access Control Matrix", "Dashboard Mockups"]
  },
  ,
  // {
  //   id: 5,
  //   title: "Kima - Event Management Platform",
  //   description: "MERN web app for managing in-person, online, and hybrid events with a smooth experience.",
  //   longDescription: "A comprehensive MERN web platform for managing in-person, online, and hybrid events. Features include ticketing, QR code check-ins, and seamless integrations with Google Calendar, Zoom, and Stripe. The system offers multi-role dashboards and real-time updates.",
  //   technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Material UI", "Socket.io", "Stripe"],
  //   features: [
  //     "In-person, online & hybrid events",
  //     "Ticketing & QR code check-in",
  //     "Google Calendar & Zoom integration",
  //     "Stripe payment processing",
  //     "Multi-role dashboards",
  //     "Real-time updates with Socket.io"
  //   ],
  //   image: "/kimaevent-dashboard.png",
  //   image2: "/kimaevent-landing.png",
  //   previewImages: ["/kimaevent-dashboard.png", "/kimaevent-landing.png"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   category: "Full Stack",

  //   // Case Study Fields
  //   summary: "Unified event management for hybrid experiences with seamless 3rd-party integrations.",
  //   role: "Full Stack Developer",
  //   context: "Organizing hybrid events requires juggling multiple tools for video conferencing, payments, and scheduling.",
  //   problem: "Fragmented tools lead to poor user experience and data synchronization issues for event organizers.",
  //   approach: "Built a robust MERN stack application integrating Socket.io for real-time interactions. Implemented secure payments with Stripe and automated scheduling via Google Calendar and Zoom APIs.",
  //   outcome: "Delivered a centralized platform that handles the full event lifecycle, from ticket sales to virtual attendance.",
  //   reflection: "Managing timezone differences for hybrid events was challenging but solved with careful date handling.",
  //   artifacts: ["System Architecture", "API Integration Docs", "Socket Event Schema"]
  // }
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