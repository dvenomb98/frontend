import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from '../config/chakra';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <main className="flex flex-col min-h-screen">
          <Component {...pageProps} />
        </main>
      </ChakraBaseProvider>
    </>
  );
};

export default App;
