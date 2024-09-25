import { createTheme } from '@mui/material/styles';
import { green, indigo, blueGrey } from '@mui/material/colors';

export const MyTheme = createTheme({
  palette: {
    background: {
      default: blueGrey[50],
    },
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: green[500],
    },
    text: {
      primary: indigo[500],
      secondary: 'rgba(132, 146, 166, 1)',
      disabled: 'rgba(60, 72, 88, 0.38)',
    },
  },
  typography: {
    fontFamily: 'Fira Code, monospace',
  },
});
export default MyTheme;
