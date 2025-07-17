import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Mail, Github, Linkedin, Twitter, Code, Sparkles } from 'lucide-react';

interface CoverPageProps {
  onStartStory: () => void;
  onConnect: () => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ onStartStory, onConnect }) => {
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const dynamicTexts = [
    "Full Stack Developer",
    "React Specialist", 
    "UI/UX Designer",
    "Problem Solver"
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(79,70,229,0.3) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(139,92,246,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 30px 30px'
        }} />
      </div>

      {/* Floating Code Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 10)}%`,
            }}
            variants={floatingVariants}
            animate="float"
            transition={{ delay: i * 0.5 }}
          >
            <Code className="w-6 h-6 text-indigo-400/40" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <motion.div 
          className="text-center max-w-4xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Icon */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-2xl mb-6">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Welcome Text */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
              <span className="text-white">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                Alex
              </span>
            </h1>
          </motion.div>

          {/* Dynamic Role Text */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-2">
              I'm a{' '}
              <motion.span 
                key={currentText}
                className="text-indigo-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {dynamicTexts[currentText]}
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Welcome to my digital space where creativity meets code. 
              I craft beautiful, functional experiences that make a difference.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.button
              onClick={onStartStory}
              className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 flex items-center gap-3"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Explore My Story</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.button>

            <motion.button
              onClick={onConnect}
              className="group relative bg-transparent border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center gap-3"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-14 h-14 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <div className="text-sm font-medium">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-500 rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoverPage;