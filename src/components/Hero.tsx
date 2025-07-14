import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, Calendar, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

interface HeroProps {
  onBackToCover: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBackToCover }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const leftPanelVariants = {
    hidden: { 
      x: -100, 
      opacity: 0,
      rotateY: -15
    },
    visible: { 
      x: 0, 
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  };

  const rightContentVariants = {
    hidden: { 
      x: 50, 
      opacity: 0 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const profileImageVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotate: -10
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: 0.2
      }
    }
  };

  if (!mounted) return null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #4F46E5 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #8B5CF6 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 30px 30px'
        }} />
      </div>

      {/* Back Button */}
      <motion.button
        onClick={onBackToCover}
        className="fixed top-6 left-6 z-50 p-3 bg-black/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg text-emerald-400 hover:text-white hover:bg-emerald-600/20 transition-all duration-300 group"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
      </motion.button>

      {/* Circular Next Page Navigation */}
      <motion.button
        onClick={() => {
          const event = new CustomEvent('navigateToPage', { detail: { page: 2 } });
          window.dispatchEvent(event);
        }}
        className="fixed right-12 top-1/2 transform -translate-y-1/2 z-50 w-24 h-24 bg-gray-800/80 backdrop-blur-sm border-2 border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-600/20 transition-all duration-300 group"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="transform -rotate-90 text-xs font-bold tracking-wider whitespace-nowrap">
          NEXT PAGE
        </div>
      </motion.button>

      <div className="relative z-10 min-h-screen flex items-center">
        <motion.div 
          className="max-w-7xl mx-auto px-6 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Panel - Profile Card */}
            <motion.div 
              variants={leftPanelVariants}
              className="relative"
            >
              <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
                {/* Profile Image */}
                <motion.div 
                  variants={profileImageVariants}
                  className="relative mb-8"
                >
                  <div className="w-64 h-64 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-30"></div>
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                      alt="Alex Developer"
                      className="relative w-full h-full object-cover rounded-3xl border-4 border-gray-600/50"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-800 animate-pulse"></div>
                  </div>
                </motion.div>

                {/* Profile Info */}
                <motion.div variants={itemVariants} className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Alex Developer</h2>
                  <p className="text-indigo-400 font-semibold mb-1">Framer Designer & Developer</p>
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Based in Los Angeles, CA</span>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div variants={itemVariants} className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm">hello@alex.design</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm">© 2024 Alex. All Rights Reserved</span>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-8">
                  {[
                    { icon: Github, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Dribbble, href: "#" },
                    { icon: Linkedin, href: "#" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-gray-700/50 border border-gray-600/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </motion.div>

                {/* Hire Me Button */}
                <motion.button
                  variants={itemVariants}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    HIRE ME!
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              variants={rightContentVariants}
              className="space-y-8"
            >
              {/* Introduce Badge */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-full px-4 py-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  INTRODUCE
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-white">Say Hi from </span>
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Alex,
                  </span>
                  <br />
                  <span className="text-white">
                    Webflow Designer
                  </span>
                  <br />
                  <span className="text-white">
                    and Developer
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-xl text-gray-300 leading-relaxed">
                  I design and code beautifully simple things and I love what I do.
                </p>
                <p className="text-lg text-gray-400">
                  Just simple like that!
                </p>
              </motion.div>

              {/* Circular Navigation */}
              <motion.div variants={itemVariants} className="flex justify-end">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-2 border-gray-600/30 rounded-full"></div>
                  <div className="absolute inset-2 border border-gray-600/20 rounded-full"></div>
                  
                  {/* Navigation Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs text-gray-400 font-mono tracking-wider transform -rotate-90 absolute -top-8 left-1/2 -translate-x-1/2">
                        MY PROJECTS
                      </div>
                      <div className="text-xs text-gray-400 font-mono tracking-wider transform rotate-90 absolute -bottom-8 left-1/2 -translate-x-1/2">
                        PROJECTS
                      </div>
                      <motion.div 
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ArrowLeft className="w-4 h-4 text-black rotate-90" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;