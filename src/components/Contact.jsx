import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  Stack,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Send as SendIcon,
  LocationOn as LocationIcon,
  Email as EmailIcon
} from '@mui/icons-material';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.user_name || !formData.user_email || !formData.subject || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Please fill in all fields',
        severity: 'error'
      });
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        'service_l2wr72w',
        'template_s0ndnin',
        form.current,
        'Lho78JrdSyERtBILP'
      );

      if (result.text === 'OK') {
        setSnackbar({
          open: true,
          message: 'Thank you for your message! I will get back to you soon.',
          severity: 'success'
        });
        // Reset form
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again later.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const inputStyle = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.1)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6366f1',
      }
    },
    '& .MuiInputLabel-root': {
      color: '#a9b1d6',
      '&.Mui-focused': {
        color: '#6366f1',
      }
    },
    '& .MuiInputBase-input': {
      color: '#fff',
    },
    '& .MuiInputBase-multiline': {
      color: '#fff',
    }
  };

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
          Get in Touch
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
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
              <Typography variant="h5" color="primary" gutterBottom>
                Contact Information
              </Typography>
              
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationIcon sx={{ color: '#6366f1' }} />
                  <Typography sx={{ color: '#a9b1d6' }}>
                    Lahore, Punjab, Pakistan
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon sx={{ color: '#6366f1' }} />
                  <Typography sx={{ color: '#a9b1d6' }}>
                    Contact through form
                  </Typography>
                </Box>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Connect with me
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <IconButton 
                      href="https://www.linkedin.com/in/umarahadusmani/"
                      target="_blank"
                      sx={{ 
                        color: '#6366f1',
                        '&:hover': { 
                          bgcolor: 'rgba(99, 102, 241, 0.1)',
                          transform: 'translateY(-2px)'
                        },
                        transition: 'transform 0.2s'
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton 
                      href="https://github.com/umarahad2005"
                      target="_blank"
                      sx={{ 
                        color: '#6366f1',
                        '&:hover': { 
                          bgcolor: 'rgba(99, 102, 241, 0.1)',
                          transform: 'translateY(-2px)'
                        },
                        transition: 'transform 0.2s'
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper
              elevation={3}
              component="form"
              ref={form}
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={inputStyle}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="user_email"
                    type="email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={inputStyle}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={inputStyle}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={inputStyle}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    endIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
                    sx={{
                      bgcolor: '#6366f1',
                      '&:hover': { 
                        bgcolor: '#4f46e5',
                        transform: 'translateY(-2px)'
                      },
                      '&:disabled': {
                        bgcolor: 'rgba(99, 102, 241, 0.5)',
                      },
                      px: 4,
                      py: 1.5,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact; 