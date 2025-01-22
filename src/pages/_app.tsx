import { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>

      <main>
        <Component {...pageProps} />
      </main>

    </>
  );
};

export default MyApp;