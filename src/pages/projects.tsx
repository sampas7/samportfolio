import Header from '../components/Header'; // Importe o Header
import Footer from '../components/Footer'; // Importe o Footer
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
        {/* Conteúdo da página de projetos será adicionado futuramente */}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;