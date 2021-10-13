import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: "'Inter', sans-serif;",
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    subtitle1: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.6rem',
    },
  },
  palette: {
    primary: { main: '#0A0C1B' },
    secondary: { main: '#AE1FEB' },
    text: {
      primary: '#fff',
      secondary: 'hsl(218, 22%, 67%)',
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: '1.4rem',
          fontWeight: 400,
          color: '#0A0C1B',
          backgroundColor: '#fff',
          padding: '.5rem 1rem',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px 0 rgb(17 68 153 / 15%)',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: '#fff',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#fff',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#0A0C1B',
        },
      },
    },
  },
});

export default theme;
