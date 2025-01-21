import Header from '../components/Header'; // Importe o Header
import Footer from '../components/Footer'; // Importe o Footer
import styles from '@/styles/Tools.module.css';
import Head from 'next/head';

const Tools = () => {
  const tools = [
    { icon: '/icons/tool1.svg', name: 'Java' },
    { icon: '/icons/tool2.svg', name: 'Python' },
    { icon: '/icons/tool3.svg', name: 'Node.JS' },
    { icon: '/icons/tool4.svg', name: 'mySQL' },
    { icon: '/icons/tool5.svg', name: 'HTML5' },
    { icon: '/icons/tool6.svg', name: 'CSS3' },
    { icon: '/icons/tool7.svg', name: 'JavaScript' },
    { icon: '/icons/tool8.svg', name: 'TypeScript' },
    { icon: '/icons/tool9.svg', name: 'Figma' },
    { icon: '/icons/tool10.svg', name: 'React' },
    { icon: '/icons/tool11.svg', name: 'Next.JS' },
    { icon: '/icons/tool12.svg', name: 'Git/GitHub' },
  ];

  return (
    <div>
      <Head>
        <title>Ferramentas</title>
        <meta name="description" content="Ferramentas que o Sampas utiliza" />
        <link rel="icon" href="/icons/mindsamp.png" />
      </Head>

      <Header />
      <main>
        <div className={styles.titleText}>
          <p className={styles.titlePage}>Minhas aliadas no dia a dia</p>
        </div>

        <div className={styles.toolsContainer}>
          <div className={styles.card}>
            {[0, 1, 2].map((rowIndex) => (
              <div className={styles.row} key={rowIndex}>
                {tools
                  .slice(rowIndex * 4, rowIndex * 4 + 4) // Seleciona 4 ferramentas por linha
                  .map((tool, index) => (
                    <div className={styles.square} key={index}>
                      <img
                        src={tool.icon}
                        alt={`Ícone da ferramenta ${index + 1}`}
                        className={styles.icon}
                      />
                      <div className={styles.toolName}>{tool.name}</div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
