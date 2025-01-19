import Header from '../components/Header'; // Importe o Header
import Footer from '../components/Footer'; // Importe o Footer
import styles from '@/styles/Home.module.css';
import Head from 'next/head';

const Initial = () => {
  return (
    <div>
      <Head>
      <title>Samportfólio</title>
      <meta name="description" content="Portfólio do Sampas (apenas, você sabe)" />
      <link rel="icon" href="/icons/mindsamp.png" />
      </Head>

      <Header />
      <main>
        <div className={styles.landingPage}>
          <p className={styles.midName}>Esse é o Samportfólio!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Initial;
