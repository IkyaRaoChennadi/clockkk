// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e88e5', // Blue color for primary
    },
    secondary: {
      main: '#d32f2f', // Red color for secondary
    },
    background: {
      default: '#f3f4f6', // Light gray background
    },
    text: {
      primary: '#333', // Dark text color
    },
  },
  typography: {
    h3: {
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold',
      color: '#1e88e5', // Blue color for headings
    },
    body1: {
      fontFamily: 'Arial, sans-serif',
      color: '#333', // Dark text color
    },
  },
});

export default theme;
