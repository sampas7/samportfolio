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

      <section className={styles.aboutMe}>
        <h2 className={styles.title}>Sobre mim: o Dev e o Artista.</h2>
        <p className={styles.description}>
          Bom, eu sou o Sampas, mas algumas pessoas me conhecem como Daniel Sampaio (ou seria o contrário?).<br /><br />
          Movido por ideias e desafios, sempre busco transformar pensamentos em algo único, seja escrevendo linhas de código ou linhas de rap. Minha paixão está no equilíbrio entre tecnologia e criatividade, onde cada projeto é uma extensão de quem eu sou.<br /><br />
          Atualmente estou cursando Bacharelado em Sistemas de Informação pelo IF Baiano - Campus Itapetinga. Minha preferência é pelo back-end, onde trabalho com tecnologias como Node.js, Java e Python. Também tenho experiência com TypeScript e estou sempre buscando aprender mais e melhorar minhas habilidades. Mesmo assim, gosto de explorar o front-end quando necessário, trabalhando com o Figma para design e prototipação de telas e utilizando React e Next.js para entregar experiências completas.<br /><br />
          Pra mim, cada linha de código é uma peça de algo maior. Mais que resolver problemas, eu quero criar soluções que tenham impacto e façam sentido.
        </p>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default Home;