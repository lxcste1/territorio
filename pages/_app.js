import '@/styles/globals.css'

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/src/theme';
import Header from '@/components/Header/Header';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
    </ThemeProvider>
  )
  
}
