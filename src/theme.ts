import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff9800',
    },
    background: {
      default: '#f4f6f8',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: 18,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

export default theme;
