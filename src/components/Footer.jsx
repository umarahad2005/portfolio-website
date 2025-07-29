import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Email,
  Phone,
  Gavel,
  Security
} from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Umar Ahad
            </Typography>
            <Typography variant="body2" color="#a9b1d6">
              AI Developer | Aspiring Data Scientist
            </Typography>
            <Typography variant="body2" color="#a9b1d6" sx={{ mt: 2 }}>
              Transforming data into intelligent solutions
            </Typography>
          </Grid>

          {/* Explore Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Explore
            </Typography>
            <List>
              {['Home', 'Projects', 'Certificates', 'About', 'Contact'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                    sx={{
                      color: '#a9b1d6',
                      py: 0.5,
                      '&:hover': { color: '#fff' }
                    }}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="mailto:umarahadusmani@gmail.com"
                  sx={{ color: '#a9b1d6', py: 0.5, '&:hover': { color: '#fff' } }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Email fontSize="small" sx={{ color: '#6366f1' }} />
                  </ListItemIcon>
                  <ListItemText primary="umarahadusmani@gmail.com" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="tel:+923334739757"
                  sx={{ color: '#a9b1d6', py: 0.5, '&:hover': { color: '#fff' } }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Phone fontSize="small" sx={{ color: '#6366f1' }} />
                  </ListItemIcon>
                  <ListItemText primary="+92 333 4739757" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>

          {/* Legal Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Legal
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/terms"
                  sx={{ color: '#a9b1d6', py: 0.5, '&:hover': { color: '#fff' } }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Gavel fontSize="small" sx={{ color: '#6366f1' }} />
                  </ListItemIcon>
                  <ListItemText primary="Terms & Conditions" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/privacy"
                  sx={{ color: '#a9b1d6', py: 0.5, '&:hover': { color: '#fff' } }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Security fontSize="small" sx={{ color: '#6366f1' }} />
                  </ListItemIcon>
                  <ListItemText primary="Privacy Policy" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" color="#a9b1d6" align="center">
            © {new Date().getFullYear()} Umar Ahad. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 