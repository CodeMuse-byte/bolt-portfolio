import React, { useState } from 'react';
import { ExternalLink, Github, Zap, Database, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      tech: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling tools, and performance metrics.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      tech: ['Angular', 'Python', 'Django', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Weather Forecast App',
      description: 'Modern weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      tech: ['React Native', 'Firebase', 'OpenWeather API', 'Maps'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section className="py-20 px-4">
      {/* Circular Next Page Navigation */}
      <button
        onClick={() => {
          const event = new CustomEvent('navigateToPage', { detail: { page: 5 } });
          window.dispatchEvent(event);
        }}
        className="fixed right-12 top-1/2 transform -translate-y-1/2 z-50 w-24 h-24 bg-gray-800/80 backdrop-blur-sm border-2 border-green-500/30 rounded-full flex items-center justify-center text-green-400 hover:text-white hover:bg-green-600/20 transition-all duration-300 group hover:rotate-[360deg]"
      >
        <div className="transform -rotate-90 text-xs font-bold tracking-wider whitespace-nowrap">
          NEXT PAGE
        </div>
      </button>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 dev-title">
          <span className="text-secondary">MY</span>
          <span className="text-primary"> PROJECTS</span>
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-black/30 backdrop-blur-sm">
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    project.featured 
                      ? 'from-primary/20 to-secondary/20' 
                      : 'from-accent/20 to-success/20'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a href={project.liveUrl} className="neon-button neon-button-small">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a href={project.githubUrl} className="neon-button neon-button-small">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Scanning effect */}
                  {hoveredProject === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="scan-line"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  {project.featured && (
                    <div className="inline-flex items-center gap-2 text-secondary text-sm font-mono mb-2">
                      <Zap className="w-4 h-4" />
                      FEATURED PROJECT
                    </div>
                  )}
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 glitch-text">
                    {project.title}
                  </h3>
                </div>

                <div className="bg-black/50 backdrop-blur-sm border border-primary/30 rounded-lg p-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm font-mono bg-black/60 border border-accent/50 rounded text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a href={project.liveUrl} className="neon-button neon-button-primary">
                    <Globe className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="neon-button neon-button-secondary">
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;