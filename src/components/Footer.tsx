import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const router = useRouter();
  const isHome = router.pathname === '/home';

  return (
    <footer className={`${styles.footer} ${isHome ? styles.relative : styles.fixed}`}>
      <p>Samportfólio. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
