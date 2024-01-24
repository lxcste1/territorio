import { Aleo } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const aleo = Aleo({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: aleo.style.fontFamily,
  },
});

export default theme;