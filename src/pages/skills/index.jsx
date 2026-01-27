import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import SkillCard from './components/SkillCard';
import SkillRadarChart from './components/SkillRadarChart';
import TechnologyTimeline from './components/TechnologyTimeline';
import CertificationBadge from './components/CertificationBadge';
import SkillRelationshipMap from './components/SkillRelationshipMap';
import LearningPathCard from './components/LearningPathCard';
import SkillComparisonMode from './components/SkillComparisonMode';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud & DevOps', 'Tools & Others'];

  const skills = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    icon: "Code2",
    proficiency: 88,
    level: "Advanced",
    experience: "2+ years",
    startYear: 2023,
    growth: "+25% YoY",
    projects: ["Web Applications", "Admin Dashboard", "Responsive UIs"],
    description: "Building interactive UIs with React hooks, component patterns, and state management"
  },
  {
    id: 2,
    name: "JavaScript",
    category: "Frontend",
    icon: "FileCode",
    proficiency: 90,
    level: "Advanced",
    experience: "2+ years",
    startYear: 2023,
    growth: "+20% YoY",
    projects: ["Web Applications", "API Integration", "Interactive Features"],
    description: "Modern ES6+ JavaScript with async/await, promises, and DOM manipulation"
  },
  {
    id: 3,
    name: "Material UI",
    category: "Frontend",
    icon: "Palette",
    proficiency: 85,
    level: "Advanced",
    experience: "1+ years",
    startYear: 2024,
    growth: "+30% YoY",
    projects: ["Enterprise Apps", "Component Libraries", "Responsive Design"],
    description: "Building responsive UI screens with Material UI components and theming"
  },
  {
    id: 4,
    name: "HTML5",
    category: "Frontend",
    icon: "Code",
    proficiency: 92,
    level: "Expert",
    experience: "2+ years",
    startYear: 2023,
    growth: "+15% YoY",
    projects: ["Web Pages", "Semantic Markup", "Accessibility"],
    description: "Semantic HTML, accessibility best practices, and modern HTML5 features"
  },
  {
    id: 5,
    name: "CSS3",
    category: "Frontend",
    icon: "Paintbrush",
    proficiency: 87,
    level: "Advanced",
    experience: "2+ years",
    startYear: 2023,
    growth: "+18% YoY",
    projects: ["Responsive Design", "Animations", "Custom Styling"],
    description: "Flexbox, Grid, animations, and responsive design patterns"
  },
  {
    id: 6,
    name: "REST APIs",
    category: "Backend",
    icon: "Globe",
    proficiency: 85,
    level: "Advanced",
    experience: "2+ years",
    startYear: 2023,
    growth: "+22% YoY",
    projects: ["API Integration", "Data Fetching", "Authentication"],
    description: "RESTful API integration, HTTP methods, and error handling"
  },
  {
    id: 7,
    name: "Axios",
    category: "Backend",
    icon: "Server",
    proficiency: 88,
    level: "Advanced",
    experience: "1+ years",
    startYear: 2024,
    growth: "+25% YoY",
    projects: ["Data Fetching", "API Calls", "Request Handling"],
    description: "HTTP client for API requests with interceptors and error handling"
  },
  {
    id: 8,
    name: "Git/GitHub",
    category: "Tools & Others",
    icon: "GitBranch",
    proficiency: 90,
    level: "Advanced",
    experience: "2+ years",
    startYear: 2023,
    growth: "+12% YoY",
    projects: ["Version Control", "Collaboration", "Code Management"],
    description: "Git workflows, branching strategies, pull requests, and team collaboration"
  },
  {
    id: 9,
    name: "Node.js",
    category: "Backend",
    icon: "Hexagon",
    proficiency: 75,
    level: "Intermediate",
    experience: "1+ years",
    startYear: 2024,
    growth: "+28% YoY",
    projects: ["Backend APIs", "Server Development", "NPM Scripts"],
    description: "Server-side JavaScript, npm packages, and basic backend development"
  },
  {
    id: 10,
    name: "Express",
    category: "Backend",
    icon: "Server",
    proficiency: 72,
    level: "Intermediate",
    experience: "1+ years",
    startYear: 2024,
    growth: "+25% YoY",
    projects: ["REST APIs", "Middleware", "Routing"],
    description: "Building REST APIs with Express.js, middleware, and routing"
  },
  {
    id: 11,
    name: "MongoDB",
    category: "Database",
    icon: "Database",
    proficiency: 70,
    level: "Intermediate",
    experience: "1+ years",
    startYear: 2024,
    growth: "+20% YoY",
    projects: ["NoSQL Solutions", "Document Storage", "CRUD Operations"],
    description: "NoSQL database operations, document modeling, and basic queries"
  },
  {
    id: 12,
    name: "Responsive Design",
    category: "Frontend",
    icon: "Monitor",
    proficiency: 89,
    level: "Advanced",
    experience: "2+ years",
    startYear: 2023,
    growth: "+20% YoY",
    projects: ["Mobile-First Design", "Cross-Browser Compatibility", "UI/UX"],
    description: "Mobile-first approach, media queries, and cross-device compatibility"
  }];


  const timelineData = [
  {
    year: "2026",
    milestone: "Advanced Frontend",
    icon: "Rocket",
    description: "Deepening React expertise, exploring performance optimization, and learning modern frontend architecture patterns.",
    technologies: ["React 18", "Next.js", "TypeScript", "Web Performance"]
  },
  {
    year: "2024-2025",
    milestone: "Material UI & React Development",
    icon: "Award",
    description: "Building responsive UI screens with React and Material UI. Integrated REST APIs using Axios/Fetch with proper error handling.",
    technologies: ["React", "Material UI", "Axios", "REST APIs"]
  },
  {
    year: "2024",
    milestone: "Backend Fundamentals",
    icon: "Server",
    description: "Started learning backend development with Node.js and Express. Working with MongoDB for database operations.",
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    year: "2023-2024",
    milestone: "Modern Web Development",
    icon: "Layout",
    description: "Mastered modern frontend development with React, JavaScript, and responsive design. Built multiple web applications.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3"]
  },
  {
    year: "2023",
    milestone: "Web Development Foundation",
    icon: "BookOpen",
    description: "Started professional web development journey. Learned HTML, CSS, JavaScript fundamentals and basic React concepts.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Git"]
  }
];


  const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_166f1efe1-1764661435735.png",
    badgeAlt: "AWS certification badge with orange and white cloud logo on blue background showing Solutions Architect Associate credential",
    issueDate: "Jan 2024",
    expiryDate: "Jan 2027",
    verificationUrl: "https://aws.amazon.com/verification"
  },
  {
    id: 2,
    name: "Oracle Certified Professional: Java SE 11 Developer",
    issuer: "Oracle",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_18cf36c4b-1765031720849.png",
    badgeAlt: "Oracle Java certification badge with red Oracle logo and Java coffee cup icon on white background",
    issueDate: "Mar 2023",
    expiryDate: "Lifetime",
    verificationUrl: "https://oracle.com/verification"
  },
  {
    id: 3,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_129c5b7d4-1764661436023.png",
    badgeAlt: "Meta certification badge with blue infinity symbol logo and Front-End Developer text on white background",
    issueDate: "Jun 2022",
    expiryDate: "Lifetime",
    verificationUrl: "https://coursera.org/verification"
  },
  {
    id: 4,
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_10dadbd09-1767113199618.png",
    badgeAlt: "Docker certification badge with blue whale logo carrying containers on ocean background",
    issueDate: "Sep 2023",
    expiryDate: "Sep 2025",
    verificationUrl: "https://docker.com/verification"
  }];


  const relationshipData = [
  {
    category: "Frontend Development",
    icon: "Layers",
    description: "Modern frontend web application development",
    skills: [
    { name: "React", icon: "Code2", proficiency: 88 },
    { name: "JavaScript", icon: "FileCode", proficiency: 90 },
    { name: "Material UI", icon: "Palette", proficiency: 85 },
    { name: "HTML5", icon: "Code", proficiency: 92 }],

    projects: ["Web Applications", "Admin Dashboard", "Responsive UIs"]
  },
  {
    category: "API Integration",
    icon: "Globe",
    description: "REST API integration and data fetching",
    skills: [
    { name: "REST APIs", icon: "Globe", proficiency: 85 },
    { name: "Axios", icon: "Server", proficiency: 88 },
    { name: "JavaScript", icon: "FileCode", proficiency: 90 },
    { name: "React", icon: "Code2", proficiency: 88 }],

    projects: ["API Integration", "Data Fetching", "Error Handling"]
  },
  {
    category: "Styling & Design",
    icon: "Paintbrush",
    description: "Responsive UI design and styling",
    skills: [
    { name: "CSS3", icon: "Paintbrush", proficiency: 87 },
    { name: "Material UI", icon: "Palette", proficiency: 85 },
    { name: "Responsive Design", icon: "Monitor", proficiency: 89 },
    { name: "HTML5", icon: "Code", proficiency: 92 }],

    projects: ["Responsive Design", "Component Styling", "UI/UX"]
  },
  {
    category: "Backend Basics",
    icon: "Server",
    description: "Basic backend development and databases",
    skills: [
    { name: "Node.js", icon: "Hexagon", proficiency: 75 },
    { name: "Express", icon: "Server", proficiency: 72 },
    { name: "MongoDB", icon: "Database", proficiency: 70 },
    { name: "Git/GitHub", icon: "GitBranch", proficiency: 90 }],

    projects: ["REST APIs", "Database Operations", "Version Control"]
  }];


  const learningPaths = [
  {
    id: 1,
    title: "Advanced React Patterns",
    icon: "Code2",
    duration: "6 months",
    description: "Master advanced React patterns, performance optimization, and modern state management solutions.",
    goal: "React Expert Level",
    targetDate: "Jun 2026",
    steps: [
    {
      title: "React Performance Optimization",
      description: "Memoization, useMemo, useCallback, code splitting",
      completed: true,
      current: false
    },
    {
      title: "Advanced Hooks & Custom Hooks",
      description: "Custom hooks patterns, useReducer, useContext",
      completed: true,
      current: false
    },
    {
      title: "State Management",
      description: "Redux Toolkit, Zustand, React Query",
      completed: false,
      current: true
    },
    {
      title: "Testing & Best Practices",
      description: "Jest, React Testing Library, E2E testing",
      completed: false,
      current: false
    }]

  },
  {
    id: 2,
    title: "TypeScript for React",
    icon: "FileType",
    duration: "4 months",
    description: "Learn TypeScript to write type-safe React applications with better developer experience.",
    goal: "TypeScript Proficiency",
    targetDate: "Apr 2026",
    steps: [
    {
      title: "TypeScript Fundamentals",
      description: "Types, interfaces, generics, type inference",
      completed: false,
      current: true
    },
    {
      title: "React with TypeScript",
      description: "Typed components, props, hooks, and contexts",
      completed: false,
      current: false
    },
    {
      title: "Advanced Types",
      description: "Utility types, mapped types, conditional types",
      completed: false,
      current: false
    },
    {
      title: "Type-Safe APIs",
      description: "API typing, Zod validation, type guards",
      completed: false,
      current: false
    }]

  },
  {
    id: 3,
    title: "Full-Stack JavaScript",
    icon: "Layers",
    duration: "5 months",
    description: "Expand backend knowledge with Node.js, Express, and modern full-stack development.",
    goal: "Full-Stack Capability",
    targetDate: "May 2026",
    steps: [
    {
      title: "Node.js & Express Advanced",
      description: "Middleware, authentication, REST API design",
      completed: true,
      current: false
    },
    {
      title: "Database Mastery",
      description: "MongoDB aggregations, indexing, relationships",
      completed: false,
      current: true
    },
    {
      title: "Authentication & Security",
      description: "JWT, OAuth, bcrypt, security best practices",
      completed: false,
      current: false
    },
    {
      title: "Deployment & DevOps",
      description: "Docker basics, CI/CD, cloud deployment",
      completed: false,
      current: false
    }]

  }];


  const comparisonData = [
  { skill: "React", 2023: 65, 2024: 80, 2025: 88 },
  { skill: "JavaScript", 2023: 70, 2024: 85, 2025: 90 },
  { skill: "Material UI", 2023: 0, 2024: 70, 2025: 85 },
  { skill: "HTML5/CSS3", 2023: 75, 2024: 88, 2025: 90 },
  { skill: "REST APIs", 2023: 60, 2024: 78, 2025: 85 },
  { skill: "Node.js", 2023: 0, 2024: 60, 2025: 75 }];


  const filteredSkills = selectedCategory === 'All' ?
  skills :
  skills?.filter((skill) => skill?.category === selectedCategory);

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill?.id === skill?.id ? null : skill);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Icon name="Sparkles" size={16} color="var(--color-primary)" strokeWidth={2} />
              <span className="text-sm font-medium text-primary">Technical Arsenal</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive overview of technical capabilities with interactive proficiency indicators,
              learning paths, and technology relationships
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {categories?.map((category) =>
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category ?
                  'bg-primary text-primary-foreground shadow-purple' :
                  'bg-muted text-muted-foreground hover:bg-muted/80'}`
                  }>

                    {category}
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`
                  }>

                  <Icon name="Grid3x3" size={20} strokeWidth={2} />
                </button>
                <button
                  onClick={() => setViewMode('radar')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'radar' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`
                  }>

                  <Icon name="Radar" size={20} strokeWidth={2} />
                </button>
              </div>
            </div>

            {viewMode === 'grid' ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredSkills?.map((skill) =>
              <SkillCard
                key={skill?.id}
                skill={skill}
                onSelect={handleSkillClick}
                isSelected={selectedSkill?.id === skill?.id} />

              )}
              </div> :

            <div className="bg-card border border-border rounded-xl p-4 md:p-8">
                <div className="w-full h-96 md:h-[500px]">
                  <SkillRadarChart skills={filteredSkills} selectedCategory={selectedCategory} />
                </div>
              </div>
            }
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="TrendingUp" size={20} color="#ffffff" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Skill Comparison</h2>
                <p className="text-sm text-muted-foreground">Track proficiency growth over time</p>
              </div>
            </div>
            <SkillComparisonMode comparisonData={comparisonData} />
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Network" size={20} color="#ffffff" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Technology Relationships</h2>
                <p className="text-sm text-muted-foreground">How different skills complement each other</p>
              </div>
            </div>
            <SkillRelationshipMap
              relationships={relationshipData}
              onSkillClick={handleSkillClick} />

          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Target" size={20} color="#ffffff" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Learning Paths</h2>
                <p className="text-sm text-muted-foreground">Continuous skill development trajectory</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {learningPaths?.map((path) =>
              <LearningPathCard key={path?.id} path={path} />
              )}
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Clock" size={20} color="#ffffff" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Technology Timeline</h2>
                <p className="text-sm text-muted-foreground">Journey of skill acquisition and growth</p>
              </div>
            </div>
            <TechnologyTimeline timelineData={timelineData} />
          </div>

          {/* <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Award" size={20} color="#ffffff" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Certifications</h2>
                <p className="text-sm text-muted-foreground">Professional credentials and achievements</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {certifications?.map((cert) =>
              <CertificationBadge key={cert?.id} certification={cert} />
              )}
            </div>
          </div> */}

          <div className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="Code2" size={32} color="#ffffff" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Let's discuss how these skills can bring your project to life. I'm always excited to tackle new challenges and create innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2">
                    <Icon name="Mail" size={18} strokeWidth={2} />
                    <span>Get in Touch</span>
                  </button>
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/anmol_resume.pdf';
                      link.download = 'Anmol_Singh_Resume.pdf';
                      link.click();
                    }}
                    className="px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Icon name="Download" size={18} strokeWidth={2} />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Code2" size={20} color="#ffffff" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-foreground">AnmolDev</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} AnmolDev. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Icon name="Github" size={20} strokeWidth={2} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Icon name="Linkedin" size={20} strokeWidth={2} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Icon name="Mail" size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>);

};

export default Skills;