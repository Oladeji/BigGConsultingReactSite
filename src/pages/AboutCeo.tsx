import React from 'react';
import { Container, Box, Typography, Avatar, Chip } from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';


const ceoImage = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80'; // Replace with real CEO image if available

const AboutCeo: React.FC = () => {
  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      {/* Hero & Professional Summary */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 6,
          background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)',
          borderRadius: 4,
          boxShadow: 4,
          py: 6,
          px: { xs: 2, md: 6 },
        }}
      >
        <Avatar
          src={ceoImage}
          alt="Dr. Oladeji"
          sx={{ width: 140, height: 140, mb: 2, boxShadow: 6, border: '4px solid #fff' }}
        />
        <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main', mb: 1, letterSpacing: 1, textShadow: '0 2px 8px #e3f2fd' }}>
          Oladeji PhD
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'secondary.main', fontWeight: 700, mb: 2, fontSize: 22, letterSpacing: 0.5 }}>
          Full-Stack Software Engineer &mdash; C#/.NET, React, AWS & Azure, Cloud-Native Apps
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, textAlign: 'center', color: 'text.secondary', mb: 2, fontSize: 18, lineHeight: 1.7 }}>
          Results-driven software engineer with years of experience building scalable, cloud-native web applications. Proven expertise in .NET Core, React, Docker, and cloud infrastructure (AWS & Azure). Adept at Agile delivery, CI/CD pipelines, and driving innovative digital solutions. Passionate about performance optimization, clean architecture, and cross-functional collaboration.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Chip label="Cloud Architect" color="primary" sx={{ fontWeight: 600, fontSize: 16 }} />
          <Chip label="DevOps Enthusiast" color="secondary" sx={{ fontWeight: 600, fontSize: 16 }} />
          <Chip label="Tech Leader" sx={{ fontWeight: 600, fontSize: 16, background: '#fff3e0', color: '#ff9800' }} />
        </Box>
      </Box>

      {/* Technical Skills */}
      <Box sx={{ mb: 6, background: 'linear-gradient(90deg, #f3e5f5 0%, #e3f2fd 100%)', borderRadius: 3, p: 4, boxShadow: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'primary.main', letterSpacing: 1 }}>
          Technical Skills
        </Typography>
        <Box component="ul" sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 1.5,
          color: '#444',
          fontSize: 17,
          pl: 3,
          mb: 0,
        }}>
          <li><b>Languages & Frameworks:</b> C#, .NET Core, ASP.NET, JavaScript, TypeScript, React, Angular, Python, Django</li>
          <li><b>Cloud & DevOps:</b> AWS, Azure, Docker, Jenkins, Terraform, Kubernetes, Git</li>
          <li><b>Databases:</b> SQL Server, PostgreSQL, MySQL</li>
          <li><b>Monitoring & Testing:</b> Grafana, Jaeger, Optimizely, Tealium, Unit Testing, Integration Testing</li>
          <li><b>Tools & Other Tech:</b> Kafka, Nginx, Linux, R, Pandas, Numpy</li>
        </Box>
      </Box>

      {/* Professional Experience */}
      <Box sx={{ mb: 6, background: 'linear-gradient(90deg, #e3f2fd 0%, #fce4ec 100%)', borderRadius: 3, p: 4, boxShadow: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'primary.main', letterSpacing: 1 }}>
          Professional Experience
        </Typography>
        <Box sx={{ mb: 3, pl: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.dark' }}>Massload Technologies, Saskatoon Canada</Typography>
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Senior Software Engineer Developer <span style={{ color: '#1976d2' }}>| Sept 2023 - Present</span></Typography>
          <ul style={{ marginLeft: 24, marginBottom: 0 }}>
            <li>Led the upgrade and maintenance of legacy systems, enhancing performance and scalability.</li>
            <li>Authored Software Design and Architectural Documentation for new features.</li>
            <li>Implemented CI/CD pipelines with Jenkins and Docker.</li>
            <li><b>Technologies:</b> C#, .NET, TypeScript, React, Git, Docker, Grafana, Jaeger</li>
          </ul>
        </Box>
        <Box sx={{ mb: 3, pl: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.dark' }}>TotalJobs Group, London, UK</Typography>
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Software Engineer <span style={{ color: '#1976d2' }}>| Dec 2022 - July 2023</span></Typography>
          <ul style={{ marginLeft: 24, marginBottom: 0 }}>
            <li>Worked with cross functional teams to deliver scalable solution using Optimizely for A/B Testing and Feature Flagging, and Tealium for Tracking.</li>
            <li>Responded to tech delivery challenges.</li>
            <li>Collaborated with cross-functional teams to gather and analyse requirements for software projects.</li>
            <li>Designed and developed scalable software solutions using C#, Kafka, and AWS, resulting in reduced data transfer size and improved performance.</li>
            <li>Conducted thorough code reviews and implemented best practices to ensure code quality and maintainability.</li>
            <li><b>Technologies:</b> Optimizely, Tealium, C#, .NET, Node, Kafka, AWS, Git, Docker</li>
          </ul>
        </Box>
        <Box sx={{ mb: 3, pl: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.dark' }}>Oakbrook Finance, Nottingham, UK</Typography>
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Senior Software Engineer Developer <span style={{ color: '#1976d2' }}>| June 2022 - Dec 2022</span></Typography>
          <ul style={{ marginLeft: 24, marginBottom: 0 }}>
            <li>Built consumer lending platform using .NET Core and React.</li>
            <li>Supported platform release cycles and code deployments.</li>
            <li><b>Technologies:</b> .NET Core, React, Bitbucket</li>
          </ul>
        </Box>
        <Box sx={{ mb: 1, pl: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.dark' }}>BigG Consulting, Ibadan, Nigeria</Typography>
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Full-stack Software Engineer Developer <span style={{ color: '#1976d2' }}>| Sept 2016 - Jan 2022</span></Typography>
          <ul style={{ marginLeft: 24, marginBottom: 0 }}>
            <li>Designed and implemented multiple enterprise web applications (on-premise and cloud).</li>
            <li>Developed REST APIs with .NET Core and Django for student services platforms.</li>
            <li>Led frontend development using Angular and React.</li>
            <li>Deployed applications on Azure and configured Git for version control.</li>
          </ul>
          <Typography variant="body2" sx={{ fontWeight: 600, mt: 1, color: 'secondary.main' }}>Key Projects:</Typography>
          <ul style={{ marginLeft: 36, marginBottom: 0 }}>
            <li>Result Processing System: Integrated .NET Core APIs with Django frontend.</li>
            <li>Course Registration Platform: C#/ASP.NET backend with Angular frontend.</li>
            <li>Transcript & Certificate Generator: Built using Windows Forms and .NET Core.</li>
          </ul>
        </Box>
      </Box>



      {/* Certifications */}
      <Box sx={{ mb: 6, background: 'linear-gradient(90deg, #fce4ec 0%, #e3f2fd 100%)', borderRadius: 3, p: 4, boxShadow: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'primary.main', letterSpacing: 1 }}>
          Certifications
        </Typography>
        <Box component="ul" sx={{
          color: '#555',
          fontSize: 17,
          pl: 3,
          mb: 0,
        }}>
          <li>AWS Certified Cloud Practitioner – Issued June 2023</li>
          <li>Akamai Web Performance Foundations – Issued June 2023</li>
          <li>Linux Foundation Certified Associate (LFCA) – Issued May 2022</li>
          <li>Microsoft Certified: Azure Fundamentals – Issued Feb 2021</li>
        </Box>
      </Box>


      {/* Contact Section */}
      <Box sx={{ mb: 6, textAlign: 'center', background: 'linear-gradient(90deg, #e3f2fd 0%, #fff 100%)', borderRadius: 3, py: 4, boxShadow: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'primary.main', letterSpacing: 1, fontSize: 28 }}>
          Contact
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', mb: 2 }}>
          <Chip icon={<EmailIcon />} label="akomspatrick@yahoo.com" color="primary" variant="outlined" sx={{ fontSize: 18, px: 2, py: 1, boxShadow: 1, background: '#fff' }} />
        </Box>
        <Typography variant="body1" sx={{ color: 'primary.dark', mt: 2, fontWeight: 600, fontSize: 18 }}>
          Let's connect to build something amazing together!
        </Typography>
      </Box>

    
    </Container>
  );
};

export default AboutCeo;
