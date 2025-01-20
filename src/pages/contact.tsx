import Header from '../components/Header'; // Importe o Header
import Footer from '../components/Footer'; // Importe o Footer
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
        {/* Conteúdo da página de contato será adicionado futuramente */}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;