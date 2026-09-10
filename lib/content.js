export const profile = {
  name: "Waqar ul Hassan",
  headline: "Software Engineer | Full-Stack Developer | Project Management & Agile Delivery",
  role: "Software Engineer",
  tagline:
    "I build MERN applications across the full SDLC and keep delivery on schedule by turning client requirements into clear technical work.",
  location: "Lahore, Punjab, Pakistan",
  phone: "+92 300 0110620",
  email: "waqarulhassan3484@gmail.com",
  linkedin: "https://www.linkedin.com/in/waqar-ul-hassan786",
  github: "https://github.com/waqarulhassan786",
  gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=waqarulhassan3484@gmail.com",
  resume: "/Waqar_Ul_Hassan_Resume.pdf",
  siteUrl: "https://waqar-port-folio.vercel.app",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experiences" },
  { href: "#skills", label: "Technologies" },
  { href: "#education", label: "Education" },
];

export const aiTools = [
  {
    name: "Cursor",
    role: "AI-assisted IDE",
    text: "Daily coding workflow for MERN features, refactors, and faster iteration inside the editor.",
  },
  {
    name: "Claude",
    role: "AI pair programmer",
    text: "Used for architecture thinking, debugging support, and turning requirements into clear implementation plans.",
  },
  {
    name: "GitHub Copilot",
    role: "Inline AI assist",
    text: "Speeds up boilerplate, tests, and repetitive UI/API patterns while keeping ownership of the final code.",
  },
];

