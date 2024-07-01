import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DBA979',
    },
    secondary: {
      main: '#C65BCF',
    },
    success:{
      main: '#90D26D',
    },
  },
  typography: {
    h1:{
      fontSize: '2.5rem',
    },
    h2:{
      fontSize:'2rem'
    },
    h3:{
      fontSize:'1.8rem'
    },
    h4:{
      fontSize:'1.5rem'
    }
  },
});
export default theme;
