import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <Container>
      <Box my={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 900, color: 'primary.main', mb: 2, letterSpacing: 1 }}>
          About Us
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', color: 'secondary.main', mb: 3, textAlign: 'center', fontWeight: 600 }}>
          Empowering businesses with technology, expertise, and partnership.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary', mb: 2, textAlign: 'center' }}>
          BiggConsulting is dedicated to providing expert IT consulting and software development services. Our team specializes in cloud, DevOps, and full-stack engineering, delivering modern, scalable solutions tailored to your business needs.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary', mb: 2, textAlign: 'center' }}>
          We are experts in cloud platforms such as <b>Microsoft Azure</b> and <b>AWS</b>, designing cloud-native and hybrid architectures for reliability, scalability, and security. Our solutions leverage the best of cloud services—compute, storage, networking, serverless, and managed databases—to accelerate your digital transformation and innovation.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary', textAlign: 'center' }}>
          We believe in building long-term partnerships and empowering our clients with the latest technology and best practices.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mt: 4 }}>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Team" style={{ width: 140, height: 90, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Strategy" style={{ width: 140, height: 90, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="body1" align="center" sx={{ color: 'primary.main', fontWeight: 600 }}>
            <Link to="/about-ceo" style={{ textDecoration: 'none', color: 'inherit', borderBottom: '2px solid #1976d2', paddingBottom: 2, transition: 'border-color 0.2s' }}>
              Learn more <span style={{ fontWeight: 800 }}>About our CEO</span>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
