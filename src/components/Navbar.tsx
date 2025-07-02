// ...existing code...
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Technologies', path: '/technologies' },
  { label: 'Contact', path: '/contact' },
];


import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen((open) => !open);

  return (
    <AppBar position="sticky" color="primary" elevation={2}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
          BigGConsulting
        </Typography>
        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              component={RouterLink}
              to={link.path}
              color="inherit"
              sx={{ mx: 1, fontWeight: 500 }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        {/* Mobile Hamburger */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 220 }} role="presentation" onClick={handleDrawerToggle}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.path} disablePadding>
                <ListItemButton component={RouterLink} to={link.path}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
