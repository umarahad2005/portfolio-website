import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const isActive = (path) => {
    return location.pathname === path;
  };

  const NavButton = ({ to, children }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        component={Link}
        to={to}
        sx={{
          ml: { xs: 1, md: 2 },
          color: 'white',
          position: 'relative',
          fontSize: { xs: '0.9rem', md: '1rem' },
          fontWeight: isActive(to) ? '600' : '400',
          padding: { xs: '6px 8px', md: '8px 16px' },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: isActive(to) ? '100%' : '0%',
            height: '2px',
            bottom: '0',
            left: '0',
            backgroundColor: '#6366f1',
            transition: 'width 0.3s ease'
          },
          '&:hover::after': {
            width: '100%'
          }
        }}
      >
        {children}
      </Button>
    </motion.div>
  );

  return (
    <AppBar position="fixed" sx={{ 
      backgroundColor: 'rgba(10, 10, 31, 0.8)', 
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Container>
        <Toolbar sx={{ 
          py: 1,
          justifyContent: 'space-between',
          flexWrap: 'nowrap'
        }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: 'white',
              fontFamily: 'monospace',
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}
          >
            {'{ meet(umar).dev }'}
          </Typography>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: isMobile ? '8px' : '16px'
          }}>
            <NavButton to="/">HOME</NavButton>
            <NavButton to="/about">ABOUT</NavButton>
            <NavButton to="/projects">PROJECTS</NavButton>
            <NavButton to="/certificates">CERTIFICATES</NavButton>
            <NavButton to="/resume">RESUME</NavButton>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                component={Link} 
                to="/contact" 
                variant="contained"
                sx={{ 
                  ml: { xs: 1, md: 2 },
                  backgroundColor: '#6366f1',
                  color: 'white',
                  padding: { xs: '8px 12px', md: '8px 20px' },
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: '#4f46e5',
                    boxShadow: '0 6px 20px rgba(99, 102, 241, 0.6)'
                  }
                }}
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 