import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  
  palette: {
    primary: {
        // Outer Space Crayola Gree
      main: '#283D3B'
    },
    secondary: {
        // Skobeloff Teal
      main: '#197278'
    },
    error: {
        // Liver Organ Red
      main: '#772E25'
    }
  },
  
  typography: {
    fontFamily: [
      'Lucida Console',
      'Monaco',
      'monospace'
    ].join(','),
  }
});

export default theme;