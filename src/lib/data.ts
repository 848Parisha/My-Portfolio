import { Project, Skill, Experience, Education, ContactInfo, SocialLink } from '@/types';

export const personalInfo = {
  name: "Parisha Sharma",
  title: "Full-Stack Developer",
  subtitle: "Computer Science Engineering Student",
  institution: "Chandigarh University (2023-2027)",
  // about: "I'm a passionate full-stack developer with expertise in modern web technologies. I love building scalable applications and solving complex problems. Currently pursuing Computer Science Engineering at Chandigarh University.",
  location: "Chandigarh, India",
};

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend", proficiency: 90 },
  { name: "Next.js", category: "frontend", proficiency: 85 },
  { name: "TypeScript", category: "frontend", proficiency: 80 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 85 },
  { name: "JavaScript", category: "frontend", proficiency: 90 },
  { name: "HTML/CSS", category: "frontend", proficiency: 95 },
  
  // Backend
  { name: "Node.js", category: "backend", proficiency: 80 },
  { name: "Express.js", category: "backend", proficiency: 75 },
  { name: "Python", category: "backend", proficiency: 70 },
  { name: "Java", category: "backend", proficiency: 65 },
  
  // Database
  { name: "MongoDB", category: "database", proficiency: 75 },
  { name: "MySQL", category: "database", proficiency: 70 },
  { name: "PostgreSQL", category: "database", proficiency: 65 },
  
  // Tools
  { name: "Git", category: "tools", proficiency: 85 },
  { name: "Docker", category: "tools", proficiency: 60 },
  { name: "AWS", category: "tools", proficiency: 55 },
  { name: "Vercel", category: "tools", proficiency: 80 },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "OTID-FAN",
    description: "One-Time Digital Identity Verification & Fraud Alert Network - A hybrid web application for digital identity verification and fraud reporting/tracking",
    image: "/images/projects/identity-verification.jpg",
    technologies: ["JavaScript", "Web Development", "Security", "Identity Verification"],
    githubUrl: "https://github.com/848deepak/OTID-FAN",
    featured: true,
  },
  {
    id: "2",
    title: "Parisha Sharma's Portfolio",
    description: "A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a clean, professional design.",
    image: "/images/projects/library-system.jpg",
    technologies: ["Java", "Gamification", "Database", "UI/UX"],
    githubUrl: "https://github.com/848Parisha/My-Portfolio",
    featured: true,
  },
  {
    id: "3",
    title: "AI-Driven Traffic Light System",
    description: "Smart traffic management system using artificial intelligence to optimize traffic flow and reduce congestion.",
    image: "/images/projects/traffic-system.jpg",
    technologies: ["Python", "AI/ML", "Computer Vision", "IoT"],
    githubUrl: "https://github.com/848deepak/AI-Driven-Traffic-Light-System",
    featured: true,
  },
  {
    id: "5",
    title: "Student Database Management",
    description: "A Student Database Management System (SDBMS) designed to efficiently manage and organize student-related information with advanced querying capabilities.",
    image: "/images/projects/student-database.jpg",
    technologies: ["C++", "Database", "Data Structures"],
    githubUrl: "https://github.com/848deepak/STUDENT-DATABASE-MANAGEMENT-SYSTEM-",
    featured: false,
  },
  {
    id: "6",
    title: "CU Coding Portfolio",
    description: "A comprehensive collection of coding projects and assignments completed during B.E. in Computer Science at Chandigarh University.",
    image: "/images/projects/coding-portfolio.jpg",
    technologies: ["C++", "C", "Python", "Data Structures"],
    githubUrl: "https://github.com/848deepak/CU-Coding-Portfolio",
    featured: false,
  }
];

export const experience: Experience[] = [
  {
    id: "1",
    title: "Co-Founder & Operations Lead",
    company: "Codeunia",
    location: "Mohali, Punjab · Hybrid",
    startDate: "2025-04",
    endDate: "Present",
    description: [
      "As the Co-founder of CodeUnia, I am actively involved in shaping the vision, strategy, and growth of our community-driven platform focused on empowering budding coders and tech enthusiasts.",
      "I collaborate on initiatives that foster learning, innovation, and collaboration through curated coding challenges, workshops, and technical mentorship.",
      "My role spans leadership, content creation, and community building — all aimed at creating a supportive ecosystem where learners can grow, share knowledge, and build impactful tech projects together."
    ],
    technologies: ["Leadership", "Community Building", "Mentorship", "Content Creation"],
    logo: "https://placehold.co/48x48/1e293b/fff?text=CU", // Replace with official logo if available
  },
  {
    id: "2",
    title: "Social Media Manager",
    company: "HackwithIndia",
    location: "Mohali · Hybrid",
    startDate: "2025-02",
    endDate: "2025-05",
    description: [
      "Managing social media strategies, creating engaging content, and amplifying HackWithIndia's reach.",
      "Focused on fostering community engagement and promoting innovation through digital platforms."
    ],
    technologies: ["Social Media", "Content Creation", "Community Engagement"],
    logo: "https://placehold.co/48x48/0ea5e9/fff?text=HWI", // Replace with official logo if available
  },
];

export const education: Education = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "Chandigarh University",
  location: "Chandigarh, India",
  startDate: "2023",
  endDate: "2027",
  description: "Currently pursuing Computer Science Engineering with focus on software development, algorithms, and web technologies.",
};

export const contactInfo: ContactInfo = {
  email: "parisha8888@gmail.com",
  phone: "+91 98170 32182",
  location: "Chandigarh, India",
  github: "https://github.com/orgs/Codeunia/people/848Parisha",
  linkedin: "https://www.linkedin.com/in/parishasharma93/",
  // twitter: "", // No Twitter provided
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/orgs/Codeunia/people/848Parisha",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/parishasharma93/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/parisha192/",
    icon: "instagram",
  },
  {
    name: "Email",
    url: "mailto:parisha8888@gmail.com",
    icon: "mail",
  },
]; 