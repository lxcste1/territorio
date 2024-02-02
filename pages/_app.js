import '@/styles/globals.css'

import Head from 'next/head';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/src/theme';
import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <Head>
          <title>Territorio Bohemian</title>
          <meta name="description" content="Bienvenidos a Territorio Bohemian!" />
          <meta property="og:title" content="Territorio Bohemian" />
          <meta property="og:description" content="Bienvenidos a Territorio Bohemian!" />
          <meta property="og:image" content="/315x315.svg" />
          <meta property="og:url" content="https://territorio-bohemian.vercel.app/" />
          <meta property="og:type" content="website" />
        </Head>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
    </ThemeProvider>
  )
  
}
