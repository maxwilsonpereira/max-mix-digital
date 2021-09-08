// npm install @material-ui/core
import { createTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import * as Font from './fonts';

// Create a theme instance.
const theme = createTheme({
  overrides: {
    MuiPickersDay: {
      day: {
        color: grey[700],
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        color: grey[700],
      },
    },
  },
  palette: {
    primary: {
      main: '#005DF9',
    },
    secondary: {
      main: '#00F0AD',
    },
    error: {
      main: '#ED3232',
    },
    text: {
      primary: '#fff',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: Font.MAIN_REGULAR,
    fontSize: 10,
    subtitle1: {
      fontSize: 16,
      fontFamily: Font.NUNITO,
    },
    body1: {
      fontSize: 14,
      fontFamily: Font.NUNITO,
    },
    body2: {
      fontSize: 12,
      fontFamily: Font.NUNITO,
    },
    h2: {
      fontFamily: Font.MAIN_BOLD,
    },
    h3: {
      fontFamily: Font.MAIN_MEDIUM,
      fontSize: 28,
    },
  },
});

export default theme;