export const protocols = [
  {
    id: "P.01",
    icon: "stack",
    title: "Full-Stack Architecture",
    text: "End-to-end MERN applications from requirement analysis through deployment, authentication, and ongoing support.",
    modules: [
      "Requirement analysis to production delivery",
      "MERN applications with CRUD modules",
      "JWT authentication and role-based access",
      "REST APIs for frontend and backend",
      "MongoDB data modeling and queries",
      "Testing, debugging, and release support",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    stats: [
      { value: "3+", label: "Years shipping" },
      { value: "2", label: "Product roles" },
    ],
  },
  {
    id: "P.02",
    icon: "window",
    title: "Frontend Engineering",
    text: "Responsive product interfaces with React, Next.js, TypeScript, and Tailwind CSS, focused on usability and performance.",
    modules: [
      "React component architecture",
      "Next.js application UI",
      "TypeScript on production screens",
      "Tailwind CSS layout systems",
      "Usable browsing and checkout flows",
      "Performance-minded frontend work",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    stats: [
      { value: "UI", label: "Product-facing" },
      { value: "SPA", label: "App shells" },
    ],
  },
  {
    id: "P.03",
    icon: "globe",
    title: "Backend & APIs",
    text: "Server-side work for booking, rental, and multi-user products: REST APIs, JWT, and MongoDB data management.",
    modules: [
      "REST API design and integration",
      "JWT session and access control",
      "Role-based permissions",
      "MongoDB collections and queries",
      "Hotel booking backend flows",
      "Postman-tested endpoints",
    ],
    tech: ["Node.js", "Express.js", "REST APIs", "JWT", "MongoDB"],
    stats: [
      { value: "API", label: "Contract first" },
      { value: "JWT", label: "Auth layer" },
    ],
  },
  {
    id: "P.04",
    icon: "gear",
    title: "Agile Delivery",
    text: "Requirement gathering, sprint planning, client communication, risk tracking, and progress reporting alongside the build.",
    modules: [
      "Requirement gathering and analysis",
      "Task and sprint planning",
      "Client and stakeholder updates",
      "Risk and issue tracking",
      "Team coordination",
      "Documentation and QA before release",
    ],
    tech: ["Agile", "Cursor", "Claude", "Copilot", "Jira"],
    stats: [
      { value: "SDLC", label: "Full cycle" },
      { value: "AI", label: "Assisted build" },
    ],
  },
];

export const experience = [
  {
    role: "MERN Stack Developer",
    company: "Codings First",
    location: "Bahawalpur, Pakistan",
    period: "Jun 2024 – Jan 2026",
    current: false,
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
    demo: false,
    cover: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1600&q=80",
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
    demo: false,
    cover: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
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
    demo: false,
    cover: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
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
    demo: true,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
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
    demo: true,
    cover: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1600&q=80",
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
    demo: true,
    cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
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
    demo: true,
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
  },
];

export const projectPageFilters = [
  { id: "All", label: "All" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
  { id: "Demo Projects", label: "Concepts" },
];

export const education = {
  degree: "BS Software Engineering",
  cgpa: "3.5",
  school: "The Islamia University of Bahawalpur",
  location: "Bahawalpur, Pakistan",
  schoolUrl: "https://www.iub.edu.pk/",
  highlights: [
    "Bachelor of Science in Software Engineering from The Islamia University of Bahawalpur.",
    "Completed the degree with a CGPA of 3.5.",
  ],
};

export const languages = [
  { name: "English", level: "Full Professional Proficiency" },
  { name: "Urdu", level: "Native" },
  { name: "Punjabi", level: "Native" },
  { name: "Hindi", level: "Full Professional Proficiency" },
];

export const roles = ["Software Engineer", "Full-Stack Developer", "MERN Stack Developer"];

export const specializations = [
  {
    kicker: "Full stack",
    title: "Web Engineering",
    text: "End-to-end MERN applications from requirement analysis through deployment, authentication, and support.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    kicker: "Frontend",
    title: "Interface Design & Build",
    text: "Responsive product interfaces with React, Next.js, TypeScript, and Tailwind CSS, focused on usability and performance.",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    kicker: "Backend",
    title: "APIs & Data",
    text: "REST APIs, JWT authentication, role-based access, CRUD modules, and MongoDB data management.",
    tags: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    kicker: "Delivery",
    title: "Planning & Agile",
    text: "Requirement gathering, sprint planning, client communication, risk tracking, and progress reporting alongside the build.",
    tags: ["Agile", "Scrum", "SDLC", "Documentation"],
  },
];

export const techOrbit = [
  { name: "React.js", short: "React", category: "Frontend Library", ring: 0, color: "#58c4dc", links: ["Next.js", "JavaScript", "TypeScript"] },
  { name: "JavaScript", short: "JS", category: "Language", ring: 0, color: "#f7df1e", links: ["React.js", "TypeScript", "Next.js"] },
  { name: "TypeScript", short: "TypeScript", category: "Language", ring: 0, color: "#3178c6", links: ["React.js", "Next.js", "JavaScript", "Cursor"] },
  { name: "Next.js", short: "Next.js", category: "Frontend Framework", ring: 0, color: "#fafafa", links: ["React.js", "TypeScript", "Node.js"] },
  { name: "Node.js", short: "Node.js", category: "Runtime", ring: 1, color: "#5fa04e", links: ["Express.js", "MongoDB", "JavaScript"] },
  { name: "Express.js", short: "Express", category: "Backend Framework", ring: 1, color: "#d4d4d8", links: ["Node.js", "JWT", "MongoDB"] },
  { name: "MongoDB", short: "MongoDB", category: "Database", ring: 1, color: "#00ed64", links: ["Node.js", "Express.js"] },
  { name: "Tailwind", short: "Tailwind CSS", category: "Styling", ring: 1, color: "#38bdf8", links: ["React.js", "Next.js"] },
  { name: "Git", short: "Git", category: "Tool & Utility", ring: 2, color: "#f05032", links: ["GitHub"] },
  { name: "GitHub", short: "GitHub", category: "Tool & Utility", ring: 2, color: "#fafafa", links: ["Git", "GitHub Copilot"] },
  { name: "JWT", short: "JWT", category: "Auth", ring: 2, color: "#d63aff", links: ["Node.js", "Express.js"] },
  { name: "Postman", short: "Postman", category: "Tool & Utility", ring: 2, color: "#ff6c37", links: ["Express.js", "JWT"] },
  { name: "Jira", short: "Jira", category: "Delivery", ring: 2, color: "#2684ff", links: ["Git"] },
  { name: "Cursor", short: "Cursor", category: "AI Tooling", ring: 2, color: "#e4e4e7", links: ["Claude", "GitHub Copilot", "TypeScript"] },
  { name: "Claude", short: "Claude", category: "AI Tooling", ring: 2, color: "#d4a574", links: ["Cursor", "GitHub Copilot"] },
  { name: "GitHub Copilot", short: "Copilot", category: "AI Tooling", ring: 2, color: "#7ee787", links: ["Cursor", "Claude", "GitHub"] },
];

export const beyondLinks = [
  { href: "#services", label: "Services", hint: "What I offer" },
  { href: "#experience", label: "Experience", hint: "Career" },
  { href: "/projects", label: "All Projects", hint: "Work" },
  { href: profile.github, label: "GitHub", hint: "Source", external: true },
];

export const footerLinks = [
  { href: "/#home", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export const heroCode = `const waqar = {
  role: 'Software Engineer',
  skills: ['React', 'Next.js', 'Node.js'],
  tools: ['Cursor', 'Claude', 'Copilot'],
  location: 'Lahore',
};`;
