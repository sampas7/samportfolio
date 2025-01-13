import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
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

      </main>
      <Footer />
    </div>
  );
};

export default Home;
