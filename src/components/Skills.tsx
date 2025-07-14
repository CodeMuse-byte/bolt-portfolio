import React, { useEffect, useState } from 'react';
import { Code, Database, Globe, Cpu, Zap, Terminal, Briefcase, Calendar } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  position: { x: number; y: number };
  color: string;
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [connections, setConnections] = useState<boolean[]>([]);

  const skills: Skill[] = [
    { name: 'React', icon: <Code className="w-6 h-6" />, level: 95, position: { x: 20, y: 30 }, color: 'primary' },
    { name: 'Node.js', icon: <Terminal className="w-6 h-6" />, level: 90, position: { x: 70, y: 20 }, color: 'success' },
    { name: 'Database', icon: <Database className="w-6 h-6" />, level: 85, position: { x: 80, y: 70 }, color: 'secondary' },
    { name: 'TypeScript', icon: <Globe className="w-6 h-6" />, level: 88, position: { x: 30, y: 80 }, color: 'accent' },
    { name: 'Cloud', icon: <Cpu className="w-6 h-6" />, level: 75, position: { x: 50, y: 40 }, color: 'primary' },
    { name: 'DevOps', icon: <Zap className="w-6 h-6" />, level: 80, position: { x: 60, y: 60 }, color: 'secondary' },
  ];

  const experiences: Experience[] = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies.',
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript']
    },
    {
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      duration: '2020 - 2022',
      description: 'Built responsive web applications and improved user experience for 100k+ users.',
      technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Firebase']
    },
    {
      company: 'Digital Agency',
      position: 'Web Developer',
      duration: '2019 - 2020',
      description: 'Developed custom websites and e-commerce solutions for various clients.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setConnections(prev => prev.map(() => Math.random() > 0.7));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4">
      {/* Circular Next Page Navigation */}
      <button
        onClick={() => {
          const event = new CustomEvent('navigateToPage', { detail: { page: 4 } });
          window.dispatchEvent(event);
        }}
        className="fixed right-12 top-1/2 transform -translate-y-1/2 z-50 w-24 h-24 bg-gray-800/80 backdrop-blur-sm border-2 border-amber-500/30 rounded-full flex items-center justify-center text-amber-400 hover:text-white hover:bg-amber-600/20 transition-all duration-300 group hover:rotate-[360deg]"
      >
        <div className="transform -rotate-90 text-xs font-bold tracking-wider whitespace-nowrap">
          NEXT PAGE
        </div>
      </button>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 dev-title">
          <span className="text-primary">TECH</span>
          <span className="text-secondary"> STACK</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Skills Radar */}
          <div className="relative bg-black/30 backdrop-blur-sm border border-primary/30 rounded-lg p-8 h-[500px]">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Skills Overview</h3>
            
          {/* Grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(rgba(79,70,229,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {skills.map((skill, i) => 
              skills.slice(i + 1).map((otherSkill, j) => (
                <line
                  key={`${i}-${j}`}
                  x1={`${skill.position.x}%`}
                  y1={`${skill.position.y}%`}
                  x2={`${otherSkill.position.x}%`}
                  y2={`${otherSkill.position.y}%`}
                  stroke={connections[i + j] ? '#4F46E5' : '#F59E0B'}
                  strokeWidth="1"
                  opacity={connections[i + j] ? 0.6 : 0.2}
                  className="transition-all duration-1000"
                />
              ))
            )}
          </svg>

          {/* Skill nodes */}
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group skill-node skill-node-${skill.color}`}
              style={{ left: `${skill.position.x}%`, top: `${skill.position.y}%` }}
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div className={`w-16 h-16 rounded-full border-2 border-${skill.color} bg-black/80 backdrop-blur-sm flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-300`}>
                <div className={`text-${skill.color}`}>
                  {skill.icon}
                </div>
                
                {/* Pulse effect */}
                <div className={`absolute inset-0 rounded-full border-2 border-${skill.color} animate-ping opacity-20`}></div>
              </div>

              {/* Skill info popup */}
              {activeSkill === index && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/90 backdrop-blur-sm border border-primary/50 rounded px-3 py-2 whitespace-nowrap animate-fade-in">
                  <div className="text-white font-mono text-sm">{skill.name}</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div 
                      className={`bg-${skill.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 text-center">{skill.level}%</div>
                </div>
              )}
            </div>
          ))}

          {/* Scanning line */}
          <div className="radar-sweep"></div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6 max-h-[500px] overflow-y-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-secondary flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8" />
              Work Experience
            </h3>
            
            <div className="space-y-4 pr-2">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-sm border border-secondary/30 rounded-lg p-4 hover:border-secondary/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.position}</h4>
                      <p className="text-secondary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-3 leading-relaxed text-sm">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-mono bg-black/60 border border-accent/50 rounded text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;