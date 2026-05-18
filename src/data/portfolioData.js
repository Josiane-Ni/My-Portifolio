import {
  Globe,
  Briefcase,
  Send,
  Mail,
  Phone,
  Layout,
  Cpu,
  Database,
  GitBranch,
  Settings,
  Monitor,
  Zap,
  ShieldCheck,
  CodeXml,
  ChevronRight
} from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

export const expertise = [
  {
    category: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Material UI"]
  },
  {
    category: "Backend & Database",
    skills: ["MySQL", "Database Design", "SQL Queries", "System Analysis"]
  },
  {
    category: "Programming & Technical",
    skills: ["Problem Solving", "Debugging", "Software Principles", "API Integration", "Git & GitHub"]
  },
  {
    category: "Tools & Platforms",
    skills: ["VS Code", "GitHub", "Figma", "Arduino IDE", "Postman"]
  },
  {
    category: "Professional Skills",
    skills: ["Team Collaboration", "Communication", "Project Management", "Time Management", "Continuous Learning"]
  },
  {
    category: "Currently Learning",
    skills: ["Advanced React.js", "Backend Development", "Full Stack", "UI/UX Design", "IoT & ML"]
  }
];

export const projects = [
  {
    title: 'ExploreRwanda Ecosystem',
    description: "Architected a high-concurrency management system synchronizing logistics and real-time bookings for Rwanda's tourism sector.",
    impact: ["Real-time Entity Synchronization", "99.9% System Uptime Architecture", "Optimized Data Pipelines"],
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Socket.io'],
    link: 'https://explore-smart-travel-patform-ulwl.vercel.app/',
    image: '/explore_rwanda_hero.png'
  },
  {
    title: 'MiniChess Engine',
    description: 'Developed a networked software engine implementing advanced logic and state persistence for synchronized gameplay.',
    impact: ["Logic Engine Implementation", "Network Synchronization", "Relational State Management"],
    tech: ['Java SE', 'MySQL', 'Network Protocol'],
    link: '#',
    source: 'https://github.com/Josephat-S/Custom-Mini-Chess-Game',
    image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Employees Payroll Management System',
    description: 'Developed a responsive payroll management system for managing employee records, salary calculations, and payroll analytics.',
    impact: ['Employee Management', 'Salary Calculation', 'Payroll Dashboard', 'Data Visualization Charts', 'Responsive User Interface'],
    tech: ['React.js', 'Material UI', 'Recharts', 'JavaScript'],
    link: '#',
    image: '/payroll_hologram.png'
  }
];

export const socialLinks = [
  { name: 'GitHub', href: 'https://www.google.com/search?q=github+login&oq=git&gs_lcrp=EgZjaHJvbWUqDAgDECMYJxiABBiKBTIGCAAQRRg8MhEIARBFGDkYQxixAxiABBiKBTIVCAIQLhhDGMcBGLEDGNEDGIAEGIoFMgwIAxAjGCcYgAQYigUyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDMxMDlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8', icon: Globe },
  { name: 'LinkedIn', href: 'https://www.google.com/search?q=linkedin+login&oq=lin&gs_lcrp=EgZjaHJvbWUqCggDEAAYsQMYgAQyBggAEEUYPDIQCAEQLhjHARixAxjRAxiABDIGCAIQRRg5MgoIAxAAGLEDGIAEMgoIBBAAGLEDGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDI2NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8', icon: Briefcase },
  { name: 'Twitter', href: 'https://www.google.com/search?q=x.com+login&oq=x&gs_lcrp=EgZjaHJvbWUqDggDEEUYJxg7GIAEGIoFMgYIABBFGDwyDwgBEEUYOxiDARixAxiABDIOCAIQRRgnGDsYgAQYigUyDggDEEUYJxg7GIAEGIoFMhAIBBAAGJECGLEDGIAEGIoFMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjUxOWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8', icon: Send },
];
