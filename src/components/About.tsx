import React from 'react';
import { MapPin, Calendar, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Circular Next Page Navigation */}
      <button
        onClick={() => {
          const event = new CustomEvent('navigateToPage', { detail: { page: 3 } });
          window.dispatchEvent(event);
        }}
        className="fixed right-12 top-1/2 transform -translate-y-1/2 z-50 w-24 h-24 bg-gray-800/80 backdrop-blur-sm border-2 border-purple-500/30 rounded-full flex items-center justify-center text-purple-400 hover:text-white hover:bg-purple-600/20 transition-all duration-300 group hover:rotate-[360deg]"
      >
        <div className="transform -rotate-90 text-xs font-bold tracking-wider whitespace-nowrap">
          NEXT PAGE
        </div>
      </button>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                About
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  My Story
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Hello! I'm Alex, a passionate full-stack web developer with over 5 years of experience 
                creating digital solutions that make a real impact. My journey began with curiosity 
                about how websites work, and it has evolved into a deep love for crafting exceptional 
                user experiences.
              </p>
              
              <p>
                I specialize in modern web technologies including React, Node.js, and cloud architecture. 
                What drives me is the ability to transform complex problems into elegant, user-friendly 
                solutions that businesses and users love.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in continuous 
                learning and staying ahead of the curve in this ever-evolving field.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-purple-500/30">
                <MapPin className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-sm text-gray-300">San Francisco, CA</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-purple-500/30">
                <Calendar className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="font-semibold text-white">Experience</div>
                  <div className="text-sm text-gray-300">5+ Years</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-purple-500/30">
                <Coffee className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="font-semibold text-white">Coffee Consumed</div>
                  <div className="text-sm text-gray-300">∞ Cups</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-purple-500/30">
                <Heart className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="font-semibold text-white">Passion</div>
                  <div className="text-sm text-gray-300">Problem Solving</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-2xl opacity-30 scale-110"></div>
              
              {/* Image container */}
              <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Alex Developer"
                  className="w-80 h-96 object-cover rounded-xl shadow-lg"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  👋
                </div>
                
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-lg shadow-lg border border-purple-500/50">
                  <div className="text-sm font-semibold text-white">Available for projects</div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300">Online now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;