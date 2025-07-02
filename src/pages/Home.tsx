import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Hero
        title="Consulting & Software Development"
        subtitle="Delivering scalable, modern solutions with cloud, DevOps, and full-stack engineering"
      />
      <Container sx={{ maxWidth: 500, p: 0 }}>
        <Box my={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 1, fontSize: 22 }}>
            Welcome to BigGConsulting
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: 350, mx: 'auto', color: 'text.secondary', mb: 2, textAlign: 'center', fontSize: 14 }}>
            We are a team of passionate engineers and consultants delivering scalable, modern solutions for your business. Explore our services, projects, and technologies to see how we can help you grow.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', mb: 2 }}>
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Cloud" style={{ width: 70, height: 45, borderRadius: 8, objectFit: 'cover', boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }} />
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Teamwork" style={{ width: 70, height: 45, borderRadius: 8, objectFit: 'cover', boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }} />
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Development" style={{ width: 70, height: 45, borderRadius: 8, objectFit: 'cover', boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }} />
          </Box>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 600, fontSize: 12 }}>
              Cloud&nbsp;•&nbsp;DevOps&nbsp;•&nbsp;Full-Stack&nbsp;•&nbsp;Consulting
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
