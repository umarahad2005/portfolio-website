import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Paper, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, School } from '@mui/icons-material';
import Footer from './Footer';

function Home() {
  const [typingText, setTypingText] = useState({
    line1: "solution = await model.process(problem)",
    line2: "return solution.optimize()",
    currentLine: 1,
    text: "",
    isDeleting: false
  });

  useEffect(() => {
    const typingSpeed = 50; // Speed for typing
    const deletingSpeed = 30; // Speed for deleting
    const pauseTime = 2000; // Time to pause before deleting/typing

    const type = () => {
      const { line1, line2, currentLine, text, isDeleting } = typingText;
      const currentFullText = currentLine === 1 ? line1 : line2;

      if (!isDeleting && text === currentFullText) {
        // Finished typing current line
        setTimeout(() => {
          setTypingText(prev => ({ ...prev, isDeleting: true }));
        }, pauseTime);
        return;
      }

      if (isDeleting && text === "") {
        // Finished deleting current line
        setTimeout(() => {
          setTypingText(prev => ({
            ...prev,
            currentLine: prev.currentLine === 1 ? 2 : 1,
            isDeleting: false
          }));
        }, pauseTime / 2);
        return;
      }

      const delta = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(() => {
        setTypingText(prev => ({
          ...prev,
          text: isDeleting
            ? currentFullText.substring(0, text.length - 1)
            : currentFullText.substring(0, text.length + 1)
        }));
      }, delta);
    };

    const timer = setTimeout(type, 50);
    return () => clearTimeout(timer);
  }, [typingText]);

  // Your existing animation variants...
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const codeVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const floatingAnimation = {
    y: [-5, 5],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const skills = [
    'Python', 'C++', 'Java', 'Data Visualization', 'Power BI',
    'Event Management', 'Generative AI', 'AI Chatbot Development',
    'LangChain', 'RAG (Retrieval Augmented Generation)',
    'Project Management', 'Communication', 'Interpersonal Skills'
  ];

  const achievements = [
    {
      number: '10+',
      label: 'Projects Completed',
    },
    {
      number: '5+',
      label: 'AI Solutions Deployed',
    },
    {
      number: '95%',
      label: 'Client Satisfaction',
    }
  ];

  return (
    <>
    <div className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-stars"></div>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="available-tag"
                  animate={floatingAnimation}
                >
                  Available for AI Projects
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  style={{ 
              fontSize: '3.5rem', 
              marginBottom: '1rem',
              background: 'linear-gradient(to right, #fff, #a5b4fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
                  }}
                >
                  Umar Ahad Uddin Ahmed Usmani
                </motion.h1>

                <motion.div 
                  variants={itemVariants}
                  style={{ 
              fontSize: '1.2rem', 
              marginBottom: '1rem',
              color: '#bb9af7' 
                  }}
                >
              function <span style={{color: '#7aa2f7'}}>AIEngineer</span>() {'}'}
                </motion.div>

                <motion.p 
                  variants={itemVariants}
                  style={{ 
              fontSize: '1.2rem', 
              color: '#a9b1d6',
              marginBottom: '2rem',
              maxWidth: '600px'
                  }}
                >
                  AI Developer specializing in chatbot development and generative AI solutions, 
                  with a focused journey towards becoming a Data Scientist. Passionate about 
                  transforming data into intelligent solutions.
                </motion.p>

                <motion.div 
                  className="cta-buttons"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/projects" 
                      className="cta-button cta-primary"
                      onClick={(e) => {
                        const projectsElement = document.getElementById('projects');
                        if (projectsElement) {
                          e.preventDefault();
                          projectsElement.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                Explore Projects →
              </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/contact" 
                      className="cta-button cta-secondary"
                      onClick={(e) => {
                        const contactElement = document.getElementById('contact');
                        if (contactElement) {
                          e.preventDefault();
                          contactElement.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                Get in Touch
              </Link>
                  </motion.div>
                </motion.div>

                {/* Highlight Boxes */}
                <Box sx={{ 
                  display: 'flex', 
                  gap: 4,
                  mt: 6,
                  width: '100%',
                  maxWidth: '1200px',
                  mx: 'auto',
                  px: 2,
                  flexDirection: { xs: 'column', md: 'row' }
                }}>
                  <Paper
                    elevation={0}
                    sx={{
                      flex: 1,
                      minWidth: { xs: '100%', md: '500px' },
                      p: 4,
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(255, 255, 255, 0.08)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Code sx={{ color: '#6366f1', mr: 2, fontSize: '2rem' }} />
                      <Typography variant="h5" sx={{ color: '#fff', fontWeight: 500 }}>
                        Data Science Focus
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#a9b1d6', fontSize: '1.1rem' }}>
                      Future Data Scientist specializing in analysis and innovation
                    </Typography>
                  </Paper>

                  <Paper
                    elevation={0}
                    sx={{
                      flex: 1,
                      minWidth: { xs: '100%', md: '500px' },
                      p: 4,
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(255, 255, 255, 0.08)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <School sx={{ color: '#6366f1', mr: 2, fontSize: '2rem' }} />
                      <Typography variant="h5" sx={{ color: '#fff', fontWeight: 500 }}>
                        Academic Excellence
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#a9b1d6', fontSize: '1.1rem' }}>
                      CS Undergrad with 3.89 GPA at Riphah International University
                    </Typography>
                  </Paper>
                </Box>
              </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
              <motion.div
                className="code-window"
                variants={codeVariants}
                initial="hidden"
                animate="visible"
              >
              <div className="code-header">
                  <span>portfolio.py</span>
                <div className="code-dots">
                  <div className="code-dot red"></div>
                  <div className="code-dot yellow"></div>
                  <div className="code-dot green"></div>
                </div>
              </div>
                <motion.div 
                  className="code-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                <div><span className="keyword">import</span> ai</div>
                <div><span className="keyword">from</span> future <span className="keyword">import</span> <span className="string">innovation</span></div>
                <div></div>
                  <div><span className="comment"># AI-driven development workflow</span></div>
                  <div><span className="keyword">async def</span> <span className="function">create_solution</span>(problem):</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;model = ai.load_model(<span className="string">'umar-custom-v3'</span>)</div>
                  <div className="typing-line">
                    &nbsp;&nbsp;&nbsp;&nbsp;{typingText.text}
                    <motion.span 
                      className="cursor"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >|</motion.span>
              </div>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Skills Section */}
      <Box sx={{ py: 8, bgcolor: 'rgba(26, 27, 38, 0.5)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h3" 
              gutterBottom
              sx={{
                textAlign: 'center',
                mb: 6,
                background: 'linear-gradient(to right, #fff, #a5b4fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Skills & Expertise
            </Typography>

            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 2,
              justifyContent: 'center'
            }}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                >
                  <Chip
                    label={skill}
                    sx={{
                      bgcolor: 'rgba(99, 102, 241, 0.1)',
                      color: '#a5b4fc',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      fontSize: '0.95rem',
                      py: 2.5,
                      '&:hover': {
                        bgcolor: 'rgba(99, 102, 241, 0.2)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Achievements Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {achievements.map((achievement, index) => (
              <Grid item xs={12} sm={4} key={achievement.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.2
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(99, 102, 241, 0.2)'
                      }
                    }}
                  >
                    <Typography 
                      variant="h3" 
                      gutterBottom
                      sx={{
                        color: '#6366f1',
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #6366f1, #a5b4fc)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {achievement.number}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{ 
                        color: '#a9b1d6',
                        fontSize: '1.1rem'
                      }}
                    >
                      {achievement.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
        </Grid>
      </Container>
      </Box>

      {/* Featured Work Preview */}
      <Box sx={{ py: 8, bgcolor: 'rgba(26, 27, 38, 0.5)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h3" 
              gutterBottom
              sx={{
                textAlign: 'center',
                mb: 6,
                background: 'linear-gradient(to right, #fff, #a5b4fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Featured Work
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)'
                      }
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                      BitBraniac AI Chatbot
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#a9b1d6', mb: 2 }}>
                      An AI-powered CS tutor built with React frontend and Python Flask backend, leveraging Google's Gemini AI and LangChain for advanced learning experiences.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                      <Chip label="React" size="small" sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#a5b4fc' }} />
                      <Chip label="Python" size="small" sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#a5b4fc' }} />
                      <Chip label="Gemini AI" size="small" sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#a5b4fc' }} />
                      <Chip label="LangChain" size="small" sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#a5b4fc' }} />
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)'
                      }
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                      Safe Scan
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#a9b1d6', mb: 2 }}>
                      A privacy-focused QR code scanner for Android that ensures secure scanning with built-in malicious URL detection and history tracking.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                      <Chip label="Android" size="small" sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#a5b4fc' }} />
                      <Chip label="Java" size="small" sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#a5b4fc' }} />
                      <Chip label="Security" size="small" sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#a5b4fc' }} />
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)'
                      }
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                      Keusmania
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#a9b1d6', mb: 2 }}>
                      A modern React-based website with a sleek design, responsive interface, and seamless user experience.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                      <Chip label="React" size="small" sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#a5b4fc' }} />
                      <Chip label="JavaScript" size="small" sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#a5b4fc' }} />
                      <Chip label="CSS3" size="small" sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#a5b4fc' }} />
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/projects" 
                  className="cta-button cta-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  View All Projects
                </Link>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

export default Home; 