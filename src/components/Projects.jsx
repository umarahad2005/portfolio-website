import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Button, Chip } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "BitBraniac AI Chatbot",
      description: "An AI-powered CS tutor built with React frontend and Python Flask backend, leveraging Google's Gemini AI and LangChain for advanced natural language processing and interactive learning experiences.",
      technologies: ["React", "Python", "Flask", "Gemini AI", "LangChain"],
      demoLink: "https://bit-brainiac.vercel.app/",
      features: [
        "Real-time AI responses using Gemini",
        "LangChain for enhanced NLP capabilities",
        "Flask backend for API handling"
      ]
    },
    {
      title: "Safe Scan",
      description: "A privacy-focused QR code scanner app developed for Android, focusing on user privacy and security.",
      technologies: ["Android", "Java", "Security", "QR Code", "SQLite"],
      demoLink: "https://play.google.com/store/apps/details?id=com.safescan.qr",
      features: [
        "Malicious URL detection",
        "Scan history",
        "Privacy focused"
      ]
    },
    {
      title: "Keusmania",
      description: "A modern React-based website with a sleek design, responsive interface, and seamless user experience. Features a clean UI with smooth animations and interactive elements.",
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      demoLink: "https://keusmania.vercel.app",
      features: [
        "Responsive design",
        "Modern UI/UX",
        "Interactive elements"
      ]
    },
    {
      title: "Airline Ticket Management System",
      description: "A comprehensive C++ application for managing airline ticket bookings and reservations, implementing core programming fundamentals and data structures.",
      technologies: ["C++", "Programming Fundemantels", "File Handling"],
      githubLink: "https://github.com/umarahad2005/air-line-ticket-managment-system-",
      features: [
        "Ticket booking system",
        "Reservation management",
        "User authentication"
      ]
    },
    {
      title: "Survey Master",
      description: "A Java-based survey application built with JavaFX, demonstrating object-oriented programming principles and modern UI design.",
      technologies: ["Java", "JavaFX", "OOP", "UI/UX"],
      githubLink: "https://github.com/umarahad2005/survey-master-",
      features: [
        "Interactive surveys",
        "Data visualization",
        "User-friendly interface"
      ]
    },
    {
      title: "Memory Puzzle Game",
      description: "An Assembly language implementation of a memory puzzle game, showcasing low-level programming skills and memory management.",
      technologies: ["Assembly", "Low-level Programming"],
      githubLink: "https://github.com/umarahad2005/memory-puzzel-game-assembly-",
      features: [
        "Memory management",
        "Low-level optimization",
        "Interactive gameplay"
      ]
    },
    {
      title: "Student Course Registration System",
      description: "A C++ based course registration system implementing advanced data structures and algorithms for efficient data management.",
      technologies: ["C++", "DSA", "File Management"],
      githubLink: "https://github.com/umarahad2005/student-course-registration-system-",
      features: [
        "Course management",
        "Student registration",
        "Data persistence"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.02,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const titleVariants = {
    initial: { backgroundPosition: "200% 0" },
    hover: {
      backgroundPosition: "0 0",
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 6,
              background: 'linear-gradient(to right, #fff, #a5b4fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative'
            }}
          >
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                height: "3px",
                background: "linear-gradient(90deg, transparent, #6366f1, transparent)",
                borderRadius: "2px"
              }}
            />
            Featured Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={project.title}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <motion.div
                    initial={false}
                    animate={{
                      background: hoveredProject === project.title
                        ? 'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(165, 180, 252, 0.1))'
                        : 'none'
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 0
                    }}
                  />

                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                      variants={titleVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{ 
                          color: '#fff',
                          background: 'linear-gradient(90deg, #fff, #a5b4fc)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundSize: "200% 100%"
                        }}
                      >
                        {project.title}
                      </Typography>
                    </motion.div>

                    <Typography 
                      variant="body2"
                      sx={{ color: '#a9b1d6', mb: 2, minHeight: '80px' }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      {project.features.map((feature, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            color: '#a9b1d6',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 0.5
                          }}
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                          >
                            •
                          </motion.span>
                          {feature}
                        </Typography>
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.technologies.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Chip 
                            label={tech}
                            size="small"
                            sx={{ 
                              bgcolor: 'rgba(99, 102, 241, 0.1)',
                              color: '#a5b4fc',
                              border: '1px solid rgba(99, 102, 241, 0.2)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                bgcolor: 'rgba(99, 102, 241, 0.2)',
                                borderColor: 'rgba(99, 102, 241, 0.4)'
                              }
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                      {project.demoLink && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="contained"
                            startIcon={<Launch />}
                            href={project.demoLink}
                            target="_blank"
                            sx={{
                              bgcolor: '#6366f1',
                              '&:hover': { 
                                bgcolor: '#4f46e5',
                                boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)'
                              }
                            }}
                          >
                            Live Demo
                          </Button>
                        </motion.div>
                      )}
                      {project.githubLink && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outlined"
                            startIcon={<GitHub />}
                            href={project.githubLink}
                            target="_blank"
                            sx={{
                              color: '#fff',
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                              '&:hover': {
                                borderColor: '#fff',
                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                              }
                            }}
                          >
                            GitHub
                          </Button>
                        </motion.div>
                      )}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}

export default Projects; 
