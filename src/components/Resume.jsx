import React from 'react';
import { Container, Typography, Box, Paper, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email,
  Phone,
  LinkedIn,
  GitHub,
  LocationOn
} from '@mui/icons-material';

function Resume() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 5,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 2,
          }}
        >
          {/* Header */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: '#fff', mb: 2 }}>
              Umar Ahad Uddin Ahmed Usmani
            </Typography>
            <Typography variant="h5" sx={{ color: '#a5b4fc', mb: 3 }}>
              AI Developer | Aspiring Data Scientist
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, color: '#a9b1d6' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email fontSize="small" />
                <Typography>umarahadusmani@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone fontSize="small" />
                <Typography>+92 333 4739757</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn fontSize="small" />
                <Typography>Lahore, Pakistan</Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          {/* Professional Summary */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
              PROFESSIONAL SUMMARY
            </Typography>
            <Typography sx={{ color: '#a9b1d6' }}>
              AI Developer specializing in chatbot development and generative AI solutions, with a focused journey towards becoming a Data Scientist. 
              Experienced in developing AI-powered applications using cutting-edge technologies including LangChain, RAG, and Gemini AI.
            </Typography>
          </Box>

          {/* Education */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
              EDUCATION
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                Bachelor of Science in Computer Science
              </Typography>
              <Typography sx={{ color: '#a5b4fc' }}>
                Riphah International University | 2021 - 2025
              </Typography>
              <Typography sx={{ color: '#a9b1d6' }}>
                GPA: 3.89
              </Typography>
              <Typography sx={{ color: '#a9b1d6', mt: 1 }}>
                • Core Team Member of AWS Cloud Club
                <br />
                • Active participant in coding competitions
                <br />
                • Research focus on AI and Data Science
              </Typography>
            </Box>
          </Box>

          {/* Experience */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
              EXPERIENCE
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                AI Developer
              </Typography>
              <Typography sx={{ color: '#a5b4fc' }}>
                BitBraniac | 2023 - Present
              </Typography>
              <Typography sx={{ color: '#a9b1d6', mt: 1 }}>
                • Implemented Gemini AI for enhanced tutoring capabilities
                <br />
                • Developed RAG-based knowledge systems for improved information retrieval
                <br />
                • Integrated LangChain for advanced NLP capabilities
                <br />
                • Created AI-powered educational solutions using cutting-edge technologies
              </Typography>
            </Box>
          </Box>

          {/* Skills */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
              SKILLS
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography sx={{ color: '#a5b4fc', mb: 1 }}>
                  Technical Skills
                </Typography>
                <Typography sx={{ color: '#a9b1d6' }}>
                  • AI Development & Machine Learning
                  <br />
                  • Python, C++, Java
                  <br />
                  • React.js, JavaScript
                  <br />
                  • LangChain, RAG
                  <br />
                  • Data Visualization, Power BI
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography sx={{ color: '#a5b4fc', mb: 1 }}>
                  Professional Skills
                </Typography>
                <Typography sx={{ color: '#a9b1d6' }}>
                  • Project Management
                  <br />
                  • Event Management
                  <br />
                  • Team Leadership
                  <br />
                  • Problem Solving
                  <br />
                  • Communication
                </Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Certifications */}
          <Box>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
              CERTIFICATIONS
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography sx={{ color: '#a9b1d6' }}>
                  • General English Course - ICD (2023)
                  <br />
                  • AWS & Cloud Computing - AWS Learning Club (2023)
                </Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Footer */}
          <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, color: '#a9b1d6' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LinkedIn fontSize="small" />
              <Typography>linkedin.com/in/umarahadusmani</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <GitHub fontSize="small" />
              <Typography>github.com/umarahad2005</Typography>
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
}

export default Resume; 