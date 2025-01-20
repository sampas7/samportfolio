import styles from '@/styles/Landing.module.css';
import Head from 'next/head';
import Link from 'next/link';

const Landing = () => {
  return (
    <div>
      <Head>
        <title>Samportfólio</title>
        <meta name="description" content="Portfólio do Sampas (apenas, você sabe)" />
        <link rel="icon" href="/icons/mindsamp.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Esse é o Samportfólio</h1>
        <Link href="/home">
          <button className={styles.button}>Acessar</button>
        </Link>
      </main>
    </div>
  );
};

export default Landing;
