import { ThemeOptions } from '@mui/material/styles';
import {createTheme} from "@mui/material";

const themeOptions: ThemeOptions = {
  typography: {
    h1: {
      fontSize: '48px',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '32px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '22px',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '16px',
      fontWeight: '300',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1E0A3C',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

export const theme = createTheme(themeOptions);
