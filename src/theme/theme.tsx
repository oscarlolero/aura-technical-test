import { ThemeOptions } from '@mui/material/styles';
import {createTheme} from "@mui/material";

const themeOptions: ThemeOptions = {
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
