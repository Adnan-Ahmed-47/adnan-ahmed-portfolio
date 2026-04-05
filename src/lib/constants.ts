export const SITE = {
  name: "Adnan Ahmed",
  role: "Frontend Developer (React.js)",
  tagline:
    "Building scalable, user-focused web applications with React.js and modern technologies.",
  email: "mdadnaan147@gmail.com",
  phone: "+91 9010776073",
  github: "https://github.com/Adnan-Ahmed-47/",
  linkedin: "https://www.linkedin.com/in/adnan-ahmed-087692276",
  resumePath: "/resume.pdf",
} as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#freelance", label: "Freelance" },
  { href: "#contact", label: "Contact" },
] as const;

export const SKILLS = {
  frontend: [
    { name: "React.js", level: 92 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "HTML5 & CSS3", level: 88 },
  ],
  backend: [
    { name: "REST APIs", level: 85 },
    { name: "API Integration", level: 88 },
    { name: "Node.js (basic)", level: 55 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Postman", level: 80 },
    { name: "VS Code", level: 90 },
  ],
  uiux: [
    { name: "Figma", level: 75 },
    { name: "Responsive Design", level: 90 },
  ],
} as const;

export const PROJECTS = [
  {
    title: "MiDOC",
    subtitle: "AI-Powered Healthcare Platform",
    description:
      "Production healthcare product: React UI, real-time API integration, and modules spanning appointments, EMR, prescriptions, and billing—refined through continuous doctor feedback.",
    tags: ["React", "REST APIs", "Healthcare", "Production"],
    featured: true,
  },
  {
    title: "Farmer Market",
    subtitle: "UI/UX Design",
    description:
      "End-to-end Figma workflow: wireframes through high-fidelity screens with a focus on clarity, accessibility, and responsive layouts.",
    tags: ["Figma", "Wireframes", "UI Kit"],
    featured: true,
  },
] as const;
