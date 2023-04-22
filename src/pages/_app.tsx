import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import THEME from '../theme/material';
import Navbar from '@/components/navbar/Navbar';
import { UserProvider } from '@/context/userContext';
import { SnackbarProvider } from 'notistack';
import Footer from '@/components/footer/Footer';
import AuthLoader from '@/components/atoms/AuthLoader';
import { DefaultSeo } from 'next-seo';
import { GLOBAL_SEO } from '@/constants/globals';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...GLOBAL_SEO} />
      <UserProvider>
        <ThemeProvider theme={THEME}>
          <SnackbarProvider maxSnack={2} autoHideDuration={3000}>
            <main className="flex flex-col min-h-screen">
              <Navbar />
              <Component {...pageProps} />
            </main>
            <Footer />
            <AuthLoader />
          </SnackbarProvider>
        </ThemeProvider>
      </UserProvider>
    </>
  );
};

export default App;
