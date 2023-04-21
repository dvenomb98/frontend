import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import THEME from '../theme/material';
import Navbar from '@/components/navbar/Navbar';
import { UserProvider } from '@/context/userContext';
import FullPageLoader from '@/components/atoms/FullPageLoader';
import { SnackbarProvider } from 'notistack';
import Footer from '@/components/footer/Footer';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <ThemeProvider theme={THEME}>
        <SnackbarProvider maxSnack={2} autoHideDuration={2000}>
          <main className="flex flex-col min-h-screen">
            <Navbar />
            <Component {...pageProps} />
          </main>
          <Footer />
          <FullPageLoader />
        </SnackbarProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
