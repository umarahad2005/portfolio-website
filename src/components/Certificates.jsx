import React from 'react';
import { Container, Grid, Typography, Box, Paper, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { School, DateRange, VerifiedUser } from '@mui/icons-material';

function Certificates() {
  const certificates = [
    {
      title: "ChatGPT Advanced Data Analysis",
      issuer: "Vanderbilt University",
      date: "July 2025",
      credentialId: "HS8I5J4083I4",
      link: "https://www.coursera.org/account/accomplishments/verify/HS8I5J4083I4",
      logo: "/images/vanderbilt-logo.png"
    },
    {
      title: "AWS Cloud Club Core Team",
      issuer: "AWS Cloud Club Riphah",
      date: "June 2025",
      link: "https://www.credly.com/badges/f3ea2dfb-7ac7-4a87-9cbe-49b1bc1ba7da/linked_in_profile",
      logo: "/images/aws-logo.png"
    },
    {
      title: "Generative AI Essentials for Data Science",
      issuer: "Coursera",
      date: "June 2025",
      link: "https://www.credly.com/badges/62fd6ebe-8555-4518-a028-49a58824adb7/linked_in_profile",
      logo: "/images/coursera-logo.png"
    },
    {
      title: "Generative AI for Data Scientists Specialization",
      issuer: "IBM",
      date: "June 2025",
      credentialId: "3P31L17UO3ZO",
      link: "https://www.coursera.org/account/accomplishments/specialization/3P31L17UO3ZO",
      logo: "/images/ibm-logo.png"
    },
    {
      title: "C++ Essentials 2",
      issuer: "Cisco",
      date: "May 2025",
      link: "https://www.credly.com/badges/e6a38258-2e2e-4548-a4f6-0157ec456e27/linked_in_profile",
      logo: "/images/cisco-logo.png"
    },
    {
      title: "Generative AI: Prompt Engineering",
      issuer: "Coursera",
      date: "May 2025",
      link: "https://www.credly.com/badges/26bbf4bb-8e42-4c0e-9028-fdf515319d8a/linked_in_profile",
      logo: "/images/coursera-logo.png"
    },
    {
      title: "Generative AI: Introduction and Applications",
      issuer: "IBM",
      date: "February 2025",
      credentialId: "L9ZXVQ6EK9MA",
      link: "https://www.coursera.org/account/accomplishments/verify/L9ZXVQ6EK9MA",
      logo: "/images/ibm-logo.png"
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Vanderbilt University",
      date: "February 2025",
      credentialId: "4IHCMEZMJ4AY",
      link: "https://www.coursera.org/account/accomplishments/verify/4IHCMEZMJ4AY",
      logo: "/images/vanderbilt-logo.png"
    },
    {
      title: "General English Course",
      issuer: "Institute of Career Development (ICD)",
      date: "2023",
      description: "Successfully completed and passed the General English Course during CELTA classes at ICD",
      issuedBy: "Dr. Osama Qureshi",
      role: "Director",
      logo: "/images/icd-logo.png",
      link: "#"
    },
    {
      title: "AWS & Cloud Computing Session",
      issuer: "AWS Learning Club, Riphah International University",
      date: "2023",
      description: "Recognition for exceptional efforts, dedication, and invaluable contribution to the success of the AWS & Cloud Computing Session",
      issuedBy: "Dr. Sheheryar Malik & Mubashar Ghazi",
      role: "Director RSCI & Organizer",
      logo: "/images/aws-cloud-clubs.png",
      link: "#"
    }
  ];

  return (
    <Box sx={{ py: 8, minHeight: '100vh' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
            }}
          >
            Certifications & Achievements
          </Typography>

          <Grid container spacing={4}>
            {certificates.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1
                  }}
                >
                  <Link 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'none' }}
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
                          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                          background: 'rgba(255, 255, 255, 0.08)',
                        }
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2,
                        height: '50px'
                      }}>
                        <img 
                          src={cert.logo}
                          alt={`${cert.issuer} logo`}
                          style={{ 
                            maxHeight: '40px',
                            maxWidth: '100px',
                            objectFit: 'contain'
                          }}
                        />
                      </Box>

                      <Typography 
                        variant="h6" 
                        gutterBottom
                        sx={{ 
                          color: '#fff',
                          fontSize: '1.1rem',
                          fontWeight: '500'
                        }}
                      >
                        {cert.title}
                      </Typography>

                      <Typography 
                        variant="body2"
                        sx={{ color: '#a9b1d6', mb: 1 }}
                      >
                        {cert.issuer}
                      </Typography>

                      <Typography 
                        variant="body2"
                        sx={{ color: '#a9b1d6' }}
                      >
                        {cert.date}
                      </Typography>

                      {cert.description && (
                        <Typography 
                          variant="body2"
                          sx={{ color: '#a9b1d6', mt: 1 }}
                        >
                          {cert.description}
                        </Typography>
                      )}

                      {cert.issuedBy && (
                        <Typography 
                          variant="body2"
                          sx={{ color: '#a9b1d6', mt: 1 }}
                        >
                          Issued by: {cert.issuedBy} ({cert.role})
                        </Typography>
                      )}

                      {cert.credentialId && (
                        <Typography 
                          variant="caption"
                          sx={{ 
                            display: 'block',
                            color: '#6366f1',
                            mt: 1
                          }}
                        >
                          Credential ID: {cert.credentialId}
                        </Typography>
                      )}
                    </Paper>
                  </Link>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Certificates; 