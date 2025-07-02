import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer: React.FC = () => (
  <Box
    sx={{
      bgcolor: 'primary.main',
      color: 'white',
      py: 2,
      mt: 'auto',
      width: '100%',
      position: 'relative',
      bottom: 0,
      left: 0,
    }}
    component="footer"
  >
    <Container maxWidth="lg">
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} BiggConsulting. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
