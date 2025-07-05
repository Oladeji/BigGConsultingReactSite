import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box
} from '@mui/material';

type ProjectCardProps = {
  title: string;
  description: string;
  image?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 380,
        width: '100%',
        height: '100%',
        borderRadius: 5,
        boxShadow: 6,
        transition: 'transform 0.25s, box-shadow 0.25s',
        '&:hover': {
          transform: 'translateY(-10px) scale(1.03)',
          boxShadow: 12,
        },
        background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)',
        p: 0,
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={ 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80'}
        alt="Project preview"
        sx={{ objectFit: 'cover', filter: 'brightness(0.95) saturate(1.1)' }}
      />
      <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          mb: 1.5,
        }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 900,
              color: 'primary.main',
              letterSpacing: 1,
              fontSize: 22,
              px: 2,
              py: 0.5,
              borderRadius: 2,
              background: 'linear-gradient(90deg, #e3f2fd 60%, #fff 100%)',
              boxShadow: 1,
              minWidth: 0,
              maxWidth: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
