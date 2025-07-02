import React from 'react';
import { Box, Typography, Container } from '@mui/material';


const Hero: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <Box sx={{
      py: { xs: 2, md: 3 },
      background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)',
      color: 'primary.main',
      textAlign: 'center',
      borderRadius: 3,
      boxShadow: 2,
      mb: 2,
    }}>
      <Container>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, letterSpacing: 1, color: 'primary.main', textShadow: '0 1px 4px #e3f2fd', fontSize: 22, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, mb: 1, color: 'secondary.main', fontWeight: 600, fontSize: 15 }}>
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
