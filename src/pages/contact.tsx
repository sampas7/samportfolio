import Header from '../components/Header'; // Importe o Header
import Footer from '../components/Footer'; // Importe o Footer
import styles from '@/styles/Contact.module.css';
import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Entre em contato com o Sampas (apenas, você sabe)" />
        <link rel="icon" href="/icons/mindsamp.png" />
      </Head>

      <Header />
      <main>
        <div className={styles.titleText}>
          <p className={styles.titlePage}>Dúvidas, ideias ou um papo descontraído? Me chama aí!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;