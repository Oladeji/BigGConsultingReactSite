
import React, { useState } from 'react';
import { Container, Typography, Box, IconButton, Fade } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import ProjectCard from '../components/ProjectCard';

const projectData = [
  {
    title: "Student Portal & Transcript App",
    description: "Built using Angular, ASP.NET Core, and MSSQL for student management.",
    image: "https://source.unsplash.com/400x300/?portal"
  },
  {
    title: "Result Processing Tool",
    description: "Python/Django + .NET backend for academic results generation.",
    image: "https://source.unsplash.com/400x300/?analytics"
  },
  {
    title: "Cloud-based Course Registration",
    description: "Hosted on Azure with React frontend and secure API backend.",
    image: "https://source.unsplash.com/400x300/?cloud"
  }
];


const Projects: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = projectData.length;

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <Container sx={{ mt: 8, mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 800, letterSpacing: 1, mb: 4, color: 'primary.main' }}>
        Our Projects
      </Typography>
      <Typography variant="h6" align="center" sx={{ color: 'text.secondary', mb: 6, maxWidth: 700, mx: 'auto' }}>
        Explore some of our recent work, crafted with modern technologies and a passion for excellence.
      </Typography>
      <Box sx={{ position: 'relative', width: { xs: '100%', sm: 420 }, minHeight: 420, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
        <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', bgcolor: 'background.paper', boxShadow: 2, zIndex: 2 }}>
          <ArrowBackIos />
        </IconButton>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Fade in timeout={400} key={current}>
            <Box>
              <ProjectCard
                title={projectData[current].title}
                description={projectData[current].description}
                image={projectData[current].image}
              />
            </Box>
          </Fade>
        </Box>
        <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', bgcolor: 'background.paper', boxShadow: 2, zIndex: 2 }}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 1 }}>
        {projectData.map((_, idx) => (
          <Box key={idx} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: idx === current ? 'primary.main' : 'grey.400', transition: 'all 0.3s' }} />
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
