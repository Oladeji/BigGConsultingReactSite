import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <Container>
      <Box my={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 900, color: 'primary.main', mb: 2, letterSpacing: 1 }}>
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', color: 'secondary.main', mb: 3, textAlign: 'center', fontWeight: 600 }}>
          Let's connect and build something great together.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', color: 'text.secondary', mb: 4, textAlign: 'center' }}>
          Have a question or want to work with us? Fill out the form below and our team will get back to you soon.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Contact" style={{ width: 120, height: 80, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Team" style={{ width: 120, height: 80, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
        </Box>
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <ContactForm />
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
