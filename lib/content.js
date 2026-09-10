export const profile = {
  name: "Waqar ul Hassan",
  firstName: "Waqar",
  headline: "Software Engineer | Full-Stack Developer | Project Management & Agile Delivery",
  role: "Software Engineer",
  tagline:
    "I build MERN applications across the full SDLC and keep delivery on schedule by turning client requirements into clear technical work.",
  location: "Lahore, Punjab, Pakistan",
  phone: "+92 300 0110620",
  phoneHref: "tel:+923000110620",
  email: "waqarulhassan3484@gmail.com",
  linkedin: "https://www.linkedin.com/in/waqar-ul-hassan786",
  github: "https://github.com/waqarulhassan786",
  whatsapp: "https://wa.me/923000110620",
  gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=waqarulhassan3484@gmail.com",
  resume: "/Waqar_Ul_Hassan_Resume.pdf",
  photo: "/waqar.jpg",
  siteUrl: "https://waqar-port-folio.vercel.app",
  summary: [
    "Software engineer with 3+ years of hands-on experience delivering full-stack web applications, now focused on project management.",
    "Experienced across the complete software development life cycle — requirement gathering, task planning, development, testing, and delivery.",
    "A strong MERN-stack foundation supports realistic estimation of scope, effort, and risk, and credible communication with engineering teams.",
  ],
};

export const stats = [
  { value: 3, suffix: "+", label: "Years building web apps" },
  { value: 2, suffix: "", label: "Product engineering roles" },
  { value: 3, suffix: "", label: "Shipped production products" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "JWT", "Role-Based Access Control"],
  },
  {
    title: "Database",
    items: ["MongoDB"],
  },
  {
    title: "Development & Tools",
    items: ["Git", "GitHub", "Postman", "Jira / Trello"],
  },
];

export const projectManagementSkills = [
  "Requirement Gathering & Analysis",
  "Task Planning",
  "Sprint Planning",
  "Agile / Scrum",
  "Stakeholder Communication",
  "Client Communication",
  "Risk & Issue Tracking",
  "Team Coordination",
  "Progress Reporting",
  "Quality Assurance",
  "Documentation",
  "SDLC",
];

export const services = [
  {
    title: "Full-Stack Web Development",
    text: "End-to-end MERN applications from requirements through deployment and support.",
  },
  {
    title: "React.js Development",
    text: "Responsive interfaces, reusable components, and production-ready frontend flows.",
  },
  {
    title: "Next.js Development",
    text: "Modern Next.js applications with clean architecture and performance-minded UI.",
  },
  {
    title: "Frontend Development",
    text: "Usable, fast client experiences with Tailwind CSS, TypeScript, and JavaScript ES6+.",
  },
  {
    title: "REST API Development",
    text: "Backend APIs for frontend integration, CRUD modules, and data management.",
  },
  {
    title: "MERN Stack Development",
    text: "MongoDB, Express.js, React.js, and Node.js used together on real product work.",
  },
  {
    title: "Authentication & Access Control",
    text: "JWT authentication and role-based access for multi-user applications.",
  },
  {
    title: "Performance, Debugging & QA",
    text: "Testing, debugging, and performance work before release.",
  },
  {
    title: "Project Planning & Coordination",
    text: "Requirement analysis, sprint planning, client communication, and progress reporting.",
  },
];

