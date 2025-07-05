import React from 'react';
import { Box, Typography, Container } from '@mui/material';


const Hero: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <Box sx={{
      py: { xs: 6, md: 10 },
      background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)',
      color: 'primary.main',
      textAlign: 'center',
      borderRadius: 4,
      boxShadow: 4,
      mb: 4,
    }}>
      <Container>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 900, letterSpacing: 1, color: 'primary.main', textShadow: '0 2px 8px #e3f2fd', fontSize: 38, mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.9, mb: 2, color: 'secondary.main', fontWeight: 700, fontSize: 24 }}>
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
