import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Services: React.FC = () => {
  return (
    <Container>
      <Box my={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 900, color: 'primary.main', mb: 2, letterSpacing: 1 }}>
          Our Services
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', color: 'secondary.main', mb: 3, textAlign: 'center', fontWeight: 600 }}>
          Comprehensive solutions for your digital transformation.
        </Typography>
        <Box sx={{ maxWidth: 700, mx: 'auto', width: '100%' }}>
          <ul style={{ color: '#555', fontSize: 18, lineHeight: 1.7, margin: 0, padding: 0, listStyle: 'none' }}>
            <li style={{ marginBottom: 12 }}><b>Custom Software Development</b> – Tailored apps for your business needs</li>
            <li style={{ marginBottom: 12 }}><b>Cloud Solutions & Migration</b> – Scalable, secure, and cost-effective</li>
            <li style={{ marginBottom: 12 }}><b>DevOps & Automation</b> – Faster delivery, higher quality</li>
            <li style={{ marginBottom: 12 }}><b>Web & Mobile App Development</b> – Modern, responsive, user-friendly</li>
            <li style={{ marginBottom: 12 }}><b>IT Consulting & Strategy</b> – Expert guidance for your growth</li>
            <li style={{ marginBottom: 12 }}><b>Data Analytics & AI</b> – Insights and automation for smarter decisions</li>
          </ul>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mt: 4 }}>
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Cloud" style={{ width: 120, height: 80, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="DevOps" style={{ width: 120, height: 80, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Development" style={{ width: 120, height: 80, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
        </Box>
      </Box>
    </Container>
  );
};

export default Services;