export const experience = [
  {
    role: "MERN Stack Developer",
    company: "Codings First",
    location: "Bahawalpur, Pakistan",
    period: "Jun 2024 – Present",
    current: true,
    bullets: [
      "Deliver scalable web applications end to end, from requirement analysis through deployment and support.",
      "Translate client requirements into structured development tasks, estimate effort, and plan work to meet timelines.",
      "Build MERN applications with authentication, role-based access control, CRUD modules, and REST APIs.",
      "Coordinate with clients and teammates to clarify scope, report progress, and resolve blockers.",
      "Test, debug, and optimize performance before release.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Codes Thinker",
    location: "Bahawalpur, Pakistan",
    period: "Apr 2023 – May 2024",
    current: false,
    bullets: [
      "Developed and maintained full-stack applications using the MERN stack, React.js, Next.js, and TypeScript.",
      "Built REST APIs for frontend–backend integration and aligned interface requirements across the team.",
      "Broke features into milestones, tracked progress against deadlines, and flagged risks early.",
      "Prepared documentation and progress updates for team leads and clients.",
    ],
  },
];

export const projects = [
  {
    id: "fleetfinesse",
    title: "Car Rental Platform",
    product: "FleetFinesse",
    role: "MERN Stack Developer",
    description:
      "Full-stack car rental web application built on the MERN stack, contributing from requirements through deployment.",
    caseStudy:
      "Work spanned booking flows, fleet operations, and production delivery on a live rental platform. The stack is MERN, with contribution across analysis, build, and release.",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Full Stack"],
    categories: ["All", "Full Stack", "MERN", "React"],
    liveUrl: "https://fleetfinesse.com",
    githubUrl: null,
    demo: false,
    accent: "#d4a017",
  },
  {
    id: "simplihost",
    title: "Hotel Booking Site",
    product: "SimpliHost",
    role: "Backend Developer",
    description:
      "Backend development for a hotel booking platform, including REST APIs and data management.",
    caseStudy:
      "Focused on server-side work: REST APIs and data management that support reservations, guest operations, and property workflows.",
    tags: ["REST APIs", "Node.js", "Data Management", "Backend"],
    categories: ["All", "Backend"],
    liveUrl: "https://staging.simplihost.com",
    githubUrl: null,
    demo: false,
    accent: "#7dd3fc",
  },
  {
    id: "ecommerce",
    title: "E-commerce Website",
    product: "",
    role: "Front-End Developer",
    description:
      "Responsive e-commerce frontend focused on usability and performance.",
    caseStudy:
      "A client-facing storefront with an emphasis on clear browsing, device-friendly layout, and a faster shopping path. No public live URL is listed on the CV.",
    tags: ["React", "Frontend", "Performance"],
    categories: ["All", "Frontend", "React"],
    liveUrl: null,
    githubUrl: null,
    demo: false,
    accent: "#86efac",
  },
  {
    id: "demo-saas",
    title: "SaaS Analytics Dashboard",
    product: "Concept",
    role: "Demo Project",
    description:
      "Dashboard concept with charts, authentication UI, user management, a responsive layout, and dark mode.",
    caseStudy:
      "This is a concept project for the portfolio. It is not client work. It demonstrates how I would structure a SaaS analytics UI in React, TypeScript, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind", "Demo"],
    categories: ["All", "Frontend", "React", "Demo Projects"],
    liveUrl: null,
    githubUrl: null,
    demo: true,
    accent: "#c4b5fd",
  },
  {
    id: "demo-store",
    title: "Modern E-commerce Platform",
    product: "Concept",
    role: "Demo Project",
    description:
      "Store concept covering product listing, details, search, filters, cart, checkout UI, and an admin dashboard layout.",
    caseStudy:
      "This is a concept project. It is not a shipped client store. It shows a Next.js + TypeScript + Tailwind shopping flow and admin shell I would use on similar product work.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Demo"],
    categories: ["All", "Frontend", "Next.js", "Demo Projects"],
    liveUrl: null,
    githubUrl: null,
    demo: true,
    accent: "#fda4af",
  },
  {
    id: "demo-pm",
    title: "Project Management Dashboard",
    product: "Concept",
    role: "Demo Project",
    description:
      "Operations concept with a Kanban board, tasks, teams, project progress, analytics, and notifications.",
    caseStudy:
      "This is a concept project, not a client delivery. It connects my engineering background with Agile delivery: boards, progress, and team visibility in React and TypeScript.",
    tags: ["React", "TypeScript", "Agile", "Demo"],
    categories: ["All", "Frontend", "React", "Demo Projects"],
    liveUrl: null,
    githubUrl: null,
    demo: true,
    accent: "#fcd34d",
  },
  {
    id: "demo-landing",
    title: "AI / Tech Landing Page",
    product: "Concept",
    role: "Demo Project",
    description:
      "Landing-page concept with advanced motion, depth, and 3D interaction patterns for a modern product site.",
    caseStudy:
      "This is a visual concept for the portfolio, not a commercial product. It explores motion, 3D, and conversion-focused layout using React/Next.js patterns.",
    tags: ["Next.js", "Motion", "3D", "Demo"],
    categories: ["All", "Frontend", "Next.js", "Demo Projects"],
    liveUrl: null,
    githubUrl: null,
    demo: true,
    accent: "#67e8f9",
  },
];

export const projectFilters = ["All", "Full Stack", "Frontend", "Backend", "React", "Next.js", "MERN", "Demo Projects"];

export const education = {
  degree: "BS Software Engineering",
  cgpa: "3.5",
  school: "The Islamia University of Bahawalpur",
  location: "Bahawalpur, Pakistan",
  schoolUrl: "https://www.iub.edu.pk/",
};

export const languages = [
  { name: "English", level: "Full Professional Proficiency" },
  { name: "Urdu", level: "Native" },
  { name: "Punjabi", level: "Native" },
  { name: "Hindi", level: "Full Professional Proficiency" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#project-management", label: "Project Management" },
  { href: "#contact", label: "Contact" },
];
