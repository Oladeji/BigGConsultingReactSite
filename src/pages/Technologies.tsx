import React from 'react';
import { Container, Typography, Box } from '@mui/material';


const Technologies: React.FC = () => {
  const techStack = [
    'React', 'TypeScript', 'Node.js', 'Python', 'C#', 'Django', '.NET', 'Docker', 'Kubernetes', 'Azure', 'AWS', 'SQL',
    'Microservices', 'Event Sourcing', 'Telemetry', 'gRPC', 'Kafka', 'RabbitMQ', 'Redis', 'MongoDB', 'CI/CD', 'Prometheus', 'Grafana', 'OpenTelemetry', 'ElasticSearch', 'Serverless', 'API Gateway', 'OAuth2', 'WebSockets', 'SaaS', 'PaaS', 'IaaS'
  ];
  return (
    <Container>
      <Box my={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 900, color: 'primary.main', mb: 2, letterSpacing: 1 }}>
          Our Technology Ecosystem
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', color: 'secondary.main', mb: 3, textAlign: 'center', fontWeight: 600 }}>
          Building mature, scalable, and observable systems with modern tools and proven patterns.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', color: 'text.secondary', mb: 2, textAlign: 'center' }}>
          We architect solutions using a robust mix of cloud platforms, programming languages, and architectural patterns. Our expertise includes microservices, event sourcing, telemetry, and distributed systems, ensuring your business is ready for scale, reliability, and insight.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 2 }}>
          {techStack.map((tech) => (
            <Box key={tech} sx={{ bgcolor: 'primary.light', color: 'primary.contrastText', px: 2.5, py: 1.2, borderRadius: 2, fontWeight: 700, fontSize: 18, boxShadow: 1, mb: 1 }}>
              {tech}
            </Box>
          ))}
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

export default Technologies;

