import { createTheme } from '@mui/material/styles';

// Brand Colors
const primaryColor = '#ffffff';
const secondaryColor = '#A88F61';
const accentColor = '#E7C24F';
const blackColor = '#000000';
const whiteColor = '#ffffff';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    accent: {
      main: accentColor,
    },
    background: {
      default: '#F4F4F4',
    },
    button: {
      primary: blackColor,
      secondary: whiteColor,
    },
  
    text: {
      primary: '#333333',
      secondary: secondaryColor,
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: primaryColor,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: primaryColor,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      color: blackColor,
    },
    body1: {
      fontSize: '1rem',
      color: blackColor,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
