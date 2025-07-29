import React from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  Box, 
  Grid,
  Chip,
  Divider,
  Button
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LinkedIn, 
  GitHub,
  School,
  WorkHistory,
  EmojiEvents,
  Code,
  GetApp
} from '@mui/icons-material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function CV() {
  const personalInfo = {
    name: "Umar Ahad Uddin Ahmed Usmani",
    title: "AI Developer | Aspiring Data Scientist",
    email: "umarahadusmani@gmail.com",
    phone: "+92 333 4739757",
    linkedin: "linkedin.com/in/umarahadusmani",
    github: "github.com/umarahad2005"
  };

  const education = {
    degree: "CS Undergrad",
    gpa: "3.89 GPA",
    university: "Riphah International University",
    focus: "Data Science Focus"
  };

  const skills = [
    'Python', 'C++', 'Java', 'Data Visualization', 'Power BI',
    'Event Management', 'Generative AI', 'AI Chatbot Development',
    'LangChain', 'RAG (Retrieval Augmented Generation)',
    'Project Management', 'Communication', 'Interpersonal Skills'
  ];

  const achievements = [
    "Completed 10+ successful projects",
    "Deployed 5+ AI solutions",
    "95% client satisfaction rate",
    "Core Team Member @ AWS Cloud Club Riphah"
  ];

  const certifications = [
    {
      title: "ChatGPT Advanced Data Analysis",
      issuer: "Vanderbilt University",
      date: "July 2025"
    },
    {
      title: "Generative AI for Data Scientists Specialization",
      issuer: "IBM",
      date: "June 2025"
    },
    {
      title: "Generative AI: Prompt Engineering",
      issuer: "Coursera",
      date: "May 2025"
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Vanderbilt University",
      date: "February 2025"
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  const downloadPDF = async () => {
    const cvElement = document.getElementById('cv-content');
    const canvas = await html2canvas(cvElement, {
      scale: 2,
      backgroundColor: '#ffffff',
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0;

    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save('Umar_Ahad_CV.pdf');
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          startIcon={<GetApp />}
          onClick={downloadPDF}
          sx={{
            bgcolor: '#6366f1',
            '&:hover': { bgcolor: '#4f46e5' }
          }}
        >
          Download CV
        </Button>
      </Box>

      <Paper 
        id="cv-content"
        elevation={0}
        sx={{ 
          p: 4,
          bgcolor: '#fff',
          '@media print': {
            boxShadow: 'none',
            bgcolor: '#fff'
          }
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" gutterBottom sx={{ color: '#1a1b26' }}>
            {personalInfo.name}
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: '#6366f1' }}>
            {personalInfo.title}
          </Typography>
          
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email fontSize="small" />
                <Typography>{personalInfo.email}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone fontSize="small" />
                <Typography>{personalInfo.phone}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LinkedIn fontSize="small" />
                <Typography>{personalInfo.linkedin}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GitHub fontSize="small" />
                <Typography>{personalInfo.github}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Education */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ 
            color: '#1a1b26',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <School /> Education
          </Typography>
          <Typography variant="h6" gutterBottom>
            {education.degree} • {education.gpa}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {education.university}
          </Typography>
          <Typography variant="body1" color="primary">
            {education.focus}
          </Typography>
        </Box>

        {/* Skills */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ 
            color: '#1a1b26',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <Code /> Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill) => (
              <Chip 
                key={skill} 
                label={skill} 
                sx={{ 
                  bgcolor: '#6366f1',
                  color: '#fff',
                  '@media print': {
                    border: '1px solid #6366f1',
                    color: '#1a1b26'
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Achievements */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ 
            color: '#1a1b26',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <EmojiEvents /> Achievements
          </Typography>
          <ul style={{ paddingLeft: '20px' }}>
            {achievements.map((achievement, index) => (
              <li key={index}>
                <Typography variant="body1" gutterBottom>
                  {achievement}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>

        {/* Certifications */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ 
            color: '#1a1b26',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <WorkHistory /> Certifications
          </Typography>
          <Grid container spacing={2}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} key={index}>
                <Typography variant="body1" gutterBottom>
                  <strong>{cert.title}</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {cert.issuer} • {cert.date}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Print Styles */}
        <style>
          {`
            @media print {
              body {
                color: #1a1b26;
                background: #fff;
              }
              @page {
                margin: 20mm;
                size: A4;
              }
            }
          `}
        </style>
      </Paper>
    </Container>
  );
}

export default CV; 