import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
      <title>Samportfólio</title>
      <meta name="description" content="Portfólio do Sampas (apenas, você sabe)" />
      <link rel="icon" href="/icons/mindsamp.png" />
      </Head>

      <Header />
      <main>

      <div className={styles['image-container']}>
        <Image
            src="/images/my-image.jpg"
            alt="Header 01"
            layout="fill"
            objectFit="cover"
            objectPosition="50% -350px"
        />
      </div>

      <div className={styles.profileContainer}>
            <Image
              src="/images/profile.jpg"
              alt="sampas"
              className={styles.profileImage}
              width={350}
              height={350}
            />
      </div>

      <div className={styles.profileDescription}>
        <p className={styles.name}>Daniel Sampaio <span className={styles.separator}>|</span> <span className={styles.nickname}>Sampas</span></p>
        <p className={styles.username}>@sampasx</p>
        <p className={styles.profession}>Desenvolvedor Back-End, Criador de Ideias e Artista</p>
      </div>

      </main>
      <Footer />
    </div>
  );
};

export default Home;