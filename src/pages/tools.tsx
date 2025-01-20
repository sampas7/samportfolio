import Header from '../components/Header'; // Importe o Header
import Footer from '../components/Footer'; // Importe o Footer
import Head from 'next/head';

const Tools = () => {
  return (
    <div>
      <Head>
        <title>Ferramentas</title>
        <meta name="description" content="Ferramentas que o Sampas utiliza" />
        <link rel="icon" href="/icons/mindsamp.png" />
      </Head>


      <Header />
      <main>
        {/* Conteúdo da página de ferramentas será adicionado futuramente */}
      </main>
      <Footer />
    </div>
  );
};

export default Tools;