import Header from '../components/Header'; // Importe o Header
import Footer from '../components/Footer'; // Importe o Footer
import styles from '@/styles/Projects.module.css';
import Head from 'next/head';

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projetos</title>
        <meta name="description" content="Projetos do Sampas (apenas, você sabe)" />
        <link rel="icon" href="/icons/mindsamp.png" />
      </Head>

      <Header />
      <main>
        <div className={styles.titleText}>
          <p className={styles.titlePage}>Dá um check nos projetos que mostram meu trabalho</p>
        </div>

        <section className={styles.projectsContainer}>
          <div className={styles.projectBox}>
            <h2 className={styles.title}>Em construção...</h2>
            <p className={styles.description}>
              Por enquanto, só ideias fluindo na mente. Fique de olho, porque o Sampas tá trabalhando!
            </p>
          </div>

          <div className={styles.projectBox}>
            <h2 className={styles.title}>Em construção...</h2>
            <p className={styles.description}>
              Por enquanto, só ideias fluindo na mente. Fique de olho, porque o Sampas tá trabalhando!
            </p>
          </div>

          <div className={styles.projectBox}>
            <h2 className={styles.title}>Em construção...</h2>
            <p className={styles.description}>
              Por enquanto, só ideias fluindo na mente. Fique de olho, porque o Sampas tá trabalhando!
            </p>
          </div>

          <div className={styles.projectBox}>
            <h2 className={styles.title}>Em construção...</h2>
            <p className={styles.description}>
              Por enquanto, só ideias fluindo na mente. Fique de olho, porque o Sampas tá trabalhando!
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Projects;