// src/utils/constants.js

export const PERSONAL_INFO = {
  name: "Sakthi Sabarish",
  title: "Software Engineer & Full Stack Web Developer",
  tagline: "Building responsive, modern, and scalable web applications with high-performance code.",
  bio: "Passionate Full Stack Developer specializing in modern web technologies including React, JavaScript ES6+, Java, Python, and Node.js. Dedicated to clean code, sleek user experience, and continuous learning.",
  email: "sakthysabarish.dev@gmail.com",
  phone: "+91 98765 43210",
  location: "India",
  github: "https://github.com/sakthysabarish",
  linkedin: "https://linkedin.com/in/sakthysabarish",
  twitter: "https://twitter.com/sakthysabarish",
  availableForHire: true,
};

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS_DATA = [
  {
    id: 1,
    name: "HTML5",
    category: "Frontend",
    level: 95,
    experience: "Intermediate",
    icon: "FileCode",
    description: "Semantic markup, accessibility (a11y), SEO structure",
  },
  {
    id: 2,
    name: "CSS3",
    category: "Frontend",
    level: 90,
    experience: "Intermediate",
    icon: "Palette",
    description: "Flexbox, Grid, Animations, Responsive Design & CSS Variables",
  },
  {
    id: 3,
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: 90,
    experience: "Intermediate",
    icon: "Code2",
    description: "Async/Await, DOM manipulation, ES Modules & Async Data Fetching",
  },
  {
    id: 4,
    name: "React.js",
    category: "Frontend",
    level: 85,
    experience: "Intermediate",
    icon: "Atom",
    description: "Hooks, Context API, Router, State Management & Modern Components",
  },
  {
    id: 5,
    name: "Java",
    category: "Backend",
    level: 80,
    experience: "Intermediate",
    icon: "Coffee",
    description: "OOP concepts, Data Structures, Algorithms & Backend Logic",
  },
  {
    id: 6,
    name: "Python",
    category: "Backend",
    level: 85,
    experience: "Intermediate",
    icon: "Terminal",
    description: "Scripting, Automation, Data Processing & REST APIs",
  },
  {
    id: 7,
    name: "Node.js & Express",
    category: "Backend",
    level: 78,
    experience: "Intermediate",
    icon: "Server",
    description: "RESTful API Development, Middleware & Server-side Logic",
  },
  {
    id: 8,
    name: "Git & GitHub",
    category: "Tools",
    level: 88,
    experience: "Intermediate",
    icon: "GitBranch",
    description: "Version Control, Branching Workflows, Pull Requests & CI/CD",
  },
  {
    id: 9,
    name: "SQL & Databases",
    category: "Backend",
    level: 75,
    experience: "Intermediate",
    icon: "Database",
    description: "Relational Queries, Schema Design, PostgreSQL & MySQL",
  },
];

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Frontend Web Development",
    description: "Crafting beautiful, interactive, and ultra-responsive single page web applications using React, HTML5, and CSS3.",
    icon: "Layout",
    features: [
      "Responsive Cross-Browser Layouts",
      "React Hooks & State Management",
      "Dynamic Light & Dark Mode Systems",
      "Smooth Framer Motion Animations"
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Building reliable REST APIs, database models, and backend server logic using Node.js, Express, Java, and Python.",
    icon: "Server",
    features: [
      "RESTful API Design & Integration",
      "Relational Database Integration (SQL)",
      "Secure User Authentication & Logic",
      "Clean Modular Code Structure"
    ],
  },
  {
    id: 3,
    title: "UI/UX & Web Performance",
    description: "Transforming design mockups into pixel-perfect web interfaces optimized for fast loading and Core Web Vitals.",
    icon: "Sparkles",
    features: [
      "Pixel-perfect CSS Design Systems",
      "LCP & SEO Speed Optimization",
      "Accessible Semantic Markup",
      "Mobile-First Responsive Workflow"
    ],
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Developer Portfolio Website",
    category: "Frontend",
    description: "A sleek, responsive developer portfolio showcasing interactive skill cards, dark/light theme switching, and smooth section transitions.",
    tags: ["React", "CSS3", "JavaScript", "Vite", "Framer Motion"],
    githubUrl: "https://github.com/sakthysabarish/portfolio",
    liveUrl: "https://sakthysabarish.dev",
    featured: true,
    highlights: ["Custom CSS Variables Theming", "Responsive Layout", "Contact Form Validation"]
  },
  {
    id: 2,
    title: "E-Commerce Product Explorer",
    category: "Full Stack",
    description: "An interactive e-commerce catalog featuring real-time product filtering, search, cart management, and dark mode support.",
    tags: ["React", "JavaScript", "CSS Grid", "REST API"],
    githubUrl: "https://github.com/sakthysabarish/ecommerce-explorer",
    liveUrl: "https://demo-ecommerce-explorer.vercel.app",
    featured: true,
    highlights: ["Category Filter System", "Cart State Context", "Fast Search Index"]
  },
  {
    id: 3,
    title: "AI Code Snippet & Notes Manager",
    category: "Backend",
    description: "A clean dashboard utility for developers to organize code snippets by language (Java, Python, JS) with syntax highlights.",
    tags: ["Python", "JavaScript", "Node.js", "SQL"],
    githubUrl: "https://github.com/sakthysabarish/snippet-manager",
    liveUrl: "https://snippet-manager-demo.vercel.app",
    featured: true,
    highlights: ["Snippet Tagging System", "Syntax Highlighting", "Database Persistence"]
  },
  {
    id: 4,
    title: "Real-time Weather & City Dashboard",
    category: "Frontend",
    description: "Weather application providing live meteorological analytics, hourly forecast charts, and location search powered by weather APIs.",
    tags: ["JavaScript", "HTML5", "CSS3", "Fetch API"],
    githubUrl: "https://github.com/sakthysabarish/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    featured: false,
    highlights: ["Live API Data Fetching", "Dynamic Weather Graphics", "Geolocation Support"]
  }
];

export const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Bachelor of Engineering / Technology in Computer Science",
    institution: "University Institute of Technology",
    period: "2022 - 2026",
    description: "Focused on Software Engineering, Data Structures & Algorithms, Database Management Systems, and Web Technologies."
  },
  {
    id: 2,
    degree: "Full Stack Web Development Certification",
    institution: "Online Development Bootcamp",
    period: "2024",
    description: "Intensive training in HTML5, CSS3, JavaScript ES6+, React.js, Node.js, REST APIs, and Git version control."
  }
];
