import React from 'react';
import { Container, Grid, Paper, Typography, Box, Chip, Stack } from '@mui/material';
import { Code as CodeIcon, School as SchoolIcon, Analytics as AnalyticsIcon, Cloud as CloudIcon } from '@mui/icons-material';

function About() {
  const features = [
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: '#6366f1' }} />,
      title: 'Data Science & AI',
      description: 'Asipiring Data Scientist specializing in analysis and innovation'
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40, color: '#6366f1' }} />,
      title: 'AWS Cloud club ',
      description: 'Core Team Member @ AWS Cloud Club Riphah'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#6366f1' }} />,
      title: 'Academic Excellence',
      description: 'CS Undergrad with 3.89 GPA at Riphah International University'
    }
  ];

  const skills = [
    'Python', 'C++', 'Java', 'Data Visualization', 'Power BI',
    'Event Management', 'AWS', 'Generative AI', 'Project Management',
    'Communication', 'Interpersonal Skills'
  ];

  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <Typography 
          variant="h2" 
          gutterBottom
          sx={{
            background: 'linear-gradient(to right, #fff, #a5b4fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 4
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Typography variant="h4" gutterBottom color="primary">
                Umar Ahad Uddin Ahmed Usmani
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: '#a5b4fc' }}>
                Future Data Scientist | Core Team @ AWS Cloud Club Riphah
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#a9b1d6' }}>
                Currently pursuing Bachelor of Science in Computer Science at Riphah International University,
                with a strong focus on becoming a data scientist. Passionate about learning, analyzing, and innovating
                in the field of data science and AI.
              </Typography>
              <Typography variant="body1" sx={{ color: '#a9b1d6', mb: 3 }}>
                As a core team member of AWS Cloud Club Riphah, I lead marketing and outreach initiatives
                while managing events that empower students to enhance their cloud computing skills.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ color: '#a5b4fc', mt: 4 }}>
                Skills & Expertise
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                {skills.map((skill, index) => (
                  <Chip 
                    key={index}
                    label={skill}
                    sx={{
                      background: 'rgba(99, 102, 241, 0.1)',
                      color: '#a5b4fc',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      '&:hover': {
                        background: 'rgba(99, 102, 241, 0.2)',
                      }
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {features.map((feature, index) => (
                <Grid item xs={12} key={index}>
                  <Paper 
                    elevation={3}
                    sx={{
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    {feature.icon}
                    <Box>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#a9b1d6' }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}

              <Grid item xs={12}>
                <Paper 
                  elevation={3}
                  sx={{
                    p: 3,
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <Typography variant="h6" color="primary" gutterBottom>
                    Certifications
                  </Typography>
                  <Typography variant="body2" component="div" sx={{ color: '#a9b1d6' }}>
                    • ChatGPT Advanced Data Analysis - Vanderbilt University<br />
                    • Generative AI for Data Scientists Specialization - IBM<br />
                    • C++ Essentials 2 - Cisco<br />
                    • Generative AI: Prompt Engineering - Coursera<br />
                    • AWS Cloud Club Core Team Certification
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About; 