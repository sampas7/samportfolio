import { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
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