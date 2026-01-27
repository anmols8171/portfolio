import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import TimelineItem from "./components/TimelineItem";
import StatsCard from "./components/StatsCard";
import CertificationCard from "./components/CertificationCard";
import SkillEvolutionChart from "./components/SkillEvolutionChart";

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "XAutomation Labs Pvt. Ltd",
      companyLogo:
        "https://surveyadmin.pareekshn.com/assets/logo-hd-ZLVGU1mN.png",
      companyLogoAlt:
        "Modern tech company office building with glass facade and blue sky background",
      companyDescription:
        "Technology services/product company where I worked on web application development and feature delivery",
      duration: "Jan 2024 - Present",
      location: "Noida, India",
      isCurrent: true,
      responsibilities: [
        "Built and maintained responsive UI screens using React and Material UI, following reusable component patterns",
        "Integrated frontend with REST APIs using Axios/Fetch; handled loading, error states, and validations",
        "Fixed UI issues and improved UX by optimizing component rendering",
      ],
      achievements: [
        {
          icon: "TrendingUp",
          metric: "30%",
          description: "Improved component rendering performance",
        },
        {
          icon: "Users",
          metric: "500+",
          description: "Daily active users using developed features",
        },
        {
          icon: "Award",
          metric: "25+",
          description: "UI screens and components built",
        },
      ],

      technologies: [
        "React",
        "Material UI",
        "JavaScript",
        "REST APIs",
        "Axios",
        "HTML5",
        "CSS3",
        "Git/GitHub",
        "Responsive Design",
      ],

      projects: [
        {
          name: "Web Application Development",
          description:
            "Built responsive UI screens using React and Material UI with reusable component patterns",
          impact:
            "Improved user experience and reduced development time through component reusability",
        },
      ],
    },
    {
      id: 2,
      role: "Software Developer",
      company: "DRDO (DEAL)",
      companyLogo:
        "https://yourwebstore.in/wp-content/uploads/2022/02/yourwebstore-3-200x80.png",
      companyLogoAlt: "Government R&D organization office",
      companyDescription:
        "Government R&D organization (defence), internal tools",
      duration: "Apr 2023 - Dec 2023",
      location: "Delhi, India",
      isCurrent: false,
      responsibilities: [
        "Contributed to development of an internal application for Information Security Audit data collection and analysis",
        "Helped design and implement modules to store audit records and support structured reporting",
        "Coordinated with mentors to test features and ensure correct handling of sensitive data",
      ],

      achievements: [
        {
          icon: "Code2",
          metric: "15+",
          description: "Modules designed and implemented",
        },
        {
          icon: "Shield",
          metric: "100%",
          description: "Security compliance maintained",
        },
        {
          icon: "CheckCircle",
          metric: "20+",
          description: "Features tested and deployed",
        },
      ],

      technologies: [
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Database Management",
        "Security Protocols",
        "Git",
      ],

      projects: [
        {
          name: "Information Security Audit System",
          description:
            "Internal application for collecting and analyzing audit data with structured reporting",
          impact:
            "Enabled efficient audit data management and secure handling of sensitive information",
        },
      ],
    },
  ];

  const careerStats = [
    {
      icon: "Briefcase",
      value: "2+",
      label: "Years Experience",
      description: "Progressive career growth in software development",
    },
    {
      icon: "FolderGit2",
      value: "10+",
      label: "Projects Delivered",
      description: "Successfully completed client and internal projects",
    },
    {
      icon: "Users",
      value: "1K+",
      label: "Users Impacted",
      description: "Total users served across all applications",
    },
    {
      icon: "Award",
      value: "8+",
      label: "Technologies Mastered",
      description: "Expertise across full-stack development",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Nov 2023",
      credentialId: "AWS-CSA-2023-1234",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_170dd5082-1764674270965.png",
      logoAlt:
        "AWS certification badge with orange and white cloud computing logo on professional background",
    },
    {
      name: "Oracle Certified Professional Java SE",
      issuer: "Oracle Corporation",
      date: "Aug 2023",
      credentialId: "OCP-JAVA-2023-5678",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_18cf36c4b-1765031720849.png",
      logoAlt:
        "Oracle Java certification emblem featuring red coffee cup logo on white background",
    },
    {
      name: "React Advanced Certification",
      issuer: "Meta (Facebook)",
      date: "May 2023",
      credentialId: "META-REACT-2023-9012",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1cd01d406-1764674757506.png",
      logoAlt:
        "Meta React certification badge with blue gradient and atomic symbol design",
    },
  ];

  const skillEvolution = [
    {
      year: "2024-Present",
      phase: "Advanced Full-Stack & Architecture",
      skills: [
        "Microservices",
        "Kubernetes",
        "GraphQL",
        "System Design",
        "Team Leadership",
        "DevOps",
      ],
    },
    {
      year: "2022-2023",
      phase: "Full-Stack Development Mastery",
      skills: [
        "React Advanced",
        "Node.js",
        "MongoDB",
        "AWS",
        "CI/CD",
        "Agile Methodologies",
      ],
    },
    {
      year: "2020-2021",
      phase: "Foundation & Core Technologies",
      skills: [
        "React Basics",
        "JavaScript ES6+",
        "REST APIs",
        "Git",
        "HTML5/CSS3",
        "Redux",
      ],
    },
  ];

  const handleDownloadResume = () => {
    // Download resume PDF
    const link = document.createElement('a');
    link.href = '/anmol_resume.pdf';
    link.download = 'Anmol_Singh_Resume.pdf';
    link.click();
  };

  const filteredExperiences =
    activeFilter === "all"
      ? experiences
      : experiences?.filter(
          (exp) => exp?.isCurrent === (activeFilter === "current")
        );

  return (
    <>
      <Helmet>
        <title>Professional Experience - AnmolDev Portfolio</title>
        <meta
          name="description"
          content="Explore Anmol Singh's professional journey as a Software Engineer with 2+ years of experience in web application development, delivering responsive UI solutions and working with modern frameworks."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 md:pt-28 md:pb-16 md:px-6 lg:pt-32 lg:pb-20 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 md:mb-6">
                <Icon
                  name="Briefcase"
                  size={16}
                  className="text-primary md:w-5 md:h-5"
                />
                <span className="text-xs font-medium text-primary md:text-sm">
                  Professional Journey
                </span>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4 md:text-4xl lg:text-5xl">
                Experience & Career Growth
              </h1>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto md:text-base lg:text-lg">
                A progressive career journey showcasing technical expertise,
                leadership development, and measurable impact across diverse
                projects and technologies
              </p>
            </div>

            {/* Career Stats */}
            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 md:gap-6 md:mb-12 lg:grid-cols-4 lg:gap-8 lg:mb-16">
              {careerStats?.map((stat, idx) => (
                <StatsCard key={idx} stat={stat} />
              ))}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center mb-8 md:gap-3 md:mb-12 lg:mb-16">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("all")}
              >
                All Positions
              </Button>
              <Button
                variant={activeFilter === "current" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("current")}
              >
                Current Role
              </Button>
              <Button
                variant={activeFilter === "previous" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("previous")}
              >
                Previous Roles
              </Button>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="pb-12 px-4 md:pb-16 md:px-6 lg:pb-20 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 md:text-3xl md:mb-12 lg:text-4xl lg:mb-16">
              Career Timeline
            </h2>
            <div className="space-y-0">
              {filteredExperiences?.map((experience, idx) => (
                <TimelineItem
                  key={experience?.id}
                  experience={experience}
                  isLast={idx === filteredExperiences?.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Evolution */}
        {/* <section className="pb-12 px-4 md:pb-16 md:px-6 lg:pb-20 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SkillEvolutionChart skillEvolution={skillEvolution} />
          </div>
        </section> */}

        {/* Certifications */}
        {/* <section className="pb-12 px-4 md:pb-16 md:px-6 lg:pb-20 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-3 md:text-3xl lg:text-4xl">
                Professional Certifications
              </h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                Industry-recognized credentials validating technical expertise
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
              {certifications?.map((cert, idx) => (
                <CertificationCard key={idx} certification={cert} />
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="pb-16 px-4 md:pb-20 md:px-6 lg:pb-24 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg border border-primary/20 p-6 text-center md:p-8 lg:p-12">
              <Icon
                name="FileText"
                size={40}
                className="text-primary mx-auto mb-4 md:w-12 md:h-12 lg:w-14 lg:h-14"
              />
              <h3 className="text-xl font-bold text-foreground mb-3 md:text-2xl lg:text-3xl">
                Download Detailed Resume
              </h3>
              <p className="text-sm text-muted-foreground mb-6 md:text-base lg:text-lg">
                Get a comprehensive PDF version with complete work history,
                technical skills, and project details
              </p>
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xs text-muted-foreground md:text-sm">
              &copy; {new Date()?.getFullYear()} AnmolDev. All rights reserved.
              Building digital solutions that matter.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Experience;
