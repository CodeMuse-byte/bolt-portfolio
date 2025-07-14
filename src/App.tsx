import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoverPage from './components/CoverPage';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const pages = [
    { component: CoverPage, showNavbar: false },
    { component: Hero, showNavbar: true, id: 'hero' },
    { component: About, showNavbar: true, id: 'about' },
    { component: Skills, showNavbar: true, id: 'skills' },
    { component: Projects, showNavbar: true, id: 'projects' },
    { component: Contact, showNavbar: true, id: 'contact' },
  ];

  const handleStartStory = () => {
    setCurrentPage(1);
  };

  const handleConnect = () => {
    setCurrentPage(5); // Contact page
  };

  const handleBackToCover = () => {
    setCurrentPage(0);
  };

  const handleNavigate = (page: number) => {
    setCurrentPage(page);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const pageVariants = {
    initial: { 
      opacity: 0,
      x: currentPage > 0 ? 100 : 0,
      scale: 0.95
    },
    in: { 
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: { 
      opacity: 0,
      x: currentPage > 0 ? -100 : 0,
      scale: 0.95
    }
  };

  // Special flip animation for cover to hero transition
  const flipVariants = {
    initial: { 
      opacity: 0,
      rotateY: -90,
      transformOrigin: "left center"
    },
    in: { 
      opacity: 1,
      rotateY: 0,
      transformOrigin: "left center"
    },
    out: { 
      opacity: 0,
      rotateY: 90,
      transformOrigin: "right center"
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.6
  };

  const flipTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.2
  };

  const CurrentPageComponent = pages[currentPage].component;
  
  // Use flip animation only when transitioning from cover (0) to hero (1)
  const shouldUseFlip = currentPage === 1;
  const variants = shouldUseFlip ? flipVariants : pageVariants;
  const transition = shouldUseFlip ? flipTransition : pageTransition;

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Navbar */}
      {pages[currentPage].showNavbar && (
        <Navbar 
          currentPage={currentPage}
          onNavigate={handleNavigate}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}

      {/* Animated Background for non-cover pages */}
      {currentPage !== 0 && (
        <div className="fixed inset-0 bg-black text-white">
          <AnimatedBackground />
        </div>
      )}

      {/* Page Content */}
      <div className="relative z-10" style={{ perspective: "1000px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="in"
            exit="out"
            variants={variants}
            transition={transition}
            className="min-h-screen"
          >
            {currentPage === 0 ? (
              <CoverPage 
                onStartStory={handleStartStory}
                onConnect={handleConnect}
              />
            ) : currentPage === 1 ? (
              <Hero onBackToCover={handleBackToCover} />
            ) : currentPage === 2 ? (
              <About />
            ) : currentPage === 3 ? (
              <Skills />
            ) : currentPage === 4 ? (
              <Projects />
            ) : (
              <Contact />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}

export default App;