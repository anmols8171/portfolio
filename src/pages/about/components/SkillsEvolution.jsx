import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsEvolution = () => {
  const skillsTimeline = [
    {
      year: "2023",
      phase: "Foundation",
      skills: [
        { name: "HTML/CSS", level: 85, icon: "Code" },
        { name: "JavaScript", level: 80, icon: "FileCode" },
        { name: "React Basics", level: 70, icon: "Atom" },
        { name: "Git", level: 75, icon: "GitBranch" }
      ],
      description: "Built strong fundamentals in web development and React"
    },
    {
      year: "2024",
      phase: "Specialization",
      skills: [
        { name: "React", level: 88, icon: "Code2" },
        { name: "Material UI", level: 85, icon: "Palette" },
        { name: "REST APIs", level: 85, icon: "Globe" },
        { name: "Axios", level: 88, icon: "Server" }
      ],
      description: "Mastered React and Material UI for building responsive UIs"
    },
    {
      year: "2024-2025",
      phase: "Backend Basics",
      skills: [
        { name: "Node.js", level: 75, icon: "Hexagon" },
        { name: "Express", level: 72, icon: "Server" },
        { name: "MongoDB", level: 70, icon: "Database" },
        { name: "Responsive Design", level: 89, icon: "Monitor" }
      ],
      description: "Expanded into backend development with Node.js ecosystem"
    },
    {
      year: "2025-2026",
      phase: "Growth",
      skills: [
        { name: "Advanced React", level: 90, icon: "Code2" },
        { name: "Performance Optimization", level: 85, icon: "Gauge" },
        { name: "TypeScript (Learning)", level: 60, icon: "FileType" },
        { name: "Testing", level: 65, icon: "CheckCircle" }
      ],
      description: "Focusing on advanced patterns and code quality"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Icon name="TrendingUp" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary">Skills Evolution</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Continuous Growth & Learning
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            My technical journey shows consistent growth and adaptation to emerging technologies, always staying ahead of the curve.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {skillsTimeline?.map((period, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-start">
                {/* Timeline Info */}
                <div className="w-full md:w-48 lg:w-56 flex-shrink-0">
                  <div className="sticky top-24">
                    <div className="inline-flex md:flex flex-col items-start gap-2 p-4 bg-card border border-border rounded-xl">
                      <span className="text-xs md:text-sm font-bold text-primary">{period?.year}</span>
                      <h3 className="text-base md:text-lg font-semibold text-foreground">{period?.phase}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{period?.description}</p>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {period?.skills?.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="p-4 md:p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-purple"
                    >
                      <div className="flex items-center gap-3 mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name={skill?.icon} size={20} color="var(--color-primary)" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm md:text-base font-semibold text-foreground">{skill?.name}</h4>
                          <span className="text-xs text-muted-foreground">{skill?.level}% Proficiency</span>
                        </div>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                          style={{ width: `${skill?.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector Line */}
              {index < skillsTimeline?.length - 1 && (
                <div className="hidden md:block absolute left-24 lg:left-28 top-full h-12 lg:h-16 w-0.5 bg-gradient-to-b from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 p-6 md:p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl text-center">
          <Icon name="Sparkles" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Always Learning, Always Growing</h3>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Frontend development never stops evolving, and neither do I. Currently exploring TypeScript, advanced React patterns, and performance optimization techniques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsEvolution;